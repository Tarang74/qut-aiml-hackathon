# ── Stage 1: build the React / Vite frontend ───────────────────────────────
FROM node:25-alpine AS frontend
WORKDIR /build
COPY client/package.json client/package-lock.json* ./
RUN npm ci
COPY client/ .
RUN npm run build

# ── Stage 2: build the Rust binary ─────────────────────────────────────────
FROM rust:1.91-slim-bookworm AS backend
WORKDIR /build

# Compile dependencies with a dummy main so this layer is cached separately
# from source changes. Only re-runs when Cargo.toml / Cargo.lock change.
COPY server/Cargo.toml server/Cargo.lock* ./
RUN mkdir -p src && \
    echo 'fn main() {}' > src/main.rs && \
    cargo build --release && \
    rm -rf src

COPY server/src ./src
# Touch main.rs so cargo sees the source as newer than the cached deps.
RUN touch src/main.rs && cargo build --release

# ── Stage 3: minimal runtime image ─────────────────────────────────────────
FROM debian:bookworm-slim
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=backend /build/target/release/aura-farmers .
COPY --from=frontend /build/dist ./static

ENV RUST_LOG=info
EXPOSE 8080
CMD ["./aura-farmers"]
