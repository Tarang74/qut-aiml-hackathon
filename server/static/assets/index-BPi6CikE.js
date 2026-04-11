(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var $f={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function my(){if(m_)return Lo;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var g_;function gy(){return g_||(g_=1,$f.exports=my()),$f.exports}var B=gy(),ed={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function _y(){if(__)return nt;__=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function v(L,ie,ye){this.props=L,this.context=ie,this.refs=S,this.updater=ye||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,ie){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ie,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=v.prototype;function N(L,ie,ye){this.props=L,this.context=ie,this.refs=S,this.updater=ye||A}var D=N.prototype=new F;D.constructor=N,R(D,v.prototype),D.isPureReactComponent=!0;var q=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function w(L,ie,ye){var Y=ye.ref;return{$$typeof:o,type:L,key:ie,ref:Y!==void 0?Y:null,props:ye}}function C(L,ie){return w(L.type,ie,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ce(L){var ie={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return ie[ye]})}var oe=/\/+/g;function ge(L,ie){return typeof L=="object"&&L!==null&&L.key!=null?ce(""+L.key):ie.toString(36)}function _e(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(ie){L.status==="pending"&&(L.status="fulfilled",L.value=ie)},function(ie){L.status==="pending"&&(L.status="rejected",L.reason=ie)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,ie,ye,Y,fe){var Ee=typeof L;(Ee==="undefined"||Ee==="boolean")&&(L=null);var xe=!1;if(L===null)xe=!0;else switch(Ee){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(L.$$typeof){case o:case t:xe=!0;break;case _:return xe=L._init,O(xe(L._payload),ie,ye,Y,fe)}}if(xe)return fe=fe(L),xe=Y===""?"."+ge(L,0):Y,q(fe)?(ye="",xe!=null&&(ye=xe.replace(oe,"$&/")+"/"),O(fe,ie,ye,"",function(at){return at})):fe!=null&&(V(fe)&&(fe=C(fe,ye+(fe.key==null||L&&L.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+xe)),ie.push(fe)),1;xe=0;var He=Y===""?".":Y+":";if(q(L))for(var Pe=0;Pe<L.length;Pe++)Y=L[Pe],Ee=He+ge(Y,Pe),xe+=O(Y,ie,ye,Ee,fe);else if(Pe=M(L),typeof Pe=="function")for(L=Pe.call(L),Pe=0;!(Y=L.next()).done;)Y=Y.value,Ee=He+ge(Y,Pe++),xe+=O(Y,ie,ye,Ee,fe);else if(Ee==="object"){if(typeof L.then=="function")return O(_e(L),ie,ye,Y,fe);throw ie=String(L),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return xe}function K(L,ie,ye){if(L==null)return L;var Y=[],fe=0;return O(L,Y,"","",function(Ee){return ie.call(ye,Ee,fe++)}),Y}function Z(L){if(L._status===-1){var ie=L._result;ie=ie(),ie.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=ie)}if(L._status===1)return L._result.default;throw L._result}var Se=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},be={map:K,forEach:function(L,ie,ye){K(L,function(){ie.apply(this,arguments)},ye)},count:function(L){var ie=0;return K(L,function(){ie++}),ie},toArray:function(L){return K(L,function(ie){return ie})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return nt.Activity=x,nt.Children=be,nt.Component=v,nt.Fragment=i,nt.Profiler=l,nt.PureComponent=N,nt.StrictMode=r,nt.Suspense=p,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,nt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},nt.cache=function(L){return function(){return L.apply(null,arguments)}},nt.cacheSignal=function(){return null},nt.cloneElement=function(L,ie,ye){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Y=R({},L.props),fe=L.key;if(ie!=null)for(Ee in ie.key!==void 0&&(fe=""+ie.key),ie)!Q.call(ie,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&ie.ref===void 0||(Y[Ee]=ie[Ee]);var Ee=arguments.length-2;if(Ee===1)Y.children=ye;else if(1<Ee){for(var xe=Array(Ee),He=0;He<Ee;He++)xe[He]=arguments[He+2];Y.children=xe}return w(L.type,fe,Y)},nt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},nt.createElement=function(L,ie,ye){var Y,fe={},Ee=null;if(ie!=null)for(Y in ie.key!==void 0&&(Ee=""+ie.key),ie)Q.call(ie,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(fe[Y]=ie[Y]);var xe=arguments.length-2;if(xe===1)fe.children=ye;else if(1<xe){for(var He=Array(xe),Pe=0;Pe<xe;Pe++)He[Pe]=arguments[Pe+2];fe.children=He}if(L&&L.defaultProps)for(Y in xe=L.defaultProps,xe)fe[Y]===void 0&&(fe[Y]=xe[Y]);return w(L,Ee,fe)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(L){return{$$typeof:h,render:L}},nt.isValidElement=V,nt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Z}},nt.memo=function(L,ie){return{$$typeof:m,type:L,compare:ie===void 0?null:ie}},nt.startTransition=function(L){var ie=z.T,ye={};z.T=ye;try{var Y=L(),fe=z.S;fe!==null&&fe(ye,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(G,Se)}catch(Ee){Se(Ee)}finally{ie!==null&&ye.types!==null&&(ie.types=ye.types),z.T=ie}},nt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},nt.use=function(L){return z.H.use(L)},nt.useActionState=function(L,ie,ye){return z.H.useActionState(L,ie,ye)},nt.useCallback=function(L,ie){return z.H.useCallback(L,ie)},nt.useContext=function(L){return z.H.useContext(L)},nt.useDebugValue=function(){},nt.useDeferredValue=function(L,ie){return z.H.useDeferredValue(L,ie)},nt.useEffect=function(L,ie){return z.H.useEffect(L,ie)},nt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},nt.useId=function(){return z.H.useId()},nt.useImperativeHandle=function(L,ie,ye){return z.H.useImperativeHandle(L,ie,ye)},nt.useInsertionEffect=function(L,ie){return z.H.useInsertionEffect(L,ie)},nt.useLayoutEffect=function(L,ie){return z.H.useLayoutEffect(L,ie)},nt.useMemo=function(L,ie){return z.H.useMemo(L,ie)},nt.useOptimistic=function(L,ie){return z.H.useOptimistic(L,ie)},nt.useReducer=function(L,ie,ye){return z.H.useReducer(L,ie,ye)},nt.useRef=function(L){return z.H.useRef(L)},nt.useState=function(L){return z.H.useState(L)},nt.useSyncExternalStore=function(L,ie,ye){return z.H.useSyncExternalStore(L,ie,ye)},nt.useTransition=function(){return z.H.useTransition()},nt.version="19.2.5",nt}var v_;function Th(){return v_||(v_=1,ed.exports=_y()),ed.exports}var ot=Th(),td={exports:{}},No={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function vy(){return x_||(x_=1,(function(o){function t(O,K){var Z=O.length;O.push(K);e:for(;0<Z;){var Se=Z-1>>>1,be=O[Se];if(0<l(be,K))O[Se]=K,O[Z]=be,Z=Se;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],Z=O.pop();if(Z!==K){O[0]=Z;e:for(var Se=0,be=O.length,L=be>>>1;Se<L;){var ie=2*(Se+1)-1,ye=O[ie],Y=ie+1,fe=O[Y];if(0>l(ye,Z))Y<be&&0>l(fe,ye)?(O[Se]=fe,O[Y]=Z,Se=Y):(O[Se]=ye,O[ie]=Z,Se=ie);else if(Y<be&&0>l(fe,Z))O[Se]=fe,O[Y]=Z,Se=Y;else break e}}return K}function l(O,K){var Z=O.sortIndex-K.sortIndex;return Z!==0?Z:O.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,x=null,y=3,M=!1,A=!1,R=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=O)r(m),K.sortIndex=K.expirationTime,t(p,K);else break;K=i(m)}}function q(O){if(R=!1,D(O),!A)if(i(p)!==null)A=!0,G||(G=!0,ce());else{var K=i(m);K!==null&&_e(q,K.startTime-O)}}var G=!1,z=-1,Q=5,w=-1;function C(){return S?!0:!(o.unstable_now()-w<Q)}function V(){if(S=!1,G){var O=o.unstable_now();w=O;var K=!0;try{e:{A=!1,R&&(R=!1,F(z),z=-1),M=!0;var Z=y;try{t:{for(D(O),x=i(p);x!==null&&!(x.expirationTime>O&&C());){var Se=x.callback;if(typeof Se=="function"){x.callback=null,y=x.priorityLevel;var be=Se(x.expirationTime<=O);if(O=o.unstable_now(),typeof be=="function"){x.callback=be,D(O),K=!0;break t}x===i(p)&&r(p),D(O)}else r(p);x=i(p)}if(x!==null)K=!0;else{var L=i(m);L!==null&&_e(q,L.startTime-O),K=!1}}break e}finally{x=null,y=Z,M=!1}K=void 0}}finally{K?ce():G=!1}}}var ce;if(typeof N=="function")ce=function(){N(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ge=oe.port2;oe.port1.onmessage=V,ce=function(){ge.postMessage(null)}}else ce=function(){v(V,0)};function _e(O,K){z=v(function(){O(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Z=y;y=K;try{return O()}finally{y=Z}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=y;y=O;try{return K()}finally{y=Z}},o.unstable_scheduleCallback=function(O,K,Z){var Se=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Se+Z:Se):Z=Se,O){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,O={id:_++,callback:K,priorityLevel:O,startTime:Z,expirationTime:be,sortIndex:-1},Z>Se?(O.sortIndex=Z,t(m,O),i(p)===null&&O===i(m)&&(R?(F(z),z=-1):R=!0,_e(q,Z-Se))):(O.sortIndex=be,t(p,O),A||M||(A=!0,G||(G=!0,ce()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var K=y;return function(){var Z=y;y=K;try{return O.apply(this,arguments)}finally{y=Z}}}})(id)),id}var y_;function xy(){return y_||(y_=1,nd.exports=vy()),nd.exports}var ad={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function yy(){if(S_)return wn;S_=1;var o=Th();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,_)},wn.flushSync=function(p){var m=d.T,_=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=_,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,x=h(_,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):_==="script"&&r.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,x=h(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,_){return d.H.useFormState(p,m,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.5",wn}var M_;function Sy(){if(M_)return ad.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ad.exports=yy(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function My(){if(E_)return No;E_=1;var o=xy(),t=Th(),i=Sy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case q:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ge(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return ge(e(n))}catch{}}return null}var _e=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function L(e){return{current:e}}function ie(e){0>be||(e.current=Se[be],Se[be]=null,be--)}function ye(e,n){be++,Se[be]=e.current,e.current=n}var Y=L(null),fe=L(null),Ee=L(null),xe=L(null);function He(e,n){switch(ye(Ee,n),ye(fe,e),ye(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Fg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Fg(n),e=Ig(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ie(Y),ye(Y,e)}function Pe(){ie(Y),ie(fe),ie(Ee)}function at(e){e.memoizedState!==null&&ye(xe,e);var n=Y.current,a=Ig(n,e.type);n!==a&&(ye(fe,e),ye(Y,a))}function zt(e){fe.current===e&&(ie(Y),ie(fe)),xe.current===e&&(ie(xe),Co._currentValue=Z)}var dt,Yt;function I(e){if(dt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);dt=n&&n[1]||"",Yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+Yt}var Rn=!1;function ft(e,n){if(!e||Rn)return"";Rn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(se){var ee=se}Reflect.construct(e,[],me)}else{try{me.call()}catch(se){ee=se}e.call(me.prototype)}}else{try{throw Error()}catch(se){ee=se}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(se){if(se&&ee&&typeof se.stack=="string")return[se.stack,ee.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var P=g.split(`
`),$=E.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===$.length)for(s=P.length-1,c=$.length-1;1<=s&&0<=c&&P[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==$[c]){var ue=`
`+P[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=c);break}}}finally{Rn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?I(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ft(e.type,!1);case 11:return ft(e.type.render,!1);case 1:return ft(e.type,!0);case 31:return I("Activity");default:return""}}function We(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Lt=Object.prototype.hasOwnProperty,Xe=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,te=o.unstable_requestPaint,de=o.unstable_now,Me=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Ve=o.unstable_UserBlockingPriority,we=o.unstable_NormalPriority,Be=o.unstable_LowPriority,gt=o.unstable_IdlePriority,Ae=o.log,Fe=o.unstable_setDisableYieldValue,qe=null,ke=null;function Oe(e){if(typeof Ae=="function"&&Fe(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(qe,e)}catch{}}var Qe=Math.clz32?Math.clz32:X,rt=Math.log,Pt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(rt(e)/Pt|0)|0}var Re=256,le=262144,ve=4194304;function Ce(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function De(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Ce(s):(g&=E,g!==0?c=Ce(g):a||(a=E&~e,a!==0&&(c=Ce(a))))):(E=s&~f,E!==0?c=Ce(E):g!==0?c=Ce(g):a||(a=s&~e,a!==0&&(c=Ce(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Je(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var e=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var ue=31-Qe(a),me=1<<ue;E[ue]=0,P[ue]=-1;var ee=$[ue];if(ee!==null)for($[ue]=null,ue=0;ue<ee.length;ue++){var se=ee[ue];se!==null&&(se.lane&=-536870913)}a&=~me}s!==0&&Is(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Qe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Hs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Qe(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Di(e,n){var a=n&-n;return a=(a&42)!==0?1:Qa(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function Ja(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var _i=Math.random().toString(36).slice(2),Qt="__reactFiber$"+_i,yn="__reactProps$"+_i,Fi="__reactContainer$"+_i,Vs="__reactEvents$"+_i,qc="__reactListeners$"+_i,jc="__reactHandles$"+_i,Yo="__reactResources$"+_i,$a="__reactMarker$"+_i;function ks(e){delete e[Qt],delete e[yn],delete e[Vs],delete e[qc],delete e[jc]}function b(e){var n=e[Qt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[Qt])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function W(e){if(e=e[Qt]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ne(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ae(e){var n=e[Yo];return n||(n=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[$a]=!0}var Te=new Set,Ue={};function Ne(e,n){ze(e,n),ze(e+"Capture",n)}function ze(e,n){for(Ue[e]=n,e=0;e<n.length;e++)Te.add(n[e])}var $e=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},je={};function xt(e){return Lt.call(je,e)?!0:Lt.call(et,e)?!1:$e.test(e)?je[e]=!0:(et[e]=!0,!1)}function yt(e,n,a){if(xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function At(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ze(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Et(e){if(!e._valueTracker){var n=Ze(e)?"checked":"value";e._valueTracker=dn(e,n,""+e[n])}}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ze(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function gn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(e,n,a,s,c,f,g,E){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+tt(n)):e.value!==""+tt(n)&&(e.value=""+tt(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,g,tt(n)):a!=null?Cn(e,g,tt(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+tt(E):e.removeAttribute("name")}function Nn(e,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Et(e);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Et(e)}function Cn(e,n,a){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jt(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+tt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+tt(a):""}function Ur(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(_e(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=tt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Et(e)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||uv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ph(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&zh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&zh(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return dv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Nr=null;function Bh(e){var n=W(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[yn]||null;if(!c)throw Error(r(90));Bt(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Pn(s)}break e;case"textarea":Sn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Jt(e,!!a.multiple,n,!1)}}}var Qc=!1;function Fh(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var s=e(n);return s}finally{if(Qc=!1,(Lr!==null||Nr!==null)&&(Pl(),Lr&&(n=Lr,e=Nr,Nr=Lr=null,Bh(n),e)))for(n=0;n<e.length;n++)Bh(e[n])}}function Xs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Hi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Jc=!1}var ma=null,$c=null,Ko=null;function Ih(){if(Ko)return Ko;var e,n=$c,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Ko=c.slice(e,1<s?1-s:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Hh(){return!1}function Fn(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Hh,this.isPropagationStopped=Hh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Fn(er),qs=x({},er,{view:0,detail:0}),hv=Fn(qs),eu,tu,js,el=x({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(eu=e.screenX-js.screenX,tu=e.screenY-js.screenY):tu=eu=0,js=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Gh=Fn(el),pv=x({},el,{dataTransfer:0}),mv=Fn(pv),gv=x({},qs,{relatedTarget:0}),nu=Fn(gv),_v=x({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Fn(_v),xv=x({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=Fn(xv),Sv=x({},er,{data:0}),Vh=Fn(Sv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tv[e])?!!n[e]:!1}function iu(){return bv}var Av=x({},qs,{key:function(e){if(e.key){var n=Mv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rv=Fn(Av),Cv=x({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=Fn(Cv),wv=x({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Dv=Fn(wv),Uv=x({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Fn(Uv),Nv=x({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Fn(Nv),zv=x({},er,{newState:0,oldState:0}),Pv=Fn(zv),Bv=[9,13,27,32],au=Hi&&"CompositionEvent"in window,Ys=null;Hi&&"documentMode"in document&&(Ys=document.documentMode);var Fv=Hi&&"TextEvent"in window&&!Ys,Xh=Hi&&(!au||Ys&&8<Ys&&11>=Ys),Wh=" ",qh=!1;function jh(e,n){switch(e){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function Iv(e,n){switch(e){case"compositionend":return Yh(n);case"keypress":return n.which!==32?null:(qh=!0,Wh);case"textInput":return e=n.data,e===Wh&&qh?null:e;default:return null}}function Hv(e,n){if(Or)return e==="compositionend"||!au&&jh(e,n)?(e=Ih(),Ko=$c=ma=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xh&&n.locale!=="ko"?null:n.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gv[e.type]:n==="textarea"}function Kh(e,n,a,s){Lr?Nr?Nr.push(s):Nr=[s]:Lr=s,n=kl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Zs=null,Ks=null;function Vv(e){Lg(e,0)}function tl(e){var n=ne(e);if(Pn(n))return e}function Qh(e,n){if(e==="change")return n}var Jh=!1;if(Hi){var ru;if(Hi){var su="oninput"in document;if(!su){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),su=typeof $h.oninput=="function"}ru=su}else ru=!1;Jh=ru&&(!document.documentMode||9<document.documentMode)}function ep(){Zs&&(Zs.detachEvent("onpropertychange",tp),Ks=Zs=null)}function tp(e){if(e.propertyName==="value"&&tl(Ks)){var n=[];Kh(n,Ks,e,Kc(e)),Fh(Vv,n)}}function kv(e,n,a){e==="focusin"?(ep(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",tp)):e==="focusout"&&ep()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Ks)}function Wv(e,n){if(e==="click")return tl(n)}function qv(e,n){if(e==="input"||e==="change")return tl(n)}function jv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:jv;function Qs(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Lt.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ip(e,n){var a=np(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=np(a)}}function ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vi(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Yv=Hi&&"documentMode"in document&&11>=document.documentMode,zr=null,lu=null,Js=null,cu=!1;function sp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||zr==null||zr!==vi(s)||(s=zr,"selectionStart"in s&&ou(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Js&&Qs(Js,s)||(Js=s,s=kl(lu,"onSelect"),0<s.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=zr)))}function tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Pr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},uu={},op={};Hi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function nr(e){if(uu[e])return uu[e];if(!Pr[e])return e;var n=Pr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return uu[e]=n[a];return e}var lp=nr("animationend"),cp=nr("animationiteration"),up=nr("animationstart"),Zv=nr("transitionrun"),Kv=nr("transitionstart"),Qv=nr("transitioncancel"),fp=nr("transitionend"),dp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function xi(e,n){dp.set(e,n),Ne(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Br=0,du=0;function il(){for(var e=Br,n=du=Br=0;n<e;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&hp(a,c,f)}}function al(e,n,a,s){ri[Br++]=e,ri[Br++]=n,ri[Br++]=a,ri[Br++]=s,du|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function hu(e,n,a,s){return al(e,n,a,s),rl(e)}function ir(e,n){return al(e,null,null,n),rl(e)}function hp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Qe(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<So)throw So=0,Ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fr={};function Jv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new Jv(e,n,a,s)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")pu(e)&&(g=1);else if(typeof e=="string")g=iy(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Kn(31,a,n,c),e.elementType=w,e.lanes=f,e;case R:return ar(a.children,c,f,n);case S:g=8,c|=24;break;case v:return e=Kn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case q:return e=Kn(13,a,n,c),e.elementType=q,e.lanes=f,e;case G:return e=Kn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:g=10;break e;case F:g=9;break e;case D:g=11;break e;case z:g=14;break e;case Q:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ar(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function mu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function mp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function gu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var gp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=gp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},gp.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var Ir=[],Hr=0,ol=null,$s=0,oi=[],li=0,ga=null,Ui=1,Li="";function Vi(e,n){Ir[Hr++]=$s,Ir[Hr++]=ol,ol=e,$s=n}function _p(e,n,a){oi[li++]=Ui,oi[li++]=Li,oi[li++]=ga,ga=e;var s=Ui;e=Li;var c=32-Qe(s)-1;s&=~(1<<c),a+=1;var f=32-Qe(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ui=1<<32-Qe(n)+c|a<<c|s,Li=f+e}else Ui=1<<f|a<<c|s,Li=e}function _u(e){e.return!==null&&(Vi(e,1),_p(e,1,0))}function vu(e){for(;e===ol;)ol=Ir[--Hr],Ir[Hr]=null,$s=Ir[--Hr],Ir[Hr]=null;for(;e===ga;)ga=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function vp(e,n){oi[li++]=Ui,oi[li++]=Li,oi[li++]=ga,Ui=n.id,Li=n.overflow,ga=e}var Mn=null,Wt=null,St=!1,_a=null,ci=!1,xu=Error(r(519));function va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(si(n,e)),xu}function xp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Qt]=e,n[yn]=s,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)pt(Eo[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Nn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),Ur(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Pg(n.textContent,a)?(s.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),s.onScroll!=null&&pt("scroll",n),s.onScrollEnd!=null&&pt("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||va(e,!0)}function yp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Mn=Mn.return}}function Gr(e){if(e!==Mn)return!1;if(!St)return yp(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&Wt&&va(e),yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=Wg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=Wg(e)}else n===27?(n=Wt,La(e.type)?(e=kf,kf=null,Wt=e):Wt=n):Wt=Mn?fi(e.stateNode.nextSibling):null;return!0}function rr(){Wt=Mn=null,St=!1}function yu(){var e=_a;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),_a=null),e}function eo(e){_a===null?_a=[e]:_a.push(e)}var Su=L(null),sr=null,ki=null;function xa(e,n,a){ye(Su,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Su.current,ie(Su)}function Mu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Mu(f.return,a,e),s||(g=null);break e}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Mu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Vr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Zn(c.pendingProps.value,g.value)||(e!==null?e.push(E):e=[E])}}else if(c===xe.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}c=c.return}e!==null&&Eu(n,e,a,s),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Sp(sr,e)}function cl(e,n){return sr===null&&or(e),Sp(e,n)}function Sp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var $v=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ex=o.unstable_scheduleCallback,tx=o.unstable_NormalPriority,sn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new $v,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&ex(tx,function(){e.controller.abort()})}var no=null,bu=0,kr=0,Xr=null;function nx(e,n){if(no===null){var a=no=[];bu=0,kr=wf(),Xr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return bu++,n.then(Mp,Mp),n}function Mp(){if(--bu===0&&no!==null){Xr!==null&&(Xr.status="fulfilled");var e=no;no=null,kr=0,Xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ix(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ep=O.S;O.S=function(e,n){sg=de(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nx(e,n),Ep!==null&&Ep(e,n)};var lr=L(null);function Au(){var e=lr.current;return e!==null?e:Vt.pooledCache}function ul(e,n){n===null?ye(lr,lr.current):ye(lr,n.pool)}function Tp(){var e=Au();return e===null?null:{parent:sn._currentValue,pool:e}}var Wr=Error(r(460)),Ru=Error(r(474)),fl=Error(r(542)),dl={then:function(){}};function bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ap(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=Vt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cp(e),e}throw ur=n,Wr}}function cr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ur=a,Wr):a}}var ur=null;function Rp(){if(ur===null)throw Error(r(459));var e=ur;return ur=null,e}function Cp(e){if(e===Wr||e===fl)throw Error(r(483))}var qr=null,io=0;function hl(e){var n=io;return io+=1,qr===null&&(qr=[]),Ap(qr,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wp(e){function n(j,H){if(e){var J=j.deletions;J===null?(j.deletions=[H],j.flags|=16):J.push(H)}}function a(j,H){if(!e)return null;for(;H!==null;)n(j,H),H=H.sibling;return null}function s(j){for(var H=new Map;j!==null;)j.key!==null?H.set(j.key,j):H.set(j.index,j),j=j.sibling;return H}function c(j,H){return j=Gi(j,H),j.index=0,j.sibling=null,j}function f(j,H,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<H?(j.flags|=67108866,H):J):(j.flags|=67108866,H)):(j.flags|=1048576,H)}function g(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function E(j,H,J,he){return H===null||H.tag!==6?(H=mu(J,j.mode,he),H.return=j,H):(H=c(H,J),H.return=j,H)}function P(j,H,J,he){var Ye=J.type;return Ye===R?ue(j,H,J.props.children,he,J.key):H!==null&&(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===Q&&cr(Ye)===H.type)?(H=c(H,J.props),ao(H,J),H.return=j,H):(H=sl(J.type,J.key,J.props,null,j.mode,he),ao(H,J),H.return=j,H)}function $(j,H,J,he){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=gu(J,j.mode,he),H.return=j,H):(H=c(H,J.children||[]),H.return=j,H)}function ue(j,H,J,he,Ye){return H===null||H.tag!==7?(H=ar(J,j.mode,he,Ye),H.return=j,H):(H=c(H,J),H.return=j,H)}function me(j,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=mu(""+H,j.mode,J),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return J=sl(H.type,H.key,H.props,null,j.mode,J),ao(J,H),J.return=j,J;case A:return H=gu(H,j.mode,J),H.return=j,H;case Q:return H=cr(H),me(j,H,J)}if(_e(H)||ce(H))return H=ar(H,j.mode,J,null),H.return=j,H;if(typeof H.then=="function")return me(j,hl(H),J);if(H.$$typeof===N)return me(j,cl(j,H),J);pl(j,H)}return null}function ee(j,H,J,he){var Ye=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ye!==null?null:E(j,H,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Ye?P(j,H,J,he):null;case A:return J.key===Ye?$(j,H,J,he):null;case Q:return J=cr(J),ee(j,H,J,he)}if(_e(J)||ce(J))return Ye!==null?null:ue(j,H,J,he,null);if(typeof J.then=="function")return ee(j,H,hl(J),he);if(J.$$typeof===N)return ee(j,H,cl(j,J),he);pl(j,J)}return null}function se(j,H,J,he,Ye){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return j=j.get(J)||null,E(H,j,""+he,Ye);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case M:return j=j.get(he.key===null?J:he.key)||null,P(H,j,he,Ye);case A:return j=j.get(he.key===null?J:he.key)||null,$(H,j,he,Ye);case Q:return he=cr(he),se(j,H,J,he,Ye)}if(_e(he)||ce(he))return j=j.get(J)||null,ue(H,j,he,Ye,null);if(typeof he.then=="function")return se(j,H,J,hl(he),Ye);if(he.$$typeof===N)return se(j,H,J,cl(H,he),Ye);pl(H,he)}return null}function Ie(j,H,J,he){for(var Ye=null,Rt=null,Ge=H,lt=H=0,vt=null;Ge!==null&&lt<J.length;lt++){Ge.index>lt?(vt=Ge,Ge=null):vt=Ge.sibling;var Ct=ee(j,Ge,J[lt],he);if(Ct===null){Ge===null&&(Ge=vt);break}e&&Ge&&Ct.alternate===null&&n(j,Ge),H=f(Ct,H,lt),Rt===null?Ye=Ct:Rt.sibling=Ct,Rt=Ct,Ge=vt}if(lt===J.length)return a(j,Ge),St&&Vi(j,lt),Ye;if(Ge===null){for(;lt<J.length;lt++)Ge=me(j,J[lt],he),Ge!==null&&(H=f(Ge,H,lt),Rt===null?Ye=Ge:Rt.sibling=Ge,Rt=Ge);return St&&Vi(j,lt),Ye}for(Ge=s(Ge);lt<J.length;lt++)vt=se(Ge,j,lt,J[lt],he),vt!==null&&(e&&vt.alternate!==null&&Ge.delete(vt.key===null?lt:vt.key),H=f(vt,H,lt),Rt===null?Ye=vt:Rt.sibling=vt,Rt=vt);return e&&Ge.forEach(function(Ba){return n(j,Ba)}),St&&Vi(j,lt),Ye}function Ke(j,H,J,he){if(J==null)throw Error(r(151));for(var Ye=null,Rt=null,Ge=H,lt=H=0,vt=null,Ct=J.next();Ge!==null&&!Ct.done;lt++,Ct=J.next()){Ge.index>lt?(vt=Ge,Ge=null):vt=Ge.sibling;var Ba=ee(j,Ge,Ct.value,he);if(Ba===null){Ge===null&&(Ge=vt);break}e&&Ge&&Ba.alternate===null&&n(j,Ge),H=f(Ba,H,lt),Rt===null?Ye=Ba:Rt.sibling=Ba,Rt=Ba,Ge=vt}if(Ct.done)return a(j,Ge),St&&Vi(j,lt),Ye;if(Ge===null){for(;!Ct.done;lt++,Ct=J.next())Ct=me(j,Ct.value,he),Ct!==null&&(H=f(Ct,H,lt),Rt===null?Ye=Ct:Rt.sibling=Ct,Rt=Ct);return St&&Vi(j,lt),Ye}for(Ge=s(Ge);!Ct.done;lt++,Ct=J.next())Ct=se(Ge,j,lt,Ct.value,he),Ct!==null&&(e&&Ct.alternate!==null&&Ge.delete(Ct.key===null?lt:Ct.key),H=f(Ct,H,lt),Rt===null?Ye=Ct:Rt.sibling=Ct,Rt=Ct);return e&&Ge.forEach(function(py){return n(j,py)}),St&&Vi(j,lt),Ye}function Ht(j,H,J,he){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var Ye=J.key;H!==null;){if(H.key===Ye){if(Ye=J.type,Ye===R){if(H.tag===7){a(j,H.sibling),he=c(H,J.props.children),he.return=j,j=he;break e}}else if(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===Q&&cr(Ye)===H.type){a(j,H.sibling),he=c(H,J.props),ao(he,J),he.return=j,j=he;break e}a(j,H);break}else n(j,H);H=H.sibling}J.type===R?(he=ar(J.props.children,j.mode,he,J.key),he.return=j,j=he):(he=sl(J.type,J.key,J.props,null,j.mode,he),ao(he,J),he.return=j,j=he)}return g(j);case A:e:{for(Ye=J.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(j,H.sibling),he=c(H,J.children||[]),he.return=j,j=he;break e}else{a(j,H);break}else n(j,H);H=H.sibling}he=gu(J,j.mode,he),he.return=j,j=he}return g(j);case Q:return J=cr(J),Ht(j,H,J,he)}if(_e(J))return Ie(j,H,J,he);if(ce(J)){if(Ye=ce(J),typeof Ye!="function")throw Error(r(150));return J=Ye.call(J),Ke(j,H,J,he)}if(typeof J.then=="function")return Ht(j,H,hl(J),he);if(J.$$typeof===N)return Ht(j,H,cl(j,J),he);pl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(j,H.sibling),he=c(H,J),he.return=j,j=he):(a(j,H),he=mu(J,j.mode,he),he.return=j,j=he),g(j)):a(j,H)}return function(j,H,J,he){try{io=0;var Ye=Ht(j,H,J,he);return qr=null,Ye}catch(Ge){if(Ge===Wr||Ge===fl)throw Ge;var Rt=Kn(29,Ge,null,j.mode);return Rt.lanes=he,Rt.return=j,Rt}finally{}}}var fr=wp(!0),Dp=wp(!1),ya=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Dt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=rl(e),hp(e,null,a),n}return al(e,s,n,a),rl(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Hs(e,a)}}function Du(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uu=!1;function so(){if(Uu){var e=Xr;if(e!==null)throw e}}function oo(e,n,a,s){Uu=!1;var c=e.updateQueue;ya=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,$=P.next;P.next=null,g===null?f=$:g.next=$,g=P;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,E=ue.lastBaseUpdate,E!==g&&(E===null?ue.firstBaseUpdate=$:E.next=$,ue.lastBaseUpdate=P))}if(f!==null){var me=c.baseState;g=0,ue=$=P=null,E=f;do{var ee=E.lane&-536870913,se=ee!==E.lane;if(se?(_t&ee)===ee:(s&ee)===ee){ee!==0&&ee===kr&&(Uu=!0),ue!==null&&(ue=ue.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ie=e,Ke=E;ee=n;var Ht=a;switch(Ke.tag){case 1:if(Ie=Ke.payload,typeof Ie=="function"){me=Ie.call(Ht,me,ee);break e}me=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=Ke.payload,ee=typeof Ie=="function"?Ie.call(Ht,me,ee):Ie,ee==null)break e;me=x({},me,ee);break e;case 2:ya=!0}}ee=E.callback,ee!==null&&(e.flags|=64,se&&(e.flags|=8192),se=c.callbacks,se===null?c.callbacks=[ee]:se.push(ee))}else se={lane:ee,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ue===null?($=ue=se,P=me):ue=ue.next=se,g|=ee;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;se=E,E=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);ue===null&&(P=me),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),Ra|=g,e.lanes=g,e.memoizedState=me}}function Up(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Lp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Up(a[e],n)}var jr=L(null),ml=L(0);function Np(e,n){e=$i,ye(ml,e),ye(jr,n),$i=e|n.baseLanes}function Lu(){ye(ml,$i),ye(jr,jr.current)}function Nu(){$i=ml.current,ie(jr),ie(ml)}var Qn=L(null),ui=null;function Ea(e){var n=e.alternate;ye(tn,tn.current&1),ye(Qn,e),ui===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(ui=e)}function Ou(e){ye(tn,tn.current),ye(Qn,e),ui===null&&(ui=e)}function Op(e){e.tag===22?(ye(tn,tn.current),ye(Qn,e),ui===null&&(ui=e)):Ta()}function Ta(){ye(tn,tn.current),ye(Qn,Qn.current)}function Jn(e){ie(Qn),ui===e&&(ui=null),ie(tn)}var tn=L(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,st=null,Ft=null,on=null,_l=!1,Yr=!1,dr=!1,vl=0,lo=0,Zr=null,ax=0;function $t(){throw Error(r(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,s,c,f){return Wi=f,st=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?_m:Qu,dr=!1,f=a(s,c),dr=!1,Yr&&(f=Pp(n,a,s,c)),zp(e),f}function zp(e){O.H=fo;var n=Ft!==null&&Ft.next!==null;if(Wi=0,on=Ft=st=null,_l=!1,lo=0,Zr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&ll(e)&&(ln=!0))}function Pp(e,n,a,s){st=e;var c=0;do{if(Yr&&(Zr=null),lo=0,Yr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=vm,f=n(a,s)}while(Yr);return f}function rx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(st.flags|=1024),n}function Bu(){var e=vl!==0;return vl=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Iu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}Wi=0,on=Ft=st=null,Yr=!1,lo=vl=0,Zr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?st.memoizedState=on=e:on=on.next=e,on}function nn(){if(Ft===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=on===null?st.memoizedState:on.next;if(n!==null)on=n,Ft=e;else{if(e===null)throw st.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},on===null?st.memoizedState=on=e:on=on.next=e}return on}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,Zr===null&&(Zr=[]),e=Ap(Zr,e,n),n=st,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?_m:Qu),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===N)return En(e)}throw Error(r(438,String(e)))}function Hu(e){var n=null,a=st.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=st.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xl(),st.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=nn();return Gu(n,Ft,e)}function Gu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=g=null,P=null,$=n,ue=!1;do{var me=$.lane&-536870913;if(me!==$.lane?(_t&me)===me:(Wi&me)===me){var ee=$.revertLane;if(ee===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),me===kr&&(ue=!0);else if((Wi&ee)===ee){$=$.next,ee===kr&&(ue=!0);continue}else me={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=me,g=f):P=P.next=me,st.lanes|=ee,Ra|=ee;me=$.action,dr&&a(f,me),f=$.hasEagerState?$.eagerState:a(f,me)}else ee={lane:me,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=ee,g=f):P=P.next=ee,st.lanes|=me,Ra|=me;$=$.next}while($!==null&&$!==n);if(P===null?g=f:P.next=E,!Zn(f,e.memoizedState)&&(ln=!0,ue&&(a=Xr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Vu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Zn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Bp(e,n,a){var s=st,c=nn(),f=St;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Zn((Ft||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Wu(Hp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Kr(9,{destroy:void 0},Ip.bind(null,s,c,a,n),null),Vt===null)throw Error(r(349));f||(Wi&127)!==0||Fp(s,n,a)}return a}function Fp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=st.updateQueue,n===null?(n=xl(),st.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ip(e,n,a,s){n.value=a,n.getSnapshot=s,Gp(n)&&Vp(e)}function Hp(e,n,a){return a(function(){Gp(n)&&Vp(e)})}function Gp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function Vp(e){var n=ir(e,2);n!==null&&kn(n,e,2)}function ku(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),dr){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function kp(e,n,a,s){return e.baseState=a,Gu(e,Ft,typeof s=="function"?s:qi)}function sx(e,n,a,s,c){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var E=a(c,s),P=O.S;P!==null&&P(g,E),Wp(e,n,E)}catch($){Xu(e,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),Wp(e,n,f)}catch($){Xu(e,n,$)}}function Wp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qp(e,n,s)},function(s){return Xu(e,n,s)}):qp(e,n,a)}function qp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xp(e,a)))}function Xu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==s)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Yp(e,n){return n}function Zp(e,n){if(St){var a=Vt.formState;if(a!==null){e:{var s=st;if(St){if(Wt){t:{for(var c=Wt,f=ci;c.nodeType!==8;){if(!f){c=null;break t}if(c=fi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=fi(c.nextSibling),s=c.data==="F!";break e}}va(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=s,a=pm.bind(null,st,s),s.dispatch=a,s=ku(!1),f=Ku.bind(null,st,!1,s.queue),s=On(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=sx.bind(null,st,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Kp(e){var n=nn();return Qp(n,Ft,e)}function Qp(e,n,a){if(n=Gu(e,n,Yp)[0],e=Sl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=co(n)}catch(g){throw g===Wr?fl:g}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(st.flags|=2048,Kr(9,{destroy:void 0},ox.bind(null,c,a),null)),[s,f,e]}function ox(e,n){e.action=n}function Jp(e){var n=nn(),a=Ft;if(a!==null)return Qp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Kr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=st.updateQueue,n===null&&(n=xl(),st.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function $p(){return nn().memoizedState}function Ml(e,n,a,s){var c=On();st.flags|=e,c.memoizedState=Kr(1|n,{destroy:void 0},a,s===void 0?null:s)}function El(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&zu(s,Ft.memoizedState.deps)?c.memoizedState=Kr(n,f,a,s):(st.flags|=e,c.memoizedState=Kr(1|n,f,a,s))}function em(e,n){Ml(8390656,8,e,n)}function Wu(e,n){El(2048,8,e,n)}function lx(e){st.flags|=4;var n=st.updateQueue;if(n===null)n=xl(),st.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function tm(e){var n=nn().memoizedState;return lx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function nm(e,n){return El(4,2,e,n)}function im(e,n){return El(4,4,e,n)}function am(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rm(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,am.bind(null,n,e),a)}function qu(){}function sm(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&zu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function om(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&zu(n,s[1]))return s[0];if(s=e(),dr){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[s,n],s}function ju(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=lg(),st.lanes|=e,Ra|=e,a)}function lm(e,n,a,s){return Zn(a,n)?a:jr.current!==null?(e=ju(e,a,s),Zn(e,n)||(ln=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(_t&261930)===0?(ln=!0,e.memoizedState=a):(e=lg(),st.lanes|=e,Ra|=e,n)}function cm(e,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var g=O.T,E={};O.T=E,Ku(e,!1,n,a);try{var P=c(),$=O.S;if($!==null&&$(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ue=ix(P,s);uo(e,n,ue,ti(e))}else uo(e,n,s,ti(e))}catch(me){uo(e,n,{then:function(){},status:"rejected",reason:me},ti())}finally{K.p=f,g!==null&&E.types!==null&&(g.types=E.types),O.T=g}}function cx(){}function Yu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=um(e).queue;cm(e,c,n,Z,a===null?cx:function(){return fm(e),a(s)})}function um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fm(e){var n=um(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ti())}function Zu(){return En(Co)}function dm(){return nn().memoizedState}function hm(){return nn().memoizedState}function ux(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Sa(a);var s=Ma(n,e,a);s!==null&&(kn(s,n,a),ro(s,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function fx(e,n,a){var s=ti();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?mm(n,a):(a=hu(e,n,a,s),a!==null&&(kn(a,e,s),gm(a,n,s)))}function pm(e,n,a){var s=ti();uo(e,n,a,s)}function uo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))mm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Zn(E,g))return al(e,n,c,0),Vt===null&&il(),!1}catch{}finally{}if(a=hu(e,n,c,s),a!==null)return kn(a,e,s),gm(a,n,s),!0}return!1}function Ku(e,n,a,s){if(s={lane:2,revertLane:wf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=hu(e,a,s,2),n!==null&&kn(n,e,2)}function Tl(e){var n=e.alternate;return e===st||n!==null&&n===st}function mm(e,n){Yr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function gm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Hs(e,a)}}var fo={readContext:En,use:yl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};fo.useEffectEvent=$t;var _m={readContext:En,use:yl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,am.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var s=e();if(dr){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=On();if(a!==void 0){var c=a(n);if(dr){Oe(!0);try{a(n)}finally{Oe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=fx.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=pm.bind(null,st,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=On();return ju(a,e,n)},useTransition:function(){var e=ku(!1);return e=cm.bind(null,st,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=st,c=On();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Vt===null)throw Error(r(349));(_t&127)!==0||Fp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,em(Hp.bind(null,s,f,e),[e]),s.flags|=2048,Kr(9,{destroy:void 0},Ip.bind(null,s,f,a,n),null),a},useId:function(){var e=On(),n=Vt.identifierPrefix;if(St){var a=Li,s=Ui;a=(s&~(1<<32-Qe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ax++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:Zp,useActionState:Zp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,st,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return On().memoizedState=ux.bind(null,st)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:En,use:yl,useCallback:sm,useContext:En,useEffect:Wu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Sl,useRef:$p,useState:function(){return Sl(qi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=nn();return lm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Sl(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:Zu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,n){var a=nn();return kp(a,Ft,e,n)},useMemoCache:Hu,useCacheRefresh:hm};Qu.useEffectEvent=tm;var vm={readContext:En,use:yl,useCallback:sm,useContext:En,useEffect:Wu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Vu,useRef:$p,useState:function(){return Vu(qi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=nn();return Ft===null?ju(a,e,n):lm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Vu(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:Zu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=nn();return Ft!==null?kp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:hm};vm.useEffectEvent=tm;function Ju(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ti(),c=Sa(s);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(kn(n,e,s),ro(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ti(),c=Sa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(kn(n,e,s),ro(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),s=Sa(a);s.tag=2,n!=null&&(s.callback=n),n=Ma(e,s,a),n!==null&&(kn(n,e,a),ro(n,e,a))}};function xm(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,s)||!Qs(c,f):!0}function ym(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function hr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Sm(e){nl(e)}function Mm(e){console.error(e)}function Em(e){nl(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ef(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function bm(e){return e=Sa(e),e.tag=3,e}function Am(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Tm(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function dx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Vr(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Bl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Af(e,s,c)),!1;case 22:return a.flags|=65536,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Af(e,s,c)),!1}throw Error(r(435,a.tag))}return Af(e,s,c),Bl(),!1}if(St)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==xu&&(e=Error(r(422),{cause:s}),eo(si(e,a)))):(s!==xu&&(n=Error(r(423),{cause:s}),eo(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=si(s,a),c=ef(e.stateNode,s,c),Du(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=si(f,a),yo===null?yo=[f]:yo.push(f),en!==4&&(en=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ef(a.stateNode,s,e),Du(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bm(c),Am(c,e,a,s),Du(a,c),!1}a=a.return}while(a!==null);return!1}var tf=Error(r(461)),ln=!1;function Tn(e,n,a,s){n.child=e===null?Dp(n,null,a,s):fr(n,e.child,a,s)}function Rm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return or(n),s=Pu(e,n,a,g,f,c),E=Bu(),e!==null&&!ln?(Fu(e,n,c),ji(e,n,c)):(St&&E&&_u(n),n.flags|=1,Tn(e,n,s,c),n.child)}function Cm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(e,n,f,s,c)):(e=sl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!uf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(g,s)&&e.ref===n.ref)return ji(e,n,c)}return n.flags|=1,e=Gi(f,s),e.ref=n.ref,e.return=n,n.child=e}function wm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Qs(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,uf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,ji(e,n,c)}return nf(e,n,a,s,c)}function Dm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Um(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?Np(n,f):Lu(),Op(n);else return s=n.lanes=536870912,Um(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ul(n,f.cachePool),Np(n,f),Ta(),n.memoizedState=null):(e!==null&&ul(n,null),Lu(),Ta());return Tn(e,n,c,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(e,n,a,s,c){var f=Au();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),Lu(),Op(n),e!==null&&Vr(e,n,s,!0),n.childLanes=c,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Lm(e,n,a){return fr(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function hx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(s.mode==="hidden")return e=Al(n,s),n.lanes=536870912,ho(null,e);if(Ou(n),(e=Wt)?(e=Xg(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=mp(e),a.return=n,n.child=a,Mn=n,Wt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return Al(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Ou(n),c)if(n.flags&256)n.flags&=-257,n=Lm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Vr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=Vt,s!==null&&(g=Di(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ir(e,g),kn(s,e,g),tf;Bl(),n=Lm(e,n,a)}else e=f.treeContext,Wt=fi(g.nextSibling),Mn=n,St=!0,_a=null,ci=!1,e!==null&&vp(n,e),n=Al(n,s),n.flags|=4096;return n}return e=Gi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nf(e,n,a,s,c){return or(n),a=Pu(e,n,a,s,void 0,c),s=Bu(),e!==null&&!ln?(Fu(e,n,c),ji(e,n,c)):(St&&s&&_u(n),n.flags|=1,Tn(e,n,a,c),n.child)}function Nm(e,n,a,s,c,f){return or(n),n.updateQueue=null,a=Pp(n,s,a,c),zp(e),s=Bu(),e!==null&&!ln?(Fu(e,n,f),ji(e,n,f)):(St&&s&&_u(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Om(e,n,a,s,c){if(or(n),n.stateNode===null){var f=Fr,g=a.contextType;typeof g=="object"&&g!==null&&(f=En(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Cu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?En(g):Fr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ju(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&$u.enqueueReplaceState(f,f.state,null),oo(n,s,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,P=hr(a,E);f.props=P;var $=f.context,ue=a.contextType;g=Fr,typeof ue=="object"&&ue!==null&&(g=En(ue));var me=a.getDerivedStateFromProps;ue=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==g)&&ym(n,f,s,g),ya=!1;var ee=n.memoizedState;f.state=ee,oo(n,s,f,c),so(),$=n.memoizedState,E||ee!==$||ya?(typeof me=="function"&&(Ju(n,a,me,s),$=n.memoizedState),(P=ya||xm(n,a,P,s,ee,$,g))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=g,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,wu(e,n),g=n.memoizedProps,ue=hr(a,g),f.props=ue,me=n.pendingProps,ee=f.context,$=a.contextType,P=Fr,typeof $=="object"&&$!==null&&(P=En($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==me||ee!==P)&&ym(n,f,s,P),ya=!1,ee=n.memoizedState,f.state=ee,oo(n,s,f,c),so();var se=n.memoizedState;g!==me||ee!==se||ya||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof E=="function"&&(Ju(n,a,E,s),se=n.memoizedState),(ue=ya||xm(n,a,ue,s,ee,se,P)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,se,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,se,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=se),f.props=s,f.state=se,f.context=P,s=ue):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Rl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=fr(n,e.child,null,c),n.child=fr(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ji(e,n,c),e}function zm(e,n,a,s){return rr(),n.flags|=256,Tn(e,n,a,s),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:Tp()}}function sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Pm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(c?Ea(n):Ta(),(e=Wt)?(e=Xg(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=mp(e),a.return=n,n.child=a,Mn=n,Wt=null)):e=null,e===null)throw va(n);return Vf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ta(),c=n.mode,E=Cl({mode:"hidden",children:E},c),s=ar(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=rf(a),s.childLanes=sf(e,g,a),n.memoizedState=af,ho(null,s)):(Ea(n),of(n,E))}var P=e.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=lf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),E=s.fallback,c=n.mode,s=Cl({mode:"visible",children:s.children},c),E=ar(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,fr(n,e.child,null,a),s=n.child,s.memoizedState=rf(a),s.childLanes=sf(e,g,a),n.memoizedState=af,n=ho(null,s));else if(Ea(n),Vf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var $=g.dgst;g=$,s=Error(r(419)),s.stack="",s.digest=g,eo({value:s,source:null,stack:null}),n=lf(e,n,a)}else if(ln||Vr(e,n,a,!1),g=(a&e.childLanes)!==0,ln||g){if(g=Vt,g!==null&&(s=Di(g,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,ir(e,s),kn(g,e,s),tf;Gf(E)||Bl(),n=lf(e,n,a)}else Gf(E)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Wt=fi(E.nextSibling),Mn=n,St=!0,_a=null,ci=!1,e!==null&&vp(n,e),n=of(n,s.children),n.flags|=4096);return n}return c?(Ta(),E=s.fallback,c=n.mode,P=e.child,$=P.sibling,s=Gi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,$!==null?E=Gi($,E):(E=ar(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,ho(null,s),s=n.child,E=e.child.memoizedState,E===null?E=rf(a):(c=E.cachePool,c!==null?(P=sn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=Tp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=sf(e,g,a),n.memoizedState=af,ho(e.child,s)):(Ea(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function of(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function lf(e,n,a){return fr(n,e.child,null,a),e=of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Mu(e.return,n,a)}function cf(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Fm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,ye(tn,g),Tn(e,n,s,a),s=St?$s:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bm(e,a,n);else if(e.tag===19)Bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),cf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}cf(n,!0,a,null,f,s);break;case"together":cf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function px(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),xa(n,sn,e.memoizedState.cache),rr();break;case 27:case 5:at(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pm(e,n,a):(Ea(n),e=ji(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Vr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Fm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Dm(e,n,a,n.pendingProps);case 24:xa(n,sn,e.memoizedState.cache)}return ji(e,n,a)}function Im(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!uf(e,a)&&(n.flags&128)===0)return ln=!1,px(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,St&&(n.flags&1048576)!==0&&_p(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=cr(n.elementType),n.type=e,typeof e=="function")pu(e)?(s=hr(e,s),n.tag=1,n=Om(null,n,e,s,a)):(n.tag=0,n=nf(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===D){n.tag=11,n=Rm(null,n,e,s,a);break e}else if(c===z){n.tag=14,n=Cm(null,n,e,s,a);break e}}throw n=ge(e)||e,Error(r(306,n,""))}}return n;case 0:return nf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=hr(s,n.pendingProps),Om(e,n,s,c,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,wu(e,n),oo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,xa(n,sn,s),s!==f.cache&&Eu(n,[sn],a,!0),so(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zm(e,n,s,a);break e}else if(s!==c){c=si(Error(r(424)),n),eo(c),n=zm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Wt=fi(e.firstChild),Mn=n,St=!0,_a=null,ci=!0,a=Dp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(rr(),s===c){n=ji(e,n,a);break e}Tn(e,n,s,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,e=n.pendingProps,s=Xl(Ee.current).createElement(a),s[Qt]=n,s[yn]=e,bn(s,a,e),k(s),n.stateNode=s):n.memoizedState=Kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return at(n),e===null&&St&&(s=n.stateNode=jg(n.type,n.pendingProps,Ee.current),Mn=n,ci=!0,c=Wt,La(n.type)?(kf=c,Wt=fi(s.firstChild)):Wt=c),Tn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((c=s=Wt)&&(s=Xx(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,Mn=n,Wt=fi(s.firstChild),ci=!1,c=!0):c=!1),c||va(n)),at(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Ff(c,f)?s=null:g!==null&&Ff(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Pu(e,n,rx,null,null,a),Co._currentValue=c),Rl(e,n),Tn(e,n,s,a),n.child;case 6:return e===null&&St&&((e=a=Wt)&&(a=Wx(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Mn=n,Wt=null,e=!0):e=!1),e||va(n)),null;case 13:return Pm(e,n,a);case 4:return He(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=fr(n,null,s,a):Tn(e,n,s,a),n.child;case 11:return Rm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,xa(n,n.type,s.value),Tn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,or(n),c=En(c),s=s(c),n.flags|=1,Tn(e,n,s,a),n.child;case 14:return Cm(e,n,n.type,n.pendingProps,a);case 15:return wm(e,n,n.type,n.pendingProps,a);case 19:return Fm(e,n,a);case 31:return hx(e,n,a);case 22:return Dm(e,n,a,n.pendingProps);case 24:return or(n),s=En(sn),e===null?(c=Au(),c===null&&(c=Vt,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Cu(n),xa(n,sn,c)):((e.lanes&a)!==0&&(wu(e,n),oo(n,null,null,a),so()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),xa(n,sn,s)):(s=f.cache,xa(n,sn,s),s!==c.cache&&Eu(n,[sn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function ff(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(dg())e.flags|=8192;else throw ur=dl,Ru}else e.flags&=-16777217}function Hm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n))if(dg())e.flags|=8192;else throw ur=dl,Ru}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?fn():536870912,e.lanes|=n,es|=n)}function po(e,n){if(!St)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function mx(e,n,a){var s=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(sn),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(qt(n),Hm(n,f)):(qt(n),ff(n,c,null,s,a))):f?f!==e.memoizedState?(Yi(n),qt(n),Hm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Yi(n),qt(n),ff(n,c,e,s,a)),null;case 27:if(zt(n),a=Ee.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=Y.current,Gr(n)?xp(n):(e=jg(c,s,a),n.stateNode=e,Yi(n))}return qt(n),null;case 5:if(zt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=Y.current,Gr(n))xp(n);else{var g=Xl(Ee.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[Qt]=n,f[yn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(bn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Yi(n)}}return qt(n),ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ee.current,Gr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Mn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Qt]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Pg(e.nodeValue,a)),e||va(n,!0)}else e=Xl(e).createTextNode(s),e[Qt]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Gr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Qt]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Gr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Qt]=n}else rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),qt(n),null);case 4:return Pe(),e===null&&Nf(n.stateNode.containerInfo),qt(n),null;case 10:return Xi(n.type),qt(n),null;case 19:if(ie(tn),s=n.memoizedState,s===null)return qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)po(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,po(s,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)pp(a,e),a=a.sibling;return ye(tn,tn.current&1|2),St&&Vi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&de()>Ol&&(n.flags|=128,c=!0,po(s,!1),n.lanes=4194304)}else{if(!c)if(e=gl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!St)return qt(n),null}else 2*de()-s.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,c=!0,po(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,a=tn.current,ye(tn,c?a&1|2:a&1),St&&Vi(n,s.treeForkCount),e):(qt(n),null);case 22:case 23:return Jn(n),Nu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ie(lr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(sn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gx(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(sn),Pe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(tn),null;case 4:return Pe(),null;case 10:return Xi(n.type),null;case 22:case 23:return Jn(n),Nu(),e!==null&&ie(lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(sn),null;case 25:return null;default:return null}}function Gm(e,n){switch(vu(n),n.tag){case 3:Xi(sn),Pe();break;case 26:case 27:case 5:zt(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ie(tn);break;case 10:Xi(n.type);break;case 22:case 23:Jn(n),Nu(),e!==null&&ie(lr);break;case 24:Xi(sn)}}function mo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){Ot(n,n.return,E)}}function ba(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var P=a,$=E;try{$()}catch(ue){Ot(c,P,ue)}}}s=s.next}while(s!==f)}}catch(ue){Ot(n,n.return,ue)}}function Vm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lp(n,a)}catch(s){Ot(e,e.return,s)}}}function km(e,n,a){a.props=hr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ot(e,n,s)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ot(e,n,c)}}function Ni(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ot(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ot(e,n,c)}else a.current=null}function Xm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ot(e,e.return,c)}}function df(e,n,a){try{var s=e.stateNode;Fx(s,e.type,a,n),s[yn]=n}catch(c){Ot(e,e.return,c)}}function Wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(s!==4&&(s===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,a),e=e.sibling;e!==null;)pf(e,n,a),e=e.sibling}function Dl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function qm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[Qt]=e,n[yn]=a}catch(f){Ot(e,e.return,f)}}var Zi=!1,cn=!1,mf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function _x(e,n){if(e=e.containerInfo,Pf=Ql,e=rp(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,P=-1,$=0,ue=0,me=e,ee=null;t:for(;;){for(var se;me!==a||c!==0&&me.nodeType!==3||(E=g+c),me!==f||s!==0&&me.nodeType!==3||(P=g+s),me.nodeType===3&&(g+=me.nodeValue.length),(se=me.firstChild)!==null;)ee=me,me=se;for(;;){if(me===e)break t;if(ee===a&&++$===c&&(E=g),ee===f&&++ue===s&&(P=g),(se=me.nextSibling)!==null)break;me=ee,ee=me.parentNode}me=se}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},Ql=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ie=hr(a.type,c);e=s.getSnapshotBeforeUpdate(Ie,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Ke){Ot(a,a.return,Ke)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Ym(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),s&4&&mo(5,a);break;case 1:if(Qi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ot(a,a.return,g)}else{var c=hr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ot(a,a.return,g)}}s&64&&Vm(a),s&512&&go(a,a.return);break;case 3:if(Qi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(e,n)}catch(g){Ot(a,a.return,g)}}break;case 27:n===null&&s&4&&qm(a);case 26:case 5:Qi(e,a),n===null&&s&4&&Xm(a),s&512&&go(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),s&4&&Qm(e,a);break;case 13:Qi(e,a),s&4&&Jm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ax.bind(null,a),qx(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||cn,c=Zi;var f=cn;Zi=s,(cn=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=c,cn=f}break;case 30:break;default:Qi(e,a)}}function Zm(e){var n=e.alternate;n!==null&&(e.alternate=null,Zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ks(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,In=!1;function Ki(e,n,a){for(a=a.child;a!==null;)Km(e,n,a),a=a.sibling}function Km(e,n,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 26:cn||Ni(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ni(a,n);var s=Kt,c=In;La(a.type)&&(Kt=a.stateNode,In=!1),Ki(e,n,a),bo(a.stateNode),Kt=s,In=c;break;case 5:cn||Ni(a,n);case 6:if(s=Kt,c=In,Kt=null,Ki(e,n,a),Kt=s,In=c,Kt!==null)if(In)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Ot(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Ot(a,n,f)}break;case 18:Kt!==null&&(In?(e=Kt,Vg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ls(e)):Vg(Kt,a.stateNode));break;case 4:s=Kt,c=In,Kt=a.stateNode.containerInfo,In=!0,Ki(e,n,a),Kt=s,In=c;break;case 0:case 11:case 14:case 15:ba(2,a,n),cn||ba(4,a,n),Ki(e,n,a);break;case 1:cn||(Ni(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&km(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Ki(e,n,a),cn=s;break;default:Ki(e,n,a)}}function Qm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ls(e)}catch(a){Ot(n,n.return,a)}}}function Jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ls(e)}catch(a){Ot(n,n.return,a)}}function vx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new jm),n;default:throw Error(r(435,e.tag))}}function Ul(e,n){var a=vx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Rx.bind(null,e,s);s.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Kt=E.stateNode,In=!1;break e}break;case 5:Kt=E.stateNode,In=!1;break e;case 3:case 4:Kt=E.stateNode.containerInfo,In=!0;break e}E=E.return}if(Kt===null)throw Error(r(160));Km(f,g,c),Kt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,e),n=n.sibling}var yi=null;function $m(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),s&4&&(ba(3,e,e.return),mo(3,e),ba(5,e,e.return));break;case 1:Hn(n,e),Gn(e),s&512&&(cn||a===null||Ni(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=yi;if(Hn(n,e),Gn(e),s&512&&(cn||a===null||Ni(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$a]||f[Qt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[Qt]=e,k(f),s=f;break e;case"link":var g=$g("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=$g("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Qt]=e,k(f),s=f}e.stateNode=s}else e_(c,e.type,e.stateNode);else e.stateNode=Jg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?e_(c,e.type,e.stateNode):Jg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),s&512&&(cn||a===null||Ni(a,a.return)),a!==null&&s&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),s&512&&(cn||a===null||Ni(a,a.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(Ie){Ot(e,e.return,Ie)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,df(e,c,a!==null?a.memoizedProps:c)),s&1024&&(mf=!0);break;case 6:if(Hn(n,e),Gn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ie){Ot(e,e.return,Ie)}}break;case 3:if(jl=null,c=yi,yi=Wl(n.containerInfo),Hn(n,e),yi=c,Gn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ls(n.containerInfo)}catch(Ie){Ot(e,e.return,Ie)}mf&&(mf=!1,eg(e));break;case 4:s=yi,yi=Wl(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=s;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=de()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Zi,ue=cn;if(Zi=$||c,cn=ue||P,Hn(n,e),cn=ue,Zi=$,Gn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Zi||cn||pr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=P.stateNode;var me=P.memoizedProps.style,ee=me!=null&&me.hasOwnProperty("display")?me.display:null;E.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ie){Ot(P,P.return,Ie)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(Ie){Ot(P,P.return,Ie)}}}else if(n.tag===18){if(a===null){P=n;try{var se=P.stateNode;c?kg(se,!0):kg(P.stateNode,!1)}catch(Ie){Ot(P,P.return,Ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ul(e,a))));break;case 19:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=hf(e);Dl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Bn(g,""),a.flags&=-33);var E=hf(e);Dl(e,E,g);break;case 3:case 4:var P=a.stateNode.containerInfo,$=hf(e);pf(e,$,P);break;default:throw Error(r(161))}}catch(ue){Ot(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ym(e,n.alternate,n),n=n.sibling}function pr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),pr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),pr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ni(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),mo(4,f);break;case 1:if(Ji(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ot(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Up(P[c],E)}catch($){Ot(s,s.return,$)}}a&&g&64&&Vm(f),go(f,f.return);break;case 27:qm(f);case 26:case 5:Ji(c,f,a),a&&s===null&&g&4&&Xm(f),go(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&g&4&&Qm(c,f);break;case 13:Ji(c,f,a),a&&g&4&&Jm(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),go(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e))}function Si(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(e,n,a,s),n=n.sibling}function tg(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,s),c&2048&&mo(9,n);break;case 1:Si(e,n,a,s);break;case 3:Si(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e)));break;case 12:if(c&2048){Si(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ot(n,n.return,P)}}else Si(e,n,a,s);break;case 31:Si(e,n,a,s);break;case 13:Si(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,s):_o(e,n):f._visibility&2?Si(e,n,a,s):(f._visibility|=2,Qr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&gf(g,n);break;case 24:Si(e,n,a,s),c&2048&&_f(n.alternate,n);break;default:Si(e,n,a,s)}}function Qr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,E=a,P=s,$=g.flags;switch(g.tag){case 0:case 11:case 15:Qr(f,g,E,P,c),mo(8,g);break;case 23:break;case 22:var ue=g.stateNode;g.memoizedState!==null?ue._visibility&2?Qr(f,g,E,P,c):_o(f,g):(ue._visibility|=2,Qr(f,g,E,P,c)),c&&$&2048&&gf(g.alternate,g);break;case 24:Qr(f,g,E,P,c),c&&$&2048&&_f(g.alternate,g);break;default:Qr(f,g,E,P,c)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:_o(a,s),c&2048&&gf(s.alternate,s);break;case 24:_o(a,s),c&2048&&_f(s.alternate,s);break;default:_o(a,s)}n=n.sibling}}var vo=8192;function Jr(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)ng(e,n,a),e=e.sibling}function ng(e,n,a){switch(e.tag){case 26:Jr(e,n,a),e.flags&vo&&e.memoizedState!==null&&ay(a,yi,e.memoizedState,e.memoizedProps);break;case 5:Jr(e,n,a);break;case 3:case 4:var s=yi;yi=Wl(e.stateNode.containerInfo),Jr(e,n,a),yi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=vo,vo=16777216,Jr(e,n,a),vo=s):Jr(e,n,a));break;default:Jr(e,n,a)}}function ig(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,rg(s,e)}ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ag(e),e=e.sibling}function ag(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&ba(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):xo(e);break;default:xo(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,rg(s,e)}ig(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function rg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:to(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else e:for(a=e;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(Zm(s),s===a){_n=null;break e}if(c!==null){c.return=f,_n=c;break e}_n=f}}}var xx={getCacheForType:function(e){var n=En(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(sn).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Vt=null,ht=null,_t=0,Nt=0,$n=null,Aa=!1,$r=!1,vf=!1,$i=0,en=0,Ra=0,mr=0,xf=0,ei=0,es=0,yo=null,Vn=null,yf=!1,Nl=0,sg=0,Ol=1/0,zl=null,Ca=null,hn=0,wa=null,ts=null,ea=0,Sf=0,Mf=null,og=null,So=0,Ef=null;function ti(){return(Dt&2)!==0&&_t!==0?_t&-_t:O.T!==null?wf():Gs()}function lg(){if(ei===0)if((_t&536870912)===0||St){var e=le;le<<=1,(le&3932160)===0&&(le=262144),ei=e}else ei=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ei}function kn(e,n,a){(e===Vt&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)&&(ns(e,0),Da(e,_t,ei,!1)),xn(e,a),((Dt&2)===0||e!==Vt)&&(e===Vt&&((Dt&2)===0&&(mr|=a),en===4&&Da(e,_t,ei,!1)),Oi(e))}function cg(e,n,a){if((Dt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Je(e,n),c=s?Ex(e,n):bf(e,n,!0),f=s;do{if(c===0){$r&&!s&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Sx(a)){c=bf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var E=e;c=yo;var P=E.current.memoizedState.isDehydrated;if(P&&(ns(E,g).flags|=256),g=bf(E,g,!1),g!==2){if(vf&&!P){E.errorRecoveryDisabledLanes|=f,mr|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ns(e,0),Da(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(s,n,ei,!Aa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Nl+300-de(),10<c)){if(Da(s,n,ei,!Aa),De(s,0,!0)!==0)break e;ea=n,s.timeoutHandle=Hg(ug.bind(null,s,a,Vn,zl,yf,n,ei,mr,es,Aa,f,"Throttled",-0,0),c);break e}ug(s,a,Vn,zl,yf,n,ei,mr,es,Aa,f,null,-0,0)}}break}while(!0);Oi(e)}function ug(e,n,a,s,c,f,g,E,P,$,ue,me,ee,se){if(e.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ng(n,f,me);var Ie=(f&62914560)===f?Nl-de():(f&4194048)===f?sg-de():0;if(Ie=ry(me,Ie),Ie!==null){ea=f,e.cancelPendingCommit=Ie(vg.bind(null,e,n,f,a,s,c,g,E,P,ue,me,null,ee,se)),Da(e,f,g,!$);return}}vg(e,n,f,a,s,c,g,E,P)}function Sx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,s){n&=~xf,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Qe(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Is(e,a,n)}function Pl(){return(Dt&6)===0?(Mo(0),!1):!0}function Tf(){if(ht!==null){if(Nt===0)var e=ht.return;else e=ht,ki=sr=null,Iu(e),qr=null,io=0,e=ht;for(;e!==null;)Gm(e.alternate,e),e=e.return;ht=null}}function ns(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Tf(),Vt=e,ht=a=Gi(e.current,null),_t=n,Nt=0,$n=null,Aa=!1,$r=Je(e,n),vf=!1,es=ei=xf=mr=Ra=en=0,Vn=yo=null,yf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Qe(s),f=1<<c;n|=e[c],s&=~f}return $i=n,il(),a}function fg(e,n){st=null,O.H=fo,n===Wr||n===fl?(n=Rp(),Nt=3):n===Ru?(n=Rp(),Nt=4):Nt=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ht===null&&(en=1,bl(e,si(n,e.current)))}function dg(){var e=Qn.current;return e===null?!0:(_t&4194048)===_t?ui===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ui:!1}function hg(){var e=O.H;return O.H=fo,e===null?fo:e}function pg(){var e=O.A;return O.A=xx,e}function Bl(){en=4,Aa||(_t&4194048)!==_t&&Qn.current!==null||($r=!0),(Ra&134217727)===0&&(mr&134217727)===0||Vt===null||Da(Vt,_t,ei,!1)}function bf(e,n,a){var s=Dt;Dt|=2;var c=hg(),f=pg();(Vt!==e||_t!==n)&&(zl=null,ns(e,n)),n=!1;var g=en;e:do try{if(Nt!==0&&ht!==null){var E=ht,P=$n;switch(Nt){case 8:Tf(),g=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var $=Nt;if(Nt=0,$n=null,is(e,E,P,$),a&&$r){g=0;break e}break;default:$=Nt,Nt=0,$n=null,is(e,E,P,$)}}Mx(),g=en;break}catch(ue){fg(e,ue)}while(!0);return n&&e.shellSuspendCounter++,ki=sr=null,Dt=s,O.H=c,O.A=f,ht===null&&(Vt=null,_t=0,il()),g}function Mx(){for(;ht!==null;)mg(ht)}function Ex(e,n){var a=Dt;Dt|=2;var s=hg(),c=pg();Vt!==e||_t!==n?(zl=null,Ol=de()+500,ns(e,n)):$r=Je(e,n);e:do try{if(Nt!==0&&ht!==null){n=ht;var f=$n;t:switch(Nt){case 1:Nt=0,$n=null,is(e,n,f,1);break;case 2:case 9:if(bp(f)){Nt=0,$n=null,gg(n);break}n=function(){Nt!==2&&Nt!==9||Vt!==e||(Nt=7),Oi(e)},f.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:bp(f)?(Nt=0,$n=null,gg(n)):(Nt=0,$n=null,is(e,n,f,7));break;case 5:var g=null;switch(ht.tag){case 26:g=ht.memoizedState;case 5:case 27:var E=ht;if(g?t_(g):E.stateNode.complete){Nt=0,$n=null;var P=E.sibling;if(P!==null)ht=P;else{var $=E.return;$!==null?(ht=$,Fl($)):ht=null}break t}}Nt=0,$n=null,is(e,n,f,5);break;case 6:Nt=0,$n=null,is(e,n,f,6);break;case 8:Tf(),en=6;break e;default:throw Error(r(462))}}Tx();break}catch(ue){fg(e,ue)}while(!0);return ki=sr=null,O.H=s,O.A=c,Dt=a,ht!==null?0:(Vt=null,_t=0,il(),en)}function Tx(){for(;ht!==null&&!T();)mg(ht)}function mg(e){var n=Im(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Fl(e):ht=n}function gg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Iu(n);default:Gm(a,n),n=ht=pp(n,$i),n=Im(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Fl(e):ht=n}function is(e,n,a,s){ki=sr=null,Iu(n),qr=null,io=0;var c=n.return;try{if(dx(e,c,n,a,_t)){en=1,bl(e,si(a,e.current)),ht=null;return}}catch(f){if(c!==null)throw ht=c,f;en=1,bl(e,si(a,e.current)),ht=null;return}n.flags&32768?(St||s===1?e=!0:$r||(_t&536870912)!==0?e=!1:(Aa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),_g(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){_g(n,Aa);return}e=n.return;var a=mx(n.alternate,n,$i);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=e}while(n!==null);en===0&&(en=5)}function _g(e,n){do{var a=gx(e.alternate,e);if(a!==null){a.flags&=32767,ht=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ht=e;return}ht=e=a}while(e!==null);en=6,ht=null}function vg(e,n,a,s,c,f,g,E,P){e.cancelPendingCommit=null;do Il();while(hn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=du,gi(e,a,f,g,E,P),e===Vt&&(ht=Vt=null,_t=0),ts=n,wa=e,ea=a,Sf=f,Mf=c,og=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cx(we,function(){return Eg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=K.p,K.p=2,g=Dt,Dt|=4;try{_x(e,n,a)}finally{Dt=g,K.p=c,O.T=s}}hn=1,xg(),yg(),Sg()}}function xg(){if(hn===1){hn=0;var e=wa,n=ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=K.p;K.p=2;var c=Dt;Dt|=4;try{$m(n,e);var f=Bf,g=rp(e.containerInfo),E=f.focusedElem,P=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&ap(E.ownerDocument.documentElement,E)){if(P!==null&&ou(E)){var $=P.start,ue=P.end;if(ue===void 0&&(ue=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ue,E.value.length);else{var me=E.ownerDocument||document,ee=me&&me.defaultView||window;if(ee.getSelection){var se=ee.getSelection(),Ie=E.textContent.length,Ke=Math.min(P.start,Ie),Ht=P.end===void 0?Ke:Math.min(P.end,Ie);!se.extend&&Ke>Ht&&(g=Ht,Ht=Ke,Ke=g);var j=ip(E,Ke),H=ip(E,Ht);if(j&&H&&(se.rangeCount!==1||se.anchorNode!==j.node||se.anchorOffset!==j.offset||se.focusNode!==H.node||se.focusOffset!==H.offset)){var J=me.createRange();J.setStart(j.node,j.offset),se.removeAllRanges(),Ke>Ht?(se.addRange(J),se.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),se.addRange(J))}}}}for(me=[],se=E;se=se.parentNode;)se.nodeType===1&&me.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<me.length;E++){var he=me[E];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Ql=!!Pf,Bf=Pf=null}finally{Dt=c,K.p=s,O.T=a}}e.current=n,hn=2}}function yg(){if(hn===2){hn=0;var e=wa,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=K.p;K.p=2;var c=Dt;Dt|=4;try{Ym(e,n.alternate,n)}finally{Dt=c,K.p=s,O.T=a}}hn=3}}function Sg(){if(hn===4||hn===3){hn=0,te();var e=wa,n=ts,a=ea,s=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,ts=wa=null,Mg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),Dr(a),n=n.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=K.p,K.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{O.T=n,K.p=c}}(ea&3)!==0&&Il(),Oi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Ef?So++:(So=0,Ef=e):So=0,Mo(0)}}function Mg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,to(n)))}function Il(){return xg(),yg(),Sg(),Eg()}function Eg(){if(hn!==5)return!1;var e=wa,n=Sf;Sf=0;var a=Dr(ea),s=O.T,c=K.p;try{K.p=32>a?32:a,O.T=null,a=Mf,Mf=null;var f=wa,g=ea;if(hn=0,ts=wa=null,ea=0,(Dt&6)!==0)throw Error(r(331));var E=Dt;if(Dt|=4,ag(f.current),tg(f,f.current,g,a),Dt=E,Mo(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(qe,f)}catch{}return!0}finally{K.p=c,O.T=s,Mg(e,n)}}function Tg(e,n,a){n=si(a,n),n=ef(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(xn(e,2),Oi(e))}function Ot(e,n,a){if(e.tag===3)Tg(e,e,a);else for(;n!==null;){if(n.tag===3){Tg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){e=si(a,e),a=bm(2),s=Ma(n,a,2),s!==null&&(Am(a,s,n,e),xn(s,2),Oi(s));break}}n=n.return}}function Af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new yx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(vf=!0,c.add(a),e=bx.bind(null,e,n,a),n.then(e,e))}function bx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Vt===e&&(_t&a)===a&&(en===4||en===3&&(_t&62914560)===_t&&300>de()-Nl?(Dt&2)===0&&ns(e,0):xf|=a,es===_t&&(es=0)),Oi(e)}function bg(e,n){n===0&&(n=fn()),e=ir(e,n),e!==null&&(xn(e,n),Oi(e))}function Ax(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(e,a)}function Rx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),bg(e,a)}function Cx(e,n){return Xe(e,n)}var Hl=null,as=null,Rf=!1,Gl=!1,Cf=!1,Ua=0;function Oi(e){e!==as&&e.next===null&&(as===null?Hl=as=e:as=as.next=e),Gl=!0,Rf||(Rf=!0,Dx())}function Mo(e,n){if(!Cf&&Gl){Cf=!0;do for(var a=!1,s=Hl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Qe(42|e)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(s,f))}else f=_t,f=De(s,s===Vt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Je(s,f)||(a=!0,wg(s,f));s=s.next}while(a);Cf=!1}}function wx(){Ag()}function Ag(){Gl=Rf=!1;var e=0;Ua!==0&&Hx()&&(e=Ua);for(var n=de(),a=null,s=Hl;s!==null;){var c=s.next,f=Rg(s,n);f===0?(s.next=null,a===null?Hl=c:a.next=c,c===null&&(as=a)):(a=s,(e!==0||(f&3)!==0)&&(Gl=!0)),s=c}hn!==0&&hn!==5||Mo(e),Ua!==0&&(Ua=0)}function Rg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Qe(f),E=1<<g,P=c[g];P===-1?((E&a)===0||(E&s)!==0)&&(c[g]=Zt(E,n)):P<=n&&(e.expiredLanes|=E),f&=~E}if(n=Vt,a=_t,a=De(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Nt===2||Nt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Je(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&U(s),Dr(a)){case 2:case 8:a=Ve;break;case 32:a=we;break;case 268435456:a=gt;break;default:a=we}return s=Cg.bind(null,e),a=Xe(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&U(s),e.callbackPriority=2,e.callbackNode=null,2}function Cg(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var s=_t;return s=De(e,e===Vt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(cg(e,s,n),Rg(e,de()),e.callbackNode!=null&&e.callbackNode===a?Cg.bind(null,e):null)}function wg(e,n){if(Il())return null;cg(e,n,!0)}function Dx(){Vx(function(){(Dt&6)!==0?Xe(pe,wx):Ag()})}function wf(){if(Ua===0){var e=kr;e===0&&(e=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Ua=e}return Ua}function Dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Ug(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ux(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dg((c[yn]||null).action),g=s.submitter;g&&(n=(n=g[yn]||null)?Dg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new $o("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ua!==0){var P=g?Ug(c,g):new FormData(c);Yu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=g?Ug(c,g):new FormData(c),Yu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Df=0;Df<fu.length;Df++){var Uf=fu[Df],Lx=Uf.toLowerCase(),Nx=Uf[0].toUpperCase()+Uf.slice(1);xi(Lx,"on"+Nx)}xi(lp,"onAnimationEnd"),xi(cp,"onAnimationIteration"),xi(up,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Zv,"onTransitionRun"),xi(Kv,"onTransitionStart"),xi(Qv,"onTransitionCancel"),xi(fp,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Lg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],P=E.instance,$=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=$;try{f(c)}catch(ue){nl(ue)}c.currentTarget=null,f=P}else for(g=0;g<s.length;g++){if(E=s[g],P=E.instance,$=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=$;try{f(c)}catch(ue){nl(ue)}c.currentTarget=null,f=P}}}}function pt(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var s=e+"__bubble";a.has(s)||(Ng(n,e,2,!1),a.add(s))}function Lf(e,n,a){var s=0;n&&(s|=4),Ng(a,e,s,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Vl]){e[Vl]=!0,Te.forEach(function(a){a!=="selectionchange"&&(Ox.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Lf("selectionchange",!1,n))}}function Ng(e,n,a,s){switch(l_(n)){case 2:var c=ly;break;case 8:c=cy;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=b(E),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){s=f=g;continue e}E=E.parentNode}}s=s.return}Fh(function(){var $=f,ue=Kc(a),me=[];e:{var ee=dp.get(e);if(ee!==void 0){var se=$o,Ie=e;switch(e){case"keypress":if(Qo(a)===0)break e;case"keydown":case"keyup":se=Rv;break;case"focusin":Ie="focus",se=nu;break;case"focusout":Ie="blur",se=nu;break;case"beforeblur":case"afterblur":se=nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Dv;break;case lp:case cp:case up:se=vv;break;case fp:se=Lv;break;case"scroll":case"scrollend":se=hv;break;case"wheel":se=Ov;break;case"copy":case"cut":case"paste":se=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kh;break;case"toggle":case"beforetoggle":se=Pv}var Ke=(n&4)!==0,Ht=!Ke&&(e==="scroll"||e==="scrollend"),j=Ke?ee!==null?ee+"Capture":null:ee;Ke=[];for(var H=$,J;H!==null;){var he=H;if(J=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||J===null||j===null||(he=Xs(H,j),he!=null&&Ke.push(To(H,he,J))),Ht)break;H=H.return}0<Ke.length&&(ee=new se(ee,Ie,null,a,ue),me.push({event:ee,listeners:Ke}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",ee&&a!==Zc&&(Ie=a.relatedTarget||a.fromElement)&&(b(Ie)||Ie[Fi]))break e;if((se||ee)&&(ee=ue.window===ue?ue:(ee=ue.ownerDocument)?ee.defaultView||ee.parentWindow:window,se?(Ie=a.relatedTarget||a.toElement,se=$,Ie=Ie?b(Ie):null,Ie!==null&&(Ht=u(Ie),Ke=Ie.tag,Ie!==Ht||Ke!==5&&Ke!==27&&Ke!==6)&&(Ie=null)):(se=null,Ie=$),se!==Ie)){if(Ke=Gh,he="onMouseLeave",j="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Ke=kh,he="onPointerLeave",j="onPointerEnter",H="pointer"),Ht=se==null?ee:ne(se),J=Ie==null?ee:ne(Ie),ee=new Ke(he,H+"leave",se,a,ue),ee.target=Ht,ee.relatedTarget=J,he=null,b(ue)===$&&(Ke=new Ke(j,H+"enter",Ie,a,ue),Ke.target=J,Ke.relatedTarget=Ht,he=Ke),Ht=he,se&&Ie)t:{for(Ke=zx,j=se,H=Ie,J=0,he=j;he;he=Ke(he))J++;he=0;for(var Ye=H;Ye;Ye=Ke(Ye))he++;for(;0<J-he;)j=Ke(j),J--;for(;0<he-J;)H=Ke(H),he--;for(;J--;){if(j===H||H!==null&&j===H.alternate){Ke=j;break t}j=Ke(j),H=Ke(H)}Ke=null}else Ke=null;se!==null&&Og(me,ee,se,Ke,!1),Ie!==null&&Ht!==null&&Og(me,Ht,Ie,Ke,!0)}}e:{if(ee=$?ne($):window,se=ee.nodeName&&ee.nodeName.toLowerCase(),se==="select"||se==="input"&&ee.type==="file")var Rt=Qh;else if(Zh(ee))if(Jh)Rt=qv;else{Rt=Xv;var Ge=kv}else se=ee.nodeName,!se||se.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?$&&Yc($.elementType)&&(Rt=Qh):Rt=Wv;if(Rt&&(Rt=Rt(e,$))){Kh(me,Rt,a,ue);break e}Ge&&Ge(e,ee,$),e==="focusout"&&$&&ee.type==="number"&&$.memoizedProps.value!=null&&Cn(ee,"number",ee.value)}switch(Ge=$?ne($):window,e){case"focusin":(Zh(Ge)||Ge.contentEditable==="true")&&(zr=Ge,lu=$,Js=null);break;case"focusout":Js=lu=zr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,sp(me,a,ue);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":sp(me,a,ue)}var lt;if(au)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Or?jh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Xh&&a.locale!=="ko"&&(Or||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Or&&(lt=Ih()):(ma=ue,$c="value"in ma?ma.value:ma.textContent,Or=!0)),Ge=kl($,vt),0<Ge.length&&(vt=new Vh(vt,e,null,a,ue),me.push({event:vt,listeners:Ge}),lt?vt.data=lt:(lt=Yh(a),lt!==null&&(vt.data=lt)))),(lt=Fv?Iv(e,a):Hv(e,a))&&(vt=kl($,"onBeforeInput"),0<vt.length&&(Ge=new Vh("onBeforeInput","beforeinput",null,a,ue),me.push({event:Ge,listeners:vt}),Ge.data=lt)),Ux(me,e,$,a,ue)}Lg(me,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xs(e,a),c!=null&&s.unshift(To(e,c,f)),c=Xs(e,n),c!=null&&s.push(To(e,c,f))),e.tag===3)return s;e=e.return}return[]}function zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Og(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,P=E.alternate,$=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||$===null||(P=$,c?($=Xs(a,f),$!=null&&g.unshift(To(a,$,P))):c||($=Xs(a,f),$!=null&&g.push(To(a,$,P)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Px=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(Px,`
`).replace(Bx,"")}function Pg(e,n){return n=zg(n),zg(e)===n}function It(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Bn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Bn(e,""+s);break;case"className":Xt(e,"class",s);break;case"tabIndex":Xt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,s);break;case"style":Ph(e,s,f);break;case"data":if(n!=="object"){Xt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Zo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Zo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ii);break;case"onScroll":s!=null&&pt("scroll",e);break;case"onScrollEnd":s!=null&&pt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":pt("beforetoggle",e),pt("toggle",e),yt(e,"popover",s);break;case"xlinkActuate":At(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":At(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":At(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":At(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":At(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":At(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":At(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":At(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":At(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":yt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fv.get(a)||a,yt(e,a,s))}}function zf(e,n,a,s,c,f){switch(a){case"style":Ph(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Bn(e,s):(typeof s=="number"||typeof s=="bigint")&&Bn(e,""+s);break;case"onScroll":s!=null&&pt("scroll",e);break;case"onScrollEnd":s!=null&&pt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ue.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):yt(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",e),pt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,g,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),s&&It(e,n,"src",a.src,a,null);return;case"input":pt("invalid",e);var E=f=g=c=null,P=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":c=ue;break;case"type":g=ue;break;case"checked":P=ue;break;case"defaultChecked":$=ue;break;case"value":f=ue;break;case"defaultValue":E=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:It(e,n,s,ue,a,null)}}Nn(e,f,E,P,$,g,c,!1);return;case"select":pt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:It(e,n,c,E,a,null)}n=f,a=g,e.multiple=!!s,n!=null?Jt(e,!!s,n,!1):a!=null&&Jt(e,!!s,a,!0);return;case"textarea":pt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:It(e,n,g,E,a,null)}Ur(e,s,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:It(e,n,P,s,a,null)}return;case"dialog":pt("beforetoggle",e),pt("toggle",e),pt("cancel",e),pt("close",e);break;case"iframe":case"object":pt("load",e);break;case"video":case"audio":for(s=0;s<Eo.length;s++)pt(Eo[s],e);break;case"image":pt("error",e),pt("load",e);break;case"details":pt("toggle",e);break;case"embed":case"source":case"link":pt("error",e),pt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,$,s,a,null)}return;default:if(Yc(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&zf(e,n,ue,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&It(e,n,E,s,a,null))}function Fx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,P=null,$=null,ue=null;for(se in a){var me=a[se];if(a.hasOwnProperty(se)&&me!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":P=me;default:s.hasOwnProperty(se)||It(e,n,se,null,s,me)}}for(var ee in s){var se=s[ee];if(me=a[ee],s.hasOwnProperty(ee)&&(se!=null||me!=null))switch(ee){case"type":f=se;break;case"name":c=se;break;case"checked":$=se;break;case"defaultChecked":ue=se;break;case"value":g=se;break;case"defaultValue":E=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==me&&It(e,n,ee,se,s,me)}}Bt(e,g,E,P,$,ue,f,c);return;case"select":se=g=E=ee=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":se=P;default:s.hasOwnProperty(f)||It(e,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ee=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==P&&It(e,n,c,f,s,P)}n=E,a=g,s=se,ee!=null?Jt(e,!!a,ee,!1):!!s!=!!a&&(n!=null?Jt(e,!!a,n,!0):Jt(e,!!a,a?[]:"",!1));return;case"textarea":se=ee=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:It(e,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ee=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,g,c,s,f)}Sn(e,ee,se);return;case"option":for(var Ie in a)if(ee=a[Ie],a.hasOwnProperty(Ie)&&ee!=null&&!s.hasOwnProperty(Ie))switch(Ie){case"selected":e.selected=!1;break;default:It(e,n,Ie,null,s,ee)}for(P in s)if(ee=s[P],se=a[P],s.hasOwnProperty(P)&&ee!==se&&(ee!=null||se!=null))switch(P){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:It(e,n,P,ee,s,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ke in a)ee=a[Ke],a.hasOwnProperty(Ke)&&ee!=null&&!s.hasOwnProperty(Ke)&&It(e,n,Ke,null,s,ee);for($ in s)if(ee=s[$],se=a[$],s.hasOwnProperty($)&&ee!==se&&(ee!=null||se!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:It(e,n,$,ee,s,se)}return;default:if(Yc(n)){for(var Ht in a)ee=a[Ht],a.hasOwnProperty(Ht)&&ee!==void 0&&!s.hasOwnProperty(Ht)&&zf(e,n,Ht,void 0,s,ee);for(ue in s)ee=s[ue],se=a[ue],!s.hasOwnProperty(ue)||ee===se||ee===void 0&&se===void 0||zf(e,n,ue,ee,s,se);return}}for(var j in a)ee=a[j],a.hasOwnProperty(j)&&ee!=null&&!s.hasOwnProperty(j)&&It(e,n,j,null,s,ee);for(me in s)ee=s[me],se=a[me],!s.hasOwnProperty(me)||ee===se||ee==null&&se==null||It(e,n,me,ee,s,se)}function Bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ix(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&Bg(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var P=a[s],$=P.startTime;if($>E)break;var ue=P.transferSize,me=P.initiatorType;ue&&Bg(me)&&(P=P.responseEnd,g+=ue*(P<E?1:(E-$)/(P-$)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,Bf=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Fg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function Hx(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(e){return Gg.resolve(null).then(e).catch(kx)}:Hg;function kx(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function Vg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ls(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[$a]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(e.ownerDocument.body);a=c}while(a);ls(n)}function kg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[$a])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Xg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$?"||e.data==="$~"}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kf=null;function Wg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function jg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ks(e)}var di=new Map,Yg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=K.d;K.d={f:jx,r:Yx,D:Zx,C:Kx,L:Qx,m:Jx,X:ey,S:$x,M:ty};function jx(){var e=ta.f(),n=Pl();return e||n}function Yx(e){var n=W(e);n!==null&&n.tag===5&&n.type==="form"?fm(n):ta.r(e)}var rs=typeof document>"u"?null:document;function Zg(e,n,a){var s=rs;if(s&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),k(n),s.head.appendChild(n)))}}function Zx(e){ta.D(e),Zg("dns-prefetch",e,null)}function Kx(e,n){ta.C(e,n),Zg("preconnect",e,n)}function Qx(e,n,a){ta.L(e,n,a);var s=rs;if(s&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(n){case"style":f=ss(e);break;case"script":f=os(e)}di.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Ao(f))||n==="script"&&s.querySelector(Ro(f))||(n=s.createElement("link"),bn(n,"link",e),k(n),s.head.appendChild(n)))}}function Jx(e,n){ta.m(e,n);var a=rs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(s)+'"][href="'+gn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=os(e)}if(!di.has(f)&&(e=x({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}s=a.createElement("link"),bn(s,"link",e),k(s),a.head.appendChild(s)}}}function $x(e,n,a){ta.S(e,n,a);var s=rs;if(s&&e){var c=ae(s).hoistableStyles,f=ss(e);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(Ao(f)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Xf(e,a);var P=g=s.createElement("link");k(P),bn(P,"link",e),P._p=new Promise(function($,ue){P.onload=$,P.onerror=ue}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ql(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function ey(e,n){ta.X(e,n);var a=rs;if(a&&e){var s=ae(a).hoistableScripts,c=os(e),f=s.get(c);f||(f=a.querySelector(Ro(c)),f||(e=x({src:e,async:!0},n),(n=di.get(c))&&Wf(e,n),f=a.createElement("script"),k(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ty(e,n){ta.M(e,n);var a=rs;if(a&&e){var s=ae(a).hoistableScripts,c=os(e),f=s.get(c);f||(f=a.querySelector(Ro(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=di.get(c))&&Wf(e,n),f=a.createElement("script"),k(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kg(e,n,a,s){var c=(c=Ee.current)?Wl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=ae(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ss(a.href);var f=ae(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Ao(e)))&&!f._p&&(g.instance=f,g.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||ny(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=ae(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ss(e){return'href="'+gn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Qg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function ny(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),k(n),e.head.appendChild(n))}function os(e){return'[src="'+gn(e)+'"]'}function Ro(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(s)return n.instance=s,k(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),k(s),bn(s,"style",c),ql(s,a.precedence,e),n.instance=s;case"stylesheet":c=ss(a.href);var f=e.querySelector(Ao(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;s=Qg(a),(c=di.get(c))&&Xf(s,c),f=(e.ownerDocument||e).createElement("link"),k(f);var g=f;return g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),bn(f,"link",s),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=os(a.src),(c=e.querySelector(Ro(f)))?(n.instance=c,k(c),c):(s=a,(c=di.get(f))&&(s=x({},a),Wf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),k(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ql(s,a.precedence,e));return n.instance}function ql(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function $g(e,n,a){if(jl===null){var s=new Map,c=jl=new Map;c.set(a,s)}else c=jl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[$a]||f[Qt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function e_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ay(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ss(s.href),f=n.querySelector(Ao(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,s=Qg(s),(c=di.get(c))&&Xf(s,c),f=f.createElement("link"),k(f);var g=f;g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),bn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function ry(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&qf===0&&(qf=62500*Ix());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(sy,e),Zl=null,Yl.call(e))}function sy(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var s=a.get(null);else{a=new Map,Zl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Yl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function oy(e,n,a,s,c,f,g,E,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function n_(e,n,a,s,c,f,g,E,P,$,ue,me){return e=new oy(e,n,a,g,P,$,ue,me,E),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Cu(f),e}function i_(e){return e?(e=Fr,e):Fr}function a_(e,n,a,s,c,f){c=i_(c),s.context===null?s.context=c:s.pendingContext=c,s=Sa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ma(e,s,n),a!==null&&(kn(a,e,n),ro(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13||e.tag===31){var n=ir(e,67108864);n!==null&&kn(n,e,67108864),jf(e,67108864)}}function o_(e){if(e.tag===13||e.tag===31){var n=ti();n=Qa(n);var a=ir(e,n);a!==null&&kn(a,e,n),jf(e,n)}}var Ql=!0;function ly(e,n,a,s){var c=O.T;O.T=null;var f=K.p;try{K.p=2,Yf(e,n,a,s)}finally{K.p=f,O.T=c}}function cy(e,n,a,s){var c=O.T;O.T=null;var f=K.p;try{K.p=8,Yf(e,n,a,s)}finally{K.p=f,O.T=c}}function Yf(e,n,a,s){if(Ql){var c=Zf(s);if(c===null)Of(e,n,s,Jl,a),c_(e,s);else if(fy(c,e,n,a,s))s.stopPropagation();else if(c_(e,s),n&4&&-1<uy.indexOf(e)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Ce(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var P=1<<31-Qe(g);E.entanglements[1]|=P,g&=~P}Oi(f),(Dt&6)===0&&(Ol=de()+500,Mo(0))}}break;case 31:case 13:E=ir(f,2),E!==null&&kn(E,f,2),Pl(),jf(f,2)}if(f=Zf(s),f===null&&Of(e,n,s,Jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Of(e,n,s,null,a)}}function Zf(e){return e=Kc(e),Kf(e)}var Jl=null;function Kf(e){if(Jl=null,e=b(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Me()){case pe:return 2;case Ve:return 8;case we:case Be:return 32;case gt:return 268435456;default:return 32}default:return 32}}var Qf=!1,Na=null,Oa=null,za=null,wo=new Map,Do=new Map,Pa=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function fy(e,n,a,s,c){switch(n){case"focusin":return Na=Uo(Na,e,n,a,s,c),!0;case"dragenter":return Oa=Uo(Oa,e,n,a,s,c),!0;case"mouseover":return za=Uo(za,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return wo.set(f,Uo(wo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,s,c)),!0}return!1}function u_(e){var n=b(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ja(e.priority,function(){o_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ja(e.priority,function(){o_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Zc=s,a.target.dispatchEvent(s),Zc=null}else return n=W(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function f_(e,n,a){$l(e)&&a.delete(n)}function dy(){Qf=!1,Na!==null&&$l(Na)&&(Na=null),Oa!==null&&$l(Oa)&&(Oa=null),za!==null&&$l(za)&&(za=null),wo.forEach(f_),Do.forEach(f_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dy)))}var tc=null;function d_(e){tc!==e&&(tc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Kf(s||a)===null)continue;break}var f=W(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ls(e){function n(P){return ec(P,e)}Na!==null&&ec(Na,e),Oa!==null&&ec(Oa,e),za!==null&&ec(za,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[yn]||null;if(typeof f=="function")g||d_(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[yn]||null)E=g.formAction;else if(Kf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),d_(a)}}}function h_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Jf(e){this._internalRoot=e}nc.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ti();a_(a,s,e,n,null,null)},nc.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),Pl(),n[Fi]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&u_(e)}};var p_=t.version;if(p_!=="19.2.5")throw Error(r(527,p_,"19.2.5"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var hy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{qe=ic.inject(hy),ke=ic}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Sm,f=Mm,g=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=n_(e,1,!1,null,null,a,s,null,c,f,g,h_),e[Fi]=n.current,Nf(e),new Jf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Sm,g=Mm,E=Em,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=n_(e,1,!0,n,a??null,s,c,P,f,g,E,h_),n.context=i_(null),a=n.current,s=ti(),s=Qa(s),c=Sa(s),c.callback=null,Ma(a,c,s),a=s,n.current.lanes=a,xn(n,a),Oi(n),e[Fi]=n.current,Nf(e),new nc(n)},No.version="19.2.5",No}var T_;function Ey(){if(T_)return td.exports;T_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=My(),td.exports}var Ty=Ey();const bh={connected:!1,isHost:!1,myPlayerId:null,myName:"",myRole:"",knownPlayers:[],phase:"lobby",cycle:0,secondsRemaining:0,price:"100",priceHistory:[],myCash:"0",myShares:0,myAura:0,myNetWorth:"0",myOptions:[],farms:[],mills:[],npcOwners:[],cycleEvents:[],headlines:[],myFeedback:null,adminSummary:null,debrief:null,error:null,gameCode:null,paused:!1};function by(o,t){switch(t.type){case"ws_connected":return{...o,connected:!0};case"ws_disconnected":return{...o,connected:!1};case"clear_error":return{...o,error:null};case"set_host":return{...o,isHost:!0};case"set_game_code":return{...o,gameCode:t.code};case"clear_feedback":return{...o,myFeedback:null};case"clear_admin_summary":return{...o,adminSummary:null};case"server_msg":{const i=t.msg;switch(i.type){case"welcome":{const r={id:i.player_id,name:i.name,role:i.role};return o.isHost?{...o,knownPlayers:[...o.knownPlayers,r]}:o.myPlayerId!==null?{...o,knownPlayers:[...o.knownPlayers,r]}:{...o,myPlayerId:i.player_id,myName:i.name,myRole:i.role,knownPlayers:[...o.knownPlayers,r]}}case"price_update":return{...o,price:i.price,priceHistory:i.history};case"cycle_phase":return{...o,phase:i.phase,cycle:i.cycle,secondsRemaining:i.seconds_remaining,cycleEvents:i.phase==="decision"?[]:o.cycleEvents,myFeedback:i.phase==="decision"?null:o.myFeedback};case"world_snapshot":return{...o,farms:i.farms,mills:i.mills,npcOwners:i.npc_owners};case"cycle_events":return{...o,cycleEvents:i.events};case"player_state":return i.player_id!==o.myPlayerId?o:{...o,myCash:i.cash,myShares:i.shares,myAura:i.aura,myNetWorth:i.net_worth,myOptions:i.options};case"player_feedback":return i.player_id!==o.myPlayerId?o:{...o,myFeedback:i.tips};case"headline":return{...o,headlines:[...o.headlines.slice(-19),{text:i.text,cycle:i.cycle}]};case"admin_summary":return{...o,adminSummary:i.text};case"player_left":return{...o,knownPlayers:o.knownPlayers.filter(r=>r.id!==i.player_id)};case"kicked":return i.player_id===o.myPlayerId?{...o,myPlayerId:null,myName:"",myRole:"",error:`Kicked: ${i.reason}`}:o;case"game_paused":return{...o,paused:!0};case"game_resumed":return{...o,paused:!1,secondsRemaining:i.seconds_remaining||o.secondsRemaining};case"debrief":return{...o,debrief:i.stats};case"game_over":return{...o,phase:"game_over"};case"game_reset":return{...bh,connected:o.connected,isHost:o.isHost,gameCode:o.gameCode};case"error":return{...o,error:i.message};default:return o}}}}const b0=ot.createContext(bh),A0=ot.createContext(()=>{}),R0=ot.createContext(null);function Ka(){return ot.useContext(b0)}function C0(){return ot.useContext(A0)}function Gc(){const o=ot.useContext(R0);if(!o)throw new Error("useWsSend must be used inside App");return o}function rd(o){if(o==="/create")return{page:"create"};if(o==="/host")return{page:"host"};if(o==="/join")return{page:"join"};const t=o.match(/^\/(\d{4})$/);return t?{page:"code",code:t[1]}:{page:"home"}}function Ay(){const[o,t]=ot.useState(()=>rd(window.location.pathname));ot.useEffect(()=>{const r=()=>t(rd(window.location.pathname));return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[]);function i(r){window.history.pushState(null,"",r),t(rd(r))}return[o,i]}const w0=ot.createContext(()=>{});function Ah(){return ot.useContext(w0)}const Ry="/ws",Cy=3e4,wy=2e3;function Dy(o,t,i){const r=ot.useRef(null),l=ot.useRef(o);l.current=o;const u=ot.useRef(t);u.current=t;const d=ot.useRef(i);d.current=i;const h=ot.useCallback(p=>{const m=r.current;(m==null?void 0:m.readyState)===WebSocket.OPEN&&m.send(JSON.stringify(p))},[]);return ot.useEffect(()=>{let p=!0,m,_;function x(){if(!p)return;const y=new WebSocket(Ry);r.current=y,y.onopen=()=>{var M;(M=u.current)==null||M.call(u),m=setInterval(()=>{y.readyState===WebSocket.OPEN&&y.send(JSON.stringify({type:"ping"}))},Cy)},y.onmessage=M=>{try{const A=JSON.parse(M.data);l.current(A)}catch{console.warn("[ws] unparseable message",M.data)}},y.onerror=M=>{console.warn("[ws] error",M)},y.onclose=()=>{var M;clearInterval(m),(M=d.current)==null||M.call(d),p&&(_=setTimeout(x,wy))}}return x(),()=>{var y;p=!1,clearInterval(m),clearTimeout(_),(y=r.current)==null||y.close()}},[]),h}function Uy(o,t){switch(t.type){case"generate_with_code":return{...o,code:t.code,copied:!1};case"set_copied":return{...o,copied:t.value}}}function b_(){const o=Ah(),t=C0(),i=Gc(),{gameCode:r}=Ka(),[l,u]=ot.useReducer(Uy,{code:r,copied:!1}),d=l.code?`${window.location.origin}/${l.code}`:null;async function h(){d&&(await navigator.clipboard.writeText(d),u({type:"set_copied",value:!0}),setTimeout(()=>u({type:"set_copied",value:!1}),2e3))}return B.jsxs("div",{style:ni.root,children:[B.jsx("h1",{style:ni.title,children:"🌽 Create Game"}),B.jsx("p",{style:ni.sub,children:"Generate a code and share the link with your players."}),l.code?B.jsxs("div",{style:ni.codeBlock,children:[B.jsx("div",{style:ni.code,children:l.code}),B.jsx("p",{style:ni.hint,children:"Share this link:"}),B.jsxs("div",{style:ni.urlRow,children:[B.jsx("span",{style:ni.url,children:d}),B.jsx("button",{style:ni.copyBtn,onClick:h,children:l.copied?"✓ Copied":"Copy"})]}),B.jsxs("div",{style:ni.actions,children:[B.jsx("button",{style:ni.btn,onClick:()=>{i({type:"admin",command:{cmd:"reset_game"}}),t({type:"set_host"}),o("/host")},children:"Watch as Host →"}),B.jsx("button",{style:{...ni.btn,background:"#333",color:"#888"},onClick:()=>{const p=String(Math.floor(1e3+Math.random()*9e3));t({type:"set_game_code",code:p}),u({type:"generate_with_code",code:p})},children:"New Code"})]})]}):B.jsx("button",{style:ni.btn,onClick:()=>{const p=String(Math.floor(1e3+Math.random()*9e3));t({type:"set_game_code",code:p}),u({type:"generate_with_code",code:p})},children:"Generate Room Code"})]})}const ni={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",gap:"1.5rem",padding:"2rem"},title:{fontSize:"2rem"},sub:{color:"#888",textAlign:"center",maxWidth:360},btn:{background:"#2a7a2a",color:"#fff",border:"none",padding:"0.6rem 1.5rem",borderRadius:4,fontFamily:"inherit",fontSize:"1rem",cursor:"pointer"},codeBlock:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",background:"#111",border:"1px solid #2a2a2a",borderRadius:8,padding:"2rem",width:"100%",maxWidth:400},code:{fontSize:"4rem",fontWeight:"bold",letterSpacing:"0.3em",color:"#7ec87e"},hint:{color:"#666",fontSize:"0.8rem",margin:0},urlRow:{display:"flex",alignItems:"center",gap:"0.5rem",background:"#1a1a1a",border:"1px solid #333",borderRadius:4,padding:"0.4rem 0.75rem",width:"100%"},url:{flex:1,fontSize:"0.85rem",color:"#aaa",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},copyBtn:{background:"transparent",border:"1px solid #444",color:"#aaa",padding:"0.2rem 0.6rem",borderRadius:3,fontFamily:"inherit",fontSize:"0.8rem",cursor:"pointer",flexShrink:0},actions:{display:"flex",gap:"0.75rem",marginTop:"0.5rem"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="172",Ly=0,A_=1,Ny=2,D0=1,Oy=2,oa=3,Ya=0,qn=1,la=2,Wa=0,Rs=1,R_=2,C_=3,w_=4,zy=5,Tr=100,Py=101,By=102,Fy=103,Iy=104,Hy=200,Gy=201,Vy=202,ky=203,Bd=204,Fd=205,Xy=206,Wy=207,qy=208,jy=209,Yy=210,Zy=211,Ky=212,Qy=213,Jy=214,Id=0,Hd=1,Gd=2,Ds=3,Vd=4,kd=5,Xd=6,Wd=7,U0=0,$y=1,eS=2,qa=0,tS=1,nS=2,iS=3,aS=4,rS=5,sS=6,oS=7,L0=300,Us=301,Ls=302,qd=303,jd=304,Vc=306,Yd=1e3,Ar=1001,Zd=1002,Ci=1003,lS=1004,ac=1005,Bi=1006,sd=1007,Rr=1008,ha=1009,N0=1010,O0=1011,Go=1012,Ch=1013,Cr=1014,ca=1015,Vo=1016,wh=1017,Dh=1018,Ns=1020,z0=35902,P0=1021,B0=1022,Ri=1023,F0=1024,I0=1025,Cs=1026,Os=1027,H0=1028,Uh=1029,G0=1030,Lh=1031,Nh=1033,wc=33776,Dc=33777,Uc=33778,Lc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,eh=36196,th=37492,nh=37496,ih=37808,ah=37809,rh=37810,sh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,Nc=36492,_h=36494,vh=36495,V0=36283,xh=36284,yh=36285,Sh=36286,cS=3200,uS=3201,fS=0,dS=1,Xa="",pi="srgb",zs="srgb-linear",Pc="linear",Gt="srgb",cs=7680,D_=519,hS=512,pS=513,mS=514,k0=515,gS=516,_S=517,vS=518,xS=519,U_=35044,L_="300 es",ua=2e3,Bc=2001;class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Mh=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function yS(o,t){return(o%t+t)%t}function ld(o,t,i){return(1-i)*o+i*t}function Oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(t,i,r,l,u,d,h,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m)}set(t,i,r,l,u,d,h,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],_=r[4],x=r[7],y=r[2],M=r[5],A=r[8],R=l[0],S=l[3],v=l[6],F=l[1],N=l[4],D=l[7],q=l[2],G=l[5],z=l[8];return u[0]=d*R+h*F+p*q,u[3]=d*S+h*N+p*G,u[6]=d*v+h*D+p*z,u[1]=m*R+_*F+x*q,u[4]=m*S+_*N+x*G,u[7]=m*v+_*D+x*z,u[2]=y*R+M*F+A*q,u[5]=y*S+M*N+A*G,u[8]=y*v+M*D+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return i*d*_-i*h*m-r*u*_+r*h*p+l*u*m-l*d*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],x=_*d-h*m,y=h*p-_*u,M=m*u-d*p,A=i*x+r*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(l*m-_*r)*R,t[2]=(h*r-l*d)*R,t[3]=y*R,t[4]=(_*i-l*p)*R,t[5]=(l*u-h*i)*R,t[6]=M*R,t[7]=(r*p-m*i)*R,t[8]=(d*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(cd.makeScale(t,i)),this}rotate(t){return this.premultiply(cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cd=new ct;function X0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function SS(){const o=Fc("canvas");return o.style.display="block",o}const N_={};function Ts(o){o in N_||(N_[o]=!0,console.warn(o))}function MS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function ES(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function TS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const O_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bS(){const o={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Gt&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Pc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[zs]:{primaries:t,whitePoint:r,transfer:Pc,toXYZ:O_,fromXYZ:z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:O_,fromXYZ:z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const wt=bS();function da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let us;class AS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=Fc("canvas")),us.width=t.width,us.height=t.height;const r=us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=us}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=da(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(da(i[r]/255)*255):i[r]=da(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RS=0;class W0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ud(l[d].image)):u.push(ud(l[d]))}else u=ud(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?AS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CS=0;class jn extends Bs{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=Ar,l=Ar,u=Bi,d=Rr,h=Ri,p=ha,m=jn.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=ko(),this.name="",this.source=new W0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=L0;jn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],_=p[4],x=p[8],y=p[1],M=p[5],A=p[9],R=p[2],S=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-R)<.01&&Math.abs(A-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+R)<.1&&Math.abs(A+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,D=(M+1)/2,q=(v+1)/2,G=(_+y)/4,z=(x+R)/4,Q=(A+S)/4;return N>D&&N>q?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=z/r):D>q?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=G/l,u=Q/l):q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),r=z/u,l=Q/u),this.set(r,l,u,i),this}let F=Math.sqrt((S-A)*(S-A)+(x-R)*(x-R)+(y-_)*(y-_));return Math.abs(F)<.001&&(F=1),this.x=(S-A)/F,this.y=(x-R)/F,this.z=(y-_)/F,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wS extends Bs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new jn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new W0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends wS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class q0 extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DS extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],_=r[l+2],x=r[l+3];const y=u[d+0],M=u[d+1],A=u[d+2],R=u[d+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x;return}if(h===1){t[i+0]=y,t[i+1]=M,t[i+2]=A,t[i+3]=R;return}if(x!==R||p!==y||m!==M||_!==A){let S=1-h;const v=p*y+m*M+_*A+x*R,F=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const q=Math.sqrt(N),G=Math.atan2(q,v*F);S=Math.sin(S*G)/q,h=Math.sin(h*G)/q}const D=h*F;if(p=p*S+y*D,m=m*S+M*D,_=_*S+A*D,x=x*S+R*D,S===1-h){const q=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=q,m*=q,_*=q,x*=q}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],x=u[d],y=u[d+1],M=u[d+2],A=u[d+3];return t[i]=h*A+_*x+p*M-m*y,t[i+1]=p*A+_*y+m*x-h*M,t[i+2]=m*A+_*M+h*y-p*x,t[i+3]=_*A-h*x-p*y-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),x=h(u/2),y=p(r/2),M=p(l/2),A=p(u/2);switch(d){case"XYZ":this._x=y*_*x+m*M*A,this._y=m*M*x-y*_*A,this._z=m*_*A+y*M*x,this._w=m*_*x-y*M*A;break;case"YXZ":this._x=y*_*x+m*M*A,this._y=m*M*x-y*_*A,this._z=m*_*A-y*M*x,this._w=m*_*x+y*M*A;break;case"ZXY":this._x=y*_*x-m*M*A,this._y=m*M*x+y*_*A,this._z=m*_*A+y*M*x,this._w=m*_*x-y*M*A;break;case"ZYX":this._x=y*_*x-m*M*A,this._y=m*M*x+y*_*A,this._z=m*_*A-y*M*x,this._w=m*_*x+y*M*A;break;case"YZX":this._x=y*_*x+m*M*A,this._y=m*M*x+y*_*A,this._z=m*_*A-y*M*x,this._w=m*_*x-y*M*A;break;case"XZY":this._x=y*_*x-m*M*A,this._y=m*M*x-y*_*A,this._z=m*_*A+y*M*x,this._w=m*_*x+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],x=i[10],y=r+h+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(_-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+d*h+l*m-u*p,this._y=l*_+d*p+u*h-r*m,this._z=u*_+d*m+r*p-l*h,this._w=d*_-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,h),x=Math.sin((1-i)*_)/m,y=Math.sin(i*_)/m;return this._w=d*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(P_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*r),_=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+p*m+d*x-h*_,this.y=r+p*_+h*m-u*x,this.z=l+p*x+u*_-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new re,P_=new Xo;class Wo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),sc.subVectors(this.max,zo),fs.subVectors(t.a,zo),ds.subVectors(t.b,zo),hs.subVectors(t.c,zo),Fa.subVectors(ds,fs),Ia.subVectors(hs,ds),gr.subVectors(fs,hs);let i=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-gr.z,gr.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,gr.z,0,-gr.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-gr.y,gr.x,0];return!dd(i,fs,ds,hs,sc)||(i=[1,0,0,0,1,0,0,0,1],!dd(i,fs,ds,hs,sc))?!1:(oc.crossVectors(Fa,Ia),i=[oc.x,oc.y,oc.z],dd(i,fs,ds,hs,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const na=[new re,new re,new re,new re,new re,new re,new re,new re],Mi=new re,rc=new Wo,fs=new re,ds=new re,hs=new re,Fa=new re,Ia=new re,gr=new re,zo=new re,sc=new re,oc=new re,_r=new re;function dd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){_r.fromArray(o,u);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),p=t.dot(_r),m=i.dot(_r),_=r.dot(_r);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const US=new Wo,Po=new re,hd=new re;class kc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):US.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(hd)),this.expandByPoint(Po.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new re,pd=new re,lc=new re,Ha=new re,md=new re,cc=new re,gd=new re;class j0{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){pd.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(pd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(lc),h=Ha.dot(this.direction),p=-Ha.dot(lc),m=Ha.lengthSq(),_=Math.abs(1-d*d);let x,y,M,A;if(_>0)if(x=d*p-h,y=d*h-p,A=u*_,x>=0)if(y>=-A)if(y<=A){const R=1/_;x*=R,y*=R,M=x*(x+d*y+2*h)+y*(d*x+y+2*p)+m}else y=u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*p)+m;else y=-u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*p)+m;else y<=-A?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+y*(y+2*p)+m):y<=A?(x=0,y=Math.min(Math.max(-u,-p),u),M=y*(y+2*p)+m):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+y*(y+2*p)+m);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(pd).addScaledVector(lc,y),M}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(r=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),_>=0?(u=(t.min.y-y.y)*_,d=(t.max.y-y.y)*_):(u=(t.max.y-y.y)*_,d=(t.min.y-y.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-y.z)*x,p=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,p=(t.min.z-y.z)*x),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,u){md.subVectors(i,t),cc.subVectors(r,t),gd.crossVectors(md,cc);let d=this.direction.dot(gd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,t);const p=h*this.direction.dot(cc.crossVectors(Ha,cc));if(p<0)return null;const m=h*this.direction.dot(md.cross(Ha));if(m<0||p+m>d)return null;const _=-h*Ha.dot(gd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,r,l,u,d,h,p,m,_,x,y,M,A,R,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m,_,x,y,M,A,R,S)}set(t,i,r,l,u,d,h,p,m,_,x,y,M,A,R,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=y,v[3]=M,v[7]=A,v[11]=R,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ps.setFromMatrixColumn(t,0).length(),u=1/ps.setFromMatrixColumn(t,1).length(),d=1/ps.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=d*_,M=d*x,A=h*_,R=h*x;i[0]=p*_,i[4]=-p*x,i[8]=m,i[1]=M+A*m,i[5]=y-R*m,i[9]=-h*p,i[2]=R-y*m,i[6]=A+M*m,i[10]=d*p}else if(t.order==="YXZ"){const y=p*_,M=p*x,A=m*_,R=m*x;i[0]=y+R*h,i[4]=A*h-M,i[8]=d*m,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=R+y*h,i[10]=d*p}else if(t.order==="ZXY"){const y=p*_,M=p*x,A=m*_,R=m*x;i[0]=y-R*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=R-y*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const y=d*_,M=d*x,A=h*_,R=h*x;i[0]=p*_,i[4]=A*m-M,i[8]=y*m+R,i[1]=p*x,i[5]=R*m+y,i[9]=M*m-A,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const y=d*p,M=d*m,A=h*p,R=h*m;i[0]=p*_,i[4]=R-y*x,i[8]=A*x+M,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=M*x+A,i[10]=y-R*x}else if(t.order==="XZY"){const y=d*p,M=d*m,A=h*p,R=h*m;i[0]=p*_,i[4]=-x,i[8]=m*_,i[1]=y*x+R,i[5]=d*_,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*_,i[10]=R*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LS,t,NS)}lookAt(t,i,r){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ga.crossVectors(r,ii),Ga.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ga.crossVectors(r,ii)),Ga.normalize(),uc.crossVectors(ii,Ga),l[0]=Ga.x,l[4]=uc.x,l[8]=ii.x,l[1]=Ga.y,l[5]=uc.y,l[9]=ii.y,l[2]=Ga.z,l[6]=uc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],_=r[1],x=r[5],y=r[9],M=r[13],A=r[2],R=r[6],S=r[10],v=r[14],F=r[3],N=r[7],D=r[11],q=r[15],G=l[0],z=l[4],Q=l[8],w=l[12],C=l[1],V=l[5],ce=l[9],oe=l[13],ge=l[2],_e=l[6],O=l[10],K=l[14],Z=l[3],Se=l[7],be=l[11],L=l[15];return u[0]=d*G+h*C+p*ge+m*Z,u[4]=d*z+h*V+p*_e+m*Se,u[8]=d*Q+h*ce+p*O+m*be,u[12]=d*w+h*oe+p*K+m*L,u[1]=_*G+x*C+y*ge+M*Z,u[5]=_*z+x*V+y*_e+M*Se,u[9]=_*Q+x*ce+y*O+M*be,u[13]=_*w+x*oe+y*K+M*L,u[2]=A*G+R*C+S*ge+v*Z,u[6]=A*z+R*V+S*_e+v*Se,u[10]=A*Q+R*ce+S*O+v*be,u[14]=A*w+R*oe+S*K+v*L,u[3]=F*G+N*C+D*ge+q*Z,u[7]=F*z+N*V+D*_e+q*Se,u[11]=F*Q+N*ce+D*O+q*be,u[15]=F*w+N*oe+D*K+q*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],p=t[9],m=t[13],_=t[2],x=t[6],y=t[10],M=t[14],A=t[3],R=t[7],S=t[11],v=t[15];return A*(+u*p*x-l*m*x-u*h*y+r*m*y+l*h*M-r*p*M)+R*(+i*p*M-i*m*y+u*d*y-l*d*M+l*m*_-u*p*_)+S*(+i*m*x-i*h*M-u*d*x+r*d*M+u*h*_-r*m*_)+v*(-l*h*_-i*p*x+i*h*y+l*d*x-r*d*y+r*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],x=t[9],y=t[10],M=t[11],A=t[12],R=t[13],S=t[14],v=t[15],F=x*S*m-R*y*m+R*p*M-h*S*M-x*p*v+h*y*v,N=A*y*m-_*S*m-A*p*M+d*S*M+_*p*v-d*y*v,D=_*R*m-A*x*m+A*h*M-d*R*M-_*h*v+d*x*v,q=A*x*p-_*R*p-A*h*y+d*R*y+_*h*S-d*x*S,G=i*F+r*N+l*D+u*q;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return t[0]=F*z,t[1]=(R*y*u-x*S*u-R*l*M+r*S*M+x*l*v-r*y*v)*z,t[2]=(h*S*u-R*p*u+R*l*m-r*S*m-h*l*v+r*p*v)*z,t[3]=(x*p*u-h*y*u-x*l*m+r*y*m+h*l*M-r*p*M)*z,t[4]=N*z,t[5]=(_*S*u-A*y*u+A*l*M-i*S*M-_*l*v+i*y*v)*z,t[6]=(A*p*u-d*S*u-A*l*m+i*S*m+d*l*v-i*p*v)*z,t[7]=(d*y*u-_*p*u+_*l*m-i*y*m-d*l*M+i*p*M)*z,t[8]=D*z,t[9]=(A*x*u-_*R*u-A*r*M+i*R*M+_*r*v-i*x*v)*z,t[10]=(d*R*u-A*h*u+A*r*m-i*R*m-d*r*v+i*h*v)*z,t[11]=(_*h*u-d*x*u-_*r*m+i*x*m+d*r*M-i*h*M)*z,t[12]=q*z,t[13]=(_*R*l-A*x*l+A*r*y-i*R*y-_*r*S+i*x*S)*z,t[14]=(A*h*l-d*R*l-A*r*p+i*R*p+d*r*S-i*h*S)*z,t[15]=(d*x*l-_*h*l+_*r*p-i*x*p-d*r*y+i*h*y)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,p=t.z,m=u*d,_=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*d,0,m*p-l*h,_*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,_=d+d,x=h+h,y=u*m,M=u*_,A=u*x,R=d*_,S=d*x,v=h*x,F=p*m,N=p*_,D=p*x,q=r.x,G=r.y,z=r.z;return l[0]=(1-(R+v))*q,l[1]=(M+D)*q,l[2]=(A-N)*q,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(y+v))*G,l[6]=(S+F)*G,l[7]=0,l[8]=(A+N)*z,l[9]=(S-F)*z,l[10]=(1-(y+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ps.set(l[0],l[1],l[2]).length();const d=ps.set(l[4],l[5],l[6]).length(),h=ps.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const m=1/u,_=1/d,x=1/h;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=x,Ei.elements[9]*=x,Ei.elements[10]*=x,i.setFromRotationMatrix(Ei),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=ua){const p=this.elements,m=2*u/(i-t),_=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let M,A;if(h===ua)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Bc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=ua){const p=this.elements,m=1/(i-t),_=1/(r-l),x=1/(d-u),y=(i+t)*m,M=(r+l)*_;let A,R;if(h===ua)A=(d+u)*x,R=-2*x;else if(h===Bc)A=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ps=new re,Ei=new rn,LS=new re(0,0,0),NS=new re(1,1,1),Ga=new re,uc=new re,ii=new re,B_=new rn,F_=new Xo;class pa{constructor(t=0,i=0,r=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],_=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return B_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return F_.setFromEuler(this),this.setFromQuaternion(F_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OS=0;const I_=new re,ms=new Xo,aa=new rn,fc=new re,Bo=new re,zS=new re,PS=new Xo,H_=new re(1,0,0),G_=new re(0,1,0),V_=new re(0,0,1),k_={type:"added"},BS={type:"removed"},gs={type:"childadded",child:null},_d={type:"childremoved",child:null};class Yn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new re,i=new pa,r=new Xo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ct}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ms.setFromAxisAngle(t,i),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,i){return ms.setFromAxisAngle(t,i),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(H_,t)}rotateY(t){return this.rotateOnAxis(G_,t)}rotateZ(t){return this.rotateOnAxis(V_,t)}translateOnAxis(t,i){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(H_,t)}translateY(t){return this.translateOnAxis(G_,t)}translateZ(t){return this.translateOnAxis(V_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Bo,fc,this.up):aa.lookAt(fc,Bo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),ms.setFromRotationMatrix(aa),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k_),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(BS),_d.child=t,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k_),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,zS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,PS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(t.shapes,x)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),_=d(t.images),x=d(t.shapes),y=d(t.skeletons),M=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new re(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new re,ra=new re,vd=new re,sa=new re,_s=new re,vs=new re,X_=new re,xd=new re,yd=new re,Sd=new re,Md=new an,Ed=new an,Td=new an;class Ai{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ti.subVectors(l,i),ra.subVectors(r,i),vd.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(ra),p=Ti.dot(vd),m=ra.dot(ra),_=ra.dot(vd),x=d*m-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(m*p-h*_)*y,A=(d*_-h*p)*y;return u.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,u,d,h,p){return this.getBarycoord(t,i,r,l,sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,sa.x),p.addScaledVector(d,sa.y),p.addScaledVector(h,sa.z),p)}static getInterpolatedAttribute(t,i,r,l,u,d){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(t,i),Ed.fromBufferAttribute(t,r),Td.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Md,u.x),d.addScaledVector(Ed,u.y),d.addScaledVector(Td,u.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),ra.subVectors(t,i),Ti.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Ti.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ai.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;_s.subVectors(l,r),vs.subVectors(u,r),xd.subVectors(t,r);const p=_s.dot(xd),m=vs.dot(xd);if(p<=0&&m<=0)return i.copy(r);yd.subVectors(t,l);const _=_s.dot(yd),x=vs.dot(yd);if(_>=0&&x<=_)return i.copy(l);const y=p*x-_*m;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(r).addScaledVector(_s,d);Sd.subVectors(t,u);const M=_s.dot(Sd),A=vs.dot(Sd);if(A>=0&&M<=A)return i.copy(u);const R=M*m-p*A;if(R<=0&&m>=0&&A<=0)return h=m/(m-A),i.copy(r).addScaledVector(vs,h);const S=_*A-M*x;if(S<=0&&x-_>=0&&M-A>=0)return X_.subVectors(u,l),h=(x-_)/(x-_+(M-A)),i.copy(l).addScaledVector(X_,h);const v=1/(S+R+y);return d=R*v,h=y*v,i.copy(r).addScaledVector(_s,d).addScaledVector(vs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},dc={h:0,s:0,l:0};function bd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ut{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=wt.workingColorSpace){return this.r=t,this.g=i,this.b=r,wt.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=wt.workingColorSpace){if(t=yS(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=bd(d,u,t+1/3),this.g=bd(d,u,t),this.b=bd(d,u,t-1/3)}return wt.toWorkingColorSpace(this,l),this}setStyle(t,i=pi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=Z0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return wt.fromWorkingColorSpace(Un.copy(this),t),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const x=d-h;switch(m=_<=.5?x/(d+h):x/(2-d-h),d){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=wt.workingColorSpace){return wt.fromWorkingColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=pi){wt.fromWorkingColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+i,Va.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Va),t.getHSL(dc);const r=ld(Va.h,dc.h,i),l=ld(Va.s,dc.s,i),u=ld(Va.l,dc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ut;Ut.NAMES=Z0;let FS=0;class qo extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Rs,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Fd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Fd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class K0 extends qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new re,hc=new kt;class wi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=U_,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==U_&&(t.usage=this.usage),t}}class Q0 extends wi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class J0 extends wi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ja extends wi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let IS=0;const hi=new rn,Ad=new Yn,xs=new re,ai=new Wo,Fo=new Wo,vn=new re;class mi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X0(t)?J0:Q0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ct().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ja(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ai.min,Fo.min),ai.expandByPoint(vn),vn.addVectors(ai.max,Fo.max),ai.expandByPoint(vn)):(ai.expandByPoint(Fo.min),ai.expandByPoint(Fo.max))}ai.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)vn.fromBufferAttribute(h,m),p&&(xs.fromBufferAttribute(t,m),vn.add(xs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let Q=0;Q<r.count;Q++)h[Q]=new re,p[Q]=new re;const m=new re,_=new re,x=new re,y=new kt,M=new kt,A=new kt,R=new re,S=new re;function v(Q,w,C){m.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),y.fromBufferAttribute(u,Q),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),_.sub(m),x.sub(m),M.sub(y),A.sub(y);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(V),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(V),h[Q].add(R),h[w].add(R),h[C].add(R),p[Q].add(S),p[w].add(S),p[C].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let Q=0,w=F.length;Q<w;++Q){const C=F[Q],V=C.start,ce=C.count;for(let oe=V,ge=V+ce;oe<ge;oe+=3)v(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const N=new re,D=new re,q=new re,G=new re;function z(Q){q.fromBufferAttribute(l,Q),G.copy(q);const w=h[Q];N.copy(w),N.sub(q.multiplyScalar(q.dot(w))).normalize(),D.crossVectors(G,w);const V=D.dot(p[Q])<0?-1:1;d.setXYZW(Q,N.x,N.y,N.z,V)}for(let Q=0,w=F.length;Q<w;++Q){const C=F[Q],V=C.start,ce=C.count;for(let oe=V,ge=V+ce;oe<ge;oe+=3)z(t.getX(oe+0)),z(t.getX(oe+1)),z(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new re,u=new re,d=new re,h=new re,p=new re,m=new re,_=new re,x=new re;if(t)for(let y=0,M=t.count;y<M;y+=3){const A=t.getX(y+0),R=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),h.add(_),p.add(_),m.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,x=h.normalized,y=new m.constructor(p.length*_);let M=0,A=0;for(let R=0,S=p.length;R<S;R++){h.isInterleavedBufferAttribute?M=p[R]*h.data.stride+h.offset:M=p[R]*_;for(let v=0;v<_;v++)y[A++]=m[M++]}return new wi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let _=0,x=m.length;_<x;_++){const y=m[_],M=t(y,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,y=m.length;x<y;x++){const M=m[x];_.push(M.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],x=u[m];for(let y=0,M=x.length;y<M;y++)_.push(x[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,_=d.length;m<_;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W_=new rn,vr=new j0,pc=new kc,q_=new re,mc=new re,gc=new re,_c=new re,Rd=new re,vc=new re,j_=new re,xc=new re;class fa extends Yn{constructor(t=new mi,i=new K0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){vc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=h[p],x=u[p];_!==0&&(Rd.fromBufferAttribute(x,t),d?vc.addScaledVector(Rd,_):vc.addScaledVector(Rd.sub(i),_))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),vr.copy(t.ray).recast(t.near),!(pc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(pc,q_)===null||vr.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(W_.copy(u).invert(),vr.copy(t.ray).applyMatrix4(W_),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=y.length;A<R;A++){const S=y[A],v=d[S.materialIndex],F=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=F,q=N;D<q;D+=3){const G=h.getX(D),z=h.getX(D+1),Q=h.getX(D+2);l=yc(this,v,t,r,m,_,x,G,z,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let S=A,v=R;S<v;S+=3){const F=h.getX(S),N=h.getX(S+1),D=h.getX(S+2);l=yc(this,d,t,r,m,_,x,F,N,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,R=y.length;A<R;A++){const S=y[A],v=d[S.materialIndex],F=Math.max(S.start,M.start),N=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=F,q=N;D<q;D+=3){const G=D,z=D+1,Q=D+2;l=yc(this,v,t,r,m,_,x,G,z,Q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let S=A,v=R;S<v;S+=3){const F=S,N=S+1,D=S+2;l=yc(this,d,t,r,m,_,x,F,N,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function HS(o,t,i,r,l,u,d,h){let p;if(t.side===qn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,t.side===Ya,h),p===null)return null;xc.copy(h),xc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(xc);return m<i.near||m>i.far?null:{distance:m,point:xc.clone(),object:o}}function yc(o,t,i,r,l,u,d,h,p,m){o.getVertexPosition(h,mc),o.getVertexPosition(p,gc),o.getVertexPosition(m,_c);const _=HS(o,t,i,r,mc,gc,_c,j_);if(_){const x=new re;Ai.getBarycoord(j_,mc,gc,_c,x),l&&(_.uv=Ai.getInterpolatedAttribute(l,h,p,m,x,new kt)),u&&(_.uv1=Ai.getInterpolatedAttribute(u,h,p,m,x,new kt)),d&&(_.normal=Ai.getInterpolatedAttribute(d,h,p,m,x,new re),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new re,materialIndex:0};Ai.getNormal(mc,gc,_c,y.normal),_.face=y,_.barycoord=x}return _}class jo extends mi{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],_=[],x=[];let y=0,M=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new ja(m,3)),this.setAttribute("normal",new ja(_,3)),this.setAttribute("uv",new ja(x,2));function A(R,S,v,F,N,D,q,G,z,Q,w){const C=D/z,V=q/Q,ce=D/2,oe=q/2,ge=G/2,_e=z+1,O=Q+1;let K=0,Z=0;const Se=new re;for(let be=0;be<O;be++){const L=be*V-oe;for(let ie=0;ie<_e;ie++){const ye=ie*C-ce;Se[R]=ye*F,Se[S]=L*N,Se[v]=ge,m.push(Se.x,Se.y,Se.z),Se[R]=0,Se[S]=0,Se[v]=G>0?1:-1,_.push(Se.x,Se.y,Se.z),x.push(ie/z),x.push(1-be/Q),K+=1}}for(let be=0;be<Q;be++)for(let L=0;L<z;L++){const ie=y+L+_e*be,ye=y+L+_e*(be+1),Y=y+(L+1)+_e*(be+1),fe=y+(L+1)+_e*be;p.push(ie,ye,fe),p.push(ye,Y,fe),Z+=6}h.addGroup(M,Z,w),M+=Z,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const r=Ps(o[i]);for(const l in r)t[l]=r[l]}return t}function GS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function $0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const VS={clone:Ps,merge:zn};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=GS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ev extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ua}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new re,Y_=new kt,Z_=new kt;class bi extends ev{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,i){return this.getViewBounds(t,Y_,Z_),i.subVectors(Z_,Y_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(od*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ss=1;class WS extends Yn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(ys,Ss,t,i);l.layers=this.layers,this.add(l);const u=new bi(ys,Ss,t,i);u.layers=this.layers,this.add(u);const d=new bi(ys,Ss,t,i);d.layers=this.layers,this.add(d);const h=new bi(ys,Ss,t,i);h.layers=this.layers,this.add(h);const p=new bi(ys,Ss,t,i);p.layers=this.layers,this.add(p);const m=new bi(ys,Ss,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(t===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,_]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,y,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class tv extends jn{constructor(t,i,r,l,u,d,h,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Us,super(t,i,r,l,u,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qS extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new tv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),u=new Za({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Wa});u.uniforms.tEquirect.value=i;const d=new fa(l,u),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Bi),new WS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class jS extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Cd=new re,YS=new re,ZS=new ct;class Mr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Cd.subVectors(r,i).cross(YS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Cd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||ZS.getNormalMatrix(t),l=this.coplanarPoint(Cd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new kc,Sc=new re;class nv{constructor(t=new Mr,i=new Mr,r=new Mr,l=new Mr,u=new Mr,d=new Mr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ua){const r=this.planes,l=t.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],_=l[5],x=l[6],y=l[7],M=l[8],A=l[9],R=l[10],S=l[11],v=l[12],F=l[13],N=l[14],D=l[15];if(r[0].setComponents(p-u,y-m,S-M,D-v).normalize(),r[1].setComponents(p+u,y+m,S+M,D+v).normalize(),r[2].setComponents(p+d,y+_,S+A,D+F).normalize(),r[3].setComponents(p-d,y-_,S-A,D-F).normalize(),r[4].setComponents(p-h,y-x,S-R,D-N).normalize(),i===ua)r[5].setComponents(p+h,y+x,S+R,D+N).normalize();else if(i===Bc)r[5].setComponents(h,x,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oc extends qo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ic=new re,Hc=new re,K_=new rn,Io=new j0,Mc=new kc,wd=new re,Q_=new re;class Ec extends Yn{constructor(t=new mi,i=new Oc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Ic.fromBufferAttribute(i,l-1),Hc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Ic.distanceTo(Hc);t.setAttribute("lineDistance",new ja(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=u,t.ray.intersectsSphere(Mc)===!1)return;K_.copy(l).invert(),Io.copy(t.ray).applyMatrix4(K_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,_=r.index,y=r.attributes.position;if(_!==null){const M=Math.max(0,d.start),A=Math.min(_.count,d.start+d.count);for(let R=M,S=A-1;R<S;R+=m){const v=_.getX(R),F=_.getX(R+1),N=Tc(this,t,Io,p,v,F);N&&i.push(N)}if(this.isLineLoop){const R=_.getX(A-1),S=_.getX(M),v=Tc(this,t,Io,p,R,S);v&&i.push(v)}}else{const M=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let R=M,S=A-1;R<S;R+=m){const v=Tc(this,t,Io,p,R,R+1);v&&i.push(v)}if(this.isLineLoop){const R=Tc(this,t,Io,p,A-1,M);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Tc(o,t,i,r,l,u){const d=o.geometry.attributes.position;if(Ic.fromBufferAttribute(d,l),Hc.fromBufferAttribute(d,u),i.distanceSqToSegment(Ic,Hc,wd,Q_)>r)return;wd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(wd);if(!(p<t.near||p>t.far))return{distance:p,point:Q_.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}class bc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class iv extends jn{constructor(t,i,r,l,u,d,h,p,m,_=Cs){if(_!==Cs&&_!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Cs&&(r=Cr),r===void 0&&_===Os&&(r=Ns),super(null,l,u,d,h,p,_,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:Ci,this.minFilter=p!==void 0?p:Ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Xc extends mi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,x=t/h,y=i/p,M=[],A=[],R=[],S=[];for(let v=0;v<_;v++){const F=v*y-d;for(let N=0;N<m;N++){const D=N*x-u;A.push(D,-F,0),R.push(0,0,1),S.push(N/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let F=0;F<h;F++){const N=F+m*v,D=F+m*(v+1),q=F+1+m*(v+1),G=F+1+m*v;M.push(N,D,G),M.push(D,q,G)}this.setIndex(M),this.setAttribute("position",new ja(A,3)),this.setAttribute("normal",new ja(R,3)),this.setAttribute("uv",new ja(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class KS extends qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QS extends qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class av extends ev{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JS extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function J_(o,t,i,r){const l=$S(r);switch(i){case P0:return o*t;case F0:return o*t;case I0:return o*t*2;case H0:return o*t/l.components*l.byteLength;case Uh:return o*t/l.components*l.byteLength;case G0:return o*t*2/l.components*l.byteLength;case Lh:return o*t*2/l.components*l.byteLength;case B0:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Nh:return o*t*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case eh:case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Nc:case _h:case vh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case V0:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $S(o){switch(o){case ha:case N0:return{byteLength:1,components:1};case Go:case O0:case Vo:return{byteLength:2,components:1};case wh:case Dh:return{byteLength:2,components:4};case Cr:case Ch:case ca:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rv(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function eM(o){const t=new WeakMap;function i(h,p){const m=h.array,_=h.usage,x=m.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,m,_),h.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,p,m){const _=p.array,x=p.updateRanges;if(o.bindBuffer(m,h),x.length===0)o.bufferSubData(m,0,_);else{x.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<x.length;M++){const A=x[y],R=x[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++y,x[y]=R)}x.length=y+1;for(let M=0,A=x.length;M<A;M++){const R=x[M];o.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
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
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
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
#endif`,$M=`struct PhysicalMaterial {
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
}`,eE=`
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,cT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,xT=`#define MATCAP
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
}`,yT=`#define NORMAL
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
}`,ST=`#define NORMAL
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
}`,MT=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,TT=`#define STANDARD
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
}`,bT=`#define STANDARD
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
}`,AT=`#define TOON
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
}`,RT=`#define TOON
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
}`,CT=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:tM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:lM,batching_pars_vertex:cM,batching_vertex:uM,begin_vertex:fM,beginnormal_vertex:dM,bsdfs:hM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:vM,clipping_planes_vertex:xM,color_fragment:yM,color_pars_fragment:SM,color_pars_vertex:MM,color_vertex:EM,common:TM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:AM,displacementmap_pars_vertex:RM,displacementmap_vertex:CM,emissivemap_fragment:wM,emissivemap_pars_fragment:DM,colorspace_fragment:UM,colorspace_pars_fragment:LM,envmap_fragment:NM,envmap_common_pars_fragment:OM,envmap_pars_fragment:zM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:jM,envmap_vertex:BM,fog_vertex:FM,fog_pars_vertex:IM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:kM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:WM,lights_pars_begin:qM,lights_toon_fragment:YM,lights_toon_pars_fragment:ZM,lights_phong_fragment:KM,lights_phong_pars_fragment:QM,lights_physical_fragment:JM,lights_physical_pars_fragment:$M,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:dE,morphinstance_vertex:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:yE,normal_pars_vertex:SE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:CE,packing:wE,premultiplied_alpha_fragment:DE,project_vertex:UE,dithering_fragment:LE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:BE,shadowmap_vertex:FE,shadowmask_pars_fragment:IE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:kE,specularmap_fragment:XE,specularmap_pars_fragment:WE,tonemapping_fragment:qE,tonemapping_pars_fragment:jE,transmission_fragment:YE,transmission_pars_fragment:ZE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:rT,depth_vert:sT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:dT,linedashed_frag:hT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:TT,meshphysical_frag:bT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:UT,sprite_vert:LT,sprite_frag:NT},Le={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},zi={basic:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:zn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:zn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:zn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:zn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:zn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:zn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:zn([Le.common,Le.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:zn([Le.lights,Le.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};zi.physical={uniforms:zn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ac={r:0,b:0,g:0},yr=new pa,OT=new rn;function zT(o,t,i,r,l,u,d){const h=new Ut(0);let p=u===!0?0:1,m,_,x=null,y=0,M=null;function A(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function R(N){let D=!1;const q=A(N);q===null?v(h,p):q&&q.isColor&&(v(q,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(N,D){const q=A(D);q&&(q.isCubeTexture||q.mapping===Vc)?(_===void 0&&(_=new fa(new jo(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Ps(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,z,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),yr.copy(D.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),_.material.uniforms.envMap.value=q,_.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(yr)),_.material.toneMapped=wt.getTransfer(q.colorSpace)!==Gt,(x!==q||y!==q.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=q,y=q.version,M=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):q&&q.isTexture&&(m===void 0&&(m=new fa(new Xc(2,2),new Za({name:"BackgroundMaterial",uniforms:Ps(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=q,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=wt.getTransfer(q.colorSpace)!==Gt,q.matrixAutoUpdate===!0&&q.updateMatrix(),m.material.uniforms.uvTransform.value.copy(q.matrix),(x!==q||y!==q.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=q,y=q.version,M=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,D){N.getRGB(Ac,$0(o)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,D,d)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(N,D=1){h.set(N),p=D,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(h,p)},render:R,addToRenderList:S,dispose:F}}function PT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(C,V,ce,oe,ge){let _e=!1;const O=x(oe,ce,V);u!==O&&(u=O,m(u.object)),_e=M(C,oe,ce,ge),_e&&A(C,oe,ce,ge),ge!==null&&t.update(ge,o.ELEMENT_ARRAY_BUFFER),(_e||d)&&(d=!1,D(C,V,ce,oe),ge!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ge).buffer))}function p(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function x(C,V,ce){const oe=ce.wireframe===!0;let ge=r[C.id];ge===void 0&&(ge={},r[C.id]=ge);let _e=ge[V.id];_e===void 0&&(_e={},ge[V.id]=_e);let O=_e[oe];return O===void 0&&(O=y(p()),_e[oe]=O),O}function y(C){const V=[],ce=[],oe=[];for(let ge=0;ge<i;ge++)V[ge]=0,ce[ge]=0,oe[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ce,attributeDivisors:oe,object:C,attributes:{},index:null}}function M(C,V,ce,oe){const ge=u.attributes,_e=V.attributes;let O=0;const K=ce.getAttributes();for(const Z in K)if(K[Z].location>=0){const be=ge[Z];let L=_e[Z];if(L===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),be===void 0||be.attribute!==L||L&&be.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==oe}function A(C,V,ce,oe){const ge={},_e=V.attributes;let O=0;const K=ce.getAttributes();for(const Z in K)if(K[Z].location>=0){let be=_e[Z];be===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const L={};L.attribute=be,be&&be.data&&(L.data=be.data),ge[Z]=L,O++}u.attributes=ge,u.attributesNum=O,u.index=oe}function R(){const C=u.newAttributes;for(let V=0,ce=C.length;V<ce;V++)C[V]=0}function S(C){v(C,0)}function v(C,V){const ce=u.newAttributes,oe=u.enabledAttributes,ge=u.attributeDivisors;ce[C]=1,oe[C]===0&&(o.enableVertexAttribArray(C),oe[C]=1),ge[C]!==V&&(o.vertexAttribDivisor(C,V),ge[C]=V)}function F(){const C=u.newAttributes,V=u.enabledAttributes;for(let ce=0,oe=V.length;ce<oe;ce++)V[ce]!==C[ce]&&(o.disableVertexAttribArray(ce),V[ce]=0)}function N(C,V,ce,oe,ge,_e,O){O===!0?o.vertexAttribIPointer(C,V,ce,ge,_e):o.vertexAttribPointer(C,V,ce,oe,ge,_e)}function D(C,V,ce,oe){R();const ge=oe.attributes,_e=ce.getAttributes(),O=V.defaultAttributeValues;for(const K in _e){const Z=_e[K];if(Z.location>=0){let Se=ge[K];if(Se===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),Se!==void 0){const be=Se.normalized,L=Se.itemSize,ie=t.get(Se);if(ie===void 0)continue;const ye=ie.buffer,Y=ie.type,fe=ie.bytesPerElement,Ee=Y===o.INT||Y===o.UNSIGNED_INT||Se.gpuType===Ch;if(Se.isInterleavedBufferAttribute){const xe=Se.data,He=xe.stride,Pe=Se.offset;if(xe.isInstancedInterleavedBuffer){for(let at=0;at<Z.locationSize;at++)v(Z.location+at,xe.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let at=0;at<Z.locationSize;at++)S(Z.location+at);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let at=0;at<Z.locationSize;at++)N(Z.location+at,L/Z.locationSize,Y,be,He*fe,(Pe+L/Z.locationSize*at)*fe,Ee)}else{if(Se.isInstancedBufferAttribute){for(let xe=0;xe<Z.locationSize;xe++)v(Z.location+xe,Se.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let xe=0;xe<Z.locationSize;xe++)S(Z.location+xe);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let xe=0;xe<Z.locationSize;xe++)N(Z.location+xe,L/Z.locationSize,Y,be,L*fe,L/Z.locationSize*xe*fe,Ee)}}else if(O!==void 0){const be=O[K];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(Z.location,be);break;case 3:o.vertexAttrib3fv(Z.location,be);break;case 4:o.vertexAttrib4fv(Z.location,be);break;default:o.vertexAttrib1fv(Z.location,be)}}}}F()}function q(){Q();for(const C in r){const V=r[C];for(const ce in V){const oe=V[ce];for(const ge in oe)_(oe[ge].object),delete oe[ge];delete V[ce]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ce in V){const oe=V[ce];for(const ge in oe)_(oe[ge].object),delete oe[ge];delete V[ce]}delete r[C.id]}function z(C){for(const V in r){const ce=r[V];if(ce[C.id]===void 0)continue;const oe=ce[C.id];for(const ge in oe)_(oe[ge].object),delete oe[ge];delete ce[C.id]}}function Q(){w(),d=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:S,disableUnusedAttributes:F}}function BT(o,t,i){let r;function l(m){r=m}function u(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function d(m,_,x){x!==0&&(o.drawArraysInstanced(r,m,_,x),i.update(_,r,x))}function h(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let M=0;for(let A=0;A<x;A++)M+=_[A];i.update(M,r,1)}function p(m,_,x,y){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)d(m[A],_[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,x);let A=0;for(let R=0;R<x;R++)A+=_[R]*y[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function FT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ri&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Q=z===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ha&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ca&&!Q)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:q,maxSamples:G}}function IT(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Mr,h=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||r!==0||l;return l=y,r=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,M){const A=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||u&&!S)u?_(null):m();else{const F=u?0:r,N=F*4;let D=v.clippingState||null;p.value=D,D=_(A,y,N,M);for(let q=0;q!==N;++q)D[q]=i[q];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,y,M,A){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=p.value,A!==!0||S===null){const v=M+R*4,F=y.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,D=M;N!==R;++N,D+=4)d.copy(x[N]).applyMatrix4(F,h),d.normal.toArray(S,D),S[D+3]=d.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function HT(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Us:h===jd&&(d.mapping=Ls),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===jd)if(t.has(d)){const p=t.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new qS(p.height);return m.fromEquirectangularTexture(o,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,$_=[.125,.215,.35,.446,.526,.582],br=20,Dd=new av,e0=new Ut;let Ud=null,Ld=0,Nd=0,Od=!1;const Er=(1+Math.sqrt(5))/2,Ms=1/Er,t0=[new re(-Er,Ms,0),new re(Er,Ms,0),new re(-Ms,0,Er),new re(Ms,0,Er),new re(0,Er,-Ms),new re(0,Er,Ms),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class n0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Nd),this._renderer.xr.enabled=Od,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:Vo,format:Ri,colorSpace:zs,depthBuffer:!1},l=i0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(u)),this._blurMaterial=VT(u,t,i)}return l}_compileMaterial(t){const i=new fa(this._lodPlanes[0],t);this._renderer.compile(i,Dd)}_sceneToCubeUV(t,i,r,l){const h=new bi(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(e0),_.toneMapping=qa,_.autoClear=!1;const M=new K0({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),A=new fa(new jo,M);let R=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,R=!0):(M.color.copy(e0),R=!0);for(let v=0;v<6;v++){const F=v%3;F===0?(h.up.set(0,p[v],0),h.lookAt(m[v],0,0)):F===1?(h.up.set(0,0,p[v]),h.lookAt(0,m[v],0)):(h.up.set(0,p[v],0),h.lookAt(0,0,m[v]));const N=this._cubeSize;Rc(l,F*N,v>2?N:0,N,N),_.setRenderTarget(l),R&&_.render(A,h),_.render(t,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Us||t.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new fa(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Rc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Dd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=t0[(l-u-1)%t0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new fa(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*br-1),R=u/A,S=isFinite(u)?1+Math.floor(_*R):br;S>br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${br}`);const v=[];let F=0;for(let z=0;z<br;++z){const Q=z/R,w=Math.exp(-Q*Q/2);v.push(w),z===0?F+=w:z<S&&(F+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/F;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:N}=this;y.dTheta.value=A,y.mipInt.value=N-r;const D=this._sizeLods[l],q=3*D*(l>N-bs?l-N+bs:0),G=4*(this._cubeSize-D);Rc(i,q,G,3*D,2*D),p.setRenderTarget(i),p.render(x,Dd)}}function GT(o){const t=[],i=[],r=[];let l=o;const u=o-bs+1+$_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-bs?p=$_[d-o+bs-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,A=6,R=3,S=2,v=1,F=new Float32Array(R*A*M),N=new Float32Array(S*A*M),D=new Float32Array(v*A*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,Q=G>2?0:-1,w=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];F.set(w,R*A*G),N.set(y,S*A*G);const C=[G,G,G,G,G,G];D.set(C,v*A*G)}const q=new mi;q.setAttribute("position",new wi(F,R)),q.setAttribute("uv",new wi(N,S)),q.setAttribute("faceIndex",new wi(D,v)),t.push(q),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function i0(o,t,i){const r=new wr(o,t,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function VT(o,t,i){const r=new Float32Array(br),l=new re(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function a0(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function r0(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function kT(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===qd||p===jd,_=p===Us||p===Ls;if(m||_){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new n0(o)),x=m?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new n0(o)),x=m?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function XT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ts("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function WT(o,t,i,r){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function p(x){const y=x.attributes;for(const M in y)t.update(y[M],o.ARRAY_BUFFER)}function m(x){const y=[],M=x.index,A=x.attributes.position;let R=0;if(M!==null){const F=M.array;R=M.version;for(let N=0,D=F.length;N<D;N+=3){const q=F[N+0],G=F[N+1],z=F[N+2];y.push(q,G,G,z,z,q)}}else if(A!==void 0){const F=A.array;R=A.version;for(let N=0,D=F.length/3-1;N<D;N+=3){const q=N+0,G=N+1,z=N+2;y.push(q,G,G,z,z,q)}}else return;const S=new(X0(y)?J0:Q0)(y,1);S.version=R;const v=u.get(x);v&&t.remove(v),u.set(x,S)}function _(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:h,update:p,getWireframeAttribute:_}}function qT(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function p(y,M){o.drawElements(r,M,u,y*d),i.update(M,r,1)}function m(y,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,y*d,A),i.update(M,r,A))}function _(y,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,y,0,A);let S=0;for(let v=0;v<A;v++)S+=M[v];i.update(S,r,1)}function x(y,M,A,R){if(A===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)m(y[v]/d,M[v],R[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,y,0,R,0,A);let v=0;for(let F=0;F<A;F++)v+=M[F]*R[F];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function jT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YT(o,t,i){const r=new WeakMap,l=new an;function u(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let C=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),R===!0&&(D=2),S===!0&&(D=3);let q=h.attributes.position.count*D,G=1;q>t.maxTextureSize&&(G=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const z=new Float32Array(q*G*4*x),Q=new q0(z,q,G,x);Q.type=ca,Q.needsUpdate=!0;const w=D*4;for(let V=0;V<x;V++){const ce=v[V],oe=F[V],ge=N[V],_e=q*G*4*V;for(let O=0;O<ce.count;O++){const K=O*w;A===!0&&(l.fromBufferAttribute(ce,O),z[_e+K+0]=l.x,z[_e+K+1]=l.y,z[_e+K+2]=l.z,z[_e+K+3]=0),R===!0&&(l.fromBufferAttribute(oe,O),z[_e+K+4]=l.x,z[_e+K+5]=l.y,z[_e+K+6]=l.z,z[_e+K+7]=0),S===!0&&(l.fromBufferAttribute(ge,O),z[_e+K+8]=l.x,z[_e+K+9]=l.y,z[_e+K+10]=l.z,z[_e+K+11]=ge.itemSize===4?l.w:1)}}y={count:x,texture:Q,size:new kt(q,G)},r.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<m.length;S++)A+=m[S];const R=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function ZT(o,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=t.get(p,_);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return x}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const sv=new jn,s0=new iv(1,1),ov=new q0,lv=new DS,cv=new tv,o0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),f0=new Float32Array(4);function Fs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=o0[l];if(u===void 0&&(u=new Float32Array(l),o0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Wc(o,t){let i=l0[t];i===void 0&&(i=new Int32Array(t),l0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function KT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function QT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function JT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function eb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;f0.set(r),o.uniformMatrix2fv(this.addr,!1,f0),mn(i,r)}}function tb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;u0.set(r),o.uniformMatrix3fv(this.addr,!1,u0),mn(i,r)}}function nb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;c0.set(r),o.uniformMatrix4fv(this.addr,!1,c0),mn(i,r)}}function ib(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function ob(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function fb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(s0.compareFunction=k0,u=s0):u=sv,i.setTexture2D(t||u,l)}function db(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||lv,l)}function hb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||cv,l)}function pb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ov,l)}function mb(o){switch(o){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return ab;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(o,t){o.uniform1fv(this.addr,t)}function _b(o,t){const i=Fs(t,this.size,2);o.uniform2fv(this.addr,i)}function vb(o,t){const i=Fs(t,this.size,3);o.uniform3fv(this.addr,i)}function xb(o,t){const i=Fs(t,this.size,4);o.uniform4fv(this.addr,i)}function yb(o,t){const i=Fs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Sb(o,t){const i=Fs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Mb(o,t){const i=Fs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Eb(o,t){o.uniform1iv(this.addr,t)}function Tb(o,t){o.uniform2iv(this.addr,t)}function bb(o,t){o.uniform3iv(this.addr,t)}function Ab(o,t){o.uniform4iv(this.addr,t)}function Rb(o,t){o.uniform1uiv(this.addr,t)}function Cb(o,t){o.uniform2uiv(this.addr,t)}function wb(o,t){o.uniform3uiv(this.addr,t)}function Db(o,t){o.uniform4uiv(this.addr,t)}function Ub(o,t,i){const r=this.cache,l=t.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||sv,u[d])}function Lb(o,t,i){const r=this.cache,l=t.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||lv,u[d])}function Nb(o,t,i){const r=this.cache,l=t.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||cv,u[d])}function Ob(o,t,i){const r=this.cache,l=t.length,u=Wc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||ov,u[d])}function zb(o){switch(o){case 5126:return gb;case 35664:return _b;case 35665:return vb;case 35666:return xb;case 35674:return yb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Cb;case 36295:return wb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ob}}class Pb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mb(i.type)}}class Bb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zb(i.type)}}class Fb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function d0(o,t){o.seq.push(t),o.map[t.id]=t}function Ib(o,t,i){const r=o.name,l=r.length;for(zd.lastIndex=0;;){const u=zd.exec(r),d=zd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){d0(i,m===void 0?new Pb(h,o,t):new Bb(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new Fb(h),d0(i,x)),i=x}}}class zc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);Ib(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function h0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const Hb=37297;let Gb=0;function Vb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const p0=new ct;function kb(o){wt._getMatrix(p0,wt.workingColorSpace,o);const t=`mat3( ${p0.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(o)){case Pc:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function m0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Vb(o.getShaderSource(t),d)}else return l}function Xb(o,t){const i=kb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Wb(o,t){let i;switch(t){case tS:i="Linear";break;case nS:i="Reinhard";break;case iS:i="Cineon";break;case aS:i="ACESFilmic";break;case sS:i="AgX";break;case oS:i="Neutral";break;case rS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new re;function qb(){wt.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Yb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Zb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Ho(o){return o!==""}function g0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(o){return o.replace(Kb,Jb)}const Qb=new Map;function Jb(o,t){let i=ut[t];if(i===void 0){const r=Qb.get(t);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Eh(i)}const $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(o){return o.replace($b,e1)}function e1(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===D0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Oy?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function n1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Us:case Ls:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function a1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case U0:t="ENVMAP_BLENDING_MULTIPLY";break;case $y:t="ENVMAP_BLENDING_MIX";break;case eS:t="ENVMAP_BLENDING_ADD";break}return t}function r1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function s1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=t1(i),m=n1(i),_=i1(i),x=a1(i),y=r1(i),M=jb(i),A=Yb(u),R=l.createProgram();let S,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ho).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(S=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ut.tonemapping_pars_fragment:"",i.toneMapping!==qa?Wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Xb("linearToOutputTexel",i.outputColorSpace),qb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Eh(d),d=g0(d,i),d=_0(d,i),h=Eh(h),h=g0(h,i),h=_0(h,i),d=v0(d),h=v0(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=F+S+d,D=F+v+h,q=h0(l,l.VERTEX_SHADER,N),G=h0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,q),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(V){if(o.debug.checkShaderErrors){const ce=l.getProgramInfoLog(R).trim(),oe=l.getShaderInfoLog(q).trim(),ge=l.getShaderInfoLog(G).trim();let _e=!0,O=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(_e=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,q,G);else{const K=m0(l,q,"vertex"),Z=m0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+K+`
`+Z)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||ge==="")&&(O=!1);O&&(V.diagnostics={runnable:_e,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:ge,prefix:v}})}l.deleteShader(q),l.deleteShader(G),Q=new zc(l,R),w=Zb(l,R)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Hb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Gb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=q,this.fragmentShader=G,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new c1(t),i.set(t,r)),r}}class c1{constructor(t){this.id=o1++,this.code=t,this.usedTimes=0}}function u1(o,t,i,r,l,u,d){const h=new Y0,p=new l1,m=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,C,V,ce,oe){const ge=ce.fog,_e=oe.geometry,O=w.isMeshStandardMaterial?ce.environment:null,K=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),Z=K&&K.mapping===Vc?K.image.height:null,Se=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const be=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,L=be!==void 0?be.length:0;let ie=0;_e.morphAttributes.position!==void 0&&(ie=1),_e.morphAttributes.normal!==void 0&&(ie=2),_e.morphAttributes.color!==void 0&&(ie=3);let ye,Y,fe,Ee;if(Se){const bt=zi[Se];ye=bt.vertexShader,Y=bt.fragmentShader}else ye=w.vertexShader,Y=w.fragmentShader,p.update(w),fe=p.getVertexShaderID(w),Ee=p.getFragmentShaderID(w);const xe=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),Pe=oe.isInstancedMesh===!0,at=oe.isBatchedMesh===!0,zt=!!w.map,dt=!!w.matcap,Yt=!!K,I=!!w.aoMap,Rn=!!w.lightMap,ft=!!w.bumpMap,mt=!!w.normalMap,We=!!w.displacementMap,Lt=!!w.emissiveMap,Xe=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,te=w.clearcoat>0,de=w.dispersion>0,Me=w.iridescence>0,pe=w.sheen>0,Ve=w.transmission>0,we=T&&!!w.anisotropyMap,Be=te&&!!w.clearcoatMap,gt=te&&!!w.clearcoatNormalMap,Ae=te&&!!w.clearcoatRoughnessMap,Fe=Me&&!!w.iridescenceMap,qe=Me&&!!w.iridescenceThicknessMap,ke=pe&&!!w.sheenColorMap,Oe=pe&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,rt=!!w.specularColorMap,Pt=!!w.specularIntensityMap,X=Ve&&!!w.transmissionMap,Re=Ve&&!!w.thicknessMap,le=!!w.gradientMap,ve=!!w.alphaMap,Ce=w.alphaTest>0,De=!!w.alphaHash,Je=!!w.extensions;let Zt=qa;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Zt=o.toneMapping);const fn={shaderID:Se,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Y,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:at,batchingColor:at&&oe._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&oe.instanceColor!==null,instancingMorph:Pe&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:zs,alphaToCoverage:!!w.alphaToCoverage,map:zt,matcap:dt,envMap:Yt,envMapMode:Yt&&K.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:Rn,bumpMap:ft,normalMap:mt,displacementMap:y&&We,emissiveMap:Lt,normalMapObjectSpace:mt&&w.normalMapType===dS,normalMapTangentSpace:mt&&w.normalMapType===fS,metalnessMap:Xe,roughnessMap:U,anisotropy:T,anisotropyMap:we,clearcoat:te,clearcoatMap:Be,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ae,dispersion:de,iridescence:Me,iridescenceMap:Fe,iridescenceThicknessMap:qe,sheen:pe,sheenColorMap:ke,sheenRoughnessMap:Oe,specularMap:Qe,specularColorMap:rt,specularIntensityMap:Pt,transmission:Ve,transmissionMap:X,thicknessMap:Re,gradientMap:le,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ce,alphaHash:De,combine:w.combine,mapUv:zt&&R(w.map.channel),aoMapUv:I&&R(w.aoMap.channel),lightMapUv:Rn&&R(w.lightMap.channel),bumpMapUv:ft&&R(w.bumpMap.channel),normalMapUv:mt&&R(w.normalMap.channel),displacementMapUv:We&&R(w.displacementMap.channel),emissiveMapUv:Lt&&R(w.emissiveMap.channel),metalnessMapUv:Xe&&R(w.metalnessMap.channel),roughnessMapUv:U&&R(w.roughnessMap.channel),anisotropyMapUv:we&&R(w.anisotropyMap.channel),clearcoatMapUv:Be&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:gt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&R(w.sheenRoughnessMap.channel),specularMapUv:Qe&&R(w.specularMap.channel),specularColorMapUv:rt&&R(w.specularColorMap.channel),specularIntensityMapUv:Pt&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:Re&&R(w.thicknessMap.channel),alphaMapUv:ve&&R(w.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(mt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!_e.attributes.uv&&(zt||ve),fog:!!ge,useFog:w.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:He,skinning:oe.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Zt,decodeVideoTexture:zt&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:Lt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===la,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||at)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return fn.vertexUv1s=m.has(1),fn.vertexUv2s=m.has(2),fn.vertexUv3s=m.has(3),m.clear(),fn}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(F(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function F(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const C=A[w.type];let V;if(C){const ce=zi[C];V=VS.clone(ce.uniforms)}else V=w.uniforms;return V}function q(w,C){let V;for(let ce=0,oe=_.length;ce<oe;ce++){const ge=_[ce];if(ge.cacheKey===C){V=ge,++V.usedTimes;break}}return V===void 0&&(V=new s1(o,C,w,u),_.push(V)),V}function G(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function z(w){p.remove(w)}function Q(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:q,releaseProgram:G,releaseShaderCache:z,programs:_,dispose:Q}}function f1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function d1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function y0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function S0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,y,M,A,R,S){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:y,material:M,groupOrder:A,renderOrder:x.renderOrder,z:R,group:S},o[t]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=R,v.group=S),t++,v}function h(x,y,M,A,R,S){const v=d(x,y,M,A,R,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(x,y,M,A,R,S){const v=d(x,y,M,A,R,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(x,y){i.length>1&&i.sort(x||d1),r.length>1&&r.sort(y||y0),l.length>1&&l.sort(y||y0)}function _(){for(let x=t,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:_,sort:m}}function h1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new S0,o.set(r,[d])):l>=u.length?(d=new S0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function p1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Ut};break;case"SpotLight":i={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function m1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let g1=0;function _1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function v1(o){const t=new p1,i=m1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new re);const l=new re,u=new rn,d=new rn;function h(m){let _=0,x=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,R=0,S=0,v=0,F=0,N=0,D=0,q=0,G=0,z=0;m.sort(_1);for(let w=0,C=m.length;w<C;w++){const V=m[w],ce=V.color,oe=V.intensity,ge=V.distance,_e=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=ce.r*oe,x+=ce.g*oe,y+=ce.b*oe;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],oe);z++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Z=i.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=_e,r.directionalShadowMatrix[M]=V.shadow.matrix,F++}r.directional[M]=O,M++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(ce).multiplyScalar(oe),O.distance=ge,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[R]=O;const K=V.shadow;if(V.map&&(r.spotLightMap[q]=V.map,q++,K.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[R]=K.matrix,V.castShadow){const Z=i.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,r.spotShadow[R]=Z,r.spotShadowMap[R]=_e,D++}R++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(ce).multiplyScalar(oe),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=O,S++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const K=V.shadow,Z=i.get(V);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=_e,r.pointShadowMatrix[A]=V.shadow.matrix,N++}r.point[A]=O,A++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(oe),O.groundColor.copy(V.groundColor).multiplyScalar(oe),r.hemi[v]=O,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==A||Q.spotLength!==R||Q.rectAreaLength!==S||Q.hemiLength!==v||Q.numDirectionalShadows!==F||Q.numPointShadows!==N||Q.numSpotShadows!==D||Q.numSpotMaps!==q||Q.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=S,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+q-G,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,Q.directionalLength=M,Q.pointLength=A,Q.spotLength=R,Q.rectAreaLength=S,Q.hemiLength=v,Q.numDirectionalShadows=F,Q.numPointShadows=N,Q.numSpotShadows=D,Q.numSpotMaps=q,Q.numLightProbes=z,r.version=g1++)}function p(m,_){let x=0,y=0,M=0,A=0,R=0;const S=_.matrixWorldInverse;for(let v=0,F=m.length;v<F;v++){const N=m[v];if(N.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(N.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),d.identity(),u.copy(N.matrixWorld),u.premultiply(S),d.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(N.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),y++}else if(N.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),R++}}}return{setup:h,setupView:p,state:r}}function M0(o){const t=new v1(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function x1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new M0(o),t.set(l,[h])):u>=d.length?(h=new M0(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`;function M1(o,t,i){let r=new nv;const l=new kt,u=new kt,d=new an,h=new KS({depthPacking:uS}),p=new QS,m={},_=i.maxTextureSize,x={[Ya]:qn,[qn]:Ya,[la]:la},y=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:y1,fragmentShader:S1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new mi;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fa(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let v=this.type;this.render=function(G,z,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(Wa),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=v!==oa&&this.type===oa,ge=v===oa&&this.type!==oa;for(let _e=0,O=G.length;_e<O;_e++){const K=G[_e],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Se=Z.getFrameExtents();if(l.multiply(Se),u.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Se.x),l.x=u.x*Se.x,Z.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Se.y),l.y=u.y*Se.y,Z.mapSize.y=u.y)),Z.map===null||oe===!0||ge===!0){const L=this.type!==oa?{minFilter:Ci,magFilter:Ci}:{};Z.map!==null&&Z.map.dispose(),Z.map=new wr(l.x,l.y,L),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const be=Z.getViewportCount();for(let L=0;L<be;L++){const ie=Z.getViewport(L);d.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ce.viewport(d),Z.updateMatrices(K,L),r=Z.getFrustum(),D(z,Q,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===oa&&F(Z,Q),Z.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(w,C,V)};function F(G,z){const Q=t.update(R);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new wr(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,Q,y,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,Q,M,R,null)}function N(G,z,Q,w){let C=null;const V=Q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=Q.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ce=C.uuid,oe=z.uuid;let ge=m[ce];ge===void 0&&(ge={},m[ce]=ge);let _e=ge[oe];_e===void 0&&(_e=C.clone(),ge[oe]=_e,z.addEventListener("dispose",q)),C=_e}if(C.visible=z.visible,C.wireframe=z.wireframe,w===oa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:x[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=o.properties.get(C);ce.light=Q}return C}function D(G,z,Q,w,C){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===oa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,G.matrixWorld);const oe=t.update(G),ge=G.material;if(Array.isArray(ge)){const _e=oe.groups;for(let O=0,K=_e.length;O<K;O++){const Z=_e[O],Se=ge[Z.materialIndex];if(Se&&Se.visible){const be=N(G,Se,w,C);G.onBeforeShadow(o,G,z,Q,oe,be,Z),o.renderBufferDirect(Q,null,oe,be,G,Z),G.onAfterShadow(o,G,z,Q,oe,be,Z)}}}else if(ge.visible){const _e=N(G,ge,w,C);G.onBeforeShadow(o,G,z,Q,oe,_e,null),o.renderBufferDirect(Q,null,oe,_e,G,null),G.onAfterShadow(o,G,z,Q,oe,_e,null)}}const ce=G.children;for(let oe=0,ge=ce.length;oe<ge;oe++)D(ce[oe],z,Q,w,C)}function q(G){G.target.removeEventListener("dispose",q);for(const Q in m){const w=m[Q],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const E1={[Id]:Hd,[Gd]:Xd,[Vd]:Wd,[Ds]:kd,[Hd]:Id,[Xd]:Gd,[Wd]:Vd,[kd]:Ds};function T1(o,t){function i(){let X=!1;const Re=new an;let le=null;const ve=new an(0,0,0,0);return{setMask:function(Ce){le!==Ce&&!X&&(o.colorMask(Ce,Ce,Ce,Ce),le=Ce)},setLocked:function(Ce){X=Ce},setClear:function(Ce,De,Je,Zt,fn){fn===!0&&(Ce*=Zt,De*=Zt,Je*=Zt),Re.set(Ce,De,Je,Zt),ve.equals(Re)===!1&&(o.clearColor(Ce,De,Je,Zt),ve.copy(Re))},reset:function(){X=!1,le=null,ve.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,le=null,ve=null,Ce=null;return{setReversed:function(De){if(Re!==De){const Je=t.get("EXT_clip_control");Re?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const Zt=Ce;Ce=null,this.setClear(Zt)}Re=De},getReversed:function(){return Re},setTest:function(De){De?xe(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(De){le!==De&&!X&&(o.depthMask(De),le=De)},setFunc:function(De){if(Re&&(De=E1[De]),ve!==De){switch(De){case Id:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Ds:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ve=De}},setLocked:function(De){X=De},setClear:function(De){Ce!==De&&(Re&&(De=1-De),o.clearDepth(De),Ce=De)},reset:function(){X=!1,le=null,ve=null,Ce=null,Re=!1}}}function l(){let X=!1,Re=null,le=null,ve=null,Ce=null,De=null,Je=null,Zt=null,fn=null;return{setTest:function(bt){X||(bt?xe(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!X&&(o.stencilMask(bt),Re=bt)},setFunc:function(bt,xn,gi){(le!==bt||ve!==xn||Ce!==gi)&&(o.stencilFunc(bt,xn,gi),le=bt,ve=xn,Ce=gi)},setOp:function(bt,xn,gi){(De!==bt||Je!==xn||Zt!==gi)&&(o.stencilOp(bt,xn,gi),De=bt,Je=xn,Zt=gi)},setLocked:function(bt){X=bt},setClear:function(bt){fn!==bt&&(o.clearStencil(bt),fn=bt)},reset:function(){X=!1,Re=null,le=null,ve=null,Ce=null,De=null,Je=null,Zt=null,fn=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},x={},y=new WeakMap,M=[],A=null,R=!1,S=null,v=null,F=null,N=null,D=null,q=null,G=null,z=new Ut(0,0,0),Q=0,w=!1,C=null,V=null,ce=null,oe=null,ge=null;const _e=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=K>=2);let Se=null,be={};const L=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ye=new an().fromArray(L),Y=new an().fromArray(ie);function fe(X,Re,le,ve){const Ce=new Uint8Array(4),De=o.createTexture();o.bindTexture(X,De),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<le;Je++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,ve,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(Re+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return De}const Ee={};Ee[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),xe(o.DEPTH_TEST),d.setFunc(Ds),ft(!1),mt(A_),xe(o.CULL_FACE),I(Wa);function xe(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function He(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function Pe(X,Re){return x[X]!==Re?(o.bindFramebuffer(X,Re),x[X]=Re,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Re),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function at(X,Re){let le=M,ve=!1;if(X){le=y.get(Re),le===void 0&&(le=[],y.set(Re,le));const Ce=X.textures;if(le.length!==Ce.length||le[0]!==o.COLOR_ATTACHMENT0){for(let De=0,Je=Ce.length;De<Je;De++)le[De]=o.COLOR_ATTACHMENT0+De;le.length=Ce.length,ve=!0}}else le[0]!==o.BACK&&(le[0]=o.BACK,ve=!0);ve&&o.drawBuffers(le)}function zt(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const dt={[Tr]:o.FUNC_ADD,[Py]:o.FUNC_SUBTRACT,[By]:o.FUNC_REVERSE_SUBTRACT};dt[Fy]=o.MIN,dt[Iy]=o.MAX;const Yt={[Hy]:o.ZERO,[Gy]:o.ONE,[Vy]:o.SRC_COLOR,[Bd]:o.SRC_ALPHA,[Yy]:o.SRC_ALPHA_SATURATE,[qy]:o.DST_COLOR,[Xy]:o.DST_ALPHA,[ky]:o.ONE_MINUS_SRC_COLOR,[Fd]:o.ONE_MINUS_SRC_ALPHA,[jy]:o.ONE_MINUS_DST_COLOR,[Wy]:o.ONE_MINUS_DST_ALPHA,[Zy]:o.CONSTANT_COLOR,[Ky]:o.ONE_MINUS_CONSTANT_COLOR,[Qy]:o.CONSTANT_ALPHA,[Jy]:o.ONE_MINUS_CONSTANT_ALPHA};function I(X,Re,le,ve,Ce,De,Je,Zt,fn,bt){if(X===Wa){R===!0&&(He(o.BLEND),R=!1);return}if(R===!1&&(xe(o.BLEND),R=!0),X!==zy){if(X!==S||bt!==w){if((v!==Tr||D!==Tr)&&(o.blendEquation(o.FUNC_ADD),v=Tr,D=Tr),bt)switch(X){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R_:o.blendFunc(o.ONE,o.ONE);break;case C_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case w_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case C_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case w_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}F=null,N=null,q=null,G=null,z.set(0,0,0),Q=0,S=X,w=bt}return}Ce=Ce||Re,De=De||le,Je=Je||ve,(Re!==v||Ce!==D)&&(o.blendEquationSeparate(dt[Re],dt[Ce]),v=Re,D=Ce),(le!==F||ve!==N||De!==q||Je!==G)&&(o.blendFuncSeparate(Yt[le],Yt[ve],Yt[De],Yt[Je]),F=le,N=ve,q=De,G=Je),(Zt.equals(z)===!1||fn!==Q)&&(o.blendColor(Zt.r,Zt.g,Zt.b,fn),z.copy(Zt),Q=fn),S=X,w=!1}function Rn(X,Re){X.side===la?He(o.CULL_FACE):xe(o.CULL_FACE);let le=X.side===qn;Re&&(le=!le),ft(le),X.blending===Rs&&X.transparent===!1?I(Wa):I(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const ve=X.stencilWrite;h.setTest(ve),ve&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function mt(X){X!==Ly?(xe(o.CULL_FACE),X!==V&&(X===A_?o.cullFace(o.BACK):X===Ny?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),V=X}function We(X){X!==ce&&(O&&o.lineWidth(X),ce=X)}function Lt(X,Re,le){X?(xe(o.POLYGON_OFFSET_FILL),(oe!==Re||ge!==le)&&(o.polygonOffset(Re,le),oe=Re,ge=le)):He(o.POLYGON_OFFSET_FILL)}function Xe(X){X?xe(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+_e-1),Se!==X&&(o.activeTexture(X),Se=X)}function T(X,Re,le){le===void 0&&(Se===null?le=o.TEXTURE0+_e-1:le=Se);let ve=be[le];ve===void 0&&(ve={type:void 0,texture:void 0},be[le]=ve),(ve.type!==X||ve.texture!==Re)&&(Se!==le&&(o.activeTexture(le),Se=le),o.bindTexture(X,Re||Ee[X]),ve.type=X,ve.texture=Re)}function te(){const X=be[Se];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function de(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(X){ye.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ye.copy(X))}function Oe(X){Y.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Y.copy(X))}function Qe(X,Re){let le=m.get(Re);le===void 0&&(le=new WeakMap,m.set(Re,le));let ve=le.get(X);ve===void 0&&(ve=o.getUniformBlockIndex(Re,X.name),le.set(X,ve))}function rt(X,Re){const ve=m.get(Re).get(X);p.get(Re)!==ve&&(o.uniformBlockBinding(Re,ve,X.__bindingPointIndex),p.set(Re,ve))}function Pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Se=null,be={},x={},y=new WeakMap,M=[],A=null,R=!1,S=null,v=null,F=null,N=null,D=null,q=null,G=null,z=new Ut(0,0,0),Q=0,w=!1,C=null,V=null,ce=null,oe=null,ge=null,ye.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:xe,disable:He,bindFramebuffer:Pe,drawBuffers:at,useProgram:zt,setBlending:I,setMaterial:Rn,setFlipSided:ft,setCullFace:mt,setLineWidth:We,setPolygonOffset:Lt,setScissorTest:Xe,activeTexture:U,bindTexture:T,unbindTexture:te,compressedTexImage2D:de,compressedTexImage3D:Me,texImage2D:Fe,texImage3D:qe,updateUBOMapping:Qe,uniformBlockBinding:rt,texStorage2D:gt,texStorage3D:Ae,texSubImage2D:pe,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Be,scissor:ke,viewport:Oe,reset:Pt}}function b1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new kt,_=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return M?new OffscreenCanvas(U,T):Fc("canvas")}function R(U,T,te){let de=1;const Me=Xe(U);if((Me.width>te||Me.height>te)&&(de=te/Math.max(Me.width,Me.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pe=Math.floor(de*Me.width),Ve=Math.floor(de*Me.height);x===void 0&&(x=A(pe,Ve));const we=T?A(pe,Ve):x;return we.width=pe,we.height=Ve,we.getContext("2d").drawImage(U,0,0,pe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+pe+"x"+Ve+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,T,te,de,Me=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=T;if(T===o.RED&&(te===o.FLOAT&&(pe=o.R32F),te===o.HALF_FLOAT&&(pe=o.R16F),te===o.UNSIGNED_BYTE&&(pe=o.R8)),T===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(pe=o.R8UI),te===o.UNSIGNED_SHORT&&(pe=o.R16UI),te===o.UNSIGNED_INT&&(pe=o.R32UI),te===o.BYTE&&(pe=o.R8I),te===o.SHORT&&(pe=o.R16I),te===o.INT&&(pe=o.R32I)),T===o.RG&&(te===o.FLOAT&&(pe=o.RG32F),te===o.HALF_FLOAT&&(pe=o.RG16F),te===o.UNSIGNED_BYTE&&(pe=o.RG8)),T===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(pe=o.RG8UI),te===o.UNSIGNED_SHORT&&(pe=o.RG16UI),te===o.UNSIGNED_INT&&(pe=o.RG32UI),te===o.BYTE&&(pe=o.RG8I),te===o.SHORT&&(pe=o.RG16I),te===o.INT&&(pe=o.RG32I)),T===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),te===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),te===o.UNSIGNED_INT&&(pe=o.RGB32UI),te===o.BYTE&&(pe=o.RGB8I),te===o.SHORT&&(pe=o.RGB16I),te===o.INT&&(pe=o.RGB32I)),T===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),te===o.UNSIGNED_INT&&(pe=o.RGBA32UI),te===o.BYTE&&(pe=o.RGBA8I),te===o.SHORT&&(pe=o.RGBA16I),te===o.INT&&(pe=o.RGBA32I)),T===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),T===o.RGBA){const Ve=Me?Pc:wt.getTransfer(de);te===o.FLOAT&&(pe=o.RGBA32F),te===o.HALF_FLOAT&&(pe=o.RGBA16F),te===o.UNSIGNED_BYTE&&(pe=Ve===Gt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pe}function D(U,T){let te;return U?T===null||T===Cr||T===Ns?te=o.DEPTH24_STENCIL8:T===ca?te=o.DEPTH32F_STENCIL8:T===Go&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cr||T===Ns?te=o.DEPTH_COMPONENT24:T===ca?te=o.DEPTH_COMPONENT32F:T===Go&&(te=o.DEPTH_COMPONENT16),te}function q(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ci&&U.minFilter!==Bi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),Q(T),T.isVideoTexture&&_.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),C(T)}function Q(U){const T=r.get(U);if(T.__webglInit===void 0)return;const te=U.source,de=y.get(te);if(de){const Me=de[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&w(U),Object.keys(de).length===0&&y.delete(te)}r.remove(U)}function w(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const te=U.source,de=y.get(te);delete de[T.__cacheKey],d.memory.textures--}function C(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let Me=0;Me<T.__webglFramebuffer[de].length;Me++)o.deleteFramebuffer(T.__webglFramebuffer[de][Me]);else o.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)o.deleteFramebuffer(T.__webglFramebuffer[de]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=U.textures;for(let de=0,Me=te.length;de<Me;de++){const pe=r.get(te[de]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),d.memory.textures--),r.remove(te[de])}r.remove(U)}let V=0;function ce(){V=0}function oe(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ge(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function _e(U,T){const te=r.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){const de=U.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(te,U,T);return}}i.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+T)}function O(U,T){const te=r.get(U);if(U.version>0&&te.__version!==U.version){Y(te,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+T)}function K(U,T){const te=r.get(U);if(U.version>0&&te.__version!==U.version){Y(te,U,T);return}i.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const te=r.get(U);if(U.version>0&&te.__version!==U.version){fe(te,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+T)}const Se={[Yd]:o.REPEAT,[Ar]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},be={[Ci]:o.NEAREST,[lS]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Bi]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},L={[hS]:o.NEVER,[xS]:o.ALWAYS,[pS]:o.LESS,[k0]:o.LEQUAL,[mS]:o.EQUAL,[vS]:o.GEQUAL,[gS]:o.GREATER,[_S]:o.NOTEQUAL};function ie(U,T){if(T.type===ca&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Bi||T.magFilter===sd||T.magFilter===ac||T.magFilter===Rr||T.minFilter===Bi||T.minFilter===sd||T.minFilter===ac||T.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Se[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Se[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Se[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,be[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,be[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==ac&&T.minFilter!==Rr||T.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ye(U,T){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const de=T.source;let Me=y.get(de);Me===void 0&&(Me={},y.set(de,Me));const pe=ge(T);if(pe!==U.__cacheKey){Me[pe]===void 0&&(Me[pe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,te=!0),Me[pe].usedTimes++;const Ve=Me[U.__cacheKey];Ve!==void 0&&(Me[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&w(T)),U.__cacheKey=pe,U.__webglTexture=Me[pe].texture}return te}function Y(U,T,te){let de=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=o.TEXTURE_3D);const Me=ye(U,T),pe=T.source;i.bindTexture(de,U.__webglTexture,o.TEXTURE0+te);const Ve=r.get(pe);if(pe.version!==Ve.__version||Me===!0){i.activeTexture(o.TEXTURE0+te);const we=wt.getPrimaries(wt.workingColorSpace),Be=T.colorSpace===Xa?null:wt.getPrimaries(T.colorSpace),gt=T.colorSpace===Xa||we===Be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ae=R(T.image,!1,l.maxTextureSize);Ae=Lt(T,Ae);const Fe=u.convert(T.format,T.colorSpace),qe=u.convert(T.type);let ke=N(T.internalFormat,Fe,qe,T.colorSpace,T.isVideoTexture);ie(de,T);let Oe;const Qe=T.mipmaps,rt=T.isVideoTexture!==!0,Pt=Ve.__version===void 0||Me===!0,X=pe.dataReady,Re=q(T,Ae);if(T.isDepthTexture)ke=D(T.format===Os,T.type),Pt&&(rt?i.texStorage2D(o.TEXTURE_2D,1,ke,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,Fe,qe,null));else if(T.isDataTexture)if(Qe.length>0){rt&&Pt&&i.texStorage2D(o.TEXTURE_2D,Re,ke,Qe[0].width,Qe[0].height);for(let le=0,ve=Qe.length;le<ve;le++)Oe=Qe[le],rt?X&&i.texSubImage2D(o.TEXTURE_2D,le,0,0,Oe.width,Oe.height,Fe,qe,Oe.data):i.texImage2D(o.TEXTURE_2D,le,ke,Oe.width,Oe.height,0,Fe,qe,Oe.data);T.generateMipmaps=!1}else rt?(Pt&&i.texStorage2D(o.TEXTURE_2D,Re,ke,Ae.width,Ae.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,qe,Ae.data)):i.texImage2D(o.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,Fe,qe,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,ke,Qe[0].width,Qe[0].height,Ae.depth);for(let le=0,ve=Qe.length;le<ve;le++)if(Oe=Qe[le],T.format!==Ri)if(Fe!==null)if(rt){if(X)if(T.layerUpdates.size>0){const Ce=J_(Oe.width,Oe.height,T.format,T.type);for(const De of T.layerUpdates){const Je=Oe.data.subarray(De*Ce/Oe.data.BYTES_PER_ELEMENT,(De+1)*Ce/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,De,Oe.width,Oe.height,1,Fe,Je)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,Oe.width,Oe.height,Ae.depth,Fe,Oe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,le,ke,Oe.width,Oe.height,Ae.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,Oe.width,Oe.height,Ae.depth,Fe,qe,Oe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,le,ke,Oe.width,Oe.height,Ae.depth,0,Fe,qe,Oe.data)}else{rt&&Pt&&i.texStorage2D(o.TEXTURE_2D,Re,ke,Qe[0].width,Qe[0].height);for(let le=0,ve=Qe.length;le<ve;le++)Oe=Qe[le],T.format!==Ri?Fe!==null?rt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,le,0,0,Oe.width,Oe.height,Fe,Oe.data):i.compressedTexImage2D(o.TEXTURE_2D,le,ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&i.texSubImage2D(o.TEXTURE_2D,le,0,0,Oe.width,Oe.height,Fe,qe,Oe.data):i.texImage2D(o.TEXTURE_2D,le,ke,Oe.width,Oe.height,0,Fe,qe,Oe.data)}else if(T.isDataArrayTexture)if(rt){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,ke,Ae.width,Ae.height,Ae.depth),X)if(T.layerUpdates.size>0){const le=J_(Ae.width,Ae.height,T.format,T.type);for(const ve of T.layerUpdates){const Ce=Ae.data.subarray(ve*le/Ae.data.BYTES_PER_ELEMENT,(ve+1)*le/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,Fe,qe,Ce)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,qe,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,Ae.width,Ae.height,Ae.depth,0,Fe,qe,Ae.data);else if(T.isData3DTexture)rt?(Pt&&i.texStorage3D(o.TEXTURE_3D,Re,ke,Ae.width,Ae.height,Ae.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,qe,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,ke,Ae.width,Ae.height,Ae.depth,0,Fe,qe,Ae.data);else if(T.isFramebufferTexture){if(Pt)if(rt)i.texStorage2D(o.TEXTURE_2D,Re,ke,Ae.width,Ae.height);else{let le=Ae.width,ve=Ae.height;for(let Ce=0;Ce<Re;Ce++)i.texImage2D(o.TEXTURE_2D,Ce,ke,le,ve,0,Fe,qe,null),le>>=1,ve>>=1}}else if(Qe.length>0){if(rt&&Pt){const le=Xe(Qe[0]);i.texStorage2D(o.TEXTURE_2D,Re,ke,le.width,le.height)}for(let le=0,ve=Qe.length;le<ve;le++)Oe=Qe[le],rt?X&&i.texSubImage2D(o.TEXTURE_2D,le,0,0,Fe,qe,Oe):i.texImage2D(o.TEXTURE_2D,le,ke,Fe,qe,Oe);T.generateMipmaps=!1}else if(rt){if(Pt){const le=Xe(Ae);i.texStorage2D(o.TEXTURE_2D,Re,ke,le.width,le.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,qe,Ae)}else i.texImage2D(o.TEXTURE_2D,0,ke,Fe,qe,Ae);S(T)&&v(de),Ve.__version=pe.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function fe(U,T,te){if(T.image.length!==6)return;const de=ye(U,T),Me=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+te);const pe=r.get(Me);if(Me.version!==pe.__version||de===!0){i.activeTexture(o.TEXTURE0+te);const Ve=wt.getPrimaries(wt.workingColorSpace),we=T.colorSpace===Xa?null:wt.getPrimaries(T.colorSpace),Be=T.colorSpace===Xa||Ve===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const gt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let ve=0;ve<6;ve++)!gt&&!Ae?Fe[ve]=R(T.image[ve],!0,l.maxCubemapSize):Fe[ve]=Ae?T.image[ve].image:T.image[ve],Fe[ve]=Lt(T,Fe[ve]);const qe=Fe[0],ke=u.convert(T.format,T.colorSpace),Oe=u.convert(T.type),Qe=N(T.internalFormat,ke,Oe,T.colorSpace),rt=T.isVideoTexture!==!0,Pt=pe.__version===void 0||de===!0,X=Me.dataReady;let Re=q(T,qe);ie(o.TEXTURE_CUBE_MAP,T);let le;if(gt){rt&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Qe,qe.width,qe.height);for(let ve=0;ve<6;ve++){le=Fe[ve].mipmaps;for(let Ce=0;Ce<le.length;Ce++){const De=le[Ce];T.format!==Ri?ke!==null?rt?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,De.width,De.height,ke,De.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,Qe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,De.width,De.height,ke,Oe,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,Qe,De.width,De.height,0,ke,Oe,De.data)}}}else{if(le=T.mipmaps,rt&&Pt){le.length>0&&Re++;const ve=Xe(Fe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,Qe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){rt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe[ve].width,Fe[ve].height,ke,Oe,Fe[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Qe,Fe[ve].width,Fe[ve].height,0,ke,Oe,Fe[ve].data);for(let Ce=0;Ce<le.length;Ce++){const Je=le[Ce].image[ve].image;rt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,Je.width,Je.height,ke,Oe,Je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,Qe,Je.width,Je.height,0,ke,Oe,Je.data)}}else{rt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ke,Oe,Fe[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Qe,ke,Oe,Fe[ve]);for(let Ce=0;Ce<le.length;Ce++){const De=le[Ce];rt?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,ke,Oe,De.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,Qe,ke,Oe,De.image[ve])}}}S(T)&&v(o.TEXTURE_CUBE_MAP),pe.__version=Me.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ee(U,T,te,de,Me,pe){const Ve=u.convert(te.format,te.colorSpace),we=u.convert(te.type),Be=N(te.internalFormat,Ve,we,te.colorSpace),gt=r.get(T),Ae=r.get(te);if(Ae.__renderTarget=T,!gt.__hasExternalTextures){const Fe=Math.max(1,T.width>>pe),qe=Math.max(1,T.height>>pe);Me===o.TEXTURE_3D||Me===o.TEXTURE_2D_ARRAY?i.texImage3D(Me,pe,Be,Fe,qe,T.depth,0,Ve,we,null):i.texImage2D(Me,pe,Be,Fe,qe,0,Ve,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),mt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,Me,Ae.__webglTexture,0,ft(T)):(Me===o.TEXTURE_2D||Me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,Me,Ae.__webglTexture,pe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(U,T,te){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const de=T.depthTexture,Me=de&&de.isDepthTexture?de.type:null,pe=D(T.stencilBuffer,Me),Ve=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ft(T);mt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,pe,T.width,T.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,pe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,U)}else{const de=T.textures;for(let Me=0;Me<de.length;Me++){const pe=de[Me],Ve=u.convert(pe.format,pe.colorSpace),we=u.convert(pe.type),Be=N(pe.internalFormat,Ve,we,pe.colorSpace),gt=ft(T);te&&mt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Be,T.width,T.height):mt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Be,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Be,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_e(T.depthTexture,0);const Me=de.__webglTexture,pe=ft(T);if(T.depthTexture.format===Cs)mt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0);else if(T.depthTexture.format===Os)mt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Pe(U){const T=r.get(U),te=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",Me)};de.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=de}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");He(T.__webglFramebuffer,U)}else if(te){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=o.createRenderbuffer(),xe(T.__webglDepthbuffer[de],U,!1);else{const Me=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Me,o.RENDERBUFFER,pe)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),xe(T.__webglDepthbuffer,U,!1);else{const de=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Me),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,Me)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function at(U,T,te){const de=r.get(U);T!==void 0&&Ee(de.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Pe(U)}function zt(U){const T=U.texture,te=r.get(U),de=r.get(T);U.addEventListener("dispose",z);const Me=U.textures,pe=U.isWebGLCubeRenderTarget===!0,Ve=Me.length>1;if(Ve||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=T.version,d.memory.textures++),pe){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Be=0;Be<T.mipmaps.length;Be++)te.__webglFramebuffer[we][Be]=o.createFramebuffer()}else te.__webglFramebuffer[we]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)te.__webglFramebuffer[we]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let we=0,Be=Me.length;we<Be;we++){const gt=r.get(Me[we]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&mt(U)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<Me.length;we++){const Be=Me[we];te.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const gt=u.convert(Be.format,Be.colorSpace),Ae=u.convert(Be.type),Fe=N(Be.internalFormat,gt,Ae,Be.colorSpace,U.isXRRenderTarget===!0),qe=ft(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Fe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,te.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(te.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){i.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),ie(o.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)Ee(te.__webglFramebuffer[we][Be],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Be);else Ee(te.__webglFramebuffer[we],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ve){for(let we=0,Be=Me.length;we<Be;we++){const gt=Me[we],Ae=r.get(gt);i.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),ie(o.TEXTURE_2D,gt),Ee(te.__webglFramebuffer,U,gt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(gt)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,de.__webglTexture),ie(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)Ee(te.__webglFramebuffer[Be],U,T,o.COLOR_ATTACHMENT0,we,Be);else Ee(te.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,we,0);S(T)&&v(we),i.unbindTexture()}U.depthBuffer&&Pe(U)}function dt(U){const T=U.textures;for(let te=0,de=T.length;te<de;te++){const Me=T[te];if(S(Me)){const pe=F(U),Ve=r.get(Me).__webglTexture;i.bindTexture(pe,Ve),v(pe),i.unbindTexture()}}}const Yt=[],I=[];function Rn(U){if(U.samples>0){if(mt(U)===!1){const T=U.textures,te=U.width,de=U.height;let Me=o.COLOR_BUFFER_BIT;const pe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=r.get(U),we=T.length>1;if(we)for(let Be=0;Be<T.length;Be++)i.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Me|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Me|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const gt=r.get(T[Be]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,te,de,0,0,te,de,Me,o.NEAREST),p===!0&&(Yt.length=0,I.length=0,Yt.push(o.COLOR_ATTACHMENT0+Be),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Yt.push(pe),I.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Yt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Be=0;Be<T.length;Be++){i.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Be]);const gt=r.get(T[Be]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.TEXTURE_2D,gt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ft(U){return Math.min(l.maxSamples,U.samples)}function mt(U){const T=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function We(U){const T=d.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function Lt(U,T){const te=U.colorSpace,de=U.format,Me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==zs&&te!==Xa&&(wt.getTransfer(te)===Gt?(de!==Ri||Me!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ce,this.setTexture2D=_e,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=at,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt}function A1(o,t){function i(r,l=Xa){let u;const d=wt.getTransfer(l);if(r===ha)return o.UNSIGNED_BYTE;if(r===wh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===z0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===N0)return o.BYTE;if(r===O0)return o.SHORT;if(r===Go)return o.UNSIGNED_SHORT;if(r===Ch)return o.INT;if(r===Cr)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===Vo)return o.HALF_FLOAT;if(r===P0)return o.ALPHA;if(r===B0)return o.RGB;if(r===Ri)return o.RGBA;if(r===F0)return o.LUMINANCE;if(r===I0)return o.LUMINANCE_ALPHA;if(r===Cs)return o.DEPTH_COMPONENT;if(r===Os)return o.DEPTH_STENCIL;if(r===H0)return o.RED;if(r===Uh)return o.RED_INTEGER;if(r===G0)return o.RG;if(r===Lh)return o.RG_INTEGER;if(r===Nh)return o.RGBA_INTEGER;if(r===wc||r===Dc||r===Uc||r===Lc)if(d===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh||r===th||r===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===eh||r===th)return d===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ih)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===_h||r===vh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Nc)return d===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===V0||r===xh||r===yh||r===Sh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const R1={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,r),v=this._getHandJoint(m,R);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),M=.02,A=.005;m.inputState.pinching&&y>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new bc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new jn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Za({vertexShader:C1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U1 extends Bs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,_=null,x=null,y=null,M=null,A=null;const R=new D1,S=i.getContextAttributes();let v=null,F=null;const N=[],D=[],q=new kt;let G=null;const z=new bi;z.viewport=new an;const Q=new bi;Q.viewport=new an;const w=[z,Q],C=new JS;let V=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let fe=N[Y];return fe===void 0&&(fe=new Pd,N[Y]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Y){let fe=N[Y];return fe===void 0&&(fe=new Pd,N[Y]=fe),fe.getGripSpace()},this.getHand=function(Y){let fe=N[Y];return fe===void 0&&(fe=new Pd,N[Y]=fe),fe.getHandSpace()};function oe(Y){const fe=D.indexOf(Y.inputSource);if(fe===-1)return;const Ee=N[fe];Ee!==void 0&&(Ee.update(Y.inputSource,Y.frame,m||d),Ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ge(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",ge),l.removeEventListener("inputsourceschange",_e);for(let Y=0;Y<N.length;Y++){const fe=D[Y];fe!==null&&(D[Y]=null,N[Y].disconnect(fe))}V=null,ce=null,R.reset(),t.setRenderTarget(v),M=null,y=null,x=null,l=null,F=null,ye.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",ge),l.addEventListener("inputsourceschange",_e),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(q),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let Ee=null,xe=null,He=null;S.depth&&(He=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=S.stencil?Os:Cs,xe=S.stencil?Ns:Cr);const Pe={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Pe),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),F=new wr(y.textureWidth,y.textureHeight,{format:Ri,type:ha,depthTexture:new iv(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new wr(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}F.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),ye.setContext(l),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function _e(Y){for(let fe=0;fe<Y.removed.length;fe++){const Ee=Y.removed[fe],xe=D.indexOf(Ee);xe>=0&&(D[xe]=null,N[xe].disconnect(Ee))}for(let fe=0;fe<Y.added.length;fe++){const Ee=Y.added[fe];let xe=D.indexOf(Ee);if(xe===-1){for(let Pe=0;Pe<N.length;Pe++)if(Pe>=D.length){D.push(Ee),xe=Pe;break}else if(D[Pe]===null){D[Pe]=Ee,xe=Pe;break}if(xe===-1)break}const He=N[xe];He&&He.connect(Ee)}}const O=new re,K=new re;function Z(Y,fe,Ee){O.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const xe=O.distanceTo(K),He=fe.projectionMatrix.elements,Pe=Ee.projectionMatrix.elements,at=He[14]/(He[10]-1),zt=He[14]/(He[10]+1),dt=(He[9]+1)/He[5],Yt=(He[9]-1)/He[5],I=(He[8]-1)/He[0],Rn=(Pe[8]+1)/Pe[0],ft=at*I,mt=at*Rn,We=xe/(-I+Rn),Lt=We*-I;if(fe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),He[10]===-1)Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=at+We,U=zt+We,T=ft-Lt,te=mt+(xe-Lt),de=dt*zt/U*Xe,Me=Yt*zt/U*Xe;Y.projectionMatrix.makePerspective(T,te,de,Me,Xe,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Se(Y,fe){fe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(fe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let fe=Y.near,Ee=Y.far;R.texture!==null&&(R.depthNear>0&&(fe=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),C.near=Q.near=z.near=fe,C.far=Q.far=z.far=Ee,(V!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,ce=C.far),z.layers.mask=Y.layers.mask|2,Q.layers.mask=Y.layers.mask|4,C.layers.mask=z.layers.mask|Q.layers.mask;const xe=Y.parent,He=C.cameras;Se(C,xe);for(let Pe=0;Pe<He.length;Pe++)Se(He[Pe],xe);He.length===2?Z(C,z,Q):C.projectionMatrix.copy(z.projectionMatrix),be(Y,C,xe)};function be(Y,fe,Ee){Ee===null?Y.matrix.copy(fe.matrixWorld):(Y.matrix.copy(Ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(fe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(fe.projectionMatrix),Y.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let L=null;function ie(Y,fe){if(_=fe.getViewerPose(m||d),A=fe,_!==null){const Ee=_.views;M!==null&&(t.setRenderTargetFramebuffer(F,M.framebuffer),t.setRenderTarget(F));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Pe=0;Pe<Ee.length;Pe++){const at=Ee[Pe];let zt=null;if(M!==null)zt=M.getViewport(at);else{const Yt=x.getViewSubImage(y,at);zt=Yt.viewport,Pe===0&&(t.setRenderTargetTextures(F,Yt.colorTexture,y.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(F))}let dt=w[Pe];dt===void 0&&(dt=new bi,dt.layers.enable(Pe),dt.viewport=new an,w[Pe]=dt),dt.matrix.fromArray(at.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(at.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(zt.x,zt.y,zt.width,zt.height),Pe===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(dt)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")){const Pe=x.getDepthInformation(Ee[0]);Pe&&Pe.isValid&&Pe.texture&&R.init(t,Pe,l.renderState)}}for(let Ee=0;Ee<N.length;Ee++){const xe=D[Ee],He=N[Ee];xe!==null&&He!==void 0&&He.update(xe,fe,m||d)}L&&L(Y,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),A=null}const ye=new rv;ye.setAnimationLoop(ie),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}const Sr=new pa,L1=new rn;function N1(o,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,$0(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,F,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),x(S,v)):v.isMeshPhongMaterial?(u(S,v),_(S,v)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&M(S,v,D)):v.isMeshMatcapMaterial?(u(S,v),A(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),R(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,F,N):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===qn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===qn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const F=t.get(v),N=F.envMap,D=F.envMapRotation;N&&(S.envMap.value=N,Sr.copy(D),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),S.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Sr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,F,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*F,S.scale.value=N*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,F){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,v){v.matcap&&(S.matcap.value=v.matcap)}function R(S,v){const F=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function O1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(F,N){const D=N.program;r.uniformBlockBinding(F,D)}function m(F,N){let D=l[F.id];D===void 0&&(A(F),D=_(F),l[F.id]=D,F.addEventListener("dispose",S));const q=N.program;r.updateUBOMapping(F,q);const G=t.render.frame;u[F.id]!==G&&(y(F),u[F.id]=G)}function _(F){const N=x();F.__bindingPointIndex=N;const D=o.createBuffer(),q=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,q,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function x(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const N=l[F.id],D=F.uniforms,q=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,z=D.length;G<z;G++){const Q=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,C=Q.length;w<C;w++){const V=Q[w];if(M(V,G,w,q)===!0){const ce=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let ge=0;for(let _e=0;_e<oe.length;_e++){const O=oe[_e],K=R(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ce+ge,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,ge),ge+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,N,D,q){const G=F.value,z=N+"_"+D;if(q[z]===void 0)return typeof G=="number"||typeof G=="boolean"?q[z]=G:q[z]=G.clone(),!0;{const Q=q[z];if(typeof G=="number"||typeof G=="boolean"){if(Q!==G)return q[z]=G,!0}else if(Q.equals(G)===!1)return Q.copy(G),!0}return!1}function A(F){const N=F.uniforms;let D=0;const q=16;for(let z=0,Q=N.length;z<Q;z++){const w=Array.isArray(N[z])?N[z]:[N[z]];for(let C=0,V=w.length;C<V;C++){const ce=w[C],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let ge=0,_e=oe.length;ge<_e;ge++){const O=oe[ge],K=R(O),Z=D%q,Se=Z%K.boundary,be=Z+Se;D+=Se,be!==0&&q-be<K.storage&&(D+=q-be),ce.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=K.storage}}}const G=D%q;return G>0&&(D+=q-G),F.__size=D,F.__cache={},this}function R(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function S(F){const N=F.target;N.removeEventListener("dispose",S);const D=d.indexOf(N.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},u={}}return{bind:p,update:m,dispose:v}}class z1{constructor(t={}){const{canvas:i=SS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),R=new Int32Array(4);let S=null,v=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=qa,this.toneMappingExposure=1;const D=this;let q=!1,G=0,z=0,Q=null,w=-1,C=null;const V=new an,ce=new an;let oe=null;const ge=new Ut(0);let _e=0,O=i.width,K=i.height,Z=1,Se=null,be=null;const L=new an(0,0,O,K),ie=new an(0,0,O,K);let ye=!1;const Y=new nv;let fe=!1,Ee=!1;this.transmissionResolutionScale=1;const xe=new rn,He=new rn,Pe=new re,at=new an,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Yt(){return Q===null?Z:1}let I=r;function Rn(b,W){return i.getContext(b,W)}try{const b={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rh}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",Ce,!1),i.addEventListener("webglcontextcreationerror",De,!1),I===null){const W="webgl2";if(I=Rn(W,b),I===null)throw Rn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,mt,We,Lt,Xe,U,T,te,de,Me,pe,Ve,we,Be,gt,Ae,Fe,qe,ke,Oe,Qe,rt,Pt,X;function Re(){ft=new XT(I),ft.init(),rt=new A1(I,ft),mt=new FT(I,ft,t,rt),We=new T1(I,ft),mt.reverseDepthBuffer&&y&&We.buffers.depth.setReversed(!0),Lt=new jT(I),Xe=new f1,U=new b1(I,ft,We,Xe,mt,rt,Lt),T=new HT(D),te=new kT(D),de=new eM(I),Pt=new PT(I,de),Me=new WT(I,de,Lt,Pt),pe=new ZT(I,Me,de,Lt),ke=new YT(I,mt,U),Ae=new IT(Xe),Ve=new u1(D,T,te,ft,mt,Pt,Ae),we=new N1(D,Xe),Be=new h1,gt=new x1(ft),qe=new zT(D,T,te,We,pe,M,p),Fe=new M1(D,pe,mt),X=new O1(I,Lt,mt,We),Oe=new BT(I,ft,Lt),Qe=new qT(I,ft,Lt),Lt.programs=Ve.programs,D.capabilities=mt,D.extensions=ft,D.properties=Xe,D.renderLists=Be,D.shadowMap=Fe,D.state=We,D.info=Lt}Re();const le=new U1(D,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(O,K,!1))},this.getSize=function(b){return b.set(O,K)},this.setSize=function(b,W,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,K=W,i.width=Math.floor(b*Z),i.height=Math.floor(W*Z),ne===!0&&(i.style.width=b+"px",i.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(O*Z,K*Z).floor()},this.setDrawingBufferSize=function(b,W,ne){O=b,K=W,Z=ne,i.width=Math.floor(b*ne),i.height=Math.floor(W*ne),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,W,ne,ae){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,W,ne,ae),We.viewport(V.copy(L).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,W,ne,ae){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,W,ne,ae),We.scissor(ce.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){We.setScissorTest(ye=b)},this.setOpaqueSort=function(b){Se=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(b=!0,W=!0,ne=!0){let ae=0;if(b){let k=!1;if(Q!==null){const Te=Q.texture.format;k=Te===Nh||Te===Lh||Te===Uh}if(k){const Te=Q.texture.type,Ue=Te===ha||Te===Cr||Te===Go||Te===Ns||Te===wh||Te===Dh,Ne=qe.getClearColor(),ze=qe.getClearAlpha(),$e=Ne.r,et=Ne.g,je=Ne.b;Ue?(A[0]=$e,A[1]=et,A[2]=je,A[3]=ze,I.clearBufferuiv(I.COLOR,0,A)):(R[0]=$e,R[1]=et,R[2]=je,R[3]=ze,I.clearBufferiv(I.COLOR,0,R))}else ae|=I.COLOR_BUFFER_BIT}W&&(ae|=I.DEPTH_BUFFER_BIT),ne&&(ae|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",Ce,!1),i.removeEventListener("webglcontextcreationerror",De,!1),qe.dispose(),Be.dispose(),gt.dispose(),Xe.dispose(),T.dispose(),te.dispose(),pe.dispose(),Pt.dispose(),X.dispose(),Ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",Is),le.removeEventListener("sessionend",Hs),Di.stop()};function ve(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const b=Lt.autoReset,W=Fe.enabled,ne=Fe.autoUpdate,ae=Fe.needsUpdate,k=Fe.type;Re(),Lt.autoReset=b,Fe.enabled=W,Fe.autoUpdate=ne,Fe.needsUpdate=ae,Fe.type=k}function De(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Je(b){const W=b.target;W.removeEventListener("dispose",Je),Zt(W)}function Zt(b){fn(b),Xe.remove(b)}function fn(b){const W=Xe.get(b).programs;W!==void 0&&(W.forEach(function(ne){Ve.releaseProgram(ne)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,ne,ae,k,Te){W===null&&(W=zt);const Ue=k.isMesh&&k.matrixWorld.determinant()<0,Ne=Vs(b,W,ne,ae,k);We.setMaterial(ae,Ue);let ze=ne.index,$e=1;if(ae.wireframe===!0){if(ze=Me.getWireframeAttribute(ne),ze===void 0)return;$e=2}const et=ne.drawRange,je=ne.attributes.position;let xt=et.start*$e,yt=(et.start+et.count)*$e;Te!==null&&(xt=Math.max(xt,Te.start*$e),yt=Math.min(yt,(Te.start+Te.count)*$e)),ze!==null?(xt=Math.max(xt,0),yt=Math.min(yt,ze.count)):je!=null&&(xt=Math.max(xt,0),yt=Math.min(yt,je.count));const Xt=yt-xt;if(Xt<0||Xt===1/0)return;Pt.setup(k,ae,Ne,ne,ze);let At,tt=Oe;if(ze!==null&&(At=de.get(ze),tt=Qe,tt.setIndex(At)),k.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*Yt()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(k.isLine){let Ze=ae.linewidth;Ze===void 0&&(Ze=1),We.setLineWidth(Ze*Yt()),k.isLineSegments?tt.setMode(I.LINES):k.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else k.isPoints?tt.setMode(I.POINTS):k.isSprite&&tt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ze=k._multiDrawStarts,dn=k._multiDrawCounts,Et=k._multiDrawCount,Pn=ze?de.get(ze).bytesPerElement:1,vi=Xe.get(ae).currentProgram.getUniforms();for(let Ln=0;Ln<Et;Ln++)vi.setValue(I,"_gl_DrawID",Ln),tt.render(Ze[Ln]/Pn,dn[Ln])}else if(k.isInstancedMesh)tt.renderInstances(xt,Xt,k.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,dn=Math.min(ne.instanceCount,Ze);tt.renderInstances(xt,Xt,dn)}else tt.render(xt,Xt)};function bt(b,W,ne){b.transparent===!0&&b.side===la&&b.forceSinglePass===!1?(b.side=qn,b.needsUpdate=!0,Qt(b,W,ne),b.side=Ya,b.needsUpdate=!0,Qt(b,W,ne),b.side=la):Qt(b,W,ne)}this.compile=function(b,W,ne=null){ne===null&&(ne=b),v=gt.get(ne),v.init(W),N.push(v),ne.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),b!==ne&&b.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights();const ae=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Te=k.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Ne=Te[Ue];bt(Ne,ne,k),ae.add(Ne)}else bt(Te,ne,k),ae.add(Te)}),N.pop(),v=null,ae},this.compileAsync=function(b,W,ne=null){const ae=this.compile(b,W,ne);return new Promise(k=>{function Te(){if(ae.forEach(function(Ue){Xe.get(Ue).currentProgram.isReady()&&ae.delete(Ue)}),ae.size===0){k(b);return}setTimeout(Te,10)}ft.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let xn=null;function gi(b){xn&&xn(b)}function Is(){Di.stop()}function Hs(){Di.start()}const Di=new rv;Di.setAnimationLoop(gi),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){xn=b,le.setAnimationLoop(b),b===null?Di.stop():Di.start()},le.addEventListener("sessionstart",Is),le.addEventListener("sessionend",Hs),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(W),W=le.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,W,Q),v=gt.get(b,N.length),v.init(W),N.push(v),He.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(He),Ee=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,Ee),S=Be.get(b,F.length),S.init(),F.push(S),le.enabled===!0&&le.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Qa(Te,W,-1/0,D.sortObjects)}Qa(b,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Se,be),dt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,dt&&qe.addToRenderList(S,b),this.info.render.frame++,fe===!0&&Ae.beginShadows();const ne=v.state.shadowsArray;Fe.render(ne,b,W),fe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,k=S.transmissive;if(v.setupLights(),W.isArrayCamera){const Te=W.cameras;if(k.length>0)for(let Ue=0,Ne=Te.length;Ue<Ne;Ue++){const ze=Te[Ue];Gs(ae,k,b,ze)}dt&&qe.render(b);for(let Ue=0,Ne=Te.length;Ue<Ne;Ue++){const ze=Te[Ue];Dr(S,b,ze,ze.viewport)}}else k.length>0&&Gs(ae,k,b,W),dt&&qe.render(b),Dr(S,b,W);Q!==null&&z===0&&(U.updateMultisampleRenderTarget(Q),U.updateRenderTargetMipmap(Q)),b.isScene===!0&&b.onAfterRender(D,b,W),Pt.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],fe===!0&&Ae.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function Qa(b,W,ne,ae){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){ae&&at.setFromMatrixPosition(b.matrixWorld).applyMatrix4(He);const Ue=pe.update(b),Ne=b.material;Ne.visible&&S.push(b,Ue,Ne,ne,at.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const Ue=pe.update(b),Ne=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),at.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),at.copy(Ue.boundingSphere.center)),at.applyMatrix4(b.matrixWorld).applyMatrix4(He)),Array.isArray(Ne)){const ze=Ue.groups;for(let $e=0,et=ze.length;$e<et;$e++){const je=ze[$e],xt=Ne[je.materialIndex];xt&&xt.visible&&S.push(b,Ue,xt,ne,at.z,je)}}else Ne.visible&&S.push(b,Ue,Ne,ne,at.z,null)}}const Te=b.children;for(let Ue=0,Ne=Te.length;Ue<Ne;Ue++)Qa(Te[Ue],W,ne,ae)}function Dr(b,W,ne,ae){const k=b.opaque,Te=b.transmissive,Ue=b.transparent;v.setupLightsView(ne),fe===!0&&Ae.setGlobalState(D.clippingPlanes,ne),ae&&We.viewport(V.copy(ae)),k.length>0&&Ja(k,W,ne),Te.length>0&&Ja(Te,W,ne),Ue.length>0&&Ja(Ue,W,ne),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Gs(b,W,ne,ae){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new wr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Vo:ha,minFilter:Rr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||V;Te.setSize(Ue.z*D.transmissionResolutionScale,Ue.w*D.transmissionResolutionScale);const Ne=D.getRenderTarget();D.setRenderTarget(Te),D.getClearColor(ge),_e=D.getClearAlpha(),_e<1&&D.setClearColor(16777215,.5),D.clear(),dt&&qe.render(ne);const ze=D.toneMapping;D.toneMapping=qa;const $e=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),fe===!0&&Ae.setGlobalState(D.clippingPlanes,ae),Ja(b,ne,ae),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let je=0,xt=W.length;je<xt;je++){const yt=W[je],Xt=yt.object,At=yt.geometry,tt=yt.material,Ze=yt.group;if(tt.side===la&&Xt.layers.test(ae.layers)){const dn=tt.side;tt.side=qn,tt.needsUpdate=!0,_i(Xt,ne,ae,At,tt,Ze),tt.side=dn,tt.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}D.setRenderTarget(Ne),D.setClearColor(ge,_e),$e!==void 0&&(ae.viewport=$e),D.toneMapping=ze}function Ja(b,W,ne){const ae=W.isScene===!0?W.overrideMaterial:null;for(let k=0,Te=b.length;k<Te;k++){const Ue=b[k],Ne=Ue.object,ze=Ue.geometry,$e=ae===null?Ue.material:ae,et=Ue.group;Ne.layers.test(ne.layers)&&_i(Ne,W,ne,ze,$e,et)}}function _i(b,W,ne,ae,k,Te){b.onBeforeRender(D,W,ne,ae,k,Te),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(D,W,ne,ae,b,Te),k.transparent===!0&&k.side===la&&k.forceSinglePass===!1?(k.side=qn,k.needsUpdate=!0,D.renderBufferDirect(ne,W,ae,k,b,Te),k.side=Ya,k.needsUpdate=!0,D.renderBufferDirect(ne,W,ae,k,b,Te),k.side=la):D.renderBufferDirect(ne,W,ae,k,b,Te),b.onAfterRender(D,W,ne,ae,k,Te)}function Qt(b,W,ne){W.isScene!==!0&&(W=zt);const ae=Xe.get(b),k=v.state.lights,Te=v.state.shadowsArray,Ue=k.state.version,Ne=Ve.getParameters(b,k.state,Te,W,ne),ze=Ve.getProgramCacheKey(Ne);let $e=ae.programs;ae.environment=b.isMeshStandardMaterial?W.environment:null,ae.fog=W.fog,ae.envMap=(b.isMeshStandardMaterial?te:T).get(b.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,$e===void 0&&(b.addEventListener("dispose",Je),$e=new Map,ae.programs=$e);let et=$e.get(ze);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===Ue)return Fi(b,Ne),et}else Ne.uniforms=Ve.getUniforms(b),b.onBeforeCompile(Ne,D),et=Ve.acquireProgram(Ne,ze),$e.set(ze,et),ae.uniforms=Ne.uniforms;const je=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Ae.uniform),Fi(b,Ne),ae.needsLights=jc(b),ae.lightsStateVersion=Ue,ae.needsLights&&(je.ambientLightColor.value=k.state.ambient,je.lightProbe.value=k.state.probe,je.directionalLights.value=k.state.directional,je.directionalLightShadows.value=k.state.directionalShadow,je.spotLights.value=k.state.spot,je.spotLightShadows.value=k.state.spotShadow,je.rectAreaLights.value=k.state.rectArea,je.ltc_1.value=k.state.rectAreaLTC1,je.ltc_2.value=k.state.rectAreaLTC2,je.pointLights.value=k.state.point,je.pointLightShadows.value=k.state.pointShadow,je.hemisphereLights.value=k.state.hemi,je.directionalShadowMap.value=k.state.directionalShadowMap,je.directionalShadowMatrix.value=k.state.directionalShadowMatrix,je.spotShadowMap.value=k.state.spotShadowMap,je.spotLightMatrix.value=k.state.spotLightMatrix,je.spotLightMap.value=k.state.spotLightMap,je.pointShadowMap.value=k.state.pointShadowMap,je.pointShadowMatrix.value=k.state.pointShadowMatrix),ae.currentProgram=et,ae.uniformsList=null,et}function yn(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=zc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Fi(b,W){const ne=Xe.get(b);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function Vs(b,W,ne,ae,k){W.isScene!==!0&&(W=zt),U.resetTextureUnits();const Te=W.fog,Ue=ae.isMeshStandardMaterial?W.environment:null,Ne=Q===null?D.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:zs,ze=(ae.isMeshStandardMaterial?te:T).get(ae.envMap||Ue),$e=ae.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,et=!!ne.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!ne.morphAttributes.position,xt=!!ne.morphAttributes.normal,yt=!!ne.morphAttributes.color;let Xt=qa;ae.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xt=D.toneMapping);const At=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,tt=At!==void 0?At.length:0,Ze=Xe.get(ae),dn=v.state.lights;if(fe===!0&&(Ee===!0||b!==C)){const Jt=b===C&&ae.id===w;Ae.setState(ae,b,Jt)}let Et=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==dn.state.version||Ze.outputColorSpace!==Ne||k.isBatchedMesh&&Ze.batching===!1||!k.isBatchedMesh&&Ze.batching===!0||k.isBatchedMesh&&Ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ze.instancing===!1||!k.isInstancedMesh&&Ze.instancing===!0||k.isSkinnedMesh&&Ze.skinning===!1||!k.isSkinnedMesh&&Ze.skinning===!0||k.isInstancedMesh&&Ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ze.instancingMorph===!1&&k.morphTexture!==null||Ze.envMap!==ze||ae.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ae.numPlanes||Ze.numIntersection!==Ae.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==et||Ze.morphTargets!==je||Ze.morphNormals!==xt||Ze.morphColors!==yt||Ze.toneMapping!==Xt||Ze.morphTargetsCount!==tt)&&(Et=!0):(Et=!0,Ze.__version=ae.version);let Pn=Ze.currentProgram;Et===!0&&(Pn=Qt(ae,W,k));let vi=!1,Ln=!1,gn=!1;const Bt=Pn.getUniforms(),Nn=Ze.uniforms;if(We.useProgram(Pn.program)&&(vi=!0,Ln=!0,gn=!0),ae.id!==w&&(w=ae.id,Ln=!0),vi||C!==b){We.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),ES(xe),TS(xe),Bt.setValue(I,"projectionMatrix",xe)):Bt.setValue(I,"projectionMatrix",b.projectionMatrix),Bt.setValue(I,"viewMatrix",b.matrixWorldInverse);const Sn=Bt.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,Pe.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ln=!0,gn=!0)}if(k.isSkinnedMesh){Bt.setOptional(I,k,"bindMatrix"),Bt.setOptional(I,k,"bindMatrixInverse");const Jt=k.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Bt.setValue(I,"boneTexture",Jt.boneTexture,U))}k.isBatchedMesh&&(Bt.setOptional(I,k,"batchingTexture"),Bt.setValue(I,"batchingTexture",k._matricesTexture,U),Bt.setOptional(I,k,"batchingIdTexture"),Bt.setValue(I,"batchingIdTexture",k._indirectTexture,U),Bt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Bt.setValue(I,"batchingColorTexture",k._colorsTexture,U));const Cn=ne.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ke.update(k,ne,Pn),(Ln||Ze.receiveShadow!==k.receiveShadow)&&(Ze.receiveShadow=k.receiveShadow,Bt.setValue(I,"receiveShadow",k.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Nn.envMap.value=ze,Nn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Ln&&(Bt.setValue(I,"toneMappingExposure",D.toneMappingExposure),Ze.needsLights&&qc(Nn,gn),Te&&ae.fog===!0&&we.refreshFogUniforms(Nn,Te),we.refreshMaterialUniforms(Nn,ae,Z,K,v.state.transmissionRenderTarget[b.id]),zc.upload(I,yn(Ze),Nn,U)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(zc.upload(I,yn(Ze),Nn,U),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(I,"center",k.center),Bt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Bt.setValue(I,"normalMatrix",k.normalMatrix),Bt.setValue(I,"modelMatrix",k.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Jt=ae.uniformsGroups;for(let Sn=0,Ur=Jt.length;Sn<Ur;Sn++){const Bn=Jt[Sn];X.update(Bn,Pn),X.bind(Bn,Pn)}}return Pn}function qc(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function jc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,W,ne){Xe.get(b.texture).__webglTexture=W,Xe.get(b.depthTexture).__webglTexture=ne;const ae=Xe.get(b);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=ne===void 0,ae.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const ne=Xe.get(b);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0};const Yo=I.createFramebuffer();this.setRenderTarget=function(b,W=0,ne=0){Q=b,G=W,z=ne;let ae=!0,k=null,Te=!1,Ue=!1;if(b){const ze=Xe.get(b);if(ze.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(I.FRAMEBUFFER,null),ae=!1;else if(ze.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(ze.__hasExternalTextures)U.rebindTextures(b,Xe.get(b.texture).__webglTexture,Xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(ze.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const et=Xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(et[W])?k=et[W][ne]:k=et[W],Te=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?k=Xe.get(b).__webglMultisampledFramebuffer:Array.isArray(et)?k=et[ne]:k=et,V.copy(b.viewport),ce.copy(b.scissor),oe=b.scissorTest}else V.copy(L).multiplyScalar(Z).floor(),ce.copy(ie).multiplyScalar(Z).floor(),oe=ye;if(ne!==0&&(k=Yo),We.bindFramebuffer(I.FRAMEBUFFER,k)&&ae&&We.drawBuffers(b,k),We.viewport(V),We.scissor(ce),We.setScissorTest(oe),Te){const ze=Xe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ne)}else if(Ue){const ze=Xe.get(b.texture),$e=W;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,ne,$e)}else if(b!==null&&ne!==0){const ze=Xe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,ne)}w=-1},this.readRenderTargetPixels=function(b,W,ne,ae,k,Te,Ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){We.bindFramebuffer(I.FRAMEBUFFER,Ne);try{const ze=b.texture,$e=ze.format,et=ze.type;if(!mt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ae&&ne>=0&&ne<=b.height-k&&I.readPixels(W,ne,ae,k,rt.convert($e),rt.convert(et),Te)}finally{const ze=Q!==null?Xe.get(Q).__webglFramebuffer:null;We.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,W,ne,ae,k,Te,Ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){const ze=b.texture,$e=ze.format,et=ze.type;if(!mt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-ae&&ne>=0&&ne<=b.height-k){We.bindFramebuffer(I.FRAMEBUFFER,Ne);const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(W,ne,ae,k,rt.convert($e),rt.convert(et),0);const xt=Q!==null?Xe.get(Q).__webglFramebuffer:null;We.bindFramebuffer(I.FRAMEBUFFER,xt);const yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await MS(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(je),I.deleteSync(yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,ne=0){b.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const ae=Math.pow(2,-ne),k=Math.floor(b.image.width*ae),Te=Math.floor(b.image.height*ae),Ue=W!==null?W.x:0,Ne=W!==null?W.y:0;U.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,ne,0,0,Ue,Ne,k,Te),We.unbindTexture()};const $a=I.createFramebuffer(),ks=I.createFramebuffer();this.copyTextureToTexture=function(b,W,ne=null,ae=null,k=0,Te=null){b.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,b=arguments[1],W=arguments[2],Te=arguments[3]||0,ne=null),Te===null&&(k!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=k,k=0):Te=0);let Ue,Ne,ze,$e,et,je,xt,yt,Xt;const At=b.isCompressedTexture?b.mipmaps[Te]:b.image;if(ne!==null)Ue=ne.max.x-ne.min.x,Ne=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,$e=ne.min.x,et=ne.min.y,je=ne.isBox3?ne.min.z:0;else{const Cn=Math.pow(2,-k);Ue=Math.floor(At.width*Cn),Ne=Math.floor(At.height*Cn),b.isDataArrayTexture?ze=At.depth:b.isData3DTexture?ze=Math.floor(At.depth*Cn):ze=1,$e=0,et=0,je=0}ae!==null?(xt=ae.x,yt=ae.y,Xt=ae.z):(xt=0,yt=0,Xt=0);const tt=rt.convert(W.format),Ze=rt.convert(W.type);let dn;W.isData3DTexture?(U.setTexture3D(W,0),dn=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),dn=I.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),dn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=I.getParameter(I.UNPACK_ROW_LENGTH),Pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ln=I.getParameter(I.UNPACK_SKIP_ROWS),gn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je);const Bt=b.isDataArrayTexture||b.isData3DTexture,Nn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Cn=Xe.get(b),Jt=Xe.get(W),Sn=Xe.get(Cn.__renderTarget),Ur=Xe.get(Jt.__renderTarget);We.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let Bn=0;Bn<ze;Bn++)Bt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.get(b).__webglTexture,k,je+Bn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.get(W).__webglTexture,Te,Xt+Bn)),I.blitFramebuffer($e,et,Ue,Ne,xt,yt,Ue,Ne,I.DEPTH_BUFFER_BIT,I.NEAREST);We.bindFramebuffer(I.READ_FRAMEBUFFER,null),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Xe.has(b)){const Cn=Xe.get(b),Jt=Xe.get(W);We.bindFramebuffer(I.READ_FRAMEBUFFER,$a),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,ks);for(let Sn=0;Sn<ze;Sn++)Bt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Cn.__webglTexture,k,je+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Cn.__webglTexture,k),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jt.__webglTexture,Te,Xt+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jt.__webglTexture,Te),k!==0?I.blitFramebuffer($e,et,Ue,Ne,xt,yt,Ue,Ne,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(dn,Te,xt,yt,Xt+Sn,$e,et,Ue,Ne):I.copyTexSubImage2D(dn,Te,xt,yt,$e,et,Ue,Ne);We.bindFramebuffer(I.READ_FRAMEBUFFER,null),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(dn,Te,xt,yt,Xt,Ue,Ne,ze,tt,Ze,At.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(dn,Te,xt,yt,Xt,Ue,Ne,ze,tt,At.data):I.texSubImage3D(dn,Te,xt,yt,Xt,Ue,Ne,ze,tt,Ze,At):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,xt,yt,Ue,Ne,tt,Ze,At.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,xt,yt,At.width,At.height,tt,At.data):I.texSubImage2D(I.TEXTURE_2D,Te,xt,yt,Ue,Ne,tt,Ze,At);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),Te===0&&W.generateMipmaps&&I.generateMipmap(dn),We.unbindTexture()},this.copyTextureToTexture3D=function(b,W,ne=null,ae=null,k=0){return b.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ae=arguments[1]||null,b=arguments[2],W=arguments[3],k=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,ne,ae,k)},this.initRenderTarget=function(b){Xe.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),We.unbindTexture()},this.resetState=function(){G=0,z=0,Q=null,We.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}function P1({history:o}){const t=ot.useRef(null),i=ot.useRef(null),r=ot.useRef(null),l=ot.useRef(null),u=ot.useRef(null),d=ot.useRef(null);return ot.useEffect(()=>{const h=t.current;if(!h)return;const p=new jS;p.background=new Ut(526344),r.current=p;const m=h.clientWidth||600,_=h.clientHeight||300,x=new z1({antialias:!0});x.setSize(m,_),x.setPixelRatio(window.devicePixelRatio),h.appendChild(x.domElement),i.current=x;const y=new av(-1,1,1,-1,.1,10);y.position.z=1,l.current=y;const M=new Oc({color:1842204});for(let q=0;q<=4;q++){const G=q/4*2-1,z=[new re(-1,G,0),new re(1,G,0)];p.add(new Ec(new mi().setFromPoints(z),M))}for(let q=0;q<=6;q++){const G=q/6*2-1,z=[new re(G,-1,0),new re(G,1,0)];p.add(new Ec(new mi().setFromPoints(z),M))}const A=new mi,R=new Oc({color:1722906,linewidth:4}),S=new Ec(A,R);p.add(S),d.current=S;const v=new mi,F=new Oc({color:8308862,linewidth:2}),N=new Ec(v,F);p.add(N),u.current=N;const D=new ResizeObserver(()=>{const q=h.clientWidth,G=h.clientHeight;q>0&&G>0&&(x.setSize(q,G),x.render(p,y))});return D.observe(h),x.render(p,y),()=>{D.disconnect(),x.dispose(),h.contains(x.domElement)&&h.removeChild(x.domElement)}},[]),ot.useEffect(()=>{const h=u.current,p=d.current,m=i.current,_=r.current,x=l.current;if(!h||!p||!m||!_||!x)return;const y=o.map(parseFloat).filter(isFinite);if(y.length<2)return;const M=Math.min(...y),R=Math.max(...y)-M||1,S=.1,v=new Float32Array(y.length*3);for(let N=0;N<y.length;N++)v[N*3]=N/(y.length-1)*2-1,v[N*3+1]=(y[N]-M)/R*(2-S*2)-(1-S),v[N*3+2]=0;const F=new wi(v,3);h.geometry.setAttribute("position",F),h.geometry.computeBoundingSphere(),p.geometry.setAttribute("position",F.clone()),p.geometry.computeBoundingSphere(),m.render(_,x)},[o]),B.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})}function B1(){const o=Ka(),t=Gc(),[i,r]=ot.useState(!1),l=parseFloat(o.price).toFixed(2),u=o.phase==="lobby"?"Waiting for players…":`${o.phase} — cycle ${o.cycle}`,d=o.gameCode?`${window.location.origin}/${o.gameCode}`:null;function h(x){t({type:"admin",command:{cmd:"kick_player",player_id:x}})}function p(){t({type:"admin",command:{cmd:"end_game"}})}function m(){t({type:"admin",command:{cmd:o.paused?"resume_game":"pause_game"}})}async function _(){d&&(await navigator.clipboard.writeText(d),r(!0),setTimeout(()=>r(!1),2e3))}return B.jsxs("div",{style:Tt.root,children:[B.jsxs("div",{style:Tt.header,children:[B.jsx("span",{style:Tt.badge,children:"HOST VIEW"}),B.jsx("span",{style:Tt.phase,children:o.paused?"⏸ PAUSED":u}),B.jsx("button",{style:Tt.pauseBtn,onClick:m,children:o.paused?"Resume":"Pause"}),B.jsx("button",{style:Tt.endBtn,onClick:p,children:"End Game"})]}),d&&B.jsxs("div",{style:Tt.urlBar,children:[B.jsx("span",{style:Tt.urlText,children:d}),B.jsx("button",{style:Tt.copyBtn,onClick:_,children:i?"✓ Copied":"Copy"})]}),B.jsxs("div",{style:Tt.priceCard,children:[B.jsx("div",{style:Tt.priceLine,children:B.jsxs("div",{children:[B.jsx("p",{style:Tt.priceLabel,children:"CORNCO"}),B.jsxs("p",{style:Tt.priceValue,children:["$",l]}),o.phase==="decision"&&B.jsxs("p",{style:Tt.countdown,children:[o.secondsRemaining,"s remaining"]})]})}),B.jsx("div",{style:Tt.chartBox,children:B.jsx(P1,{history:o.priceHistory})})]}),B.jsxs("div",{style:Tt.card,children:[B.jsxs("h2",{style:Tt.cardTitle,children:["Players (",o.knownPlayers.length,")"]}),o.knownPlayers.length===0?B.jsx("p",{style:Tt.empty,children:"No players yet — share the join URL."}):B.jsxs("table",{style:Tt.table,children:[B.jsx("thead",{children:B.jsxs("tr",{children:[B.jsx("th",{style:Tt.th,children:"#"}),B.jsx("th",{style:Tt.th,children:"Name"}),B.jsx("th",{style:Tt.th,children:"Role"}),B.jsx("th",{style:Tt.th})]})}),B.jsx("tbody",{children:o.knownPlayers.map((x,y)=>B.jsxs("tr",{children:[B.jsx("td",{style:Tt.td,children:y+1}),B.jsx("td",{style:Tt.td,children:x.name}),B.jsx("td",{style:{...Tt.td,color:x.role==="farmer"?"#7ec87e":"#7ec8c8"},children:x.role}),B.jsx("td",{style:Tt.td,children:B.jsx("button",{style:Tt.kickBtn,onClick:()=>h(x.id),children:"Kick"})})]},x.id))})]})]}),o.headlines.length>0&&B.jsxs("div",{style:Tt.card,children:[B.jsx("h2",{style:Tt.cardTitle,children:"Latest Headline"}),B.jsx("p",{style:Tt.headline,children:o.headlines[o.headlines.length-1].text})]}),o.adminSummary&&B.jsxs("div",{style:Tt.card,children:[B.jsx("h2",{style:Tt.cardTitle,children:"Analyst Summary"}),B.jsx("p",{style:Tt.summary,children:o.adminSummary})]})]})}const Tt={root:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.25rem",padding:"2rem",minHeight:"100vh",maxWidth:900,margin:"0 auto"},header:{display:"flex",alignItems:"center",gap:"1rem",alignSelf:"stretch"},badge:{background:"#2a4a7a",color:"#7ec8ff",fontSize:"0.7rem",fontWeight:"bold",letterSpacing:"0.1em",padding:"0.2rem 0.6rem",borderRadius:3},phase:{color:"#666",fontSize:"0.85rem",flex:1},pauseBtn:{background:"transparent",border:"1px solid #4a4a20",color:"#c8c87e",fontSize:"0.75rem",padding:"0.2rem 0.7rem",borderRadius:3,cursor:"pointer",fontFamily:"inherit",marginLeft:"auto"},endBtn:{background:"transparent",border:"1px solid #4a2020",color:"#c87e7e",fontSize:"0.75rem",padding:"0.2rem 0.7rem",borderRadius:3,cursor:"pointer",fontFamily:"inherit"},urlBar:{display:"flex",alignItems:"center",gap:"0.5rem",background:"#0d0d0d",border:"1px solid #2a2a2a",borderRadius:6,padding:"0.5rem 0.75rem",alignSelf:"stretch"},urlText:{flex:1,fontSize:"0.85rem",color:"#7ec87e",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},copyBtn:{background:"transparent",border:"1px solid #444",color:"#aaa",fontSize:"0.75rem",padding:"0.2rem 0.6rem",borderRadius:3,cursor:"pointer",fontFamily:"inherit",flexShrink:0},priceCard:{background:"#111",border:"1px solid #2a2a2a",borderRadius:8,padding:"1.5rem",alignSelf:"stretch"},priceLine:{display:"flex",alignItems:"flex-start",marginBottom:"1rem"},priceLabel:{margin:0,color:"#666",fontSize:"0.8rem",letterSpacing:"0.12em"},priceValue:{margin:"0.15rem 0 0",fontSize:"4rem",fontWeight:"bold",color:"#7ec87e",lineHeight:1},countdown:{margin:"0.4rem 0 0",color:"#888",fontSize:"0.85rem"},chartBox:{width:"100%",height:260,borderRadius:4,overflow:"hidden"},card:{background:"#111",border:"1px solid #2a2a2a",borderRadius:8,padding:"1.25rem 1.5rem",alignSelf:"stretch"},cardTitle:{margin:"0 0 0.75rem",fontSize:"0.85rem",color:"#666",letterSpacing:"0.08em"},empty:{color:"#555",fontSize:"0.9rem",margin:0},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",color:"#555",fontSize:"0.75rem",padding:"0 0.5rem 0.5rem",letterSpacing:"0.06em"},td:{color:"#ccc",fontSize:"0.9rem",padding:"0.3rem 0.5rem",borderTop:"1px solid #1a1a1a"},kickBtn:{background:"transparent",border:"1px solid #4a2020",color:"#c87e7e",fontSize:"0.75rem",padding:"0.15rem 0.5rem",borderRadius:3,cursor:"pointer"},headline:{margin:0,color:"#ddd",fontStyle:"italic",fontSize:"0.95rem",lineHeight:1.5},summary:{margin:0,color:"#aaa",fontSize:"0.85rem",lineHeight:1.6,whiteSpace:"pre-wrap"}};function F1(o,t){switch(t.type){case"set_value":return{...o,value:t.value.replace(/\D/g,"").slice(0,4),error:null};case"set_error":return{...o,error:t.msg};case"show_manual":return{...o,showManual:!0}}}function I1(){const o=Ah(),{gameCode:t,phase:i,cycle:r,knownPlayers:l}=Ka(),[u,d]=ot.useReducer(F1,{value:"",error:null,showManual:!1}),h=t!==null,p=i==="decision"||i==="resolving";function m(){if(u.value.length!==4){d({type:"set_error",msg:"Enter the 4-digit code from your host."});return}o(`/${u.value}`)}return B.jsxs("div",{style:An.root,children:[B.jsx("h1",{style:An.title,children:"🌽 Aura Farmers"}),h&&B.jsxs("div",{style:An.gameCard,children:[B.jsxs("div",{style:An.gameCardTop,children:[B.jsx("span",{style:{...An.dot,background:p?"#7ec87e":"#e0b84b"}}),B.jsx("span",{style:An.gameStatus,children:p?`Game in progress — Cycle ${r}`:"Game lobby open"})]}),l.length>0&&B.jsxs("p",{style:An.playerCount,children:[l.length," player",l.length!==1?"s":""," in game"]}),B.jsx("button",{style:An.joinBtn,onClick:()=>o(`/${t}`),children:"Join Game →"})]}),!h||u.showManual?B.jsxs("div",{style:An.form,children:[h&&B.jsx("p",{style:An.orDivider,children:"— or enter a different code —"}),!h&&B.jsx("p",{style:An.sub,children:"Enter your room code to join a game."}),B.jsx("input",{style:An.codeInput,value:u.value,inputMode:"numeric",placeholder:"0000",maxLength:4,onChange:_=>d({type:"set_value",value:_.target.value}),onKeyDown:_=>_.key==="Enter"&&m(),autoFocus:!h}),u.error&&B.jsx("p",{style:An.error,children:u.error}),B.jsx("button",{style:{...An.manualBtn,opacity:u.value.length===4?1:.4},onClick:m,children:"Join →"})]}):B.jsx("p",{style:An.manualLink,onClick:()=>d({type:"show_manual"}),children:"Have a different code?"}),B.jsxs("p",{style:An.adminLink,children:["Hosting?"," ",B.jsx("span",{style:An.link,onClick:()=>o("/create"),children:"Create a game"})]})]})}const An={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",gap:"1rem",padding:"2rem"},title:{fontSize:"2.5rem",letterSpacing:"0.05em",marginBottom:"0.25rem"},gameCard:{background:"#111",border:"1px solid #2a4a2a",borderRadius:10,padding:"1.25rem 1.5rem",width:"100%",maxWidth:320,display:"flex",flexDirection:"column",gap:"0.6rem"},gameCardTop:{display:"flex",alignItems:"center",gap:"0.5rem"},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gameStatus:{fontSize:"0.9rem",color:"#ccc",fontWeight:"500"},playerCount:{fontSize:"0.75rem",color:"#666",margin:0},joinBtn:{background:"#2a7a2a",color:"#fff",border:"none",padding:"0.65rem",borderRadius:6,fontFamily:"inherit",fontSize:"1rem",cursor:"pointer",marginTop:"0.25rem"},sub:{color:"#888",margin:0,fontSize:"0.9rem"},orDivider:{color:"#444",fontSize:"0.75rem",margin:"0.25rem 0",textAlign:"center"},form:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.6rem",width:"100%",maxWidth:260},codeInput:{background:"#1a1a1a",border:"1px solid #333",color:"#e0e0e0",padding:"0.75rem",borderRadius:4,fontFamily:"inherit",fontSize:"2rem",letterSpacing:"0.4em",textAlign:"center",width:"100%"},error:{color:"#ff6b6b",fontSize:"0.8rem",margin:0,textAlign:"center"},manualBtn:{background:"#2a7a2a",color:"#fff",border:"none",padding:"0.6rem 2rem",borderRadius:4,fontFamily:"inherit",fontSize:"1rem",cursor:"pointer",width:"100%"},manualLink:{color:"#555",fontSize:"0.8rem",cursor:"pointer",textDecoration:"underline"},adminLink:{color:"#555",fontSize:"0.8rem",marginTop:"0.5rem"},link:{color:"#7ec87e",cursor:"pointer",textDecoration:"underline"}};function H1(o,t){switch(t.type){case"set_name":return{...o,name:t.value};case"set_role":return{...o,role:t.value}}}function G1({code:o}){const{connected:t,error:i}=Ka(),r=Gc(),l=Ah(),[u,d]=ot.useReducer(H1,{name:"",role:"trader"});function h(){const p=u.name.trim();!p||!t||r({type:"join",name:p,role:u.role})}return B.jsxs("div",{style:Wn.root,children:[B.jsxs("div",{style:Wn.codeBadge,children:["Room ",B.jsx("span",{style:Wn.codeValue,children:o})]}),B.jsx("h1",{style:Wn.title,children:"🌽 Aura Farmers"}),!t&&B.jsx("p",{style:Wn.notice,children:"Connecting to server…"}),i&&B.jsx("p",{style:{...Wn.notice,color:"#ff6b6b"},children:i}),B.jsxs("div",{style:Wn.form,children:[B.jsxs("label",{style:Wn.label,children:["Name",B.jsx("input",{style:Wn.input,value:u.name,maxLength:24,placeholder:"e.g. Corn Baron",disabled:!t,onChange:p=>d({type:"set_name",value:p.target.value}),onKeyDown:p=>p.key==="Enter"&&h(),autoFocus:!0})]}),B.jsxs("label",{style:Wn.label,children:["Role",B.jsxs("select",{style:Wn.input,value:u.role,disabled:!t,onChange:p=>d({type:"set_role",value:p.target.value}),children:[B.jsx("option",{value:"trader",children:"📈 Trader — $15k, pure market play"}),B.jsx("option",{value:"farmer",children:"🚜 Farmer — $10k, starts with a farm"})]})]}),B.jsx("button",{style:{...Wn.btn,opacity:t&&u.name.trim()?1:.4},disabled:!t||!u.name.trim(),onClick:h,children:"Join Game"}),B.jsx("p",{style:Wn.backLink,children:B.jsx("span",{style:Wn.link,onClick:()=>l("/join"),children:"← Wrong code?"})})]})]})}const Wn={root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",gap:"1rem",padding:"2rem"},codeBadge:{fontSize:"0.8rem",color:"#555",background:"#111",border:"1px solid #2a2a2a",borderRadius:20,padding:"0.3rem 0.9rem",letterSpacing:"0.05em"},codeValue:{color:"#7ec87e",fontWeight:"bold",letterSpacing:"0.2em"},title:{fontSize:"2rem"},notice:{color:"#aaa",fontSize:"0.85rem"},form:{display:"flex",flexDirection:"column",gap:"0.75rem",width:"100%",maxWidth:360},label:{display:"flex",flexDirection:"column",gap:"0.25rem",fontSize:"0.85rem",color:"#aaa"},input:{background:"#1a1a1a",border:"1px solid #333",color:"#e0e0e0",padding:"0.5rem 0.75rem",borderRadius:4,fontFamily:"inherit",fontSize:"1rem"},btn:{background:"#2a7a2a",color:"#fff",border:"none",padding:"0.6rem 1.5rem",borderRadius:4,fontFamily:"inherit",fontSize:"1rem",cursor:"pointer",marginTop:"0.25rem"},backLink:{textAlign:"center",fontSize:"0.8rem"},link:{color:"#555",cursor:"pointer",textDecoration:"underline"}};function V1(){var _;const o=Ka(),t=Gc(),i=C0(),[r,l]=ot.useState(o.secondsRemaining);ot.useEffect(()=>{l(o.secondsRemaining)},[o.phase,o.cycle,o.secondsRemaining]),ot.useEffect(()=>{if(o.phase!=="decision"||o.paused)return;const x=setInterval(()=>l(y=>Math.max(0,y-1)),1e3);return()=>clearInterval(x)},[o.phase,o.cycle,o.paused]);const[u,d]=ot.useState(null);ot.useEffect(()=>{o.phase==="decision"&&d(null)},[o.phase,o.cycle]);function h(x,y){t({type:"action",action:x}),d(y)}const p=o.phase==="decision",m=parseFloat(o.price);return B.jsxs("div",{style:it.root,children:[B.jsxs("div",{style:it.topBar,children:[B.jsxs("div",{children:[B.jsx("span",{style:it.roleTag,children:(_=o.myRole)==null?void 0:_.toUpperCase()}),B.jsx("span",{style:it.playerName,children:o.myName})]}),B.jsxs("div",{style:it.priceBlock,children:[B.jsx("span",{style:it.priceLabel,children:"CornCo"}),B.jsxs("span",{style:it.priceValue,children:["$",m.toFixed(2)]})]}),B.jsxs("div",{style:{textAlign:"right"},children:[o.paused?B.jsx("span",{style:{...it.phasePill,background:"#2a2a2a",color:"#888"},children:"⏸ Paused"}):p?B.jsxs("span",{style:{...it.phasePill,background:"#1a3a1a",color:"#7ec87e"},children:[r,"s"]}):B.jsx("span",{style:{...it.phasePill,background:"#2a2a0a",color:"#e0b84b"},children:"Resolving…"}),B.jsxs("div",{style:it.cycleLabel,children:["Cycle ",o.cycle]})]})]}),B.jsxs("div",{style:it.content,children:[o.myRole==="farmer"?B.jsx(k1,{act:h,isDecision:p}):B.jsx(X1,{act:h,isDecision:p}),u&&B.jsxs("div",{style:it.queuedBanner,children:["✓ Queued: ",B.jsx("strong",{children:u}),B.jsx("span",{style:it.queuedNote,children:" — executes at cycle end"})]}),o.myFeedback&&B.jsxs("div",{style:it.feedbackCard,children:[B.jsxs("div",{style:it.feedbackHeader,children:[B.jsx("span",{style:it.feedbackTitle,children:"Coach"}),B.jsx("button",{style:it.dismissBtn,onClick:()=>i({type:"clear_feedback"}),children:"×"})]}),o.myFeedback.split(/\n/).filter(Boolean).map((x,y)=>B.jsx("p",{style:it.feedbackLine,children:x.trim()},y))]}),o.headlines.length>0&&B.jsxs("div",{style:it.headlineCard,children:[B.jsx("span",{style:it.headlineLabel,children:"HEADLINE"}),B.jsx("p",{style:it.headlineText,children:o.headlines[o.headlines.length-1].text})]})]})]})}function k1({act:o,isDecision:t}){const i=Ka(),r=i.farms.find(_=>_.owner===i.myPlayerId),l=parseFloat(i.myCash),u=parseFloat(i.myNetWorth);if(!r)return B.jsx("div",{style:it.card,children:B.jsx("p",{style:{color:"#666",textAlign:"center"},children:"No farm assigned yet."})});const d=r.fields-r.planted_fields,h=r.planted_fields>0&&r.state==="healthy",p=r.stored_corn>0,m=l>=500;return B.jsxs(B.Fragment,{children:[B.jsx("div",{style:it.card,children:B.jsxs("div",{style:it.statGrid,children:[B.jsx(Pi,{label:"Planted",value:`${r.planted_fields}/${r.fields}`}),B.jsx(Pi,{label:"Stored corn",value:String(r.stored_corn)}),B.jsx(Pi,{label:"Workers",value:String(r.workers)}),B.jsx(Pi,{label:"Cash",value:`$${l.toFixed(0)}`}),B.jsx(Pi,{label:"Net worth",value:`$${u.toFixed(0)}`}),B.jsx(Pi,{label:"Farm",value:r.state})]})}),B.jsxs("div",{style:it.card,children:[B.jsx("p",{style:it.cardTitle,children:"Actions (one per cycle)"}),B.jsxs("div",{style:it.btnGrid,children:[B.jsx(As,{label:"Plant Fields",sub:`${d} available`,disabled:!t||d===0,onClick:()=>o({kind:"plant_fields",farm_id:r.id,count:d},"Plant Fields")}),B.jsx(As,{label:"Harvest Corn",sub:h?`${r.planted_fields} fields`:"nothing to harvest",disabled:!t||!h,onClick:()=>o({kind:"harvest_corn",farm_id:r.id},"Harvest Corn")}),B.jsx(As,{label:"Sell Corn",sub:p?`${r.stored_corn} bushels`:"barn is empty",disabled:!t||!p,onClick:()=>o({kind:"sell_corn",farm_id:r.id},"Sell Corn")}),B.jsx(As,{label:"Hire Worker",sub:m?"costs $500":"not enough cash",disabled:!t||!m,onClick:()=>o({kind:"hire_worker",farm_id:r.id},"Hire Worker")})]})]})]})}function X1({act:o,isDecision:t}){const i=Ka(),[r,l]=ot.useState(1),u=parseFloat(i.myCash),d=parseFloat(i.price),h=parseFloat(i.myNetWorth),p=u>=d*r,m=i.myShares>=r;return B.jsxs(B.Fragment,{children:[B.jsx("div",{style:it.card,children:B.jsxs("div",{style:it.statGrid,children:[B.jsx(Pi,{label:"Cash",value:`$${u.toFixed(0)}`}),B.jsx(Pi,{label:"Shares",value:String(i.myShares),color:i.myShares<0?"#c87e7e":void 0}),B.jsx(Pi,{label:"Net worth",value:`$${h.toFixed(0)}`}),B.jsx(Pi,{label:"Aura",value:i.myAura.toFixed(0)})]})}),B.jsxs("div",{style:it.card,children:[B.jsx("p",{style:it.cardTitle,children:"Quantity"}),B.jsx("div",{style:it.qtyRow,children:[1,2,5,10].map(_=>B.jsx("button",{style:{...it.qtyBtn,...r===_?it.qtyBtnActive:{}},onClick:()=>l(_),children:_},_))})]}),B.jsxs("div",{style:it.card,children:[B.jsx("p",{style:it.cardTitle,children:"Actions (one per cycle)"}),B.jsxs("div",{style:it.btnGrid,children:[B.jsx(As,{label:`Buy ${r}`,sub:p?`~$${(d*r).toFixed(0)}`:"not enough cash",disabled:!t||!p,color:"#1a3a1a",borderColor:"#2a5a2a",onClick:()=>o({kind:"place_order",side:"bid",quantity:r},`Buy ${r} shares`)}),B.jsx(As,{label:`Sell ${r}`,sub:m?`${i.myShares} held`:"not enough shares",disabled:!t||!m,color:"#3a1a1a",borderColor:"#5a2a2a",onClick:()=>o({kind:"place_order",side:"ask",quantity:r},`Sell ${r} shares`)})]})]})]})}function Pi({label:o,value:t,color:i}){return B.jsxs("div",{style:it.stat,children:[B.jsx("span",{style:it.statLabel,children:o}),B.jsx("span",{style:{...it.statValue,color:i??"#e0e0e0"},children:t})]})}function As({label:o,sub:t,disabled:i,onClick:r,color:l="#1a2a3a",borderColor:u="#2a4a6a"}){return B.jsxs("button",{style:{...it.actionBtn,background:i?"#161616":l,borderColor:i?"#2a2a2a":u,opacity:i?.5:1,cursor:i?"not-allowed":"pointer"},disabled:i,onClick:r,children:[B.jsx("span",{style:it.actionBtnLabel,children:o}),B.jsx("span",{style:it.actionBtnSub,children:t})]})}const it={root:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"#0a0a0a",fontFamily:"inherit"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1rem",background:"#111",borderBottom:"1px solid #2a2a2a",position:"sticky",top:0,zIndex:10},roleTag:{fontSize:"0.6rem",background:"#1a3a3a",color:"#7ec8c8",padding:"0.15rem 0.4rem",borderRadius:2,letterSpacing:"0.08em",marginRight:"0.4rem"},playerName:{fontSize:"0.85rem",color:"#bbb"},priceBlock:{textAlign:"center"},priceLabel:{display:"block",fontSize:"0.6rem",color:"#666",letterSpacing:"0.1em"},priceValue:{fontSize:"1.4rem",fontWeight:"bold",color:"#7ec87e"},phasePill:{fontSize:"0.8rem",fontWeight:"bold",padding:"0.2rem 0.5rem",borderRadius:4,letterSpacing:"0.04em"},cycleLabel:{fontSize:"0.65rem",color:"#555",marginTop:"0.15rem",textAlign:"right"},content:{display:"flex",flexDirection:"column",gap:"0.75rem",padding:"0.75rem",flex:1},card:{background:"#111",border:"1px solid #222",borderRadius:8,padding:"0.9rem 1rem"},cardTitle:{margin:"0 0 0.6rem",fontSize:"0.7rem",color:"#666",textTransform:"uppercase",letterSpacing:"0.08em"},statGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem 1rem"},stat:{display:"flex",flexDirection:"column"},statLabel:{fontSize:"0.65rem",color:"#555",textTransform:"uppercase",letterSpacing:"0.06em"},statValue:{fontSize:"1rem",fontWeight:"500",marginTop:"0.1rem"},btnGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"},actionBtn:{border:"1px solid",borderRadius:8,padding:"0.9rem 0.6rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.2rem",fontFamily:"inherit"},actionBtnLabel:{fontSize:"0.95rem",fontWeight:"600",color:"#e0e0e0"},actionBtnSub:{fontSize:"0.65rem",color:"#888"},qtyRow:{display:"flex",gap:"0.5rem"},qtyBtn:{flex:1,padding:"0.6rem 0",background:"#161616",border:"1px solid #333",borderRadius:6,color:"#888",fontSize:"1rem",fontFamily:"inherit",cursor:"pointer"},qtyBtnActive:{background:"#1a3a3a",borderColor:"#2a6a6a",color:"#7ec8c8"},queuedBanner:{background:"#0d1f0d",border:"1px solid #2a4a2a",borderRadius:6,padding:"0.7rem 1rem",fontSize:"0.85rem",color:"#7ec87e"},queuedNote:{color:"#555",fontSize:"0.75rem"},feedbackCard:{background:"#0d140d",border:"1px solid #2a3a2a",borderRadius:8,padding:"0.9rem 1rem"},feedbackHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},feedbackTitle:{fontSize:"0.7rem",color:"#7ec87e",textTransform:"uppercase",letterSpacing:"0.08em"},feedbackLine:{fontSize:"0.82rem",color:"#b0d4b0",lineHeight:1.5,margin:"0.2rem 0"},dismissBtn:{background:"transparent",border:"none",color:"#555",cursor:"pointer",fontSize:"1.1rem",lineHeight:1,padding:0},headlineCard:{background:"#111",border:"1px solid #222",borderRadius:8,padding:"0.75rem 1rem"},headlineLabel:{fontSize:"0.6rem",color:"#555",letterSpacing:"0.1em",display:"block",marginBottom:"0.3rem"},headlineText:{fontSize:"0.85rem",color:"#bbb",fontStyle:"italic",margin:0,lineHeight:1.5}};function W1(){const{debrief:o,headlines:t,myName:i,myPlayerId:r}=Ka();if(!o)return B.jsxs("div",{style:jt.root,children:[B.jsx("h1",{style:jt.title,children:"Game Over"}),B.jsx("p",{style:{color:"#555"},children:"Calculating results…"})]});const l=o.leaderboard.find(u=>u.player_id===r);return B.jsxs("div",{style:jt.root,children:[B.jsx("h1",{style:jt.title,children:"Game Over"}),B.jsx("p",{style:jt.sub,children:o.game_over_reason}),l&&B.jsxs("div",{style:jt.myResult,children:[B.jsxs("span",{style:jt.rank,children:["#",l.rank]}),B.jsxs("div",{children:[B.jsx("strong",{children:i})," — ",l.role,B.jsx("br",{}),B.jsxs("span",{style:jt.stat,children:["Net worth: $",parseFloat(l.net_worth).toFixed(0)," ·"," "]}),B.jsxs("span",{style:{...jt.stat,color:parseFloat(l.pnl)>=0?"#7ec87e":"#e06060"},children:[l.return_pct>=0?"+":"",l.return_pct.toFixed(1),"% return"]})]})]}),B.jsxs("section",{style:jt.statsGrid,children:[B.jsx(Es,{label:"Final Price",value:`$${o.final_price.toFixed(2)}`}),B.jsx(Es,{label:"High",value:`$${o.price_high.toFixed(2)}`}),B.jsx(Es,{label:"Low",value:`$${o.price_low.toFixed(2)}`}),B.jsx(Es,{label:"Volatility",value:`${o.price_vol_pct.toFixed(2)}%`}),B.jsx(Es,{label:"Cycles",value:o.total_cycles.toString()}),B.jsx(Es,{label:"MM Blowups",value:o.mm_blowups.toString()})]}),B.jsxs("section",{children:[B.jsx("h2",{style:jt.sectionTitle,children:"Leaderboard"}),B.jsxs("table",{style:jt.table,children:[B.jsx("thead",{children:B.jsx("tr",{children:["#","Player","Role","Net Worth","PnL","Return"].map(u=>B.jsx("th",{style:jt.th,children:u},u))})}),B.jsx("tbody",{children:o.leaderboard.map(u=>{const d=parseFloat(u.pnl),h=u.player_id===r;return B.jsxs("tr",{style:h?jt.myRow:void 0,children:[B.jsx("td",{style:jt.td,children:u.rank}),B.jsx("td",{style:{...jt.td,fontWeight:h?"bold":"normal"},children:u.name}),B.jsx("td",{style:jt.td,children:u.role}),B.jsxs("td",{style:jt.td,children:["$",parseFloat(u.net_worth).toFixed(0)]}),B.jsxs("td",{style:{...jt.td,color:d>=0?"#7ec87e":"#e06060"},children:[d>=0?"+":"","$",d.toFixed(0)]}),B.jsxs("td",{style:{...jt.td,color:u.return_pct>=0?"#7ec87e":"#e06060"},children:[u.return_pct>=0?"+":"",u.return_pct.toFixed(1),"%"]})]},u.player_id)})})]})]}),t.length>0&&B.jsxs("section",{children:[B.jsx("h2",{style:jt.sectionTitle,children:"Season Headlines"}),t.map((u,d)=>B.jsxs("p",{style:jt.headline,children:[B.jsxs("span",{style:{color:"#555"},children:["Cycle ",u.cycle,":"]})," ",u.text]},d))]})]})}function Es({label:o,value:t}){return B.jsxs("div",{style:jt.statCard,children:[B.jsx("div",{style:jt.statLabel,children:o}),B.jsx("div",{style:jt.statValue,children:t})]})}const jt={root:{maxWidth:860,margin:"0 auto",padding:"3rem 2rem",display:"flex",flexDirection:"column",gap:"2rem"},title:{fontSize:"2rem"},sub:{color:"#888"},myResult:{display:"flex",alignItems:"center",gap:"1rem",background:"#111",border:"1px solid #2a4a2a",borderRadius:6,padding:"1rem 1.25rem"},rank:{fontSize:"2rem",color:"#7ec87e",fontWeight:"bold",minWidth:48},stat:{fontSize:"0.9rem",color:"#aaa"},statsGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.75rem"},statCard:{background:"#111",border:"1px solid #2a2a2a",borderRadius:4,padding:"0.75rem 1rem"},statLabel:{fontSize:"0.7rem",color:"#555",textTransform:"uppercase",letterSpacing:"0.08em"},statValue:{fontSize:"1.2rem",fontWeight:"bold",marginTop:"0.2rem"},sectionTitle:{fontSize:"0.75rem",color:"#555",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.75rem"},table:{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem"},th:{textAlign:"left",padding:"0.4rem 0.75rem",borderBottom:"1px solid #2a2a2a",color:"#555",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.06em"},td:{padding:"0.45rem 0.75rem",borderBottom:"1px solid #1a1a1a"},myRow:{background:"#0d1a0d"},headline:{fontSize:"0.85rem",color:"#bbb",borderLeft:"2px solid #333",paddingLeft:"0.75rem",marginBottom:"0.4rem"}},E0="aura_is_host",T0="aura_game_code";function q1(){const[o,t]=ot.useReducer(by,bh,m=>({...m,isHost:sessionStorage.getItem(E0)==="1",gameCode:localStorage.getItem(T0)??null})),[i,r]=Ay();ot.useEffect(()=>{sessionStorage.setItem(E0,o.isHost?"1":"0")},[o.isHost]),ot.useEffect(()=>{o.gameCode&&localStorage.setItem(T0,o.gameCode)},[o.gameCode]);const l=ot.useCallback(m=>t({type:"server_msg",msg:m}),[]),u=ot.useCallback(()=>t({type:"ws_connected"}),[]),d=ot.useCallback(()=>t({type:"ws_disconnected"}),[]),h=Dy(l,u,d);ot.useEffect(()=>{(i.page==="home"||i.page==="join")&&!o.isHost&&o.myPlayerId===null&&o.gameCode&&r(`/${o.gameCode}`)},[i.page,o.gameCode,o.isHost,o.myPlayerId]);let p;if(o.isHost)p=B.jsx(B1,{});else if(o.myPlayerId!==null)p=o.phase==="game_over"?B.jsx(W1,{}):B.jsx(V1,{});else switch(i.page){case"create":p=B.jsx(b_,{});break;case"host":p=B.jsx(b_,{});break;case"code":p=B.jsx(G1,{code:i.code});break;case"join":case"home":default:p=B.jsx(I1,{});break}return B.jsx(b0.Provider,{value:o,children:B.jsx(A0.Provider,{value:t,children:B.jsx(R0.Provider,{value:h,children:B.jsx(w0.Provider,{value:r,children:p})})})})}Ty.createRoot(document.getElementById("root")).render(B.jsx(ot.StrictMode,{children:B.jsx(q1,{})}));
