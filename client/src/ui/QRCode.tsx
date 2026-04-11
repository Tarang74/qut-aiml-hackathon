import { useEffect, useRef } from "react";
import QRCodeLib from "qrcode";

interface Props {
  value: string;
  style?: React.CSSProperties;
}

export default function QRCode({ value, style }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value) {
      QRCodeLib.toCanvas(canvasRef.current, value, { margin: 1, width: 220 });
    }
  }, [value]);

  return <canvas ref={canvasRef} style={style} />;
}
