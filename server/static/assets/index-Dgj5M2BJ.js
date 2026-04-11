(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var cd={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Ty(){if(A0)return Po;A0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var R0;function Ay(){return R0||(R0=1,cd.exports=Ty()),cd.exports}var S=Ay(),ud={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function Ry(){if(C0)return at;C0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(z,ae,Se){this.props=z,this.context=ae,this.refs=M,this.updater=Se||E}_.prototype.isReactComponent={},_.prototype.setState=function(z,ae){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ae,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function B(){}B.prototype=_.prototype;function O(z,ae,Se){this.props=z,this.context=ae,this.refs=M,this.updater=Se||E}var L=O.prototype=new B;L.constructor=O,R(L,_.prototype),L.isPureReactComponent=!0;var q=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function D(z,ae,Se){var Z=Se.ref;return{$$typeof:s,type:z,key:ae,ref:Z!==void 0?Z:null,props:Se}}function w(z,ae){return D(z.type,ae,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function le(z){var ae={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Se){return ae[Se]})}var ie=/\/+/g;function me(z,ae){return typeof z=="object"&&z!==null&&z.key!=null?le(""+z.key):ae.toString(36)}function ve(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(H,H):(z.status="pending",z.then(function(ae){z.status==="pending"&&(z.status="fulfilled",z.value=ae)},function(ae){z.status==="pending"&&(z.status="rejected",z.reason=ae)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function U(z,ae,Se,Z,de){var Ee=typeof z;(Ee==="undefined"||Ee==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(Ee){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case s:case t:ye=!0;break;case g:return ye=z._init,U(ye(z._payload),ae,Se,Z,de)}}if(ye)return de=de(z),ye=Z===""?"."+me(z,0):Z,q(de)?(Se="",ye!=null&&(Se=ye.replace(ie,"$&/")+"/"),U(de,ae,Se,"",function(rt){return rt})):de!=null&&(G(de)&&(de=w(de,Se+(de.key==null||z&&z.key===de.key?"":(""+de.key).replace(ie,"$&/")+"/")+ye)),ae.push(de)),1;ye=0;var Ge=Z===""?".":Z+":";if(q(z))for(var Be=0;Be<z.length;Be++)Z=z[Be],Ee=Ge+me(Z,Be),ye+=U(Z,ae,Se,Ee,de);else if(Be=b(z),typeof Be=="function")for(z=Be.call(z),Be=0;!(Z=z.next()).done;)Z=Z.value,Ee=Ge+me(Z,Be++),ye+=U(Z,ae,Se,Ee,de);else if(Ee==="object"){if(typeof z.then=="function")return U(ve(z),ae,Se,Z,de);throw ae=String(z),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ye}function K(z,ae,Se){if(z==null)return z;var Z=[],de=0;return U(z,Z,"","",function(Ee){return ae.call(Se,Ee,de++)}),Z}function Q(z){if(z._status===-1){var ae=z._result;ae=ae(),ae.then(function(Se){(z._status===0||z._status===-1)&&(z._status=1,z._result=Se)},function(Se){(z._status===0||z._status===-1)&&(z._status=2,z._result=Se)}),z._status===-1&&(z._status=0,z._result=ae)}if(z._status===1)return z._result.default;throw z._result}var Me=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Ae={map:K,forEach:function(z,ae,Se){K(z,function(){ae.apply(this,arguments)},Se)},count:function(z){var ae=0;return K(z,function(){ae++}),ae},toArray:function(z){return K(z,function(ae){return ae})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return at.Activity=v,at.Children=Ae,at.Component=_,at.Fragment=i,at.Profiler=l,at.PureComponent=O,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,at.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},at.cache=function(z){return function(){return z.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(z,ae,Se){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=R({},z.props),de=z.key;if(ae!=null)for(Ee in ae.key!==void 0&&(de=""+ae.key),ae)!W.call(ae,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&ae.ref===void 0||(Z[Ee]=ae[Ee]);var Ee=arguments.length-2;if(Ee===1)Z.children=Se;else if(1<Ee){for(var ye=Array(Ee),Ge=0;Ge<Ee;Ge++)ye[Ge]=arguments[Ge+2];Z.children=ye}return D(z.type,de,Z)},at.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},at.createElement=function(z,ae,Se){var Z,de={},Ee=null;if(ae!=null)for(Z in ae.key!==void 0&&(Ee=""+ae.key),ae)W.call(ae,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(de[Z]=ae[Z]);var ye=arguments.length-2;if(ye===1)de.children=Se;else if(1<ye){for(var Ge=Array(ye),Be=0;Be<ye;Be++)Ge[Be]=arguments[Be+2];de.children=Ge}if(z&&z.defaultProps)for(Z in ye=z.defaultProps,ye)de[Z]===void 0&&(de[Z]=ye[Z]);return D(z,Ee,de)},at.createRef=function(){return{current:null}},at.forwardRef=function(z){return{$$typeof:h,render:z}},at.isValidElement=G,at.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:Q}},at.memo=function(z,ae){return{$$typeof:p,type:z,compare:ae===void 0?null:ae}},at.startTransition=function(z){var ae=P.T,Se={};P.T=Se;try{var Z=z(),de=P.S;de!==null&&de(Se,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(H,Me)}catch(Ee){Me(Ee)}finally{ae!==null&&Se.types!==null&&(ae.types=Se.types),P.T=ae}},at.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},at.use=function(z){return P.H.use(z)},at.useActionState=function(z,ae,Se){return P.H.useActionState(z,ae,Se)},at.useCallback=function(z,ae){return P.H.useCallback(z,ae)},at.useContext=function(z){return P.H.useContext(z)},at.useDebugValue=function(){},at.useDeferredValue=function(z,ae){return P.H.useDeferredValue(z,ae)},at.useEffect=function(z,ae){return P.H.useEffect(z,ae)},at.useEffectEvent=function(z){return P.H.useEffectEvent(z)},at.useId=function(){return P.H.useId()},at.useImperativeHandle=function(z,ae,Se){return P.H.useImperativeHandle(z,ae,Se)},at.useInsertionEffect=function(z,ae){return P.H.useInsertionEffect(z,ae)},at.useLayoutEffect=function(z,ae){return P.H.useLayoutEffect(z,ae)},at.useMemo=function(z,ae){return P.H.useMemo(z,ae)},at.useOptimistic=function(z,ae){return P.H.useOptimistic(z,ae)},at.useReducer=function(z,ae,Se){return P.H.useReducer(z,ae,Se)},at.useRef=function(z){return P.H.useRef(z)},at.useState=function(z){return P.H.useState(z)},at.useSyncExternalStore=function(z,ae,Se){return P.H.useSyncExternalStore(z,ae,Se)},at.useTransition=function(){return P.H.useTransition()},at.version="19.2.5",at}var w0;function zh(){return w0||(w0=1,ud.exports=Ry()),ud.exports}var Ve=zh(),fd={exports:{}},Bo={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function Cy(){return D0||(D0=1,(function(s){function t(U,K){var Q=U.length;U.push(K);e:for(;0<Q;){var Me=Q-1>>>1,Ae=U[Me];if(0<l(Ae,K))U[Me]=K,U[Q]=Ae,Q=Me;else break e}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],Q=U.pop();if(Q!==K){U[0]=Q;e:for(var Me=0,Ae=U.length,z=Ae>>>1;Me<z;){var ae=2*(Me+1)-1,Se=U[ae],Z=ae+1,de=U[Z];if(0>l(Se,Q))Z<Ae&&0>l(de,Se)?(U[Me]=de,U[Z]=Q,Me=Z):(U[Me]=Se,U[ae]=Q,Me=ae);else if(Z<Ae&&0>l(de,Q))U[Me]=de,U[Z]=Q,Me=Z;else break e}}return K}function l(U,K){var Q=U.sortIndex-K.sortIndex;return Q!==0?Q:U.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,y=3,b=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=U)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function q(U){if(R=!1,L(U),!E)if(i(m)!==null)E=!0,H||(H=!0,le());else{var K=i(p);K!==null&&ve(q,K.startTime-U)}}var H=!1,P=-1,W=5,D=-1;function w(){return M?!0:!(s.unstable_now()-D<W)}function G(){if(M=!1,H){var U=s.unstable_now();D=U;var K=!0;try{e:{E=!1,R&&(R=!1,B(P),P=-1),b=!0;var Q=y;try{t:{for(L(U),v=i(m);v!==null&&!(v.expirationTime>U&&w());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,y=v.priorityLevel;var Ae=Me(v.expirationTime<=U);if(U=s.unstable_now(),typeof Ae=="function"){v.callback=Ae,L(U),K=!0;break t}v===i(m)&&r(m),L(U)}else r(m);v=i(m)}if(v!==null)K=!0;else{var z=i(p);z!==null&&ve(q,z.startTime-U),K=!1}}break e}finally{v=null,y=Q,b=!1}K=void 0}}finally{K?le():H=!1}}}var le;if(typeof O=="function")le=function(){O(G)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,me=ie.port2;ie.port1.onmessage=G,le=function(){me.postMessage(null)}}else le=function(){_(G,0)};function ve(U,K){P=_(function(){U(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(U){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Q=y;y=K;try{return U()}finally{y=Q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=y;y=U;try{return K()}finally{y=Q}},s.unstable_scheduleCallback=function(U,K,Q){var Me=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Me+Q:Me):Q=Me,U){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Q+Ae,U={id:g++,callback:K,priorityLevel:U,startTime:Q,expirationTime:Ae,sortIndex:-1},Q>Me?(U.sortIndex=Q,t(p,U),i(m)===null&&U===i(p)&&(R?(B(P),P=-1):R=!0,ve(q,Q-Me))):(U.sortIndex=Ae,t(m,U),E||b||(E=!0,H||(H=!0,le()))),U},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(U){var K=y;return function(){var Q=y;y=K;try{return U.apply(this,arguments)}finally{y=Q}}}})(hd)),hd}var U0;function wy(){return U0||(U0=1,dd.exports=Cy()),dd.exports}var pd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Dy(){if(L0)return Nn;L0=1;var s=zh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Nn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:b}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.5",Nn}var N0;function Uy(){if(N0)return pd.exports;N0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),pd.exports=Dy(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function Ly(){if(O0)return Bo;O0=1;var s=wy(),t=zh(),i=Uy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,o=f;break}if(T===o){x=!0,o=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=c;break}if(T===o){x=!0,o=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case q:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var ve=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Me=[],Ae=-1;function z(e){return{current:e}}function ae(e){0>Ae||(e.current=Me[Ae],Me[Ae]=null,Ae--)}function Se(e,n){Ae++,Me[Ae]=e.current,e.current=n}var Z=z(null),de=z(null),Ee=z(null),ye=z(null);function Ge(e,n){switch(Se(Ee,n),Se(de,e),Se(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zg(n),e=Kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Z),Se(Z,e)}function Be(){ae(Z),ae(de),ae(Ee)}function rt(e){e.memoizedState!==null&&Se(ye,e);var n=Z.current,a=Kg(n,e.type);n!==a&&(Se(de,e),Se(Z,a))}function zt(e){de.current===e&&(ae(Z),ae(de)),ye.current===e&&(ae(ye),Lo._currentValue=Q)}var ht,Yt;function I(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",Yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+Yt}var Un=!1;function dt(e,n){if(!e||Un)return"";Un=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var ee=ce}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(ce){ee=ce}e.call(_e.prototype)}}else{try{throw Error()}catch(ce){ee=ce}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&ee&&typeof ce.stack=="string")return[ce.stack,ee.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var F=x.split(`
`),$=T.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===$.length)for(o=F.length-1,c=$.length-1;1<=o&&0<=c&&F[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==$[c]){var fe=`
`+F[o].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=o&&0<=c);break}}}finally{Un=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?I(a):""}function gt(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return dt(e.type,!1);case 11:return dt(e.type.render,!1);case 1:return dt(e.type,!0);case 31:return I("Activity");default:return""}}function qe(e){try{var n="",a=null;do n+=gt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Lt=Object.prototype.hasOwnProperty,We=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,A=s.unstable_shouldYield,te=s.unstable_requestPaint,he=s.unstable_now,be=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,je=s.unstable_UserBlockingPriority,De=s.unstable_NormalPriority,Fe=s.unstable_LowPriority,_t=s.unstable_IdlePriority,Re=s.log,Ie=s.unstable_setDisableYieldValue,Ye=null,Xe=null;function ze(e){if(typeof Re=="function"&&Ie(e),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(Ye,e)}catch{}}var $e=Math.clz32?Math.clz32:j,st=Math.log,Pt=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(st(e)/Pt|0)|0}var Ce=256,ue=262144,xe=4194304;function we(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=we(o):(x&=T,x!==0?c=we(x):a||(a=T&~e,a!==0&&(c=we(a))))):(T=o&~f,T!==0?c=we(T):x!==0?c=we(x):a||(a=o&~e,a!==0&&(c=we(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function et(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mn(){var e=xe;return xe<<=1,(xe&62914560)===0&&(xe=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yi(e,n,a,o,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var fe=31-$e(a),_e=1<<fe;T[fe]=0,F[fe]=-1;var ee=$[fe];if(ee!==null)for($[fe]=null,fe=0;fe<ee.length;fe++){var ce=ee[fe];ce!==null&&(ce.lane&=-536870913)}a&=~_e}o!==0&&ks(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function ks(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-$e(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function js(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-$e(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Oi(e,n){var a=n&-n;return a=(a&42)!==0?1:tr(a),(a&(e.suspendedLanes|n))!==0?0:a}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xs(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:x0(e.type))}function nr(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Si=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Si,En="__reactProps$"+Si,Vi="__reactContainer$"+Si,Ws="__reactEvents$"+Si,nu="__reactListeners$"+Si,iu="__reactHandles$"+Si,el="__reactResources$"+Si,ir="__reactMarker$"+Si;function qs(e){delete e[Jt],delete e[En],delete e[Ws],delete e[nu],delete e[iu]}function C(e){var n=e[Jt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Vi]||a[Jt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=i0(e);e!==null;){if(a=e[Jt])return a;e=i0(e)}return n}e=a,a=e.parentNode}return null}function X(e){if(e=e[Jt]||e[Vi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ne(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function re(e){var n=e[el];return n||(n=e[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[ir]=!0}var Te=new Set,Le={};function Oe(e,n){Pe(e,n),Pe(e+"Capture",n)}function Pe(e,n){for(Le[e]=n,e=0;e<n.length;e++)Te.add(n[e])}var tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Ze={};function yt(e){return Lt.call(Ze,e)?!0:Lt.call(nt,e)?!1:tt.test(e)?Ze[e]=!0:(nt[e]=!0,!1)}function St(e,n,a){if(yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function At(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function it(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Et(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=gn(e,n,""+e[n])}}function Gn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function yn(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(e,n,a,o,c,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+it(n)):e.value!==""+it(n)&&(e.value=""+it(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,x,it(n)):a!=null?Ln(e,x,it(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+it(T):e.removeAttribute("name")}function Bn(e,n,a,o,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Et(e);return}a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Et(e)}function Ln(e,n,a){n==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $t(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Tn(e,n,a){if(n!=null&&(n=""+it(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+it(a):""}function zr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ve(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=it(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Et(e)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var yv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||yv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Wh(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Wh(e,f,n[f])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return Mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var ru=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Br=null;function Yh(e){var n=X(e);if(n&&(e=n.stateNode)){var a=e[En]||null;e:switch(e=n.stateNode,n.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[En]||null;if(!c)throw Error(r(90));Bt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Gn(o)}break e;case"textarea":Tn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$t(e,!!a.multiple,n,!1)}}}var ou=!1;function Zh(e,n,a){if(ou)return e(n,a);ou=!0;try{var o=e(n);return o}finally{if(ou=!1,(Pr!==null||Br!==null)&&(Vl(),Pr&&(n=Pr,e=Br,Br=Pr=null,Yh(n),e)))for(n=0;n<e.length;n++)Yh(e[n])}}function Ys(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(ji)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{lu=!1}var xa=null,cu=null,nl=null;function Kh(){if(nl)return nl;var e,n=cu,a=n.length,o,c="value"in xa?xa.value:xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return nl=c.slice(e,1<o?1-o:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function Qh(){return!1}function kn(e){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:Qh,this.isPropagationStopped=Qh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=kn(ar),Ks=v({},ar,{view:0,detail:0}),bv=kn(Ks),uu,fu,Qs,sl=v({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(uu=e.screenX-Qs.screenX,fu=e.screenY-Qs.screenY):fu=uu=0,Qs=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),Jh=kn(sl),Ev=v({},sl,{dataTransfer:0}),Tv=kn(Ev),Av=v({},Ks,{relatedTarget:0}),du=kn(Av),Rv=v({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=kn(Rv),wv=v({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=kn(wv),Uv=v({},ar,{data:0}),$h=kn(Uv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ov[e])?!!n[e]:!1}function hu(){return zv}var Pv=v({},Ks,{key:function(e){if(e.key){var n=Lv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=kn(Pv),Fv=v({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=kn(Fv),Iv=v({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Hv=kn(Iv),Gv=v({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=kn(Gv),kv=v({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=kn(kv),Xv=v({},ar,{newState:0,oldState:0}),Wv=kn(Xv),qv=[9,13,27,32],pu=ji&&"CompositionEvent"in window,Js=null;ji&&"documentMode"in document&&(Js=document.documentMode);var Yv=ji&&"TextEvent"in window&&!Js,tp=ji&&(!pu||Js&&8<Js&&11>=Js),np=" ",ip=!1;function ap(e,n){switch(e){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function Zv(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return e=n.data,e===np&&ip?null:e;default:return null}}function Kv(e,n){if(Fr)return e==="compositionend"||!pu&&ap(e,n)?(e=Kh(),nl=cu=xa=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qv[e.type]:n==="textarea"}function op(e,n,a,o){Pr?Br?Br.push(o):Br=[o]:Pr=o,n=Zl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,eo=null;function Jv(e){kg(e,0)}function ol(e){var n=ne(e);if(Gn(n))return e}function lp(e,n){if(e==="change")return n}var cp=!1;if(ji){var mu;if(ji){var gu="oninput"in document;if(!gu){var up=document.createElement("div");up.setAttribute("oninput","return;"),gu=typeof up.oninput=="function"}mu=gu}else mu=!1;cp=mu&&(!document.documentMode||9<document.documentMode)}function fp(){$s&&($s.detachEvent("onpropertychange",dp),eo=$s=null)}function dp(e){if(e.propertyName==="value"&&ol(eo)){var n=[];op(n,eo,e,su(e)),Zh(Jv,n)}}function $v(e,n,a){e==="focusin"?(fp(),$s=n,eo=a,$s.attachEvent("onpropertychange",dp)):e==="focusout"&&fp()}function ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(eo)}function tx(e,n){if(e==="click")return ol(n)}function nx(e,n){if(e==="input"||e==="change")return ol(n)}function ix(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:ix;function to(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Lt.call(n,c)||!ei(e[c],n[c]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,n){var a=hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hp(a)}}function mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mi(e.document)}return n}function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ax=ji&&"documentMode"in document&&11>=document.documentMode,Ir=null,vu=null,no=null,xu=!1;function _p(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Ir==null||Ir!==Mi(o)||(o=Ir,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=Zl(vu,"onSelect"),0<o.length&&(n=new rl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ir)))}function rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},yu={},vp={};ji&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function sr(e){if(yu[e])return yu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return yu[e]=n[a];return e}var xp=sr("animationend"),yp=sr("animationiteration"),Sp=sr("animationstart"),rx=sr("transitionrun"),sx=sr("transitionstart"),ox=sr("transitioncancel"),Mp=sr("transitionend"),bp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function bi(e,n){bp.set(e,n),Oe(n,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Gr=0,Mu=0;function cl(){for(var e=Gr,n=Mu=Gr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var c=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&Ep(a,c,f)}}function ul(e,n,a,o){ci[Gr++]=e,ci[Gr++]=n,ci[Gr++]=a,ci[Gr++]=o,Mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bu(e,n,a,o){return ul(e,n,a,o),fl(e)}function or(e,n){return ul(e,null,null,n),fl(e)}function Ep(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-$e(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function fl(e){if(50<To)throw To=0,Nf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function lx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new lx(e,n,a,o)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,o,c,f){var x=0;if(o=e,typeof e=="function")Eu(e)&&(x=1);else if(typeof e=="string")x=hy(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=ti(31,a,n,c),e.elementType=D,e.lanes=f,e;case R:return lr(a.children,c,f,n);case M:x=8,c|=24;break;case _:return e=ti(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case q:return e=ti(13,a,n,c),e.elementType=q,e.lanes=f,e;case H:return e=ti(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:x=10;break e;case B:x=9;break e;case L:x=11;break e;case P:x=14;break e;case W:x=16,o=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ti(x,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function lr(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Tu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function Ap(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Au(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qe(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var kr=[],jr=0,hl=null,io=0,fi=[],di=0,ya=null,zi=1,Pi="";function Wi(e,n){kr[jr++]=io,kr[jr++]=hl,hl=e,io=n}function Cp(e,n,a){fi[di++]=zi,fi[di++]=Pi,fi[di++]=ya,ya=e;var o=zi;e=Pi;var c=32-$e(o)-1;o&=~(1<<c),a+=1;var f=32-$e(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,zi=1<<32-$e(n)+c|a<<c|o,Pi=f+e}else zi=1<<f|a<<c|o,Pi=e}function Ru(e){e.return!==null&&(Wi(e,1),Cp(e,1,0))}function Cu(e){for(;e===hl;)hl=kr[--jr],kr[jr]=null,io=kr[--jr],kr[jr]=null;for(;e===ya;)ya=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null,zi=fi[--di],fi[di]=null}function wp(e,n){fi[di++]=zi,fi[di++]=Pi,fi[di++]=ya,zi=n.id,Pi=n.overflow,ya=e}var An=null,Wt=null,Mt=!1,Sa=null,hi=!1,wu=Error(r(519));function Ma(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ui(n,e)),wu}function Dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Jt]=e,n[En]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)mt(Ro[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),zr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||qg(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ma(e,!0)}function Up(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:An=An.return}}function Xr(e){if(e!==An)return!1;if(!Mt)return Up(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yf(e.type,e.memoizedProps)),a=!a),a&&Wt&&Ma(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=n0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=n0(e)}else n===27?(n=Wt,Pa(e.type)?(e=$f,$f=null,Wt=e):Wt=n):Wt=An?mi(e.stateNode.nextSibling):null;return!0}function cr(){Wt=An=null,Mt=!1}function Du(){var e=Sa;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Sa=null),e}function ao(e){Sa===null?Sa=[e]:Sa.push(e)}var Uu=z(null),ur=null,qi=null;function ba(e,n,a){Se(Uu,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=Uu.current,ae(Uu)}function Lu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Lu(f.return,a,e),o||(x=null);break e}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Lu(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Wr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;ei(c.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(c===ye.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}c=c.return}e!==null&&Nu(n,e,a,o),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){ur=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Lp(ur,e)}function ml(e,n){return ur===null&&fr(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(r(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ux=s.unstable_scheduleCallback,fx=s.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new cx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&ux(fx,function(){e.controller.abort()})}var so=null,zu=0,qr=0,Yr=null;function dx(e,n){if(so===null){var a=so=[];zu=0,qr=If(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Np,Np),n}function Np(){if(--zu===0&&so!==null){Yr!==null&&(Yr.status="fulfilled");var e=so;so=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Op=U.S;U.S=function(e,n){_g=he(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dx(e,n),Op!==null&&Op(e,n)};var dr=z(null);function Pu(){var e=dr.current;return e!==null?e:Vt.pooledCache}function gl(e,n){n===null?Se(dr,dr.current):Se(dr,n.pool)}function zp(){var e=Pu();return e===null?null:{parent:cn._currentValue,pool:e}}var Zr=Error(r(460)),Bu=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Vt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e}throw pr=n,Zr}}function hr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,Zr):a}}var pr=null;function Fp(){if(pr===null)throw Error(r(459));var e=pr;return pr=null,e}function Ip(e){if(e===Zr||e===_l)throw Error(r(483))}var Kr=null,oo=0;function xl(e){var n=oo;return oo+=1,Kr===null&&(Kr=[]),Bp(Kr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){function n(Y,V){if(e){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Xi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function x(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,J,pe){return V===null||V.tag!==6?(V=Tu(J,Y.mode,pe),V.return=Y,V):(V=c(V,J),V.return=Y,V)}function F(Y,V,J,pe){var Ke=J.type;return Ke===R?fe(Y,V,J.props.children,pe,J.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===W&&hr(Ke)===V.type)?(V=c(V,J.props),lo(V,J),V.return=Y,V):(V=dl(J.type,J.key,J.props,null,Y.mode,pe),lo(V,J),V.return=Y,V)}function $(Y,V,J,pe){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Au(J,Y.mode,pe),V.return=Y,V):(V=c(V,J.children||[]),V.return=Y,V)}function fe(Y,V,J,pe,Ke){return V===null||V.tag!==7?(V=lr(J,Y.mode,pe,Ke),V.return=Y,V):(V=c(V,J),V.return=Y,V)}function _e(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Tu(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return J=dl(V.type,V.key,V.props,null,Y.mode,J),lo(J,V),J.return=Y,J;case E:return V=Au(V,Y.mode,J),V.return=Y,V;case W:return V=hr(V),_e(Y,V,J)}if(ve(V)||le(V))return V=lr(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return _e(Y,xl(V),J);if(V.$$typeof===O)return _e(Y,ml(Y,V),J);yl(Y,V)}return null}function ee(Y,V,J,pe){var Ke=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ke!==null?null:T(Y,V,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===Ke?F(Y,V,J,pe):null;case E:return J.key===Ke?$(Y,V,J,pe):null;case W:return J=hr(J),ee(Y,V,J,pe)}if(ve(J)||le(J))return Ke!==null?null:fe(Y,V,J,pe,null);if(typeof J.then=="function")return ee(Y,V,xl(J),pe);if(J.$$typeof===O)return ee(Y,V,ml(Y,J),pe);yl(Y,J)}return null}function ce(Y,V,J,pe,Ke){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get(J)||null,T(V,Y,""+pe,Ke);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case b:return Y=Y.get(pe.key===null?J:pe.key)||null,F(V,Y,pe,Ke);case E:return Y=Y.get(pe.key===null?J:pe.key)||null,$(V,Y,pe,Ke);case W:return pe=hr(pe),ce(Y,V,J,pe,Ke)}if(ve(pe)||le(pe))return Y=Y.get(J)||null,fe(V,Y,pe,Ke,null);if(typeof pe.then=="function")return ce(Y,V,J,xl(pe),Ke);if(pe.$$typeof===O)return ce(Y,V,J,ml(V,pe),Ke);yl(V,pe)}return null}function He(Y,V,J,pe){for(var Ke=null,Rt=null,ke=V,lt=V=0,xt=null;ke!==null&&lt<J.length;lt++){ke.index>lt?(xt=ke,ke=null):xt=ke.sibling;var Ct=ee(Y,ke,J[lt],pe);if(Ct===null){ke===null&&(ke=xt);break}e&&ke&&Ct.alternate===null&&n(Y,ke),V=f(Ct,V,lt),Rt===null?Ke=Ct:Rt.sibling=Ct,Rt=Ct,ke=xt}if(lt===J.length)return a(Y,ke),Mt&&Wi(Y,lt),Ke;if(ke===null){for(;lt<J.length;lt++)ke=_e(Y,J[lt],pe),ke!==null&&(V=f(ke,V,lt),Rt===null?Ke=ke:Rt.sibling=ke,Rt=ke);return Mt&&Wi(Y,lt),Ke}for(ke=o(ke);lt<J.length;lt++)xt=ce(ke,Y,lt,J[lt],pe),xt!==null&&(e&&xt.alternate!==null&&ke.delete(xt.key===null?lt:xt.key),V=f(xt,V,lt),Rt===null?Ke=xt:Rt.sibling=xt,Rt=xt);return e&&ke.forEach(function(Ga){return n(Y,Ga)}),Mt&&Wi(Y,lt),Ke}function Je(Y,V,J,pe){if(J==null)throw Error(r(151));for(var Ke=null,Rt=null,ke=V,lt=V=0,xt=null,Ct=J.next();ke!==null&&!Ct.done;lt++,Ct=J.next()){ke.index>lt?(xt=ke,ke=null):xt=ke.sibling;var Ga=ee(Y,ke,Ct.value,pe);if(Ga===null){ke===null&&(ke=xt);break}e&&ke&&Ga.alternate===null&&n(Y,ke),V=f(Ga,V,lt),Rt===null?Ke=Ga:Rt.sibling=Ga,Rt=Ga,ke=xt}if(Ct.done)return a(Y,ke),Mt&&Wi(Y,lt),Ke;if(ke===null){for(;!Ct.done;lt++,Ct=J.next())Ct=_e(Y,Ct.value,pe),Ct!==null&&(V=f(Ct,V,lt),Rt===null?Ke=Ct:Rt.sibling=Ct,Rt=Ct);return Mt&&Wi(Y,lt),Ke}for(ke=o(ke);!Ct.done;lt++,Ct=J.next())Ct=ce(ke,Y,lt,Ct.value,pe),Ct!==null&&(e&&Ct.alternate!==null&&ke.delete(Ct.key===null?lt:Ct.key),V=f(Ct,V,lt),Rt===null?Ke=Ct:Rt.sibling=Ct,Rt=Ct);return e&&ke.forEach(function(Ey){return n(Y,Ey)}),Mt&&Wi(Y,lt),Ke}function Ht(Y,V,J,pe){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:e:{for(var Ke=J.key;V!==null;){if(V.key===Ke){if(Ke=J.type,Ke===R){if(V.tag===7){a(Y,V.sibling),pe=c(V,J.props.children),pe.return=Y,Y=pe;break e}}else if(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===W&&hr(Ke)===V.type){a(Y,V.sibling),pe=c(V,J.props),lo(pe,J),pe.return=Y,Y=pe;break e}a(Y,V);break}else n(Y,V);V=V.sibling}J.type===R?(pe=lr(J.props.children,Y.mode,pe,J.key),pe.return=Y,Y=pe):(pe=dl(J.type,J.key,J.props,null,Y.mode,pe),lo(pe,J),pe.return=Y,Y=pe)}return x(Y);case E:e:{for(Ke=J.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Y,V.sibling),pe=c(V,J.children||[]),pe.return=Y,Y=pe;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}pe=Au(J,Y.mode,pe),pe.return=Y,Y=pe}return x(Y);case W:return J=hr(J),Ht(Y,V,J,pe)}if(ve(J))return He(Y,V,J,pe);if(le(J)){if(Ke=le(J),typeof Ke!="function")throw Error(r(150));return J=Ke.call(J),Je(Y,V,J,pe)}if(typeof J.then=="function")return Ht(Y,V,xl(J),pe);if(J.$$typeof===O)return Ht(Y,V,ml(Y,J),pe);yl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(Y,V.sibling),pe=c(V,J),pe.return=Y,Y=pe):(a(Y,V),pe=Tu(J,Y.mode,pe),pe.return=Y,Y=pe),x(Y)):a(Y,V)}return function(Y,V,J,pe){try{oo=0;var Ke=Ht(Y,V,J,pe);return Kr=null,Ke}catch(ke){if(ke===Zr||ke===_l)throw ke;var Rt=ti(29,ke,null,Y.mode);return Rt.lanes=pe,Rt.return=Y,Rt}finally{}}}var mr=Hp(!0),Gp=Hp(!1),Ea=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=fl(e),Ep(e,null,a),n}return ul(e,o,n,a),fl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,js(e,a)}}function Hu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gu=!1;function uo(){if(Gu){var e=Yr;if(e!==null)throw e}}function fo(e,n,a,o){Gu=!1;var c=e.updateQueue;Ea=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var F=T,$=F.next;F.next=null,x===null?f=$:x.next=$,x=F;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,T=fe.lastBaseUpdate,T!==x&&(T===null?fe.firstBaseUpdate=$:T.next=$,fe.lastBaseUpdate=F))}if(f!==null){var _e=c.baseState;x=0,fe=$=F=null,T=f;do{var ee=T.lane&-536870913,ce=ee!==T.lane;if(ce?(vt&ee)===ee:(o&ee)===ee){ee!==0&&ee===qr&&(Gu=!0),fe!==null&&(fe=fe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var He=e,Je=T;ee=n;var Ht=a;switch(Je.tag){case 1:if(He=Je.payload,typeof He=="function"){_e=He.call(Ht,_e,ee);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Je.payload,ee=typeof He=="function"?He.call(Ht,_e,ee):He,ee==null)break e;_e=v({},_e,ee);break e;case 2:Ea=!0}}ee=T.callback,ee!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=c.callbacks,ce===null?c.callbacks=[ee]:ce.push(ee))}else ce={lane:ee,tag:T.tag,payload:T.payload,callback:T.callback,next:null},fe===null?($=fe=ce,F=_e):fe=fe.next=ce,x|=ee;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ce=T,T=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);fe===null&&(F=_e),c.baseState=F,c.firstBaseUpdate=$,c.lastBaseUpdate=fe,f===null&&(c.shared.lanes=0),Ua|=x,e.lanes=x,e.memoizedState=_e}}function Vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var Qr=z(null),Sl=z(0);function jp(e,n){e=ia,Se(Sl,e),Se(Qr,n),ia=e|n.baseLanes}function Vu(){Se(Sl,ia),Se(Qr,Qr.current)}function ku(){ia=Sl.current,ae(Qr),ae(Sl)}var ni=z(null),pi=null;function Ra(e){var n=e.alternate;Se(an,an.current&1),Se(ni,e),pi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(pi=e)}function ju(e){Se(an,an.current),Se(ni,e),pi===null&&(pi=e)}function Xp(e){e.tag===22?(Se(an,an.current),Se(ni,e),pi===null&&(pi=e)):Ca()}function Ca(){Se(an,an.current),Se(ni,ni.current)}function ii(e){ae(ni),pi===e&&(pi=null),ae(an)}var an=z(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ot=null,Ft=null,un=null,bl=!1,Jr=!1,gr=!1,El=0,ho=0,$r=null,px=0;function en(){throw Error(r(321))}function Xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Wu(e,n,a,o,c,f){return Zi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Cm:lf,gr=!1,f=a(o,c),gr=!1,Jr&&(f=qp(n,a,o,c)),Wp(e),f}function Wp(e){U.H=go;var n=Ft!==null&&Ft.next!==null;if(Zi=0,un=Ft=ot=null,bl=!1,ho=0,$r=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&pl(e)&&(fn=!0))}function qp(e,n,a,o){ot=e;var c=0;do{if(Jr&&($r=null),ho=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,un=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=wm,f=n(a,o)}while(Jr);return f}function mx(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(ot.flags|=1024),n}function qu(){var e=El!==0;return El=0,e}function Yu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Zi=0,un=Ft=ot=null,Jr=!1,ho=El=0,$r=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ot.memoizedState=un=e:un=un.next=e,un}function rn(){if(Ft===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=un===null?ot.memoizedState:un.next;if(n!==null)un=n,Ft=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},un===null?ot.memoizedState=un=e:un=un.next=e}return un}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,$r===null&&($r=[]),e=Bp($r,e,n),n=ot,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Cm:lf),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===O)return Rn(e)}throw Error(r(438,String(e)))}function Ku(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=rn();return Qu(n,Ft,e)}function Qu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=x=null,F=null,$=n,fe=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(vt&_e)===_e:(Zi&_e)===_e){var ee=$.revertLane;if(ee===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===qr&&(fe=!0);else if((Zi&ee)===ee){$=$.next,ee===qr&&(fe=!0);continue}else _e={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(T=F=_e,x=f):F=F.next=_e,ot.lanes|=ee,Ua|=ee;_e=$.action,gr&&a(f,_e),f=$.hasEagerState?$.eagerState:a(f,_e)}else ee={lane:_e,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(T=F=ee,x=f):F=F.next=ee,ot.lanes|=_e,Ua|=_e;$=$.next}while($!==null&&$!==n);if(F===null?x=f:F.next=T,!ei(f,e.memoizedState)&&(fn=!0,fe&&(a=Yr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ju(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);ei(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Yp(e,n,a){var o=ot,c=rn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!ei((Ft||c).memoizedState,a);if(x&&(c.memoizedState=a,fn=!0),c=c.queue,tf(Qp.bind(null,o,c,e),[e]),c.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,es(9,{destroy:void 0},Kp.bind(null,o,c,a,n),null),Vt===null)throw Error(r(349));f||(Zi&127)!==0||Zp(o,n,a)}return a}function Zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Tl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Kp(e,n,a,o){n.value=a,n.getSnapshot=o,Jp(n)&&$p(e)}function Qp(e,n,a){return a(function(){Jp(n)&&$p(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function $p(e){var n=or(e,2);n!==null&&Yn(n,e,2)}function $u(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),gr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function em(e,n,a,o){return e.baseState=a,Qu(e,Ft,typeof o=="function"?o:Ki)}function gx(e,n,a,o,c){if(Dl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=U.T,x={};U.T=x;try{var T=a(c,o),F=U.S;F!==null&&F(x,T),nm(e,n,T)}catch($){ef(e,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),U.T=f}}else try{f=a(c,o),nm(e,n,f)}catch($){ef(e,n,$)}}function nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){im(e,n,o)},function(o){return ef(e,n,o)}):im(e,n,a)}function im(e,n,a){n.status="fulfilled",n.value=a,am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,tm(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,am(n),n=n.next;while(n!==o)}e.action=null}function am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rm(e,n){return n}function sm(e,n){if(Mt){var a=Vt.formState;if(a!==null){e:{var o=ot;if(Mt){if(Wt){t:{for(var c=Wt,f=hi;c.nodeType!==8;){if(!f){c=null;break t}if(c=mi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=mi(c.nextSibling),o=c.data==="F!";break e}}Ma(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=o,a=Tm.bind(null,ot,o),o.dispatch=a,o=$u(!1),f=of.bind(null,ot,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=gx.bind(null,ot,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function om(e){var n=rn();return lm(n,Ft,e)}function lm(e,n,a){if(n=Qu(e,n,rm)[0],e=Rl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(x){throw x===Zr?_l:x}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,es(9,{destroy:void 0},_x.bind(null,c,a),null)),[o,f,e]}function _x(e,n){e.action=n}function cm(e){var n=rn(),a=Ft;if(a!==null)return lm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function es(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Tl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function um(){return rn().memoizedState}function Cl(e,n,a,o){var c=Fn();ot.flags|=e,c.memoizedState=es(1|n,{destroy:void 0},a,o===void 0?null:o)}function wl(e,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ft!==null&&o!==null&&Xu(o,Ft.memoizedState.deps)?c.memoizedState=es(n,f,a,o):(ot.flags|=e,c.memoizedState=es(1|n,f,a,o))}function fm(e,n){Cl(8390656,8,e,n)}function tf(e,n){wl(2048,8,e,n)}function vx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Tl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function dm(e){var n=rn().memoizedState;return vx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function hm(e,n){return wl(4,2,e,n)}function pm(e,n){return wl(4,4,e,n)}function mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gm(e,n,a){a=a!=null?a.concat([e]):null,wl(4,4,mm.bind(null,n,e),a)}function nf(){}function _m(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function vm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=e(),gr){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=xg(),ot.lanes|=e,Ua|=e,a)}function xm(e,n,a,o){return ei(a,n)?a:Qr.current!==null?(e=af(e,a,o),ei(e,n)||(fn=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(vt&261930)===0?(fn=!0,e.memoizedState=a):(e=xg(),ot.lanes|=e,Ua|=e,n)}function ym(e,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var x=U.T,T={};U.T=T,of(e,!1,n,a);try{var F=c(),$=U.S;if($!==null&&$(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var fe=hx(F,o);mo(e,n,fe,si(e))}else mo(e,n,o,si(e))}catch(_e){mo(e,n,{then:function(){},status:"rejected",reason:_e},si())}finally{K.p=f,x!==null&&T.types!==null&&(x.types=T.types),U.T=x}}function xx(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Sm(e).queue;ym(e,c,n,Q,a===null?xx:function(){return Mm(e),a(o)})}function Sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mm(e){var n=Sm(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},si())}function sf(){return Rn(Lo)}function bm(){return rn().memoizedState}function Em(){return rn().memoizedState}function yx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ta(a);var o=Aa(n,e,a);o!==null&&(Yn(o,n,a),co(o,n,a)),n={cache:Ou()},e.payload=n;return}n=n.return}}function Sx(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Am(n,a):(a=bu(e,n,a,o),a!==null&&(Yn(a,e,o),Rm(a,n,o)))}function Tm(e,n,a){var o=si();mo(e,n,a,o)}function mo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Am(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,ei(T,x))return ul(e,n,c,0),Vt===null&&cl(),!1}catch{}finally{}if(a=bu(e,n,c,o),a!==null)return Yn(a,e,o),Rm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:If(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(r(479))}else n=bu(e,a,o,2),n!==null&&Yn(n,e,2)}function Dl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function Am(e,n){Jr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,js(e,a)}}var go={readContext:Rn,use:Al,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};go.useEffectEvent=en;var Cm={readContext:Rn,use:Al,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:fm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(gr){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(gr){ze(!0);try{a(n)}finally{ze(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Sx.bind(null,ot,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,a=Tm.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Fn();return af(a,e,n)},useTransition:function(){var e=$u(!1);return e=ym.bind(null,ot,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ot,c=Fn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Vt===null)throw Error(r(349));(vt&127)!==0||Zp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,fm(Qp.bind(null,o,f,e),[e]),o.flags|=2048,es(9,{destroy:void 0},Kp.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=Vt.identifierPrefix;if(Mt){var a=Pi,o=zi;a=(o&~(1<<32-$e(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=px++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:sm,useActionState:sm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return Fn().memoizedState=yx.bind(null,ot)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Rn,use:Al,useCallback:_m,useContext:Rn,useEffect:tf,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:vm,useReducer:Rl,useRef:um,useState:function(){return Rl(Ki)},useDebugValue:nf,useDeferredValue:function(e,n){var a=rn();return xm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Rl(Ki)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Yp,useId:bm,useHostTransitionStatus:sf,useFormState:om,useActionState:om,useOptimistic:function(e,n){var a=rn();return em(a,Ft,e,n)},useMemoCache:Ku,useCacheRefresh:Em};lf.useEffectEvent=dm;var wm={readContext:Rn,use:Al,useCallback:_m,useContext:Rn,useEffect:tf,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:vm,useReducer:Ju,useRef:um,useState:function(){return Ju(Ki)},useDebugValue:nf,useDeferredValue:function(e,n){var a=rn();return Ft===null?af(a,e,n):xm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Ju(Ki)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:Yp,useId:bm,useHostTransitionStatus:sf,useFormState:cm,useActionState:cm,useOptimistic:function(e,n){var a=rn();return Ft!==null?em(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Em};wm.useEffectEvent=dm;function cf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),c=Ta(o);c.payload=n,a!=null&&(c.callback=a),n=Aa(e,c,o),n!==null&&(Yn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),c=Ta(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Aa(e,c,o),n!==null&&(Yn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ta(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(e,o,a),n!==null&&(Yn(n,e,a),co(n,e,a))}};function Dm(e,n,a,o,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(c,f):!0}function Um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function _r(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Lm(e){ll(e)}function Nm(e){console.error(e)}function Om(e){ll(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ff(e,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Pm(e){return e=Ta(e),e.tag=3,e}function Bm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){zm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){zm(n,a,o),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Mx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?kl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Pf(e,o,c)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Pf(e,o,c)),!1}throw Error(r(435,a.tag))}return Pf(e,o,c),kl(),!1}if(Mt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==wu&&(e=Error(r(422),{cause:o}),ao(ui(e,a)))):(o!==wu&&(n=Error(r(423),{cause:o}),ao(ui(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ui(o,a),c=ff(e.stateNode,o,c),Hu(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=ui(f,a),Eo===null?Eo=[f]:Eo.push(f),tn!==4&&(tn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ff(a.stateNode,o,e),Hu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(La===null||!La.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pm(c),Bm(c,e,a,o),Hu(a,c),!1}a=a.return}while(a!==null);return!1}var df=Error(r(461)),fn=!1;function Cn(e,n,a,o){n.child=e===null?Gp(n,null,a,o):mr(n,e.child,a,o)}function Fm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return fr(n),o=Wu(e,n,a,x,f,c),T=qu(),e!==null&&!fn?(Yu(e,n,c),Qi(e,n,c)):(Mt&&T&&Ru(n),n.flags|=1,Cn(e,n,o,c),n.child)}function Im(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hm(e,n,f,o,c)):(e=dl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!yf(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(x,o)&&e.ref===n.ref)return Qi(e,n,c)}return n.flags|=1,e=Xi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Hm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(to(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,yf(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Qi(e,n,c)}return hf(e,n,a,o,c)}function Gm(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Vm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Vu(),Xp(n);else return o=n.lanes=536870912,Vm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(gl(n,f.cachePool),jp(n,f),Ca(),n.memoizedState=null):(e!==null&&gl(n,null),Vu(),Ca());return Cn(e,n,c,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vm(e,n,a,o,c){var f=Pu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gl(n,null),Vu(),Xp(n),e!==null&&Wr(e,n,o,!0),n.childLanes=c,null}function Ll(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function km(e,n,a){return mr(n,e.child,null,a),e=Ll(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function bx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(o.mode==="hidden")return e=Ll(n,o),n.lanes=536870912,_o(null,e);if(ju(n),(e=Wt)?(e=t0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=n,n.child=a,An=n,Wt=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Ll(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(ju(n),c)if(n.flags&256)n.flags&=-257,n=km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Wr(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(o=Vt,o!==null&&(x=Oi(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,or(e,x),Yn(o,e,x),df;kl(),n=km(e,n,a)}else e=f.treeContext,Wt=mi(x.nextSibling),An=n,Mt=!0,Sa=null,hi=!1,e!==null&&wp(n,e),n=Ll(n,o),n.flags|=4096;return n}return e=Xi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function hf(e,n,a,o,c){return fr(n),a=Wu(e,n,a,o,void 0,c),o=qu(),e!==null&&!fn?(Yu(e,n,c),Qi(e,n,c)):(Mt&&o&&Ru(n),n.flags|=1,Cn(e,n,a,c),n.child)}function jm(e,n,a,o,c,f){return fr(n),n.updateQueue=null,a=qp(n,o,a,c),Wp(e),o=qu(),e!==null&&!fn?(Yu(e,n,f),Qi(e,n,f)):(Mt&&o&&Ru(n),n.flags|=1,Cn(e,n,a,f),n.child)}function Xm(e,n,a,o,c){if(fr(n),n.stateNode===null){var f=Vr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Rn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Rn(x):Vr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(cf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&uf.enqueueReplaceState(f,f.state,null),fo(n,o,f,c),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,F=_r(a,T);f.props=F;var $=f.context,fe=a.contextType;x=Vr,typeof fe=="object"&&fe!==null&&(x=Rn(fe));var _e=a.getDerivedStateFromProps;fe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&Um(n,f,o,x),Ea=!1;var ee=n.memoizedState;f.state=ee,fo(n,o,f,c),uo(),$=n.memoizedState,T||ee!==$||Ea?(typeof _e=="function"&&(cf(n,a,_e,o),$=n.memoizedState),(F=Ea||Dm(n,a,F,o,ee,$,x))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Iu(e,n),x=n.memoizedProps,fe=_r(a,x),f.props=fe,_e=n.pendingProps,ee=f.context,$=a.contextType,F=Vr,typeof $=="object"&&$!==null&&(F=Rn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_e||ee!==F)&&Um(n,f,o,F),Ea=!1,ee=n.memoizedState,f.state=ee,fo(n,o,f,c),uo();var ce=n.memoizedState;x!==_e||ee!==ce||Ea||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof T=="function"&&(cf(n,a,T,o),ce=n.memoizedState),(fe=Ea||Dm(n,a,fe,o,ee,ce,F)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=F,o=fe):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Nl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=mr(n,e.child,null,c),n.child=mr(n,null,a,c)):Cn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Qi(e,n,c),e}function Wm(e,n,a,o){return cr(),n.flags|=256,Cn(e,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:zp()}}function gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function qm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?Ra(n):Ca(),(e=Wt)?(e=t0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=n,n.child=a,An=n,Wt=null)):e=null,e===null)throw Ma(n);return Jf(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Ca(),c=n.mode,T=Ol({mode:"hidden",children:T},c),o=lr(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=mf(a),o.childLanes=gf(e,x,a),n.memoizedState=pf,_o(null,o)):(Ra(n),_f(n,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(Ra(n),n.flags&=-257,n=vf(e,n,a)):n.memoizedState!==null?(Ca(),n.child=e.child,n.flags|=128,n=null):(Ca(),T=o.fallback,c=n.mode,o=Ol({mode:"visible",children:o.children},c),T=lr(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,mr(n,e.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=gf(e,x,a),n.memoizedState=pf,n=_o(null,o));else if(Ra(n),Jf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(r(419)),o.stack="",o.digest=x,ao({value:o,source:null,stack:null}),n=vf(e,n,a)}else if(fn||Wr(e,n,a,!1),x=(a&e.childLanes)!==0,fn||x){if(x=Vt,x!==null&&(o=Oi(x,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,or(e,o),Yn(x,e,o),df;Qf(T)||kl(),n=vf(e,n,a)}else Qf(T)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Wt=mi(T.nextSibling),An=n,Mt=!0,Sa=null,hi=!1,e!==null&&wp(n,e),n=_f(n,o.children),n.flags|=4096);return n}return c?(Ca(),T=o.fallback,c=n.mode,F=e.child,$=F.sibling,o=Xi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,$!==null?T=Xi($,T):(T=lr(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,_o(null,o),o=n.child,T=e.child.memoizedState,T===null?T=mf(a):(c=T.cachePool,c!==null?(F=cn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=zp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=gf(e,x,a),n.memoizedState=pf,_o(e.child,o)):(Ra(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function _f(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function vf(e,n,a){return mr(n,e.child,null,a),e=_f(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ym(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lu(e.return,n,a)}function xf(e,n,a,o,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function Zm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=an.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,Se(an,x),Cn(e,n,o,a),o=Mt?io:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ym(e,a,n);else if(e.tag===19)Ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),xf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}xf(n,!0,a,null,f,o);break;case"together":xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function Ex(e,n,a){switch(n.tag){case 3:Ge(n,n.stateNode.containerInfo),ba(n,cn,e.memoizedState.cache),cr();break;case 27:case 5:rt(n);break;case 4:Ge(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(e,n,a):(Ra(n),e=Qi(e,n,a),e!==null?e.sibling:null);Ra(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Zm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(an,an.current),o)break;return null;case 22:return n.lanes=0,Gm(e,n,a,n.pendingProps);case 24:ba(n,cn,e.memoizedState.cache)}return Qi(e,n,a)}function Km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return fn=!1,Ex(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Mt&&(n.flags&1048576)!==0&&Cp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=hr(n.elementType),n.type=e,typeof e=="function")Eu(e)?(o=_r(e,o),n.tag=1,n=Xm(null,n,e,o,a)):(n.tag=0,n=hf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Fm(null,n,e,o,a);break e}else if(c===P){n.tag=14,n=Im(null,n,e,o,a);break e}}throw n=me(e)||e,Error(r(306,n,""))}}return n;case 0:return hf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=_r(o,n.pendingProps),Xm(e,n,o,c,a);case 3:e:{if(Ge(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Iu(e,n),fo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,ba(n,cn,o),o!==f.cache&&Nu(n,[cn],a,!0),uo(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(e,n,o,a);break e}else if(o!==c){c=ui(Error(r(424)),n),ao(c),n=Wm(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Wt=mi(e.firstChild),An=n,Mt=!0,Sa=null,hi=!0,a=Gp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cr(),o===c){n=Qi(e,n,a);break e}Cn(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=o0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,o=Kl(Ee.current).createElement(a),o[Jt]=n,o[En]=e,wn(o,a,e),k(o),n.stateNode=o):n.memoizedState=o0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return rt(n),e===null&&Mt&&(o=n.stateNode=a0(n.type,n.pendingProps,Ee.current),An=n,hi=!0,c=Wt,Pa(n.type)?($f=c,Wt=mi(o.firstChild)):Wt=c),Cn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=o=Wt)&&(o=ey(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,An=n,Wt=mi(o.firstChild),hi=!1,c=!0):c=!1),c||Ma(n)),rt(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,Yf(c,f)?o=null:x!==null&&Yf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Wu(e,n,mx,null,null,a),Lo._currentValue=c),Nl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Mt&&((e=a=Wt)&&(a=ty(a,n.pendingProps,hi),a!==null?(n.stateNode=a,An=n,Wt=null,e=!0):e=!1),e||Ma(n)),null;case 13:return qm(e,n,a);case 4:return Ge(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mr(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ba(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,fr(n),c=Rn(c),o=o(c),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return Im(e,n,n.type,n.pendingProps,a);case 15:return Hm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 31:return bx(e,n,a);case 22:return Gm(e,n,a,n.pendingProps);case 24:return fr(n),o=Rn(cn),e===null?(c=Pu(),c===null&&(c=Vt,f=Ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Fu(n),ba(n,cn,c)):((e.lanes&a)!==0&&(Iu(e,n),fo(n,null,null,a),uo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ba(n,cn,o)):(o=f.cache,ba(n,cn,o),o!==c.cache&&Nu(n,[cn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(e){e.flags|=4}function Sf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw pr=vl,Bu}else e.flags&=-16777217}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!d0(n))if(bg())e.flags|=8192;else throw pr=vl,Bu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?mn():536870912,e.lanes|=n,as|=n)}function vo(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Tx(e,n,a){var o=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(cn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(qt(n),Qm(n,f)):(qt(n),Sf(n,c,null,o,a))):f?f!==e.memoizedState?(Ji(n),qt(n),Qm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ji(n),qt(n),Sf(n,c,e,o,a)),null;case 27:if(zt(n),a=Ee.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=Z.current,Xr(n)?Dp(n):(e=a0(c,o,a),n.stateNode=e,Ji(n))}return qt(n),null;case 5:if(zt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=Z.current,Xr(n))Dp(n);else{var x=Kl(Ee.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[Jt]=n,f[En]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(wn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return qt(n),Sf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ee.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=An,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Jt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||qg(e.nodeValue,a)),e||Ma(n,!0)}else e=Kl(e).createTextNode(o),e[Jt]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Xr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Jt]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Jt]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),qt(n),null);case 4:return Be(),e===null&&kf(n.stateNode.containerInfo),qt(n),null;case 10:return Yi(n.type),qt(n),null;case 19:if(ae(an),o=n.memoizedState,o===null)return qt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)vo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,vo(o,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Tp(a,e),a=a.sibling;return Se(an,an.current&1|2),Mt&&Wi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&he()>Hl&&(n.flags|=128,c=!0,vo(o,!1),n.lanes=4194304)}else{if(!c)if(e=Ml(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return qt(n),null}else 2*he()-o.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,c=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=he(),e.sibling=null,a=an.current,Se(an,c?a&1|2:a&1),Mt&&Wi(n,o.treeForkCount),e):(qt(n),null);case 22:case 23:return ii(n),ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ae(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(cn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ax(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(cn),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(an),null;case 4:return Be(),null;case 10:return Yi(n.type),null;case 22:case 23:return ii(n),ku(),e!==null&&ae(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(cn),null;case 25:return null;default:return null}}function Jm(e,n){switch(Cu(n),n.tag){case 3:Yi(cn),Be();break;case 26:case 27:case 5:zt(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:ae(an);break;case 10:Yi(n.type);break;case 22:case 23:ii(n),ku(),e!==null&&ae(dr);break;case 24:Yi(cn)}}function xo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(T){Ot(n,n.return,T)}}function wa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var F=a,$=T;try{$()}catch(fe){Ot(c,F,fe)}}}o=o.next}while(o!==f)}}catch(fe){Ot(n,n.return,fe)}}function $m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(o){Ot(e,e.return,o)}}}function eg(e,n,a){a.props=_r(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ot(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ot(e,n,c)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ot(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ot(e,n,c)}else a.current=null}function tg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ot(e,e.return,c)}}function Mf(e,n,a){try{var o=e.stateNode;Yx(o,e.type,a,n),o[En]=n}catch(c){Ot(e,e.return,c)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function bf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ef(e,n,a),e=e.sibling;e!==null;)Ef(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,o,a),n[Jt]=e,n[En]=a}catch(f){Ot(e,e.return,f)}}var $i=!1,dn=!1,Tf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Rx(e,n){if(e=e.containerInfo,Wf=ic,e=gp(e),_u(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,T=-1,F=-1,$=0,fe=0,_e=e,ee=null;t:for(;;){for(var ce;_e!==a||c!==0&&_e.nodeType!==3||(T=x+c),_e!==f||o!==0&&_e.nodeType!==3||(F=x+o),_e.nodeType===3&&(x+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)ee=_e,_e=ce;for(;;){if(_e===e)break t;if(ee===a&&++$===c&&(T=x),ee===f&&++fe===o&&(F=x),(ce=_e.nextSibling)!==null)break;_e=ee,ee=_e.parentNode}_e=ce}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:e,selectionRange:a},ic=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var He=_r(a.type,c);e=o.getSnapshotBeforeUpdate(He,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Je){Ot(a,a.return,Je)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),o&4&&xo(5,a);break;case 1:if(ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ot(a,a.return,x)}else{var c=_r(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ot(a,a.return,x)}}o&64&&$m(a),o&512&&yo(a,a.return);break;case 3:if(ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(x){Ot(a,a.return,x)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:ta(e,a),n===null&&o&4&&tg(a),o&512&&yo(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),o&4&&lg(e,a);break;case 13:ta(e,a),o&4&&cg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Px.bind(null,a),ny(e,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||dn,c=$i;var f=dn;$i=o,(dn=n)&&!f?na(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),$i=c,dn=f}break;case 30:break;default:ta(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,jn=!1;function ea(e,n,a){for(a=a.child;a!==null;)og(e,n,a),a=a.sibling}function og(e,n,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ye,a)}catch{}switch(a.tag){case 26:dn||Bi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Bi(a,n);var o=Kt,c=jn;Pa(a.type)&&(Kt=a.stateNode,jn=!1),ea(e,n,a),wo(a.stateNode),Kt=o,jn=c;break;case 5:dn||Bi(a,n);case 6:if(o=Kt,c=jn,Kt=null,ea(e,n,a),Kt=o,jn=c,Kt!==null)if(jn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Ot(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Ot(a,n,f)}break;case 18:Kt!==null&&(jn?(e=Kt,$g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):$g(Kt,a.stateNode));break;case 4:o=Kt,c=jn,Kt=a.stateNode.containerInfo,jn=!0,ea(e,n,a),Kt=o,jn=c;break;case 0:case 11:case 14:case 15:wa(2,a,n),dn||wa(4,a,n),ea(e,n,a);break;case 1:dn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eg(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ea(e,n,a),dn=o;break;default:ea(e,n,a)}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){Ot(n,n.return,a)}}}function cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){Ot(n,n.return,a)}}function Cx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(r(435,e.tag))}}function Bl(e,n){var a=Cx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Bx.bind(null,e,o);o.then(c,c)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,x=n,T=x;e:for(;T!==null;){switch(T.tag){case 27:if(Pa(T.type)){Kt=T.stateNode,jn=!1;break e}break;case 5:Kt=T.stateNode,jn=!1;break e;case 3:case 4:Kt=T.stateNode.containerInfo,jn=!0;break e}T=T.return}if(Kt===null)throw Error(r(160));og(f,x,c),Kt=null,jn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,e),n=n.sibling}var Ei=null;function ug(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(wa(3,e,e.return),xo(3,e),wa(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ei;if(Xn(n,e),Wn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ir]||f[Jt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,o,a),f[Jt]=e,k(f),o=f;break e;case"link":var x=u0("link","href",c).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break t}}f=c.createElement(o),wn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=u0("meta","content",c).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break t}}f=c.createElement(o),wn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[Jt]=e,k(f),o=f}e.stateNode=o}else f0(c,e.type,e.stateNode);else e.stateNode=c0(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?f0(c,e.type,e.stateNode):c0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(dn||a===null||Bi(a,a.return)),a!==null&&o&4&&Mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(dn||a===null||Bi(a,a.return)),e.flags&32){c=e.stateNode;try{Vn(c,"")}catch(He){Ot(e,e.return,He)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Mf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Tf=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(He){Ot(e,e.return,He)}}break;case 3:if($l=null,c=Ei,Ei=Ql(n.containerInfo),Xn(n,e),Ei=c,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(He){Ot(e,e.return,He)}Tf&&(Tf=!1,fg(e));break;case 4:o=Ei,Ei=Ql(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ei=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=he()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=$i,fe=dn;if($i=$||c,dn=fe||F,Xn(n,e),dn=fe,$i=$,Wn(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||$i||dn||vr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=F.stateNode;var _e=F.memoizedProps.style,ee=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(He){Ot(F,F.return,He)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(He){Ot(F,F.return,He)}}}else if(n.tag===18){if(a===null){F=n;try{var ce=F.stateNode;c?e0(ce,!0):e0(F.stateNode,!1)}catch(He){Ot(F,F.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bl(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=bf(e);Pl(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Vn(x,""),a.flags&=-33);var T=bf(e);Pl(e,T,x);break;case 3:case 4:var F=a.stateNode.containerInfo,$=bf(e);Ef(e,$,F);break;default:throw Error(r(161))}}catch(fe){Ot(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function vr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),vr(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),vr(n);break;case 27:wo(n.stateNode);case 26:case 5:Bi(n,n.return),vr(n);break;case 22:n.memoizedState===null&&vr(n);break;case 30:vr(n);break;default:vr(n)}e=e.sibling}}function na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),xo(4,f);break;case 1:if(na(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ot(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Vp(F[c],T)}catch($){Ot(o,o.return,$)}}a&&x&64&&$m(f),yo(f,f.return);break;case 27:ig(f);case 26:case 5:na(c,f,a),a&&o===null&&x&4&&tg(f),yo(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&x&4&&lg(c,f);break;case 13:na(c,f,a),a&&x&4&&cg(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),yo(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function Af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(e,n,a,o),n=n.sibling}function dg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),c&2048&&xo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(c&2048){Ti(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ot(n,n.return,F)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,o):So(e,n):f._visibility&2?Ti(e,n,a,o):(f._visibility|=2,ts(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Af(x,n);break;case 24:Ti(e,n,a,o),c&2048&&Rf(n.alternate,n);break;default:Ti(e,n,a,o)}}function ts(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,T=a,F=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:ts(f,x,T,F,c),xo(8,x);break;case 23:break;case 22:var fe=x.stateNode;x.memoizedState!==null?fe._visibility&2?ts(f,x,T,F,c):So(f,x):(fe._visibility|=2,ts(f,x,T,F,c)),c&&$&2048&&Af(x.alternate,x);break;case 24:ts(f,x,T,F,c),c&&$&2048&&Rf(x.alternate,x);break;default:ts(f,x,T,F,c)}n=n.sibling}}function So(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:So(a,o),c&2048&&Af(o.alternate,o);break;case 24:So(a,o),c&2048&&Rf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function ns(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)hg(e,n,a),e=e.sibling}function hg(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&Mo&&e.memoizedState!==null&&py(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var o=Ei;Ei=Ql(e.stateNode.containerInfo),ns(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ns(e,n,a),Mo=o):ns(e,n,a));break;default:ns(e,n,a)}}function pg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,gg(o,e)}pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 0:case 11:case 15:bo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:bo(e);break;case 12:bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):bo(e);break;default:bo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,gg(o,e)}pg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function gg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=e;Sn!==null;){o=Sn;var c=o.sibling,f=o.return;if(sg(o),o===a){Sn=null;break e}if(c!==null){c.return=f,Sn=c;break e}Sn=f}}}var wx={getCacheForType:function(e){var n=Rn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},Dx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Vt=null,pt=null,vt=0,Nt=0,ai=null,Da=!1,is=!1,Cf=!1,ia=0,tn=0,Ua=0,xr=0,wf=0,ri=0,as=0,Eo=null,qn=null,Df=!1,Il=0,_g=0,Hl=1/0,Gl=null,La=null,_n=0,Na=null,rs=null,aa=0,Uf=0,Lf=null,vg=null,To=0,Nf=null;function si(){return(Dt&2)!==0&&vt!==0?vt&-vt:U.T!==null?If():Xs()}function xg(){if(ri===0)if((vt&536870912)===0||Mt){var e=ue;ue<<=1,(ue&3932160)===0&&(ue=262144),ri=e}else ri=536870912;return e=ni.current,e!==null&&(e.flags|=32),ri}function Yn(e,n,a){(e===Vt&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Oa(e,vt,ri,!1)),bn(e,a),((Dt&2)===0||e!==Vt)&&(e===Vt&&((Dt&2)===0&&(xr|=a),tn===4&&Oa(e,vt,ri,!1)),Fi(e))}function yg(e,n,a){if((Dt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||et(e,n),c=o?Nx(e,n):zf(e,n,!0),f=o;do{if(c===0){is&&!o&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ux(a)){c=zf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var T=e;c=Eo;var F=T.current.memoizedState.isDehydrated;if(F&&(ss(T,x).flags|=256),x=zf(T,x,!1),x!==2){if(Cf&&!F){T.errorRecoveryDisabledLanes|=f,xr|=f,c=4;break e}f=qn,qn=c,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){ss(e,0),Oa(e,n,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,ri,!Da);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Il+300-he(),10<c)){if(Oa(o,n,ri,!Da),Ue(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=Qg(Sg.bind(null,o,a,qn,Gl,Df,n,ri,xr,as,Da,f,"Throttled",-0,0),c);break e}Sg(o,a,qn,Gl,Df,n,ri,xr,as,Da,f,null,-0,0)}}break}while(!0);Fi(e)}function Sg(e,n,a,o,c,f,x,T,F,$,fe,_e,ee,ce){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},hg(n,f,_e);var He=(f&62914560)===f?Il-he():(f&4194048)===f?_g-he():0;if(He=my(_e,He),He!==null){aa=f,e.cancelPendingCommit=He(wg.bind(null,e,n,f,a,o,c,x,T,F,fe,_e,null,ee,ce)),Oa(e,f,x,!$);return}}wg(e,n,f,a,o,c,x,T,F)}function Ux(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ei(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,o){n&=~wf,n&=~xr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-$e(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&ks(e,a,n)}function Vl(){return(Dt&6)===0?(Ao(0),!1):!0}function Of(){if(pt!==null){if(Nt===0)var e=pt.return;else e=pt,qi=ur=null,Zu(e),Kr=null,oo=0,e=pt;for(;e!==null;)Jm(e.alternate,e),e=e.return;pt=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,Of(),Vt=e,pt=a=Xi(e.current,null),vt=n,Nt=0,ai=null,Da=!1,is=et(e,n),Cf=!1,as=ri=wf=xr=Ua=tn=0,qn=Eo=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-$e(o),f=1<<c;n|=e[c],o&=~f}return ia=n,cl(),a}function Mg(e,n){ot=null,U.H=go,n===Zr||n===_l?(n=Fp(),Nt=3):n===Bu?(n=Fp(),Nt=4):Nt=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,pt===null&&(tn=1,Ul(e,ui(n,e.current)))}function bg(){var e=ni.current;return e===null?!0:(vt&4194048)===vt?pi===null:(vt&62914560)===vt||(vt&536870912)!==0?e===pi:!1}function Eg(){var e=U.H;return U.H=go,e===null?go:e}function Tg(){var e=U.A;return U.A=wx,e}function kl(){tn=4,Da||(vt&4194048)!==vt&&ni.current!==null||(is=!0),(Ua&134217727)===0&&(xr&134217727)===0||Vt===null||Oa(Vt,vt,ri,!1)}function zf(e,n,a){var o=Dt;Dt|=2;var c=Eg(),f=Tg();(Vt!==e||vt!==n)&&(Gl=null,ss(e,n)),n=!1;var x=tn;e:do try{if(Nt!==0&&pt!==null){var T=pt,F=ai;switch(Nt){case 8:Of(),x=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=Nt;if(Nt=0,ai=null,os(e,T,F,$),a&&is){x=0;break e}break;default:$=Nt,Nt=0,ai=null,os(e,T,F,$)}}Lx(),x=tn;break}catch(fe){Mg(e,fe)}while(!0);return n&&e.shellSuspendCounter++,qi=ur=null,Dt=o,U.H=c,U.A=f,pt===null&&(Vt=null,vt=0,cl()),x}function Lx(){for(;pt!==null;)Ag(pt)}function Nx(e,n){var a=Dt;Dt|=2;var o=Eg(),c=Tg();Vt!==e||vt!==n?(Gl=null,Hl=he()+500,ss(e,n)):is=et(e,n);e:do try{if(Nt!==0&&pt!==null){n=pt;var f=ai;t:switch(Nt){case 1:Nt=0,ai=null,os(e,n,f,1);break;case 2:case 9:if(Pp(f)){Nt=0,ai=null,Rg(n);break}n=function(){Nt!==2&&Nt!==9||Vt!==e||(Nt=7),Fi(e)},f.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:Pp(f)?(Nt=0,ai=null,Rg(n)):(Nt=0,ai=null,os(e,n,f,7));break;case 5:var x=null;switch(pt.tag){case 26:x=pt.memoizedState;case 5:case 27:var T=pt;if(x?d0(x):T.stateNode.complete){Nt=0,ai=null;var F=T.sibling;if(F!==null)pt=F;else{var $=T.return;$!==null?(pt=$,jl($)):pt=null}break t}}Nt=0,ai=null,os(e,n,f,5);break;case 6:Nt=0,ai=null,os(e,n,f,6);break;case 8:Of(),tn=6;break e;default:throw Error(r(462))}}Ox();break}catch(fe){Mg(e,fe)}while(!0);return qi=ur=null,U.H=o,U.A=c,Dt=a,pt!==null?0:(Vt=null,vt=0,cl(),tn)}function Ox(){for(;pt!==null&&!A();)Ag(pt)}function Ag(e){var n=Km(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?jl(e):pt=n}function Rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Zu(n);default:Jm(a,n),n=pt=Tp(n,ia),n=Km(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?jl(e):pt=n}function os(e,n,a,o){qi=ur=null,Zu(n),Kr=null,oo=0;var c=n.return;try{if(Mx(e,c,n,a,vt)){tn=1,Ul(e,ui(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;tn=1,Ul(e,ui(a,e.current)),pt=null;return}n.flags&32768?(Mt||o===1?e=!0:is||(vt&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){Cg(n,Da);return}e=n.return;var a=Tx(n.alternate,n,ia);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);tn===0&&(tn=5)}function Cg(e,n){do{var a=Ax(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);tn=6,pt=null}function wg(e,n,a,o,c,f,x,T,F){e.cancelPendingCommit=null;do Xl();while(_n!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Mu,yi(e,a,f,x,T,F),e===Vt&&(pt=Vt=null,vt=0),rs=n,Na=e,aa=a,Uf=f,Lf=c,vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fx(De,function(){return Og(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,c=K.p,K.p=2,x=Dt,Dt|=4;try{Rx(e,n,a)}finally{Dt=x,K.p=c,U.T=o}}_n=1,Dg(),Ug(),Lg()}}function Dg(){if(_n===1){_n=0;var e=Na,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=K.p;K.p=2;var c=Dt;Dt|=4;try{ug(n,e);var f=qf,x=gp(e.containerInfo),T=f.focusedElem,F=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&mp(T.ownerDocument.documentElement,T)){if(F!==null&&_u(T)){var $=F.start,fe=F.end;if(fe===void 0&&(fe=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(fe,T.value.length);else{var _e=T.ownerDocument||document,ee=_e&&_e.defaultView||window;if(ee.getSelection){var ce=ee.getSelection(),He=T.textContent.length,Je=Math.min(F.start,He),Ht=F.end===void 0?Je:Math.min(F.end,He);!ce.extend&&Je>Ht&&(x=Ht,Ht=Je,Je=x);var Y=pp(T,Je),V=pp(T,Ht);if(Y&&V&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var J=_e.createRange();J.setStart(Y.node,Y.offset),ce.removeAllRanges(),Je>Ht?(ce.addRange(J),ce.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),ce.addRange(J))}}}}for(_e=[],ce=T;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var pe=_e[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}ic=!!Wf,qf=Wf=null}finally{Dt=c,K.p=o,U.T=a}}e.current=n,_n=2}}function Ug(){if(_n===2){_n=0;var e=Na,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=K.p;K.p=2;var c=Dt;Dt|=4;try{rg(e,n.alternate,n)}finally{Dt=c,K.p=o,U.T=a}}_n=3}}function Lg(){if(_n===4||_n===3){_n=0,te();var e=Na,n=rs,a=aa,o=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,rs=Na=null,Ng(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(La=null),Or(a),n=n.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ye,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,c=K.p,K.p=2,U.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{U.T=n,K.p=c}}(aa&3)!==0&&Xl(),Fi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Nf?To++:(To=0,Nf=e):To=0,Ao(0)}}function Ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Xl(){return Dg(),Ug(),Lg(),Og()}function Og(){if(_n!==5)return!1;var e=Na,n=Uf;Uf=0;var a=Or(aa),o=U.T,c=K.p;try{K.p=32>a?32:a,U.T=null,a=Lf,Lf=null;var f=Na,x=aa;if(_n=0,rs=Na=null,aa=0,(Dt&6)!==0)throw Error(r(331));var T=Dt;if(Dt|=4,mg(f.current),dg(f,f.current,x,a),Dt=T,Ao(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ye,f)}catch{}return!0}finally{K.p=c,U.T=o,Ng(e,n)}}function zg(e,n,a){n=ui(a,n),n=ff(e.stateNode,n,2),e=Aa(e,n,2),e!==null&&(bn(e,2),Fi(e))}function Ot(e,n,a){if(e.tag===3)zg(e,e,a);else for(;n!==null;){if(n.tag===3){zg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){e=ui(a,e),a=Pm(2),o=Aa(n,a,2),o!==null&&(Bm(a,o,n,e),bn(o,2),Fi(o));break}}n=n.return}}function Pf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Dx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Cf=!0,c.add(a),e=zx.bind(null,e,n,a),n.then(e,e))}function zx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Vt===e&&(vt&a)===a&&(tn===4||tn===3&&(vt&62914560)===vt&&300>he()-Il?(Dt&2)===0&&ss(e,0):wf|=a,as===vt&&(as=0)),Fi(e)}function Pg(e,n){n===0&&(n=mn()),e=or(e,n),e!==null&&(bn(e,n),Fi(e))}function Px(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(e,a)}function Bx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Pg(e,a)}function Fx(e,n){return We(e,n)}var Wl=null,ls=null,Bf=!1,ql=!1,Ff=!1,za=0;function Fi(e){e!==ls&&e.next===null&&(ls===null?Wl=ls=e:ls=ls.next=e),ql=!0,Bf||(Bf=!0,Hx())}function Ao(e,n){if(!Ff&&ql){Ff=!0;do for(var a=!1,o=Wl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-$e(42|e)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Hg(o,f))}else f=vt,f=Ue(o,o===Vt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||et(o,f)||(a=!0,Hg(o,f));o=o.next}while(a);Ff=!1}}function Ix(){Bg()}function Bg(){ql=Bf=!1;var e=0;za!==0&&Kx()&&(e=za);for(var n=he(),a=null,o=Wl;o!==null;){var c=o.next,f=Fg(o,n);f===0?(o.next=null,a===null?Wl=c:a.next=c,c===null&&(ls=a)):(a=o,(e!==0||(f&3)!==0)&&(ql=!0)),o=c}_n!==0&&_n!==5||Ao(e),za!==0&&(za=0)}function Fg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-$e(f),T=1<<x,F=c[x];F===-1?((T&a)===0||(T&o)!==0)&&(c[x]=Zt(T,n)):F<=n&&(e.expiredLanes|=T),f&=~T}if(n=Vt,a=vt,a=Ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||et(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&N(o),Or(a)){case 2:case 8:a=je;break;case 32:a=De;break;case 268435456:a=_t;break;default:a=De}return o=Ig.bind(null,e),a=We(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&N(o),e.callbackPriority=2,e.callbackNode=null,2}function Ig(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var o=vt;return o=Ue(e,e===Vt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(yg(e,o,n),Fg(e,he()),e.callbackNode!=null&&e.callbackNode===a?Ig.bind(null,e):null)}function Hg(e,n){if(Xl())return null;yg(e,n,!0)}function Hx(){Jx(function(){(Dt&6)!==0?We(ge,Ix):Bg()})}function If(){if(za===0){var e=qr;e===0&&(e=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),za=e}return za}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function Vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Gx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Gg((c[En]||null).action),x=o.submitter;x&&(n=(n=x[En]||null)?Gg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new rl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var F=x?Vg(c,x):new FormData(c);rf(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=x?Vg(c,x):new FormData(c),rf(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Hf=0;Hf<Su.length;Hf++){var Gf=Su[Hf],Vx=Gf.toLowerCase(),kx=Gf[0].toUpperCase()+Gf.slice(1);bi(Vx,"on"+kx)}bi(xp,"onAnimationEnd"),bi(yp,"onAnimationIteration"),bi(Sp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(rx,"onTransitionRun"),bi(sx,"onTransitionStart"),bi(ox,"onTransitionCancel"),bi(Mp,"onTransitionEnd"),Pe("onMouseEnter",["mouseout","mouseover"]),Pe("onMouseLeave",["mouseout","mouseover"]),Pe("onPointerEnter",["pointerout","pointerover"]),Pe("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],F=T.instance,$=T.currentTarget;if(T=T.listener,F!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(fe){ll(fe)}c.currentTarget=null,f=F}else for(x=0;x<o.length;x++){if(T=o[x],F=T.instance,$=T.currentTarget,T=T.listener,F!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(fe){ll(fe)}c.currentTarget=null,f=F}}}}function mt(e,n){var a=n[Ws];a===void 0&&(a=n[Ws]=new Set);var o=e+"__bubble";a.has(o)||(jg(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),jg(a,e,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Yl]){e[Yl]=!0,Te.forEach(function(a){a!=="selectionchange"&&(jx.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Vf("selectionchange",!1,n))}}function jg(e,n,a,o){switch(x0(n)){case 2:var c=vy;break;case 8:c=xy;break;default:c=ad}a=c.bind(null,n,a,e),c=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=C(T),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=f=x;continue e}T=T.parentNode}}o=o.return}Zh(function(){var $=f,fe=su(a),_e=[];e:{var ee=bp.get(e);if(ee!==void 0){var ce=rl,He=e;switch(e){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":ce=Bv;break;case"focusin":He="focus",ce=du;break;case"focusout":He="blur",ce=du;break;case"beforeblur":case"afterblur":ce=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Hv;break;case xp:case yp:case Sp:ce=Cv;break;case Mp:ce=Vv;break;case"scroll":case"scrollend":ce=bv;break;case"wheel":ce=jv;break;case"copy":case"cut":case"paste":ce=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=ep;break;case"toggle":case"beforetoggle":ce=Wv}var Je=(n&4)!==0,Ht=!Je&&(e==="scroll"||e==="scrollend"),Y=Je?ee!==null?ee+"Capture":null:ee;Je=[];for(var V=$,J;V!==null;){var pe=V;if(J=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||J===null||Y===null||(pe=Ys(V,Y),pe!=null&&Je.push(Co(V,pe,J))),Ht)break;V=V.return}0<Je.length&&(ee=new ce(ee,He,null,a,fe),_e.push({event:ee,listeners:Je}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",ee&&a!==ru&&(He=a.relatedTarget||a.fromElement)&&(C(He)||He[Vi]))break e;if((ce||ee)&&(ee=fe.window===fe?fe:(ee=fe.ownerDocument)?ee.defaultView||ee.parentWindow:window,ce?(He=a.relatedTarget||a.toElement,ce=$,He=He?C(He):null,He!==null&&(Ht=u(He),Je=He.tag,He!==Ht||Je!==5&&Je!==27&&Je!==6)&&(He=null)):(ce=null,He=$),ce!==He)){if(Je=Jh,pe="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Je=ep,pe="onPointerLeave",Y="onPointerEnter",V="pointer"),Ht=ce==null?ee:ne(ce),J=He==null?ee:ne(He),ee=new Je(pe,V+"leave",ce,a,fe),ee.target=Ht,ee.relatedTarget=J,pe=null,C(fe)===$&&(Je=new Je(Y,V+"enter",He,a,fe),Je.target=J,Je.relatedTarget=Ht,pe=Je),Ht=pe,ce&&He)t:{for(Je=Xx,Y=ce,V=He,J=0,pe=Y;pe;pe=Je(pe))J++;pe=0;for(var Ke=V;Ke;Ke=Je(Ke))pe++;for(;0<J-pe;)Y=Je(Y),J--;for(;0<pe-J;)V=Je(V),pe--;for(;J--;){if(Y===V||V!==null&&Y===V.alternate){Je=Y;break t}Y=Je(Y),V=Je(V)}Je=null}else Je=null;ce!==null&&Xg(_e,ee,ce,Je,!1),He!==null&&Ht!==null&&Xg(_e,Ht,He,Je,!0)}}e:{if(ee=$?ne($):window,ce=ee.nodeName&&ee.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ee.type==="file")var Rt=lp;else if(sp(ee))if(cp)Rt=nx;else{Rt=ex;var ke=$v}else ce=ee.nodeName,!ce||ce.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?$&&au($.elementType)&&(Rt=lp):Rt=tx;if(Rt&&(Rt=Rt(e,$))){op(_e,Rt,a,fe);break e}ke&&ke(e,ee,$),e==="focusout"&&$&&ee.type==="number"&&$.memoizedProps.value!=null&&Ln(ee,"number",ee.value)}switch(ke=$?ne($):window,e){case"focusin":(sp(ke)||ke.contentEditable==="true")&&(Ir=ke,vu=$,no=null);break;case"focusout":no=vu=Ir=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,_p(_e,a,fe);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":_p(_e,a,fe)}var lt;if(pu)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Fr?ap(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(tp&&a.locale!=="ko"&&(Fr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Fr&&(lt=Kh()):(xa=fe,cu="value"in xa?xa.value:xa.textContent,Fr=!0)),ke=Zl($,xt),0<ke.length&&(xt=new $h(xt,e,null,a,fe),_e.push({event:xt,listeners:ke}),lt?xt.data=lt:(lt=rp(a),lt!==null&&(xt.data=lt)))),(lt=Yv?Zv(e,a):Kv(e,a))&&(xt=Zl($,"onBeforeInput"),0<xt.length&&(ke=new $h("onBeforeInput","beforeinput",null,a,fe),_e.push({event:ke,listeners:xt}),ke.data=lt)),Gx(_e,e,$,a,fe)}kg(_e,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ys(e,a),c!=null&&o.unshift(Co(e,c,f)),c=Ys(e,n),c!=null&&o.push(Co(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Xx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,F=T.alternate,$=T.stateNode;if(T=T.tag,F!==null&&F===o)break;T!==5&&T!==26&&T!==27||$===null||(F=$,c?($=Ys(a,f),$!=null&&x.unshift(Co(a,$,F))):c||($=Ys(a,f),$!=null&&x.push(Co(a,$,F)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function qg(e,n){return n=Wg(n),Wg(e)===n}function It(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":qh(e,o,f);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ki);break;case"onScroll":o!=null&&mt("scroll",e);break;case"onScrollEnd":o!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":mt("beforetoggle",e),mt("toggle",e),St(e,"popover",o);break;case"xlinkActuate":At(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":At(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":At(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":At(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":At(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":At(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":At(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":At(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":At(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":St(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sv.get(a)||a,St(e,a,o))}}function Xf(e,n,a,o,c,f){switch(a){case"style":qh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&mt("scroll",e);break;case"onScrollEnd":o!=null&&mt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):St(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,x,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),o&&It(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var T=f=x=c=null,F=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":c=fe;break;case"type":x=fe;break;case"checked":F=fe;break;case"defaultChecked":$=fe;break;case"value":f=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:It(e,n,o,fe,a,null)}}Bn(e,f,T,F,$,x,c,!1);return;case"select":mt("invalid",e),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:It(e,n,c,T,a,null)}n=f,a=x,e.multiple=!!o,n!=null?$t(e,!!o,n,!1):a!=null&&$t(e,!!o,a,!0);return;case"textarea":mt("invalid",e),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(e,n,x,T,a,null)}zr(e,o,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(e,n,F,o,a,null)}return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)mt(Ro[o],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,$,o,a,null)}return;default:if(au(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Xf(e,n,fe,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&It(e,n,T,o,a,null))}function Yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,F=null,$=null,fe=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=_e;default:o.hasOwnProperty(ce)||It(e,n,ce,null,o,_e)}}for(var ee in o){var ce=o[ee];if(_e=a[ee],o.hasOwnProperty(ee)&&(ce!=null||_e!=null))switch(ee){case"type":f=ce;break;case"name":c=ce;break;case"checked":$=ce;break;case"defaultChecked":fe=ce;break;case"value":x=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==_e&&It(e,n,ee,ce,o,_e)}}Bt(e,x,T,F,$,fe,f,c);return;case"select":ce=x=T=ee=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ce=F;default:o.hasOwnProperty(f)||It(e,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ee=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==F&&It(e,n,c,f,o,F)}n=T,a=x,o=ce,ee!=null?$t(e,!!a,ee,!1):!!o!=!!a&&(n!=null?$t(e,!!a,n,!0):$t(e,!!a,a?[]:"",!1));return;case"textarea":ce=ee=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(e,n,T,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":ee=c;break;case"defaultValue":ce=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,x,c,o,f)}Tn(e,ee,ce);return;case"option":for(var He in a)if(ee=a[He],a.hasOwnProperty(He)&&ee!=null&&!o.hasOwnProperty(He))switch(He){case"selected":e.selected=!1;break;default:It(e,n,He,null,o,ee)}for(F in o)if(ee=o[F],ce=a[F],o.hasOwnProperty(F)&&ee!==ce&&(ee!=null||ce!=null))switch(F){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:It(e,n,F,ee,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ee=a[Je],a.hasOwnProperty(Je)&&ee!=null&&!o.hasOwnProperty(Je)&&It(e,n,Je,null,o,ee);for($ in o)if(ee=o[$],ce=a[$],o.hasOwnProperty($)&&ee!==ce&&(ee!=null||ce!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:It(e,n,$,ee,o,ce)}return;default:if(au(n)){for(var Ht in a)ee=a[Ht],a.hasOwnProperty(Ht)&&ee!==void 0&&!o.hasOwnProperty(Ht)&&Xf(e,n,Ht,void 0,o,ee);for(fe in o)ee=o[fe],ce=a[fe],!o.hasOwnProperty(fe)||ee===ce||ee===void 0&&ce===void 0||Xf(e,n,fe,ee,o,ce);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!o.hasOwnProperty(Y)&&It(e,n,Y,null,o,ee);for(_e in o)ee=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||ee===ce||ee==null&&ce==null||It(e,n,_e,ee,o,ce)}function Yg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,T=c.duration;if(f&&T&&Yg(x)){for(x=0,T=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],$=F.startTime;if($>T)break;var fe=F.transferSize,_e=F.initiatorType;fe&&Yg(_e)&&(F=F.responseEnd,x+=fe*(F<T?1:(T-$)/(F-$)))}if(--o,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wf=null,qf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function Kx(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch($x)}:Qg;function $x(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function $g(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[ir]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&wo(e.ownerDocument.body);a=c}while(a);ds(n)}function e0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ey(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function t0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ny(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function n0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function i0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function a0(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qs(e)}var gi=new Map,r0=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=K.d;K.d={f:iy,r:ay,D:ry,C:sy,L:oy,m:ly,X:uy,S:cy,M:fy};function iy(){var e=ra.f(),n=Vl();return e||n}function ay(e){var n=X(e);n!==null&&n.tag===5&&n.type==="form"?Mm(n):ra.r(e)}var cs=typeof document>"u"?null:document;function s0(e,n,a){var o=cs;if(o&&typeof n=="string"&&n){var c=yn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),r0.has(c)||(r0.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),wn(n,"link",e),k(n),o.head.appendChild(n)))}}function ry(e){ra.D(e),s0("dns-prefetch",e,null)}function sy(e,n){ra.C(e,n),s0("preconnect",e,n)}function oy(e,n,a){ra.L(e,n,a);var o=cs;if(o&&e&&n){var c='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yn(a.imageSizes)+'"]')):c+='[href="'+yn(e)+'"]';var f=c;switch(n){case"style":f=us(e);break;case"script":f=fs(e)}gi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),wn(n,"link",e),k(n),o.head.appendChild(n)))}}function ly(e,n){ra.m(e,n);var a=cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(e)}if(!gi.has(f)&&(e=v({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),wn(o,"link",e),k(o),a.head.appendChild(o)}}}function cy(e,n,a){ra.S(e,n,a);var o=cs;if(o&&e){var c=re(o).hoistableStyles,f=us(e);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(Do(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&ed(e,a);var F=x=o.createElement("link");k(F),wn(F,"link",e),F._p=new Promise(function($,fe){F.onload=$,F.onerror=fe}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Jl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function uy(e,n){ra.X(e,n);var a=cs;if(a&&e){var o=re(a).hoistableScripts,c=fs(e),f=o.get(c);f||(f=a.querySelector(Uo(c)),f||(e=v({src:e,async:!0},n),(n=gi.get(c))&&td(e,n),f=a.createElement("script"),k(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function fy(e,n){ra.M(e,n);var a=cs;if(a&&e){var o=re(a).hoistableScripts,c=fs(e),f=o.get(c);f||(f=a.querySelector(Uo(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=gi.get(c))&&td(e,n),f=a.createElement("script"),k(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function o0(e,n,a,o){var c=(c=Ee.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=re(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=re(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(Do(e)))&&!f._p&&(x.instance=f,x.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||dy(c,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=re(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+yn(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function l0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function dy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),k(n),e.head.appendChild(n))}function fs(e){return'[src="'+yn(e)+'"]'}function Uo(e){return"script[async]"+e}function c0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,k(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),k(o),wn(o,"style",c),Jl(o,a.precedence,e),n.instance=o;case"stylesheet":c=us(a.href);var f=e.querySelector(Do(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;o=l0(a),(c=gi.get(c))&&ed(o,c),f=(e.ownerDocument||e).createElement("link"),k(f);var x=f;return x._p=new Promise(function(T,F){x.onload=T,x.onerror=F}),wn(f,"link",o),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=fs(a.src),(c=e.querySelector(Uo(f)))?(n.instance=c,k(c),c):(o=a,(c=gi.get(f))&&(o=v({},a),td(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),k(c),wn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,e));return n.instance}function Jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function u0(e,n,a){if($l===null){var o=new Map,c=$l=new Map;c.set(a,o)}else c=$l,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ir]||f[Jt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function f0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function d0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function py(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(o.href),f=n.querySelector(Do(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,o=l0(o),(c=gi.get(c))&&ed(o,c),f=f.createElement("link"),k(f);var x=f;x._p=new Promise(function(T,F){x.onload=T,x.onerror=F}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ec.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var nd=0;function my(e,n){return e.stylesheets&&e.count===0&&nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&nd===0&&(nd=62500*Zx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>nd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tc=null;function nc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tc=new Map,n.forEach(gy,e),tc=null,ec.call(e))}function gy(e,n){if(!(n.state.loading&4)){var a=tc.get(e);if(a)var o=a.get(null);else{a=new Map,tc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=ec.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function _y(e,n,a,o,c,f,x,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function h0(e,n,a,o,c,f,x,T,F,$,fe,_e){return e=new _y(e,n,a,x,F,$,fe,_e,T),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fu(f),e}function p0(e){return e?(e=Vr,e):Vr}function m0(e,n,a,o,c,f){c=p0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ta(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Aa(e,o,n),a!==null&&(Yn(a,e,n),co(a,e,n))}function g0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function id(e,n){g0(e,n),(e=e.alternate)&&g0(e,n)}function _0(e){if(e.tag===13||e.tag===31){var n=or(e,67108864);n!==null&&Yn(n,e,67108864),id(e,67108864)}}function v0(e){if(e.tag===13||e.tag===31){var n=si();n=tr(n);var a=or(e,n);a!==null&&Yn(a,e,n),id(e,n)}}var ic=!0;function vy(e,n,a,o){var c=U.T;U.T=null;var f=K.p;try{K.p=2,ad(e,n,a,o)}finally{K.p=f,U.T=c}}function xy(e,n,a,o){var c=U.T;U.T=null;var f=K.p;try{K.p=8,ad(e,n,a,o)}finally{K.p=f,U.T=c}}function ad(e,n,a,o){if(ic){var c=rd(o);if(c===null)jf(e,n,o,ac,a),y0(e,o);else if(Sy(c,e,n,a,o))o.stopPropagation();else if(y0(e,o),n&4&&-1<yy.indexOf(e)){for(;c!==null;){var f=X(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=we(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var F=1<<31-$e(x);T.entanglements[1]|=F,x&=~F}Fi(f),(Dt&6)===0&&(Hl=he()+500,Ao(0))}}break;case 31:case 13:T=or(f,2),T!==null&&Yn(T,f,2),Vl(),id(f,2)}if(f=rd(o),f===null&&jf(e,n,o,ac,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function rd(e){return e=su(e),sd(e)}var ac=null;function sd(e){if(ac=null,e=C(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function x0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case ge:return 2;case je:return 8;case De:case Fe:return 32;case _t:return 268435456;default:return 32}default:return 32}}var od=!1,Ba=null,Fa=null,Ia=null,No=new Map,Oo=new Map,Ha=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function zo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=X(n),n!==null&&_0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Sy(e,n,a,o,c){switch(n){case"focusin":return Ba=zo(Ba,e,n,a,o,c),!0;case"dragenter":return Fa=zo(Fa,e,n,a,o,c),!0;case"mouseover":return Ia=zo(Ia,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return No.set(f,zo(No.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Oo.set(f,zo(Oo.get(f)||null,e,n,a,o,c)),!0}return!1}function S0(e){var n=C(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,nr(e.priority,function(){v0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,nr(e.priority,function(){v0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ru=o,a.target.dispatchEvent(o),ru=null}else return n=X(a),n!==null&&_0(n),e.blockedOn=a,!1;n.shift()}return!0}function M0(e,n,a){rc(e)&&a.delete(n)}function My(){od=!1,Ba!==null&&rc(Ba)&&(Ba=null),Fa!==null&&rc(Fa)&&(Fa=null),Ia!==null&&rc(Ia)&&(Ia=null),No.forEach(M0),Oo.forEach(M0)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,od||(od=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,My)))}var oc=null;function b0(e){oc!==e&&(oc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(sd(o||a)===null)continue;break}var f=X(a);f!==null&&(e.splice(n,3),n-=3,rf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ds(e){function n(F){return sc(F,e)}Ba!==null&&sc(Ba,e),Fa!==null&&sc(Fa,e),Ia!==null&&sc(Ia,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)S0(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[En]||null;if(typeof f=="function")x||b0(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[En]||null)T=x.formAction;else if(sd(c)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),b0(a)}}}function E0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ld(e){this._internalRoot=e}lc.prototype.render=ld.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=si();m0(a,o,e,n,null,null)},lc.prototype.unmount=ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;m0(e.current,2,null,e,null,null),Vl(),n[Vi]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&S0(e)}};var T0=t.version;if(T0!=="19.2.5")throw Error(r(527,T0,"19.2.5"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var by={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Ye=cc.inject(by),Xe=cc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Lm,f=Nm,x=Om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=h0(e,1,!1,null,null,a,o,null,c,f,x,E0),e[Vi]=n.current,kf(e),new ld(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Lm,x=Nm,T=Om,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=h0(e,1,!0,n,a??null,o,c,F,f,x,T,E0),n.context=p0(null),a=n.current,o=si(),o=tr(o),c=Ta(o),c.callback=null,Aa(a,c,o),a=o,n.current.lanes=a,bn(n,a),Fi(n),e[Vi]=n.current,kf(e),new lc(n)},Bo.version="19.2.5",Bo}var z0;function Ny(){if(z0)return fd.exports;z0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),fd.exports=Ly(),fd.exports}var Oy=Ny();const Ph={connected:!1,isHost:!1,myPlayerId:null,myName:"",myRole:"",pendingJoinNonce:null,knownPlayers:[],phase:"lobby",cycle:0,secondsRemaining:0,price:"100",priceHistory:[],bidDepth:0,askDepth:0,cycleVolume:0,myCash:"0",myShares:0,myAura:0,myNetWorth:"0",farms:[],mills:[],npcOwners:[],cycleEvents:[],headlines:[],myFeedback:null,adminSummary:null,debrief:null,error:null,gameCode:null,paused:!1,resetCount:0};function zy(s,t){switch(t.type){case"ws_connected":return{...s,connected:!0};case"ws_disconnected":return{...s,connected:!1};case"clear_error":return{...s,error:null};case"set_host":return{...s,isHost:!0};case"set_game_code":return{...s,gameCode:t.code};case"clear_feedback":return{...s,myFeedback:null};case"clear_admin_summary":return{...s,adminSummary:null};case"clear_host":return{...s,isHost:!1};case"set_join_nonce":return{...s,pendingJoinNonce:t.nonce};case"server_msg":{const i=t.msg;switch(i.type){case"welcome":{const r={id:i.player_id,name:i.name,role:i.role};return s.isHost?{...s,knownPlayers:[...s.knownPlayers,r]}:s.myPlayerId!==null||s.pendingJoinNonce===null||i.client_nonce!==s.pendingJoinNonce?s:{...s,myPlayerId:i.player_id,myName:i.name,myRole:i.role,pendingJoinNonce:null}}case"price_update":return{...s,price:i.price,priceHistory:i.history,bidDepth:i.bid_depth,askDepth:i.ask_depth,cycleVolume:i.cycle_volume};case"cycle_phase":return{...s,phase:i.phase,cycle:i.cycle,secondsRemaining:i.seconds_remaining,cycleEvents:i.phase==="decision"?[]:s.cycleEvents,myFeedback:i.phase==="decision"?null:s.myFeedback};case"world_snapshot":return{...s,farms:i.farms,mills:i.mills,npcOwners:i.npc_owners};case"cycle_events":return{...s,cycleEvents:i.events};case"player_state":return i.player_id!==s.myPlayerId?s:{...s,myCash:i.cash,myShares:i.shares,myAura:i.aura,myNetWorth:i.net_worth};case"player_feedback":return i.player_id!==s.myPlayerId?s:{...s,myFeedback:i.tips};case"headline":return{...s,headlines:[...s.headlines.slice(-19),{text:i.text,cycle:i.cycle}]};case"admin_summary":return{...s,adminSummary:i.text};case"player_roster":return{...s,knownPlayers:i.players.map(r=>({id:r.player_id,name:r.name,role:r.role}))};case"player_left":return{...s,knownPlayers:s.knownPlayers.filter(r=>r.id!==i.player_id)};case"kicked":return i.player_id===s.myPlayerId?{...s,myPlayerId:null,myName:"",myRole:"",error:`Kicked: ${i.reason}`}:s;case"game_paused":return{...s,paused:!0};case"game_resumed":return{...s,paused:!1,secondsRemaining:i.seconds_remaining||s.secondsRemaining};case"debrief":return{...s,debrief:i.stats};case"game_over":return{...s,phase:"game_over"};case"game_reset":return{...Ph,connected:s.connected,isHost:s.isHost,gameCode:s.gameCode,resetCount:s.resetCount+1};case"error":return{...s,error:i.message};default:return s}}}}const P_=Ve.createContext(Ph),B_=Ve.createContext(()=>{}),F_=Ve.createContext(null);function Hn(){return Ve.useContext(P_)}function Kc(){return Ve.useContext(B_)}function Bh(){const s=Ve.useContext(F_);if(!s)throw new Error("useWsSend must be used inside App");return s}function md(s){if(s==="/create")return{page:"create"};if(s==="/host")return{page:"host"};if(s==="/join")return{page:"join"};const t=s.match(/^\/(\d{4})$/);return t?{page:"code",code:t[1]}:{page:"home"}}function Py(){const[s,t]=Ve.useState(()=>md(window.location.pathname));Ve.useEffect(()=>{const r=()=>t(md(window.location.pathname));return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[]);function i(r){window.history.pushState(null,"",r),t(md(r))}return[s,i]}const I_=Ve.createContext(()=>{});function Qc(){return Ve.useContext(I_)}const By="/ws",Fy=3e4,Iy=2e3;function Hy(s,t,i){const r=Ve.useRef(null),l=Ve.useRef(s);l.current=s;const u=Ve.useRef(t);u.current=t;const d=Ve.useRef(i);d.current=i;const h=Ve.useCallback(m=>{const p=r.current;(p==null?void 0:p.readyState)===WebSocket.OPEN&&p.send(JSON.stringify(m))},[]);return Ve.useEffect(()=>{let m=!0,p,g;function v(){if(!m)return;const y=new WebSocket(By);r.current=y,y.onopen=()=>{var b;(b=u.current)==null||b.call(u),p=setInterval(()=>{y.readyState===WebSocket.OPEN&&y.send(JSON.stringify({type:"ping"}))},Fy)},y.onmessage=b=>{try{const E=JSON.parse(b.data);l.current(E)}catch{console.warn("[ws] unparseable message",b.data)}},y.onerror=b=>{console.warn("[ws] error",b)},y.onclose=()=>{var b;clearInterval(p),(b=d.current)==null||b.call(d),m&&(g=setTimeout(v,Iy))}}return v(),()=>{var y;m=!1,clearInterval(p),clearTimeout(g),(y=r.current)==null||y.close()}},[]),h}function Gy(s,t){switch(t.type){case"generate_with_code":return{...s,code:t.code,copied:!1};case"set_copied":return{...s,copied:t.value}}}function P0(){const s=Qc(),t=Kc(),{gameCode:i,knownPlayers:r}=Hn(),[l,u]=Ve.useReducer(Gy,{code:i,copied:!1}),d=l.code?`${window.location.origin}/${l.code}`:null;async function h(){d&&(await navigator.clipboard.writeText(d),u({type:"set_copied",value:!0}),setTimeout(()=>u({type:"set_copied",value:!1}),2e3))}return S.jsxs("div",{style:sn.root,children:[S.jsx("h1",{style:sn.title,children:"Aura Farmers"}),S.jsx("p",{style:sn.sub,children:"Generate a code and share the link with your players."}),l.code?S.jsxs("div",{style:sn.codeBlock,children:[S.jsx("div",{style:sn.code,children:l.code}),S.jsx("p",{style:sn.hint,children:"Share this link:"}),S.jsxs("div",{style:sn.urlRow,children:[S.jsx("span",{style:sn.url,children:d}),S.jsx("button",{style:sn.copyBtn,onClick:h,children:l.copied?"✓ Copied":"Copy"})]}),S.jsxs("div",{style:sn.roster,children:[S.jsxs("p",{style:sn.rosterTitle,children:["Players waiting (",r.length,")"]}),r.length===0?S.jsx("p",{style:sn.rosterEmpty,children:"No one has joined yet."}):S.jsx("div",{style:sn.rosterList,children:r.map((m,p)=>S.jsxs("div",{style:sn.rosterRow,children:[S.jsx("span",{style:sn.rosterNum,children:p+1}),S.jsx("span",{style:sn.rosterName,children:m.name}),S.jsx("span",{style:{...sn.rosterRole,color:m.role==="farmer"?"#1d6b1d":"#0d5858"},children:m.role})]},m.id))})]}),S.jsxs("div",{style:sn.actions,children:[S.jsx("button",{style:sn.btn,onClick:()=>{t({type:"set_host"}),s("/host")},children:"Watch as Host →"}),S.jsx("button",{style:{...sn.btn,background:"#f5f3ef",color:"#6b6b63",border:"1.5px solid #e2ddd6"},onClick:()=>{const m=String(Math.floor(1e3+Math.random()*9e3));t({type:"set_game_code",code:m}),u({type:"generate_with_code",code:m})},children:"New Code"})]})]}):S.jsx("button",{style:sn.btn,onClick:()=>{const m=String(Math.floor(1e3+Math.random()*9e3));t({type:"set_game_code",code:m}),u({type:"generate_with_code",code:m})},children:"Generate Room Code"})]})}const sn={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",gap:"1.25rem",padding:"1.5rem 1rem",background:"#f5f3ef"},title:{fontSize:"2.2rem",margin:0,color:"#18181a",fontWeight:"800",letterSpacing:"-0.02em"},sub:{color:"#8a8a80",textAlign:"center",maxWidth:360,margin:0,fontSize:"0.9rem"},btn:{background:"#1d6b1d",color:"#fff",border:"none",padding:"0.7rem 1.5rem",borderRadius:8,fontFamily:"inherit",fontSize:"0.95rem",cursor:"pointer",fontWeight:"700"},codeBlock:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:12,padding:"1.5rem 1.25rem",width:"100%",maxWidth:420,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"},code:{fontSize:"3.5rem",fontWeight:"800",letterSpacing:"0.25em",color:"#1d6b1d"},hint:{color:"#8a8a80",fontSize:"0.8rem",margin:0},urlRow:{display:"flex",alignItems:"center",gap:"0.5rem",background:"#f5f3ef",border:"1px solid #ddd9d2",borderRadius:4,padding:"0.4rem 0.75rem",width:"100%"},url:{flex:1,fontSize:"0.85rem",color:"#5a5a54",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},copyBtn:{background:"transparent",border:"1px solid #c8c4be",color:"#5a5a54",padding:"0.2rem 0.6rem",borderRadius:3,fontFamily:"inherit",fontSize:"0.8rem",cursor:"pointer",flexShrink:0},roster:{alignSelf:"stretch",borderTop:"1px solid #e8e4df",paddingTop:"0.75rem",marginTop:"0.25rem"},rosterTitle:{margin:"0 0 0.5rem",fontSize:"0.75rem",color:"#8a8a80",textTransform:"uppercase",letterSpacing:"0.08em"},rosterEmpty:{margin:0,fontSize:"0.85rem",color:"#b0aea8"},rosterList:{display:"flex",flexDirection:"column",gap:"0.35rem"},rosterRow:{display:"flex",alignItems:"center",gap:"0.6rem",fontSize:"0.9rem"},rosterNum:{color:"#b0aea8",fontSize:"0.75rem",width:16},rosterName:{flex:1,color:"#3a3a36"},rosterRole:{fontSize:"0.75rem"},actions:{display:"flex",gap:"0.75rem",marginTop:"0.5rem"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="172",Vy=0,B0=1,ky=2,H_=1,jy=2,fa=3,$a=0,Qn=1,da=2,Ka=0,Us=1,F0=2,I0=3,H0=4,Xy=5,Cr=100,Wy=101,qy=102,Yy=103,Zy=104,Ky=200,Qy=201,Jy=202,$y=203,Yd=204,Zd=205,eS=206,tS=207,nS=208,iS=209,aS=210,rS=211,sS=212,oS=213,lS=214,Kd=0,Qd=1,Jd=2,Os=3,$d=4,eh=5,th=6,nh=7,G_=0,cS=1,uS=2,Qa=0,fS=1,dS=2,hS=3,pS=4,mS=5,gS=6,_S=7,V_=300,zs=301,Ps=302,ih=303,ah=304,Jc=306,rh=1e3,Dr=1001,sh=1002,Li=1003,vS=1004,uc=1005,Gi=1006,gd=1007,Ur=1008,_a=1009,k_=1010,j_=1011,Wo=1012,Ih=1013,Lr=1014,ha=1015,Yo=1016,Hh=1017,Gh=1018,Bs=1020,X_=35902,W_=1021,q_=1022,Ui=1023,Y_=1024,Z_=1025,Ls=1026,Fs=1027,K_=1028,Vh=1029,Q_=1030,kh=1031,jh=1033,Fc=33776,Ic=33777,Hc=33778,Gc=33779,oh=35840,lh=35841,ch=35842,uh=35843,fh=36196,dh=37492,hh=37496,ph=37808,mh=37809,gh=37810,_h=37811,vh=37812,xh=37813,yh=37814,Sh=37815,Mh=37816,bh=37817,Eh=37818,Th=37819,Ah=37820,Rh=37821,Vc=36492,Ch=36494,wh=36495,J_=36283,Dh=36284,Uh=36285,Lh=36286,xS=3200,yS=3201,SS=0,MS=1,Za="",vi="srgb",Is="srgb-linear",Xc="linear",Gt="srgb",hs=7680,G0=519,bS=512,ES=513,TS=514,$_=515,AS=516,RS=517,CS=518,wS=519,V0=35044,k0="300 es",pa=2e3,Wc=2001;class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,Nh=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function bt(s,t,i){return Math.max(t,Math.min(i,s))}function DS(s,t){return(s%t+t)%t}function vd(s,t,i){return(1-i)*s+i*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(t,i,r,l,u,d,h,m,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],y=r[2],b=r[5],E=r[8],R=l[0],M=l[3],_=l[6],B=l[1],O=l[4],L=l[7],q=l[2],H=l[5],P=l[8];return u[0]=d*R+h*B+m*q,u[3]=d*M+h*O+m*H,u[6]=d*_+h*L+m*P,u[1]=p*R+g*B+v*q,u[4]=p*M+g*O+v*H,u[7]=p*_+g*L+v*P,u[2]=y*R+b*B+E*q,u[5]=y*M+b*O+E*H,u[8]=y*_+b*L+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*d-h*p,y=h*m-g*u,b=p*u-d*m,E=i*v+r*y+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-g*r)*R,t[2]=(h*r-l*d)*R,t[3]=y*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-h*i)*R,t[6]=b*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(xd.makeScale(t,i)),this}rotate(t){return this.premultiply(xd.makeRotation(-t)),this}translate(t,i){return this.premultiply(xd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xd=new ct;function ev(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function US(){const s=qc("canvas");return s.style.display="block",s}const j0={};function ws(s){s in j0||(j0[s]=!0,console.warn(s))}function LS(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function NS(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function OS(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const X0=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zS(){const s={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Gt&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?Xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Is]:{primaries:t,whitePoint:r,transfer:Xc,toXYZ:X0,fromXYZ:W0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:X0,fromXYZ:W0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),s}const wt=zS();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class PS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ps===void 0&&(ps=qc("canvas")),ps.width=t.width,ps.height=t.height;const r=ps.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ps}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ga(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BS=0;class tv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Zo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(yd(l[d].image)):u.push(yd(l[d]))}else u=yd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function yd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?PS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FS=0;class Jn extends Gs{constructor(t=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=Dr,l=Dr,u=Gi,d=Ur,h=Ui,m=_a,p=Jn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Zo(),this.name="",this.source=new tv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==V_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rh:t.x=t.x-Math.floor(t.x);break;case Dr:t.x=t.x<0?0:1;break;case sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rh:t.y=t.y-Math.floor(t.y);break;case Dr:t.y=t.y<0?0:1;break;case sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=V_;Jn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],y=m[1],b=m[5],E=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(b+1)/2,q=(_+1)/2,H=(g+y)/4,P=(v+R)/4,W=(E+M)/4;return O>L&&O>q?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=H/r,u=P/r):L>q?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=H/l,u=W/l):q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),r=P/u,l=W/u),this.set(r,l,u,i),this}let B=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(v-R)/B,this.z=(y-g)/B,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this.w=bt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this.w=bt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends Gs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Jn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new tv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends IS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class nv extends Jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HS extends Jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const y=u[d+0],b=u[d+1],E=u[d+2],R=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=y,t[i+1]=b,t[i+2]=E,t[i+3]=R;return}if(v!==R||m!==y||p!==b||g!==E){let M=1-h;const _=m*y+p*b+g*E+v*R,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const q=Math.sqrt(O),H=Math.atan2(q,_*B);M=Math.sin(M*H)/q,h=Math.sin(h*H)/q}const L=h*B;if(m=m*M+y*L,p=p*M+b*L,g=g*M+E*L,v=v*M+R*L,M===1-h){const q=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=q,p*=q,g*=q,v*=q}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[d],y=u[d+1],b=u[d+2],E=u[d+3];return t[i]=h*E+g*v+m*b-p*y,t[i+1]=m*E+g*y+p*v-h*b,t[i+2]=p*E+g*b+h*y-m*v,t[i+3]=g*E-h*v-m*y-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),y=m(r/2),b=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=y*g*v+p*b*E,this._y=p*b*v-y*g*E,this._z=p*g*E+y*b*v,this._w=p*g*v-y*b*E;break;case"YXZ":this._x=y*g*v+p*b*E,this._y=p*b*v-y*g*E,this._z=p*g*E-y*b*v,this._w=p*g*v+y*b*E;break;case"ZXY":this._x=y*g*v-p*b*E,this._y=p*b*v+y*g*E,this._z=p*g*E+y*b*v,this._w=p*g*v-y*b*E;break;case"ZYX":this._x=y*g*v-p*b*E,this._y=p*b*v+y*g*E,this._z=p*g*E-y*b*v,this._w=p*g*v+y*b*E;break;case"YZX":this._x=y*g*v+p*b*E,this._y=p*b*v+y*g*E,this._z=p*g*E-y*b*v,this._w=p*g*v-y*b*E;break;case"XZY":this._x=y*g*v-p*b*E,this._y=p*b*v-y*g*E,this._z=p*g*E+y*b*v,this._w=p*g*v+y*b*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=r+h+v;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(g-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>v){const b=2*Math.sqrt(1+r-h-v);this._w=(g-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>v){const b=2*Math.sqrt(1+h-r-v);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+v-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const b=1-i;return this._w=b*d+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(t=0,i=0,r=0){oe.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(q0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(q0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Sd.copy(this).projectOnVector(t),this.sub(Sd)}reflect(t){return this.sub(Sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new oe,q0=new Ko;class Qo{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ai):Ai.fromBufferAttribute(u,d),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),dc.subVectors(this.max,Io),ms.subVectors(t.a,Io),gs.subVectors(t.b,Io),_s.subVectors(t.c,Io),Va.subVectors(gs,ms),ka.subVectors(_s,gs),yr.subVectors(ms,_s);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-yr.z,yr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,yr.z,0,-yr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-yr.y,yr.x,0];return!Md(i,ms,gs,_s,dc)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,ms,gs,_s,dc))?!1:(hc.crossVectors(Va,ka),i=[hc.x,hc.y,hc.z],Md(i,ms,gs,_s,dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ai=new oe,fc=new Qo,ms=new oe,gs=new oe,_s=new oe,Va=new oe,ka=new oe,yr=new oe,Io=new oe,dc=new oe,hc=new oe,Sr=new oe;function Md(s,t,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){Sr.fromArray(s,u);const h=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=t.dot(Sr),p=i.dot(Sr),g=r.dot(Sr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const GS=new Qo,Ho=new oe,bd=new oe;class $c{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):GS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(bd)),this.expandByPoint(Ho.copy(t.center).sub(bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oa=new oe,Ed=new oe,pc=new oe,ja=new oe,Td=new oe,mc=new oe,Ad=new oe;class iv{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ed.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(Ed);const u=t.distanceTo(i)*.5,d=-this.direction.dot(pc),h=ja.dot(this.direction),m=-ja.dot(pc),p=ja.lengthSq(),g=Math.abs(1-d*d);let v,y,b,E;if(g>0)if(v=d*m-h,y=d*h-m,E=u*g,v>=0)if(y>=-E)if(y<=E){const R=1/g;v*=R,y*=R,b=v*(v+d*y+2*h)+y*(d*v+y+2*m)+p}else y=u,v=Math.max(0,-(d*y+h)),b=-v*v+y*(y+2*m)+p;else y=-u,v=Math.max(0,-(d*y+h)),b=-v*v+y*(y+2*m)+p;else y<=-E?(v=Math.max(0,-(-d*u+h)),y=v>0?-u:Math.min(Math.max(-u,-m),u),b=-v*v+y*(y+2*m)+p):y<=E?(v=0,y=Math.min(Math.max(-u,-m),u),b=y*(y+2*m)+p):(v=Math.max(0,-(d*u+h)),y=v>0?u:Math.min(Math.max(-u,-m),u),b=-v*v+y*(y+2*m)+p);else y=d>0?-u:u,v=Math.max(0,-(d*y+h)),b=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ed).addScaledVector(pc,y),b}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,d=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,d=(t.min.y-y.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(h=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,r,l,u){Td.subVectors(i,t),mc.subVectors(r,t),Ad.crossVectors(Td,mc);let d=this.direction.dot(Ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ja.subVectors(this.origin,t);const m=h*this.direction.dot(mc.crossVectors(ja,mc));if(m<0)return null;const p=h*this.direction.dot(Td.cross(ja));if(p<0||m+p>d)return null;const g=-h*ja.dot(Ad);return g<0?null:this.at(g/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,i,r,l,u,d,h,m,p,g,v,y,b,E,R,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,g,v,y,b,E,R,M)}set(t,i,r,l,u,d,h,m,p,g,v,y,b,E,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=b,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),u=1/vs.setFromMatrixColumn(t,1).length(),d=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const y=d*g,b=d*v,E=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=b+E*p,i[5]=y-R*p,i[9]=-h*m,i[2]=R-y*p,i[6]=E+b*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*g,b=m*v,E=p*g,R=p*v;i[0]=y+R*h,i[4]=E*h-b,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=b*h-E,i[6]=R+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*g,b=m*v,E=p*g,R=p*v;i[0]=y-R*h,i[4]=-d*v,i[8]=E+b*h,i[1]=b+E*h,i[5]=d*g,i[9]=R-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*g,b=d*v,E=h*g,R=h*v;i[0]=m*g,i[4]=E*p-b,i[8]=y*p+R,i[1]=m*v,i[5]=R*p+y,i[9]=b*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,b=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=R-y*v,i[8]=E*v+b,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=b*v+E,i[10]=y-R*v}else if(t.order==="XZY"){const y=d*m,b=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+R,i[5]=d*g,i[9]=b*v-E,i[2]=E*v-b,i[6]=h*g,i[10]=R*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VS,t,kS)}lookAt(t,i,r){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Xa.crossVectors(r,oi),Xa.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Xa.crossVectors(r,oi)),Xa.normalize(),gc.crossVectors(oi,Xa),l[0]=Xa.x,l[4]=gc.x,l[8]=oi.x,l[1]=Xa.y,l[5]=gc.y,l[9]=oi.y,l[2]=Xa.z,l[6]=gc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],y=r[9],b=r[13],E=r[2],R=r[6],M=r[10],_=r[14],B=r[3],O=r[7],L=r[11],q=r[15],H=l[0],P=l[4],W=l[8],D=l[12],w=l[1],G=l[5],le=l[9],ie=l[13],me=l[2],ve=l[6],U=l[10],K=l[14],Q=l[3],Me=l[7],Ae=l[11],z=l[15];return u[0]=d*H+h*w+m*me+p*Q,u[4]=d*P+h*G+m*ve+p*Me,u[8]=d*W+h*le+m*U+p*Ae,u[12]=d*D+h*ie+m*K+p*z,u[1]=g*H+v*w+y*me+b*Q,u[5]=g*P+v*G+y*ve+b*Me,u[9]=g*W+v*le+y*U+b*Ae,u[13]=g*D+v*ie+y*K+b*z,u[2]=E*H+R*w+M*me+_*Q,u[6]=E*P+R*G+M*ve+_*Me,u[10]=E*W+R*le+M*U+_*Ae,u[14]=E*D+R*ie+M*K+_*z,u[3]=B*H+O*w+L*me+q*Q,u[7]=B*P+O*G+L*ve+q*Me,u[11]=B*W+O*le+L*U+q*Ae,u[15]=B*D+O*ie+L*K+q*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],y=t[10],b=t[14],E=t[3],R=t[7],M=t[11],_=t[15];return E*(+u*m*v-l*p*v-u*h*y+r*p*y+l*h*b-r*m*b)+R*(+i*m*b-i*p*y+u*d*y-l*d*b+l*p*g-u*m*g)+M*(+i*p*v-i*h*b-u*d*v+r*d*b+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*y+l*d*v-r*d*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],y=t[10],b=t[11],E=t[12],R=t[13],M=t[14],_=t[15],B=v*M*p-R*y*p+R*m*b-h*M*b-v*m*_+h*y*_,O=E*y*p-g*M*p-E*m*b+d*M*b+g*m*_-d*y*_,L=g*R*p-E*v*p+E*h*b-d*R*b-g*h*_+d*v*_,q=E*v*m-g*R*m-E*h*y+d*R*y+g*h*M-d*v*M,H=i*B+r*O+l*L+u*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return t[0]=B*P,t[1]=(R*y*u-v*M*u-R*l*b+r*M*b+v*l*_-r*y*_)*P,t[2]=(h*M*u-R*m*u+R*l*p-r*M*p-h*l*_+r*m*_)*P,t[3]=(v*m*u-h*y*u-v*l*p+r*y*p+h*l*b-r*m*b)*P,t[4]=O*P,t[5]=(g*M*u-E*y*u+E*l*b-i*M*b-g*l*_+i*y*_)*P,t[6]=(E*m*u-d*M*u-E*l*p+i*M*p+d*l*_-i*m*_)*P,t[7]=(d*y*u-g*m*u+g*l*p-i*y*p-d*l*b+i*m*b)*P,t[8]=L*P,t[9]=(E*v*u-g*R*u-E*r*b+i*R*b+g*r*_-i*v*_)*P,t[10]=(d*R*u-E*h*u+E*r*p-i*R*p-d*r*_+i*h*_)*P,t[11]=(g*h*u-d*v*u-g*r*p+i*v*p+d*r*b-i*h*b)*P,t[12]=q*P,t[13]=(g*R*l-E*v*l+E*r*y-i*R*y-g*r*M+i*v*M)*P,t[14]=(E*h*l-d*R*l-E*r*m+i*R*m+d*r*M-i*h*M)*P,t[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*y+i*h*y)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,v=h+h,y=u*p,b=u*g,E=u*v,R=d*g,M=d*v,_=h*v,B=m*p,O=m*g,L=m*v,q=r.x,H=r.y,P=r.z;return l[0]=(1-(R+_))*q,l[1]=(b+L)*q,l[2]=(E-O)*q,l[3]=0,l[4]=(b-L)*H,l[5]=(1-(y+_))*H,l[6]=(M+B)*H,l[7]=0,l[8]=(E+O)*P,l[9]=(M-B)*P,l[10]=(1-(y+R))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=vs.set(l[0],l[1],l[2]).length();const d=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/u,g=1/d,v=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=pa){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),y=(r+l)/(r-l);let b,E;if(h===pa)b=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(h===Wc)b=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=pa){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(d-u),y=(i+t)*p,b=(r+l)*g;let E,R;if(h===pa)E=(d+u)*v,R=-2*v;else if(h===Wc)E=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-b,m[2]=0,m[6]=0,m[10]=R,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new oe,Ri=new ln,VS=new oe(0,0,0),kS=new oe(1,1,1),Xa=new oe,gc=new oe,oi=new oe,Y0=new ln,Z0=new Ko;class va{constructor(t=0,i=0,r=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jS=0;const K0=new oe,xs=new Ko,la=new ln,_c=new oe,Go=new oe,XS=new oe,WS=new Ko,Q0=new oe(1,0,0),J0=new oe(0,1,0),$0=new oe(0,0,1),e_={type:"added"},qS={type:"removed"},ys={type:"childadded",child:null},Rd={type:"childremoved",child:null};class $n extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const t=new oe,i=new va,r=new Ko,l=new oe(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ct}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Q0,t)}rotateY(t){return this.rotateOnAxis(J0,t)}rotateZ(t){return this.rotateOnAxis($0,t)}translateOnAxis(t,i){return K0.copy(t).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q0,t)}translateY(t){return this.translateOnAxis(J0,t)}translateZ(t){return this.translateOnAxis($0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Go,_c,this.up):la.lookAt(_c,Go,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(la),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e_),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(qS),Rd.child=t,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e_),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,XS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,WS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),v=d(t.shapes),y=d(t.skeletons),b=d(t.animations),E=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}$n.DEFAULT_UP=new oe(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new oe,ca=new oe,Cd=new oe,ua=new oe,Ss=new oe,Ms=new oe,t_=new oe,wd=new oe,Dd=new oe,Ud=new oe,Ld=new on,Nd=new on,Od=new on;class Di{constructor(t=new oe,i=new oe,r=new oe){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ci.subVectors(t,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ci.subVectors(l,i),ca.subVectors(r,i),Cd.subVectors(t,i);const d=Ci.dot(Ci),h=Ci.dot(ca),m=Ci.dot(Cd),p=ca.dot(ca),g=ca.dot(Cd),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const y=1/v,b=(p*m-h*g)*y,E=(d*g-h*m)*y;return u.set(1-b-E,E,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return Ld.setScalar(0),Nd.setScalar(0),Od.setScalar(0),Ld.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,r),Od.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ld,u.x),d.addScaledVector(Nd,u.y),d.addScaledVector(Od,u.z),d}static isFrontFacing(t,i,r,l){return Ci.subVectors(r,i),ca.subVectors(t,i),Ci.cross(ca).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ci.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Di.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;Ss.subVectors(l,r),Ms.subVectors(u,r),wd.subVectors(t,r);const m=Ss.dot(wd),p=Ms.dot(wd);if(m<=0&&p<=0)return i.copy(r);Dd.subVectors(t,l);const g=Ss.dot(Dd),v=Ms.dot(Dd);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(Ss,d);Ud.subVectors(t,u);const b=Ss.dot(Ud),E=Ms.dot(Ud);if(E>=0&&b<=E)return i.copy(u);const R=b*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ms,h);const M=g*E-b*v;if(M<=0&&v-g>=0&&b-E>=0)return t_.subVectors(u,l),h=(v-g)/(v-g+(b-E)),i.copy(l).addScaledVector(t_,h);const _=1/(M+R+y);return d=R*_,h=y*_,i.copy(r).addScaledVector(Ss,d).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},vc={h:0,s:0,l:0};function zd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ut{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=wt.workingColorSpace){return this.r=t,this.g=i,this.b=r,wt.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=wt.workingColorSpace){if(t=DS(t,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=zd(d,u,t+1/3),this.g=zd(d,u,t),this.b=zd(d,u,t-1/3)}return wt.toWorkingColorSpace(this,l),this}setStyle(t,i=vi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const r=rv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return wt.fromWorkingColorSpace(zn.copy(this),t),Math.round(bt(zn.r*255,0,255))*65536+Math.round(bt(zn.g*255,0,255))*256+Math.round(bt(zn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.fromWorkingColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,u=zn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=wt.workingColorSpace){return wt.fromWorkingColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=vi){wt.fromWorkingColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+i,Wa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Wa),t.getHSL(vc);const r=vd(Wa.h,vc.h,i),l=vd(Wa.s,vc.s,i),u=vd(Wa.l,vc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ut;Ut.NAMES=rv;let YS=0;class Jo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Us,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=Zd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==Zd&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sv extends Jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new oe,xc=new kt;class Ni{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=V0,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),u=Zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==V0&&(t.usage=this.usage),t}}class ov extends Ni{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class lv extends Ni{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ja extends Ni{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ZS=0;const _i=new ln,Pd=new $n,bs=new oe,li=new Qo,Vo=new Qo,Mn=new oe;class xi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ev(t)?lv:ov)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ct().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,r){return _i.makeTranslation(t,i,r),this.applyMatrix4(_i),this}scale(t,i,r){return _i.makeScale(t,i,r),this.applyMatrix4(_i),this}lookAt(t){return Pd.lookAt(t),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ja(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];li.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(li.min,Vo.min),li.expandByPoint(Mn),Mn.addVectors(li.max,Vo.max),li.expandByPoint(Mn)):(li.expandByPoint(Vo.min),li.expandByPoint(Vo.max))}li.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),m&&(bs.fromBufferAttribute(t,p),Mn.add(bs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new oe,m[W]=new oe;const p=new oe,g=new oe,v=new oe,y=new kt,b=new kt,E=new kt,R=new oe,M=new oe;function _(W,D,w){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,w),y.fromBufferAttribute(u,W),b.fromBufferAttribute(u,D),E.fromBufferAttribute(u,w),g.sub(p),v.sub(p),b.sub(y),E.sub(y);const G=1/(b.x*E.y-E.x*b.y);isFinite(G)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-b.y).multiplyScalar(G),M.copy(v).multiplyScalar(b.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(R),h[D].add(R),h[w].add(R),m[W].add(M),m[D].add(M),m[w].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let W=0,D=B.length;W<D;++W){const w=B[W],G=w.start,le=w.count;for(let ie=G,me=G+le;ie<me;ie+=3)_(t.getX(ie+0),t.getX(ie+1),t.getX(ie+2))}const O=new oe,L=new oe,q=new oe,H=new oe;function P(W){q.fromBufferAttribute(l,W),H.copy(q);const D=h[W];O.copy(D),O.sub(q.multiplyScalar(q.dot(D))).normalize(),L.crossVectors(H,D);const G=L.dot(m[W])<0?-1:1;d.setXYZW(W,O.x,O.y,O.z,G)}for(let W=0,D=B.length;W<D;++W){const w=B[W],G=w.start,le=w.count;for(let ie=G,me=G+le;ie<me;ie+=3)P(t.getX(ie+0)),P(t.getX(ie+1)),P(t.getX(ie+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,b=r.count;y<b;y++)r.setXYZ(y,0,0,0);const l=new oe,u=new oe,d=new oe,h=new oe,m=new oe,p=new oe,g=new oe,v=new oe;if(t)for(let y=0,b=t.count;y<b;y+=3){const E=t.getX(y+0),R=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,M),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,y=new p.constructor(m.length*g);let b=0,E=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?b=m[R]*h.data.stride+h.offset:b=m[R]*g;for(let _=0;_<g;_++)y[E++]=p[b++]}return new Ni(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const y=p[g],b=t(y,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const b=p[v];g.push(b.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let y=0,b=v.length;y<b;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new ln,Mr=new iv,yc=new $c,i_=new oe,Sc=new oe,Mc=new oe,bc=new oe,Bd=new oe,Ec=new oe,a_=new oe,Tc=new oe;class ma extends $n{constructor(t=new xi,i=new sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Ec.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(Bd.fromBufferAttribute(v,t),d?Ec.addScaledVector(Bd,g):Ec.addScaledVector(Bd.sub(i),g))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(u),Mr.copy(t.ray).recast(t.near),!(yc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(yc,i_)===null||Mr.origin.distanceToSquared(i_)>(t.far-t.near)**2))&&(n_.copy(u).invert(),Mr.copy(t.ray).applyMatrix4(n_),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,y=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,R=y.length;E<R;E++){const M=y[E],_=d[M.materialIndex],B=Math.max(M.start,b.start),O=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let L=B,q=O;L<q;L+=3){const H=h.getX(L),P=h.getX(L+1),W=h.getX(L+2);l=Ac(this,_,t,r,p,g,v,H,P,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),R=Math.min(h.count,b.start+b.count);for(let M=E,_=R;M<_;M+=3){const B=h.getX(M),O=h.getX(M+1),L=h.getX(M+2);l=Ac(this,d,t,r,p,g,v,B,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,R=y.length;E<R;E++){const M=y[E],_=d[M.materialIndex],B=Math.max(M.start,b.start),O=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let L=B,q=O;L<q;L+=3){const H=L,P=L+1,W=L+2;l=Ac(this,_,t,r,p,g,v,H,P,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let M=E,_=R;M<_;M+=3){const B=M,O=M+1,L=M+2;l=Ac(this,d,t,r,p,g,v,B,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KS(s,t,i,r,l,u,d,h){let m;if(t.side===Qn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===$a,h),m===null)return null;Tc.copy(h),Tc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:s}}function Ac(s,t,i,r,l,u,d,h,m,p){s.getVertexPosition(h,Sc),s.getVertexPosition(m,Mc),s.getVertexPosition(p,bc);const g=KS(s,t,i,r,Sc,Mc,bc,a_);if(g){const v=new oe;Di.getBarycoord(a_,Sc,Mc,bc,v),l&&(g.uv=Di.getInterpolatedAttribute(l,h,m,p,v,new kt)),u&&(g.uv1=Di.getInterpolatedAttribute(u,h,m,p,v,new kt)),d&&(g.normal=Di.getInterpolatedAttribute(d,h,m,p,v,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new oe,materialIndex:0};Di.getNormal(Sc,Mc,bc,y.normal),g.face=y,g.barycoord=v}return g}class $o extends xi{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],v=[];let y=0,b=0;E("z","y","x",-1,-1,r,i,t,d,u,0),E("z","y","x",1,-1,r,i,-t,d,u,1),E("x","z","y",1,1,t,r,i,l,d,2),E("x","z","y",1,-1,t,r,-i,l,d,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ja(p,3)),this.setAttribute("normal",new Ja(g,3)),this.setAttribute("uv",new Ja(v,2));function E(R,M,_,B,O,L,q,H,P,W,D){const w=L/P,G=q/W,le=L/2,ie=q/2,me=H/2,ve=P+1,U=W+1;let K=0,Q=0;const Me=new oe;for(let Ae=0;Ae<U;Ae++){const z=Ae*G-ie;for(let ae=0;ae<ve;ae++){const Se=ae*w-le;Me[R]=Se*B,Me[M]=z*O,Me[_]=me,p.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[_]=H>0?1:-1,g.push(Me.x,Me.y,Me.z),v.push(ae/P),v.push(1-Ae/W),K+=1}}for(let Ae=0;Ae<W;Ae++)for(let z=0;z<P;z++){const ae=y+z+ve*Ae,Se=y+z+ve*(Ae+1),Z=y+(z+1)+ve*(Ae+1),de=y+(z+1)+ve*Ae;m.push(ae,Se,de),m.push(Se,Z,de),Q+=6}h.addGroup(b,Q,D),b+=Q,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(s){const t={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)t[l]=r[l]}return t}function QS(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function cv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const JS={clone:Hs,merge:In};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=QS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class uv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=pa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new oe,r_=new kt,s_=new kt;class wi extends uv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,r_,s_),i.subVectors(s_,r_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(_d*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class tM extends $n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Es,Ts,t,i);l.layers=this.layers,this.add(l);const u=new wi(Es,Ts,t,i);u.layers=this.layers,this.add(u);const d=new wi(Es,Ts,t,i);d.layers=this.layers,this.add(d);const h=new wi(Es,Ts,t,i);h.layers=this.layers,this.add(h);const m=new wi(Es,Ts,t,i);m.layers=this.layers,this.add(m);const p=new wi(Es,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===pa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,y,b),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class fv extends Jn{constructor(t,i,r,l,u,d,h,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:zs,super(t,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nM extends Nr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new fv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $o(5,5,5),u=new er({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Ka});u.uniforms.tEquirect.value=i;const d=new ma(l,u),h=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Gi),new tM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class iM extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fd=new oe,aM=new oe,rM=new ct;class Ar{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Fd.subVectors(r,i).cross(aM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Fd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||rM.getNormalMatrix(t),l=this.coplanarPoint(Fd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new $c,Rc=new oe;class dv{constructor(t=new Ar,i=new Ar,r=new Ar,l=new Ar,u=new Ar,d=new Ar){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=pa){const r=this.planes,l=t.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],y=l[7],b=l[8],E=l[9],R=l[10],M=l[11],_=l[12],B=l[13],O=l[14],L=l[15];if(r[0].setComponents(m-u,y-p,M-b,L-_).normalize(),r[1].setComponents(m+u,y+p,M+b,L+_).normalize(),r[2].setComponents(m+d,y+g,M+E,L+B).normalize(),r[3].setComponents(m-d,y-g,M-E,L-B).normalize(),r[4].setComponents(m-h,y-v,M-R,L-O).normalize(),i===pa)r[5].setComponents(m+h,y+v,M+R,L+O).normalize();else if(i===Wc)r[5].setComponents(h,v,R,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kc extends Jo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yc=new oe,Zc=new oe,o_=new ln,ko=new iv,Cc=new $c,Id=new oe,l_=new oe;class wc extends $n{constructor(t=new xi,i=new kc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Yc.fromBufferAttribute(i,l-1),Zc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Yc.distanceTo(Zc);t.setAttribute("lineDistance",new Ja(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=u,t.ray.intersectsSphere(Cc)===!1)return;o_.copy(l).invert(),ko.copy(t.ray).applyMatrix4(o_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const b=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let R=b,M=E-1;R<M;R+=p){const _=g.getX(R),B=g.getX(R+1),O=Dc(this,t,ko,m,_,B);O&&i.push(O)}if(this.isLineLoop){const R=g.getX(E-1),M=g.getX(b),_=Dc(this,t,ko,m,R,M);_&&i.push(_)}}else{const b=Math.max(0,d.start),E=Math.min(y.count,d.start+d.count);for(let R=b,M=E-1;R<M;R+=p){const _=Dc(this,t,ko,m,R,R+1);_&&i.push(_)}if(this.isLineLoop){const R=Dc(this,t,ko,m,E-1,b);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Dc(s,t,i,r,l,u){const d=s.geometry.attributes.position;if(Yc.fromBufferAttribute(d,l),Zc.fromBufferAttribute(d,u),i.distanceSqToSegment(Yc,Zc,Id,l_)>r)return;Id.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Id);if(!(m<t.near||m>t.far))return{distance:m,point:l_.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}class Uc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}class hv extends Jn{constructor(t,i,r,l,u,d,h,m,p,g=Ls){if(g!==Ls&&g!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ls&&(r=Lr),r===void 0&&g===Fs&&(r=Bs),super(null,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:Li,this.minFilter=m!==void 0?m:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eu extends xi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,y=i/m,b=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const B=_*y-d;for(let O=0;O<p;O++){const L=O*v-u;E.push(L,-B,0),R.push(0,0,1),M.push(O/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<h;B++){const O=B+p*_,L=B+p*(_+1),q=B+1+p*(_+1),H=B+1+p*_;b.push(O,L,H),b.push(L,q,H)}this.setIndex(b),this.setAttribute("position",new Ja(E,3)),this.setAttribute("normal",new Ja(R,3)),this.setAttribute("uv",new Ja(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class sM extends Jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oM extends Jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pv extends uv{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lM extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function c_(s,t,i,r){const l=cM(r);switch(i){case W_:return s*t;case Y_:return s*t;case Z_:return s*t*2;case K_:return s*t/l.components*l.byteLength;case Vh:return s*t/l.components*l.byteLength;case Q_:return s*t*2/l.components*l.byteLength;case kh:return s*t*2/l.components*l.byteLength;case q_:return s*t*3/l.components*l.byteLength;case Ui:return s*t*4/l.components*l.byteLength;case jh:return s*t*4/l.components*l.byteLength;case Fc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:case uh:return Math.max(s,16)*Math.max(t,8)/4;case oh:case ch:return Math.max(s,8)*Math.max(t,8)/2;case fh:case dh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case yh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vc:case Ch:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case J_:case Dh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Uh:case Lh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cM(s){switch(s){case _a:case k_:return{byteLength:1,components:1};case Wo:case j_:case Yo:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Lr:case Ih:case ha:return{byteLength:4,components:1};case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mv(){let s=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function uM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((b,E)=>b.start-E.start);let y=0;for(let b=1;b<v.length;b++){const E=v[y],R=v[b];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,v[y]=R)}v.length=y+1;for(let b=0,E=v.length;b<E;b++){const R=v[b];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_M=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ib=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ib=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:fM,alphahash_pars_fragment:dM,alphamap_fragment:hM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:_M,aomap_pars_fragment:vM,batching_pars_vertex:xM,batching_vertex:yM,begin_vertex:SM,beginnormal_vertex:MM,bsdfs:bM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:wM,color_fragment:DM,color_pars_fragment:UM,color_pars_vertex:LM,color_vertex:NM,common:OM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:PM,displacementmap_pars_vertex:BM,displacementmap_vertex:FM,emissivemap_fragment:IM,emissivemap_pars_fragment:HM,colorspace_fragment:GM,colorspace_pars_fragment:VM,envmap_fragment:kM,envmap_common_pars_fragment:jM,envmap_pars_fragment:XM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:ib,envmap_vertex:qM,fog_vertex:YM,fog_pars_vertex:ZM,fog_fragment:KM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:$M,lights_lambert_fragment:eb,lights_lambert_pars_fragment:tb,lights_pars_begin:nb,lights_toon_fragment:ab,lights_toon_pars_fragment:rb,lights_phong_fragment:sb,lights_phong_pars_fragment:ob,lights_physical_fragment:lb,lights_physical_pars_fragment:cb,lights_fragment_begin:ub,lights_fragment_maps:fb,lights_fragment_end:db,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:gb,map_fragment:_b,map_pars_fragment:vb,map_particle_fragment:xb,map_particle_pars_fragment:yb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:bb,morphcolor_vertex:Eb,morphnormal_vertex:Tb,morphtarget_pars_vertex:Ab,morphtarget_vertex:Rb,normal_fragment_begin:Cb,normal_fragment_maps:wb,normal_pars_fragment:Db,normal_pars_vertex:Ub,normal_vertex:Lb,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Bb,opaque_fragment:Fb,packing:Ib,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Vb,dithering_pars_fragment:kb,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:qb,shadowmap_vertex:Yb,shadowmask_pars_fragment:Zb,skinbase_vertex:Kb,skinning_pars_vertex:Qb,skinning_vertex:Jb,skinnormal_vertex:$b,specularmap_fragment:eE,specularmap_pars_fragment:tE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:aE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:fE,backgroundCube_vert:dE,backgroundCube_frag:hE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:_E,distanceRGBA_vert:vE,distanceRGBA_frag:xE,equirect_vert:yE,equirect_frag:SE,linedashed_vert:ME,linedashed_frag:bE,meshbasic_vert:EE,meshbasic_frag:TE,meshlambert_vert:AE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:wE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:LE,meshphong_frag:NE,meshphysical_vert:OE,meshphysical_frag:zE,meshtoon_vert:PE,meshtoon_frag:BE,points_vert:FE,points_frag:IE,shadow_vert:HE,shadow_frag:GE,sprite_vert:VE,sprite_frag:kE},Ne={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Ne.points,Ne.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Ne.common,Ne.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Ne.sprite,Ne.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([Ne.common,Ne.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([Ne.lights,Ne.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Lc={r:0,b:0,g:0},Er=new va,jE=new ln;function XE(s,t,i,r,l,u,d){const h=new Ut(0);let m=u===!0?0:1,p,g,v=null,y=0,b=null;function E(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:t).get(L)),L}function R(O){let L=!1;const q=E(O);q===null?_(h,m):q&&q.isColor&&(_(q,1),L=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(O,L){const q=E(L);q&&(q.isCubeTexture||q.mapping===Jc)?(g===void 0&&(g=new ma(new $o(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Hs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Er.copy(L.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(Er)),g.material.toneMapped=wt.getTransfer(q.colorSpace)!==Gt,(v!==q||y!==q.version||b!==s.toneMapping)&&(g.material.needsUpdate=!0,v=q,y=q.version,b=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new ma(new eu(2,2),new er({name:"BackgroundMaterial",uniforms:Hs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(q.colorSpace)!==Gt,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(v!==q||y!==q.version||b!==s.toneMapping)&&(p.material.needsUpdate=!0,v=q,y=q.version,b=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,L){O.getRGB(Lc,cv(s)),r.buffers.color.setClear(Lc.r,Lc.g,Lc.b,L,d)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(O,L=1){h.set(O),m=L,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:R,addToRenderList:M,dispose:B}}function WE(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(w,G,le,ie,me){let ve=!1;const U=v(ie,le,G);u!==U&&(u=U,p(u.object)),ve=b(w,ie,le,me),ve&&E(w,ie,le,me),me!==null&&t.update(me,s.ELEMENT_ARRAY_BUFFER),(ve||d)&&(d=!1,L(w,G,le,ie),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,G,le){const ie=le.wireframe===!0;let me=r[w.id];me===void 0&&(me={},r[w.id]=me);let ve=me[G.id];ve===void 0&&(ve={},me[G.id]=ve);let U=ve[ie];return U===void 0&&(U=y(m()),ve[ie]=U),U}function y(w){const G=[],le=[],ie=[];for(let me=0;me<i;me++)G[me]=0,le[me]=0,ie[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:ie,object:w,attributes:{},index:null}}function b(w,G,le,ie){const me=u.attributes,ve=G.attributes;let U=0;const K=le.getAttributes();for(const Q in K)if(K[Q].location>=0){const Ae=me[Q];let z=ve[Q];if(z===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),Ae===void 0||Ae.attribute!==z||z&&Ae.data!==z.data)return!0;U++}return u.attributesNum!==U||u.index!==ie}function E(w,G,le,ie){const me={},ve=G.attributes;let U=0;const K=le.getAttributes();for(const Q in K)if(K[Q].location>=0){let Ae=ve[Q];Ae===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Ae=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Ae=w.instanceColor));const z={};z.attribute=Ae,Ae&&Ae.data&&(z.data=Ae.data),me[Q]=z,U++}u.attributes=me,u.attributesNum=U,u.index=ie}function R(){const w=u.newAttributes;for(let G=0,le=w.length;G<le;G++)w[G]=0}function M(w){_(w,0)}function _(w,G){const le=u.newAttributes,ie=u.enabledAttributes,me=u.attributeDivisors;le[w]=1,ie[w]===0&&(s.enableVertexAttribArray(w),ie[w]=1),me[w]!==G&&(s.vertexAttribDivisor(w,G),me[w]=G)}function B(){const w=u.newAttributes,G=u.enabledAttributes;for(let le=0,ie=G.length;le<ie;le++)G[le]!==w[le]&&(s.disableVertexAttribArray(le),G[le]=0)}function O(w,G,le,ie,me,ve,U){U===!0?s.vertexAttribIPointer(w,G,le,me,ve):s.vertexAttribPointer(w,G,le,ie,me,ve)}function L(w,G,le,ie){R();const me=ie.attributes,ve=le.getAttributes(),U=G.defaultAttributeValues;for(const K in ve){const Q=ve[K];if(Q.location>=0){let Me=me[K];if(Me===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const Ae=Me.normalized,z=Me.itemSize,ae=t.get(Me);if(ae===void 0)continue;const Se=ae.buffer,Z=ae.type,de=ae.bytesPerElement,Ee=Z===s.INT||Z===s.UNSIGNED_INT||Me.gpuType===Ih;if(Me.isInterleavedBufferAttribute){const ye=Me.data,Ge=ye.stride,Be=Me.offset;if(ye.isInstancedInterleavedBuffer){for(let rt=0;rt<Q.locationSize;rt++)_(Q.location+rt,ye.meshPerAttribute);w.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let rt=0;rt<Q.locationSize;rt++)M(Q.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let rt=0;rt<Q.locationSize;rt++)O(Q.location+rt,z/Q.locationSize,Z,Ae,Ge*de,(Be+z/Q.locationSize*rt)*de,Ee)}else{if(Me.isInstancedBufferAttribute){for(let ye=0;ye<Q.locationSize;ye++)_(Q.location+ye,Me.meshPerAttribute);w.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ye=0;ye<Q.locationSize;ye++)M(Q.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let ye=0;ye<Q.locationSize;ye++)O(Q.location+ye,z/Q.locationSize,Z,Ae,z*de,z/Q.locationSize*ye*de,Ee)}}else if(U!==void 0){const Ae=U[K];if(Ae!==void 0)switch(Ae.length){case 2:s.vertexAttrib2fv(Q.location,Ae);break;case 3:s.vertexAttrib3fv(Q.location,Ae);break;case 4:s.vertexAttrib4fv(Q.location,Ae);break;default:s.vertexAttrib1fv(Q.location,Ae)}}}}B()}function q(){W();for(const w in r){const G=r[w];for(const le in G){const ie=G[le];for(const me in ie)g(ie[me].object),delete ie[me];delete G[le]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const le in G){const ie=G[le];for(const me in ie)g(ie[me].object),delete ie[me];delete G[le]}delete r[w.id]}function P(w){for(const G in r){const le=r[G];if(le[w.id]===void 0)continue;const ie=le[w.id];for(const me in ie)g(ie[me].object),delete ie[me];delete le[w.id]}}function W(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function qE(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let b=0;for(let E=0;E<v;E++)b+=g[E];i.update(b,r,1)}function m(p,g,v,y){if(v===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)d(p[E],g[E],y[E]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*y[R];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function YE(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ui&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const W=P===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==_a&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ha&&!W)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:b,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:L,vertexTextures:q,maxSamples:H}}function ZE(s){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Ar,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const b=v.length!==0||y||r!==0||l;return l=y,r=v.length,b},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,b){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||u&&!M)u?g(null):p();else{const B=u?0:r,O=B*4;let L=_.clippingState||null;m.value=L,L=g(E,y,O,b);for(let q=0;q!==O;++q)L[q]=i[q];_.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,y,b,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const _=b+R*4,B=y.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,L=b;O!==R;++O,L+=4)d.copy(v[O]).applyMatrix4(B,h),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function KE(s){let t=new WeakMap;function i(d,h){return h===ih?d.mapping=zs:h===ah&&(d.mapping=Ps),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ih||h===ah)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new nM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ds=4,u_=[.125,.215,.35,.446,.526,.582],wr=20,Hd=new pv,f_=new Ut;let Gd=null,Vd=0,kd=0,jd=!1;const Rr=(1+Math.sqrt(5))/2,As=1/Rr,d_=[new oe(-Rr,As,0),new oe(Rr,As,0),new oe(-As,0,Rr),new oe(As,0,Rr),new oe(0,Rr,-As),new oe(0,Rr,As),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)];class h_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gd,Vd,kd),this._renderer.xr.enabled=jd,t.scissorTest=!1,Nc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:Yo,format:Ui,colorSpace:Is,depthBuffer:!1},l=p_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(u)),this._blurMaterial=JE(u,t,i)}return l}_compileMaterial(t){const i=new ma(this._lodPlanes[0],t);this._renderer.compile(i,Hd)}_sceneToCubeUV(t,i,r,l){const h=new wi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(f_),g.toneMapping=Qa,g.autoClear=!1;const b=new sv({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),E=new ma(new $o,b);let R=!1;const M=t.background;M?M.isColor&&(b.color.copy(M),t.background=null,R=!0):(b.color.copy(f_),R=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):B===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const O=this._cubeSize;Nc(l,B*O,_>2?O:0,O,O),g.setRenderTarget(l),R&&g.render(E,h),g.render(t,h)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=M}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===zs||t.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ma(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Nc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Hd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=d_[(l-u-1)%d_.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ma(this._lodPlanes[l],p),y=p.uniforms,b=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*wr-1),R=u/E,M=isFinite(u)?1+Math.floor(g*R):wr;M>wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${wr}`);const _=[];let B=0;for(let P=0;P<wr;++P){const W=P/R,D=Math.exp(-W*W/2);_.push(D),P===0?B+=D:P<M&&(B+=2*D)}for(let P=0;P<_.length;P++)_[P]=_[P]/B;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:O}=this;y.dTheta.value=E,y.mipInt.value=O-r;const L=this._sizeLods[l],q=3*L*(l>O-Ds?l-O+Ds:0),H=4*(this._cubeSize-L);Nc(i,q,H,3*L,2*L),m.setRenderTarget(i),m.render(v,Hd)}}function QE(s){const t=[],i=[],r=[];let l=s;const u=s-Ds+1+u_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-Ds?m=u_[d-s+Ds-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],b=6,E=6,R=3,M=2,_=1,B=new Float32Array(R*E*b),O=new Float32Array(M*E*b),L=new Float32Array(_*E*b);for(let H=0;H<b;H++){const P=H%3*2/3-1,W=H>2?0:-1,D=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];B.set(D,R*E*H),O.set(y,M*E*H);const w=[H,H,H,H,H,H];L.set(w,_*E*H)}const q=new xi;q.setAttribute("position",new Ni(B,R)),q.setAttribute("uv",new Ni(O,M)),q.setAttribute("faceIndex",new Ni(L,_)),t.push(q),l>Ds&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function p_(s,t,i){const r=new Nr(s,t,i);return r.texture.mapping=Jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function JE(s,t,i){const r=new Float32Array(wr),l=new oe(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function m_(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function g_(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $E(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===ih||m===ah,g=m===zs||m===Ps;if(p||g){let v=t.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new h_(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const b=h.image;return p&&b&&b.height>0||g&&b&&l(b)?(i===null&&(i=new h_(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function eT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ws("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function tT(s,t,i,r){const l={},u=new WeakMap;function d(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",d),delete l[y.id];const b=u.get(y);b&&(t.remove(b),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(v,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const b in y)t.update(y[b],s.ARRAY_BUFFER)}function p(v){const y=[],b=v.index,E=v.attributes.position;let R=0;if(b!==null){const B=b.array;R=b.version;for(let O=0,L=B.length;O<L;O+=3){const q=B[O+0],H=B[O+1],P=B[O+2];y.push(q,H,H,P,P,q)}}else if(E!==void 0){const B=E.array;R=E.version;for(let O=0,L=B.length/3-1;O<L;O+=3){const q=O+0,H=O+1,P=O+2;y.push(q,H,H,P,P,q)}}else return;const M=new(ev(y)?lv:ov)(y,1);M.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function g(v){const y=u.get(v);if(y){const b=v.index;b!==null&&y.version<b.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function nT(s,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,b){s.drawElements(r,b,u,y*d),i.update(b,r,1)}function p(y,b,E){E!==0&&(s.drawElementsInstanced(r,b,u,y*d,E),i.update(b,r,E))}function g(y,b,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,y,0,E);let M=0;for(let _=0;_<E;_++)M+=b[_];i.update(M,r,1)}function v(y,b,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/d,b[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,b,0,u,y,0,R,0,E);let _=0;for(let B=0;B<E;B++)_+=b[B]*R[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function iT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function aT(s,t,i){const r=new WeakMap,l=new on;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==v){let w=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var b=w;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),R===!0&&(L=2),M===!0&&(L=3);let q=h.attributes.position.count*L,H=1;q>t.maxTextureSize&&(H=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const P=new Float32Array(q*H*4*v),W=new nv(P,q,H,v);W.type=ha,W.needsUpdate=!0;const D=L*4;for(let G=0;G<v;G++){const le=_[G],ie=B[G],me=O[G],ve=q*H*4*G;for(let U=0;U<le.count;U++){const K=U*D;E===!0&&(l.fromBufferAttribute(le,U),P[ve+K+0]=l.x,P[ve+K+1]=l.y,P[ve+K+2]=l.z,P[ve+K+3]=0),R===!0&&(l.fromBufferAttribute(ie,U),P[ve+K+4]=l.x,P[ve+K+5]=l.y,P[ve+K+6]=l.z,P[ve+K+7]=0),M===!0&&(l.fromBufferAttribute(me,U),P[ve+K+8]=l.x,P[ve+K+9]=l.y,P[ve+K+10]=l.z,P[ve+K+11]=me.itemSize===4?l.w:1)}}y={count:v,texture:W,size:new kt(q,H)},r.set(h,y),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function rT(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const gv=new Jn,__=new hv(1,1),_v=new nv,vv=new HS,xv=new fv,v_=[],x_=[],y_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=v_[l];if(u===void 0&&(u=new Float32Array(l),v_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(u,h)}return u}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function xn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function tu(s,t){let i=x_[t];i===void 0&&(i=new Int32Array(t),x_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function sT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function oT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),xn(i,t)}}function lT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),xn(i,t)}}function cT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),xn(i,t)}}function uT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;M_.set(r),s.uniformMatrix2fv(this.addr,!1,M_),xn(i,r)}}function fT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;S_.set(r),s.uniformMatrix3fv(this.addr,!1,S_),xn(i,r)}}function dT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,r))return;y_.set(r),s.uniformMatrix4fv(this.addr,!1,y_),xn(i,r)}}function hT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function pT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),xn(i,t)}}function mT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),xn(i,t)}}function gT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),xn(i,t)}}function _T(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function vT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),xn(i,t)}}function xT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),xn(i,t)}}function yT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),xn(i,t)}}function ST(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(__.compareFunction=$_,u=__):u=gv,i.setTexture2D(t||u,l)}function MT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||vv,l)}function bT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||xv,l)}function ET(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||_v,l)}function TT(s){switch(s){case 5126:return sT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return ET}}function AT(s,t){s.uniform1fv(this.addr,t)}function RT(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function CT(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function wT(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function DT(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function UT(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function LT(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function NT(s,t){s.uniform1iv(this.addr,t)}function OT(s,t){s.uniform2iv(this.addr,t)}function zT(s,t){s.uniform3iv(this.addr,t)}function PT(s,t){s.uniform4iv(this.addr,t)}function BT(s,t){s.uniform1uiv(this.addr,t)}function FT(s,t){s.uniform2uiv(this.addr,t)}function IT(s,t){s.uniform3uiv(this.addr,t)}function HT(s,t){s.uniform4uiv(this.addr,t)}function GT(s,t,i){const r=this.cache,l=t.length,u=tu(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||gv,u[d])}function VT(s,t,i){const r=this.cache,l=t.length,u=tu(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||vv,u[d])}function kT(s,t,i){const r=this.cache,l=t.length,u=tu(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||xv,u[d])}function jT(s,t,i){const r=this.cache,l=t.length,u=tu(i,l);vn(r,u)||(s.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||_v,u[d])}function XT(s){switch(s){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return zT;case 35669:case 35673:return PT;case 5125:return BT;case 36294:return FT;case 36295:return IT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return jT}}class WT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class qT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XT(i.type)}}class YT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function b_(s,t){s.seq.push(t),s.map[t.id]=t}function ZT(s,t,i){const r=s.name,l=r.length;for(Xd.lastIndex=0;;){const u=Xd.exec(r),d=Xd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){b_(i,p===void 0?new WT(h,s,t):new qT(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new YT(h),b_(i,v)),i=v}}}class jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);ZT(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function E_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const KT=37297;let QT=0;function JT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const T_=new ct;function $T(s){wt._getMatrix(T_,wt.workingColorSpace,s);const t=`mat3( ${T_.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(s)){case Xc:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function A_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+JT(s.getShaderSource(t),d)}else return l}function e1(s,t){const i=$T(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function t1(s,t){let i;switch(t){case fS:i="Linear";break;case dS:i="Reinhard";break;case hS:i="Cineon";break;case pS:i="ACESFilmic";break;case gS:i="AgX";break;case _S:i="Neutral";break;case mS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new oe;function n1(){wt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function a1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function r1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Xo(s){return s!==""}function R_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function C_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(s1,l1)}const o1=new Map;function l1(s,t){let i=ut[t];if(i===void 0){const r=o1.get(t);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Oh(i)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(s){return s.replace(c1,u1)}function u1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function D_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function f1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===H_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function d1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function p1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case G_:t="ENVMAP_BLENDING_MULTIPLY";break;case cS:t="ENVMAP_BLENDING_MIX";break;case uS:t="ENVMAP_BLENDING_ADD";break}return t}function m1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function g1(s,t,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=f1(i),p=d1(i),g=h1(i),v=p1(i),y=m1(i),b=i1(i),E=a1(u),R=l.createProgram();let M,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(M=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?ut.tonemapping_pars_fragment:"",i.toneMapping!==Qa?t1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,e1("linearToOutputTexel",i.outputColorSpace),n1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Oh(d),d=R_(d,i),d=C_(d,i),h=Oh(h),h=R_(h,i),h=C_(h,i),d=w_(d),h=w_(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+M+d,L=B+_+h,q=E_(l,l.VERTEX_SHADER,O),H=E_(l,l.FRAGMENT_SHADER,L);l.attachShader(R,q),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(G){if(s.debug.checkShaderErrors){const le=l.getProgramInfoLog(R).trim(),ie=l.getShaderInfoLog(q).trim(),me=l.getShaderInfoLog(H).trim();let ve=!0,U=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ve=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,q,H);else{const K=A_(l,q,"vertex"),Q=A_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+K+`
`+Q)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ie===""||me==="")&&(U=!1);U&&(G.diagnostics={runnable:ve,programLog:le,vertexShader:{log:ie,prefix:M},fragmentShader:{log:me,prefix:_}})}l.deleteShader(q),l.deleteShader(H),W=new jc(l,R),D=r1(l,R)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,KT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=q,this.fragmentShader=H,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new x1(t),i.set(t,r)),r}}class x1{constructor(t){this.id=_1++,this.code=t,this.usedTimes=0}}function y1(s,t,i,r,l,u,d){const h=new av,m=new v1,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,G,le,ie){const me=le.fog,ve=ie.geometry,U=D.isMeshStandardMaterial?le.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||U),Q=K&&K.mapping===Jc?K.image.height:null,Me=E[D.type];D.precision!==null&&(b=l.getMaxPrecision(D.precision),b!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const Ae=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,z=Ae!==void 0?Ae.length:0;let ae=0;ve.morphAttributes.position!==void 0&&(ae=1),ve.morphAttributes.normal!==void 0&&(ae=2),ve.morphAttributes.color!==void 0&&(ae=3);let Se,Z,de,Ee;if(Me){const Tt=Hi[Me];Se=Tt.vertexShader,Z=Tt.fragmentShader}else Se=D.vertexShader,Z=D.fragmentShader,m.update(D),de=m.getVertexShaderID(D),Ee=m.getFragmentShaderID(D);const ye=s.getRenderTarget(),Ge=s.state.buffers.depth.getReversed(),Be=ie.isInstancedMesh===!0,rt=ie.isBatchedMesh===!0,zt=!!D.map,ht=!!D.matcap,Yt=!!K,I=!!D.aoMap,Un=!!D.lightMap,dt=!!D.bumpMap,gt=!!D.normalMap,qe=!!D.displacementMap,Lt=!!D.emissiveMap,We=!!D.metalnessMap,N=!!D.roughnessMap,A=D.anisotropy>0,te=D.clearcoat>0,he=D.dispersion>0,be=D.iridescence>0,ge=D.sheen>0,je=D.transmission>0,De=A&&!!D.anisotropyMap,Fe=te&&!!D.clearcoatMap,_t=te&&!!D.clearcoatNormalMap,Re=te&&!!D.clearcoatRoughnessMap,Ie=be&&!!D.iridescenceMap,Ye=be&&!!D.iridescenceThicknessMap,Xe=ge&&!!D.sheenColorMap,ze=ge&&!!D.sheenRoughnessMap,$e=!!D.specularMap,st=!!D.specularColorMap,Pt=!!D.specularIntensityMap,j=je&&!!D.transmissionMap,Ce=je&&!!D.thicknessMap,ue=!!D.gradientMap,xe=!!D.alphaMap,we=D.alphaTest>0,Ue=!!D.alphaHash,et=!!D.extensions;let Zt=Qa;D.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Zt=s.toneMapping);const mn={shaderID:Me,shaderType:D.type,shaderName:D.name,vertexShader:Se,fragmentShader:Z,defines:D.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:rt,batchingColor:rt&&ie._colorsTexture!==null,instancing:Be,instancingColor:Be&&ie.instanceColor!==null,instancingMorph:Be&&ie.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Is,alphaToCoverage:!!D.alphaToCoverage,map:zt,matcap:ht,envMap:Yt,envMapMode:Yt&&K.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:Un,bumpMap:dt,normalMap:gt,displacementMap:y&&qe,emissiveMap:Lt,normalMapObjectSpace:gt&&D.normalMapType===MS,normalMapTangentSpace:gt&&D.normalMapType===SS,metalnessMap:We,roughnessMap:N,anisotropy:A,anisotropyMap:De,clearcoat:te,clearcoatMap:Fe,clearcoatNormalMap:_t,clearcoatRoughnessMap:Re,dispersion:he,iridescence:be,iridescenceMap:Ie,iridescenceThicknessMap:Ye,sheen:ge,sheenColorMap:Xe,sheenRoughnessMap:ze,specularMap:$e,specularColorMap:st,specularIntensityMap:Pt,transmission:je,transmissionMap:j,thicknessMap:Ce,gradientMap:ue,opaque:D.transparent===!1&&D.blending===Us&&D.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:Ue,combine:D.combine,mapUv:zt&&R(D.map.channel),aoMapUv:I&&R(D.aoMap.channel),lightMapUv:Un&&R(D.lightMap.channel),bumpMapUv:dt&&R(D.bumpMap.channel),normalMapUv:gt&&R(D.normalMap.channel),displacementMapUv:qe&&R(D.displacementMap.channel),emissiveMapUv:Lt&&R(D.emissiveMap.channel),metalnessMapUv:We&&R(D.metalnessMap.channel),roughnessMapUv:N&&R(D.roughnessMap.channel),anisotropyMapUv:De&&R(D.anisotropyMap.channel),clearcoatMapUv:Fe&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:_t&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(D.sheenRoughnessMap.channel),specularMapUv:$e&&R(D.specularMap.channel),specularColorMapUv:st&&R(D.specularColorMap.channel),specularIntensityMapUv:Pt&&R(D.specularIntensityMap.channel),transmissionMapUv:j&&R(D.transmissionMap.channel),thicknessMapUv:Ce&&R(D.thicknessMap.channel),alphaMapUv:xe&&R(D.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(gt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ve.attributes.uv&&(zt||xe),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ge,skinning:ie.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:zt&&D.map.isVideoTexture===!0&&wt.getTransfer(D.map.colorSpace)===Gt,decodeVideoTextureEmissive:Lt&&D.emissiveMap.isVideoTexture===!0&&wt.getTransfer(D.emissiveMap.colorSpace)===Gt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===da,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:et&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&D.extensions.multiDraw===!0||rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return mn.vertexUv1s=p.has(1),mn.vertexUv2s=p.has(2),mn.vertexUv3s=p.has(3),p.clear(),mn}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(w,D),O(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function B(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function O(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function L(D){const w=E[D.type];let G;if(w){const le=Hi[w];G=JS.clone(le.uniforms)}else G=D.uniforms;return G}function q(D,w){let G;for(let le=0,ie=g.length;le<ie;le++){const me=g[le];if(me.cacheKey===w){G=me,++G.usedTimes;break}}return G===void 0&&(G=new g1(s,w,D,u),g.push(G)),G}function H(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function P(D){m.remove(D)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:q,releaseProgram:H,releaseShaderCache:P,programs:g,dispose:W}}function S1(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function M1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function U_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function L_(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(v,y,b,E,R,M){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:b,groupOrder:E,renderOrder:v.renderOrder,z:R,group:M},s[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=b,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=M),t++,_}function h(v,y,b,E,R,M){const _=d(v,y,b,E,R,M);b.transmission>0?r.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(v,y,b,E,R,M){const _=d(v,y,b,E,R,M);b.transmission>0?r.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||M1),r.length>1&&r.sort(y||U_),l.length>1&&l.sort(y||U_)}function g(){for(let v=t,y=s.length;v<y;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function b1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let d;return u===void 0?(d=new L_,s.set(r,[d])):l>=u.length?(d=new L_,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function E1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new oe,color:new Ut};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[t.id]=i,i}}}function T1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let A1=0;function R1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function C1(s){const t=new E1,i=T1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const l=new oe,u=new ln,d=new ln;function h(p){let g=0,v=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let b=0,E=0,R=0,M=0,_=0,B=0,O=0,L=0,q=0,H=0,P=0;p.sort(R1);for(let D=0,w=p.length;D<w;D++){const G=p[D],le=G.color,ie=G.intensity,me=G.distance,ve=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*ie,v+=le.g*ie,y+=le.b*ie;else if(G.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(G.sh.coefficients[U],ie);P++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,Q=i.get(G);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.directionalShadow[b]=Q,r.directionalShadowMap[b]=ve,r.directionalShadowMatrix[b]=G.shadow.matrix,B++}r.directional[b]=U,b++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(le).multiplyScalar(ie),U.distance=me,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,r.spot[R]=U;const K=G.shadow;if(G.map&&(r.spotLightMap[q]=G.map,q++,K.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[R]=K.matrix,G.castShadow){const Q=i.get(G);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,r.spotShadow[R]=Q,r.spotShadowMap[R]=ve,L++}R++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(le).multiplyScalar(ie),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const K=G.shadow,Q=i.get(G);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,r.pointShadow[E]=Q,r.pointShadowMap[E]=ve,r.pointShadowMatrix[E]=G.shadow.matrix,O++}r.point[E]=U,E++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(ie),U.groundColor.copy(G.groundColor).multiplyScalar(ie),r.hemi[_]=U,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==b||W.pointLength!==E||W.spotLength!==R||W.rectAreaLength!==M||W.hemiLength!==_||W.numDirectionalShadows!==B||W.numPointShadows!==O||W.numSpotShadows!==L||W.numSpotMaps!==q||W.numLightProbes!==P)&&(r.directional.length=b,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+q-H,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=P,W.directionalLength=b,W.pointLength=E,W.spotLength=R,W.rectAreaLength=M,W.hemiLength=_,W.numDirectionalShadows=B,W.numPointShadows=O,W.numSpotShadows=L,W.numSpotMaps=q,W.numLightProbes=P,r.version=A1++)}function m(p,g){let v=0,y=0,b=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(O.isSpotLight){const L=r.spot[b];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),b++}else if(O.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),d.identity(),u.copy(O.matrixWorld),u.premultiply(M),d.extractRotation(u),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),E++}else if(O.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:r}}function N_(s){const t=new C1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function w1(s){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new N_(s),t.set(l,[h])):u>=d.length?(h=new N_(s),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L1(s,t,i){let r=new dv;const l=new kt,u=new kt,d=new on,h=new sM({depthPacking:yS}),m=new oM,p={},g=i.maxTextureSize,v={[$a]:Qn,[Qn]:$a,[da]:da},y=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:D1,fragmentShader:U1}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const E=new xi;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ma(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H_;let _=this.type;this.render=function(H,P,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Ka),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ie=_!==fa&&this.type===fa,me=_===fa&&this.type!==fa;for(let ve=0,U=H.length;ve<U;ve++){const K=H[ve],Q=K.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const Me=Q.getFrameExtents();if(l.multiply(Me),u.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Me.x),l.x=u.x*Me.x,Q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Me.y),l.y=u.y*Me.y,Q.mapSize.y=u.y)),Q.map===null||ie===!0||me===!0){const z=this.type!==fa?{minFilter:Li,magFilter:Li}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Nr(l.x,l.y,z),Q.map.texture.name=K.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const Ae=Q.getViewportCount();for(let z=0;z<Ae;z++){const ae=Q.getViewport(z);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),le.viewport(d),Q.updateMatrices(K,z),r=Q.getFrustum(),L(P,W,Q.camera,K,this.type)}Q.isPointLightShadow!==!0&&this.type===fa&&B(Q,W),Q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(D,w,G)};function B(H,P){const W=t.update(R);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Nr(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(P,null,W,y,R,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(P,null,W,b,R,null)}function O(H,P,W,D){let w=null;const G=W.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=W.isPointLight===!0?m:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const le=w.uuid,ie=P.uuid;let me=p[le];me===void 0&&(me={},p[le]=me);let ve=me[ie];ve===void 0&&(ve=w.clone(),me[ie]=ve,P.addEventListener("dispose",q)),w=ve}if(w.visible=P.visible,w.wireframe=P.wireframe,D===fa?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:v[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=s.properties.get(w);le.light=W}return w}function L(H,P,W,D,w){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===fa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,H.matrixWorld);const ie=t.update(H),me=H.material;if(Array.isArray(me)){const ve=ie.groups;for(let U=0,K=ve.length;U<K;U++){const Q=ve[U],Me=me[Q.materialIndex];if(Me&&Me.visible){const Ae=O(H,Me,D,w);H.onBeforeShadow(s,H,P,W,ie,Ae,Q),s.renderBufferDirect(W,null,ie,Ae,H,Q),H.onAfterShadow(s,H,P,W,ie,Ae,Q)}}}else if(me.visible){const ve=O(H,me,D,w);H.onBeforeShadow(s,H,P,W,ie,ve,null),s.renderBufferDirect(W,null,ie,ve,H,null),H.onAfterShadow(s,H,P,W,ie,ve,null)}}const le=H.children;for(let ie=0,me=le.length;ie<me;ie++)L(le[ie],P,W,D,w)}function q(H){H.target.removeEventListener("dispose",q);for(const W in p){const D=p[W],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const N1={[Kd]:Qd,[Jd]:th,[$d]:nh,[Os]:eh,[Qd]:Kd,[th]:Jd,[nh]:$d,[eh]:Os};function O1(s,t){function i(){let j=!1;const Ce=new on;let ue=null;const xe=new on(0,0,0,0);return{setMask:function(we){ue!==we&&!j&&(s.colorMask(we,we,we,we),ue=we)},setLocked:function(we){j=we},setClear:function(we,Ue,et,Zt,mn){mn===!0&&(we*=Zt,Ue*=Zt,et*=Zt),Ce.set(we,Ue,et,Zt),xe.equals(Ce)===!1&&(s.clearColor(we,Ue,et,Zt),xe.copy(Ce))},reset:function(){j=!1,ue=null,xe.set(-1,0,0,0)}}}function r(){let j=!1,Ce=!1,ue=null,xe=null,we=null;return{setReversed:function(Ue){if(Ce!==Ue){const et=t.get("EXT_clip_control");Ce?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Zt=we;we=null,this.setClear(Zt)}Ce=Ue},getReversed:function(){return Ce},setTest:function(Ue){Ue?ye(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(Ue){ue!==Ue&&!j&&(s.depthMask(Ue),ue=Ue)},setFunc:function(Ue){if(Ce&&(Ue=N1[Ue]),xe!==Ue){switch(Ue){case Kd:s.depthFunc(s.NEVER);break;case Qd:s.depthFunc(s.ALWAYS);break;case Jd:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case $d:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Ue}},setLocked:function(Ue){j=Ue},setClear:function(Ue){we!==Ue&&(Ce&&(Ue=1-Ue),s.clearDepth(Ue),we=Ue)},reset:function(){j=!1,ue=null,xe=null,we=null,Ce=!1}}}function l(){let j=!1,Ce=null,ue=null,xe=null,we=null,Ue=null,et=null,Zt=null,mn=null;return{setTest:function(Tt){j||(Tt?ye(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(Tt){Ce!==Tt&&!j&&(s.stencilMask(Tt),Ce=Tt)},setFunc:function(Tt,bn,yi){(ue!==Tt||xe!==bn||we!==yi)&&(s.stencilFunc(Tt,bn,yi),ue=Tt,xe=bn,we=yi)},setOp:function(Tt,bn,yi){(Ue!==Tt||et!==bn||Zt!==yi)&&(s.stencilOp(Tt,bn,yi),Ue=Tt,et=bn,Zt=yi)},setLocked:function(Tt){j=Tt},setClear:function(Tt){mn!==Tt&&(s.clearStencil(Tt),mn=Tt)},reset:function(){j=!1,Ce=null,ue=null,xe=null,we=null,Ue=null,et=null,Zt=null,mn=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,b=[],E=null,R=!1,M=null,_=null,B=null,O=null,L=null,q=null,H=null,P=new Ut(0,0,0),W=0,D=!1,w=null,G=null,le=null,ie=null,me=null;const ve=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),U=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),U=K>=2);let Me=null,Ae={};const z=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),Se=new on().fromArray(z),Z=new on().fromArray(ae);function de(j,Ce,ue,xe){const we=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(j,Ue),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ue;et++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Ce+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return Ue}const Ee={};Ee[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ye(s.DEPTH_TEST),d.setFunc(Os),dt(!1),gt(B0),ye(s.CULL_FACE),I(Ka);function ye(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Ge(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function Be(j,Ce){return v[j]!==Ce?(s.bindFramebuffer(j,Ce),v[j]=Ce,j===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),j===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function rt(j,Ce){let ue=b,xe=!1;if(j){ue=y.get(Ce),ue===void 0&&(ue=[],y.set(Ce,ue));const we=j.textures;if(ue.length!==we.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,et=we.length;Ue<et;Ue++)ue[Ue]=s.COLOR_ATTACHMENT0+Ue;ue.length=we.length,xe=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,xe=!0);xe&&s.drawBuffers(ue)}function zt(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const ht={[Cr]:s.FUNC_ADD,[Wy]:s.FUNC_SUBTRACT,[qy]:s.FUNC_REVERSE_SUBTRACT};ht[Yy]=s.MIN,ht[Zy]=s.MAX;const Yt={[Ky]:s.ZERO,[Qy]:s.ONE,[Jy]:s.SRC_COLOR,[Yd]:s.SRC_ALPHA,[aS]:s.SRC_ALPHA_SATURATE,[nS]:s.DST_COLOR,[eS]:s.DST_ALPHA,[$y]:s.ONE_MINUS_SRC_COLOR,[Zd]:s.ONE_MINUS_SRC_ALPHA,[iS]:s.ONE_MINUS_DST_COLOR,[tS]:s.ONE_MINUS_DST_ALPHA,[rS]:s.CONSTANT_COLOR,[sS]:s.ONE_MINUS_CONSTANT_COLOR,[oS]:s.CONSTANT_ALPHA,[lS]:s.ONE_MINUS_CONSTANT_ALPHA};function I(j,Ce,ue,xe,we,Ue,et,Zt,mn,Tt){if(j===Ka){R===!0&&(Ge(s.BLEND),R=!1);return}if(R===!1&&(ye(s.BLEND),R=!0),j!==Xy){if(j!==M||Tt!==D){if((_!==Cr||L!==Cr)&&(s.blendEquation(s.FUNC_ADD),_=Cr,L=Cr),Tt)switch(j){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case F0:s.blendFunc(s.ONE,s.ONE);break;case I0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case F0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case I0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}B=null,O=null,q=null,H=null,P.set(0,0,0),W=0,M=j,D=Tt}return}we=we||Ce,Ue=Ue||ue,et=et||xe,(Ce!==_||we!==L)&&(s.blendEquationSeparate(ht[Ce],ht[we]),_=Ce,L=we),(ue!==B||xe!==O||Ue!==q||et!==H)&&(s.blendFuncSeparate(Yt[ue],Yt[xe],Yt[Ue],Yt[et]),B=ue,O=xe,q=Ue,H=et),(Zt.equals(P)===!1||mn!==W)&&(s.blendColor(Zt.r,Zt.g,Zt.b,mn),P.copy(Zt),W=mn),M=j,D=!1}function Un(j,Ce){j.side===da?Ge(s.CULL_FACE):ye(s.CULL_FACE);let ue=j.side===Qn;Ce&&(ue=!ue),dt(ue),j.blending===Us&&j.transparent===!1?I(Ka):I(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const xe=j.stencilWrite;h.setTest(xe),xe&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Lt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(j){w!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),w=j)}function gt(j){j!==Vy?(ye(s.CULL_FACE),j!==G&&(j===B0?s.cullFace(s.BACK):j===ky?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),G=j}function qe(j){j!==le&&(U&&s.lineWidth(j),le=j)}function Lt(j,Ce,ue){j?(ye(s.POLYGON_OFFSET_FILL),(ie!==Ce||me!==ue)&&(s.polygonOffset(Ce,ue),ie=Ce,me=ue)):Ge(s.POLYGON_OFFSET_FILL)}function We(j){j?ye(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function N(j){j===void 0&&(j=s.TEXTURE0+ve-1),Me!==j&&(s.activeTexture(j),Me=j)}function A(j,Ce,ue){ue===void 0&&(Me===null?ue=s.TEXTURE0+ve-1:ue=Me);let xe=Ae[ue];xe===void 0&&(xe={type:void 0,texture:void 0},Ae[ue]=xe),(xe.type!==j||xe.texture!==Ce)&&(Me!==ue&&(s.activeTexture(ue),Me=ue),s.bindTexture(j,Ce||Ee[j]),xe.type=j,xe.texture=Ce)}function te(){const j=Ae[Me];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _t(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(j){Se.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Se.copy(j))}function ze(j){Z.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function $e(j,Ce){let ue=p.get(Ce);ue===void 0&&(ue=new WeakMap,p.set(Ce,ue));let xe=ue.get(j);xe===void 0&&(xe=s.getUniformBlockIndex(Ce,j.name),ue.set(j,xe))}function st(j,Ce){const xe=p.get(Ce).get(j);m.get(Ce)!==xe&&(s.uniformBlockBinding(Ce,xe,j.__bindingPointIndex),m.set(Ce,xe))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Me=null,Ae={},v={},y=new WeakMap,b=[],E=null,R=!1,M=null,_=null,B=null,O=null,L=null,q=null,H=null,P=new Ut(0,0,0),W=0,D=!1,w=null,G=null,le=null,ie=null,me=null,Se.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ye,disable:Ge,bindFramebuffer:Be,drawBuffers:rt,useProgram:zt,setBlending:I,setMaterial:Un,setFlipSided:dt,setCullFace:gt,setLineWidth:qe,setPolygonOffset:Lt,setScissorTest:We,activeTexture:N,bindTexture:A,unbindTexture:te,compressedTexImage2D:he,compressedTexImage3D:be,texImage2D:Ie,texImage3D:Ye,updateUBOMapping:$e,uniformBlockBinding:st,texStorage2D:_t,texStorage3D:Re,texSubImage2D:ge,texSubImage3D:je,compressedTexSubImage2D:De,compressedTexSubImage3D:Fe,scissor:Xe,viewport:ze,reset:Pt}}function z1(s,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,g=new WeakMap;let v;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return b?new OffscreenCanvas(N,A):qc("canvas")}function R(N,A,te){let he=1;const be=We(N);if((be.width>te||be.height>te)&&(he=te/Math.max(be.width,be.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ge=Math.floor(he*be.width),je=Math.floor(he*be.height);v===void 0&&(v=E(ge,je));const De=A?E(ge,je):v;return De.width=ge,De.height=je,De.getContext("2d").drawImage(N,0,0,ge,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ge+"x"+je+")."),De}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(N,A,te,he,be=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge=A;if(A===s.RED&&(te===s.FLOAT&&(ge=s.R32F),te===s.HALF_FLOAT&&(ge=s.R16F),te===s.UNSIGNED_BYTE&&(ge=s.R8)),A===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.R8UI),te===s.UNSIGNED_SHORT&&(ge=s.R16UI),te===s.UNSIGNED_INT&&(ge=s.R32UI),te===s.BYTE&&(ge=s.R8I),te===s.SHORT&&(ge=s.R16I),te===s.INT&&(ge=s.R32I)),A===s.RG&&(te===s.FLOAT&&(ge=s.RG32F),te===s.HALF_FLOAT&&(ge=s.RG16F),te===s.UNSIGNED_BYTE&&(ge=s.RG8)),A===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.RG8UI),te===s.UNSIGNED_SHORT&&(ge=s.RG16UI),te===s.UNSIGNED_INT&&(ge=s.RG32UI),te===s.BYTE&&(ge=s.RG8I),te===s.SHORT&&(ge=s.RG16I),te===s.INT&&(ge=s.RG32I)),A===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),te===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),te===s.UNSIGNED_INT&&(ge=s.RGB32UI),te===s.BYTE&&(ge=s.RGB8I),te===s.SHORT&&(ge=s.RGB16I),te===s.INT&&(ge=s.RGB32I)),A===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),te===s.UNSIGNED_INT&&(ge=s.RGBA32UI),te===s.BYTE&&(ge=s.RGBA8I),te===s.SHORT&&(ge=s.RGBA16I),te===s.INT&&(ge=s.RGBA32I)),A===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),A===s.RGBA){const je=be?Xc:wt.getTransfer(he);te===s.FLOAT&&(ge=s.RGBA32F),te===s.HALF_FLOAT&&(ge=s.RGBA16F),te===s.UNSIGNED_BYTE&&(ge=je===Gt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ge}function L(N,A){let te;return N?A===null||A===Lr||A===Bs?te=s.DEPTH24_STENCIL8:A===ha?te=s.DEPTH32F_STENCIL8:A===Wo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Lr||A===Bs?te=s.DEPTH_COMPONENT24:A===ha?te=s.DEPTH_COMPONENT32F:A===Wo&&(te=s.DEPTH_COMPONENT16),te}function q(N,A){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Li&&N.minFilter!==Gi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function H(N){const A=N.target;A.removeEventListener("dispose",H),W(A),A.isVideoTexture&&g.delete(A)}function P(N){const A=N.target;A.removeEventListener("dispose",P),w(A)}function W(N){const A=r.get(N);if(A.__webglInit===void 0)return;const te=N.source,he=y.get(te);if(he){const be=he[A.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(N),Object.keys(he).length===0&&y.delete(te)}r.remove(N)}function D(N){const A=r.get(N);s.deleteTexture(A.__webglTexture);const te=N.source,he=y.get(te);delete he[A.__cacheKey],d.memory.textures--}function w(N){const A=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let be=0;be<A.__webglFramebuffer[he].length;be++)s.deleteFramebuffer(A.__webglFramebuffer[he][be]);else s.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)s.deleteFramebuffer(A.__webglFramebuffer[he]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=N.textures;for(let he=0,be=te.length;he<be;he++){const ge=r.get(te[he]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),d.memory.textures--),r.remove(te[he])}r.remove(N)}let G=0;function le(){G=0}function ie(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function me(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function ve(N,A){const te=r.get(N);if(N.isVideoTexture&&qe(N),N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(te,N,A);return}}i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function U(N,A){const te=r.get(N);if(N.version>0&&te.__version!==N.version){Z(te,N,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function K(N,A){const te=r.get(N);if(N.version>0&&te.__version!==N.version){Z(te,N,A);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function Q(N,A){const te=r.get(N);if(N.version>0&&te.__version!==N.version){de(te,N,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}const Me={[rh]:s.REPEAT,[Dr]:s.CLAMP_TO_EDGE,[sh]:s.MIRRORED_REPEAT},Ae={[Li]:s.NEAREST,[vS]:s.NEAREST_MIPMAP_NEAREST,[uc]:s.NEAREST_MIPMAP_LINEAR,[Gi]:s.LINEAR,[gd]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},z={[bS]:s.NEVER,[wS]:s.ALWAYS,[ES]:s.LESS,[$_]:s.LEQUAL,[TS]:s.EQUAL,[CS]:s.GEQUAL,[AS]:s.GREATER,[RS]:s.NOTEQUAL};function ae(N,A){if(A.type===ha&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Gi||A.magFilter===gd||A.magFilter===uc||A.magFilter===Ur||A.minFilter===Gi||A.minFilter===gd||A.minFilter===uc||A.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Me[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Me[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Me[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Ae[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Ae[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Li||A.minFilter!==uc&&A.minFilter!==Ur||A.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Se(N,A){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",H));const he=A.source;let be=y.get(he);be===void 0&&(be={},y.set(he,be));const ge=me(A);if(ge!==N.__cacheKey){be[ge]===void 0&&(be[ge]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),be[ge].usedTimes++;const je=be[N.__cacheKey];je!==void 0&&(be[N.__cacheKey].usedTimes--,je.usedTimes===0&&D(A)),N.__cacheKey=ge,N.__webglTexture=be[ge].texture}return te}function Z(N,A,te){let he=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=s.TEXTURE_3D);const be=Se(N,A),ge=A.source;i.bindTexture(he,N.__webglTexture,s.TEXTURE0+te);const je=r.get(ge);if(ge.version!==je.__version||be===!0){i.activeTexture(s.TEXTURE0+te);const De=wt.getPrimaries(wt.workingColorSpace),Fe=A.colorSpace===Za?null:wt.getPrimaries(A.colorSpace),_t=A.colorSpace===Za||De===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Re=R(A.image,!1,l.maxTextureSize);Re=Lt(A,Re);const Ie=u.convert(A.format,A.colorSpace),Ye=u.convert(A.type);let Xe=O(A.internalFormat,Ie,Ye,A.colorSpace,A.isVideoTexture);ae(he,A);let ze;const $e=A.mipmaps,st=A.isVideoTexture!==!0,Pt=je.__version===void 0||be===!0,j=ge.dataReady,Ce=q(A,Re);if(A.isDepthTexture)Xe=L(A.format===Fs,A.type),Pt&&(st?i.texStorage2D(s.TEXTURE_2D,1,Xe,Re.width,Re.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Re.width,Re.height,0,Ie,Ye,null));else if(A.isDataTexture)if($e.length>0){st&&Pt&&i.texStorage2D(s.TEXTURE_2D,Ce,Xe,$e[0].width,$e[0].height);for(let ue=0,xe=$e.length;ue<xe;ue++)ze=$e[ue],st?j&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,Ie,Ye,ze.data):i.texImage2D(s.TEXTURE_2D,ue,Xe,ze.width,ze.height,0,Ie,Ye,ze.data);A.generateMipmaps=!1}else st?(Pt&&i.texStorage2D(s.TEXTURE_2D,Ce,Xe,Re.width,Re.height),j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re.width,Re.height,Ie,Ye,Re.data)):i.texImage2D(s.TEXTURE_2D,0,Xe,Re.width,Re.height,0,Ie,Ye,Re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Pt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Xe,$e[0].width,$e[0].height,Re.depth);for(let ue=0,xe=$e.length;ue<xe;ue++)if(ze=$e[ue],A.format!==Ui)if(Ie!==null)if(st){if(j)if(A.layerUpdates.size>0){const we=c_(ze.width,ze.height,A.format,A.type);for(const Ue of A.layerUpdates){const et=ze.data.subarray(Ue*we/ze.data.BYTES_PER_ELEMENT,(Ue+1)*we/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Ue,ze.width,ze.height,1,Ie,et)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Re.depth,Ie,ze.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Xe,ze.width,ze.height,Re.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?j&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Re.depth,Ie,Ye,ze.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ue,Xe,ze.width,ze.height,Re.depth,0,Ie,Ye,ze.data)}else{st&&Pt&&i.texStorage2D(s.TEXTURE_2D,Ce,Xe,$e[0].width,$e[0].height);for(let ue=0,xe=$e.length;ue<xe;ue++)ze=$e[ue],A.format!==Ui?Ie!==null?st?j&&i.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,Ie,ze.data):i.compressedTexImage2D(s.TEXTURE_2D,ue,Xe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?j&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,Ie,Ye,ze.data):i.texImage2D(s.TEXTURE_2D,ue,Xe,ze.width,ze.height,0,Ie,Ye,ze.data)}else if(A.isDataArrayTexture)if(st){if(Pt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Xe,Re.width,Re.height,Re.depth),j)if(A.layerUpdates.size>0){const ue=c_(Re.width,Re.height,A.format,A.type);for(const xe of A.layerUpdates){const we=Re.data.subarray(xe*ue/Re.data.BYTES_PER_ELEMENT,(xe+1)*ue/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Re.width,Re.height,1,Ie,Ye,we)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ie,Ye,Re.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Re.width,Re.height,Re.depth,0,Ie,Ye,Re.data);else if(A.isData3DTexture)st?(Pt&&i.texStorage3D(s.TEXTURE_3D,Ce,Xe,Re.width,Re.height,Re.depth),j&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ie,Ye,Re.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Re.width,Re.height,Re.depth,0,Ie,Ye,Re.data);else if(A.isFramebufferTexture){if(Pt)if(st)i.texStorage2D(s.TEXTURE_2D,Ce,Xe,Re.width,Re.height);else{let ue=Re.width,xe=Re.height;for(let we=0;we<Ce;we++)i.texImage2D(s.TEXTURE_2D,we,Xe,ue,xe,0,Ie,Ye,null),ue>>=1,xe>>=1}}else if($e.length>0){if(st&&Pt){const ue=We($e[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Xe,ue.width,ue.height)}for(let ue=0,xe=$e.length;ue<xe;ue++)ze=$e[ue],st?j&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ie,Ye,ze):i.texImage2D(s.TEXTURE_2D,ue,Xe,Ie,Ye,ze);A.generateMipmaps=!1}else if(st){if(Pt){const ue=We(Re);i.texStorage2D(s.TEXTURE_2D,Ce,Xe,ue.width,ue.height)}j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Ye,Re)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Ie,Ye,Re);M(A)&&_(he),je.__version=ge.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function de(N,A,te){if(A.image.length!==6)return;const he=Se(N,A),be=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+te);const ge=r.get(be);if(be.version!==ge.__version||he===!0){i.activeTexture(s.TEXTURE0+te);const je=wt.getPrimaries(wt.workingColorSpace),De=A.colorSpace===Za?null:wt.getPrimaries(A.colorSpace),Fe=A.colorSpace===Za||je===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const _t=A.isCompressedTexture||A.image[0].isCompressedTexture,Re=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!_t&&!Re?Ie[xe]=R(A.image[xe],!0,l.maxCubemapSize):Ie[xe]=Re?A.image[xe].image:A.image[xe],Ie[xe]=Lt(A,Ie[xe]);const Ye=Ie[0],Xe=u.convert(A.format,A.colorSpace),ze=u.convert(A.type),$e=O(A.internalFormat,Xe,ze,A.colorSpace),st=A.isVideoTexture!==!0,Pt=ge.__version===void 0||he===!0,j=be.dataReady;let Ce=q(A,Ye);ae(s.TEXTURE_CUBE_MAP,A);let ue;if(_t){st&&Pt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,$e,Ye.width,Ye.height);for(let xe=0;xe<6;xe++){ue=Ie[xe].mipmaps;for(let we=0;we<ue.length;we++){const Ue=ue[we];A.format!==Ui?Xe!==null?st?j&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,Ue.width,Ue.height,Xe,Ue.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,$e,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,0,0,Ue.width,Ue.height,Xe,ze,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,$e,Ue.width,Ue.height,0,Xe,ze,Ue.data)}}}else{if(ue=A.mipmaps,st&&Pt){ue.length>0&&Ce++;const xe=We(Ie[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,$e,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Re){st?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,Xe,ze,Ie[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,$e,Ie[xe].width,Ie[xe].height,0,Xe,ze,Ie[xe].data);for(let we=0;we<ue.length;we++){const et=ue[we].image[xe].image;st?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,et.width,et.height,Xe,ze,et.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,$e,et.width,et.height,0,Xe,ze,et.data)}}else{st?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Xe,ze,Ie[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,$e,Xe,ze,Ie[xe]);for(let we=0;we<ue.length;we++){const Ue=ue[we];st?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,0,0,Xe,ze,Ue.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,$e,Xe,ze,Ue.image[xe])}}}M(A)&&_(s.TEXTURE_CUBE_MAP),ge.__version=be.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Ee(N,A,te,he,be,ge){const je=u.convert(te.format,te.colorSpace),De=u.convert(te.type),Fe=O(te.internalFormat,je,De,te.colorSpace),_t=r.get(A),Re=r.get(te);if(Re.__renderTarget=A,!_t.__hasExternalTextures){const Ie=Math.max(1,A.width>>ge),Ye=Math.max(1,A.height>>ge);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,ge,Fe,Ie,Ye,A.depth,0,je,De,null):i.texImage2D(be,ge,Fe,Ie,Ye,0,je,De,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),gt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,be,Re.__webglTexture,0,dt(A)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,be,Re.__webglTexture,ge),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(N,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){const he=A.depthTexture,be=he&&he.isDepthTexture?he.type:null,ge=L(A.stencilBuffer,be),je=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=dt(A);gt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,ge,A.width,A.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,N)}else{const he=A.textures;for(let be=0;be<he.length;be++){const ge=he[be],je=u.convert(ge.format,ge.colorSpace),De=u.convert(ge.type),Fe=O(ge.internalFormat,je,De,ge.colorSpace),_t=dt(A);te&&gt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Fe,A.width,A.height):gt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ve(A.depthTexture,0);const be=he.__webglTexture,ge=dt(A);if(A.depthTexture.format===Ls)gt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0);else if(A.depthTexture.format===Fs)gt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Be(N){const A=r.get(N),te=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const be=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",be)};he.addEventListener("dispose",be),A.__depthDisposeCallback=be}A.__boundDepthTexture=he}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Ge(A.__webglFramebuffer,N)}else if(te){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=s.createRenderbuffer(),ye(A.__webglDepthbuffer[he],N,!1);else{const be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,ge)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ye(A.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,be)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(N,A,te){const he=r.get(N);A!==void 0&&Ee(he.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Be(N)}function zt(N){const A=N.texture,te=r.get(N),he=r.get(A);N.addEventListener("dispose",P);const be=N.textures,ge=N.isWebGLCubeRenderTarget===!0,je=be.length>1;if(je||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=A.version,d.memory.textures++),ge){te.__webglFramebuffer=[];for(let De=0;De<6;De++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[De]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)te.__webglFramebuffer[De][Fe]=s.createFramebuffer()}else te.__webglFramebuffer[De]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let De=0;De<A.mipmaps.length;De++)te.__webglFramebuffer[De]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(je)for(let De=0,Fe=be.length;De<Fe;De++){const _t=r.get(be[De]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&gt(N)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let De=0;De<be.length;De++){const Fe=be[De];te.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[De]);const _t=u.convert(Fe.format,Fe.colorSpace),Re=u.convert(Fe.type),Ie=O(Fe.internalFormat,_t,Re,Fe.colorSpace,N.isXRRenderTarget===!0),Ye=dt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ie,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,te.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(te.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ae(s.TEXTURE_CUBE_MAP,A);for(let De=0;De<6;De++)if(A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ee(te.__webglFramebuffer[De][Fe],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Fe);else Ee(te.__webglFramebuffer[De],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let De=0,Fe=be.length;De<Fe;De++){const _t=be[De],Re=r.get(_t);i.bindTexture(s.TEXTURE_2D,Re.__webglTexture),ae(s.TEXTURE_2D,_t),Ee(te.__webglFramebuffer,N,_t,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),M(_t)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let De=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,he.__webglTexture),ae(De,A),A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ee(te.__webglFramebuffer[Fe],N,A,s.COLOR_ATTACHMENT0,De,Fe);else Ee(te.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,De,0);M(A)&&_(De),i.unbindTexture()}N.depthBuffer&&Be(N)}function ht(N){const A=N.textures;for(let te=0,he=A.length;te<he;te++){const be=A[te];if(M(be)){const ge=B(N),je=r.get(be).__webglTexture;i.bindTexture(ge,je),_(ge),i.unbindTexture()}}}const Yt=[],I=[];function Un(N){if(N.samples>0){if(gt(N)===!1){const A=N.textures,te=N.width,he=N.height;let be=s.COLOR_BUFFER_BIT;const ge=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(N),De=A.length>1;if(De)for(let Fe=0;Fe<A.length;Fe++)i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const _t=r.get(A[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,te,he,0,0,te,he,be,s.NEAREST),m===!0&&(Yt.length=0,I.length=0,Yt.push(s.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Yt.push(ge),I.push(ge),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let Fe=0;Fe<A.length;Fe++){i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,je.__webglColorRenderbuffer[Fe]);const _t=r.get(A[Fe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,_t,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function dt(N){return Math.min(l.maxSamples,N.samples)}function gt(N){const A=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qe(N){const A=d.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function Lt(N,A){const te=N.colorSpace,he=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==Is&&te!==Za&&(wt.getTransfer(te)===Gt?(he!==Ui||be!==_a)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=le,this.setTexture2D=ve,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=rt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=gt}function P1(s,t){function i(r,l=Za){let u;const d=wt.getTransfer(l);if(r===_a)return s.UNSIGNED_BYTE;if(r===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===X_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===k_)return s.BYTE;if(r===j_)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Ih)return s.INT;if(r===Lr)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===Yo)return s.HALF_FLOAT;if(r===W_)return s.ALPHA;if(r===q_)return s.RGB;if(r===Ui)return s.RGBA;if(r===Y_)return s.LUMINANCE;if(r===Z_)return s.LUMINANCE_ALPHA;if(r===Ls)return s.DEPTH_COMPONENT;if(r===Fs)return s.DEPTH_STENCIL;if(r===K_)return s.RED;if(r===Vh)return s.RED_INTEGER;if(r===Q_)return s.RG;if(r===kh)return s.RG_INTEGER;if(r===jh)return s.RGBA_INTEGER;if(r===Fc||r===Ic||r===Hc||r===Gc)if(d===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Fc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Fc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===lh||r===ch||r===uh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===oh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ch)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fh||r===dh||r===hh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===fh||r===dh)return d===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===hh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Sh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ph)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ah)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vc||r===Ch||r===wh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Vc)return d===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===J_||r===Dh||r===Uh||r===Lh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Vc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const B1={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),b=.02,E=.005;p.inputState.pinching&&y>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(B1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Uc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const F1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Jn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new er({vertexShader:F1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ma(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends Gs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,y=null,b=null,E=null;const R=new H1,M=i.getContextAttributes();let _=null,B=null;const O=[],L=[],q=new kt;let H=null;const P=new wi;P.viewport=new on;const W=new wi;W.viewport=new on;const D=[P,W],w=new lM;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=O[Z];return de===void 0&&(de=new Wd,O[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=O[Z];return de===void 0&&(de=new Wd,O[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=O[Z];return de===void 0&&(de=new Wd,O[Z]=de),de.getHandSpace()};function ie(Z){const de=L.indexOf(Z.inputSource);if(de===-1)return;const Ee=O[de];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,p||d),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function me(){l.removeEventListener("select",ie),l.removeEventListener("selectstart",ie),l.removeEventListener("selectend",ie),l.removeEventListener("squeeze",ie),l.removeEventListener("squeezestart",ie),l.removeEventListener("squeezeend",ie),l.removeEventListener("end",me),l.removeEventListener("inputsourceschange",ve);for(let Z=0;Z<O.length;Z++){const de=L[Z];de!==null&&(L[Z]=null,O[Z].disconnect(de))}G=null,le=null,R.reset(),t.setRenderTarget(_),b=null,y=null,v=null,l=null,B=null,Se.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ie),l.addEventListener("selectstart",ie),l.addEventListener("selectend",ie),l.addEventListener("squeeze",ie),l.addEventListener("squeezestart",ie),l.addEventListener("squeezeend",ie),l.addEventListener("end",me),l.addEventListener("inputsourceschange",ve),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(q),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let Ee=null,ye=null,Ge=null;M.depth&&(Ge=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=M.stencil?Fs:Ls,ye=M.stencil?Bs:Lr);const Be={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Be),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),B=new Nr(y.textureWidth,y.textureHeight,{format:Ui,type:_a,depthTexture:new hv(y.textureWidth,y.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),B=new Nr(b.framebufferWidth,b.framebufferHeight,{format:Ui,type:_a,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Se.setContext(l),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ve(Z){for(let de=0;de<Z.removed.length;de++){const Ee=Z.removed[de],ye=L.indexOf(Ee);ye>=0&&(L[ye]=null,O[ye].disconnect(Ee))}for(let de=0;de<Z.added.length;de++){const Ee=Z.added[de];let ye=L.indexOf(Ee);if(ye===-1){for(let Be=0;Be<O.length;Be++)if(Be>=L.length){L.push(Ee),ye=Be;break}else if(L[Be]===null){L[Be]=Ee,ye=Be;break}if(ye===-1)break}const Ge=O[ye];Ge&&Ge.connect(Ee)}}const U=new oe,K=new oe;function Q(Z,de,Ee){U.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const ye=U.distanceTo(K),Ge=de.projectionMatrix.elements,Be=Ee.projectionMatrix.elements,rt=Ge[14]/(Ge[10]-1),zt=Ge[14]/(Ge[10]+1),ht=(Ge[9]+1)/Ge[5],Yt=(Ge[9]-1)/Ge[5],I=(Ge[8]-1)/Ge[0],Un=(Be[8]+1)/Be[0],dt=rt*I,gt=rt*Un,qe=ye/(-I+Un),Lt=qe*-I;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ge[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=rt+qe,N=zt+qe,A=dt-Lt,te=gt+(ye-Lt),he=ht*zt/N*We,be=Yt*zt/N*We;Z.projectionMatrix.makePerspective(A,te,he,be,We,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let de=Z.near,Ee=Z.far;R.texture!==null&&(R.depthNear>0&&(de=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),w.near=W.near=P.near=de,w.far=W.far=P.far=Ee,(G!==w.near||le!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,le=w.far),P.layers.mask=Z.layers.mask|2,W.layers.mask=Z.layers.mask|4,w.layers.mask=P.layers.mask|W.layers.mask;const ye=Z.parent,Ge=w.cameras;Me(w,ye);for(let Be=0;Be<Ge.length;Be++)Me(Ge[Be],ye);Ge.length===2?Q(w,P,W):w.projectionMatrix.copy(P.projectionMatrix),Ae(Z,w,ye)};function Ae(Z,de,Ee){Ee===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(Z){m=Z,y!==null&&(y.fixedFoveation=Z),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Z)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let z=null;function ae(Z,de){if(g=de.getViewerPose(p||d),E=de,g!==null){const Ee=g.views;b!==null&&(t.setRenderTargetFramebuffer(B,b.framebuffer),t.setRenderTarget(B));let ye=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Be=0;Be<Ee.length;Be++){const rt=Ee[Be];let zt=null;if(b!==null)zt=b.getViewport(rt);else{const Yt=v.getViewSubImage(y,rt);zt=Yt.viewport,Be===0&&(t.setRenderTargetTextures(B,Yt.colorTexture,y.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(B))}let ht=D[Be];ht===void 0&&(ht=new wi,ht.layers.enable(Be),ht.viewport=new on,D[Be]=ht),ht.matrix.fromArray(rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(zt.x,zt.y,zt.width,zt.height),Be===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(ht)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Be=v.getDepthInformation(Ee[0]);Be&&Be.isValid&&Be.texture&&R.init(t,Be,l.renderState)}}for(let Ee=0;Ee<O.length;Ee++){const ye=L[Ee],Ge=O[Ee];ye!==null&&Ge!==void 0&&Ge.update(ye,de,p||d)}z&&z(Z,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Se=new mv;Se.setAnimationLoop(ae),this.setAnimationLoop=function(Z){z=Z},this.dispose=function(){}}}const Tr=new va,V1=new ln;function k1(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,cv(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,O,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&b(M,_,L)):_.isMeshMatcapMaterial?(u(M,_),E(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),R(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,B,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Qn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Qn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=t.get(_),O=B.envMap,L=B.envMapRotation;O&&(M.envMap.value=O,Tr.copy(L),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Tr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,B,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function b(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const B=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function j1(s,t,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const L=O.program;r.uniformBlockBinding(B,L)}function p(B,O){let L=l[B.id];L===void 0&&(E(B),L=g(B),l[B.id]=L,B.addEventListener("dispose",M));const q=O.program;r.updateUBOMapping(B,q);const H=t.render.frame;u[B.id]!==H&&(y(B),u[B.id]=H)}function g(B){const O=v();B.__bindingPointIndex=O;const L=s.createBuffer(),q=B.__size,H=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,q,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,L),L}function v(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const O=l[B.id],L=B.uniforms,q=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let H=0,P=L.length;H<P;H++){const W=Array.isArray(L[H])?L[H]:[L[H]];for(let D=0,w=W.length;D<w;D++){const G=W[D];if(b(G,H,D,q)===!0){const le=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let ve=0;ve<ie.length;ve++){const U=ie[ve],K=R(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,le+me,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,me),me+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(B,O,L,q){const H=B.value,P=O+"_"+L;if(q[P]===void 0)return typeof H=="number"||typeof H=="boolean"?q[P]=H:q[P]=H.clone(),!0;{const W=q[P];if(typeof H=="number"||typeof H=="boolean"){if(W!==H)return q[P]=H,!0}else if(W.equals(H)===!1)return W.copy(H),!0}return!1}function E(B){const O=B.uniforms;let L=0;const q=16;for(let P=0,W=O.length;P<W;P++){const D=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,G=D.length;w<G;w++){const le=D[w],ie=Array.isArray(le.value)?le.value:[le.value];for(let me=0,ve=ie.length;me<ve;me++){const U=ie[me],K=R(U),Q=L%q,Me=Q%K.boundary,Ae=Q+Me;L+=Me,Ae!==0&&q-Ae<K.storage&&(L+=q-Ae),le.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=L,L+=K.storage}}}const H=L%q;return H>0&&(L+=q-H),B.__size=L,B.__cache={},this}function R(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function M(B){const O=B.target;O.removeEventListener("dispose",M);const L=d.indexOf(O.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const B in l)s.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class X1{constructor(t={}){const{canvas:i=US(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=Qa,this.toneMappingExposure=1;const L=this;let q=!1,H=0,P=0,W=null,D=-1,w=null;const G=new on,le=new on;let ie=null;const me=new Ut(0);let ve=0,U=i.width,K=i.height,Q=1,Me=null,Ae=null;const z=new on(0,0,U,K),ae=new on(0,0,U,K);let Se=!1;const Z=new dv;let de=!1,Ee=!1;this.transmissionResolutionScale=1;const ye=new ln,Ge=new ln,Be=new oe,rt=new on,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Yt(){return W===null?Q:1}let I=r;function Un(C,X){return i.getContext(C,X)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",xe,!1),i.addEventListener("webglcontextrestored",we,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),I===null){const X="webgl2";if(I=Un(X,C),I===null)throw Un(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let dt,gt,qe,Lt,We,N,A,te,he,be,ge,je,De,Fe,_t,Re,Ie,Ye,Xe,ze,$e,st,Pt,j;function Ce(){dt=new eT(I),dt.init(),st=new P1(I,dt),gt=new YE(I,dt,t,st),qe=new O1(I,dt),gt.reverseDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),Lt=new iT(I),We=new S1,N=new z1(I,dt,qe,We,gt,st,Lt),A=new KE(L),te=new $E(L),he=new uM(I),Pt=new WE(I,he),be=new tT(I,he,Lt,Pt),ge=new rT(I,be,he,Lt),Xe=new aT(I,gt,N),Re=new ZE(We),je=new y1(L,A,te,dt,gt,Pt,Re),De=new k1(L,We),Fe=new b1,_t=new w1(dt),Ye=new XE(L,A,te,qe,ge,b,m),Ie=new L1(L,ge,gt),j=new j1(I,Lt,gt,qe),ze=new qE(I,dt,Lt),$e=new nT(I,dt,Lt),Lt.programs=je.programs,L.capabilities=gt,L.extensions=dt,L.properties=We,L.renderLists=Fe,L.shadowMap=Ie,L.state=qe,L.info=Lt}Ce();const ue=new G1(L,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(U,K,!1))},this.getSize=function(C){return C.set(U,K)},this.setSize=function(C,X,ne=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,K=X,i.width=Math.floor(C*Q),i.height=Math.floor(X*Q),ne===!0&&(i.style.width=C+"px",i.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(U*Q,K*Q).floor()},this.setDrawingBufferSize=function(C,X,ne){U=C,K=X,Q=ne,i.width=Math.floor(C*ne),i.height=Math.floor(X*ne),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,X,ne,re){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,X,ne,re),qe.viewport(G.copy(z).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(ae)},this.setScissor=function(C,X,ne,re){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,X,ne,re),qe.scissor(le.copy(ae).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){qe.setScissorTest(Se=C)},this.setOpaqueSort=function(C){Me=C},this.setTransparentSort=function(C){Ae=C},this.getClearColor=function(C){return C.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(C=!0,X=!0,ne=!0){let re=0;if(C){let k=!1;if(W!==null){const Te=W.texture.format;k=Te===jh||Te===kh||Te===Vh}if(k){const Te=W.texture.type,Le=Te===_a||Te===Lr||Te===Wo||Te===Bs||Te===Hh||Te===Gh,Oe=Ye.getClearColor(),Pe=Ye.getClearAlpha(),tt=Oe.r,nt=Oe.g,Ze=Oe.b;Le?(E[0]=tt,E[1]=nt,E[2]=Ze,E[3]=Pe,I.clearBufferuiv(I.COLOR,0,E)):(R[0]=tt,R[1]=nt,R[2]=Ze,R[3]=Pe,I.clearBufferiv(I.COLOR,0,R))}else re|=I.COLOR_BUFFER_BIT}X&&(re|=I.DEPTH_BUFFER_BIT),ne&&(re|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xe,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),Ye.dispose(),Fe.dispose(),_t.dispose(),We.dispose(),A.dispose(),te.dispose(),ge.dispose(),Pt.dispose(),j.dispose(),je.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ks),ue.removeEventListener("sessionend",js),Oi.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const C=Lt.autoReset,X=Ie.enabled,ne=Ie.autoUpdate,re=Ie.needsUpdate,k=Ie.type;Ce(),Lt.autoReset=C,Ie.enabled=X,Ie.autoUpdate=ne,Ie.needsUpdate=re,Ie.type=k}function Ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){const X=C.target;X.removeEventListener("dispose",et),Zt(X)}function Zt(C){mn(C),We.remove(C)}function mn(C){const X=We.get(C).programs;X!==void 0&&(X.forEach(function(ne){je.releaseProgram(ne)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ne,re,k,Te){X===null&&(X=zt);const Le=k.isMesh&&k.matrixWorld.determinant()<0,Oe=Ws(C,X,ne,re,k);qe.setMaterial(re,Le);let Pe=ne.index,tt=1;if(re.wireframe===!0){if(Pe=be.getWireframeAttribute(ne),Pe===void 0)return;tt=2}const nt=ne.drawRange,Ze=ne.attributes.position;let yt=nt.start*tt,St=(nt.start+nt.count)*tt;Te!==null&&(yt=Math.max(yt,Te.start*tt),St=Math.min(St,(Te.start+Te.count)*tt)),Pe!==null?(yt=Math.max(yt,0),St=Math.min(St,Pe.count)):Ze!=null&&(yt=Math.max(yt,0),St=Math.min(St,Ze.count));const Xt=St-yt;if(Xt<0||Xt===1/0)return;Pt.setup(k,re,Oe,ne,Pe);let At,it=ze;if(Pe!==null&&(At=he.get(Pe),it=$e,it.setIndex(At)),k.isMesh)re.wireframe===!0?(qe.setLineWidth(re.wireframeLinewidth*Yt()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(k.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),qe.setLineWidth(Qe*Yt()),k.isLineSegments?it.setMode(I.LINES):k.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else k.isPoints?it.setMode(I.POINTS):k.isSprite&&it.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Qe=k._multiDrawStarts,gn=k._multiDrawCounts,Et=k._multiDrawCount,Gn=Pe?he.get(Pe).bytesPerElement:1,Mi=We.get(re).currentProgram.getUniforms();for(let Pn=0;Pn<Et;Pn++)Mi.setValue(I,"_gl_DrawID",Pn),it.render(Qe[Pn]/Gn,gn[Pn])}else if(k.isInstancedMesh)it.renderInstances(yt,Xt,k.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,gn=Math.min(ne.instanceCount,Qe);it.renderInstances(yt,Xt,gn)}else it.render(yt,Xt)};function Tt(C,X,ne){C.transparent===!0&&C.side===da&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Jt(C,X,ne),C.side=$a,C.needsUpdate=!0,Jt(C,X,ne),C.side=da):Jt(C,X,ne)}this.compile=function(C,X,ne=null){ne===null&&(ne=C),_=_t.get(ne),_.init(X),O.push(_),ne.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),C!==ne&&C.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const re=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Te=k.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Oe=Te[Le];Tt(Oe,ne,k),re.add(Oe)}else Tt(Te,ne,k),re.add(Te)}),O.pop(),_=null,re},this.compileAsync=function(C,X,ne=null){const re=this.compile(C,X,ne);return new Promise(k=>{function Te(){if(re.forEach(function(Le){We.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){k(C);return}setTimeout(Te,10)}dt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let bn=null;function yi(C){bn&&bn(C)}function ks(){Oi.stop()}function js(){Oi.start()}const Oi=new mv;Oi.setAnimationLoop(yi),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){bn=C,ue.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},ue.addEventListener("sessionstart",ks),ue.addEventListener("sessionend",js),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,X,W),_=_t.get(C,O.length),_.init(X),O.push(_),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Ge),Ee=this.localClippingEnabled,de=Re.init(this.clippingPlanes,Ee),M=Fe.get(C,B.length),M.init(),B.push(M),ue.enabled===!0&&ue.isPresenting===!0){const Te=L.xr.getDepthSensingMesh();Te!==null&&tr(Te,X,-1/0,L.sortObjects)}tr(C,X,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(Me,Ae),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&Ye.addToRenderList(M,C),this.info.render.frame++,de===!0&&Re.beginShadows();const ne=_.state.shadowsArray;Ie.render(ne,C,X),de===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=M.opaque,k=M.transmissive;if(_.setupLights(),X.isArrayCamera){const Te=X.cameras;if(k.length>0)for(let Le=0,Oe=Te.length;Le<Oe;Le++){const Pe=Te[Le];Xs(re,k,C,Pe)}ht&&Ye.render(C);for(let Le=0,Oe=Te.length;Le<Oe;Le++){const Pe=Te[Le];Or(M,C,Pe,Pe.viewport)}}else k.length>0&&Xs(re,k,C,X),ht&&Ye.render(C),Or(M,C,X);W!==null&&P===0&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(L,C,X),Pt.resetDefaultState(),D=-1,w=null,O.pop(),O.length>0?(_=O[O.length-1],de===!0&&Re.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function tr(C,X,ne,re){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){re&&rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const Le=ge.update(C),Oe=C.material;Oe.visible&&M.push(C,Le,Oe,ne,rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Le=ge.update(C),Oe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rt.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),rt.copy(Le.boundingSphere.center)),rt.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray(Oe)){const Pe=Le.groups;for(let tt=0,nt=Pe.length;tt<nt;tt++){const Ze=Pe[tt],yt=Oe[Ze.materialIndex];yt&&yt.visible&&M.push(C,Le,yt,ne,rt.z,Ze)}}else Oe.visible&&M.push(C,Le,Oe,ne,rt.z,null)}}const Te=C.children;for(let Le=0,Oe=Te.length;Le<Oe;Le++)tr(Te[Le],X,ne,re)}function Or(C,X,ne,re){const k=C.opaque,Te=C.transmissive,Le=C.transparent;_.setupLightsView(ne),de===!0&&Re.setGlobalState(L.clippingPlanes,ne),re&&qe.viewport(G.copy(re)),k.length>0&&nr(k,X,ne),Te.length>0&&nr(Te,X,ne),Le.length>0&&nr(Le,X,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Xs(C,X,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Nr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Yo:_a,minFilter:Ur,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[re.id],Le=re.viewport||G;Te.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const Oe=L.getRenderTarget();L.setRenderTarget(Te),L.getClearColor(me),ve=L.getClearAlpha(),ve<1&&L.setClearColor(16777215,.5),L.clear(),ht&&Ye.render(ne);const Pe=L.toneMapping;L.toneMapping=Qa;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),de===!0&&Re.setGlobalState(L.clippingPlanes,re),nr(C,ne,re),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ze=0,yt=X.length;Ze<yt;Ze++){const St=X[Ze],Xt=St.object,At=St.geometry,it=St.material,Qe=St.group;if(it.side===da&&Xt.layers.test(re.layers)){const gn=it.side;it.side=Qn,it.needsUpdate=!0,Si(Xt,ne,re,At,it,Qe),it.side=gn,it.needsUpdate=!0,nt=!0}}nt===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}L.setRenderTarget(Oe),L.setClearColor(me,ve),tt!==void 0&&(re.viewport=tt),L.toneMapping=Pe}function nr(C,X,ne){const re=X.isScene===!0?X.overrideMaterial:null;for(let k=0,Te=C.length;k<Te;k++){const Le=C[k],Oe=Le.object,Pe=Le.geometry,tt=re===null?Le.material:re,nt=Le.group;Oe.layers.test(ne.layers)&&Si(Oe,X,ne,Pe,tt,nt)}}function Si(C,X,ne,re,k,Te){C.onBeforeRender(L,X,ne,re,k,Te),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(L,X,ne,re,C,Te),k.transparent===!0&&k.side===da&&k.forceSinglePass===!1?(k.side=Qn,k.needsUpdate=!0,L.renderBufferDirect(ne,X,re,k,C,Te),k.side=$a,k.needsUpdate=!0,L.renderBufferDirect(ne,X,re,k,C,Te),k.side=da):L.renderBufferDirect(ne,X,re,k,C,Te),C.onAfterRender(L,X,ne,re,k,Te)}function Jt(C,X,ne){X.isScene!==!0&&(X=zt);const re=We.get(C),k=_.state.lights,Te=_.state.shadowsArray,Le=k.state.version,Oe=je.getParameters(C,k.state,Te,X,ne),Pe=je.getProgramCacheKey(Oe);let tt=re.programs;re.environment=C.isMeshStandardMaterial?X.environment:null,re.fog=X.fog,re.envMap=(C.isMeshStandardMaterial?te:A).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",et),tt=new Map,re.programs=tt);let nt=tt.get(Pe);if(nt!==void 0){if(re.currentProgram===nt&&re.lightsStateVersion===Le)return Vi(C,Oe),nt}else Oe.uniforms=je.getUniforms(C),C.onBeforeCompile(Oe,L),nt=je.acquireProgram(Oe,Pe),tt.set(Pe,nt),re.uniforms=Oe.uniforms;const Ze=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Re.uniform),Vi(C,Oe),re.needsLights=iu(C),re.lightsStateVersion=Le,re.needsLights&&(Ze.ambientLightColor.value=k.state.ambient,Ze.lightProbe.value=k.state.probe,Ze.directionalLights.value=k.state.directional,Ze.directionalLightShadows.value=k.state.directionalShadow,Ze.spotLights.value=k.state.spot,Ze.spotLightShadows.value=k.state.spotShadow,Ze.rectAreaLights.value=k.state.rectArea,Ze.ltc_1.value=k.state.rectAreaLTC1,Ze.ltc_2.value=k.state.rectAreaLTC2,Ze.pointLights.value=k.state.point,Ze.pointLightShadows.value=k.state.pointShadow,Ze.hemisphereLights.value=k.state.hemi,Ze.directionalShadowMap.value=k.state.directionalShadowMap,Ze.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ze.spotShadowMap.value=k.state.spotShadowMap,Ze.spotLightMatrix.value=k.state.spotLightMatrix,Ze.spotLightMap.value=k.state.spotLightMap,Ze.pointShadowMap.value=k.state.pointShadowMap,Ze.pointShadowMatrix.value=k.state.pointShadowMatrix),re.currentProgram=nt,re.uniformsList=null,nt}function En(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Vi(C,X){const ne=We.get(C);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Ws(C,X,ne,re,k){X.isScene!==!0&&(X=zt),N.resetTextureUnits();const Te=X.fog,Le=re.isMeshStandardMaterial?X.environment:null,Oe=W===null?L.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Is,Pe=(re.isMeshStandardMaterial?te:A).get(re.envMap||Le),tt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ze=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,St=!!ne.morphAttributes.color;let Xt=Qa;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=L.toneMapping);const At=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,it=At!==void 0?At.length:0,Qe=We.get(re),gn=_.state.lights;if(de===!0&&(Ee===!0||C!==w)){const $t=C===w&&re.id===D;Re.setState(re,C,$t)}let Et=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==gn.state.version||Qe.outputColorSpace!==Oe||k.isBatchedMesh&&Qe.batching===!1||!k.isBatchedMesh&&Qe.batching===!0||k.isBatchedMesh&&Qe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Qe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Qe.instancing===!1||!k.isInstancedMesh&&Qe.instancing===!0||k.isSkinnedMesh&&Qe.skinning===!1||!k.isSkinnedMesh&&Qe.skinning===!0||k.isInstancedMesh&&Qe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Qe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Qe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Qe.instancingMorph===!1&&k.morphTexture!==null||Qe.envMap!==Pe||re.fog===!0&&Qe.fog!==Te||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Re.numPlanes||Qe.numIntersection!==Re.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==nt||Qe.morphTargets!==Ze||Qe.morphNormals!==yt||Qe.morphColors!==St||Qe.toneMapping!==Xt||Qe.morphTargetsCount!==it)&&(Et=!0):(Et=!0,Qe.__version=re.version);let Gn=Qe.currentProgram;Et===!0&&(Gn=Jt(re,X,k));let Mi=!1,Pn=!1,yn=!1;const Bt=Gn.getUniforms(),Bn=Qe.uniforms;if(qe.useProgram(Gn.program)&&(Mi=!0,Pn=!0,yn=!0),re.id!==D&&(D=re.id,Pn=!0),Mi||w!==C){qe.buffers.depth.getReversed()?(ye.copy(C.projectionMatrix),NS(ye),OS(ye),Bt.setValue(I,"projectionMatrix",ye)):Bt.setValue(I,"projectionMatrix",C.projectionMatrix),Bt.setValue(I,"viewMatrix",C.matrixWorldInverse);const Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,Be.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Pn=!0,yn=!0)}if(k.isSkinnedMesh){Bt.setOptional(I,k,"bindMatrix"),Bt.setOptional(I,k,"bindMatrixInverse");const $t=k.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Bt.setValue(I,"boneTexture",$t.boneTexture,N))}k.isBatchedMesh&&(Bt.setOptional(I,k,"batchingTexture"),Bt.setValue(I,"batchingTexture",k._matricesTexture,N),Bt.setOptional(I,k,"batchingIdTexture"),Bt.setValue(I,"batchingIdTexture",k._indirectTexture,N),Bt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Bt.setValue(I,"batchingColorTexture",k._colorsTexture,N));const Ln=ne.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Xe.update(k,ne,Gn),(Pn||Qe.receiveShadow!==k.receiveShadow)&&(Qe.receiveShadow=k.receiveShadow,Bt.setValue(I,"receiveShadow",k.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Bn.envMap.value=Pe,Bn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&X.environment!==null&&(Bn.envMapIntensity.value=X.environmentIntensity),Pn&&(Bt.setValue(I,"toneMappingExposure",L.toneMappingExposure),Qe.needsLights&&nu(Bn,yn),Te&&re.fog===!0&&De.refreshFogUniforms(Bn,Te),De.refreshMaterialUniforms(Bn,re,Q,K,_.state.transmissionRenderTarget[C.id]),jc.upload(I,En(Qe),Bn,N)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(jc.upload(I,En(Qe),Bn,N),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Bt.setValue(I,"center",k.center),Bt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Bt.setValue(I,"normalMatrix",k.normalMatrix),Bt.setValue(I,"modelMatrix",k.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const $t=re.uniformsGroups;for(let Tn=0,zr=$t.length;Tn<zr;Tn++){const Vn=$t[Tn];j.update(Vn,Gn),j.bind(Vn,Gn)}}return Gn}function nu(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function iu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,X,ne){We.get(C.texture).__webglTexture=X,We.get(C.depthTexture).__webglTexture=ne;const re=We.get(C);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const ne=We.get(C);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const el=I.createFramebuffer();this.setRenderTarget=function(C,X=0,ne=0){W=C,H=X,P=ne;let re=!0,k=null,Te=!1,Le=!1;if(C){const Pe=We.get(C);if(Pe.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(I.FRAMEBUFFER,null),re=!1;else if(Pe.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Pe.__hasExternalTextures)N.rebindTextures(C,We.get(C.texture).__webglTexture,We.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Pe.__boundDepthTexture!==Ze){if(Ze!==null&&We.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const nt=We.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?k=nt[X][ne]:k=nt[X],Te=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?k=We.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?k=nt[ne]:k=nt,G.copy(C.viewport),le.copy(C.scissor),ie=C.scissorTest}else G.copy(z).multiplyScalar(Q).floor(),le.copy(ae).multiplyScalar(Q).floor(),ie=Se;if(ne!==0&&(k=el),qe.bindFramebuffer(I.FRAMEBUFFER,k)&&re&&qe.drawBuffers(C,k),qe.viewport(G),qe.scissor(le),qe.setScissorTest(ie),Te){const Pe=We.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ne)}else if(Le){const Pe=We.get(C.texture),tt=X;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,ne,tt)}else if(C!==null&&ne!==0){const Pe=We.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,ne)}D=-1},this.readRenderTargetPixels=function(C,X,ne,re,k,Te,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){qe.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const Pe=C.texture,tt=Pe.format,nt=Pe.type;if(!gt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-re&&ne>=0&&ne<=C.height-k&&I.readPixels(X,ne,re,k,st.convert(tt),st.convert(nt),Te)}finally{const Pe=W!==null?We.get(W).__webglFramebuffer:null;qe.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(C,X,ne,re,k,Te,Le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){const Pe=C.texture,tt=Pe.format,nt=Pe.type;if(!gt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-re&&ne>=0&&ne<=C.height-k){qe.bindFramebuffer(I.FRAMEBUFFER,Oe);const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(X,ne,re,k,st.convert(tt),st.convert(nt),0);const yt=W!==null?We.get(W).__webglFramebuffer:null;qe.bindFramebuffer(I.FRAMEBUFFER,yt);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await LS(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(Ze),I.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ne=0){C.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const re=Math.pow(2,-ne),k=Math.floor(C.image.width*re),Te=Math.floor(C.image.height*re),Le=X!==null?X.x:0,Oe=X!==null?X.y:0;N.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,ne,0,0,Le,Oe,k,Te),qe.unbindTexture()};const ir=I.createFramebuffer(),qs=I.createFramebuffer();this.copyTextureToTexture=function(C,X,ne=null,re=null,k=0,Te=null){C.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,C=arguments[1],X=arguments[2],Te=arguments[3]||0,ne=null),Te===null&&(k!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=k,k=0):Te=0);let Le,Oe,Pe,tt,nt,Ze,yt,St,Xt;const At=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(ne!==null)Le=ne.max.x-ne.min.x,Oe=ne.max.y-ne.min.y,Pe=ne.isBox3?ne.max.z-ne.min.z:1,tt=ne.min.x,nt=ne.min.y,Ze=ne.isBox3?ne.min.z:0;else{const Ln=Math.pow(2,-k);Le=Math.floor(At.width*Ln),Oe=Math.floor(At.height*Ln),C.isDataArrayTexture?Pe=At.depth:C.isData3DTexture?Pe=Math.floor(At.depth*Ln):Pe=1,tt=0,nt=0,Ze=0}re!==null?(yt=re.x,St=re.y,Xt=re.z):(yt=0,St=0,Xt=0);const it=st.convert(X.format),Qe=st.convert(X.type);let gn;X.isData3DTexture?(N.setTexture3D(X,0),gn=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(N.setTexture2DArray(X,0),gn=I.TEXTURE_2D_ARRAY):(N.setTexture2D(X,0),gn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Et=I.getParameter(I.UNPACK_ROW_LENGTH),Gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mi=I.getParameter(I.UNPACK_SKIP_PIXELS),Pn=I.getParameter(I.UNPACK_SKIP_ROWS),yn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const Bt=C.isDataArrayTexture||C.isData3DTexture,Bn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Ln=We.get(C),$t=We.get(X),Tn=We.get(Ln.__renderTarget),zr=We.get($t.__renderTarget);qe.bindFramebuffer(I.READ_FRAMEBUFFER,Tn.__webglFramebuffer),qe.bindFramebuffer(I.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Vn=0;Vn<Pe;Vn++)Bt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.get(C).__webglTexture,k,Ze+Vn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Te,Xt+Vn)),I.blitFramebuffer(tt,nt,Le,Oe,yt,St,Le,Oe,I.DEPTH_BUFFER_BIT,I.NEAREST);qe.bindFramebuffer(I.READ_FRAMEBUFFER,null),qe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||C.isRenderTargetTexture||We.has(C)){const Ln=We.get(C),$t=We.get(X);qe.bindFramebuffer(I.READ_FRAMEBUFFER,ir),qe.bindFramebuffer(I.DRAW_FRAMEBUFFER,qs);for(let Tn=0;Tn<Pe;Tn++)Bt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,k,Ze+Tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,k),Bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$t.__webglTexture,Te,Xt+Tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$t.__webglTexture,Te),k!==0?I.blitFramebuffer(tt,nt,Le,Oe,yt,St,Le,Oe,I.COLOR_BUFFER_BIT,I.NEAREST):Bn?I.copyTexSubImage3D(gn,Te,yt,St,Xt+Tn,tt,nt,Le,Oe):I.copyTexSubImage2D(gn,Te,yt,St,tt,nt,Le,Oe);qe.bindFramebuffer(I.READ_FRAMEBUFFER,null),qe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(gn,Te,yt,St,Xt,Le,Oe,Pe,it,Qe,At.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(gn,Te,yt,St,Xt,Le,Oe,Pe,it,At.data):I.texSubImage3D(gn,Te,yt,St,Xt,Le,Oe,Pe,it,Qe,At):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,yt,St,Le,Oe,it,Qe,At.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,yt,St,At.width,At.height,it,At.data):I.texSubImage2D(I.TEXTURE_2D,Te,yt,St,Le,Oe,it,Qe,At);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,yn),Te===0&&X.generateMipmaps&&I.generateMipmap(gn),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ne=null,re=null,k=0){return C.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,C=arguments[2],X=arguments[3],k=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,ne,re,k)},this.initRenderTarget=function(C){We.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){H=0,P=0,W=null,qe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const zc=.1,Pc=4,jo=6;function W1({history:s}){const t=Ve.useRef(null),i=Ve.useRef(null),r=Ve.useRef(null),l=Ve.useRef(null),u=Ve.useRef(null),d=Ve.useRef(null);Ve.useEffect(()=>{const E=t.current;if(!E)return;const R=new iM;R.background=new Ut(16447732),r.current=R;const M=E.clientWidth||600,_=E.clientHeight||300,B=new X1({antialias:!0});B.setSize(M,_),B.setPixelRatio(window.devicePixelRatio),E.appendChild(B.domElement),i.current=B;const O=new pv(-1,1,1,-1,.1,10);O.position.z=1,l.current=O;const L=new kc({color:14736856});for(let le=0;le<=Pc;le++){const ie=le/Pc*2-1,me=[new oe(-1,ie,0),new oe(1,ie,0)];R.add(new wc(new xi().setFromPoints(me),L))}for(let le=0;le<=jo;le++){const ie=le/jo*2-1,me=[new oe(ie,-1,0),new oe(ie,1,0)];R.add(new wc(new xi().setFromPoints(me),L))}const q=new xi,H=new kc({color:11064488,linewidth:4}),P=new wc(q,H);R.add(P),d.current=P;const W=new xi,D=new kc({color:1927965,linewidth:2}),w=new wc(W,D);R.add(w),u.current=w;const G=new ResizeObserver(()=>{const le=E.clientWidth,ie=E.clientHeight;le>0&&ie>0&&(B.setSize(le,ie),B.render(R,O))});return G.observe(E),B.render(R,O),()=>{G.disconnect(),B.dispose(),E.contains(B.domElement)&&E.removeChild(B.domElement)}},[]),Ve.useEffect(()=>{const E=u.current,R=d.current,M=i.current,_=r.current,B=l.current;if(!E||!R||!M||!_||!B)return;const O=s.map(parseFloat).filter(isFinite);if(O.length<2)return;const L=Math.min(...O),H=Math.max(...O)-L||1,P=new Float32Array(O.length*3);for(let D=0;D<O.length;D++)P[D*3]=D/(O.length-1)*2-1,P[D*3+1]=(O[D]-L)/H*(2-zc*2)-(1-zc),P[D*3+2]=0;const W=new Ni(P,3);E.geometry.setAttribute("position",W),E.geometry.computeBoundingSphere(),R.geometry.setAttribute("position",W.clone()),R.geometry.computeBoundingSphere(),M.render(_,B)},[s]);const h=s.map(parseFloat).filter(isFinite),m=h.length>=2,p=m?Math.min(...h):0,v=(m?Math.max(...h):1)-p||1,y=m?Array.from({length:Pc+1},(E,R)=>{const M=R/Pc*2-1,_=(1-M)/2*100,B=(M+(1-zc))/(2-2*zc)*v+p,O=_<=5?0:_>=95?-100:-50;return{topPct:_,price:B,ty:O}}):[],b=m?Array.from({length:jo+1},(E,R)=>{const M=R/jo,_=Math.round(M*(h.length-1)),B=R===0?0:R===jo?-100:-50;return{leftPct:M*100,idx:_,tx:B}}):[];return S.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[S.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),y.map(({topPct:E,price:R,ty:M},_)=>S.jsxs("span",{style:{position:"absolute",left:6,top:`${E}%`,transform:`translateY(${M}%)`,fontSize:11,fontFamily:"monospace",color:"#5a5a54",background:"rgba(250,248,244,0.82)",borderRadius:2,padding:"0 3px",lineHeight:1.4,pointerEvents:"none",whiteSpace:"nowrap"},children:["$",R.toFixed(2)]},_)),b.map(({leftPct:E,idx:R,tx:M},_)=>S.jsx("span",{style:{position:"absolute",bottom:4,left:`${E}%`,transform:`translateX(${M}%)`,fontSize:10,fontFamily:"monospace",color:"#8a8a80",pointerEvents:"none",lineHeight:1,whiteSpace:"nowrap"},children:R===0?"start":R===h.length-1?"now":`t${R}`},_)),S.jsx("span",{style:{position:"absolute",left:6,top:"50%",transform:"translateY(-50%) rotate(-90deg) translateX(50%)",transformOrigin:"left center",fontSize:10,color:"#aaa8a0",pointerEvents:"none",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Price"})]})}const qo=38;function q1(){const{headlines:s,cycleEvents:t}=Hn(),i=t.filter(h=>h.kind==="rumor").map(h=>`🚨 RUMOUR: "${h.text}"`),r=s.map(h=>`📰 ${h.text}`),l=[...i,...r];if(l.length===0)return null;const u=[...l,...l].join("     ·     "),d=Math.max(30,l.length*12);return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:`
        @keyframes ticker-crawl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}),S.jsxs("div",{style:Bc.bar,children:[S.jsx("span",{style:Bc.badge,children:"LIVE"}),S.jsx("div",{style:Bc.track,children:S.jsx("span",{style:{...Bc.text,animation:`ticker-crawl ${d}s linear infinite`},children:u})})]})]})}const Bc={bar:{position:"fixed",top:0,left:0,right:0,height:qo,gap:"0.5rem",zIndex:1e3,display:"flex",alignItems:"center",background:"#fef9e8",borderBottom:"1px solid #c8a830",overflow:"hidden"},badge:{flexShrink:0,background:"#c8a830",color:"#ffffff",fontSize:"0.7rem",fontWeight:"700",letterSpacing:"0.12em",padding:"0.2rem 0.6rem",marginLeft:"0.6rem",borderRadius:3},track:{flex:1,overflow:"hidden",marginLeft:"0.6rem"},text:{display:"inline-block",whiteSpace:"nowrap",fontSize:"0.85rem",color:"#7a5010",letterSpacing:"0.02em"}};function Y1(s){switch(s.kind){case"order_filled":return`Order filled: ${s.side} ${s.quantity} @ $${parseFloat(s.price).toFixed(2)}`;case"farm_burned":return`Farm #${s.farm_id} was set on fire`;case"farm_healed":return`Farm #${s.farm_id} recovered`;case"mill_burned":return`Mill #${s.mill_id} was burned`;case"worker_killed":return`A worker on farm #${s.farm_id} was killed`;case"npc_killed":return`${s.npc_name} was eliminated`;case"npc_farm_auctioned":return`Farm #${s.farm_id} auctioned for $${parseFloat(s.price).toFixed(0)}`;case"rumor":return`Rumor: "${s.text}"`;case"drought":return`Drought — ${s.cycles} cycles of poor weather`;case"famine":return"Famine — supply collapse";case"bumper_harvest":return"Bumper harvest — exceptional yields";case"market_panic":return"Market panic — prices crashed";case"nuclear_fallout":return"NUCLEAR FALLOUT";case"fields_planted":return`Farm #${s.farm_id} planted ${s.count} fields`;case"corn_harvested":return`Farm #${s.farm_id} harvested ${s.bushels} bushels`;case"corn_sold":return`Corn sold — ${s.bushels} bu for $${parseFloat(s.revenue).toFixed(0)}`;case"option_expired":return`Option expired — PnL $${parseFloat(s.pnl).toFixed(0)}`;case"player_joined":return`${s.name} joined`;case"cycle_start":return`Cycle ${s.cycle} started`;case"game_over":return`Game over: ${s.reason}`;case"headline":return`"${s.text}"`;default:return""}}function Z1(){const s=Hn(),t=Bh(),i=parseFloat(s.price).toFixed(2),r=s.phase==="summary",l=s.phase==="lobby"?"Waiting for players…":`${s.phase} — cycle ${s.cycle}`,u=s.gameCode?`${window.location.origin}/${s.gameCode}`:null;function d(v){t({type:"admin",command:{cmd:"kick_player",player_id:v}})}function h(){t({type:"admin",command:{cmd:"start_game"}})}function m(){t({type:"admin",command:{cmd:"end_game"}})}function p(){t({type:"admin",command:{cmd:"continue_game"}})}function g(){t({type:"admin",command:{cmd:s.paused?"resume_game":"pause_game"}})}return S.jsxs("div",{style:ft.root,children:[S.jsxs("div",{style:ft.header,children:[S.jsx("span",{style:ft.badge,children:"HOST VIEW"}),S.jsxs("span",{style:ft.phase,children:[s.paused?"⏸ PAUSED":l,u&&S.jsxs("span",{style:ft.urlInline,children:[" · ",u]})]}),s.phase==="lobby"?S.jsx("button",{style:ft.startBtn,onClick:h,children:"Start Game"}):r?S.jsxs(S.Fragment,{children:[S.jsx("button",{style:ft.continueBtn,onClick:p,children:"Continue →"}),S.jsx("button",{style:ft.endBtn,onClick:m,children:"End Game"})]}):S.jsxs(S.Fragment,{children:[S.jsx("button",{style:ft.pauseBtn,onClick:g,children:s.paused?"Resume":"Pause"}),S.jsx("button",{style:ft.endBtn,onClick:m,children:"End Game"})]})]}),S.jsxs("div",{style:ft.priceCard,children:[S.jsxs("div",{style:ft.priceLine,children:[S.jsxs("div",{children:[S.jsx("p",{style:ft.priceLabel,children:"CORNCO"}),S.jsxs("p",{style:ft.priceValue,children:["$",i]}),s.phase==="decision"&&S.jsxs("p",{style:ft.countdown,children:[s.secondsRemaining,"s remaining"]})]}),S.jsx("div",{style:ft.marketMini,children:(()=>{const v=s.priceHistory.map(parseFloat).filter(E=>!isNaN(E)),y=v.length?Math.max(...v).toFixed(2):"—",b=v.length?Math.min(...v).toFixed(2):"—";return S.jsxs(S.Fragment,{children:[S.jsx(Rs,{label:"High",value:`$${y}`,color:"#1d6b1d"}),S.jsx(Rs,{label:"Low",value:`$${b}`,color:"#7a1a1a"}),S.jsx(Rs,{label:"Bid",value:String(s.bidDepth)}),S.jsx(Rs,{label:"Ask",value:String(s.askDepth)}),S.jsx(Rs,{label:"Vol",value:String(s.cycleVolume)}),S.jsx(Rs,{label:"Cycle",value:String(s.cycle)})]})})()})]}),S.jsx("div",{style:ft.chartBox,children:S.jsx(W1,{history:s.priceHistory})})]}),S.jsxs("div",{style:ft.card,children:[S.jsxs("h2",{style:ft.cardTitle,children:["Players (",s.knownPlayers.length,")"]}),s.knownPlayers.length===0?S.jsx("p",{style:ft.empty,children:"No players yet — share the join URL."}):S.jsxs("table",{style:ft.table,children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{style:ft.th,children:"#"}),S.jsx("th",{style:ft.th,children:"Name"}),S.jsx("th",{style:ft.th,children:"Role"}),S.jsx("th",{style:ft.th})]})}),S.jsx("tbody",{children:s.knownPlayers.map((v,y)=>S.jsxs("tr",{children:[S.jsx("td",{style:ft.td,children:y+1}),S.jsx("td",{style:ft.td,children:v.name}),S.jsx("td",{style:{...ft.td,color:v.role==="farmer"?"#1d6b1d":"#0d5858"},children:v.role}),S.jsx("td",{style:ft.td,children:S.jsx("button",{style:ft.kickBtn,onClick:()=>d(v.id),children:"Kick"})})]},v.id))})]})]}),r&&s.cycleEvents.length>0&&S.jsxs("div",{style:ft.card,children:[S.jsxs("h2",{style:ft.cardTitle,children:["Cycle ",s.cycle," Events"]}),s.cycleEvents.map((v,y)=>S.jsx("p",{style:ft.eventRow,children:Y1(v)},y))]}),s.headlines.length>0&&S.jsxs("div",{style:ft.card,children:[S.jsx("h2",{style:ft.cardTitle,children:"Latest Headline"}),S.jsx("p",{style:ft.headline,children:s.headlines[s.headlines.length-1].text})]}),s.adminSummary&&S.jsxs("div",{style:ft.card,children:[S.jsx("h2",{style:ft.cardTitle,children:"Analyst Summary"}),S.jsx("p",{style:ft.summary,children:s.adminSummary})]})]})}function Rs({label:s,value:t,color:i}){return S.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:64},children:[S.jsx("span",{style:{fontSize:"0.75rem",color:"#8a8a80",letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},children:s}),S.jsx("span",{style:{fontSize:"1.1rem",fontWeight:"700",color:i??"#3a3a36",marginTop:2},children:t})]})}const ft={root:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:"1.25rem",padding:"1rem",maxWidth:1100,margin:"0 auto",width:"100%",minHeight:"100vh",background:"#f5f3ef",paddingTop:`calc(1rem + ${qo}px)`},header:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"1rem"},badge:{background:"#e8eef5",color:"#1a3a6a",fontSize:"0.85rem",fontWeight:"700",letterSpacing:"0.12em",padding:"0.4rem 1rem",borderRadius:4,flexShrink:0,textTransform:"uppercase"},phase:{color:"#5a5a54",fontSize:"1.15rem",fontWeight:500,flex:1,minWidth:0},startBtn:{background:"#1d6b1d",border:"none",color:"#ffffff",fontSize:"1rem",fontWeight:"700",padding:"0.6rem 1.8rem",borderRadius:6,cursor:"pointer",flexShrink:0,letterSpacing:"0.02em"},pauseBtn:{background:"transparent",border:"2px solid #c8b060",color:"#7a5010",fontSize:"1rem",fontWeight:600,padding:"0.5rem 1.2rem",borderRadius:6,cursor:"pointer",flexShrink:0},endBtn:{background:"transparent",border:"2px solid #c89090",color:"#7a1a1a",fontSize:"1rem",fontWeight:600,padding:"0.5rem 1.2rem",borderRadius:6,cursor:"pointer",flexShrink:0},urlInline:{fontFamily:"monospace",color:"#1d6b1d",fontWeight:600},priceCard:{background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:10,padding:"1.1rem 1.25rem"},priceLine:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"1.5rem",marginBottom:"1.5rem"},priceLabel:{margin:0,color:"#8a8a80",fontSize:"1rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase"},priceValue:{margin:"0.2rem 0 0",fontSize:"6rem",fontWeight:"800",color:"#1d6b1d",lineHeight:1},countdown:{margin:"0.6rem 0 0",color:"#5a5a54",fontSize:"1.2rem",fontWeight:600},chartBox:{width:"100%",height:340,borderRadius:6,overflow:"hidden"},card:{background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:10,padding:"1rem 1.25rem"},cardTitle:{margin:"0 0 1rem",fontSize:"0.85rem",color:"#8a8a80",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"},empty:{color:"#9a9a90",fontSize:"1.1rem",margin:0},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",color:"#8a8a80",fontSize:"0.85rem",fontWeight:700,padding:"0 1rem 0.75rem",letterSpacing:"0.07em",textTransform:"uppercase"},td:{color:"#2a2a26",fontSize:"1.1rem",padding:"0.65rem 1rem",borderTop:"1px solid #e8e4df"},kickBtn:{background:"transparent",border:"1px solid #c89090",color:"#7a1a1a",fontSize:"0.9rem",fontWeight:600,padding:"0.35rem 0.9rem",borderRadius:4,cursor:"pointer"},headline:{margin:0,color:"#2a2a26",fontStyle:"italic",fontSize:"1.2rem",lineHeight:1.7},summary:{margin:0,color:"#3a3a36",fontSize:"1.05rem",lineHeight:1.8,whiteSpace:"pre-wrap"},marketMini:{display:"flex",flexWrap:"wrap",gap:"1rem 2rem",alignItems:"flex-start"},eventRow:{margin:"0 0 0.5rem",fontSize:"1rem",color:"#3a3a36",borderLeft:"3px solid #ddd9d2",paddingLeft:"0.75rem",lineHeight:1.5},continueBtn:{background:"#1d6b1d",border:"none",color:"#ffffff",fontSize:"1rem",fontWeight:"700",padding:"0.6rem 1.8rem",borderRadius:6,cursor:"pointer",flexShrink:0,letterSpacing:"0.02em"}};function K1(s,t){switch(t.type){case"set_value":return{...s,value:t.value.replace(/\D/g,"").slice(0,4),error:null};case"set_error":return{...s,error:t.msg};case"show_manual":return{...s,showManual:!0}}}function Q1(){const s=Qc(),{gameCode:t,phase:i,cycle:r,knownPlayers:l}=Hn(),[u,d]=Ve.useReducer(K1,{value:"",error:null,showManual:!1}),h=t!==null,m=i==="decision"||i==="resolving";function p(){if(u.value.length!==4){d({type:"set_error",msg:"Enter the 4-digit code from your host."});return}s(`/${u.value}`)}return S.jsxs("div",{style:Dn.root,children:[S.jsx("h1",{style:Dn.title,children:"🌽 Aura Farmers"}),h&&S.jsxs("div",{style:Dn.gameCard,children:[S.jsxs("div",{style:Dn.gameCardTop,children:[S.jsx("span",{style:{...Dn.dot,background:m?"#7ec87e":"#e0b84b"}}),S.jsx("span",{style:Dn.gameStatus,children:m?`Game in progress — Cycle ${r}`:"Game lobby open"})]}),l.length>0&&S.jsxs("p",{style:Dn.playerCount,children:[l.length," player",l.length!==1?"s":""," in game"]}),S.jsx("button",{style:Dn.joinBtn,onClick:()=>s(`/${t}`),children:"Join Game →"})]}),!h||u.showManual?S.jsxs("div",{style:Dn.form,children:[h&&S.jsx("p",{style:Dn.orDivider,children:"— or enter a different code —"}),!h&&S.jsx("p",{style:Dn.sub,children:"Enter your room code to join a game."}),S.jsx("input",{style:Dn.codeInput,value:u.value,inputMode:"numeric",placeholder:"0000",maxLength:4,onChange:g=>d({type:"set_value",value:g.target.value}),onKeyDown:g=>g.key==="Enter"&&p(),autoFocus:!h}),u.error&&S.jsx("p",{style:Dn.error,children:u.error}),S.jsx("button",{style:{...Dn.manualBtn,opacity:u.value.length===4?1:.4},onClick:p,children:"Join →"})]}):S.jsx("p",{style:Dn.manualLink,onClick:()=>d({type:"show_manual"}),children:"Have a different code?"}),S.jsxs("p",{style:Dn.adminLink,children:["Hosting?"," ",S.jsx("span",{style:Dn.link,onClick:()=>s("/create"),children:"Create a game"})]})]})}const Dn={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",gap:"1rem",padding:"1.5rem 1rem"},title:{fontSize:"2.2rem",fontWeight:"800",letterSpacing:"-0.02em",marginBottom:"0.25rem"},gameCard:{background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:12,padding:"1.1rem 1.25rem",width:"100%",maxWidth:320,display:"flex",flexDirection:"column",gap:"0.6rem",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"},gameCardTop:{display:"flex",alignItems:"center",gap:"0.5rem"},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gameStatus:{fontSize:"0.9rem",color:"#18181a",fontWeight:"600"},playerCount:{fontSize:"0.75rem",color:"#8a8a80",margin:0},joinBtn:{background:"#1d6b1d",color:"#fff",border:"none",padding:"0.7rem",borderRadius:8,fontFamily:"inherit",fontSize:"0.95rem",fontWeight:"600",cursor:"pointer",marginTop:"0.25rem"},sub:{color:"#8a8a80",margin:0,fontSize:"0.875rem"},orDivider:{color:"#9a9a90",fontSize:"0.75rem",margin:"0.25rem 0",textAlign:"center"},form:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.6rem",width:"100%",maxWidth:260},codeInput:{background:"#ffffff",border:"1.5px solid #d1cbc3",color:"#18181a",padding:"0.75rem",borderRadius:8,fontFamily:"inherit",fontSize:"2rem",fontWeight:"700",letterSpacing:"0.4em",textAlign:"center",width:"100%"},error:{color:"#b94040",fontSize:"0.8rem",margin:0,textAlign:"center"},manualBtn:{background:"#1d6b1d",color:"#fff",border:"none",padding:"0.7rem 2rem",borderRadius:8,fontFamily:"inherit",fontSize:"0.95rem",fontWeight:"600",cursor:"pointer",width:"100%"},manualLink:{color:"#8a8a80",fontSize:"0.8rem",cursor:"pointer",textDecoration:"underline"},adminLink:{color:"#8a8a80",fontSize:"0.8rem",marginTop:"0.5rem"},link:{color:"#1d6b1d",cursor:"pointer",textDecoration:"underline",fontWeight:"500"}};function J1(s,t){switch(t.type){case"set_name":return{...s,name:t.value};case"set_role":return{...s,role:t.value}}}function $1({code:s}){const{connected:t,error:i}=Hn(),r=Kc(),l=Bh(),u=Qc(),[d,h]=Ve.useReducer(J1,{name:"",role:"trader"});function m(){const p=d.name.trim();if(!p||!t)return;const g=Math.random().toString(36).slice(2,10);r({type:"set_join_nonce",nonce:g}),l({type:"join",name:p,role:d.role,client_nonce:g})}return S.jsxs("div",{style:Kn.root,children:[S.jsxs("div",{style:Kn.codeBadge,children:["Room ",S.jsx("span",{style:Kn.codeValue,children:s})]}),S.jsx("h1",{style:Kn.title,children:"🌽 Aura Farmers"}),!t&&S.jsx("p",{style:Kn.notice,children:"Connecting to server…"}),i&&S.jsx("p",{style:{...Kn.notice,color:"#ff6b6b"},children:i}),S.jsxs("div",{style:Kn.form,children:[S.jsxs("label",{style:Kn.label,children:["Name",S.jsx("input",{style:Kn.input,value:d.name,maxLength:24,placeholder:"e.g. Corn Baron",disabled:!t,onChange:p=>h({type:"set_name",value:p.target.value}),onKeyDown:p=>p.key==="Enter"&&m(),autoFocus:!0})]}),S.jsxs("label",{style:Kn.label,children:["Role",S.jsxs("select",{style:Kn.input,value:d.role,disabled:!t,onChange:p=>h({type:"set_role",value:p.target.value}),children:[S.jsx("option",{value:"trader",children:"📈 Trader — $15k, pure market play"}),S.jsx("option",{value:"farmer",children:"🚜 Farmer — $10k, starts with a farm"})]})]}),S.jsx("button",{style:{...Kn.btn,opacity:t&&d.name.trim()?1:.4},disabled:!t||!d.name.trim(),onClick:m,children:"Join Game"}),S.jsx("p",{style:Kn.backLink,children:S.jsx("span",{style:Kn.link,onClick:()=>u("/join"),children:"← Wrong code?"})})]})]})}const Kn={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",gap:"1rem",padding:"1.5rem 1rem",background:"#f5f3ef"},codeBadge:{fontSize:"0.75rem",color:"#8a8a80",background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:20,padding:"0.3rem 0.9rem",letterSpacing:"0.05em",fontWeight:"500"},codeValue:{color:"#1d6b1d",fontWeight:"700",letterSpacing:"0.2em"},title:{fontSize:"2.2rem",fontWeight:"800",letterSpacing:"-0.02em"},notice:{color:"#8a8a80",fontSize:"0.85rem"},form:{display:"flex",flexDirection:"column",gap:"0.75rem",width:"100%",maxWidth:360},label:{display:"flex",flexDirection:"column",gap:"0.3rem",fontSize:"0.8rem",color:"#6b6b63",fontWeight:"500",letterSpacing:"0.03em"},input:{background:"#ffffff",border:"1.5px solid #d1cbc3",color:"#18181a",padding:"0.6rem 0.85rem",borderRadius:8,fontFamily:"inherit",fontSize:"1rem",width:"100%"},btn:{background:"#1d6b1d",color:"#fff",border:"none",padding:"0.75rem 1.5rem",borderRadius:8,fontFamily:"inherit",fontSize:"0.95rem",fontWeight:"600",cursor:"pointer",marginTop:"0.25rem"},backLink:{textAlign:"center",fontSize:"0.8rem"},link:{color:"#8a8a80",cursor:"pointer",textDecoration:"underline"}};function eA(){var q;const s=Hn(),t=Bh(),i=Kc(),r=s.myRole==="farmer",[l,u]=Ve.useState(r?"farm":"market"),[d,h]=Ve.useState(s.secondsRemaining),[m,p]=Ve.useState(null),[g,v]=Ve.useState(!1),[y,b]=Ve.useState(!1);Ve.useEffect(()=>{h(s.secondsRemaining)},[s.phase,s.cycle,s.secondsRemaining]),Ve.useEffect(()=>{if(s.phase!=="decision"||s.paused)return;const H=setInterval(()=>h(P=>Math.max(0,P-1)),1e3);return()=>clearInterval(H)},[s.phase,s.cycle,s.paused]),Ve.useEffect(()=>{s.phase==="decision"&&(p(null),v(!1))},[s.phase,s.cycle]);function E(H,P){g||p({action:H,label:P})}function R(){g||(t(m?{type:"action",action:m.action}:{type:"action",action:{kind:"no_op"}}),v(!0))}function M(){g||(p(null),v(!0),t({type:"action",action:{kind:"no_op"}}))}const _=s.phase==="decision",B=_&&!g,O=parseFloat(s.price),L=[...r?[{id:"farm",label:"Farm"}]:[],{id:"market",label:"Market"},{id:"options",label:"Options"},{id:"chaos",label:"Chaos"},{id:"god",label:"God"}];return S.jsxs("div",{style:se.root,children:[S.jsxs("div",{style:se.topBar,children:[S.jsxs("div",{style:{minWidth:0,overflow:"hidden"},children:[S.jsx("span",{style:se.roleTag,children:(q=s.myRole)==null?void 0:q.toUpperCase()}),S.jsx("span",{style:{...se.playerName,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"30vw",display:"inline-block",verticalAlign:"middle"},children:s.myName})]}),S.jsxs("div",{style:se.priceBlock,children:[S.jsx("span",{style:se.priceLabel,children:"CornCo"}),S.jsxs("span",{style:se.priceValue,children:["$",O.toFixed(2)]})]}),S.jsxs("div",{style:{textAlign:"right",minWidth:80,flexShrink:0},children:[s.paused?S.jsx("span",{style:{...se.phasePill,background:"#eeeeea",color:"#7a7a70"},children:"⏸ Paused"}):_?S.jsxs("span",{style:{...se.phasePill,background:"#e8f5e8",color:"#1d6b1d"},children:[d,"s"]}):S.jsx("span",{style:{...se.phasePill,background:"#f5f0e3",color:"#7a5010"},children:"Resolving…"}),S.jsxs("div",{style:se.cycleLabel,children:["Cycle ",s.cycle]})]}),S.jsx("button",{style:se.helpBtn,onClick:()=>b(!0),children:"?"})]}),S.jsxs("div",{style:{...se.countdownBar,...g&&_?{background:"#e0f5e0",borderColor:"#9ac89a"}:{},..._?{}:{background:"#f8f4e0",borderColor:"#c8b060"}},children:[_&&!g&&S.jsxs(S.Fragment,{children:[S.jsx("span",{style:se.countdownNum,children:d}),S.jsx("span",{style:se.countdownLabel,children:"seconds to lock in"})]}),_&&g&&S.jsxs(S.Fragment,{children:[S.jsxs("span",{style:{...se.countdownNum,color:"#1d6b1d",fontSize:"1.5rem"},children:["✓ Locked in",m?`: ${m.label}`:" (no action)"]}),S.jsx("span",{style:{...se.countdownLabel,color:"#9a9a90"},children:"waiting for others…"})]}),!_&&S.jsxs("span",{style:{...se.countdownNum,color:"#7a5010",fontSize:"1.4rem"},children:["Resolving cycle ",s.cycle,"…"]})]}),S.jsx("div",{style:se.tabBar,children:L.map(H=>S.jsx("button",{style:{...se.tabBtn,...l===H.id?se.tabBtnActive:{}},onClick:()=>u(H.id),children:H.label},H.id))}),S.jsxs("div",{style:se.content,children:[l==="farm"&&r&&S.jsx(nA,{act:E,canAct:B}),l==="market"&&S.jsx(iA,{act:E,canAct:B}),l==="options"&&S.jsx(aA,{act:E,canAct:B}),l==="chaos"&&S.jsx(rA,{act:E,canAct:B}),l==="god"&&S.jsx(sA,{act:E,canAct:B}),s.myFeedback&&S.jsxs("div",{style:se.feedbackCard,children:[S.jsxs("div",{style:se.feedbackHeader,children:[S.jsx("span",{style:se.feedbackTitle,children:"Coach"}),S.jsx("button",{style:se.dismissBtn,onClick:()=>i({type:"clear_feedback"}),children:"×"})]}),s.myFeedback.split(/\n/).filter(Boolean).map((H,P)=>S.jsx("p",{style:se.feedbackLine,children:H.trim()},P))]}),s.headlines.length>0&&S.jsxs("div",{style:se.headlineCard,children:[S.jsx("span",{style:se.headlineLabel,children:"HEADLINE"}),S.jsx("p",{style:se.headlineText,children:s.headlines[s.headlines.length-1].text})]}),S.jsx("div",{style:{height:"5rem"}})]}),S.jsxs("div",{style:{...se.lockBar,..._?{}:{opacity:.35,pointerEvents:"none"}},children:[S.jsx("button",{style:{...se.lockBtn,...se.noActionBtn,opacity:g?.4:1,cursor:g?"not-allowed":"pointer"},disabled:g||!_,onClick:M,children:"Take No Action"}),S.jsx("button",{style:{...se.lockBtn,...se.lockInBtn,opacity:g?.4:1,cursor:g?"not-allowed":"pointer",background:g?"#f0eee9":m?"#e8f5e8":"#e8eff5",borderColor:g?"#c8c4be":m?"#4a9a4a":"#5a8ab0"},disabled:g||!_,onClick:R,children:g?"✓ Locked In":m?`Lock In: ${m.label}`:"Lock In (no action)"})]}),y&&S.jsx(tA,{role:s.myRole,onClose:()=>b(!1)})]})}function tA({role:s,onClose:t}){const i=s==="farmer";return S.jsx("div",{style:se.overlay,onClick:t,children:S.jsxs("div",{style:se.modal,onClick:r=>r.stopPropagation(),children:[S.jsxs("div",{style:se.modalHeader,children:[S.jsx("span",{style:se.modalTitle,children:"How to Play"}),S.jsx("button",{style:se.modalClose,onClick:t,children:"×"})]}),S.jsxs("div",{style:se.modalBody,children:[S.jsxs("div",{style:se.modalSection,children:[S.jsx("p",{style:se.modalSectionTitle,children:"🏆 Goal"}),S.jsx("p",{style:se.modalText,children:"Finish with the highest net worth. Net worth = cash + share value + farm equity + options P&L."})]}),i?S.jsxs("div",{style:se.modalSection,children:[S.jsx("p",{style:se.modalSectionTitle,children:"🌽 You are a Farmer"}),S.jsx("p",{style:se.modalText,children:"Plant fields → harvest corn → sell through mills. Hire workers to boost output. Acquire more farms to scale up. Use options to hedge your harvest price against market moves."})]}):S.jsxs("div",{style:se.modalSection,children:[S.jsx("p",{style:se.modalSectionTitle,children:"📈 You are a Trader"}),S.jsx("p",{style:se.modalText,children:"Buy and sell CornCo stock. Go long when supply looks tight, short when there's a glut. Write options to collect premium. Corner the market or dump shares to move the price."})]}),S.jsxs("div",{style:se.modalSection,children:[S.jsx("p",{style:se.modalSectionTitle,children:"🔥 Chaos Actions"}),S.jsx("p",{style:se.modalText,children:"Burn farms & mills, send hitmen, spread rumors. Each costs Aura. Use chaos to destabilise rivals or manipulate the market."})]}),S.jsxs("div",{style:se.modalSection,children:[S.jsx("p",{style:se.modalSectionTitle,children:"✨ Aura & God Powers"}),S.jsx("p",{style:se.modalText,children:"Aura accumulates +10 each cycle automatically. Save it for god-tier events: Drought (80), Market Panic (100), Famine (150), or Nuclear Fallout (300) to end the game in chaos."})]}),S.jsxs("div",{style:se.modalSection,children:[S.jsx("p",{style:se.modalSectionTitle,children:"🔒 Lock In"}),S.jsx("p",{style:se.modalText,children:"Select any action on a tab, then press Lock In. The cycle resolves immediately once everyone locks in. Press Take No Action to pass and preserve your Aura."})]})]})]})})}function nA({act:s,canAct:t}){const i=Hn(),r=i.farms.find(m=>m.owner===i.myPlayerId),l=parseFloat(i.myCash);if(!r)return S.jsx("div",{style:se.card,children:S.jsx("p",{style:se.empty,children:"No farm assigned."})});const u=r.fields-r.planted_fields,d=r.planted_fields>0&&r.state==="healthy",h=r.stored_corn>0;return S.jsxs(S.Fragment,{children:[S.jsx("div",{style:se.card,children:S.jsxs("div",{style:se.statGrid,children:[S.jsx(nn,{label:"Planted",value:`${r.planted_fields}/${r.fields}`}),S.jsx(nn,{label:"Stored corn",value:String(r.stored_corn)}),S.jsx(nn,{label:"Workers",value:String(r.workers)}),S.jsx(nn,{label:"Farm state",value:r.state,color:r.state==="burning"?"#7a1a1a":r.state==="idle"?"#9a9a90":"#1d6b1d"}),S.jsx(nn,{label:"Cash",value:`$${l.toFixed(0)}`}),S.jsx(nn,{label:"Net worth",value:`$${parseFloat(i.myNetWorth).toFixed(0)}`})]})}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Select action (confirm with Lock In)"}),S.jsxs("div",{style:se.btnGrid,children:[S.jsx(pn,{label:"Plant Fields",sub:`${u} available`,disabled:!t||u===0,onClick:()=>s({kind:"plant_fields",farm_id:r.id,count:u},"Plant Fields")}),S.jsx(pn,{label:"Harvest Corn",sub:d?`${r.planted_fields} fields`:"nothing ready",disabled:!t||!d,onClick:()=>s({kind:"harvest_corn",farm_id:r.id},"Harvest Corn")}),S.jsx(pn,{label:"Sell Corn",sub:h?`${r.stored_corn} bushels`:"barn empty",disabled:!t||!h,onClick:()=>s({kind:"sell_corn",farm_id:r.id},"Sell Corn")}),S.jsx(pn,{label:"Hire Worker",sub:l>=500?"costs $500":"need $500",disabled:!t||l<500,onClick:()=>s({kind:"hire_worker",farm_id:r.id},"Hire Worker")}),S.jsx(pn,{label:"Fire Worker",sub:r.workers>0?`${r.workers} workers`:"no workers",disabled:!t||r.workers===0,color:"#f5e8e8",borderColor:"#aa5a5a",onClick:()=>s({kind:"fire_worker",farm_id:r.id},"Fire Worker")})]})]})]})}function iA({act:s,canAct:t}){const i=Hn(),[r,l]=Ve.useState(1),u=parseFloat(i.myCash),d=parseFloat(i.price),h=i.myRole==="farmer",m=u>=d*r,p=i.myShares>=r,g=i.myShares>0;return S.jsxs(S.Fragment,{children:[S.jsx("div",{style:se.card,children:S.jsxs("div",{style:se.statGrid,children:[S.jsx(nn,{label:"Cash",value:`$${u.toFixed(0)}`}),S.jsx(nn,{label:"Shares",value:String(i.myShares),color:i.myShares<0?"#7a1a1a":void 0}),S.jsx(nn,{label:"Net worth",value:`$${parseFloat(i.myNetWorth).toFixed(0)}`}),S.jsx(nn,{label:"Aura",value:i.myAura.toFixed(0),color:"#7a5010"}),S.jsx(nn,{label:"Bid depth",value:String(i.bidDepth)}),S.jsx(nn,{label:"Ask depth",value:String(i.askDepth)}),S.jsx(nn,{label:"Vol (cycle)",value:String(i.cycleVolume)}),S.jsx(nn,{label:"Price",value:`$${d.toFixed(2)}`,color:"#1d6b1d"})]})}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Quantity"}),S.jsx("div",{style:se.qtyRow,children:[1,2,5,10].map(v=>S.jsx("button",{style:{...se.qtyBtn,...r===v?se.qtyBtnActive:{}},onClick:()=>l(v),children:v},v))})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Orders"}),S.jsxs("div",{style:se.btnGrid,children:[S.jsx(pn,{label:`Buy ${r}`,sub:m?`~$${(d*r).toFixed(0)}`:"not enough cash",disabled:!t||!m,color:"#e8f5e8",borderColor:"#5aaa5a",onClick:()=>s({kind:"place_order",side:"bid",quantity:r},`Buy ${r} shares`)}),S.jsx(pn,{label:`Sell ${r}`,sub:p?`${i.myShares} held`:"not enough shares",disabled:!t||!p,color:"#f5e8e8",borderColor:"#aa5a5a",onClick:()=>s({kind:"place_order",side:"ask",quantity:r},`Sell ${r} shares`)})]})]}),!h&&S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Power Moves"}),S.jsxs("div",{style:se.btnGrid,children:[S.jsx(pn,{label:"Dump All",sub:g?`sell ${i.myShares} @ market`:"no shares held",disabled:!t||!g,color:"#f5e8e8",borderColor:"#aa5a5a",onClick:()=>s({kind:"dump_shares"},"Dump All Shares")}),S.jsx(pn,{label:"Corner Market",sub:"buy 200 shares @ market",disabled:!t||u<d*10,color:"#eeeef8",borderColor:"#5a5aaa",onClick:()=>s({kind:"corner_market"},"Corner Market")})]})]})]})}function aA({act:s,canAct:t}){var y;const i=Hn(),r=parseFloat(i.price),[l,u]=Ve.useState(0),[d,h]=Ve.useState(3),[m,p]=Ve.useState(1),g=[-20,-10,0,10,20],v=(r*(1+l/100)).toFixed(2);return S.jsxs(S.Fragment,{children:[S.jsx("div",{style:se.card,children:S.jsxs("div",{style:se.statGrid,children:[S.jsx(nn,{label:"Spot price",value:`$${r.toFixed(2)}`,color:"#1d6b1d"}),S.jsx(nn,{label:"Selected strike",value:`$${v}`}),S.jsx(nn,{label:"Expiry",value:`${d} cycle${d>1?"s":""}`}),S.jsx(nn,{label:"Qty",value:String(m)})]})}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Strike (% from spot)"}),S.jsx("div",{style:se.qtyRow,children:g.map(b=>S.jsx("button",{style:{...se.qtyBtn,...l===b?se.qtyBtnActive:{},fontSize:"0.75rem"},onClick:()=>u(b),children:b>=0?`+${b}%`:`${b}%`},b))})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Expiry (cycles)"}),S.jsx("div",{style:se.qtyRow,children:[1,3,5].map(b=>S.jsx("button",{style:{...se.qtyBtn,...d===b?se.qtyBtnActive:{}},onClick:()=>h(b),children:b},b))})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Quantity"}),S.jsx("div",{style:se.qtyRow,children:[1,2,5,10].map(b=>S.jsx("button",{style:{...se.qtyBtn,...m===b?se.qtyBtnActive:{}},onClick:()=>p(b),children:b},b))})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Buy (pay premium)"}),S.jsx("p",{style:se.optNote,children:"Premium is computed via Black-Scholes at cycle resolution."}),S.jsxs("div",{style:se.btnGrid,children:[S.jsx(pn,{label:"Buy Call",sub:`strike $${v}, +${d}cy`,disabled:!t,color:"#e8f5e8",borderColor:"#5aaa5a",onClick:()=>s({kind:"buy_option",option_type:"call",strike:v,expiry_cycles:d,quantity:m},`Buy Call @ $${v}`)}),S.jsx(pn,{label:"Buy Put",sub:`strike $${v}, +${d}cy`,disabled:!t,color:"#f5e8e8",borderColor:"#aa5a5a",onClick:()=>s({kind:"buy_option",option_type:"put",strike:v,expiry_cycles:d,quantity:m},`Buy Put @ $${v}`)})]})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Write (collect premium, risk exposure)"}),S.jsxs("div",{style:se.btnGrid,children:[S.jsx(pn,{label:"Write Call",sub:`strike $${v}, +${d}cy`,disabled:!t,color:"#edf5ed",borderColor:"#7a9a7a",onClick:()=>s({kind:"write_option",option_type:"call",strike:v,expiry_cycles:d,quantity:m},`Write Call @ $${v}`)}),S.jsx(pn,{label:"Write Put",sub:`strike $${v}, +${d}cy`,disabled:!t,color:"#f5eded",borderColor:"#9a7a7a",onClick:()=>s({kind:"write_option",option_type:"put",strike:v,expiry_cycles:d,quantity:m},`Write Put @ $${v}`)})]})]}),i.myNetWorth&&parseFloat(i.myNetWorth)>0&&S.jsxs("div",{style:se.card,children:[S.jsxs("p",{style:se.cardTitle,children:["Open Positions (",((y=i.options)==null?void 0:y.length)??0,")"]}),S.jsx("p",{style:se.optNote,children:"Position details visible after cycle resolution."})]})]})}function rA({act:s,canAct:t}){var w,G,le,ie,me,ve;const i=Hn(),r=i.myAura,l=parseFloat(i.price),u=i.farms.filter(U=>U.owner!==i.myPlayerId),d=i.farms,h=i.mills,m=i.npcOwners.filter(U=>U.alive),[p,g]=Ve.useState(((w=u[0])==null?void 0:w.id)??null),[v,y]=Ve.useState(((G=d[0])==null?void 0:G.id)??null),[b,E]=Ve.useState(((le=h[0])==null?void 0:le.id)??null),[R,M]=Ve.useState(((ie=m[0])==null?void 0:ie.id)??null),[_,B]=Ve.useState(""),[O,L]=Ve.useState(((me=u[0])==null?void 0:me.id)??null),[q,H]=Ve.useState(((ve=h[0])==null?void 0:ve.id)??null),P=parseFloat(i.myCash),W=l*15,D=l*20;return S.jsxs(S.Fragment,{children:[S.jsx("div",{style:se.card,children:S.jsxs("div",{style:se.statGrid,children:[S.jsx(nn,{label:"Aura",value:r.toFixed(0),color:"#7a5010"}),S.jsx(nn,{label:"Cash",value:`$${P.toFixed(0)}`})]})}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Burn Farm — 20 aura"}),S.jsxs("div",{style:se.targetRow,children:[S.jsxs("select",{style:se.select,value:p??"",onChange:U=>g(Number(U.target.value)),children:[u.length===0&&S.jsx("option",{value:"",children:"No targets"}),u.map(U=>S.jsxs("option",{value:U.id,children:["Farm #",U.id," (",U.state,", ",U.fields," fields)"]},U.id))]}),S.jsx(pn,{label:"Burn",sub:r>=20?"🔥":"need 20 aura",disabled:!t||r<20||p===null||u.length===0,color:"#f5e8e8",borderColor:"#aa5a5a",onClick:()=>s({kind:"burn_farm",target_farm:p},`Burn Farm #${p}`)})]})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Burn Mill — 25 aura"}),S.jsxs("div",{style:se.targetRow,children:[S.jsxs("select",{style:se.select,value:b??"",onChange:U=>E(Number(U.target.value)),children:[h.length===0&&S.jsx("option",{value:"",children:"No mills"}),h.map(U=>S.jsxs("option",{value:U.id,children:["Mill #",U.id," (",U.state,")"]},U.id))]}),S.jsx(pn,{label:"Burn",sub:r>=25?"🔥":"need 25 aura",disabled:!t||r<25||b===null||h.length===0,color:"#f5e8e8",borderColor:"#aa5a5a",onClick:()=>s({kind:"burn_mill",target_mill:b},`Burn Mill #${b}`)})]})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Hitman Worker — 15 aura"}),S.jsxs("div",{style:se.targetRow,children:[S.jsxs("select",{style:se.select,value:v??"",onChange:U=>y(Number(U.target.value)),children:[d.length===0&&S.jsx("option",{value:"",children:"No targets"}),d.map(U=>S.jsxs("option",{value:U.id,children:["Farm #",U.id," (",U.workers," workers)"]},U.id))]}),S.jsx(pn,{label:"Send",sub:r>=15?"👤":"need 15 aura",disabled:!t||r<15||v===null,color:"#f0e8f5",borderColor:"#9a5aaa",onClick:()=>s({kind:"hitman_worker",target_farm:v},`Hitman Worker on Farm #${v}`)})]})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Hitman NPC Owner — 50 aura"}),S.jsxs("div",{style:se.targetRow,children:[S.jsxs("select",{style:se.select,value:R??"",onChange:U=>M(Number(U.target.value)),children:[m.length===0&&S.jsx("option",{value:"",children:"No targets"}),m.map(U=>S.jsx("option",{value:U.id,children:U.name},U.id))]}),S.jsx(pn,{label:"Send",sub:r>=50?"☠️":"need 50 aura",disabled:!t||r<50||R===null||m.length===0,color:"#f0e8f5",borderColor:"#9a5aaa",onClick:()=>{var U;return s({kind:"hitman_owner",target_npc:R},`Hitman on ${((U=m.find(K=>K.id===R))==null?void 0:U.name)??"NPC"}`)}})]})]}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Spread Rumor — 5 aura"}),S.jsx("input",{style:{...se.select,marginBottom:"0.5rem"},placeholder:"Type your rumor…",value:_,maxLength:120,onChange:U=>B(U.target.value)}),S.jsx(pn,{label:"Spread",sub:r>=5?`"${_.slice(0,20)}…"`:"need 5 aura",disabled:!t||r<5||_.trim().length===0,color:"#f5f2e0",borderColor:"#9a8a40",onClick:()=>{s({kind:"spread_rumor",text:_.trim()},"Spread Rumor"),B("")}})]}),S.jsxs("div",{style:se.card,children:[S.jsxs("p",{style:se.cardTitle,children:["Acquire Farm — ~$",W.toFixed(0)]}),S.jsxs("div",{style:se.targetRow,children:[S.jsxs("select",{style:se.select,value:O??"",onChange:U=>L(Number(U.target.value)),children:[u.length===0&&S.jsx("option",{value:"",children:"No farms available"}),u.map(U=>S.jsxs("option",{value:U.id,children:["Farm #",U.id," (",U.fields," fields)"]},U.id))]}),S.jsx(pn,{label:"Buy",sub:P>=W?`$${W.toFixed(0)}`:"not enough cash",disabled:!t||P<W||O===null||u.length===0,color:"#e8f2f5",borderColor:"#5a8aa0",onClick:()=>s({kind:"acquire_farm",target_farm:O},`Acquire Farm #${O}`)})]})]}),S.jsxs("div",{style:se.card,children:[S.jsxs("p",{style:se.cardTitle,children:["Acquire Mill — ~$",D.toFixed(0)]}),S.jsxs("div",{style:se.targetRow,children:[S.jsxs("select",{style:se.select,value:q??"",onChange:U=>H(Number(U.target.value)),children:[h.length===0&&S.jsx("option",{value:"",children:"No mills available"}),h.map(U=>S.jsxs("option",{value:U.id,children:["Mill #",U.id," (",U.state,")"]},U.id))]}),S.jsx(pn,{label:"Buy",sub:P>=D?`$${D.toFixed(0)}`:"not enough cash",disabled:!t||P<D||q===null||h.length===0,color:"#e8f2f5",borderColor:"#5a8aa0",onClick:()=>s({kind:"acquire_mill",target_mill:q},`Acquire Mill #${q}`)})]})]})]})}function sA({act:s,canAct:t}){const{myAura:i}=Hn(),r=[{label:"Bumper Harvest",sub:"double yield this cycle",cost:60,action:{kind:"bumper_harvest"},color:"#e8f5e8",borderColor:"#4a9a4a"},{label:"Drought",sub:"stunt crops for 4 cycles",cost:80,action:{kind:"drought"},color:"#f5f2e0",borderColor:"#9a8040"},{label:"Market Panic",sub:"crash prices",cost:100,action:{kind:"market_panic"},color:"#f5e8e8",borderColor:"#aa5a5a"},{label:"Famine",sub:"halve all farm output",cost:150,action:{kind:"famine"},color:"#f5e8e8",borderColor:"#bb3a3a"},{label:"Nuclear Fallout",sub:"destroy all farms, end game",cost:300,action:{kind:"nuclear_fallout"},color:"#f8e8e8",borderColor:"#cc1010"}];return S.jsxs(S.Fragment,{children:[S.jsx("div",{style:se.card,children:S.jsxs("div",{style:se.statGrid,children:[S.jsx(nn,{label:"Aura",value:i.toFixed(0),color:"#7a5010"}),S.jsx(nn,{label:"Next power",value:i<60?`${(60-i).toFixed(0)} needed`:"unlocked",color:i>=60?"#1d6b1d":"#9a9a90"})]})}),S.jsxs("div",{style:se.card,children:[S.jsx("p",{style:se.cardTitle,children:"Powers (aura accumulates +10/cycle)"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:r.map(l=>S.jsxs("button",{style:{...se.actionBtn,background:!t||i<l.cost?"#f8f8f4":l.color??"#e8eff5",borderColor:!t||i<l.cost?"#ddd9d2":l.borderColor??"#5a8ab0",opacity:i<l.cost?.4:1,cursor:!t||i<l.cost?"not-allowed":"pointer",flexDirection:"row",justifyContent:"space-between",padding:"0.75rem 1rem"},disabled:!t||i<l.cost,onClick:()=>s(l.action,l.label),children:[S.jsxs("div",{children:[S.jsx("span",{style:se.actionBtnLabel,children:l.label}),S.jsx("br",{}),S.jsx("span",{style:se.actionBtnSub,children:l.sub})]}),S.jsxs("span",{style:{fontSize:"0.75rem",color:i>=l.cost?"#7a5010":"#9a9a90"},children:[l.cost," aura"]})]},l.label))})]})]})}function nn({label:s,value:t,color:i}){return S.jsxs("div",{style:se.stat,children:[S.jsx("span",{style:se.statLabel,children:s}),S.jsx("span",{style:{...se.statValue,color:i??"#18181a"},children:t})]})}function pn({label:s,sub:t,disabled:i,onClick:r,color:l="#e8eff5",borderColor:u="#5a8ab0"}){return S.jsxs("button",{style:{...se.actionBtn,background:i?"#f8f8f4":l,borderColor:i?"#ddd9d2":u,opacity:i?.5:1,cursor:i?"not-allowed":"pointer"},disabled:i,onClick:r,children:[S.jsx("span",{style:se.actionBtnLabel,children:s}),S.jsx("span",{style:se.actionBtnSub,children:t})]})}const se={root:{display:"flex",flexDirection:"column",minHeight:"100vh",width:"100%",maxWidth:"100%",overflow:"hidden",background:"#f5f3ef",fontFamily:"inherit",paddingTop:qo},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.6rem 0.75rem",background:"#ffffff",borderBottom:"1px solid #e2ddd6",position:"sticky",top:qo,zIndex:10,minWidth:0,width:"100%",gap:"0.5rem"},roleTag:{fontSize:"0.6rem",background:"#e8f5f5",color:"#0d5858",padding:"0.15rem 0.4rem",borderRadius:3,letterSpacing:"0.06em",marginRight:"0.35rem",fontWeight:"600",flexShrink:0},playerName:{fontSize:"0.82rem",color:"#3a3a36",fontWeight:"500"},priceBlock:{textAlign:"center",flexShrink:0},priceLabel:{display:"block",fontSize:"0.55rem",color:"#9a9a90",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:"600"},priceValue:{fontSize:"1.35rem",fontWeight:"800",color:"#1d6b1d",letterSpacing:"-0.01em"},phasePill:{fontSize:"0.75rem",fontWeight:"700",padding:"0.2rem 0.45rem",borderRadius:4,letterSpacing:"0.02em"},cycleLabel:{fontSize:"0.6rem",color:"#9a9a90",marginTop:"0.1rem",textAlign:"right"},helpBtn:{flexShrink:0,width:26,height:26,borderRadius:"50%",background:"#f0eee9",border:"1px solid #e2ddd6",color:"#6b6b63",fontSize:"0.8rem",fontWeight:"700",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit",padding:0},countdownBar:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0.4rem 1rem",minHeight:54,background:"#f0f8f0",borderBottom:"1px solid #c8e4c8"},countdownNum:{fontSize:"1.8rem",fontWeight:"800",color:"#1d6b1d",lineHeight:1,letterSpacing:"-0.02em"},countdownLabel:{fontSize:"0.6rem",color:"#5a9a5a",letterSpacing:"0.08em",textTransform:"uppercase",marginTop:"0.1rem",fontWeight:"600"},lockBar:{position:"sticky",bottom:0,display:"flex",gap:"0.5rem",padding:"0.6rem 0.75rem",background:"#ffffff",borderTop:"1px solid #e2ddd6",zIndex:10},lockBtn:{flex:1,padding:"0.8rem 0.5rem",minHeight:48,border:"1.5px solid",borderRadius:8,fontFamily:"inherit",fontSize:"0.85rem",fontWeight:"700",color:"#18181a",cursor:"pointer"},noActionBtn:{background:"#f5f3ef",borderColor:"#d1cbc3"},lockInBtn:{background:"#e8f5e8",borderColor:"#4a9a4a"},tabBar:{display:"flex",background:"#ffffff",borderBottom:"1px solid #e2ddd6",width:"100%"},tabBtn:{flex:1,padding:"0.6rem 0.2rem",minHeight:40,background:"transparent",border:"none",borderBottom:"2.5px solid transparent",color:"#9a9a90",fontSize:"0.65rem",fontFamily:"inherit",cursor:"pointer",letterSpacing:"0.04em",textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:0,fontWeight:"600"},tabBtnActive:{color:"#1d6b1d",borderBottomColor:"#1d6b1d"},content:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.5rem",flex:1,minWidth:0,width:"100%"},card:{background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:10,padding:"0.75rem 0.875rem",minWidth:0},cardTitle:{margin:"0 0 0.5rem",fontSize:"0.65rem",color:"#9a9a90",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"700"},statGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 0.75rem"},stat:{display:"flex",flexDirection:"column"},statLabel:{fontSize:"0.6rem",color:"#9a9a90",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:"600"},statValue:{fontSize:"0.95rem",fontWeight:"600",marginTop:"0.1rem",color:"#18181a"},btnGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem"},actionBtn:{border:"1.5px solid",borderRadius:8,padding:"0.75rem 0.5rem",minHeight:58,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.2rem",fontFamily:"inherit"},actionBtnLabel:{fontSize:"0.875rem",fontWeight:"700",color:"#18181a"},actionBtnSub:{fontSize:"0.62rem",color:"#7a7a70"},qtyRow:{display:"flex",gap:"0.4rem"},qtyBtn:{flex:1,padding:"0.55rem 0",background:"#f5f3ef",border:"1.5px solid #e2ddd6",borderRadius:6,color:"#6b6b63",fontSize:"0.95rem",fontFamily:"inherit",cursor:"pointer",fontWeight:"500"},qtyBtnActive:{background:"#e8f5f5",borderColor:"#5a9a9a",color:"#0d5858",fontWeight:"700"},targetRow:{display:"flex",gap:"0.4rem",alignItems:"stretch",minWidth:0},select:{flex:1,minWidth:0,background:"#f5f3ef",border:"1.5px solid #e2ddd6",color:"#18181a",padding:"0.5rem 0.5rem",borderRadius:6,fontFamily:"inherit",fontSize:"0.82rem",appearance:"auto"},optNote:{margin:"0 0 0.5rem",fontSize:"0.72rem",color:"#9a9a90",fontStyle:"italic"},empty:{color:"#8a8a80",textAlign:"center",margin:0,fontSize:"0.875rem"},feedbackCard:{background:"#edf8ed",border:"1px solid #9ac89a",borderRadius:10,padding:"0.75rem 0.875rem"},feedbackHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},feedbackTitle:{fontSize:"0.65rem",color:"#1d6b1d",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:"700"},feedbackLine:{fontSize:"0.82rem",color:"#1a4a1a",lineHeight:1.55,margin:"0.15rem 0"},dismissBtn:{background:"transparent",border:"none",color:"#9a9a90",cursor:"pointer",fontSize:"1.1rem",lineHeight:1,padding:0},headlineCard:{background:"#fffef5",border:"1px solid #e8e0c0",borderRadius:10,padding:"0.7rem 0.875rem"},headlineLabel:{fontSize:"0.6rem",color:"#9a8040",letterSpacing:"0.1em",display:"block",marginBottom:"0.25rem",fontWeight:"700",textTransform:"uppercase"},headlineText:{fontSize:"0.83rem",color:"#3a3020",fontStyle:"italic",margin:0,lineHeight:1.5},overlay:{position:"fixed",inset:0,zIndex:500,background:"rgba(0,0,0,0.4)",display:"flex",alignItems:"flex-end"},modal:{background:"#ffffff",width:"100%",maxHeight:"85vh",borderRadius:"14px 14px 0 0",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 -4px 32px rgba(0,0,0,0.15)"},modalHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.9rem 1.1rem",borderBottom:"1px solid #e8e4df",flexShrink:0},modalTitle:{fontSize:"1rem",fontWeight:"800",color:"#18181a"},modalClose:{background:"transparent",border:"none",color:"#9a9a90",fontSize:"1.5rem",cursor:"pointer",padding:0,lineHeight:1},modalBody:{overflowY:"auto",padding:"0.9rem 1.1rem",display:"flex",flexDirection:"column",gap:"0.875rem"},modalSection:{borderLeft:"3px solid #e2ddd6",paddingLeft:"0.75rem"},modalSectionTitle:{fontSize:"0.8rem",fontWeight:"700",color:"#18181a",margin:"0 0 0.3rem"},modalText:{fontSize:"0.82rem",color:"#5a5a54",lineHeight:1.6,margin:0}};function oA(){const s=Hn();return S.jsxs("div",{style:Ii.root,children:[S.jsxs("div",{style:Ii.card,children:[S.jsx("p",{style:Ii.label,children:"AURA FARMERS"}),S.jsx("h1",{style:Ii.heading,children:"Waiting for host to start…"}),S.jsxs("p",{style:Ii.sub,children:["You've joined as ",S.jsx("strong",{style:Ii.name,children:s.myName})," —"," ",S.jsx("span",{style:{color:s.myRole==="farmer"?"#7ec87e":"#7ec8c8"},children:s.myRole})]}),S.jsxs("div",{style:Ii.dots,children:[S.jsx("span",{style:Ii.dot}),S.jsx("span",{style:{...Ii.dot,animationDelay:"0.3s"}}),S.jsx("span",{style:{...Ii.dot,animationDelay:"0.6s"}})]})]}),S.jsx("style",{children:`
        @keyframes pulse { 0%,100%{opacity:.2} 50%{opacity:1} }
      `})]})}const Ii={root:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f5f3ef",fontFamily:"inherit",padding:"1.5rem 1rem"},card:{textAlign:"center",padding:"2.5rem 2rem",background:"#ffffff",border:"1px solid #e2ddd6",borderRadius:12,maxWidth:400,width:"100%",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"},label:{margin:"0 0 0.5rem",fontSize:"0.65rem",color:"#9a9a90",letterSpacing:"0.15em",textTransform:"uppercase",fontWeight:"600"},heading:{margin:"0 0 0.75rem",fontSize:"1.3rem",color:"#18181a",fontWeight:"700",lineHeight:1.3},sub:{margin:"0 0 1.5rem",fontSize:"0.9rem",color:"#6b6b63"},name:{color:"#1d6b1d",fontWeight:"700"},dots:{display:"flex",justifyContent:"center",gap:"0.5rem"},dot:{width:8,height:8,borderRadius:"50%",background:"#c8c4be",display:"inline-block",animation:"pulse 1.2s ease-in-out infinite"}};function lA(){const s=Hn(),t=parseFloat(s.myCash),i=parseFloat(s.myNetWorth);return S.jsxs("div",{style:Qt.root,children:[S.jsxs("div",{style:Qt.header,children:[S.jsxs("span",{style:Qt.cycleTag,children:["CYCLE ",s.cycle," COMPLETE"]}),S.jsx("p",{style:Qt.waiting,children:"Waiting for host to continue…"})]}),S.jsxs("div",{style:Qt.card,children:[S.jsx("p",{style:Qt.cardTitle,children:"Your Portfolio"}),S.jsxs("div",{style:Qt.statGrid,children:[S.jsx(Ya,{label:"Cash",value:`$${t.toFixed(0)}`}),S.jsx(Ya,{label:"Shares",value:String(s.myShares),color:s.myShares<0?"#7a1a1a":void 0}),S.jsx(Ya,{label:"Net Worth",value:`$${i.toFixed(0)}`,color:"#1d6b1d"}),S.jsx(Ya,{label:"Aura",value:s.myAura.toFixed(0),color:"#7a5010"})]})]}),S.jsxs("div",{style:Qt.card,children:[S.jsx("p",{style:Qt.cardTitle,children:"Market"}),S.jsxs("div",{style:Qt.statGrid,children:[S.jsx(Ya,{label:"CornCo Price",value:`$${parseFloat(s.price).toFixed(2)}`,color:"#1d6b1d"}),S.jsx(Ya,{label:"Volume",value:String(s.cycleVolume)}),S.jsx(Ya,{label:"Bid Depth",value:String(s.bidDepth)}),S.jsx(Ya,{label:"Ask Depth",value:String(s.askDepth)})]})]}),s.cycleEvents.length>0&&S.jsxs("div",{style:Qt.card,children:[S.jsx("p",{style:Qt.cardTitle,children:"Events this cycle"}),S.jsx("div",{style:Qt.eventList,children:s.cycleEvents.map((r,l)=>S.jsx(cA,{event:r},l))})]}),s.myFeedback&&S.jsxs("div",{style:Qt.feedbackCard,children:[S.jsx("p",{style:Qt.cardTitle,children:"Coach"}),s.myFeedback.split(/\n/).filter(Boolean).map((r,l)=>S.jsx("p",{style:Qt.feedbackLine,children:r.trim()},l))]}),s.headlines.length>0&&S.jsxs("div",{style:Qt.headlineCard,children:[S.jsx("span",{style:Qt.headlineLabel,children:"HEADLINE"}),S.jsx("p",{style:Qt.headlineText,children:s.headlines[s.headlines.length-1].text})]})]})}function cA({event:s}){const t=uA(s);return t?S.jsx("p",{style:Qt.eventRow,children:t}):null}function uA(s){switch(s.kind){case"order_filled":return`Order filled: ${s.side} ${s.quantity} @ $${parseFloat(s.price).toFixed(2)}`;case"farm_burned":return`Farm #${s.farm_id} was set on fire`;case"farm_healed":return`Farm #${s.farm_id} recovered`;case"mill_burned":return`Mill #${s.mill_id} was burned`;case"worker_killed":return`A worker on farm #${s.farm_id} was killed`;case"npc_killed":return`${s.npc_name} was eliminated`;case"npc_farm_auctioned":return`Farm #${s.farm_id} auctioned for $${parseFloat(s.price).toFixed(0)}`;case"rumor":return`Rumor: "${s.text}"`;case"drought":return`Drought declared — ${s.cycles} cycles of poor weather`;case"famine":return"Famine — supply collapse across all farms";case"bumper_harvest":return"Bumper harvest — exceptional yields this cycle";case"market_panic":return"Market panic — prices in freefall";case"nuclear_fallout":return"NUCLEAR FALLOUT — catastrophic destruction";case"fields_planted":return`Farm #${s.farm_id} planted ${s.count} fields`;case"corn_harvested":return`Farm #${s.farm_id} harvested ${s.bushels} bushels`;case"corn_sold":return`Corn sold — ${s.bushels} bushels for $${parseFloat(s.revenue).toFixed(0)}`;case"option_expired":return`Option expired — PnL $${parseFloat(s.pnl).toFixed(0)}`;case"player_joined":return`${s.name} joined the game`;case"cycle_start":return`Cycle ${s.cycle} started`;case"game_over":return`Game over: ${s.reason}`;case"headline":return`"${s.text}"`;default:return""}}function Ya({label:s,value:t,color:i}){return S.jsxs("div",{style:Qt.stat,children:[S.jsx("span",{style:Qt.statLabel,children:s}),S.jsx("span",{style:{...Qt.statValue,color:i??"#18181a"},children:t})]})}const Qt={root:{display:"flex",flexDirection:"column",gap:"0.75rem",padding:"1rem",width:"100%",minHeight:"100vh",background:"#f5f3ef",fontFamily:"inherit",paddingTop:`calc(1rem + ${qo}px)`},header:{display:"flex",flexDirection:"column",alignItems:"center",padding:"1.5rem 1rem 1rem"},cycleTag:{fontSize:"1.5rem",fontWeight:"700",color:"#7a5010",letterSpacing:"0.04em"},waiting:{fontSize:"0.8rem",color:"#9a9a90",margin:"0.4rem 0 0",letterSpacing:"0.06em",textTransform:"uppercase"},card:{background:"#ffffff",border:"1px solid #ddd9d2",borderRadius:8,padding:"0.9rem 1rem"},feedbackCard:{background:"#edf8ed",border:"1px solid #9ac89a",borderRadius:8,padding:"0.9rem 1rem"},headlineCard:{background:"#ffffff",border:"1px solid #ddd9d2",borderRadius:8,padding:"0.75rem 1rem"},cardTitle:{margin:"0 0 0.6rem",fontSize:"0.7rem",color:"#8a8a80",textTransform:"uppercase",letterSpacing:"0.08em"},statGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 1rem"},stat:{display:"flex",flexDirection:"column"},statLabel:{fontSize:"0.65rem",color:"#9a9a90",textTransform:"uppercase",letterSpacing:"0.06em"},statValue:{fontSize:"1rem",fontWeight:"500",marginTop:"0.1rem"},eventList:{display:"flex",flexDirection:"column",gap:"0.3rem"},eventRow:{margin:0,fontSize:"0.85rem",color:"#4a4a44",padding:"0.3rem 0",borderBottom:"1px solid #e8e4df"},feedbackLine:{fontSize:"0.82rem",color:"#1a4a1a",lineHeight:1.5,margin:"0.2rem 0"},headlineLabel:{fontSize:"0.6rem",color:"#9a9a90",letterSpacing:"0.1em",display:"block",marginBottom:"0.3rem"},headlineText:{fontSize:"0.85rem",color:"#4a4a44",fontStyle:"italic",margin:0,lineHeight:1.5}},fA="aura_is_host";function O_(){const{debrief:s,headlines:t,myName:i,myPlayerId:r,isHost:l}=Hn(),u=Kc(),d=Qc();function h(){sessionStorage.removeItem(fA),u({type:"clear_host"}),d("/create")}if(!s)return S.jsxs("div",{style:jt.root,children:[S.jsx("h1",{style:jt.title,children:"Game Over"}),S.jsx("p",{style:{color:"#9a9a90"},children:"Calculating results…"})]});const m=s.leaderboard.find(p=>p.player_id===r);return S.jsxs("div",{style:jt.root,children:[S.jsx("h1",{style:jt.title,children:"Game Over"}),S.jsx("p",{style:jt.sub,children:s.game_over_reason}),m&&S.jsxs("div",{style:jt.myResult,children:[S.jsxs("span",{style:jt.rank,children:["#",m.rank]}),S.jsxs("div",{children:[S.jsx("strong",{children:i})," — ",m.role,S.jsx("br",{}),S.jsxs("span",{style:jt.stat,children:["Net worth: $",parseFloat(m.net_worth).toFixed(0)," ·"," "]}),S.jsxs("span",{style:{...jt.stat,color:parseFloat(m.pnl)>=0?"#1d6b1d":"#7a1a1a"},children:[m.return_pct>=0?"+":"",m.return_pct.toFixed(1),"% return"]})]})]}),S.jsxs("section",{style:jt.statsGrid,children:[S.jsx(Cs,{label:"Final Price",value:`$${s.final_price.toFixed(2)}`}),S.jsx(Cs,{label:"High",value:`$${s.price_high.toFixed(2)}`}),S.jsx(Cs,{label:"Low",value:`$${s.price_low.toFixed(2)}`}),S.jsx(Cs,{label:"Volatility",value:`${s.price_vol_pct.toFixed(2)}%`}),S.jsx(Cs,{label:"Cycles",value:s.total_cycles.toString()}),S.jsx(Cs,{label:"MM Blowups",value:s.mm_blowups.toString()})]}),S.jsxs("section",{children:[S.jsx("h2",{style:jt.sectionTitle,children:"Leaderboard"}),S.jsxs("table",{style:jt.table,children:[S.jsx("thead",{children:S.jsx("tr",{children:["#","Player","Role","Net Worth","PnL","Return"].map(p=>S.jsx("th",{style:jt.th,children:p},p))})}),S.jsx("tbody",{children:s.leaderboard.map(p=>{const g=parseFloat(p.pnl),v=p.player_id===r;return S.jsxs("tr",{style:v?jt.myRow:void 0,children:[S.jsx("td",{style:jt.td,children:p.rank}),S.jsx("td",{style:{...jt.td,fontWeight:v?"bold":"normal"},children:p.name}),S.jsx("td",{style:jt.td,children:p.role}),S.jsxs("td",{style:jt.td,children:["$",parseFloat(p.net_worth).toFixed(0)]}),S.jsxs("td",{style:{...jt.td,color:g>=0?"#1d6b1d":"#7a1a1a"},children:[g>=0?"+":"","$",g.toFixed(0)]}),S.jsxs("td",{style:{...jt.td,color:p.return_pct>=0?"#1d6b1d":"#7a1a1a"},children:[p.return_pct>=0?"+":"",p.return_pct.toFixed(1),"%"]})]},p.player_id)})})]})]}),t.length>0&&S.jsxs("section",{children:[S.jsx("h2",{style:jt.sectionTitle,children:"Season Headlines"}),t.map((p,g)=>S.jsxs("p",{style:jt.headline,children:[S.jsxs("span",{style:{color:"#9a9a90"},children:["Cycle ",p.cycle,":"]})," ",p.text]},g))]}),l&&S.jsx("div",{style:{display:"flex",justifyContent:"center"},children:S.jsx("button",{style:jt.newGameBtn,onClick:h,children:"New Game"})})]})}function Cs({label:s,value:t}){return S.jsxs("div",{style:jt.statCard,children:[S.jsx("div",{style:jt.statLabel,children:s}),S.jsx("div",{style:jt.statValue,children:t})]})}const jt={root:{maxWidth:860,margin:"0 auto",padding:"3rem 2rem",display:"flex",flexDirection:"column",gap:"2rem",background:"#f5f3ef",minHeight:"100vh"},title:{fontSize:"2rem",color:"#18181a"},sub:{color:"#7a7a70"},myResult:{display:"flex",alignItems:"center",gap:"1rem",background:"#ffffff",border:"1px solid #9ac89a",borderRadius:6,padding:"1rem 1.25rem"},rank:{fontSize:"2rem",color:"#1d6b1d",fontWeight:"bold",minWidth:48},stat:{fontSize:"0.9rem",color:"#7a7a70"},statsGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.75rem"},statCard:{background:"#ffffff",border:"1px solid #ddd9d2",borderRadius:4,padding:"0.75rem 1rem"},statLabel:{fontSize:"0.7rem",color:"#9a9a90",textTransform:"uppercase",letterSpacing:"0.08em"},statValue:{fontSize:"1.2rem",fontWeight:"bold",marginTop:"0.2rem",color:"#18181a"},sectionTitle:{fontSize:"0.75rem",color:"#9a9a90",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.75rem"},table:{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem",background:"#ffffff",borderRadius:6,overflow:"hidden"},th:{textAlign:"left",padding:"0.4rem 0.75rem",borderBottom:"1px solid #ddd9d2",color:"#9a9a90",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.06em",background:"#f8f6f2"},td:{padding:"0.45rem 0.75rem",borderBottom:"1px solid #e8e4df",color:"#3a3a36"},myRow:{background:"#edf8ed"},headline:{fontSize:"0.85rem",color:"#4a4a44",borderLeft:"2px solid #ddd9d2",paddingLeft:"0.75rem",marginBottom:"0.4rem"},newGameBtn:{background:"#e8f5e8",border:"1px solid #4a9a4a",color:"#1d6b1d",fontSize:"1rem",fontWeight:"bold",padding:"0.7rem 2.5rem",borderRadius:6,cursor:"pointer",fontFamily:"inherit"}};function dA(s){switch(s.kind){case"farm_burned":return{emojis:["🔥","🔥","🔥","💨","🌋"],count:20,style:"burst"};case"mill_burned":return{emojis:["🔥","🔥","💥","🏭","💨"],count:18,style:"burst"};case"drought":return{emojis:["☀️","☀️","🌵","🏜️","💧"],count:16,style:"fall"};case"famine":return{emojis:["💀","🌾","😫","💀","🥀"],count:20,style:"fall"};case"bumper_harvest":return{emojis:["🌽","🌽","🎉","🎊","✨","🥳","🌾"],count:30,style:"rise"};case"market_panic":return{emojis:["📉","😱","💸","🔴","😰"],count:22,style:"fall"};case"nuclear_fallout":return{emojis:["☢️","💥","☠️","🌡️","☣️"],count:25,style:"burst"};case"worker_killed":return{emojis:["💀","🔪","😱"],count:10,style:"burst"};case"npc_killed":return{emojis:["💀","👤","🔪"],count:12,style:"burst"};case"corn_harvested":return{emojis:["🌽","🌾","✨"],count:12,style:"rise"};case"corn_sold":return{emojis:["💰","💵","💸"],count:10,style:"rise"};case"order_filled":return{emojis:["💸","📊","✅"],count:8,style:"rise"};case"npc_farm_auctioned":return{emojis:["🏚️","🔨","💰"],count:10,style:"fall"};default:return null}}function hA(s,t,i){const r=[];for(let l=0;l<s.count;l++){const u=s.emojis[Math.floor(Math.random()*s.emojis.length)],d=22+Math.random()*20;let h,m,p,g;if(s.style==="fall")h=Math.random()*t,m=-d,p=(Math.random()-.5)*3,g=1.5+Math.random()*3;else if(s.style==="rise")h=Math.random()*t,m=i+d,p=(Math.random()-.5)*2.5,g=-(2+Math.random()*3.5);else{h=t*(.2+Math.random()*.6),m=i*(.2+Math.random()*.6);const v=Math.random()*Math.PI*2,y=2.5+Math.random()*5;p=Math.cos(v)*y,g=Math.sin(v)*y}r.push({x:h,y:m,vx:p,vy:g,emoji:u,size:d,opacity:1,rotation:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.12,life:1,decay:.008+Math.random()*.007})}return r}function pA(){const s=Hn(),t=Ve.useRef(null),i=Ve.useRef([]),r=Ve.useRef(0),l=Ve.useRef([]);return Ve.useEffect(()=>{const u=l.current,d=s.cycleEvents;if(d===u||d.length===0)return;l.current=d;const h=t.current;if(!h)return;const m=h.width,p=h.height;for(const g of d){const v=dA(g);v&&i.current.push(...hA(v,m,p))}},[s.cycleEvents]),Ve.useEffect(()=>{const u=t.current;if(!u)return;function d(){u&&(u.width=window.innerWidth,u.height=window.innerHeight)}return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),Ve.useEffect(()=>{const u=t.current;if(!u)return;const d=u.getContext("2d");function h(){d.clearRect(0,0,u.width,u.height);const m=[];for(const p of i.current)p.vy>0?p.vy+=.06:p.vy+=.03,p.vx*=.99,p.x+=p.vx,p.y+=p.vy,p.rotation+=p.rotSpeed,p.life-=p.decay,p.opacity=Math.max(0,p.life),!(p.life<=0)&&(m.push(p),d.save(),d.globalAlpha=p.opacity,d.translate(p.x,p.y),d.rotate(p.rotation),d.font=`${p.size}px serif`,d.textAlign="center",d.textBaseline="middle",d.fillText(p.emoji,0,0),d.restore());i.current=m,r.current=requestAnimationFrame(h)}return r.current=requestAnimationFrame(h),()=>cancelAnimationFrame(r.current)},[]),S.jsx("canvas",{ref:t,style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999}})}const qd="aura_is_host",z_="aura_game_code";function mA(){const[s,t]=Ve.useReducer(zy,Ph,g=>({...g,isHost:sessionStorage.getItem(qd)==="1",gameCode:localStorage.getItem(z_)??null})),[i,r]=Py();Ve.useEffect(()=>{sessionStorage.setItem(qd,s.isHost?"1":"0")},[s.isHost]);const l=Ve.useRef(s.resetCount);Ve.useEffect(()=>{s.resetCount>l.current&&s.isHost&&(sessionStorage.removeItem(qd),t({type:"clear_host"}),r("/create")),l.current=s.resetCount},[s.resetCount]),Ve.useEffect(()=>{s.gameCode&&localStorage.setItem(z_,s.gameCode)},[s.gameCode]);const u=Ve.useCallback(g=>t({type:"server_msg",msg:g}),[]),d=Ve.useCallback(()=>t({type:"ws_connected"}),[]),h=Ve.useCallback(()=>t({type:"ws_disconnected"}),[]),m=Hy(u,d,h);Ve.useEffect(()=>{(i.page==="home"||i.page==="join")&&!s.isHost&&s.myPlayerId===null&&s.gameCode&&r(`/${s.gameCode}`)},[i.page,s.gameCode,s.isHost,s.myPlayerId]);let p;if(s.isHost)s.phase==="game_over"?p=S.jsx(O_,{}):p=S.jsx(Z1,{});else if(s.myPlayerId!==null)s.phase==="game_over"?p=S.jsx(O_,{}):s.phase==="lobby"?p=S.jsx(oA,{}):s.phase==="summary"?p=S.jsx(lA,{}):p=S.jsx(eA,{});else switch(i.page){case"create":p=S.jsx(P0,{});break;case"host":p=S.jsx(P0,{});break;case"code":p=S.jsx($1,{code:i.code});break;case"join":case"home":default:p=S.jsx(Q1,{});break}return S.jsx(P_.Provider,{value:s,children:S.jsx(B_.Provider,{value:t,children:S.jsx(F_.Provider,{value:m,children:S.jsxs(I_.Provider,{value:r,children:[S.jsx(q1,{}),S.jsx(pA,{}),p]})})})})}Oy.createRoot(document.getElementById("root")).render(S.jsx(Ve.StrictMode,{children:S.jsx(mA,{})}));
