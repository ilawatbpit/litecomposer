(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function gy(){if(h_)return bo;h_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var d_;function _y(){return d_||(d_=1,Zf.exports=gy()),Zf.exports}var St=_y(),Kf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function vy(){if(p_)return oe;p_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function y(U,et,xt){this.props=U,this.context=et,this.refs=E,this.updater=xt||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,et){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,et,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function O(U,et,xt){this.props=U,this.context=et,this.refs=E,this.updater=xt||S}var L=O.prototype=new v;L.constructor=O,T(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function B(U,et,xt,mt,Y,ht){return xt=ht.ref,{$$typeof:r,type:U,key:et,ref:xt!==void 0?xt:null,props:ht}}function X(U,et){return B(U.type,et,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function w(U){var et={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return et[xt]})}var G=/\/+/g;function at(U,et){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):et.toString(36)}function J(){}function lt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(J,J):(U.status="pending",U.then(function(et){U.status==="pending"&&(U.status="fulfilled",U.value=et)},function(et){U.status==="pending"&&(U.status="rejected",U.reason=et)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,et,xt,mt,Y){var ht=typeof U;(ht==="undefined"||ht==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(ht){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case r:case t:yt=!0;break;case g:return yt=U._init,ut(yt(U._payload),et,xt,mt,Y)}}if(yt)return Y=Y(U),yt=mt===""?"."+at(U,0):mt,C(Y)?(xt="",yt!=null&&(xt=yt.replace(G,"$&/")+"/"),ut(Y,et,xt,"",function(qt){return qt})):Y!=null&&(D(Y)&&(Y=X(Y,xt+(Y.key==null||U&&U.key===Y.key?"":(""+Y.key).replace(G,"$&/")+"/")+yt)),et.push(Y)),1;yt=0;var Rt=mt===""?".":mt+":";if(C(U))for(var wt=0;wt<U.length;wt++)mt=U[wt],ht=Rt+at(mt,wt),yt+=ut(mt,et,xt,ht,Y);else if(wt=x(U),typeof wt=="function")for(U=wt.call(U),wt=0;!(mt=U.next()).done;)mt=mt.value,ht=Rt+at(mt,wt++),yt+=ut(mt,et,xt,ht,Y);else if(ht==="object"){if(typeof U.then=="function")return ut(lt(U),et,xt,mt,Y);throw et=String(U),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return yt}function P(U,et,xt){if(U==null)return U;var mt=[],Y=0;return ut(U,mt,"","",function(ht){return et.call(xt,ht,Y++)}),mt}function K(U){if(U._status===-1){var et=U._result;et=et(),et.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=et)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return oe.Children={map:P,forEach:function(U,et,xt){P(U,function(){et.apply(this,arguments)},xt)},count:function(U){var et=0;return P(U,function(){et++}),et},toArray:function(U){return P(U,function(et){return et})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=O,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,et,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var mt=T({},U.props),Y=U.key,ht=void 0;if(et!=null)for(yt in et.ref!==void 0&&(ht=void 0),et.key!==void 0&&(Y=""+et.key),et)!z.call(et,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&et.ref===void 0||(mt[yt]=et[yt]);var yt=arguments.length-2;if(yt===1)mt.children=xt;else if(1<yt){for(var Rt=Array(yt),wt=0;wt<yt;wt++)Rt[wt]=arguments[wt+2];mt.children=Rt}return B(U.type,Y,void 0,void 0,ht,mt)},oe.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},oe.createElement=function(U,et,xt){var mt,Y={},ht=null;if(et!=null)for(mt in et.key!==void 0&&(ht=""+et.key),et)z.call(et,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(Y[mt]=et[mt]);var yt=arguments.length-2;if(yt===1)Y.children=xt;else if(1<yt){for(var Rt=Array(yt),wt=0;wt<yt;wt++)Rt[wt]=arguments[wt+2];Y.children=Rt}if(U&&U.defaultProps)for(mt in yt=U.defaultProps,yt)Y[mt]===void 0&&(Y[mt]=yt[mt]);return B(U,ht,void 0,void 0,null,Y)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:h,render:U}},oe.isValidElement=D,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:K}},oe.memo=function(U,et){return{$$typeof:p,type:U,compare:et===void 0?null:et}},oe.startTransition=function(U){var et=H.T,xt={};H.T=xt;try{var mt=U(),Y=H.S;Y!==null&&Y(xt,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(Mt,q)}catch(ht){q(ht)}finally{H.T=et}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(U){return H.H.use(U)},oe.useActionState=function(U,et,xt){return H.H.useActionState(U,et,xt)},oe.useCallback=function(U,et){return H.H.useCallback(U,et)},oe.useContext=function(U){return H.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,et){return H.H.useDeferredValue(U,et)},oe.useEffect=function(U,et,xt){var mt=H.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return mt.useEffect(U,et)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(U,et,xt){return H.H.useImperativeHandle(U,et,xt)},oe.useInsertionEffect=function(U,et){return H.H.useInsertionEffect(U,et)},oe.useLayoutEffect=function(U,et){return H.H.useLayoutEffect(U,et)},oe.useMemo=function(U,et){return H.H.useMemo(U,et)},oe.useOptimistic=function(U,et){return H.H.useOptimistic(U,et)},oe.useReducer=function(U,et,xt){return H.H.useReducer(U,et,xt)},oe.useRef=function(U){return H.H.useRef(U)},oe.useState=function(U){return H.H.useState(U)},oe.useSyncExternalStore=function(U,et,xt){return H.H.useSyncExternalStore(U,et,xt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.1.0",oe}var m_;function Td(){return m_||(m_=1,Kf.exports=vy()),Kf.exports}var Le=Td(),Qf={exports:{}},Ao={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function xy(){return g_||(g_=1,function(r){function t(P,K){var q=P.length;P.push(K);t:for(;0<q;){var Mt=q-1>>>1,U=P[Mt];if(0<l(U,K))P[Mt]=K,P[q]=U,q=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var K=P[0],q=P.pop();if(q!==K){P[0]=q;t:for(var Mt=0,U=P.length,et=U>>>1;Mt<et;){var xt=2*(Mt+1)-1,mt=P[xt],Y=xt+1,ht=P[Y];if(0>l(mt,q))Y<U&&0>l(ht,mt)?(P[Mt]=ht,P[Y]=q,Mt=Y):(P[Mt]=mt,P[xt]=q,Mt=xt);else if(Y<U&&0>l(ht,q))P[Mt]=ht,P[Y]=q,Mt=Y;else break t}}return K}function l(P,K){var q=P.sortIndex-K.sortIndex;return q!==0?q:P.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,_=null,x=3,S=!1,T=!1,E=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=P)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function H(P){if(E=!1,C(P),!T)if(i(m)!==null)T=!0,z||(z=!0,at());else{var K=i(p);K!==null&&ut(H,K.startTime-P)}}var z=!1,B=-1,X=5,D=-1;function w(){return y?!0:!(r.unstable_now()-D<X)}function G(){if(y=!1,z){var P=r.unstable_now();D=P;var K=!0;try{t:{T=!1,E&&(E=!1,O(B),B=-1),S=!0;var q=x;try{e:{for(C(P),_=i(m);_!==null&&!(_.expirationTime>P&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,x=_.priorityLevel;var U=Mt(_.expirationTime<=P);if(P=r.unstable_now(),typeof U=="function"){_.callback=U,C(P),K=!0;break e}_===i(m)&&s(m),C(P)}else s(m);_=i(m)}if(_!==null)K=!0;else{var et=i(p);et!==null&&ut(H,et.startTime-P),K=!1}}break t}finally{_=null,x=q,S=!1}K=void 0}}finally{K?at():z=!1}}}var at;if(typeof L=="function")at=function(){L(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,lt=J.port2;J.port1.onmessage=G,at=function(){lt.postMessage(null)}}else at=function(){v(G,0)};function ut(P,K){B=v(function(){P(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return P()}finally{x=q}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return K()}finally{x=q}},r.unstable_scheduleCallback=function(P,K,q){var Mt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Mt+q:Mt):q=Mt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:K,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>Mt?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(E?(O(B),B=-1):E=!0,ut(H,q-Mt))):(P.sortIndex=U,t(m,P),T||S||(T=!0,z||(z=!0,at()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var K=x;return function(){var q=x;x=K;try{return P.apply(this,arguments)}finally{x=q}}}}($f)),$f}var __;function yy(){return __||(__=1,Jf.exports=xy()),Jf.exports}var th={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function Sy(){if(v_)return Un;v_=1;var r=Td();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var x_;function My(){if(x_)return th.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),th.exports=Sy(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function Ey(){if(y_)return Ao;y_=1;var r=yy(),t=Td(),i=My();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===o)return h(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case E:return"StrictMode";case H:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function et(e){return{current:e}}function xt(e){0>U||(e.current=Mt[U],Mt[U]=null,U--)}function mt(e,n){U++,Mt[U]=e.current,e.current=n}var Y=et(null),ht=et(null),yt=et(null),Rt=et(null);function wt(e,n){switch(mt(yt,n),mt(ht,e),mt(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Y),mt(Y,e)}function qt(){xt(Y),xt(ht),xt(yt)}function kt(e){e.memoizedState!==null&&mt(Rt,e);var n=Y.current,a=Gg(n,e.type);n!==a&&(mt(ht,e),mt(Y,a))}function be(e){ht.current===e&&(xt(Y),xt(ht)),Rt.current===e&&(xt(Rt),yo._currentValue=q)}var Ce=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,F=r.unstable_cancelCallback,pn=r.unstable_shouldYield,xe=r.unstable_requestPaint,ue=r.unstable_now,Vt=r.unstable_getCurrentPriorityLevel,ye=r.unstable_ImmediatePriority,Kt=r.unstable_UserBlockingPriority,se=r.unstable_NormalPriority,$e=r.unstable_LowPriority,N=r.unstable_IdlePriority,b=r.log,nt=r.unstable_setDisableYieldValue,dt=null,gt=null;function ct(e){if(typeof b=="function"&&nt(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(dt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Xt,Ut=Math.log,Gt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var Et=256,It=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=jt(o):(M&=A,M!==0?u=jt(M):a||(a=A&~e,a!==0&&(u=jt(a))))):(A=o&~f,A!==0?u=jt(A):M!==0?u=jt(M):a||(a=o&~e,a!==0&&(u=jt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Lt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Pt(a),_t=1<<ft;A[ft]=0,I[ft]=-1;var it=tt[ft];if(it!==null)for(tt[ft]=null,ft=0;ft<it.length;ft++){var st=it[ft];st!==null&&(st.lane&=-536870913)}a&=~_t}o!==0&&vt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:r_(e.type))}function Wn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var mn=Math.random().toString(36).slice(2),on="__reactFiber$"+mn,En="__reactProps$"+mn,In="__reactContainer$"+mn,Za="__reactEvents$"+mn,qo="__reactListeners$"+mn,Yo="__reactHandles$"+mn,Ka="__reactResources$"+mn,fa="__reactMarker$"+mn;function ha(e){delete e[on],delete e[En],delete e[Za],delete e[qo],delete e[Yo]}function Ii(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[In]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wg(e);e!==null;){if(a=e[on])return a;e=Wg(e)}return n}e=a,a=e.parentNode}return null}function zi(e){if(e=e[on]||e[In]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function da(e){var n=e[Ka];return n||(n=e[Ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[fa]=!0}var jo=new Set,Zo={};function Bi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Zo[e]=n,e=0;e<n.length;e++)jo.add(n[e])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function Z(e){return Ce.call(ot,e)?!0:Ce.call(rt,e)?!1:j.test(e)?ot[e]=!0:(rt[e]=!0,!1)}function bt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,te;function Qt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var Wt=!1;function fe(e,n){if(!e||Wt)return"";Wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(st){var it=st}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(st){it=st}e.call(_t.prototype)}}else{try{throw Error()}catch(st){it=st}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(st){if(st&&it&&typeof st.stack=="string")return[st.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var I=M.split(`
`),tt=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===tt.length)for(o=I.length-1,u=tt.length-1;1<=o&&0<=u&&I[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==tt[u]){var ft=`
`+I[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function De(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return Qt("Activity");default:return""}}function ke(e){try{var n="";do n+=De(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e){var n=Me(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){e._valueTracker||(e._valueTracker=Jt(e))}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Me(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function Xe(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Se(n)):e.value!==""+Se(n)&&(e.value=""+Se(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,M,Se(n)):a!=null?Cn(e,M,Se(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Se(A):e.removeAttribute("name")}function Ge(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,n,a){n==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+Se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Se(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Hi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var jc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,Ds=null;function Vd(e){var n=zi(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(s(90));Fi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Te(o)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Kc=!1;function kd(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(Cs!==null||Ds!==null)&&(Pl(),Cs&&(n=Cs,e=Ds,Ds=Cs=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Gi)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Qc=!1}var ma=null,Jc=null,Qo=null;function Xd(){if(Qo)return Qo;var e,n=Jc,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Wd(){return!1}function zn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=zn(Ja),Or=g({},Ja,{view:0,detail:0}),gv=zn(Or),$c,tu,Pr,el=g({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?($c=e.screenX-Pr.screenX,tu=e.screenY-Pr.screenY):tu=$c=0,Pr=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),qd=zn(el),_v=g({},el,{dataTransfer:0}),vv=zn(_v),xv=g({},Or,{relatedTarget:0}),eu=zn(xv),yv=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=zn(yv),Mv=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ev=zn(Mv),Tv=g({},Ja,{data:0}),Yd=zn(Tv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rv[e])?!!n[e]:!1}function nu(){return wv}var Cv=g({},Or,{key:function(e){if(e.key){var n=bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dv=zn(Cv),Uv=g({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=zn(Uv),Lv=g({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Nv=zn(Lv),Ov=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=zn(Ov),Iv=g({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=zn(Iv),Bv=g({},Ja,{newState:0,oldState:0}),Fv=zn(Bv),Hv=[9,13,27,32],iu=Gi&&"CompositionEvent"in window,Ir=null;Gi&&"documentMode"in document&&(Ir=document.documentMode);var Gv=Gi&&"TextEvent"in window&&!Ir,Zd=Gi&&(!iu||Ir&&8<Ir&&11>=Ir),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return Hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function Vv(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function kv(e,n){if(Us)return e==="compositionend"||!iu&&Jd(e,n)?(e=Xd(),Qo=Jc=ma=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xv[e.type]:n==="textarea"}function ep(e,n,a,o){Cs?Ds?Ds.push(o):Ds=[o]:Cs=o,n=Gl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var zr=null,Br=null;function Wv(e){Pg(e,0)}function nl(e){var n=Qa(e);if(Te(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(Gi){var au;if(Gi){var su="oninput"in document;if(!su){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),su=typeof ap.oninput=="function"}au=su}else au=!1;ip=au&&(!document.documentMode||9<document.documentMode)}function sp(){zr&&(zr.detachEvent("onpropertychange",rp),Br=zr=null)}function rp(e){if(e.propertyName==="value"&&nl(Br)){var n=[];ep(n,Br,e,Zc(e)),kd(Wv,n)}}function qv(e,n,a){e==="focusin"?(sp(),zr=n,Br=a,zr.attachEvent("onpropertychange",rp)):e==="focusout"&&sp()}function Yv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Br)}function jv(e,n){if(e==="click")return nl(n)}function Zv(e,n){if(e==="input"||e==="change")return nl(n)}function Kv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Kv;function Fr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ce.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=wn(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qv=Gi&&"documentMode"in document&&11>=document.documentMode,Ls=null,ou=null,Hr=null,lu=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Ls==null||Ls!==wn(o)||(o=Ls,"selectionStart"in o&&ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hr&&Fr(Hr,o)||(Hr=o,o=Gl(ou,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ls)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},cu={},hp={};Gi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function ts(e){if(cu[e])return cu[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return cu[e]=n[a];return e}var dp=ts("animationend"),pp=ts("animationiteration"),mp=ts("animationstart"),Jv=ts("transitionrun"),$v=ts("transitionstart"),tx=ts("transitioncancel"),gp=ts("transitionend"),_p=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function pi(e,n){_p.set(e,n),Bi(n,[e])}var vp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ke(n)},vp.set(e,n),n)}return{value:e,source:n,stack:ke(n)}}var ai=[],Os=0,fu=0;function il(){for(var e=Os,n=fu=Os=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&xp(a,u,f)}}function al(e,n,a,o){ai[Os++]=e,ai[Os++]=n,ai[Os++]=a,ai[Os++]=o,fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hu(e,n,a,o){return al(e,n,a,o),sl(e)}function Ps(e,n){return al(e,null,null,n),sl(e)}function xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function sl(e){if(50<fo)throw fo=0,xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function ex(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new ex(e,n,a,o)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function rl(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")du(e)&&(M=1);else if(typeof e=="string")M=iy(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,a,n,u),e.elementType=D,e.lanes=f,e;case T:return es(a.children,u,f,n);case E:M=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case H:return e=Yn(13,a,n,u),e.elementType=H,e.lanes=f,e;case z:return e=Yn(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:M=10;break t;case O:M=9;break t;case C:M=11;break t;case B:M=14;break t;case X:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Yn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function es(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function pu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function mu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zs=[],Bs=0,ol=null,ll=0,si=[],ri=0,ns=null,ki=1,Xi="";function is(e,n){zs[Bs++]=ll,zs[Bs++]=ol,ol=e,ll=n}function Sp(e,n,a){si[ri++]=ki,si[ri++]=Xi,si[ri++]=ns,ns=e;var o=ki;e=Xi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ki=1<<32-Pt(n)+u|a<<u|o,Xi=f+e}else ki=1<<f|a<<u|o,Xi=e}function gu(e){e.return!==null&&(is(e,1),Sp(e,1,0))}function _u(e){for(;e===ol;)ol=zs[--Bs],zs[Bs]=null,ll=zs[--Bs],zs[Bs]=null;for(;e===ns;)ns=si[--ri],si[ri]=null,Xi=si[--ri],si[ri]=null,ki=si[--ri],si[ri]=null}var On=null,Ke=null,Ue=!1,as=null,bi=!1,vu=Error(s(519));function ss(e){var n=Error(s(418,""));throw kr(ii(n,e)),vu}function Mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[En]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)_e(po[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ze(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Tn(n,o.value,o.defaultValue,o.children),Ze(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=Vl),n=!0):n=!1,n||ss(e)}function Ep(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:On=On.return}}function Gr(e){if(e!==On)return!1;if(!Ue)return Ep(e),Ue=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&Ke&&ss(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ke=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ke=null}}else n===27?(n=Ke,Ua(e.type)?(e=Ff,Ff=null,Ke=e):Ke=n):Ke=On?gi(e.stateNode.nextSibling):null;return!0}function Vr(){Ke=On=null,Ue=!1}function Tp(){var e=as;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),as=null),e}function kr(e){as===null?as=[e]:as.push(e)}var xu=et(null),rs=null,Wi=null;function ga(e,n,a){mt(xu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=xu.current,xt(xu)}function yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),yu(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),yu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Xr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Rt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return bp(rs,e)}function ul(e,n){return rs===null&&os(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var nx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ix=r.unstable_scheduleCallback,ax=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new nx,data:new Map,refCount:0}}function Wr(e){e.refCount--,e.refCount===0&&ix(ax,function(){e.controller.abort()})}var qr=null,Eu=0,Fs=0,Hs=null;function sx(e,n){if(qr===null){var a=qr=[];Eu=0,Fs=Af(),Hs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(Ap,Ap),n}function Ap(){if(--Eu===0&&qr!==null){Hs!==null&&(Hs.status="fulfilled");var e=qr;qr=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&sx(e,n),Rp!==null&&Rp(e,n)};var ls=et(null);function Tu(){var e=ls.current;return e!==null?e:We.pooledCache}function fl(e,n){n===null?mt(ls,ls.current):mt(ls,n.pool)}function wp(){var e=Tu();return e===null?null:{parent:cn._currentValue,pool:e}}var Yr=Error(s(460)),Cp=Error(s(474)),hl=Error(s(542)),bu={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dl(){}function Up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(dl,dl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(dl,dl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw jr=n,Yr}}var jr=null;function Lp(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}function Np(e){if(e===Yr||e===hl)throw Error(s(483))}var _a=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=sl(e),xp(e,null,a),n}return al(e,o,n,a),sl(e)}function Zr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}function wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function Kr(){if(Cu){var e=Hs;if(e!==null)throw e}}function Qr(e,n,a,o){Cu=!1;var u=e.updateQueue;_a=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,tt=I.next;I.next=null,M===null?f=tt:M.next=tt,M=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==M&&(A===null?ft.firstBaseUpdate=tt:A.next=tt,ft.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;M=0,ft=tt=I=null,A=f;do{var it=A.lane&-536870913,st=it!==A.lane;if(st?(Ee&it)===it:(o&it)===it){it!==0&&it===Fs&&(Cu=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ne=e,$t=A;it=n;var Be=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){_t=ne.call(Be,_t,it);break t}_t=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,it=typeof ne=="function"?ne.call(Be,_t,it):ne,it==null)break t;_t=g({},_t,it);break t;case 2:_a=!0}}it=A.callback,it!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[it]:st.push(it))}else st={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(tt=ft=st,I=_t):ft=ft.next=st,M|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ft===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=_t}}function Op(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Gs=et(null),pl=et(0);function Ip(e,n){e=$i,mt(pl,e),mt(Gs,n),$i=e|n.baseLanes}function Du(){mt(pl,$i),mt(Gs,Gs.current)}function Uu(){$i=pl.current,xt(Gs),xt(pl)}var ya=0,he=null,Ie=null,an=null,ml=!1,Vs=!1,cs=!1,gl=0,Jr=0,ks=null,ox=0;function tn(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,f){return ya=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?xm:ym,cs=!1,f=a(o,u),cs=!1,Vs&&(f=Bp(n,a,o,u)),zp(e),f}function zp(e){P.H=Ml;var n=Ie!==null&&Ie.next!==null;if(ya=0,an=Ie=he=null,ml=!1,Jr=0,ks=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&cl(e)&&(_n=!0))}function Bp(e,n,a,o){he=e;var u=0;do{if(Vs&&(ks=null),Jr=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,an=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=px,f=n(a,o)}while(Vs);return f}function lx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?$r(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(he.flags|=1024),n}function Ou(){var e=gl!==0;return gl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Iu(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}ya=0,an=Ie=he=null,Vs=!1,Jr=gl=0,ks=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?he.memoizedState=an=e:an=an.next=e,an}function sn(){if(Ie===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=an===null?he.memoizedState:an.next;if(n!==null)an=n,Ie=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},an===null?he.memoizedState=an=e:an=an.next=e}return an}function zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(e){var n=Jr;return Jr+=1,ks===null&&(ks=[]),e=Up(ks,e,n),n=he,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?xm:ym),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $r(e);if(e.$$typeof===L)return Dn(e)}throw Error(s(438,String(e)))}function Bu(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=sn();return Fu(n,Ie,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,I=null,tt=n,ft=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(Ee&_t)===_t:(ya&_t)===_t){var it=tt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===Fs&&(ft=!0);else if((ya&it)===it){tt=tt.next,it===Fs&&(ft=!0);continue}else _t={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=_t,M=f):I=I.next=_t,he.lanes|=it,Ra|=it;_t=tt.action,cs&&a(f,_t),f=tt.hasEagerState?tt.eagerState:a(f,_t)}else it={lane:_t,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=it,M=f):I=I.next=it,he.lanes|=_t,Ra|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?M=f:I.next=A,!qn(f,e.memoizedState)&&(_n=!0,ft&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hu(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);qn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Fp(e,n,a){var o=he,u=sn(),f=Ue;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!qn((Ie||u).memoizedState,a);M&&(u.memoizedState=a,_n=!0),u=u.queue;var A=Vp.bind(null,o,u,e);if(to(2048,8,A,[e]),u.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xs(9,xl(),Gp.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(ya&124)!==0||Hp(o,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=zu(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Xp(e){var n=Ps(e,2);n!==null&&Jn(n,e,2)}function Gu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),cs){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function Wp(e,n,a,o){return e.baseState=a,Fu(e,Ie,typeof o=="function"?o:Yi)}function cx(e,n,a,o,u){if(Sl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,M={};P.T=M;try{var A=a(u,o),I=P.S;I!==null&&I(M,A),Yp(e,n,A)}catch(tt){Vu(e,n,tt)}finally{P.T=f}}else try{f=a(u,o),Yp(e,n,f)}catch(tt){Vu(e,n,tt)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jp(e,n,o)},function(o){return Vu(e,n,o)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function Vu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==o)}e.action=null}function Zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(Ue){var a=We.formState;if(a!==null){t:{var o=he;if(Ue){if(Ke){e:{for(var u=Ke,f=bi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=gi(u.nextSibling),o=u.data==="F!";break t}}ss(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,he,o),o.dispatch=a,o=Gu(!1),f=Yu.bind(null,he,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=cx.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jp(e){var n=sn();return $p(n,Ie,e)}function $p(e,n,a){if(n=Fu(e,n,Kp)[0],e=vl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$r(n)}catch(M){throw M===Yr?hl:M}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Xs(9,xl(),ux.bind(null,u,a),null)),[o,f,e]}function ux(e,n){e.action=n}function tm(e){var n=sn(),a=Ie;if(a!==null)return $p(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=zu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function xl(){return{destroy:void 0,resource:void 0}}function em(){return sn().memoizedState}function yl(e,n,a,o){var u=Bn();o=o===void 0?null:o,he.flags|=e,u.memoizedState=Xs(1|n,xl(),a,o)}function to(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Lu(o,Ie.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(he.flags|=e,u.memoizedState=Xs(1|n,f,a,o))}function nm(e,n){yl(8390656,8,e,n)}function im(e,n){to(2048,8,e,n)}function am(e,n){return to(4,2,e,n)}function sm(e,n){return to(4,4,e,n)}function rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,to(4,4,rm.bind(null,n,e),a)}function ku(){}function lm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=e(),cs){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function Xu(e,n,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),he.lanes|=e,Ra|=e,a)}function um(e,n,a,o){return qn(a,n)?a:Gs.current!==null?(e=Xu(e,a,o),qn(e,n)||(_n=!0),e):(ya&42)===0?(_n=!0,e.memoizedState=a):(e=hg(),he.lanes|=e,Ra|=e,n)}function fm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var M=P.T,A={};P.T=A,Yu(e,!1,n,a);try{var I=u(),tt=P.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=rx(I,o);eo(e,n,ft,Qn(e))}else eo(e,n,o,Qn(e))}catch(_t){eo(e,n,{then:function(){},status:"rejected",reason:_t},Qn())}finally{K.p=f,P.T=M}}function fx(){}function Wu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=hm(e).queue;fm(e,u,n,q,a===null?fx:function(){return dm(e),a(o)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=hm(e).next.queue;eo(e,n,{},Qn())}function qu(){return Dn(yo)}function pm(){return sn().memoizedState}function mm(){return sn().memoizedState}function hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=va(a);var o=xa(n,e,a);o!==null&&(Jn(o,n,a),Zr(o,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function dx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?_m(n,a):(a=hu(e,n,a,o),a!==null&&(Jn(a,e,o),vm(a,n,o)))}function gm(e,n,a){var o=Qn();eo(e,n,a,o)}function eo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))_m(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,M))return al(e,n,u,0),We===null&&il(),!1}catch{}finally{}if(a=hu(e,n,u,o),a!==null)return Jn(a,e,o),vm(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:Af(),action:o,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(s(479))}else n=hu(e,a,o,2),n!==null&&Jn(n,e,2)}function Sl(e){var n=e.alternate;return e===he||n!==null&&n===he}function _m(e,n){Vs=ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}var Ml={readContext:Dn,use:_l,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},xm={readContext:Dn,use:_l,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(cs){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(cs){ct(!0);try{a(n)}finally{ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=dx.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=gm.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Bn();return Xu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=fm.bind(null,he,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Bn();if(Ue){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Ee&124)!==0||Hp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,nm(Vp.bind(null,o,f,e),[e]),o.flags|=2048,Xs(9,xl(),Gp.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=We.identifierPrefix;if(Ue){var a=Xi,o=ki;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ox++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return Bn().memoizedState=hx.bind(null,he)}},ym={readContext:Dn,use:_l,useCallback:lm,useContext:Dn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:vl,useRef:em,useState:function(){return vl(Yi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=sn();return um(a,Ie.memoizedState,e,n)},useTransition:function(){var e=vl(Yi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:qu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=sn();return Wp(a,Ie,e,n)},useMemoCache:Bu,useCacheRefresh:mm},px={readContext:Dn,use:_l,useCallback:lm,useContext:Dn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:Hu,useRef:em,useState:function(){return Hu(Yi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=sn();return Ie===null?Xu(a,e,n):um(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Hu(Yi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:qu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=sn();return Ie!==null?Wp(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:mm},Ws=null,no=0;function El(e){var n=no;return no+=1,Ws===null&&(Ws=[]),Up(Ws,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sm(e){var n=e._init;return n(e._payload)}function Mm(e){function n(W,V){if(e){var $=W.deletions;$===null?(W.deletions=[V],W.flags|=16):$.push(V)}}function a(W,V){if(!e)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function o(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function u(W,V){return W=Vi(W,V),W.index=0,W.sibling=null,W}function f(W,V,$){return W.index=$,e?($=W.alternate,$!==null?($=$.index,$<V?(W.flags|=67108866,V):$):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function M(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function A(W,V,$,pt){return V===null||V.tag!==6?(V=pu($,W.mode,pt),V.return=W,V):(V=u(V,$),V.return=W,V)}function I(W,V,$,pt){var Ht=$.type;return Ht===T?ft(W,V,$.props.children,pt,$.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&Sm(Ht)===V.type)?(V=u(V,$.props),io(V,$),V.return=W,V):(V=rl($.type,$.key,$.props,null,W.mode,pt),io(V,$),V.return=W,V)}function tt(W,V,$,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=mu($,W.mode,pt),V.return=W,V):(V=u(V,$.children||[]),V.return=W,V)}function ft(W,V,$,pt,Ht){return V===null||V.tag!==7?(V=es($,W.mode,pt,Ht),V.return=W,V):(V=u(V,$),V.return=W,V)}function _t(W,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pu(""+V,W.mode,$),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return $=rl(V.type,V.key,V.props,null,W.mode,$),io($,V),$.return=W,$;case S:return V=mu(V,W.mode,$),V.return=W,V;case X:var pt=V._init;return V=pt(V._payload),_t(W,V,$)}if(ut(V)||at(V))return V=es(V,W.mode,$,null),V.return=W,V;if(typeof V.then=="function")return _t(W,El(V),$);if(V.$$typeof===L)return _t(W,ul(W,V),$);Tl(W,V)}return null}function it(W,V,$,pt){var Ht=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:A(W,V,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Ht?I(W,V,$,pt):null;case S:return $.key===Ht?tt(W,V,$,pt):null;case X:return Ht=$._init,$=Ht($._payload),it(W,V,$,pt)}if(ut($)||at($))return Ht!==null?null:ft(W,V,$,pt,null);if(typeof $.then=="function")return it(W,V,El($),pt);if($.$$typeof===L)return it(W,V,ul(W,$),pt);Tl(W,$)}return null}function st(W,V,$,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get($)||null,A(V,W,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return W=W.get(pt.key===null?$:pt.key)||null,I(V,W,pt,Ht);case S:return W=W.get(pt.key===null?$:pt.key)||null,tt(V,W,pt,Ht);case X:var de=pt._init;return pt=de(pt._payload),st(W,V,$,pt,Ht)}if(ut(pt)||at(pt))return W=W.get($)||null,ft(V,W,pt,Ht,null);if(typeof pt.then=="function")return st(W,V,$,El(pt),Ht);if(pt.$$typeof===L)return st(W,V,$,ul(V,pt),Ht);Tl(V,pt)}return null}function ne(W,V,$,pt){for(var Ht=null,de=null,Yt=V,ee=V=0,xn=null;Yt!==null&&ee<$.length;ee++){Yt.index>ee?(xn=Yt,Yt=null):xn=Yt.sibling;var Re=it(W,Yt,$[ee],pt);if(Re===null){Yt===null&&(Yt=xn);break}e&&Yt&&Re.alternate===null&&n(W,Yt),V=f(Re,V,ee),de===null?Ht=Re:de.sibling=Re,de=Re,Yt=xn}if(ee===$.length)return a(W,Yt),Ue&&is(W,ee),Ht;if(Yt===null){for(;ee<$.length;ee++)Yt=_t(W,$[ee],pt),Yt!==null&&(V=f(Yt,V,ee),de===null?Ht=Yt:de.sibling=Yt,de=Yt);return Ue&&is(W,ee),Ht}for(Yt=o(Yt);ee<$.length;ee++)xn=st(Yt,W,ee,$[ee],pt),xn!==null&&(e&&xn.alternate!==null&&Yt.delete(xn.key===null?ee:xn.key),V=f(xn,V,ee),de===null?Ht=xn:de.sibling=xn,de=xn);return e&&Yt.forEach(function(Ia){return n(W,Ia)}),Ue&&is(W,ee),Ht}function $t(W,V,$,pt){if($==null)throw Error(s(151));for(var Ht=null,de=null,Yt=V,ee=V=0,xn=null,Re=$.next();Yt!==null&&!Re.done;ee++,Re=$.next()){Yt.index>ee?(xn=Yt,Yt=null):xn=Yt.sibling;var Ia=it(W,Yt,Re.value,pt);if(Ia===null){Yt===null&&(Yt=xn);break}e&&Yt&&Ia.alternate===null&&n(W,Yt),V=f(Ia,V,ee),de===null?Ht=Ia:de.sibling=Ia,de=Ia,Yt=xn}if(Re.done)return a(W,Yt),Ue&&is(W,ee),Ht;if(Yt===null){for(;!Re.done;ee++,Re=$.next())Re=_t(W,Re.value,pt),Re!==null&&(V=f(Re,V,ee),de===null?Ht=Re:de.sibling=Re,de=Re);return Ue&&is(W,ee),Ht}for(Yt=o(Yt);!Re.done;ee++,Re=$.next())Re=st(Yt,W,ee,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?ee:Re.key),V=f(Re,V,ee),de===null?Ht=Re:de.sibling=Re,de=Re);return e&&Yt.forEach(function(my){return n(W,my)}),Ue&&is(W,ee),Ht}function Be(W,V,$,pt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Ht=$.key;V!==null;){if(V.key===Ht){if(Ht=$.type,Ht===T){if(V.tag===7){a(W,V.sibling),pt=u(V,$.props.children),pt.return=W,W=pt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&Sm(Ht)===V.type){a(W,V.sibling),pt=u(V,$.props),io(pt,$),pt.return=W,W=pt;break t}a(W,V);break}else n(W,V);V=V.sibling}$.type===T?(pt=es($.props.children,W.mode,pt,$.key),pt.return=W,W=pt):(pt=rl($.type,$.key,$.props,null,W.mode,pt),io(pt,$),pt.return=W,W=pt)}return M(W);case S:t:{for(Ht=$.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(W,V.sibling),pt=u(V,$.children||[]),pt.return=W,W=pt;break t}else{a(W,V);break}else n(W,V);V=V.sibling}pt=mu($,W.mode,pt),pt.return=W,W=pt}return M(W);case X:return Ht=$._init,$=Ht($._payload),Be(W,V,$,pt)}if(ut($))return ne(W,V,$,pt);if(at($)){if(Ht=at($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),$t(W,V,$,pt)}if(typeof $.then=="function")return Be(W,V,El($),pt);if($.$$typeof===L)return Be(W,V,ul(W,$),pt);Tl(W,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(W,V.sibling),pt=u(V,$),pt.return=W,W=pt):(a(W,V),pt=pu($,W.mode,pt),pt.return=W,W=pt),M(W)):a(W,V)}return function(W,V,$,pt){try{no=0;var Ht=Be(W,V,$,pt);return Ws=null,Ht}catch(Yt){if(Yt===Yr||Yt===hl)throw Yt;var de=Yn(29,Yt,null,W.mode);return de.lanes=pt,de.return=W,de}finally{}}}var qs=Mm(!0),Em=Mm(!1),oi=et(null),Ai=null;function Sa(e){var n=e.alternate;mt(un,un.current&1),mt(oi,e),Ai===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(Ai=e)}function Tm(e){if(e.tag===22){if(mt(un,un.current),mt(oi,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else Ma()}function Ma(){mt(un,un.current),mt(oi,oi.current)}function ji(e){xt(oi),Ai===e&&(Ai=null),xt(un)}var un=et(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ju(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),Zr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),Zr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Jn(n,e,a),Zr(n,e,a))}};function bm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Fr(a,o)||!Fr(u,f):!0}function Am(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rm(e){Al(e)}function wm(e){console.error(e)}function Cm(e){Al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ku(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function Um(e){return e=va(e),e.tag=3,e}function Lm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Dm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function mx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 13:return Ai===null?Sf():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(s(435,a.tag))}return Ef(e,o,u),Sf(),!1}if(Ue)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==vu&&(e=Error(s(422),{cause:o}),kr(ii(e,a)))):(o!==vu&&(n=Error(s(423),{cause:o}),kr(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=Ku(e.stateNode,o,u),wu(e,u),Qe!==4&&(Qe=2)),!1;var f=Error(s(520),{cause:o});if(f=ii(f,a),uo===null?uo=[f]:uo.push(f),Qe!==4&&(Qe=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ku(a.stateNode,o,e),wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Um(u),Lm(u,e,a,o),wu(a,u),!1}a=a.return}while(a!==null);return!1}var Nm=Error(s(461)),_n=!1;function bn(e,n,a,o){n.child=e===null?Em(n,null,a,o):qs(n,e.child,a,o)}function Om(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return os(n),o=Nu(e,n,a,M,f,u),A=Ou(),e!==null&&!_n?(Pu(e,n,u),Zi(e,n,u)):(Ue&&A&&gu(n),n.flags|=1,bn(e,n,o,u),n.child)}function Pm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(e,n,f,o,u)):(e=rl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fr,a(M,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Vi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Im(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Fr(f,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=f,sf(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return Qu(e,n,a,o,u)}function zm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Du(),Tm(n);else return n.lanes=n.childLanes=536870912,Bm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(fl(n,f.cachePool),Ip(n,f),Ma(),n.memoizedState=null):(e!==null&&fl(n,null),Du(),Ma());return bn(e,n,u,a),n.child}function Bm(e,n,a,o){var u=Tu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&fl(n,null),Du(),Tm(n),e!==null&&Xr(e,n,o,!0),null}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Qu(e,n,a,o,u){return os(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!_n?(Pu(e,n,u),Zi(e,n,u)):(Ue&&o&&gu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Fm(e,n,a,o,u,f){return os(n),n.updateQueue=null,a=Bp(n,o,a,u),zp(e),o=Ou(),e!==null&&!_n?(Pu(e,n,f),Zi(e,n,f)):(Ue&&o&&gu(n),n.flags|=1,bn(e,n,a,f),n.child)}function Hm(e,n,a,o,u){if(os(n),n.stateNode===null){var f=Is,M=a.contextType;typeof M=="object"&&M!==null&&(f=Dn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Au(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Dn(M):Is,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ju(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Zu.enqueueReplaceState(f,f.state,null),Qr(n,o,f,u),Kr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=us(a,A);f.props=I;var tt=f.context,ft=a.contextType;M=Is,typeof ft=="object"&&ft!==null&&(M=Dn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==M)&&Am(n,f,o,M),_a=!1;var it=n.memoizedState;f.state=it,Qr(n,o,f,u),Kr(),tt=n.memoizedState,A||it!==tt||_a?(typeof _t=="function"&&(ju(n,a,_t,o),tt=n.memoizedState),(I=_a||bm(n,a,I,o,it,tt,M))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=M,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ru(e,n),M=n.memoizedProps,ft=us(a,M),f.props=ft,_t=n.pendingProps,it=f.context,tt=a.contextType,I=Is,typeof tt=="object"&&tt!==null&&(I=Dn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==_t||it!==I)&&Am(n,f,o,I),_a=!1,it=n.memoizedState,f.state=it,Qr(n,o,f,u),Kr();var st=n.memoizedState;M!==_t||it!==st||_a||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof A=="function"&&(ju(n,a,A,o),st=n.memoizedState),(ft=_a||bm(n,a,ft,o,it,st,I)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,st,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,st,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=I,o=ft):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function Gm(e,n,a,o){return Vr(),n.flags|=256,bn(e,n,a,o),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(e){return{baseLanes:e,cachePool:wp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Vm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(u?Sa(n):Ma(),Ue){var A=Ke,I;if(I=A){t:{for(I=A,A=bi;I.nodeType!==8;){if(!A){A=null;break t}if(I=gi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(n.memoizedState={dehydrated:A,treeContext:ns!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},I=Yn(18,null,null,0),I.stateNode=A,I.return=n,n.child=I,On=n,Ke=null,I=!0):I=!1}I||ss(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Bf(A)?n.lanes=32:n.lanes=536870912,null;ji(n)}return A=o.children,o=o.fallback,u?(Ma(),u=n.mode,A=Cl({mode:"hidden",children:A},u),o=es(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=$u(a),u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(Sa(n),ef(n,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=nf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,A=n.mode,o=Cl({mode:"visible",children:o.children},A),u=es(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qs(n,e.child,null,a),o=n.child,o.memoizedState=$u(a),o.childLanes=tf(e,M,a),n.memoizedState=Ju,n=u);else if(Sa(n),Bf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var tt=M.dgst;M=tt,o=Error(s(419)),o.stack="",o.digest=M,kr({value:o,source:null,stack:null}),n=nf(e,n,a)}else if(_n||Xr(e,n,a,!1),M=(a&e.childLanes)!==0,_n||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:ie(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Ps(e,o),Jn(M,e,o),Nm;A.data==="$?"||Sf(),n=nf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ke=gi(A.nextSibling),On=n,Ue=!0,as=null,bi=!1,e!==null&&(si[ri++]=ki,si[ri++]=Xi,si[ri++]=ns,ki=e.id,Xi=e.overflow,ns=n),n=ef(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,A=n.mode,I=e.child,tt=I.sibling,o=Vi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?u=Vi(tt,u):(u=es(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=$u(a):(I=A.cachePool,I!==null?(tt=cn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=wp(),A={baseLanes:A.baseLanes|a,cachePool:I}),u.memoizedState=A,u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(Sa(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nf(e,n,a){return qs(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yu(e.return,n,a)}function af(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Xm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(bn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(mt(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),af(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}af(n,!0,a,null,f);break;case"together":af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function gx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ga(n,cn,e.memoizedState.cache),Vr();break;case 27:case 5:kt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(Sa(n),e=Zi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,zm(e,n,a);case 24:ga(n,cn,e.memoizedState.cache)}return Zi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return _n=!1,gx(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Ue&&(n.flags&1048576)!==0&&Sp(n,ll,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")du(o)?(e=us(o,e),n.tag=1,n=Hm(null,n,o,e,a)):(n.tag=0,n=Qu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=Om(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Pm(null,n,o,e,a);break t}}throw n=lt(o)||o,Error(s(306,n,""))}}return n;case 0:return Qu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=us(o,n.pendingProps),Hm(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ru(e,n),Qr(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,cn,o),o!==f.cache&&Su(n,[cn],a,!0),Kr(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,o,a);break t}else if(o!==u){u=ii(Error(s(424)),n),kr(u),n=Gm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=gi(e.firstChild),On=n,Ue=!0,as=null,bi=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vr(),o===u){n=Zi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,e=n.pendingProps,o=kl(yt.current).createElement(a),o[on]=n,o[En]=e,Rn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=Zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&Ue&&(o=n.stateNode=qg(n.type,n.pendingProps,yt.current),On=n,bi=!0,u=Ke,Ua(n.type)?(Ff=u,Ke=gi(o.firstChild)):Ke=u),bn(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((u=o=Ke)&&(o=Xx(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,On=n,Ke=gi(o.firstChild),bi=!1,u=!0):u=!1),u||ss(n)),kt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Pf(u,f)?o=null:M!==null&&Pf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,lx,null,null,a),yo._currentValue=u),wl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Ue&&((e=a=Ke)&&(a=Wx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,On=n,Ke=null,e=!0):e=!1),e||ss(n)),null;case 13:return Vm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qs(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,os(n),u=Dn(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return Im(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Cl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return zm(e,n,a);case 24:return os(n),o=Dn(cn),e===null?(u=Tu(),u===null&&(u=We,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Au(n),ga(n,cn,u)):((e.lanes&a)!==0&&(Ru(e,n),Qr(n,null,null,a),Kr()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,cn,o)):(o=f.cache,ga(n,cn,o),o!==u.cache&&Su(n,[cn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n)){if(n=oi.current,n!==null&&((Ee&4194048)===Ee?Ai!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Ai))throw jr=bu,Cp;e.flags|=8192}}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Ks|=n)}function ao(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _x(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(cn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gr(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),je(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(je(n),qm(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),je(n),qm(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),je(n),n.flags&=-16777217),null;case 27:be(n),a=yt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}e=Y.current,Gr(n)?Mp(n):(e=qg(u,o,a),n.stateNode=e,Ki(n))}return je(n),null;case 5:if(be(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(e=Y.current,Gr(n))Mp(n);else{switch(u=kl(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[on]=n,e[En]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Rn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,Gr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||ss(n)}else e=kl(e).createTextNode(o),e[on]=n,n.stateNode=e}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),je(n),null;case 4:return qt(),e===null&&Df(n.stateNode.containerInfo),je(n),null;case 10:return qi(n.type),je(n),null;case 19:if(xt(un),u=n.memoizedState,u===null)return je(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ao(u,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,ao(u,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)yp(a,e),a=a.sibling;return mt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&ue()>Nl&&(n.flags|=128,o=!0,ao(u,!1),n.lanes=4194304)}else{if(!o)if(e=bl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ue)return je(n),null}else 2*ue()-u.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,o=!0,ao(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ue(),n.sibling=null,e=un.current,mt(un,o?e&1|2:e&1),n):(je(n),null);case 22:case 23:return ji(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(cn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vx(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(cn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(un),null;case 4:return qt(),null;case 10:return qi(n.type),null;case 22:case 23:return ji(n),Uu(),e!==null&&xt(ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(cn),null;case 25:return null;default:return null}}function Ym(e,n){switch(_u(n),n.tag){case 3:qi(cn),qt();break;case 26:case 27:case 5:be(n);break;case 4:qt();break;case 13:ji(n);break;case 19:xt(un);break;case 10:qi(n.type);break;case 22:case 23:ji(n),Uu(),e!==null&&xt(ls);break;case 24:qi(cn)}}function so(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Ve(n,n.return,A)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var I=a,tt=A;try{tt()}catch(ft){Ve(u,I,ft)}}}o=o.next}while(o!==f)}}catch(ft){Ve(n,n.return,ft)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){Ve(e,e.return,o)}}}function Zm(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function rf(e,n,a){try{var o=e.stateNode;Fx(o,e.type,a,n),o[En]=n}catch(u){Ve(e,e.return,u)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vl));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[on]=e,n[En]=a}catch(f){Ve(e,e.return,f)}}var Qi=!1,en=!1,cf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,vn=null;function xx(e,n){if(e=e.containerInfo,Nf=Zl,e=up(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,I=-1,tt=0,ft=0,_t=e,it=null;e:for(;;){for(var st;_t!==a||u!==0&&_t.nodeType!==3||(A=M+u),_t!==f||o!==0&&_t.nodeType!==3||(I=M+o),_t.nodeType===3&&(M+=_t.nodeValue.length),(st=_t.firstChild)!==null;)it=_t,_t=st;for(;;){if(_t===e)break e;if(it===a&&++tt===u&&(A=M),it===f&&++ft===o&&(I=M),(st=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=st}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Zl=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=us(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&so(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ve(a,a.return,M)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ve(a,a.return,M)}}o&64&&jm(a),o&512&&ro(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(M){Ve(a,a.return,M)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:Ta(e,a),n===null&&o&4&&Km(a),o&512&&ro(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wx.bind(null,a),qx(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||en,u=Qi;var f=en;Qi=o,(en=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),Qi=u,en=f}break;case 30:break;default:Ta(e,a)}}function eg(e){var n=e.alternate;n!==null&&(e.alternate=null,eg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Fn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)ng(e,n,a),a=a.sibling}function ng(e,n,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:en||Ri(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ri(a,n);var o=qe,u=Fn;Ua(a.type)&&(qe=a.stateNode,Fn=!1),Ji(e,n,a),go(a.stateNode),qe=o,Fn=u;break;case 5:en||Ri(a,n);case 6:if(o=qe,u=Fn,qe=null,Ji(e,n,a),qe=o,Fn=u,qe!==null)if(Fn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:qe!==null&&(Fn?(e=qe,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),To(e)):Xg(qe,a.stateNode));break;case 4:o=qe,u=Fn,qe=a.stateNode.containerInfo,Fn=!0,Ji(e,n,a),qe=o,Fn=u;break;case 0:case 11:case 14:case 15:en||Ea(2,a,n),en||Ea(4,a,n),Ji(e,n,a);break;case 1:en||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ji(e,n,a),en=o;break;default:Ji(e,n,a)}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){Ve(n,n.return,a)}}function yx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(s(435,e.tag))}}function uf(e,n){var a=yx(e);n.forEach(function(o){var u=Cx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Ua(A.type)){qe=A.stateNode,Fn=!1;break t}break;case 5:qe=A.stateNode,Fn=!1;break t;case 3:case 4:qe=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(qe===null)throw Error(s(160));ng(f,M,u),qe=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var mi=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ea(3,e,e.return),so(3,e),Ea(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[on]=e,nn(f),o=f;break t;case"link":var M=Jg("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=Jg("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,nn(f),o=f}e.stateNode=o}else $g(u,e.type,e.stateNode);else e.stateNode=Qg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?$g(u,e.type,e.stateNode):Qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),a!==null&&o&4&&rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),e.flags&32){u=e.stateNode;try{Ti(u,"")}catch(st){Ve(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(cf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){Ve(e,e.return,st)}}break;case 3:if(ql=null,u=mi,mi=Xl(n.containerInfo),jn(n,e),mi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(st){Ve(e,e.return,st)}cf&&(cf=!1,sg(e));break;case 4:o=mi,mi=Xl(e.stateNode.containerInfo),jn(n,e),Zn(e),mi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=ue()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Qi,ft=en;if(Qi=tt||u,en=ft||I,jn(n,e),en=ft,Qi=tt,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Qi||en||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(st){Ve(I,I.return,st)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(st){Ve(I,I.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uf(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=of(e);Ul(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ti(M,""),a.flags&=-33);var A=of(e);Ul(e,A,M);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=of(e);lf(e,tt,I);break;default:throw Error(s(161))}}catch(ft){Ve(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),fs(n);break;case 27:go(n.stateNode);case 26:case 5:Ri(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),so(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ve(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Op(I[u],A)}catch(tt){Ve(o,o.return,tt)}}a&&M&64&&jm(f),ro(f,f.return);break;case 27:Jm(f);case 26:case 5:ba(u,f,a),a&&o===null&&M&4&&Km(f),ro(f,f.return);break;case 12:ba(u,f,a);break;case 13:ba(u,f,a),a&&M&4&&ig(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),ro(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wr(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(e,n,a,o),n=n.sibling}function rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&so(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ve(n,n.return,I)}}else wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,o):oo(e,n):f._visibility&2?wi(e,n,a,o):(f._visibility|=2,Ys(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&ff(M,n);break;case 24:wi(e,n,a,o),u&2048&&hf(n.alternate,n);break;default:wi(e,n,a,o)}}function Ys(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,I=o,tt=M.flags;switch(M.tag){case 0:case 11:case 15:Ys(f,M,A,I,u),so(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?Ys(f,M,A,I,u):oo(f,M):(ft._visibility|=2,Ys(f,M,A,I,u)),u&&tt&2048&&ff(M.alternate,M);break;case 24:Ys(f,M,A,I,u),u&&tt&2048&&hf(M.alternate,M);break;default:Ys(f,M,A,I,u)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:oo(a,o),u&2048&&ff(o.alternate,o);break;case 24:oo(a,o),u&2048&&hf(o.alternate,o);break;default:oo(a,o)}n=n.sibling}}var lo=8192;function js(e){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 26:js(e),e.flags&lo&&e.memoizedState!==null&&sy(mi,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var n=mi;mi=Xl(e.stateNode.containerInfo),js(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,js(e),lo=n):js(e));break;default:js(e)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,ug(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):co(e);break;default:co(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,ug(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function ug(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var u=o.sibling,f=o.return;if(eg(o),o===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Sx={getCacheForType:function(e){var n=Dn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Mx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,ge=null,Ee=0,Pe=0,Kn=null,Aa=!1,Zs=!1,df=!1,$i=0,Qe=0,Ra=0,hs=0,pf=0,li=0,Ks=0,uo=null,Hn=null,mf=!1,gf=0,Nl=1/0,Ol=null,wa=null,An=0,Ca=null,Qs=null,Js=0,_f=0,vf=null,fg=null,fo=0,xf=null;function Qn(){if((Oe&2)!==0&&Ee!==0)return Ee&-Ee;if(P.T!==null){var e=Fs;return e!==0?e:Af()}return Ae()}function hg(){li===0&&(li=(Ee&536870912)===0||Ue?k():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function Jn(e,n,a){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&($s(e,0),Da(e,Ee,li,!1)),zt(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(hs|=a),Qe===4&&Da(e,Ee,li,!1)),Ci(e))}function dg(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?bx(e,n):Mf(e,n,!0),f=o;do{if(u===0){Zs&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ex(a)){u=Mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=uo;var I=A.current.memoizedState.isDehydrated;if(I&&($s(A,M).flags|=256),M=Mf(A,M,!1),M!==2){if(df&&!I){A.errorRecoveryDisabledLanes|=f,hs|=f,u=4;break t}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){$s(e,0),Da(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,li,!Aa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=gf+300-ue(),10<u)){if(Da(o,n,li,!Aa),Zt(o,0,!0)!==0)break t;o.timeoutHandle=Vg(pg.bind(null,o,a,Hn,Ol,mf,n,li,hs,Ks,Aa,f,2,-0,0),u);break t}pg(o,a,Hn,Ol,mf,n,li,hs,Ks,Aa,f,0,-0,0)}}break}while(!0);Ci(e)}function pg(e,n,a,o,u,f,M,A,I,tt,ft,_t,it,st){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:ay},og(n),_t=ry(),_t!==null)){e.cancelPendingCommit=_t(Sg.bind(null,e,n,f,a,o,u,M,A,I,ft,1,it,st)),Da(e,f,M,!tt);return}Sg(e,n,f,a,o,u,M,A,I)}function Ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~pf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&vt(e,a,n)}function Pl(){return(Oe&6)===0?(ho(0),!1):!0}function yf(){if(ge!==null){if(Pe===0)var e=ge.return;else e=ge,Wi=rs=null,Iu(e),Ws=null,no=0,e=ge;for(;e!==null;)Ym(e.alternate,e),e=e.return;ge=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),yf(),We=e,ge=a=Vi(e.current,null),Ee=n,Pe=0,Kn=null,Aa=!1,Zs=Ct(e,n),df=!1,Ks=li=pf=hs=Ra=Qe=0,Hn=uo=null,mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return $i=n,il(),a}function mg(e,n){he=null,P.H=Ml,n===Yr||n===hl?(n=Lp(),Pe=3):n===Cp?(n=Lp(),Pe=4):Pe=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,ge===null&&(Qe=1,Rl(e,ii(n,e.current)))}function gg(){var e=P.H;return P.H=Ml,e===null?Ml:e}function _g(){var e=P.A;return P.A=Sx,e}function Sf(){Qe=4,Aa||(Ee&4194048)!==Ee&&oi.current!==null||(Zs=!0),(Ra&134217727)===0&&(hs&134217727)===0||We===null||Da(We,Ee,li,!1)}function Mf(e,n,a){var o=Oe;Oe|=2;var u=gg(),f=_g();(We!==e||Ee!==n)&&(Ol=null,$s(e,n)),n=!1;var M=Qe;t:do try{if(Pe!==0&&ge!==null){var A=ge,I=Kn;switch(Pe){case 8:yf(),M=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var tt=Pe;if(Pe=0,Kn=null,tr(e,A,I,tt),a&&Zs){M=0;break t}break;default:tt=Pe,Pe=0,Kn=null,tr(e,A,I,tt)}}Tx(),M=Qe;break}catch(ft){mg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Wi=rs=null,Oe=o,P.H=u,P.A=f,ge===null&&(We=null,Ee=0,il()),M}function Tx(){for(;ge!==null;)vg(ge)}function bx(e,n){var a=Oe;Oe|=2;var o=gg(),u=_g();We!==e||Ee!==n?(Ol=null,Nl=ue()+500,$s(e,n)):Zs=Ct(e,n);t:do try{if(Pe!==0&&ge!==null){n=ge;var f=Kn;e:switch(Pe){case 1:Pe=0,Kn=null,tr(e,n,f,1);break;case 2:case 9:if(Dp(f)){Pe=0,Kn=null,xg(n);break}n=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),Ci(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Dp(f)?(Pe=0,Kn=null,xg(n)):(Pe=0,Kn=null,tr(e,n,f,7));break;case 5:var M=null;switch(ge.tag){case 26:M=ge.memoizedState;case 5:case 27:var A=ge;if(!M||t_(M)){Pe=0,Kn=null;var I=A.sibling;if(I!==null)ge=I;else{var tt=A.return;tt!==null?(ge=tt,Il(tt)):ge=null}break e}}Pe=0,Kn=null,tr(e,n,f,5);break;case 6:Pe=0,Kn=null,tr(e,n,f,6);break;case 8:yf(),Qe=6;break t;default:throw Error(s(462))}}Ax();break}catch(ft){mg(e,ft)}while(!0);return Wi=rs=null,P.H=o,P.A=u,Oe=a,ge!==null?0:(We=null,Ee=0,il(),Qe)}function Ax(){for(;ge!==null&&!pn();)vg(ge)}function vg(e){var n=Wm(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Il(e):ge=n}function xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Iu(n);default:Ym(a,n),n=ge=yp(n,$i),n=Wm(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Il(e):ge=n}function tr(e,n,a,o){Wi=rs=null,Iu(n),Ws=null,no=0;var u=n.return;try{if(mx(e,u,n,a,Ee)){Qe=1,Rl(e,ii(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;Qe=1,Rl(e,ii(a,e.current)),ge=null;return}n.flags&32768?(Ue||o===1?e=!0:Zs||(Ee&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){yg(n,Aa);return}e=n.return;var a=_x(n.alternate,n,$i);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Qe===0&&(Qe=5)}function yg(e,n){do{var a=vx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Qe=6,ge=null}function Sg(e,n,a,o,u,f,M,A,I){e.cancelPendingCommit=null;do zl();while(An!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,At(e,a,f,M,A,I),e===We&&(ge=We=null,Ee=0),Qs=n,Ca=e,Js=a,_f=f,vf=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dx(se,function(){return Ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,M=Oe,Oe|=4;try{xx(e,n,a)}finally{Oe=M,K.p=u,P.T=o}}An=1,Mg(),Eg(),Tg()}}function Mg(){if(An===1){An=0;var e=Ca,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Oe;Oe|=4;try{ag(n,e);var f=Of,M=up(e.containerInfo),A=f.focusedElem,I=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&cp(A.ownerDocument.documentElement,A)){if(I!==null&&ru(A)){var tt=I.start,ft=I.end;if(ft===void 0&&(ft=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ft,A.value.length);else{var _t=A.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var st=it.getSelection(),ne=A.textContent.length,$t=Math.min(I.start,ne),Be=I.end===void 0?$t:Math.min(I.end,ne);!st.extend&&$t>Be&&(M=Be,Be=$t,$t=M);var W=lp(A,$t),V=lp(A,Be);if(W&&V&&(st.rangeCount!==1||st.anchorNode!==W.node||st.anchorOffset!==W.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var $=_t.createRange();$.setStart(W.node,W.offset),st.removeAllRanges(),$t>Be?(st.addRange($),st.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),st.addRange($))}}}}for(_t=[],st=A;st=st.parentNode;)st.nodeType===1&&_t.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var pt=_t[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Zl=!!Nf,Of=Nf=null}finally{Oe=u,K.p=o,P.T=a}}e.current=n,An=2}}function Eg(){if(An===2){An=0;var e=Ca,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=Oe;Oe|=4;try{tg(e,n.alternate,n)}finally{Oe=u,K.p=o,P.T=a}}An=3}}function Tg(){if(An===4||An===3){An=0,xe();var e=Ca,n=Qs,a=Js,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,Qs=Ca=null,bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),Ne(a),n=n.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{P.T=n,K.p=u}}(Js&3)!==0&&zl(),Ci(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===xf?fo++:(fo=0,xf=e):fo=0,ho(0)}}function bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wr(n)))}function zl(e){return Mg(),Eg(),Tg(),Ag()}function Ag(){if(An!==5)return!1;var e=Ca,n=_f;_f=0;var a=Ne(Js),o=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=vf,vf=null;var f=Ca,M=Js;if(An=0,Qs=Ca=null,Js=0,(Oe&6)!==0)throw Error(s(331));var A=Oe;if(Oe|=4,cg(f.current),rg(f,f.current,M,a),Oe=A,ho(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(dt,f)}catch{}return!0}finally{K.p=u,P.T=o,bg(e,n)}}function Rg(e,n,a){n=ii(a,n),n=Ku(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(zt(e,2),Ci(e))}function Ve(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=ii(a,e),a=Um(2),o=xa(n,a,2),o!==null&&(Lm(a,o,n,e),zt(o,2),Ci(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Mx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(df=!0,u.add(a),e=Rx.bind(null,e,n,a),n.then(e,e))}function Rx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Ee&a)===a&&(Qe===4||Qe===3&&(Ee&62914560)===Ee&&300>ue()-gf?(Oe&2)===0&&$s(e,0):pf|=a,Ks===Ee&&(Ks=0)),Ci(e)}function wg(e,n){n===0&&(n=Lt()),e=Ps(e,n),e!==null&&(zt(e,n),Ci(e))}function wx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Cx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),wg(e,a)}function Dx(e,n){return me(e,n)}var Bl=null,er=null,Tf=!1,Fl=!1,bf=!1,ds=0;function Ci(e){e!==er&&e.next===null&&(er===null?Bl=er=e:er=er.next=e),Fl=!0,Tf||(Tf=!0,Lx())}function ho(e,n){if(!bf&&Fl){bf=!0;do for(var a=!1,o=Bl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(o,f))}else f=Ee,f=Zt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,Lg(o,f));o=o.next}while(a);bf=!1}}function Ux(){Cg()}function Cg(){Fl=Tf=!1;var e=0;ds!==0&&(Hx()&&(e=ds),ds=0);for(var n=ue(),a=null,o=Bl;o!==null;){var u=o.next,f=Dg(o,n);f===0?(o.next=null,a===null?Bl=u:a.next=u,u===null&&(er=a)):(a=o,(e!==0||(f&3)!==0)&&(Fl=!0)),o=u}ho(e)}function Dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Pt(f),A=1<<M,I=u[M];I===-1?((A&a)===0||(A&o)!==0)&&(u[M]=ae(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=Ee,a=Zt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&F(o),Ne(a)){case 2:case 8:a=Kt;break;case 32:a=se;break;case 268435456:a=N;break;default:a=se}return o=Ug.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&F(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var o=Ee;return o=Zt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(dg(e,o,n),Dg(e,ue()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(zl())return null;dg(e,n,!0)}function Lx(){Vx(function(){(Oe&6)!==0?me(ye,Ux):Cg()})}function Af(){return ds===0&&(ds=k()),ds}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function Og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Nx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ng((u[En]||null).action),M=o.submitter;M&&(n=(n=M[En]||null)?Ng(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new tl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ds!==0){var I=M?Og(u,M):new FormData(u);Wu(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=M?Og(u,M):new FormData(u),Wu(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Rf=0;Rf<uu.length;Rf++){var wf=uu[Rf],Ox=wf.toLowerCase(),Px=wf[0].toUpperCase()+wf.slice(1);pi(Ox,"on"+Px)}pi(dp,"onAnimationEnd"),pi(pp,"onAnimationIteration"),pi(mp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Jv,"onTransitionRun"),pi($v,"onTransitionStart"),pi(tx,"onTransitionCancel"),pi(gp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ft){Al(ft)}u.currentTarget=null,f=I}else for(M=0;M<o.length;M++){if(A=o[M],I=A.instance,tt=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ft){Al(ft)}u.currentTarget=null,f=I}}}}function _e(e,n){var a=n[Za];a===void 0&&(a=n[Za]=new Set);var o=e+"__bubble";a.has(o)||(Ig(n,e,2,!1),a.add(o))}function Cf(e,n,a){var o=0;n&&(o|=4),Ig(a,e,o,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Hl]){e[Hl]=!0,jo.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||Cf(a,!1,e),Cf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Cf("selectionchange",!1,n))}}function Ig(e,n,a,o){switch(r_(n)){case 2:var u=cy;break;case 8:u=uy;break;default:u=Xf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Ii(A),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){o=f=M;continue t}A=A.parentNode}}o=o.return}kd(function(){var tt=f,ft=Zc(a),_t=[];t:{var it=_p.get(e);if(it!==void 0){var st=tl,ne=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":st=Dv;break;case"focusin":ne="focus",st=eu;break;case"focusout":ne="blur",st=eu;break;case"beforeblur":case"afterblur":st=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Nv;break;case dp:case pp:case mp:st=Sv;break;case gp:st=Pv;break;case"scroll":case"scrollend":st=gv;break;case"wheel":st=zv;break;case"copy":case"cut":case"paste":st=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=jd;break;case"toggle":case"beforetoggle":st=Fv}var $t=(n&4)!==0,Be=!$t&&(e==="scroll"||e==="scrollend"),W=$t?it!==null?it+"Capture":null:it;$t=[];for(var V=tt,$;V!==null;){var pt=V;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||W===null||(pt=Lr(V,W),pt!=null&&$t.push(mo(V,pt,$))),Be)break;V=V.return}0<$t.length&&(it=new st(it,ne,null,a,ft),_t.push({event:it,listeners:$t}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",it&&a!==jc&&(ne=a.relatedTarget||a.fromElement)&&(Ii(ne)||ne[In]))break t;if((st||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,st?(ne=a.relatedTarget||a.toElement,st=tt,ne=ne?Ii(ne):null,ne!==null&&(Be=c(ne),$t=ne.tag,ne!==Be||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(st=null,ne=tt),st!==ne)){if($t=qd,pt="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($t=jd,pt="onPointerLeave",W="onPointerEnter",V="pointer"),Be=st==null?it:Qa(st),$=ne==null?it:Qa(ne),it=new $t(pt,V+"leave",st,a,ft),it.target=Be,it.relatedTarget=$,pt=null,Ii(ft)===tt&&($t=new $t(W,V+"enter",ne,a,ft),$t.target=$,$t.relatedTarget=Be,pt=$t),Be=pt,st&&ne)e:{for($t=st,W=ne,V=0,$=$t;$;$=nr($))V++;for($=0,pt=W;pt;pt=nr(pt))$++;for(;0<V-$;)$t=nr($t),V--;for(;0<$-V;)W=nr(W),$--;for(;V--;){if($t===W||W!==null&&$t===W.alternate)break e;$t=nr($t),W=nr(W)}$t=null}else $t=null;st!==null&&zg(_t,it,st,$t,!1),ne!==null&&Be!==null&&zg(_t,Be,ne,$t,!0)}}t:{if(it=tt?Qa(tt):window,st=it.nodeName&&it.nodeName.toLowerCase(),st==="select"||st==="input"&&it.type==="file")var Ht=np;else if(tp(it))if(ip)Ht=Zv;else{Ht=Yv;var de=qv}else st=it.nodeName,!st||st.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&Yc(tt.elementType)&&(Ht=np):Ht=jv;if(Ht&&(Ht=Ht(e,tt))){ep(_t,Ht,a,ft);break t}de&&de(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&Cn(it,"number",it.value)}switch(de=tt?Qa(tt):window,e){case"focusin":(tp(de)||de.contentEditable==="true")&&(Ls=de,ou=tt,Hr=null);break;case"focusout":Hr=ou=Ls=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,fp(_t,a,ft);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":fp(_t,a,ft)}var Yt;if(iu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Us?Jd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Zd&&a.locale!=="ko"&&(Us||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Us&&(Yt=Xd()):(ma=ft,Jc="value"in ma?ma.value:ma.textContent,Us=!0)),de=Gl(tt,ee),0<de.length&&(ee=new Yd(ee,e,null,a,ft),_t.push({event:ee,listeners:de}),Yt?ee.data=Yt:(Yt=$d(a),Yt!==null&&(ee.data=Yt)))),(Yt=Gv?Vv(e,a):kv(e,a))&&(ee=Gl(tt,"onBeforeInput"),0<ee.length&&(de=new Yd("onBeforeInput","beforeinput",null,a,ft),_t.push({event:de,listeners:ee}),de.data=Yt)),Nx(_t,e,tt,a,ft)}Pg(_t,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lr(e,a),u!=null&&o.unshift(mo(e,u,f)),u=Lr(e,n),u!=null&&o.push(mo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zg(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,u?(tt=Lr(a,f),tt!=null&&M.unshift(mo(a,tt,I))):u||(tt=Lr(a,f),tt!=null&&M.push(mo(a,tt,I)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var zx=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Bx,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function Vl(){}function ze(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ti(e,""+o);break;case"className":Dt(e,"class",o);break;case"tabIndex":Dt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,o);break;case"style":Gd(e,o,f);break;case"data":if(n!=="object"){Dt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Vl);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pv.get(a)||a,bt(e,a,o))}}function Lf(e,n,a,o,u,f){switch(a){case"style":Gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ti(e,o):(typeof o=="number"||typeof o=="bigint")&&Ti(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):bt(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,f,M,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var A=f=M=u=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":M=ft;break;case"checked":I=ft;break;case"defaultChecked":tt=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ze(e,n,o,ft,a,null)}}Ge(e,f,A,I,tt,M,u,!1),Ze(e);return;case"select":_e("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:ze(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":_e("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ze(e,n,M,A,a,null)}Tn(e,o,u,f),Ze(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,I,o,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<po.length;o++)_e(po[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,tt,o,a,null)}return;default:if(Yc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Lf(e,n,ft,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ze(e,n,A,o,a,null))}function Fx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,I=null,tt=null,ft=null;for(st in a){var _t=a[st];if(a.hasOwnProperty(st)&&_t!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=_t;default:o.hasOwnProperty(st)||ze(e,n,st,null,o,_t)}}for(var it in o){var st=o[it];if(_t=a[it],o.hasOwnProperty(it)&&(st!=null||_t!=null))switch(it){case"type":f=st;break;case"name":u=st;break;case"checked":tt=st;break;case"defaultChecked":ft=st;break;case"value":M=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==_t&&ze(e,n,it,st,o,_t)}}Fi(e,M,A,I,tt,ft,f,u);return;case"select":st=M=A=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":st=I;default:o.hasOwnProperty(f)||ze(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==I&&ze(e,n,u,f,o,I)}n=A,a=M,o=st,it!=null?ln(e,!!a,it,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":st=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":it=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ze(e,n,M,u,o,f)}gn(e,it,st);return;case"option":for(var ne in a)if(it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:ze(e,n,ne,null,o,it)}for(I in o)if(it=o[I],st=a[I],o.hasOwnProperty(I)&&it!==st&&(it!=null||st!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:ze(e,n,I,it,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)it=a[$t],a.hasOwnProperty($t)&&it!=null&&!o.hasOwnProperty($t)&&ze(e,n,$t,null,o,it);for(tt in o)if(it=o[tt],st=a[tt],o.hasOwnProperty(tt)&&it!==st&&(it!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:ze(e,n,tt,it,o,st)}return;default:if(Yc(n)){for(var Be in a)it=a[Be],a.hasOwnProperty(Be)&&it!==void 0&&!o.hasOwnProperty(Be)&&Lf(e,n,Be,void 0,o,it);for(ft in o)it=o[ft],st=a[ft],!o.hasOwnProperty(ft)||it===st||it===void 0&&st===void 0||Lf(e,n,ft,it,o,st);return}}for(var W in a)it=a[W],a.hasOwnProperty(W)&&it!=null&&!o.hasOwnProperty(W)&&ze(e,n,W,null,o,it);for(_t in o)it=o[_t],st=a[_t],!o.hasOwnProperty(_t)||it===st||it==null&&st==null||ze(e,n,_t,it,o,st)}var Nf=null,Of=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function Hx(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(kx)}:Vg;function kx(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Xg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&go(M.documentElement),a&2&&go(M.body),a&4)for(a=M.head,go(a),M=a.firstChild;M;){var A=M.nextSibling,I=M.nodeName;M[fa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Ff=null;function Wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var ci=new Map,Yg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=K.d;K.d={f:Yx,r:jx,D:Zx,C:Kx,L:Qx,m:Jx,X:ty,S:$x,M:ey};function Yx(){var e=ta.f(),n=Pl();return e||n}function jx(e){var n=zi(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):ta.r(e)}var ir=typeof document>"u"?null:document;function jg(e,n,a){var o=ir;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Yg.has(u)||(Yg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Zx(e){ta.D(e),jg("dns-prefetch",e,null)}function Kx(e,n){ta.C(e,n),jg("preconnect",e,n)}function Qx(e,n,a){ta.L(e,n,a);var o=ir;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var f=u;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}ci.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(_o(f))||n==="script"&&o.querySelector(vo(f))||(n=o.createElement("link"),Rn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Jx(e,n){ta.m(e,n);var a=ir;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!ci.has(f)&&(e=g({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}o=a.createElement("link"),Rn(o,"link",e),nn(o),a.head.appendChild(o)}}}function $x(e,n,a){ta.S(e,n,a);var o=ir;if(o&&e){var u=da(o).hoistableStyles,f=ar(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(_o(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Hf(e,a);var I=M=o.createElement("link");nn(I),Rn(I,"link",e),I._p=new Promise(function(tt,ft){I.onload=tt,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Wl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function ty(e,n){ta.X(e,n);var a=ir;if(a&&e){var o=da(a).hoistableScripts,u=sr(e),f=o.get(u);f||(f=a.querySelector(vo(u)),f||(e=g({src:e,async:!0},n),(n=ci.get(u))&&Gf(e,n),f=a.createElement("script"),nn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ey(e,n){ta.M(e,n);var a=ir;if(a&&e){var o=da(a).hoistableScripts,u=sr(e),f=o.get(u);f||(f=a.querySelector(vo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&Gf(e,n),f=a.createElement("script"),nn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Zg(e,n,a,o){var u=(u=yt.current)?Xl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=da(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(_o(e)))&&!f._p&&(M.instance=f,M.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||ny(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+Xe(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function ny(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),nn(n),e.head.appendChild(n))}function sr(e){return'[src="'+Xe(e)+'"]'}function vo(e){return"script[async]"+e}function Qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),Rn(o,"style",u),Wl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ar(a.href);var f=e.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=Kg(a),(u=ci.get(u))&&Hf(o,u),f=(e.ownerDocument||e).createElement("link"),nn(f);var M=f;return M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Rn(f,"link",o),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(u=e.querySelector(vo(f)))?(n.instance=u,nn(u),u):(o=a,(u=ci.get(f))&&(o=g({},a),Gf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Wl(o,a.precedence,e));return n.instance}function Wl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function Jg(e,n,a){if(ql===null){var o=new Map,u=ql=new Map;u.set(a,o)}else u=ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[fa]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function $g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xo=null;function ay(){}function sy(e,n,a){if(xo===null)throw Error(s(475));var o=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ar(a.href),f=e.querySelector(_o(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Yl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=Kg(a),(u=ci.get(u))&&Hf(a,u),f=f.createElement("link"),nn(f);var M=f;M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Rn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Yl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function ry(){if(xo===null)throw Error(s(475));var e=xo;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Yl(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function Vf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,n.forEach(oy,e),jl=null,Yl.call(e))}function oy(e,n){if(!(n.state.loading&4)){var a=jl.get(e);if(a)var o=a.get(null);else{a=new Map,jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=Yl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function ly(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function e_(e,n,a,o,u,f,M,A,I,tt,ft,_t){return e=new ly(e,n,a,M,A,I,tt,_t),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Au(f),e}function n_(e){return e?(e=Is,e):Is}function i_(e,n,a,o,u,f){u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(Jn(a,e,n),Zr(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function s_(e){if(e.tag===13){var n=Ps(e,67108864);n!==null&&Jn(n,e,67108864),kf(e,67108864)}}var Zl=!0;function cy(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=2,Xf(e,n,a,o)}finally{K.p=f,P.T=u}}function uy(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=8,Xf(e,n,a,o)}finally{K.p=f,P.T=u}}function Xf(e,n,a,o){if(Zl){var u=Wf(o);if(u===null)Uf(e,n,o,Kl,a),o_(e,o);else if(hy(u,e,n,a,o))o.stopPropagation();else if(o_(e,o),n&4&&-1<fy.indexOf(e)){for(;u!==null;){var f=zi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=jt(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var I=1<<31-Pt(M);A.entanglements[1]|=I,M&=~I}Ci(f),(Oe&6)===0&&(Nl=ue()+500,ho(0))}}break;case 13:A=Ps(f,2),A!==null&&Jn(A,f,2),Pl(),kf(f,2)}if(f=Wf(o),f===null&&Uf(e,n,o,Kl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function Wf(e){return e=Zc(e),qf(e)}var Kl=null;function qf(e){if(Kl=null,e=Ii(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kl=e,null}function r_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ye:return 2;case Kt:return 8;case se:case $e:return 32;case N:return 268435456;default:return 32}default:return 32}}var Yf=!1,La=null,Na=null,Oa=null,So=new Map,Mo=new Map,Pa=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=zi(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function hy(e,n,a,o,u){switch(n){case"focusin":return La=Eo(La,e,n,a,o,u),!0;case"dragenter":return Na=Eo(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Eo(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return So.set(f,Eo(So.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,o,u)),!0}return!1}function l_(e){var n=Ii(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=ie(o);var u=Ps(a,o);u!==null&&Jn(u,a,o),kf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);jc=o,a.target.dispatchEvent(o),jc=null}else return n=zi(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){Ql(e)&&a.delete(n)}function dy(){Yf=!1,La!==null&&Ql(La)&&(La=null),Na!==null&&Ql(Na)&&(Na=null),Oa!==null&&Ql(Oa)&&(Oa=null),So.forEach(c_),Mo.forEach(c_)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dy)))}var $l=null;function u_(e){$l!==e&&($l=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(qf(o||a)===null)continue;break}var f=zi(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function To(e){function n(I){return Jl(I,e)}La!==null&&Jl(La,e),Na!==null&&Jl(Na,e),Oa!==null&&Jl(Oa,e),So.forEach(n),Mo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[En]||null;if(typeof f=="function")M||u_(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[En]||null)A=M.formAction;else if(qf(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),u_(a)}}}function jf(e){this._internalRoot=e}tc.prototype.render=jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();i_(a,o,e,n,null,null)},tc.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),Pl(),n[In]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ae();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&l_(e)}};var f_=t.version;if(f_!=="19.1.0")throw Error(s(527,f_,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var py={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{dt=ec.inject(py),gt=ec}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Rm,f=wm,M=Cm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=e_(e,1,!1,null,null,a,o,u,f,M,A,null),e[In]=n.current,Df(e),new jf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Rm,M=wm,A=Cm,I=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=e_(e,1,!0,n,a??null,o,u,f,M,A,I,tt),n.context=n_(null),a=n.current,o=Qn(),o=ie(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,zt(n,a),Ci(n),e[In]=n.current,Df(e),new tc(n)},Ao.version="19.1.0",Ao}var S_;function Ty(){if(S_)return Qf.exports;S_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qf.exports=Ey(),Qf.exports}var by=Ty();const I0="/litecomposer/assets/logo%20icon-tnJ8l0nw.png";function Ay({handleTabClick:r}){const[t,i]=Le.useState(!1);function s(l){i(c=>!c),r(l)}return St.jsxs(St.Fragment,{children:[St.jsxs("div",{className:" flex flex-row items-center justify-between h-10 md:hidden w-full p-4",children:[St.jsx("img",{src:I0,alt:"",className:"m-0"}),St.jsx("span",{onClick:()=>i(l=>!l),children:"☰"})]}),St.jsxs("div",{className:t?"fixed top-0 bg-[#1c1c1c] w-full h-screen z-50 flex flex-col justify-center items-center text-white gap-[40px] text-3xl":"hidden",children:[St.jsx("span",{className:"text-white absolute right-5 top-5",onClick:()=>i(l=>!l),children:"×"}),St.jsx("span",{onClick:s,"data-name":"type",children:"Type"}),St.jsx("span",{onClick:s,"data-name":"detail",children:"Finish & Material"}),St.jsx("span",{onClick:s,"data-name":"composition",children:"Constructor"})]})]})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),M_=r=>{const t=wy(r);return t.charAt(0).toUpperCase()+t.slice(1)},z0=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),Cy=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=Le.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>Le.createElement("svg",{ref:m,...Dy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:z0("lucide",l),...!c&&!Cy(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,g])=>Le.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=(r,t)=>{const i=Le.forwardRef(({className:s,...l},c)=>Le.createElement(Uy,{ref:c,iconNode:t,className:z0(`lucide-${Ry(M_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=M_(r),i};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Ny=kc("box",Ly);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Py=kc("lightbulb",Oy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],zy=kc("list-todo",Iy);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fy=kc("x",By);function Hy({handleTabClick:r,btnClicked:t}){return St.jsxs("div",{className:"hidden md:flex sidebar-container bg-white",children:[St.jsx("img",{className:"margin-auto",src:I0,alt:"icon"}),St.jsxs("div",{className:"flex flex-col h-[50vh] justify-center gap-10",children:[St.jsx("div",{className:"bg-red",onClick:()=>r("type"),children:St.jsx(Py,{className:`min-w-7 min-h-9 py-1 ${t==="type"?"active":void 0} transition-all duration-500 ease-in-out`,strokeWidth:1})}),St.jsx("div",{className:"bg-red",onClick:()=>r("detail"),children:St.jsx(zy,{className:`min-w-7 min-h-9 pb-1 ${t==="detail"?"active":void 0} transition-all duration-500 ease-in-out`,strokeWidth:1})}),St.jsx("div",{className:"bg-red",onClick:()=>r("composition"),children:St.jsx(Ny,{className:`min-w-7 min-h-9 pb-1 ${t==="composition"?"active":void 0} transition-all duration-500 ease-in-out`,strokeWidth:1})})]})]})}const Gy="_wrapper_1xxes_5",Vy="_panel_1xxes_19",ky="_inputsDiv_1xxes_83",Xy="_inactive_1xxes_151",nc={wrapper:Gy,panel:Vy,inputsDiv:ky,inactive:Xy};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="177",Mr={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wy=0,E_=1,qy=2,B0=1,Yy=2,oa=3,Ya=0,kn=1,Ui=2,Wa=0,Er=1,T_=2,b_=3,A_=4,jy=5,Ss=100,Zy=101,Ky=102,Qy=103,Jy=104,$y=200,tS=201,eS=202,nS=203,Ih=204,zh=205,iS=206,aS=207,sS=208,rS=209,oS=210,lS=211,cS=212,uS=213,fS=214,Bh=0,Fh=1,Hh=2,Ar=3,Gh=4,Vh=5,kh=6,Xh=7,Ad=0,hS=1,dS=2,qa=0,pS=1,mS=2,gS=3,_S=4,vS=5,xS=6,yS=7,F0=300,Rr=301,wr=302,Wh=303,qh=304,Xc=306,Yh=1e3,Es=1001,jh=1002,Mi=1003,SS=1004,ic=1005,Li=1006,eh=1007,Ts=1008,Oi=1009,H0=1010,G0=1011,Io=1012,Rd=1013,bs=1014,la=1015,Ho=1016,wd=1017,Cd=1018,zo=1020,V0=35902,k0=1021,X0=1022,Si=1023,Bo=1026,Fo=1027,W0=1028,Dd=1029,q0=1030,Ud=1031,Ld=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,Oc=36492,gd=36494,_d=36495,Y0=36283,vd=36284,xd=36285,yd=36286,MS=3200,ES=3201,Nd=0,TS=1,Xa="",ei="srgb",Cr="srgb-linear",Bc="linear",Fe="srgb",rr=7680,R_=519,bS=512,AS=513,RS=514,j0=515,wS=516,CS=517,DS=518,US=519,w_=35044,C_="300 es",ca=2e3,Fc=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Sd=180/Math.PI;function Go(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function LS(r,t){return(r%t+t)%t}function nh(r,t,i){return(1-i)*r+i*t}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const NS={DEG2RAD:Pc};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=c[d+0],S=c[d+1],T=c[d+2],E=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=x,t[i+1]=S,t[i+2]=T,t[i+3]=E;return}if(_!==E||m!==x||p!==S||g!==T){let y=1-h;const v=m*x+p*S+g*T+_*E,O=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const H=Math.sqrt(L),z=Math.atan2(H,v*O);y=Math.sin(y*z)/H,h=Math.sin(h*z)/H}const C=h*O;if(m=m*y+x*C,p=p*y+S*C,g=g*y+T*C,_=_*y+E*C,y===1-h){const H=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=H,p*=H,g*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[d],x=c[d+1],S=c[d+2],T=c[d+3];return t[i]=h*T+g*_+m*S-p*x,t[i+1]=m*T+g*x+p*_-h*S,t[i+2]=p*T+g*S+h*x-m*_,t[i+3]=g*T-h*_-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),x=m(s/2),S=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=x*g*_+p*S*T,this._y=p*S*_-x*g*T,this._z=p*g*T+x*S*_,this._w=p*g*_-x*S*T;break;case"YXZ":this._x=x*g*_+p*S*T,this._y=p*S*_-x*g*T,this._z=p*g*T-x*S*_,this._w=p*g*_+x*S*T;break;case"ZXY":this._x=x*g*_-p*S*T,this._y=p*S*_+x*g*T,this._z=p*g*T+x*S*_,this._w=p*g*_-x*S*T;break;case"ZYX":this._x=x*g*_-p*S*T,this._y=p*S*_+x*g*T,this._z=p*g*T-x*S*_,this._w=p*g*_+x*S*T;break;case"YZX":this._x=x*g*_+p*S*T,this._y=p*S*_+x*g*T,this._z=p*g*T-x*S*_,this._w=p*g*_-x*S*T;break;case"XZY":this._x=x*g*_-p*S*T,this._y=p*S*_-x*g*T,this._z=p*g*T+x*S*_,this._w=p*g*_+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>_){const S=2*Math.sqrt(1+s-h-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-s-_);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-i;return this._w=S*d+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),g=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+m*p+d*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new Q,D_=new As;class le{constructor(t,i,s,l,c,d,h,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],S=s[5],T=s[8],E=l[0],y=l[3],v=l[6],O=l[1],L=l[4],C=l[7],H=l[2],z=l[5],B=l[8];return c[0]=d*E+h*O+m*H,c[3]=d*y+h*L+m*z,c[6]=d*v+h*C+m*B,c[1]=p*E+g*O+_*H,c[4]=p*y+g*L+_*z,c[7]=p*v+g*C+_*B,c[2]=x*E+S*O+T*H,c[5]=x*y+S*L+T*z,c[8]=x*v+S*C+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*d-h*p,x=h*m-g*c,S=p*c-d*m,T=i*_+s*x+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=_*E,t[1]=(l*p-g*s)*E,t[2]=(h*s-l*d)*E,t[3]=x*E,t[4]=(g*i-l*m)*E,t[5]=(l*c-h*i)*E,t[6]=S*E,t[7]=(s*m-p*i)*E,t[8]=(d*i-s*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ah.makeScale(t,i)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new le;function Z0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Hc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function OS(){const r=Hc("canvas");return r.style.display="block",r}const U_={};function Tr(r){r in U_||(U_[r]=!0,console.warn(r))}function PS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function IS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const L_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Fe&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(l.r=br(l.r),l.g=br(l.g),l.b=br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const we=BS();function ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class FS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Hc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ua(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let HS=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Go(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(sh(l[d].image)):c.push(sh(l[d]))}else c=sh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;const rh=new Q;class Xn extends ws{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Es,l=Es,c=Li,d=Ts,h=Si,m=Oi,p=Xn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Go(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=F0;Xn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,i=0,s=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],S=m[5],T=m[9],E=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(S+1)/2,H=(v+1)/2,z=(g+x)/4,B=(_+E)/4,X=(T+y)/4;return L>C&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=B/s):C>H?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=z/l,c=X/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=B/c,l=X/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-T)*(y-T)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(_-E)/O,this.z=(x-g)/O,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends ws{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends VS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class K0 extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kS extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,_i):_i.fromBufferAttribute(c,d),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),sc.subVectors(this.max,wo),lr.subVectors(t.a,wo),cr.subVectors(t.b,wo),ur.subVectors(t.c,wo),za.subVectors(cr,lr),Ba.subVectors(ur,cr),ps.subVectors(lr,ur);let i=[0,-za.z,za.y,0,-Ba.z,Ba.y,0,-ps.z,ps.y,za.z,0,-za.x,Ba.z,0,-Ba.x,ps.z,0,-ps.x,-za.y,za.x,0,-Ba.y,Ba.x,0,-ps.y,ps.x,0];return!oh(i,lr,cr,ur,sc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,lr,cr,ur,sc))?!1:(rc.crossVectors(za,Ba),i=[rc.x,rc.y,rc.z],oh(i,lr,cr,ur,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],_i=new Q,ac=new Vo,lr=new Q,cr=new Q,ur=new Q,za=new Q,Ba=new Q,ps=new Q,wo=new Q,sc=new Q,rc=new Q,ms=new Q;function oh(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ms.fromArray(r,c);const h=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),g=s.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const XS=new Vo,Co=new Q,lh=new Q;class ko{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):XS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(lh)),this.expandByPoint(Co.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new Q,ch=new Q,oc=new Q,Fa=new Q,uh=new Q,lc=new Q,fh=new Q;class Wc{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ch.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(ch);const c=t.distanceTo(i)*.5,d=-this.direction.dot(oc),h=Fa.dot(this.direction),m=-Fa.dot(oc),p=Fa.lengthSq(),g=Math.abs(1-d*d);let _,x,S,T;if(g>0)if(_=d*m-h,x=d*h-m,T=c*g,_>=0)if(x>=-T)if(x<=T){const E=1/g;_*=E,x*=E,S=_*(_+d*x+2*h)+x*(d*_+x+2*m)+p}else x=c,_=Math.max(0,-(d*x+h)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(d*x+h)),S=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-d*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(d*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=d>0?-c:c,_=Math.max(0,-(d*x+h)),S=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ch).addScaledVector(oc,x),S}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,c){uh.subVectors(i,t),lc.subVectors(s,t),fh.crossVectors(uh,lc);let d=this.direction.dot(fh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Fa.subVectors(this.origin,t);const m=h*this.direction.dot(lc.crossVectors(Fa,lc));if(m<0)return null;const p=h*this.direction.dot(uh.cross(Fa));if(p<0||m+p>d)return null;const g=-h*Fa.dot(fh);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,s,l,c,d,h,m,p,g,_,x,S,T,E,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,g,_,x,S,T,E,y)}set(t,i,s,l,c,d,h,m,p,g,_,x,S,T,E,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=T,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),d=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=d*g,S=d*_,T=h*g,E=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+T*p,i[5]=x-E*p,i[9]=-h*m,i[2]=E-x*p,i[6]=T+S*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,S=m*_,T=p*g,E=p*_;i[0]=x+E*h,i[4]=T*h-S,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=S*h-T,i[6]=E+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,S=m*_,T=p*g,E=p*_;i[0]=x-E*h,i[4]=-d*_,i[8]=T+S*h,i[1]=S+T*h,i[5]=d*g,i[9]=E-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,S=d*_,T=h*g,E=h*_;i[0]=m*g,i[4]=T*p-S,i[8]=x*p+E,i[1]=m*_,i[5]=E*p+x,i[9]=S*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,S=d*p,T=h*m,E=h*p;i[0]=m*g,i[4]=E-x*_,i[8]=T*_+S,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*_+T,i[10]=x-E*_}else if(t.order==="XZY"){const x=d*m,S=d*p,T=h*m,E=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+E,i[5]=d*g,i[9]=S*_-T,i[2]=T*_-S,i[6]=h*g,i[10]=E*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WS,t,qS)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ha.crossVectors(s,$n),Ha.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ha.crossVectors(s,$n)),Ha.normalize(),cc.crossVectors($n,Ha),l[0]=Ha.x,l[4]=cc.x,l[8]=$n.x,l[1]=Ha.y,l[5]=cc.y,l[9]=$n.y,l[2]=Ha.z,l[6]=cc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],S=s[13],T=s[2],E=s[6],y=s[10],v=s[14],O=s[3],L=s[7],C=s[11],H=s[15],z=l[0],B=l[4],X=l[8],D=l[12],w=l[1],G=l[5],at=l[9],J=l[13],lt=l[2],ut=l[6],P=l[10],K=l[14],q=l[3],Mt=l[7],U=l[11],et=l[15];return c[0]=d*z+h*w+m*lt+p*q,c[4]=d*B+h*G+m*ut+p*Mt,c[8]=d*X+h*at+m*P+p*U,c[12]=d*D+h*J+m*K+p*et,c[1]=g*z+_*w+x*lt+S*q,c[5]=g*B+_*G+x*ut+S*Mt,c[9]=g*X+_*at+x*P+S*U,c[13]=g*D+_*J+x*K+S*et,c[2]=T*z+E*w+y*lt+v*q,c[6]=T*B+E*G+y*ut+v*Mt,c[10]=T*X+E*at+y*P+v*U,c[14]=T*D+E*J+y*K+v*et,c[3]=O*z+L*w+C*lt+H*q,c[7]=O*B+L*G+C*ut+H*Mt,c[11]=O*X+L*at+C*P+H*U,c[15]=O*D+L*J+C*K+H*et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],S=t[14],T=t[3],E=t[7],y=t[11],v=t[15];return T*(+c*m*_-l*p*_-c*h*x+s*p*x+l*h*S-s*m*S)+E*(+i*m*S-i*p*x+c*d*x-l*d*S+l*p*g-c*m*g)+y*(+i*p*_-i*h*S-c*d*_+s*d*S+c*h*g-s*p*g)+v*(-l*h*g-i*m*_+i*h*x+l*d*_-s*d*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],S=t[11],T=t[12],E=t[13],y=t[14],v=t[15],O=_*y*p-E*x*p+E*m*S-h*y*S-_*m*v+h*x*v,L=T*x*p-g*y*p-T*m*S+d*y*S+g*m*v-d*x*v,C=g*E*p-T*_*p+T*h*S-d*E*S-g*h*v+d*_*v,H=T*_*m-g*E*m-T*h*x+d*E*x+g*h*y-d*_*y,z=i*O+s*L+l*C+c*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=O*B,t[1]=(E*x*c-_*y*c-E*l*S+s*y*S+_*l*v-s*x*v)*B,t[2]=(h*y*c-E*m*c+E*l*p-s*y*p-h*l*v+s*m*v)*B,t[3]=(_*m*c-h*x*c-_*l*p+s*x*p+h*l*S-s*m*S)*B,t[4]=L*B,t[5]=(g*y*c-T*x*c+T*l*S-i*y*S-g*l*v+i*x*v)*B,t[6]=(T*m*c-d*y*c-T*l*p+i*y*p+d*l*v-i*m*v)*B,t[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*S+i*m*S)*B,t[8]=C*B,t[9]=(T*_*c-g*E*c-T*s*S+i*E*S+g*s*v-i*_*v)*B,t[10]=(d*E*c-T*h*c+T*s*p-i*E*p-d*s*v+i*h*v)*B,t[11]=(g*h*c-d*_*c-g*s*p+i*_*p+d*s*S-i*h*S)*B,t[12]=H*B,t[13]=(g*E*l-T*_*l+T*s*x-i*E*x-g*s*y+i*_*y)*B,t[14]=(T*h*l-d*E*l-T*s*m+i*E*m+d*s*y-i*h*y)*B,t[15]=(d*_*l-g*h*l+g*s*m-i*_*m-d*s*x+i*h*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,_=h+h,x=c*p,S=c*g,T=c*_,E=d*g,y=d*_,v=h*_,O=m*p,L=m*g,C=m*_,H=s.x,z=s.y,B=s.z;return l[0]=(1-(E+v))*H,l[1]=(S+C)*H,l[2]=(T-L)*H,l[3]=0,l[4]=(S-C)*z,l[5]=(1-(x+v))*z,l[6]=(y+O)*z,l[7]=0,l[8]=(T+L)*B,l[9]=(y-O)*B,l[10]=(1-(x+E))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const d=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/c,g=1/d,_=1/h;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=ca){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),x=(s+l)/(s-l);let S,T;if(h===ca)S=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Fc)S=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=ca){const m=this.elements,p=1/(i-t),g=1/(s-l),_=1/(d-c),x=(i+t)*p,S=(s+l)*g;let T,E;if(h===ca)T=(d+c)*_,E=-2*_;else if(h===Fc)T=c*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=E,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new Q,vi=new Ye,WS=new Q(0,0,0),qS=new Q(1,1,1),Ha=new Q,cc=new Q,$n=new Q,O_=new Ye,P_=new As;class Ei{constructor(t=0,i=0,s=0,l=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Q0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let YS=0;const I_=new Q,hr=new As,ia=new Ye,uc=new Q,Do=new Q,jS=new Q,ZS=new As,z_=new Q(1,0,0),B_=new Q(0,1,0),F_=new Q(0,0,1),H_={type:"added"},KS={type:"removed"},dr={type:"childadded",child:null},hh={type:"childremoved",child:null};class Mn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new Q,i=new Ei,s=new As,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new le}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(B_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(B_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?uc.copy(t):uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Do,uc,this.up):ia.lookAt(uc,Do,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(ia),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(KS),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,jS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,ZS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),_=d(t.shapes),x=d(t.skeletons),S=d(t.animations),T=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new Q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Q,aa=new Q,dh=new Q,sa=new Q,pr=new Q,mr=new Q,G_=new Q,ph=new Q,mh=new Q,gh=new Q,_h=new Je,vh=new Je,xh=new Je;class yi{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){xi.subVectors(l,i),aa.subVectors(s,i),dh.subVectors(t,i);const d=xi.dot(xi),h=xi.dot(aa),m=xi.dot(dh),p=aa.dot(aa),g=aa.dot(dh),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-h*g)*x,T=(d*g-h*m)*x;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(d,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,s),xh.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(_h,c.x),d.addScaledVector(vh,c.y),d.addScaledVector(xh,c.z),d}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),aa.subVectors(t,i),xi.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),xi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;pr.subVectors(l,s),mr.subVectors(c,s),ph.subVectors(t,s);const m=pr.dot(ph),p=mr.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(t,l);const g=pr.dot(mh),_=mr.dot(mh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(pr,d);gh.subVectors(t,c);const S=pr.dot(gh),T=mr.dot(gh);if(T>=0&&S<=T)return i.copy(c);const E=S*p-m*T;if(E<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(mr,h);const y=g*T-S*_;if(y<=0&&_-g>=0&&S-T>=0)return G_.subVectors(c,l),h=(_-g)/(_-g+(S-T)),i.copy(l).addScaledVector(G_,h);const v=1/(y+E+x);return d=E*v,h=x*v,i.copy(s).addScaledVector(pr,d).addScaledVector(mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},fc={h:0,s:0,l:0};function yh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=LS(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=yh(d,c,t+1/3),this.g=yh(d,c,t),this.b=yh(d,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=J0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return we.workingToColorSpace(Nn.copy(this),t),Math.round(ve(Nn.r*255,0,255))*65536+Math.round(ve(Nn.g*255,0,255))*256+Math.round(ve(Nn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=g<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ei){we.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(fc);const s=nh(Ga.h,fc.h,i),l=nh(Ga.s,fc.s,i),c=nh(Ga.l,fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new pe;pe.NAMES=J0;let QS=0;class Pi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=Er,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=zh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ih&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $0 extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new Q,hc=new re;let JS=0;class Ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=w_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w_&&(t.usage=this.usage),t}}class tv extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ev extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Sn extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}let $S=0;const ui=new Ye,Sh=new Mn,gr=new Q,ti=new Vo,Uo=new Vo,yn=new Q;class di extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Z0(t)?ev:tv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,s){return ui.makeTranslation(t,i,s),this.applyMatrix4(ui),this}scale(t,i,s){return ui.makeScale(t,i,s),this.applyMatrix4(ui),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Uo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ti.min,Uo.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Uo.max),ti.expandByPoint(yn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)yn.fromBufferAttribute(h,p),m&&(gr.fromBufferAttribute(t,p),yn.add(gr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<s.count;X++)h[X]=new Q,m[X]=new Q;const p=new Q,g=new Q,_=new Q,x=new re,S=new re,T=new re,E=new Q,y=new Q;function v(X,D,w){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,D),T.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(x),T.sub(x);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(E.copy(g).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(G),h[X].add(E),h[D].add(E),h[w].add(E),m[X].add(y),m[D].add(y),m[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,D=O.length;X<D;++X){const w=O[X],G=w.start,at=w.count;for(let J=G,lt=G+at;J<lt;J+=3)v(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new Q,C=new Q,H=new Q,z=new Q;function B(X){H.fromBufferAttribute(l,X),z.copy(H);const D=h[X];L.copy(D),L.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(z,D);const G=C.dot(m[X])<0?-1:1;d.setXYZW(X,L.x,L.y,L.z,G)}for(let X=0,D=O.length;X<D;++X){const w=O[X],G=w.start,at=w.count;for(let J=G,lt=G+at;J<lt;J+=3)B(t.getX(J+0)),B(t.getX(J+1)),B(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new Q,c=new Q,d=new Q,h=new Q,m=new Q,p=new Q,g=new Q,_=new Q;if(t)for(let x=0,S=t.count;x<S;x+=3){const T=t.getX(x+0),E=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,E),p.fromBufferAttribute(s,y),h.add(g),m.add(g),p.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(E,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let S=0,T=0;for(let E=0,y=m.length;E<y;E++){h.isInterleavedBufferAttribute?S=m[E]*h.data.stride+h.offset:S=m[E]*g;for(let v=0;v<g;v++)x[T++]=p[S++]}return new Ni(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=t(x,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Ye,gs=new Wc,dc=new ko,k_=new Q,pc=new Q,mc=new Q,gc=new Q,Mh=new Q,_c=new Q,X_=new Q,vc=new Q;class ni extends Mn{constructor(t=new di,i=new $0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){_c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Mh.fromBufferAttribute(_,t),d?_c.addScaledVector(Mh,g):_c.addScaledVector(Mh.sub(i),g))}i.add(_c)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(dc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(dc,k_)===null||gs.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(c).invert(),gs.copy(t.ray).applyMatrix4(V_),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,E=x.length;T<E;T++){const y=x[T],v=d[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,H=L;C<H;C+=3){const z=h.getX(C),B=h.getX(C+1),X=h.getX(C+2);l=xc(this,v,t,s,p,g,_,z,B,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=T,v=E;y<v;y+=3){const O=h.getX(y),L=h.getX(y+1),C=h.getX(y+2);l=xc(this,d,t,s,p,g,_,O,L,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,E=x.length;T<E;T++){const y=x[T],v=d[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,H=L;C<H;C+=3){const z=C,B=C+1,X=C+2;l=xc(this,v,t,s,p,g,_,z,B,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),E=Math.min(m.count,S.start+S.count);for(let y=T,v=E;y<v;y+=3){const O=y,L=y+1,C=y+2;l=xc(this,d,t,s,p,g,_,O,L,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function tM(r,t,i,s,l,c,d,h){let m;if(t.side===kn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===Ya,h),m===null)return null;vc.copy(h),vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:r}}function xc(r,t,i,s,l,c,d,h,m,p){r.getVertexPosition(h,pc),r.getVertexPosition(m,mc),r.getVertexPosition(p,gc);const g=tM(r,t,i,s,pc,mc,gc,X_);if(g){const _=new Q;yi.getBarycoord(X_,pc,mc,gc,_),l&&(g.uv=yi.getInterpolatedAttribute(l,h,m,p,_,new re)),c&&(g.uv1=yi.getInterpolatedAttribute(c,h,m,p,_,new re)),d&&(g.normal=yi.getInterpolatedAttribute(d,h,m,p,_,new Q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Q,materialIndex:0};yi.getNormal(pc,mc,gc,x.normal),g.face=x,g.barycoord=_}return g}class Xo extends di{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],_=[];let x=0,S=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(_,2));function T(E,y,v,O,L,C,H,z,B,X,D){const w=C/B,G=H/X,at=C/2,J=H/2,lt=z/2,ut=B+1,P=X+1;let K=0,q=0;const Mt=new Q;for(let U=0;U<P;U++){const et=U*G-J;for(let xt=0;xt<ut;xt++){const mt=xt*w-at;Mt[E]=mt*O,Mt[y]=et*L,Mt[v]=lt,p.push(Mt.x,Mt.y,Mt.z),Mt[E]=0,Mt[y]=0,Mt[v]=z>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(xt/B),_.push(1-U/X),K+=1}}for(let U=0;U<X;U++)for(let et=0;et<B;et++){const xt=x+et+ut*U,mt=x+et+ut*(U+1),Y=x+(et+1)+ut*(U+1),ht=x+(et+1)+ut*U;m.push(xt,mt,ht),m.push(mt,Y,ht),q+=6}h.addGroup(S,q,D),S+=q,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function eM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function nv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const nM={clone:Dr,merge:Pn};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=eM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class iv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ca}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new Q,W_=new re,q_=new re;class hi extends iv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Pc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class sM extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(_r,vr,t,i);l.layers=this.layers,this.add(l);const c=new hi(_r,vr,t,i);c.layers=this.layers,this.add(c);const d=new hi(_r,vr,t,i);d.layers=this.layers,this.add(d);const h=new hi(_r,vr,t,i);h.layers=this.layers,this.add(h);const m=new hi(_r,vr,t,i);m.layers=this.layers,this.add(m);const p=new hi(_r,vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=E,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class av extends Xn{constructor(t=[],i=Rr,s,l,c,d,h,m,p,g){super(t,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rM extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Xo(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Wa});c.uniforms.tEquirect.value=i;const d=new ni(l,c),h=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Li),new sM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class No extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oM={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const E of t.hand.values()){const y=i.getJointPose(E,s),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new No;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class lM extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Th=new Q,cM=new Q,uM=new le;class ka{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Th.subVectors(s,i).cross(cM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||uM.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new ko,yc=new Q;class Pd{constructor(t=new ka,i=new ka,s=new ka,l=new ka,c=new ka,d=new ka){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ca){const s=this.planes,l=t.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],_=l[6],x=l[7],S=l[8],T=l[9],E=l[10],y=l[11],v=l[12],O=l[13],L=l[14],C=l[15];if(s[0].setComponents(m-c,x-p,y-S,C-v).normalize(),s[1].setComponents(m+c,x+p,y+S,C+v).normalize(),s[2].setComponents(m+d,x+g,y+T,C+O).normalize(),s[3].setComponents(m-d,x-g,y-T,C-O).normalize(),s[4].setComponents(m-h,x-_,y-E,C-L).normalize(),i===ca)s[5].setComponents(m+h,x+_,y+E,C+L).normalize();else if(i===Fc)s[5].setComponents(h,_,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ic extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new Q,Vc=new Q,Y_=new Ye,Lo=new Wc,Sc=new ko,bh=new Q,j_=new Q;class fM extends Mn{constructor(t=new di,i=new Ic){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Sn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=c,t.ray.intersectsSphere(Sc)===!1)return;Y_.copy(l).invert(),Lo.copy(t.ray).applyMatrix4(Y_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const S=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let E=S,y=T-1;E<y;E+=p){const v=g.getX(E),O=g.getX(E+1),L=Mc(this,t,Lo,m,v,O,E);L&&i.push(L)}if(this.isLineLoop){const E=g.getX(T-1),y=g.getX(S),v=Mc(this,t,Lo,m,E,y,T-1);v&&i.push(v)}}else{const S=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let E=S,y=T-1;E<y;E+=p){const v=Mc(this,t,Lo,m,E,E+1,E);v&&i.push(v)}if(this.isLineLoop){const E=Mc(this,t,Lo,m,T-1,S,T-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Mc(r,t,i,s,l,c,d){const h=r.geometry.attributes.position;if(Gc.fromBufferAttribute(h,l),Vc.fromBufferAttribute(h,c),i.distanceSqToSegment(Gc,Vc,bh,j_)>s)return;bh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(bh);if(!(p<t.near||p>t.far))return{distance:p,point:j_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const Z_=new Q,K_=new Q;class Q_ extends fM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Z_.fromBufferAttribute(i,l),K_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Z_.distanceTo(K_);t.setAttribute("lineDistance",new Sn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const J_=new Ye,Md=new Wc,Ec=new ko,Tc=new Q;class Ah extends Mn{constructor(t=new di,i=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=c,t.ray.intersectsSphere(Ec)===!1)return;J_.copy(l).invert(),Md.copy(t.ray).applyMatrix4(J_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let T=x,E=S;T<E;T++){const y=p.getX(T);Tc.fromBufferAttribute(_,y),$_(Tc,y,m,l,t,i,this)}}else{const x=Math.max(0,d.start),S=Math.min(_.count,d.start+d.count);for(let T=x,E=S;T<E;T++)Tc.fromBufferAttribute(_,T),$_(Tc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function $_(r,t,i,s,l,c,d){const h=Md.distanceSqToPoint(r);if(h<i){const m=new Q;Md.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class sv extends Xn{constructor(t,i,s=bs,l,c,d,h=Mi,m=Mi,p,g=Bo,_=1){if(g!==Bo&&g!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Id extends di{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],S=[];let T=0;const E=[],y=s/2;let v=0;O(),d===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(S,2));function O(){const C=new Q,H=new Q;let z=0;const B=(i-t)/s;for(let X=0;X<=c;X++){const D=[],w=X/c,G=w*(i-t)+t;for(let at=0;at<=l;at++){const J=at/l,lt=J*m+h,ut=Math.sin(lt),P=Math.cos(lt);H.x=G*ut,H.y=-w*s+y,H.z=G*P,_.push(H.x,H.y,H.z),C.set(ut,B,P).normalize(),x.push(C.x,C.y,C.z),S.push(J,1-w),D.push(T++)}E.push(D)}for(let X=0;X<l;X++)for(let D=0;D<c;D++){const w=E[D][X],G=E[D+1][X],at=E[D+1][X+1],J=E[D][X+1];(t>0||D!==0)&&(g.push(w,G,J),z+=3),(i>0||D!==c-1)&&(g.push(G,at,J),z+=3)}p.addGroup(v,z,0),v+=z}function L(C){const H=T,z=new re,B=new Q;let X=0;const D=C===!0?t:i,w=C===!0?1:-1;for(let at=1;at<=l;at++)_.push(0,y*w,0),x.push(0,w,0),S.push(.5,.5),T++;const G=T;for(let at=0;at<=l;at++){const lt=at/l*m+h,ut=Math.cos(lt),P=Math.sin(lt);B.x=D*P,B.y=y*w,B.z=D*ut,_.push(B.x,B.y,B.z),x.push(0,w,0),z.x=ut*.5+.5,z.y=P*.5*w+.5,S.push(z.x,z.y),T++}for(let at=0;at<l;at++){const J=H+at,lt=G+at;C===!0?g.push(lt,lt+1,J):g.push(lt+1,lt,J),X+=3}p.addGroup(v,X,C===!0?1:2),v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Id(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends di{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,x=i/m,S=[],T=[],E=[],y=[];for(let v=0;v<g;v++){const O=v*x-d;for(let L=0;L<p;L++){const C=L*_-c;T.push(C,-O,0),E.push(0,0,1),y.push(L/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const L=O+p*v,C=O+p*(v+1),H=O+1+p*(v+1),z=O+1+p*v;S.push(L,C,z),S.push(C,H,z)}this.setIndex(S),this.setAttribute("position",new Sn(T,3)),this.setAttribute("normal",new Sn(E,3)),this.setAttribute("uv",new Sn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.widthSegments,t.heightSegments)}}class t0 extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hM extends Pi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dM extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pM extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mM{constructor(t,i,s){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,d,h),c=!0},this.itemEnd=function(g){d++,l.onProgress!==void 0&&l.onProgress(g,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],T=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null}}}const gM=new mM;class zd{constructor(t){this.manager=t!==void 0?t:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zd.DEFAULT_MATERIAL_NAME="__DEFAULT";const ra={};class _M extends Error{constructor(t,i){super(t),this.response=i}}class vM extends zd{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=e0.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ra[t]!==void 0){ra[t].push({onLoad:i,onProgress:s,onError:l});return}ra[t]=[],ra[t].push({onLoad:i,onProgress:s,onError:l});const d=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,m=this.responseType;fetch(d).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=ra[t],_=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=x?parseInt(x):0,T=S!==0;let E=0;const y=new ReadableStream({start(v){O();function O(){_.read().then(({done:L,value:C})=>{if(L)v.close();else{E+=C.byteLength;const H=new ProgressEvent("progress",{lengthComputable:T,loaded:E,total:S});for(let z=0,B=g.length;z<B;z++){const X=g[z];X.onProgress&&X.onProgress(H)}v.enqueue(C),O()}},L=>{v.error(L)})}}});return new Response(y)}else throw new _M(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),x=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(x);return p.arrayBuffer().then(T=>S.decode(T))}}}).then(p=>{e0.add(t,p);const g=ra[t];delete ra[t];for(let _=0,x=g.length;_<x;_++){const S=g[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=ra[t];if(g===void 0)throw this.manager.itemError(t),p;delete ra[t];for(let _=0,x=g.length;_<x;_++){const S=g[_];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class rv extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Rh=new Ye,n0=new Q,i0=new Q;class xM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;n0.setFromMatrixPosition(t.matrixWorld),i.position.copy(n0),i0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(i0),i.updateMatrixWorld(),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ov extends iv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yM extends xM{constructor(){super(new ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SM extends rv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new yM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MM extends rv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class EM extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class a0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TM extends ws{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function s0(r,t,i,s){const l=bM(s);switch(i){case k0:return r*t;case W0:return r*t/l.components*l.byteLength;case Dd:return r*t/l.components*l.byteLength;case q0:return r*t*2/l.components*l.byteLength;case Ud:return r*t*2/l.components*l.byteLength;case X0:return r*t*3/l.components*l.byteLength;case Si:return r*t*4/l.components*l.byteLength;case Ld:return r*t*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(r,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(r,8)*Math.max(t,8)/2;case $h:case td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Oc:case gd:case _d:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Y0:case vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xd:case yd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(r){switch(r){case Oi:case H0:return{byteLength:1,components:1};case Io:case G0:case Ho:return{byteLength:2,components:1};case wd:case Cd:return{byteLength:2,components:4};case bs:case Rd:case la:return{byteLength:4,components:1};case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lv(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function AM(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<_.length;S++){const T=_[x],E=_[S];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++x,_[x]=E)}_.length=x+1;for(let S=0,T=_.length;S<T;S++){const E=_[S];r.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
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
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,GM=`#ifdef USE_BUMPMAP
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KM=`#define PI 3.141592653589793
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
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JM=`vec3 transformedNormal = objectNormal;
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
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
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
#endif`,bE=`struct PhysicalMaterial {
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
}`,AE=`
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IE=`#if defined( USE_POINTS_UV )
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
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fT=`float getShadowMask() {
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
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,ST=`#ifdef USE_TRANSMISSION
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
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
}`,NT=`#if DEPTH_PACKING == 3200
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
}`,OT=`#define DISTANCE
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
}`,PT=`#define DISTANCE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
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
}`,FT=`uniform vec3 diffuse;
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
}`,HT=`#include <common>
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#define LAMBERT
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
}`,kT=`#define LAMBERT
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
}`,XT=`#define MATCAP
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
}`,WT=`#define MATCAP
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
}`,qT=`#define NORMAL
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
}`,YT=`#define NORMAL
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
}`,jT=`#define PHONG
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
}`,ZT=`#define PHONG
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
}`,KT=`#define STANDARD
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
}`,QT=`#define STANDARD
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
}`,JT=`#define TOON
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
}`,$T=`#define TOON
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
}`,tb=`uniform float size;
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 color;
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
}`,ab=`uniform float rotation;
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
}`,sb=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:RM,alphahash_pars_fragment:wM,alphamap_fragment:CM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:LM,aomap_fragment:NM,aomap_pars_fragment:OM,batching_pars_vertex:PM,batching_vertex:IM,begin_vertex:zM,beginnormal_vertex:BM,bsdfs:FM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:WM,color_fragment:qM,color_pars_fragment:YM,color_pars_vertex:jM,color_vertex:ZM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:dE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:yE,lights_toon_pars_fragment:SE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:TE,lights_physical_pars_fragment:bE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:wE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:LE,map_fragment:NE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:IE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:BE,morphinstance_vertex:FE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:jE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:tT,packing:eT,premultiplied_alpha_fragment:nT,project_vertex:iT,dithering_fragment:aT,dithering_pars_fragment:sT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:oT,shadowmap_pars_fragment:lT,shadowmap_pars_vertex:cT,shadowmap_vertex:uT,shadowmask_pars_fragment:fT,skinbase_vertex:hT,skinning_pars_vertex:dT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:_T,tonemapping_fragment:vT,tonemapping_pars_fragment:xT,transmission_fragment:yT,transmission_pars_fragment:ST,uv_pars_fragment:MT,uv_pars_vertex:ET,uv_vertex:TT,worldpos_vertex:bT,background_vert:AT,background_frag:RT,backgroundCube_vert:wT,backgroundCube_frag:CT,cube_vert:DT,cube_frag:UT,depth_vert:LT,depth_frag:NT,distanceRGBA_vert:OT,distanceRGBA_frag:PT,equirect_vert:IT,equirect_frag:zT,linedashed_vert:BT,linedashed_frag:FT,meshbasic_vert:HT,meshbasic_frag:GT,meshlambert_vert:VT,meshlambert_frag:kT,meshmatcap_vert:XT,meshmatcap_frag:WT,meshnormal_vert:qT,meshnormal_frag:YT,meshphong_vert:jT,meshphong_frag:ZT,meshphysical_vert:KT,meshphysical_frag:QT,meshtoon_vert:JT,meshtoon_frag:$T,points_vert:tb,points_frag:eb,shadow_vert:nb,shadow_frag:ib,sprite_vert:ab,sprite_frag:sb},Nt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Pn([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Pn([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Pn([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Pn([Nt.lights,Nt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const bc={r:0,b:0,g:0},vs=new Ei,rb=new Ye;function ob(r,t,i,s,l,c,d){const h=new pe(0);let m=c===!0?0:1,p,g,_=null,x=0,S=null;function T(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:t).get(C)),C}function E(L){let C=!1;const H=T(L);H===null?v(h,m):H&&H.isColor&&(v(H,1),C=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,C){const H=T(C);H&&(H.isCubeTexture||H.mapping===Xc)?(g===void 0&&(g=new ni(new Xo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Dr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vs.copy(C.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(vs)),g.material.toneMapped=we.getTransfer(H.colorSpace)!==Fe,(_!==H||x!==H.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=H,x=H.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ni(new Wo(2,2),new ja({name:"BackgroundMaterial",uniforms:Dr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=we.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=H,x=H.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,C){L.getRGB(bc,nv(r)),s.buffers.color.setClear(bc.r,bc.g,bc.b,C,d)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,C=1){h.set(L),m=C,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:E,addToRenderList:y,dispose:O}}function lb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,d=!1;function h(w,G,at,J,lt){let ut=!1;const P=_(J,at,G);c!==P&&(c=P,p(c.object)),ut=S(w,J,at,lt),ut&&T(w,J,at,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(ut||d)&&(d=!1,C(w,G,at,J),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,at){const J=at.wireframe===!0;let lt=s[w.id];lt===void 0&&(lt={},s[w.id]=lt);let ut=lt[G.id];ut===void 0&&(ut={},lt[G.id]=ut);let P=ut[J];return P===void 0&&(P=x(m()),ut[J]=P),P}function x(w){const G=[],at=[],J=[];for(let lt=0;lt<i;lt++)G[lt]=0,at[lt]=0,J[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:at,attributeDivisors:J,object:w,attributes:{},index:null}}function S(w,G,at,J){const lt=c.attributes,ut=G.attributes;let P=0;const K=at.getAttributes();for(const q in K)if(K[q].location>=0){const U=lt[q];let et=ut[q];if(et===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(et=w.instanceColor)),U===void 0||U.attribute!==et||et&&U.data!==et.data)return!0;P++}return c.attributesNum!==P||c.index!==J}function T(w,G,at,J){const lt={},ut=G.attributes;let P=0;const K=at.getAttributes();for(const q in K)if(K[q].location>=0){let U=ut[q];U===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const et={};et.attribute=U,U&&U.data&&(et.data=U.data),lt[q]=et,P++}c.attributes=lt,c.attributesNum=P,c.index=J}function E(){const w=c.newAttributes;for(let G=0,at=w.length;G<at;G++)w[G]=0}function y(w){v(w,0)}function v(w,G){const at=c.newAttributes,J=c.enabledAttributes,lt=c.attributeDivisors;at[w]=1,J[w]===0&&(r.enableVertexAttribArray(w),J[w]=1),lt[w]!==G&&(r.vertexAttribDivisor(w,G),lt[w]=G)}function O(){const w=c.newAttributes,G=c.enabledAttributes;for(let at=0,J=G.length;at<J;at++)G[at]!==w[at]&&(r.disableVertexAttribArray(at),G[at]=0)}function L(w,G,at,J,lt,ut,P){P===!0?r.vertexAttribIPointer(w,G,at,lt,ut):r.vertexAttribPointer(w,G,at,J,lt,ut)}function C(w,G,at,J){E();const lt=J.attributes,ut=at.getAttributes(),P=G.defaultAttributeValues;for(const K in ut){const q=ut[K];if(q.location>=0){let Mt=lt[K];if(Mt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const U=Mt.normalized,et=Mt.itemSize,xt=t.get(Mt);if(xt===void 0)continue;const mt=xt.buffer,Y=xt.type,ht=xt.bytesPerElement,yt=Y===r.INT||Y===r.UNSIGNED_INT||Mt.gpuType===Rd;if(Mt.isInterleavedBufferAttribute){const Rt=Mt.data,wt=Rt.stride,qt=Mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let kt=0;kt<q.locationSize;kt++)v(q.location+kt,Rt.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let kt=0;kt<q.locationSize;kt++)y(q.location+kt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let kt=0;kt<q.locationSize;kt++)L(q.location+kt,et/q.locationSize,Y,U,wt*ht,(qt+et/q.locationSize*kt)*ht,yt)}else{if(Mt.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)v(q.location+Rt,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)y(q.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Rt=0;Rt<q.locationSize;Rt++)L(q.location+Rt,et/q.locationSize,Y,U,et*ht,et/q.locationSize*Rt*ht,yt)}}else if(P!==void 0){const U=P[K];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(q.location,U);break;case 3:r.vertexAttrib3fv(q.location,U);break;case 4:r.vertexAttrib4fv(q.location,U);break;default:r.vertexAttrib1fv(q.location,U)}}}}O()}function H(){X();for(const w in s){const G=s[w];for(const at in G){const J=G[at];for(const lt in J)g(J[lt].object),delete J[lt];delete G[at]}delete s[w]}}function z(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const at in G){const J=G[at];for(const lt in J)g(J[lt].object),delete J[lt];delete G[at]}delete s[w.id]}function B(w){for(const G in s){const at=s[G];if(at[w.id]===void 0)continue;const J=at[w.id];for(const lt in J)g(J[lt].object),delete J[lt];delete at[w.id]}}function X(){D(),d=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:y,disableUnusedAttributes:O}}function cb(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let T=0;T<_;T++)S+=g[T];i.update(S,s,1)}function m(p,g,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)d(p[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let T=0;for(let E=0;E<_;E++)T+=g[E]*x[E];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ub(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Si&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Oi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==la&&!X)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:H,maxSamples:z}}function fb(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new ka,h=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const T=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||T===null||T.length===0||c&&!y)c?g(null):p();else{const O=c?0:s,L=O*4;let C=v.clippingState||null;m.value=C,C=g(T,x,L,S);for(let H=0;H!==L;++H)C[H]=i[H];v.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,S,T){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=m.value,T!==!0||y===null){const v=S+E*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,C=S;L!==E;++L,C+=4)d.copy(_[L]).applyMatrix4(O,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function hb(r){let t=new WeakMap;function i(d,h){return h===Wh?d.mapping=Rr:h===qh&&(d.mapping=wr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Wh||h===qh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new rM(m.height);return p.fromEquirectangularTexture(r,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Sr=4,r0=[.125,.215,.35,.446,.526,.582],Ms=20,wh=new ov,o0=new pe;let Ch=null,Dh=0,Uh=0,Lh=!1;const ys=(1+Math.sqrt(5))/2,xr=1/ys,l0=[new Q(-ys,xr,0),new Q(ys,xr,0),new Q(-xr,0,ys),new Q(xr,0,ys),new Q(0,ys,-xr),new Q(0,ys,xr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],db=new Q;class c0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=db}=c;Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ho,format:Si,colorSpace:Cr,depthBuffer:!1},l=u0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(c)),this._blurMaterial=mb(c,t,i)}return l}_compileMaterial(t){const i=new ni(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,s,l,c){const m=new hi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(o0),_.toneMapping=qa,_.autoClear=!1;const T=new $0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new ni(new Xo,T);let y=!1;const v=t.background;v?v.isColor&&(T.color.copy(v),t.background=null,y=!0):(T.color.copy(o0),y=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const C=this._cubeSize;Ac(l,L*C,O>2?C:0,C,C),_.setRenderTarget(l),y&&_.render(E,m),_.render(t,m)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=S,_.autoClear=x,t.background=v}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new ni(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,wh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=l0[(l-c-1)%l0.length];this._blur(t,c-1,c,d,h)}i.autoClear=s}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ni(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ms-1),E=c/T,y=isFinite(c)?1+Math.floor(g*E):Ms;y>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const v=[];let O=0;for(let B=0;B<Ms;++B){const X=B/E,D=Math.exp(-X*X/2);v.push(D),B===0?O+=D:B<y&&(O+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/O;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-s;const C=this._sizeLods[l],H=3*C*(l>L-Sr?l-L+Sr:0),z=4*(this._cubeSize-C);Ac(i,H,z,3*C,2*C),m.setRenderTarget(i),m.render(_,wh)}}function pb(r){const t=[],i=[],s=[];let l=r;const c=r-Sr+1+r0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>r-Sr?m=r0[d-r+Sr-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,T=6,E=3,y=2,v=1,O=new Float32Array(E*T*S),L=new Float32Array(y*T*S),C=new Float32Array(v*T*S);for(let z=0;z<S;z++){const B=z%3*2/3-1,X=z>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];O.set(D,E*T*z),L.set(x,y*T*z);const w=[z,z,z,z,z,z];C.set(w,v*T*z)}const H=new di;H.setAttribute("position",new Ni(O,E)),H.setAttribute("uv",new Ni(L,y)),H.setAttribute("faceIndex",new Ni(C,v)),t.push(H),l>Sr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function u0(r,t,i){const s=new Rs(r,t,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ac(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function mb(r,t,i){const s=new Float32Array(Ms),l=new Q(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function f0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function h0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Bd(){return`

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
	`}function gb(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Wh||m===qh,g=m===Rr||m===wr;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new c0(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new c0(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function _b(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Tr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function vb(r,t,i,s){const l={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,T=_.attributes.position;let E=0;if(S!==null){const O=S.array;E=S.version;for(let L=0,C=O.length;L<C;L+=3){const H=O[L+0],z=O[L+1],B=O[L+2];x.push(H,z,z,B,B,H)}}else if(T!==void 0){const O=T.array;E=T.version;for(let L=0,C=O.length/3-1;L<C;L+=3){const H=L+0,z=L+1,B=L+2;x.push(H,z,z,B,B,H)}}else return;const y=new(Z0(x)?ev:tv)(x,1);y.version=E;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function xb(r,t,i){let s;function l(x){s=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*d),i.update(S,s,1)}function p(x,S,T){T!==0&&(r.drawElementsInstanced(s,S,c,x*d,T),i.update(S,s,T))}function g(x,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,T);let y=0;for(let v=0;v<T;v++)y+=S[v];i.update(y,s,1)}function _(x,S,T,E){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/d,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,E,0,T);let v=0;for(let O=0;O<T;O++)v+=S[O]*E[O];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function yb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Sb(r,t,i){const s=new WeakMap,l=new Je;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let w=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),E===!0&&(C=2),y===!0&&(C=3);let H=h.attributes.position.count*C,z=1;H>t.maxTextureSize&&(z=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*z*4*_),X=new K0(B,H,z,_);X.type=la,X.needsUpdate=!0;const D=C*4;for(let G=0;G<_;G++){const at=v[G],J=O[G],lt=L[G],ut=H*z*4*G;for(let P=0;P<at.count;P++){const K=P*D;T===!0&&(l.fromBufferAttribute(at,P),B[ut+K+0]=l.x,B[ut+K+1]=l.y,B[ut+K+2]=l.z,B[ut+K+3]=0),E===!0&&(l.fromBufferAttribute(J,P),B[ut+K+4]=l.x,B[ut+K+5]=l.y,B[ut+K+6]=l.z,B[ut+K+7]=0),y===!0&&(l.fromBufferAttribute(lt,P),B[ut+K+8]=l.x,B[ut+K+9]=l.y,B[ut+K+10]=l.z,B[ut+K+11]=lt.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new re(H,z)},s.set(h,x),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const E=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Mb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const cv=new Xn,d0=new sv(1,1),uv=new K0,fv=new kS,hv=new av,p0=[],m0=[],g0=new Float32Array(16),_0=new Float32Array(9),v0=new Float32Array(4);function Ur(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=p0[l];if(c===void 0&&(c=new Float32Array(l),p0[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function hn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function dn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function qc(r,t){let i=m0[t];i===void 0&&(i=new Int32Array(t),m0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Eb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2fv(this.addr,t),dn(i,t)}}function bb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;r.uniform3fv(this.addr,t),dn(i,t)}}function Ab(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4fv(this.addr,t),dn(i,t)}}function Rb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;v0.set(s),r.uniformMatrix2fv(this.addr,!1,v0),dn(i,s)}}function wb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;_0.set(s),r.uniformMatrix3fv(this.addr,!1,_0),dn(i,s)}}function Cb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;g0.set(s),r.uniformMatrix4fv(this.addr,!1,g0),dn(i,s)}}function Db(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2iv(this.addr,t),dn(i,t)}}function Lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3iv(this.addr,t),dn(i,t)}}function Nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4iv(this.addr,t),dn(i,t)}}function Ob(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Pb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2uiv(this.addr,t),dn(i,t)}}function Ib(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3uiv(this.addr,t),dn(i,t)}}function zb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4uiv(this.addr,t),dn(i,t)}}function Bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(d0.compareFunction=j0,c=d0):c=cv,i.setTexture2D(t||c,l)}function Fb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||fv,l)}function Hb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||hv,l)}function Gb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||uv,l)}function Vb(r){switch(r){case 5126:return Eb;case 35664:return Tb;case 35665:return bb;case 35666:return Ab;case 35674:return Rb;case 35675:return wb;case 35676:return Cb;case 5124:case 35670:return Db;case 35667:case 35671:return Ub;case 35668:case 35672:return Lb;case 35669:case 35673:return Nb;case 5125:return Ob;case 36294:return Pb;case 36295:return Ib;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}function kb(r,t){r.uniform1fv(this.addr,t)}function Xb(r,t){const i=Ur(t,this.size,2);r.uniform2fv(this.addr,i)}function Wb(r,t){const i=Ur(t,this.size,3);r.uniform3fv(this.addr,i)}function qb(r,t){const i=Ur(t,this.size,4);r.uniform4fv(this.addr,i)}function Yb(r,t){const i=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function jb(r,t){const i=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Zb(r,t){const i=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Kb(r,t){r.uniform1iv(this.addr,t)}function Qb(r,t){r.uniform2iv(this.addr,t)}function Jb(r,t){r.uniform3iv(this.addr,t)}function $b(r,t){r.uniform4iv(this.addr,t)}function t1(r,t){r.uniform1uiv(this.addr,t)}function e1(r,t){r.uniform2uiv(this.addr,t)}function n1(r,t){r.uniform3uiv(this.addr,t)}function i1(r,t){r.uniform4uiv(this.addr,t)}function a1(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||cv,c[d])}function s1(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||fv,c[d])}function r1(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||hv,c[d])}function o1(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||uv,c[d])}function l1(r){switch(r){case 5126:return kb;case 35664:return Xb;case 35665:return Wb;case 35666:return qb;case 35674:return Yb;case 35675:return jb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Vb(i.type)}}class u1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=l1(i.type)}}class f1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function x0(r,t){r.seq.push(t),r.map[t.id]=t}function h1(r,t,i){const s=r.name,l=s.length;for(Nh.lastIndex=0;;){const c=Nh.exec(s),d=Nh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){x0(i,p===void 0?new c1(h,r,t):new u1(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new f1(h),x0(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);h1(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function y0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const d1=37297;let p1=0;function m1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const S0=new le;function g1(r){we._getMatrix(S0,we.workingColorSpace,r);const t=`mat3( ${S0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case Bc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function M0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+m1(r.getShaderSource(t),d)}else return l}function _1(r,t){const i=g1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function v1(r,t){let i;switch(t){case pS:i="Linear";break;case mS:i="Reinhard";break;case gS:i="Cineon";break;case _S:i="ACESFilmic";break;case xS:i="AgX";break;case yS:i="Neutral";break;case vS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new Q;function x1(){we.getLuminanceCoefficients(Rc);const r=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function S1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function M1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function Po(r){return r!==""}function E0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function T0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(r){return r.replace(E1,b1)}const T1=new Map;function b1(r,t){let i=ce[t];if(i===void 0){const s=T1.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ed(i)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(r){return r.replace(A1,R1)}function R1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function A0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yy?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function C1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case wr:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function U1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ad:t="ENVMAP_BLENDING_MULTIPLY";break;case hS:t="ENVMAP_BLENDING_MIX";break;case dS:t="ENVMAP_BLENDING_ADD";break}return t}function L1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function N1(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=w1(i),p=C1(i),g=D1(i),_=U1(i),x=L1(i),S=y1(i),T=S1(c),E=l.createProgram();let y,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),v.length>0&&(v+=`
`)):(y=[A0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),v=[A0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ce.tonemapping_pars_fragment:"",i.toneMapping!==qa?v1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,_1("linearToOutputTexel",i.outputColorSpace),x1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),d=Ed(d),d=E0(d,i),d=T0(d,i),h=Ed(h),h=E0(h,i),h=T0(h,i),d=b0(d),h=b0(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=O+y+d,C=O+v+h,H=y0(l,l.VERTEX_SHADER,L),z=y0(l,l.FRAGMENT_SHADER,C);l.attachShader(E,H),l.attachShader(E,z),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function B(G){if(r.debug.checkShaderErrors){const at=l.getProgramInfoLog(E).trim(),J=l.getShaderInfoLog(H).trim(),lt=l.getShaderInfoLog(z).trim();let ut=!0,P=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,E,H,z);else{const K=M0(l,H,"vertex"),q=M0(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+at+`
`+K+`
`+q)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(J===""||lt==="")&&(P=!1);P&&(G.diagnostics={runnable:ut,programLog:at,vertexShader:{log:J,prefix:y},fragmentShader:{log:lt,prefix:v}})}l.deleteShader(H),l.deleteShader(z),X=new zc(l,E),D=M1(l,E)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(E,d1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=p1++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=z,this}let O1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new I1(t),i.set(t,s)),s}}class I1{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}}function z1(r,t,i,s,l,c,d){const h=new Q0,m=new P1,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,G,at,J){const lt=at.fog,ut=J.geometry,P=D.isMeshStandardMaterial?at.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),q=K&&K.mapping===Xc?K.image.height:null,Mt=T[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,et=U!==void 0?U.length:0;let xt=0;ut.morphAttributes.position!==void 0&&(xt=1),ut.morphAttributes.normal!==void 0&&(xt=2),ut.morphAttributes.color!==void 0&&(xt=3);let mt,Y,ht,yt;if(Mt){const Ae=Di[Mt];mt=Ae.vertexShader,Y=Ae.fragmentShader}else mt=D.vertexShader,Y=D.fragmentShader,m.update(D),ht=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const Rt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),qt=J.isInstancedMesh===!0,kt=J.isBatchedMesh===!0,be=!!D.map,Ce=!!D.matcap,me=!!K,F=!!D.aoMap,pn=!!D.lightMap,xe=!!D.bumpMap,ue=!!D.normalMap,Vt=!!D.displacementMap,ye=!!D.emissiveMap,Kt=!!D.metalnessMap,se=!!D.roughnessMap,$e=D.anisotropy>0,N=D.clearcoat>0,b=D.dispersion>0,nt=D.iridescence>0,dt=D.sheen>0,gt=D.transmission>0,ct=$e&&!!D.anisotropyMap,Pt=N&&!!D.clearcoatMap,Ut=N&&!!D.clearcoatNormalMap,Gt=N&&!!D.clearcoatRoughnessMap,Xt=nt&&!!D.iridescenceMap,Et=nt&&!!D.iridescenceThicknessMap,It=dt&&!!D.sheenColorMap,jt=dt&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,Ct=!!D.specularColorMap,ae=!!D.specularIntensityMap,k=gt&&!!D.transmissionMap,Lt=gt&&!!D.thicknessMap,Tt=!!D.gradientMap,zt=!!D.alphaMap,At=D.alphaTest>0,vt=!!D.alphaHash,Ft=!!D.extensions;let ie=qa;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Ne={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:mt,fragmentShader:Y,defines:D.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:kt,batchingColor:kt&&J._colorsTexture!==null,instancing:qt,instancingColor:qt&&J.instanceColor!==null,instancingMorph:qt&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Cr,alphaToCoverage:!!D.alphaToCoverage,map:be,matcap:Ce,envMap:me,envMapMode:me&&K.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:pn,bumpMap:xe,normalMap:ue,displacementMap:x&&Vt,emissiveMap:ye,normalMapObjectSpace:ue&&D.normalMapType===TS,normalMapTangentSpace:ue&&D.normalMapType===Nd,metalnessMap:Kt,roughnessMap:se,anisotropy:$e,anisotropyMap:ct,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:b,iridescence:nt,iridescenceMap:Xt,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:It,sheenRoughnessMap:jt,specularMap:Zt,specularColorMap:Ct,specularIntensityMap:ae,transmission:gt,transmissionMap:k,thicknessMap:Lt,gradientMap:Tt,opaque:D.transparent===!1&&D.blending===Er&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:At,alphaHash:vt,combine:D.combine,mapUv:be&&E(D.map.channel),aoMapUv:F&&E(D.aoMap.channel),lightMapUv:pn&&E(D.lightMap.channel),bumpMapUv:xe&&E(D.bumpMap.channel),normalMapUv:ue&&E(D.normalMap.channel),displacementMapUv:Vt&&E(D.displacementMap.channel),emissiveMapUv:ye&&E(D.emissiveMap.channel),metalnessMapUv:Kt&&E(D.metalnessMap.channel),roughnessMapUv:se&&E(D.roughnessMap.channel),anisotropyMapUv:ct&&E(D.anisotropyMap.channel),clearcoatMapUv:Pt&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:It&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:jt&&E(D.sheenRoughnessMap.channel),specularMapUv:Zt&&E(D.specularMap.channel),specularColorMapUv:Ct&&E(D.specularColorMap.channel),specularIntensityMapUv:ae&&E(D.specularIntensityMap.channel),transmissionMapUv:k&&E(D.transmissionMap.channel),thicknessMapUv:Lt&&E(D.thicknessMap.channel),alphaMapUv:zt&&E(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ue||$e),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ut.attributes.uv&&(be||zt),fog:!!lt,useFog:D.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:wt,skinning:J.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:be&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:ye&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ui,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(O(w,D),L(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=T[D.type];let G;if(w){const at=Di[w];G=nM.clone(at.uniforms)}else G=D.uniforms;return G}function H(D,w){let G;for(let at=0,J=g.length;at<J;at++){const lt=g[at];if(lt.cacheKey===w){G=lt,++G.usedTimes;break}}return G===void 0&&(G=new N1(r,w,D,c),g.push(G)),G}function z(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:H,releaseProgram:z,releaseShaderCache:B,programs:g,dispose:X}}function B1(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function F1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function R0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function w0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(_,x,S,T,E,y){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:T,renderOrder:_.renderOrder,z:E,group:y},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=E,v.group=y),t++,v}function h(_,x,S,T,E,y){const v=d(_,x,S,T,E,y);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,x,S,T,E,y){const v=d(_,x,S,T,E,y);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||F1),s.length>1&&s.sort(x||R0),l.length>1&&l.sort(x||R0)}function g(){for(let _=t,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function H1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new w0,r.set(s,[d])):l>=c.length?(d=new w0,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function G1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new pe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function V1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let k1=0;function X1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function W1(r){const t=new G1,i=V1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new Ye,d=new Ye;function h(p){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,T=0,E=0,y=0,v=0,O=0,L=0,C=0,H=0,z=0,B=0;p.sort(X1);for(let D=0,w=p.length;D<w;D++){const G=p[D],at=G.color,J=G.intensity,lt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=at.r*J,_+=at.g*J,x+=at.b*J;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],J);B++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[S]=q,s.directionalShadowMap[S]=ut,s.directionalShadowMatrix[S]=G.shadow.matrix,O++}s.directional[S]=P,S++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(at).multiplyScalar(J),P.distance=lt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[E]=P;const K=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,K.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[E]=K.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[E]=q,s.spotShadowMap[E]=ut,C++}E++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(at).multiplyScalar(J),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=P,y++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const K=G.shadow,q=i.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[T]=q,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=G.shadow.matrix,L++}s.point[T]=P,T++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(J),P.groundColor.copy(G.groundColor).multiplyScalar(J),s.hemi[v]=P,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==E||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==O||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==H||X.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=E,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+H-z,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,X.directionalLength=S,X.pointLength=T,X.spotLength=E,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=O,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=H,X.numLightProbes=B,s.version=k1++)}function m(p,g){let _=0,x=0,S=0,T=0,E=0;const y=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const L=p[v];if(L.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),_++}else if(L.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),d.identity(),c.copy(L.matrixWorld),c.premultiply(y),d.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=s.hemi[E];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),E++}}}return{setup:h,setupView:m,state:s}}function C0(r){const t=new W1(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function d(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function q1(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new C0(r),t.set(l,[h])):c>=d.length?(h=new C0(r),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function Z1(r,t,i){let s=new Pd;const l=new re,c=new re,d=new Je,h=new dM({depthPacking:ES}),m=new pM,p={},g=i.maxTextureSize,_={[Ya]:kn,[kn]:Ya,[Ui]:Ui},x=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Y1,fragmentShader:j1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new di;T.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ni(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let v=this.type;this.render=function(z,B,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),at=r.state;at.setBlending(Wa),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const J=v!==oa&&this.type===oa,lt=v===oa&&this.type!==oa;for(let ut=0,P=z.length;ut<P;ut++){const K=z[ut],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Mt=q.getFrameExtents();if(l.multiply(Mt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,q.mapSize.y=c.y)),q.map===null||J===!0||lt===!0){const et=this.type!==oa?{minFilter:Mi,magFilter:Mi}:{};q.map!==null&&q.map.dispose(),q.map=new Rs(l.x,l.y,et),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const U=q.getViewportCount();for(let et=0;et<U;et++){const xt=q.getViewport(et);d.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),at.viewport(d),q.updateMatrices(K,et),s=q.getFrustum(),C(B,X,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===oa&&O(q,X),q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(D,w,G)};function O(z,B){const X=t.update(E);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Rs(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,X,x,E,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,X,S,E,null)}function L(z,B,X,D){let w=null;const G=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)w=G;else if(w=X.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const at=w.uuid,J=B.uuid;let lt=p[at];lt===void 0&&(lt={},p[at]=lt);let ut=lt[J];ut===void 0&&(ut=w.clone(),lt[J]=ut,B.addEventListener("dispose",H)),w=ut}if(w.visible=B.visible,w.wireframe=B.wireframe,D===oa?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=r.properties.get(w);at.light=X}return w}function C(z,B,X,D,w){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===oa)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const J=t.update(z),lt=z.material;if(Array.isArray(lt)){const ut=J.groups;for(let P=0,K=ut.length;P<K;P++){const q=ut[P],Mt=lt[q.materialIndex];if(Mt&&Mt.visible){const U=L(z,Mt,D,w);z.onBeforeShadow(r,z,B,X,J,U,q),r.renderBufferDirect(X,null,J,U,z,q),z.onAfterShadow(r,z,B,X,J,U,q)}}}else if(lt.visible){const ut=L(z,lt,D,w);z.onBeforeShadow(r,z,B,X,J,ut,null),r.renderBufferDirect(X,null,J,ut,z,null),z.onAfterShadow(r,z,B,X,J,ut,null)}}const at=z.children;for(let J=0,lt=at.length;J<lt;J++)C(at[J],B,X,D,w)}function H(z){z.target.removeEventListener("dispose",H);for(const X in p){const D=p[X],w=z.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const K1={[Bh]:Fh,[Hh]:kh,[Gh]:Xh,[Ar]:Vh,[Fh]:Bh,[kh]:Hh,[Xh]:Gh,[Vh]:Ar};function Q1(r,t){function i(){let k=!1;const Lt=new Je;let Tt=null;const zt=new Je(0,0,0,0);return{setMask:function(At){Tt!==At&&!k&&(r.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){k=At},setClear:function(At,vt,Ft,ie,Ne){Ne===!0&&(At*=ie,vt*=ie,Ft*=ie),Lt.set(At,vt,Ft,ie),zt.equals(Lt)===!1&&(r.clearColor(At,vt,Ft,ie),zt.copy(Lt))},reset:function(){k=!1,Tt=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Lt=!1,Tt=null,zt=null,At=null;return{setReversed:function(vt){if(Lt!==vt){const Ft=t.get("EXT_clip_control");vt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=vt;const ie=At;At=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(vt){vt?Rt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!k&&(r.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Lt&&(vt=K1[vt]),zt!==vt){switch(vt){case Bh:r.depthFunc(r.NEVER);break;case Fh:r.depthFunc(r.ALWAYS);break;case Hh:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Gh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case kh:r.depthFunc(r.GREATER);break;case Xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){At!==vt&&(Lt&&(vt=1-vt),r.clearDepth(vt),At=vt)},reset:function(){k=!1,Tt=null,zt=null,At=null,Lt=!1}}}function l(){let k=!1,Lt=null,Tt=null,zt=null,At=null,vt=null,Ft=null,ie=null,Ne=null;return{setTest:function(Ae){k||(Ae?Rt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Ae){Lt!==Ae&&!k&&(r.stencilMask(Ae),Lt=Ae)},setFunc:function(Ae,Wn,mn){(Tt!==Ae||zt!==Wn||At!==mn)&&(r.stencilFunc(Ae,Wn,mn),Tt=Ae,zt=Wn,At=mn)},setOp:function(Ae,Wn,mn){(vt!==Ae||Ft!==Wn||ie!==mn)&&(r.stencilOp(Ae,Wn,mn),vt=Ae,Ft=Wn,ie=mn)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Ne!==Ae&&(r.clearStencil(Ae),Ne=Ae)},reset:function(){k=!1,Lt=null,Tt=null,zt=null,At=null,vt=null,Ft=null,ie=null,Ne=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],T=null,E=!1,y=null,v=null,O=null,L=null,C=null,H=null,z=null,B=new pe(0,0,0),X=0,D=!1,w=null,G=null,at=null,J=null,lt=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=K>=2);let Mt=null,U={};const et=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),mt=new Je().fromArray(et),Y=new Je().fromArray(xt);function ht(k,Lt,Tt,zt){const At=new Uint8Array(4),vt=r.createTexture();r.bindTexture(k,vt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<Tt;Ft++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Lt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return vt}const yt={};yt[r.TEXTURE_2D]=ht(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Rt(r.DEPTH_TEST),d.setFunc(Ar),xe(!1),ue(E_),Rt(r.CULL_FACE),F(Wa);function Rt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function wt(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function qt(k,Lt){return _[k]!==Lt?(r.bindFramebuffer(k,Lt),_[k]=Lt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function kt(k,Lt){let Tt=S,zt=!1;if(k){Tt=x.get(Lt),Tt===void 0&&(Tt=[],x.set(Lt,Tt));const At=k.textures;if(Tt.length!==At.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Ft=At.length;vt<Ft;vt++)Tt[vt]=r.COLOR_ATTACHMENT0+vt;Tt.length=At.length,zt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Tt)}function be(k){return T!==k?(r.useProgram(k),T=k,!0):!1}const Ce={[Ss]:r.FUNC_ADD,[Zy]:r.FUNC_SUBTRACT,[Ky]:r.FUNC_REVERSE_SUBTRACT};Ce[Qy]=r.MIN,Ce[Jy]=r.MAX;const me={[$y]:r.ZERO,[tS]:r.ONE,[eS]:r.SRC_COLOR,[Ih]:r.SRC_ALPHA,[oS]:r.SRC_ALPHA_SATURATE,[sS]:r.DST_COLOR,[iS]:r.DST_ALPHA,[nS]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[rS]:r.ONE_MINUS_DST_COLOR,[aS]:r.ONE_MINUS_DST_ALPHA,[lS]:r.CONSTANT_COLOR,[cS]:r.ONE_MINUS_CONSTANT_COLOR,[uS]:r.CONSTANT_ALPHA,[fS]:r.ONE_MINUS_CONSTANT_ALPHA};function F(k,Lt,Tt,zt,At,vt,Ft,ie,Ne,Ae){if(k===Wa){E===!0&&(wt(r.BLEND),E=!1);return}if(E===!1&&(Rt(r.BLEND),E=!0),k!==jy){if(k!==y||Ae!==D){if((v!==Ss||C!==Ss)&&(r.blendEquation(r.FUNC_ADD),v=Ss,C=Ss),Ae)switch(k){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case T_:r.blendFunc(r.ONE,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case A_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case T_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case A_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,L=null,H=null,z=null,B.set(0,0,0),X=0,y=k,D=Ae}return}At=At||Lt,vt=vt||Tt,Ft=Ft||zt,(Lt!==v||At!==C)&&(r.blendEquationSeparate(Ce[Lt],Ce[At]),v=Lt,C=At),(Tt!==O||zt!==L||vt!==H||Ft!==z)&&(r.blendFuncSeparate(me[Tt],me[zt],me[vt],me[Ft]),O=Tt,L=zt,H=vt,z=Ft),(ie.equals(B)===!1||Ne!==X)&&(r.blendColor(ie.r,ie.g,ie.b,Ne),B.copy(ie),X=Ne),y=k,D=!1}function pn(k,Lt){k.side===Ui?wt(r.CULL_FACE):Rt(r.CULL_FACE);let Tt=k.side===kn;Lt&&(Tt=!Tt),xe(Tt),k.blending===Er&&k.transparent===!1?F(Wa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;h.setTest(zt),zt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function ue(k){k!==Wy?(Rt(r.CULL_FACE),k!==G&&(k===E_?r.cullFace(r.BACK):k===qy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),G=k}function Vt(k){k!==at&&(P&&r.lineWidth(k),at=k)}function ye(k,Lt,Tt){k?(Rt(r.POLYGON_OFFSET_FILL),(J!==Lt||lt!==Tt)&&(r.polygonOffset(Lt,Tt),J=Lt,lt=Tt)):wt(r.POLYGON_OFFSET_FILL)}function Kt(k){k?Rt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function se(k){k===void 0&&(k=r.TEXTURE0+ut-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function $e(k,Lt,Tt){Tt===void 0&&(Mt===null?Tt=r.TEXTURE0+ut-1:Tt=Mt);let zt=U[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},U[Tt]=zt),(zt.type!==k||zt.texture!==Lt)&&(Mt!==Tt&&(r.activeTexture(Tt),Mt=Tt),r.bindTexture(k,Lt||yt[k]),zt.type=k,zt.texture=Lt)}function N(){const k=U[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(k){mt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),mt.copy(k))}function jt(k){Y.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function Zt(k,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let zt=Tt.get(k);zt===void 0&&(zt=r.getUniformBlockIndex(Lt,k.name),Tt.set(k,zt))}function Ct(k,Lt){const zt=p.get(Lt).get(k);m.get(Lt)!==zt&&(r.uniformBlockBinding(Lt,zt,k.__bindingPointIndex),m.set(Lt,zt))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Mt=null,U={},_={},x=new WeakMap,S=[],T=null,E=!1,y=null,v=null,O=null,L=null,C=null,H=null,z=null,B=new pe(0,0,0),X=0,D=!1,w=null,G=null,at=null,J=null,lt=null,mt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Rt,disable:wt,bindFramebuffer:qt,drawBuffers:kt,useProgram:be,setBlending:F,setMaterial:pn,setFlipSided:xe,setCullFace:ue,setLineWidth:Vt,setPolygonOffset:ye,setScissorTest:Kt,activeTexture:se,bindTexture:$e,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:Xt,texImage3D:Et,updateUBOMapping:Zt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:dt,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:It,viewport:jt,reset:ae}}function J1(r,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,b){return S?new OffscreenCanvas(N,b):Hc("canvas")}function E(N,b,nt){let dt=1;const gt=$e(N);if((gt.width>nt||gt.height>nt)&&(dt=nt/Math.max(gt.width,gt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(dt*gt.width),Pt=Math.floor(dt*gt.height);_===void 0&&(_=T(ct,Pt));const Ut=b?T(ct,Pt):_;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(N,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,b,nt,dt,gt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=b;if(b===r.RED&&(nt===r.FLOAT&&(ct=r.R32F),nt===r.HALF_FLOAT&&(ct=r.R16F),nt===r.UNSIGNED_BYTE&&(ct=r.R8)),b===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ct=r.R8UI),nt===r.UNSIGNED_SHORT&&(ct=r.R16UI),nt===r.UNSIGNED_INT&&(ct=r.R32UI),nt===r.BYTE&&(ct=r.R8I),nt===r.SHORT&&(ct=r.R16I),nt===r.INT&&(ct=r.R32I)),b===r.RG&&(nt===r.FLOAT&&(ct=r.RG32F),nt===r.HALF_FLOAT&&(ct=r.RG16F),nt===r.UNSIGNED_BYTE&&(ct=r.RG8)),b===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ct=r.RG8UI),nt===r.UNSIGNED_SHORT&&(ct=r.RG16UI),nt===r.UNSIGNED_INT&&(ct=r.RG32UI),nt===r.BYTE&&(ct=r.RG8I),nt===r.SHORT&&(ct=r.RG16I),nt===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),nt===r.UNSIGNED_INT&&(ct=r.RGB32UI),nt===r.BYTE&&(ct=r.RGB8I),nt===r.SHORT&&(ct=r.RGB16I),nt===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),nt===r.UNSIGNED_INT&&(ct=r.RGBA32UI),nt===r.BYTE&&(ct=r.RGBA8I),nt===r.SHORT&&(ct=r.RGBA16I),nt===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&nt===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),b===r.RGBA){const Pt=gt?Bc:we.getTransfer(dt);nt===r.FLOAT&&(ct=r.RGBA32F),nt===r.HALF_FLOAT&&(ct=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(ct=Pt===Fe?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(N,b){let nt;return N?b===null||b===bs||b===zo?nt=r.DEPTH24_STENCIL8:b===la?nt=r.DEPTH32F_STENCIL8:b===Io&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bs||b===zo?nt=r.DEPTH_COMPONENT24:b===la?nt=r.DEPTH_COMPONENT32F:b===Io&&(nt=r.DEPTH_COMPONENT16),nt}function H(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),X(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),w(b)}function X(N){const b=s.get(N);if(b.__webglInit===void 0)return;const nt=N.source,dt=x.get(nt);if(dt){const gt=dt[b.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&D(N),Object.keys(dt).length===0&&x.delete(nt)}s.remove(N)}function D(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const nt=N.source,dt=x.get(nt);delete dt[b.__cacheKey],d.memory.textures--}function w(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let gt=0;gt<b.__webglFramebuffer[dt].length;gt++)r.deleteFramebuffer(b.__webglFramebuffer[dt][gt]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=N.textures;for(let dt=0,gt=nt.length;dt<gt;dt++){const ct=s.get(nt[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),d.memory.textures--),s.remove(nt[dt])}s.remove(N)}let G=0;function at(){G=0}function J(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function lt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ut(N,b){const nt=s.get(N);if(N.isVideoTexture&&Kt(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const dt=N.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(nt,N,b);return}}i.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+b)}function P(N,b){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){yt(nt,N,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+b)}function K(N,b){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){yt(nt,N,b);return}i.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+b)}function q(N,b){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){Rt(nt,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+b)}const Mt={[Yh]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[jh]:r.MIRRORED_REPEAT},U={[Mi]:r.NEAREST,[SS]:r.NEAREST_MIPMAP_NEAREST,[ic]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[eh]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},et={[bS]:r.NEVER,[US]:r.ALWAYS,[AS]:r.LESS,[j0]:r.LEQUAL,[RS]:r.EQUAL,[DS]:r.GEQUAL,[wS]:r.GREATER,[CS]:r.NOTEQUAL};function xt(N,b){if(b.type===la&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===eh||b.magFilter===ic||b.magFilter===Ts||b.minFilter===Li||b.minFilter===eh||b.minFilter===ic||b.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Mt[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Mt[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Mt[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,U[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mi||b.minFilter!==ic&&b.minFilter!==Ts||b.type===la&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function mt(N,b){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const dt=b.source;let gt=x.get(dt);gt===void 0&&(gt={},x.set(dt,gt));const ct=lt(b);if(ct!==N.__cacheKey){gt[ct]===void 0&&(gt[ct]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),gt[ct].usedTimes++;const Pt=gt[N.__cacheKey];Pt!==void 0&&(gt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(b)),N.__cacheKey=ct,N.__webglTexture=gt[ct].texture}return nt}function Y(N,b,nt){return Math.floor(Math.floor(N/nt)/b)}function ht(N,b,nt,dt){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,nt,dt,b.data);else{ct.sort((Et,It)=>Et.start-It.start);let Pt=0;for(let Et=1;Et<ct.length;Et++){const It=ct[Pt],jt=ct[Et],Zt=It.start+It.count,Ct=Y(jt.start,b.width,4),ae=Y(It.start,b.width,4);jt.start<=Zt+1&&Ct===ae&&Y(jt.start+jt.count-1,b.width,4)===Ct?It.count=Math.max(It.count,jt.start+jt.count-It.start):(++Pt,ct[Pt]=jt)}ct.length=Pt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Gt=r.getParameter(r.UNPACK_SKIP_PIXELS),Xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Et=0,It=ct.length;Et<It;Et++){const jt=ct[Et],Zt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),ae=Zt%b.width,k=Math.floor(Zt/b.width),Lt=Ct,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ae,k,Lt,Tt,nt,dt,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xt)}}function yt(N,b,nt){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const gt=mt(N,b),ct=b.source;i.bindTexture(dt,N.__webglTexture,r.TEXTURE0+nt);const Pt=s.get(ct);if(ct.version!==Pt.__version||gt===!0){i.activeTexture(r.TEXTURE0+nt);const Ut=we.getPrimaries(we.workingColorSpace),Gt=b.colorSpace===Xa?null:we.getPrimaries(b.colorSpace),Xt=b.colorSpace===Xa||Ut===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Et=E(b.image,!1,l.maxTextureSize);Et=se(b,Et);const It=c.convert(b.format,b.colorSpace),jt=c.convert(b.type);let Zt=L(b.internalFormat,It,jt,b.colorSpace,b.isVideoTexture);xt(dt,b);let Ct;const ae=b.mipmaps,k=b.isVideoTexture!==!0,Lt=Pt.__version===void 0||gt===!0,Tt=ct.dataReady,zt=H(b,Et);if(b.isDepthTexture)Zt=C(b.format===Fo,b.type),Lt&&(k?i.texStorage2D(r.TEXTURE_2D,1,Zt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Zt,Et.width,Et.height,0,It,jt,null));else if(b.isDataTexture)if(ae.length>0){k&&Lt&&i.texStorage2D(r.TEXTURE_2D,zt,Zt,ae[0].width,ae[0].height);for(let At=0,vt=ae.length;At<vt;At++)Ct=ae[At],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ct.width,Ct.height,It,jt,Ct.data):i.texImage2D(r.TEXTURE_2D,At,Zt,Ct.width,Ct.height,0,It,jt,Ct.data);b.generateMipmaps=!1}else k?(Lt&&i.texStorage2D(r.TEXTURE_2D,zt,Zt,Et.width,Et.height),Tt&&ht(b,Et,It,jt)):i.texImage2D(r.TEXTURE_2D,0,Zt,Et.width,Et.height,0,It,jt,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Zt,ae[0].width,ae[0].height,Et.depth);for(let At=0,vt=ae.length;At<vt;At++)if(Ct=ae[At],b.format!==Si)if(It!==null)if(k){if(Tt)if(b.layerUpdates.size>0){const Ft=s0(Ct.width,Ct.height,b.format,b.type);for(const ie of b.layerUpdates){const Ne=Ct.data.subarray(ie*Ft/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,ie,Ct.width,Ct.height,1,It,Ne)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,Et.depth,It,Ct.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Zt,Ct.width,Ct.height,Et.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,Et.depth,It,jt,Ct.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Zt,Ct.width,Ct.height,Et.depth,0,It,jt,Ct.data)}else{k&&Lt&&i.texStorage2D(r.TEXTURE_2D,zt,Zt,ae[0].width,ae[0].height);for(let At=0,vt=ae.length;At<vt;At++)Ct=ae[At],b.format!==Si?It!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ct.width,Ct.height,It,Ct.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ct.width,Ct.height,It,jt,Ct.data):i.texImage2D(r.TEXTURE_2D,At,Zt,Ct.width,Ct.height,0,It,jt,Ct.data)}else if(b.isDataArrayTexture)if(k){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Zt,Et.width,Et.height,Et.depth),Tt)if(b.layerUpdates.size>0){const At=s0(Et.width,Et.height,b.format,b.type);for(const vt of b.layerUpdates){const Ft=Et.data.subarray(vt*At/Et.data.BYTES_PER_ELEMENT,(vt+1)*At/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,It,jt,Ft)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,It,jt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Zt,Et.width,Et.height,Et.depth,0,It,jt,Et.data);else if(b.isData3DTexture)k?(Lt&&i.texStorage3D(r.TEXTURE_3D,zt,Zt,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,It,jt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Zt,Et.width,Et.height,Et.depth,0,It,jt,Et.data);else if(b.isFramebufferTexture){if(Lt)if(k)i.texStorage2D(r.TEXTURE_2D,zt,Zt,Et.width,Et.height);else{let At=Et.width,vt=Et.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,Zt,At,vt,0,It,jt,null),At>>=1,vt>>=1}}else if(ae.length>0){if(k&&Lt){const At=$e(ae[0]);i.texStorage2D(r.TEXTURE_2D,zt,Zt,At.width,At.height)}for(let At=0,vt=ae.length;At<vt;At++)Ct=ae[At],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,It,jt,Ct):i.texImage2D(r.TEXTURE_2D,At,Zt,It,jt,Ct);b.generateMipmaps=!1}else if(k){if(Lt){const At=$e(Et);i.texStorage2D(r.TEXTURE_2D,zt,Zt,At.width,At.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,jt,Et)}else i.texImage2D(r.TEXTURE_2D,0,Zt,It,jt,Et);y(b)&&v(dt),Pt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Rt(N,b,nt){if(b.image.length!==6)return;const dt=mt(N,b),gt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+nt);const ct=s.get(gt);if(gt.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+nt);const Pt=we.getPrimaries(we.workingColorSpace),Ut=b.colorSpace===Xa?null:we.getPrimaries(b.colorSpace),Gt=b.colorSpace===Xa||Pt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!Xt&&!Et?It[vt]=E(b.image[vt],!0,l.maxCubemapSize):It[vt]=Et?b.image[vt].image:b.image[vt],It[vt]=se(b,It[vt]);const jt=It[0],Zt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),ae=L(b.internalFormat,Zt,Ct,b.colorSpace),k=b.isVideoTexture!==!0,Lt=ct.__version===void 0||dt===!0,Tt=gt.dataReady;let zt=H(b,jt);xt(r.TEXTURE_CUBE_MAP,b);let At;if(Xt){k&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ae,jt.width,jt.height);for(let vt=0;vt<6;vt++){At=It[vt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ie=At[Ft];b.format!==Si?Zt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ie.width,ie.height,Zt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ie.width,ie.height,Zt,Ct,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ae,ie.width,ie.height,0,Zt,Ct,ie.data)}}}else{if(At=b.mipmaps,k&&Lt){At.length>0&&zt++;const vt=$e(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ae,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,Zt,Ct,It[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,It[vt].width,It[vt].height,0,Zt,Ct,It[vt].data);for(let Ft=0;Ft<At.length;Ft++){const Ne=At[Ft].image[vt].image;k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,Ne.width,Ne.height,Zt,Ct,Ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ae,Ne.width,Ne.height,0,Zt,Ct,Ne.data)}}else{k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Zt,Ct,It[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,Zt,Ct,It[vt]);for(let Ft=0;Ft<At.length;Ft++){const ie=At[Ft];k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,Zt,Ct,ie.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ae,Zt,Ct,ie.image[vt])}}}y(b)&&v(r.TEXTURE_CUBE_MAP),ct.__version=gt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function wt(N,b,nt,dt,gt,ct){const Pt=c.convert(nt.format,nt.colorSpace),Ut=c.convert(nt.type),Gt=L(nt.internalFormat,Pt,Ut,nt.colorSpace),Xt=s.get(b),Et=s.get(nt);if(Et.__renderTarget=b,!Xt.__hasExternalTextures){const It=Math.max(1,b.width>>ct),jt=Math.max(1,b.height>>ct);gt===r.TEXTURE_3D||gt===r.TEXTURE_2D_ARRAY?i.texImage3D(gt,ct,Gt,It,jt,b.depth,0,Pt,Ut,null):i.texImage2D(gt,ct,Gt,It,jt,0,Pt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),ye(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,gt,Et.__webglTexture,0,Vt(b)):(gt===r.TEXTURE_2D||gt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,gt,Et.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(N,b,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const dt=b.depthTexture,gt=dt&&dt.isDepthTexture?dt.type:null,ct=C(b.stencilBuffer,gt),Pt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=Vt(b);ye(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,ct,b.width,b.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,N)}else{const dt=b.textures;for(let gt=0;gt<dt.length;gt++){const ct=dt[gt],Pt=c.convert(ct.format,ct.colorSpace),Ut=c.convert(ct.type),Gt=L(ct.internalFormat,Pt,Ut,ct.colorSpace),Xt=Vt(b);nt&&ye(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Gt,b.width,b.height):ye(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,Gt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Gt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const gt=dt.__webglTexture,ct=Vt(b);if(b.depthTexture.format===Bo)ye(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0);else if(b.depthTexture.format===Fo)ye(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function be(N){const b=s.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const gt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",gt)};dt.addEventListener("dispose",gt),b.__depthDisposeCallback=gt}b.__boundDepthTexture=dt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=N.texture.mipmaps;dt&&dt.length>0?kt(b.__webglFramebuffer[0],N):kt(b.__webglFramebuffer,N)}else if(nt){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),qt(b.__webglDepthbuffer[dt],N,!1);else{const gt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,ct)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),qt(b.__webglDepthbuffer,N,!1);else{const gt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(N,b,nt){const dt=s.get(N);b!==void 0&&wt(dt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&be(N)}function me(N){const b=N.texture,nt=s.get(N),dt=s.get(b);N.addEventListener("dispose",B);const gt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,Pt=gt.length>1;if(Pt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,d.memory.textures++),ct){nt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)nt.__webglFramebuffer[Ut][Gt]=r.createFramebuffer()}else nt.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)nt.__webglFramebuffer[Ut]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let Ut=0,Gt=gt.length;Ut<Gt;Ut++){const Xt=s.get(gt[Ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&ye(N)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<gt.length;Ut++){const Gt=gt[Ut];nt.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut]);const Xt=c.convert(Gt.format,Gt.colorSpace),Et=c.convert(Gt.type),It=L(Gt.internalFormat,Xt,Et,Gt.colorSpace,N.isXRRenderTarget===!0),jt=Vt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,It,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)wt(nt.__webglFramebuffer[Ut][Gt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(nt.__webglFramebuffer[Ut],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=gt.length;Ut<Gt;Ut++){const Xt=gt[Ut],Et=s.get(Xt);i.bindTexture(r.TEXTURE_2D,Et.__webglTexture),xt(r.TEXTURE_2D,Xt),wt(nt.__webglFramebuffer,N,Xt,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),y(Xt)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,dt.__webglTexture),xt(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)wt(nt.__webglFramebuffer[Gt],N,b,r.COLOR_ATTACHMENT0,Ut,Gt);else wt(nt.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Ut,0);y(b)&&v(Ut),i.unbindTexture()}N.depthBuffer&&be(N)}function F(N){const b=N.textures;for(let nt=0,dt=b.length;nt<dt;nt++){const gt=b[nt];if(y(gt)){const ct=O(N),Pt=s.get(gt).__webglTexture;i.bindTexture(ct,Pt),v(ct),i.unbindTexture()}}}const pn=[],xe=[];function ue(N){if(N.samples>0){if(ye(N)===!1){const b=N.textures,nt=N.width,dt=N.height;let gt=r.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=s.get(N),Ut=b.length>1;if(Ut)for(let Xt=0;Xt<b.length;Xt++)i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Xt=0;Xt<b.length;Xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(gt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(gt|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=s.get(b[Xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,gt,r.NEAREST),m===!0&&(pn.length=0,xe.length=0,pn.push(r.COLOR_ATTACHMENT0+Xt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(pn.push(ct),xe.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let Xt=0;Xt<b.length;Xt++){i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=s.get(b[Xt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function ye(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Kt(N){const b=d.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function se(N,b){const nt=N.colorSpace,dt=N.format,gt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Cr&&nt!==Xa&&(we.getTransfer(nt)===Fe?(dt!==Si||gt!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=at,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ce,this.setupRenderTarget=me,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ye}function $1(r,t){function i(s,l=Xa){let c;const d=we.getTransfer(l);if(s===Oi)return r.UNSIGNED_BYTE;if(s===wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===V0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===H0)return r.BYTE;if(s===G0)return r.SHORT;if(s===Io)return r.UNSIGNED_SHORT;if(s===Rd)return r.INT;if(s===bs)return r.UNSIGNED_INT;if(s===la)return r.FLOAT;if(s===Ho)return r.HALF_FLOAT;if(s===k0)return r.ALPHA;if(s===X0)return r.RGB;if(s===Si)return r.RGBA;if(s===Bo)return r.DEPTH_COMPONENT;if(s===Fo)return r.DEPTH_STENCIL;if(s===W0)return r.RED;if(s===Dd)return r.RED_INTEGER;if(s===q0)return r.RG;if(s===Ud)return r.RG_INTEGER;if(s===Ld)return r.RGBA_INTEGER;if(s===Dc||s===Uc||s===Lc||s===Nc)if(d===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Dc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Dc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$h||s===td)return d===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ed)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oc||s===gd||s===_d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Oc)return d===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Y0||s===vd||s===xd||s===yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Oc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
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

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:tA,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ni(new Wo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends ws{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,S=null,T=null;const E=new nA,y=i.getContextAttributes();let v=null,O=null;const L=[],C=[],H=new re;let z=null;const B=new hi;B.viewport=new Je;const X=new hi;X.viewport=new Je;const D=[B,X],w=new EM;let G=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ht=L[Y];return ht===void 0&&(ht=new Eh,L[Y]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Y){let ht=L[Y];return ht===void 0&&(ht=new Eh,L[Y]=ht),ht.getGripSpace()},this.getHand=function(Y){let ht=L[Y];return ht===void 0&&(ht=new Eh,L[Y]=ht),ht.getHandSpace()};function J(Y){const ht=C.indexOf(Y.inputSource);if(ht===-1)return;const yt=L[ht];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,p||d),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function lt(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",ut);for(let Y=0;Y<L.length;Y++){const ht=C[Y];ht!==null&&(C[Y]=null,L[Y].disconnect(ht))}G=null,at=null,E.reset(),t.setRenderTarget(v),S=null,x=null,_=null,l=null,O=null,mt.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){h=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,wt=null;y.depth&&(wt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?Fo:Bo,Rt=y.stencil?zo:bs);const qt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(qt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Rs(x.textureWidth,x.textureHeight,{format:Si,type:Oi,depthTexture:new sv(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Rs(S.framebufferWidth,S.framebufferHeight,{format:Si,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),mt.setContext(l),mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ut(Y){for(let ht=0;ht<Y.removed.length;ht++){const yt=Y.removed[ht],Rt=C.indexOf(yt);Rt>=0&&(C[Rt]=null,L[Rt].disconnect(yt))}for(let ht=0;ht<Y.added.length;ht++){const yt=Y.added[ht];let Rt=C.indexOf(yt);if(Rt===-1){for(let qt=0;qt<L.length;qt++)if(qt>=C.length){C.push(yt),Rt=qt;break}else if(C[qt]===null){C[qt]=yt,Rt=qt;break}if(Rt===-1)break}const wt=L[Rt];wt&&wt.connect(yt)}}const P=new Q,K=new Q;function q(Y,ht,yt){P.setFromMatrixPosition(ht.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);const Rt=P.distanceTo(K),wt=ht.projectionMatrix.elements,qt=yt.projectionMatrix.elements,kt=wt[14]/(wt[10]-1),be=wt[14]/(wt[10]+1),Ce=(wt[9]+1)/wt[5],me=(wt[9]-1)/wt[5],F=(wt[8]-1)/wt[0],pn=(qt[8]+1)/qt[0],xe=kt*F,ue=kt*pn,Vt=Rt/(-F+pn),ye=Vt*-F;if(ht.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ye),Y.translateZ(Vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Kt=kt+Vt,se=be+Vt,$e=xe-ye,N=ue+(Rt-ye),b=Ce*be/se*Kt,nt=me*be/se*Kt;Y.projectionMatrix.makePerspective($e,N,b,nt,Kt,se),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Mt(Y,ht){ht===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ht.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ht=Y.near,yt=Y.far;E.texture!==null&&(E.depthNear>0&&(ht=E.depthNear),E.depthFar>0&&(yt=E.depthFar)),w.near=X.near=B.near=ht,w.far=X.far=B.far=yt,(G!==w.near||at!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,at=w.far),B.layers.mask=Y.layers.mask|2,X.layers.mask=Y.layers.mask|4,w.layers.mask=B.layers.mask|X.layers.mask;const Rt=Y.parent,wt=w.cameras;Mt(w,Rt);for(let qt=0;qt<wt.length;qt++)Mt(wt[qt],Rt);wt.length===2?q(w,B,X):w.projectionMatrix.copy(B.projectionMatrix),U(Y,w,Rt)};function U(Y,ht,yt){yt===null?Y.matrix.copy(ht.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ht.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ht.projectionMatrix),Y.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(Y){m=Y,x!==null&&(x.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(w)};let et=null;function xt(Y,ht){if(g=ht.getViewerPose(p||d),T=ht,g!==null){const yt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Rt=!1;yt.length!==w.cameras.length&&(w.cameras.length=0,Rt=!0);for(let kt=0;kt<yt.length;kt++){const be=yt[kt];let Ce=null;if(S!==null)Ce=S.getViewport(be);else{const F=_.getViewSubImage(x,be);Ce=F.viewport,kt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let me=D[kt];me===void 0&&(me=new hi,me.layers.enable(kt),me.viewport=new Je,D[kt]=me),me.matrix.fromArray(be.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(be.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),kt===0&&(w.matrix.copy(me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Rt===!0&&w.cameras.push(me)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const kt=_.getDepthInformation(yt[0]);kt&&kt.isValid&&kt.texture&&E.init(t,kt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const Rt=C[yt],wt=L[yt];Rt!==null&&wt!==void 0&&wt.update(Rt,ht,p||d)}et&&et(Y,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),T=null}const mt=new lv;mt.setAnimationLoop(xt),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}}const xs=new Ei,aA=new Ye;function sA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,nv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,O,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,C)):v.isMeshMatcapMaterial?(c(y,v),T(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),E(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,O,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=t.get(v),L=O.envMap,C=O.envMapRotation;L&&(y.envMap.value=L,xs.copy(C),xs.x*=-1,xs.y*=-1,xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),y.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(xs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,O,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const O=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function rA(r,t,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const C=L.program;s.uniformBlockBinding(O,C)}function p(O,L){let C=l[O.id];C===void 0&&(T(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",y));const H=L.program;s.updateUBOMapping(O,H);const z=t.render.frame;c[O.id]!==z&&(x(O),c[O.id]=z)}function g(O){const L=_();O.__bindingPointIndex=L;const C=r.createBuffer(),H=O.__size,z=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,H,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const L=l[O.id],C=O.uniforms,H=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,B=C.length;z<B;z++){const X=Array.isArray(C[z])?C[z]:[C[z]];for(let D=0,w=X.length;D<w;D++){const G=X[D];if(S(G,z,D,H)===!0){const at=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let lt=0;for(let ut=0;ut<J.length;ut++){const P=J[ut],K=E(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,at+lt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,lt),lt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,at,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(O,L,C,H){const z=O.value,B=L+"_"+C;if(H[B]===void 0)return typeof z=="number"||typeof z=="boolean"?H[B]=z:H[B]=z.clone(),!0;{const X=H[B];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return H[B]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(O){const L=O.uniforms;let C=0;const H=16;for(let B=0,X=L.length;B<X;B++){const D=Array.isArray(L[B])?L[B]:[L[B]];for(let w=0,G=D.length;w<G;w++){const at=D[w],J=Array.isArray(at.value)?at.value:[at.value];for(let lt=0,ut=J.length;lt<ut;lt++){const P=J[lt],K=E(P),q=C%H,Mt=q%K.boundary,U=q+Mt;C+=Mt,U!==0&&H-U<K.storage&&(C+=H-U),at.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=C,C+=K.storage}}}const z=C%H;return z>0&&(C+=H-z),O.__size=C,O.__cache={},this}function E(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const C=d.indexOf(L.__bindingPointIndex);d.splice(C,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}class oA{constructor(t={}){const{canvas:i=OS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=d;const T=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=ei;let z=0,B=0,X=null,D=-1,w=null;const G=new Je,at=new Je;let J=null;const lt=new pe(0);let ut=0,P=i.width,K=i.height,q=1,Mt=null,U=null;const et=new Je(0,0,P,K),xt=new Je(0,0,P,K);let mt=!1;const Y=new Pd;let ht=!1,yt=!1;const Rt=new Ye,wt=new Ye,qt=new Q,kt=new Je,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function me(){return X===null?q:1}let F=s;function pn(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",vt,!1),F===null){const j="webgl2";if(F=pn(j,R),F===null)throw pn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,ue,Vt,ye,Kt,se,$e,N,b,nt,dt,gt,ct,Pt,Ut,Gt,Xt,Et,It,jt,Zt,Ct,ae,k;function Lt(){xe=new _b(F),xe.init(),Ct=new $1(F,xe),ue=new ub(F,xe,t,Ct),Vt=new Q1(F,xe),ue.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),ye=new yb(F),Kt=new B1,se=new J1(F,xe,Vt,Kt,ue,Ct,ye),$e=new hb(C),N=new gb(C),b=new AM(F),ae=new lb(F,b),nt=new vb(F,b,ye,ae),dt=new Mb(F,nt,b,ye),It=new Sb(F,ue,se),Gt=new fb(Kt),gt=new z1(C,$e,N,xe,ue,ae,Gt),ct=new sA(C,Kt),Pt=new H1,Ut=new q1(xe),Et=new ob(C,$e,N,Vt,dt,S,m),Xt=new Z1(C,dt,ue),k=new rA(F,ye,ue,Vt),jt=new cb(F,xe,ye),Zt=new xb(F,xe,ye),ye.programs=gt.programs,C.capabilities=ue,C.extensions=xe,C.properties=Kt,C.renderLists=Pt,C.shadowMap=Xt,C.state=Vt,C.info=ye}Lt();const Tt=new iA(C,F);this.xr=Tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(P,K,!1))},this.getSize=function(R){return R.set(P,K)},this.setSize=function(R,j,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,K=j,i.width=Math.floor(R*q),i.height=Math.floor(j*q),rt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(P*q,K*q).floor()},this.setDrawingBufferSize=function(R,j,rt){P=R,K=j,q=rt,i.width=Math.floor(R*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,j,rt,ot){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,j,rt,ot),Vt.viewport(G.copy(et).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,j,rt,ot){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,j,rt,ot),Vt.scissor(at.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(R){Vt.setScissorTest(mt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,rt=!0){let ot=0;if(R){let Z=!1;if(X!==null){const bt=X.texture.format;Z=bt===Ld||bt===Ud||bt===Dd}if(Z){const bt=X.texture.type,Dt=bt===Oi||bt===bs||bt===Io||bt===zo||bt===wd||bt===Cd,Ot=Et.getClearColor(),Bt=Et.getClearAlpha(),te=Ot.r,Qt=Ot.g,Wt=Ot.b;Dt?(T[0]=te,T[1]=Qt,T[2]=Wt,T[3]=Bt,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=te,E[1]=Qt,E[2]=Wt,E[3]=Bt,F.clearBufferiv(F.COLOR,0,E))}else ot|=F.COLOR_BUFFER_BIT}j&&(ot|=F.DEPTH_BUFFER_BIT),rt&&(ot|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),Et.dispose(),Pt.dispose(),Ut.dispose(),Kt.dispose(),$e.dispose(),N.dispose(),dt.dispose(),ae.dispose(),k.dispose(),gt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",En),In.stop()};function zt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=ye.autoReset,j=Xt.enabled,rt=Xt.autoUpdate,ot=Xt.needsUpdate,Z=Xt.type;Lt(),ye.autoReset=R,Xt.enabled=j,Xt.autoUpdate=rt,Xt.needsUpdate=ot,Xt.type=Z}function vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const j=R.target;j.removeEventListener("dispose",Ft),ie(j)}function ie(R){Ne(R),Kt.remove(R)}function Ne(R){const j=Kt.get(R).programs;j!==void 0&&(j.forEach(function(rt){gt.releaseProgram(rt)}),R.isShaderMaterial&&gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,rt,ot,Z,bt){j===null&&(j=be);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Qa(R,j,rt,ot,Z);Vt.setMaterial(ot,Dt);let Bt=rt.index,te=1;if(ot.wireframe===!0){if(Bt=nt.getWireframeAttribute(rt),Bt===void 0)return;te=2}const Qt=rt.drawRange,Wt=rt.attributes.position;let fe=Qt.start*te,De=(Qt.start+Qt.count)*te;bt!==null&&(fe=Math.max(fe,bt.start*te),De=Math.min(De,(bt.start+bt.count)*te)),Bt!==null?(fe=Math.max(fe,0),De=Math.min(De,Bt.count)):Wt!=null&&(fe=Math.max(fe,0),De=Math.min(De,Wt.count));const ke=De-fe;if(ke<0||ke===1/0)return;ae.setup(Z,ot,Ot,rt,Bt);let Se,Me=jt;if(Bt!==null&&(Se=b.get(Bt),Me=Zt,Me.setIndex(Se)),Z.isMesh)ot.wireframe===!0?(Vt.setLineWidth(ot.wireframeLinewidth*me()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(Z.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Vt.setLineWidth(Jt*me()),Z.isLineSegments?Me.setMode(F.LINES):Z.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else Z.isPoints?Me.setMode(F.POINTS):Z.isSprite&&Me.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,Ze=Z._multiDrawCounts,Te=Z._multiDrawCount,wn=Bt?b.get(Bt).bytesPerElement:1,pa=Kt.get(ot).currentProgram.getUniforms();for(let Xe=0;Xe<Te;Xe++)pa.setValue(F,"_gl_DrawID",Xe),Me.render(Jt[Xe]/wn,Ze[Xe])}else if(Z.isInstancedMesh)Me.renderInstances(fe,ke,Z.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ze=Math.min(rt.instanceCount,Jt);Me.renderInstances(fe,ke,Ze)}else Me.render(fe,ke)};function Ae(R,j,rt){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,ha(R,j,rt),R.side=Ya,R.needsUpdate=!0,ha(R,j,rt),R.side=Ui):ha(R,j,rt)}this.compile=function(R,j,rt=null){rt===null&&(rt=R),v=Ut.get(rt),v.init(j),L.push(v),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ot=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Ot=bt[Dt];Ae(Ot,rt,Z),ot.add(Ot)}else Ae(bt,rt,Z),ot.add(bt)}),v=L.pop(),ot},this.compileAsync=function(R,j,rt=null){const ot=this.compile(R,j,rt);return new Promise(Z=>{function bt(){if(ot.forEach(function(Dt){Kt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){Z(R);return}setTimeout(bt,10)}xe.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Wn=null;function mn(R){Wn&&Wn(R)}function on(){In.stop()}function En(){In.start()}const In=new lv;In.setAnimationLoop(mn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(R){Wn=R,Tt.setAnimationLoop(R),R===null?In.stop():In.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",En),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(j),j=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,X),v=Ut.get(R,L.length),v.init(j),L.push(v),wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,ht=Gt.init(this.clippingPlanes,yt),y=Pt.get(R,O.length),y.init(),O.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Za(bt,j,-1/0,C.sortObjects)}Za(R,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Mt,U),Ce=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Ce&&Et.addToRenderList(y,R),this.info.render.frame++,ht===!0&&Gt.beginShadows();const rt=v.state.shadowsArray;Xt.render(rt,R,j),ht===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Z=y.transmissive;if(v.setupLights(),j.isArrayCamera){const bt=j.cameras;if(Z.length>0)for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];Yo(ot,Z,R,Bt)}Ce&&Et.render(R);for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];qo(y,R,Bt,Bt.viewport)}}else Z.length>0&&Yo(ot,Z,R,j),Ce&&Et.render(R),qo(y,R,j);X!==null&&B===0&&(se.updateMultisampleRenderTarget(X),se.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,j),ae.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],ht===!0&&Gt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Za(R,j,rt,ot){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){ot&&kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Dt=dt.update(R),Ot=R.material;Ot.visible&&y.push(R,Dt,Ot,rt,kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const Dt=dt.update(R),Ot=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),kt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),kt.copy(Dt.boundingSphere.center)),kt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const Bt=Dt.groups;for(let te=0,Qt=Bt.length;te<Qt;te++){const Wt=Bt[te],fe=Ot[Wt.materialIndex];fe&&fe.visible&&y.push(R,Dt,fe,rt,kt.z,Wt)}}else Ot.visible&&y.push(R,Dt,Ot,rt,kt.z,null)}}const bt=R.children;for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++)Za(bt[Dt],j,rt,ot)}function qo(R,j,rt,ot){const Z=R.opaque,bt=R.transmissive,Dt=R.transparent;v.setupLightsView(rt),ht===!0&&Gt.setGlobalState(C.clippingPlanes,rt),ot&&Vt.viewport(G.copy(ot)),Z.length>0&&Ka(Z,j,rt),bt.length>0&&Ka(bt,j,rt),Dt.length>0&&Ka(Dt,j,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Yo(R,j,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Rs(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Ho:Oi,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const bt=v.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||G;bt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);const Ot=C.getRenderTarget();C.setRenderTarget(bt),C.getClearColor(lt),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),Ce&&Et.render(rt);const Bt=C.toneMapping;C.toneMapping=qa;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),ht===!0&&Gt.setGlobalState(C.clippingPlanes,ot),Ka(R,rt,ot),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Wt=0,fe=j.length;Wt<fe;Wt++){const De=j[Wt],ke=De.object,Se=De.geometry,Me=De.material,Jt=De.group;if(Me.side===Ui&&ke.layers.test(ot.layers)){const Ze=Me.side;Me.side=kn,Me.needsUpdate=!0,fa(ke,rt,ot,Se,Me,Jt),Me.side=Ze,Me.needsUpdate=!0,Qt=!0}}Qt===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}C.setRenderTarget(Ot),C.setClearColor(lt,ut),te!==void 0&&(ot.viewport=te),C.toneMapping=Bt}function Ka(R,j,rt){const ot=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,bt=R.length;Z<bt;Z++){const Dt=R[Z],Ot=Dt.object,Bt=Dt.geometry,te=Dt.group;let Qt=Dt.material;Qt.allowOverride===!0&&ot!==null&&(Qt=ot),Ot.layers.test(rt.layers)&&fa(Ot,j,rt,Bt,Qt,te)}}function fa(R,j,rt,ot,Z,bt){R.onBeforeRender(C,j,rt,ot,Z,bt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,j,rt,ot,R,bt),Z.transparent===!0&&Z.side===Ui&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,C.renderBufferDirect(rt,j,ot,Z,R,bt),Z.side=Ya,Z.needsUpdate=!0,C.renderBufferDirect(rt,j,ot,Z,R,bt),Z.side=Ui):C.renderBufferDirect(rt,j,ot,Z,R,bt),R.onAfterRender(C,j,rt,ot,Z,bt)}function ha(R,j,rt){j.isScene!==!0&&(j=be);const ot=Kt.get(R),Z=v.state.lights,bt=v.state.shadowsArray,Dt=Z.state.version,Ot=gt.getParameters(R,Z.state,bt,j,rt),Bt=gt.getProgramCacheKey(Ot);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(R.isMeshStandardMaterial?N:$e).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Ft),te=new Map,ot.programs=te);let Qt=te.get(Bt);if(Qt!==void 0){if(ot.currentProgram===Qt&&ot.lightsStateVersion===Dt)return zi(R,Ot),Qt}else Ot.uniforms=gt.getUniforms(R),R.onBeforeCompile(Ot,C),Qt=gt.acquireProgram(Ot,Bt),te.set(Bt,Qt),ot.uniforms=Ot.uniforms;const Wt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),zi(R,Ot),ot.needsLights=nn(R),ot.lightsStateVersion=Dt,ot.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=Qt,ot.uniformsList=null,Qt}function Ii(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function zi(R,j){const rt=Kt.get(R);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Qa(R,j,rt,ot,Z){j.isScene!==!0&&(j=be),se.resetTextureUnits();const bt=j.fog,Dt=ot.isMeshStandardMaterial?j.environment:null,Ot=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Cr,Bt=(ot.isMeshStandardMaterial?N:$e).get(ot.envMap||Dt),te=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Wt=!!rt.morphAttributes.position,fe=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let ke=qa;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ke=C.toneMapping);const Se=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Me=Se!==void 0?Se.length:0,Jt=Kt.get(ot),Ze=v.state.lights;if(ht===!0&&(yt===!0||R!==w)){const gn=R===w&&ot.id===D;Gt.setState(ot,R,gn)}let Te=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ze.state.version||Jt.outputColorSpace!==Ot||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Bt||ot.fog===!0&&Jt.fog!==bt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==te||Jt.vertexTangents!==Qt||Jt.morphTargets!==Wt||Jt.morphNormals!==fe||Jt.morphColors!==De||Jt.toneMapping!==ke||Jt.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,Jt.__version=ot.version);let wn=Jt.currentProgram;Te===!0&&(wn=ha(ot,j,Z));let pa=!1,Xe=!1,Fi=!1;const Ge=wn.getUniforms(),Cn=Jt.uniforms;if(Vt.useProgram(wn.program)&&(pa=!0,Xe=!0,Fi=!0),ot.id!==D&&(D=ot.id,Xe=!0),pa||w!==R){Vt.buffers.depth.getReversed()?(Rt.copy(R.projectionMatrix),IS(Rt),zS(Rt),Ge.setValue(F,"projectionMatrix",Rt)):Ge.setValue(F,"projectionMatrix",R.projectionMatrix),Ge.setValue(F,"viewMatrix",R.matrixWorldInverse);const Tn=Ge.map.cameraPosition;Tn!==void 0&&Tn.setValue(F,qt.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&Ge.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Fi=!0)}if(Z.isSkinnedMesh){Ge.setOptional(F,Z,"bindMatrix"),Ge.setOptional(F,Z,"bindMatrixInverse");const gn=Z.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ge.setValue(F,"boneTexture",gn.boneTexture,se))}Z.isBatchedMesh&&(Ge.setOptional(F,Z,"batchingTexture"),Ge.setValue(F,"batchingTexture",Z._matricesTexture,se),Ge.setOptional(F,Z,"batchingIdTexture"),Ge.setValue(F,"batchingIdTexture",Z._indirectTexture,se),Ge.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(F,"batchingColorTexture",Z._colorsTexture,se));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&It.update(Z,rt,wn),(Xe||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Ge.setValue(F,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=Bt,Cn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),Xe&&(Ge.setValue(F,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&da(Cn,Fi),bt&&ot.fog===!0&&ct.refreshFogUniforms(Cn,bt),ct.refreshMaterialUniforms(Cn,ot,q,K,v.state.transmissionRenderTarget[R.id]),zc.upload(F,Ii(Jt),Cn,se)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(zc.upload(F,Ii(Jt),Cn,se),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(F,"center",Z.center),Ge.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(F,"normalMatrix",Z.normalMatrix),Ge.setValue(F,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const gn=ot.uniformsGroups;for(let Tn=0,Ti=gn.length;Tn<Ti;Tn++){const Hi=gn[Tn];k.update(Hi,wn),k.bind(Hi,wn)}}return wn}function da(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,j,rt){const ot=Kt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Kt.get(R.texture).__webglTexture=j,Kt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const rt=Kt.get(R);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const jo=F.createFramebuffer();this.setRenderTarget=function(R,j=0,rt=0){X=R,z=j,B=rt;let ot=!0,Z=null,bt=!1,Dt=!1;if(R){const Bt=Kt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(F.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Bt.__hasExternalTextures)se.rebindTextures(R,Kt.get(R.texture).__webglTexture,Kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Bt.__boundDepthTexture!==Wt){if(Wt!==null&&Kt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Qt=Kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[j])?Z=Qt[j][rt]:Z=Qt[j],bt=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Kt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[rt]:Z=Qt,G.copy(R.viewport),at.copy(R.scissor),J=R.scissorTest}else G.copy(et).multiplyScalar(q).floor(),at.copy(xt).multiplyScalar(q).floor(),J=mt;if(rt!==0&&(Z=jo),Vt.bindFramebuffer(F.FRAMEBUFFER,Z)&&ot&&Vt.drawBuffers(R,Z),Vt.viewport(G),Vt.scissor(at),Vt.setScissorTest(J),bt){const Bt=Kt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,rt)}else if(Dt){const Bt=Kt.get(R.texture),te=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,te)}else if(R!==null&&rt!==0){const Bt=Kt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,j,rt,ot,Z,bt,Dt,Ot=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Vt.bindFramebuffer(F.FRAMEBUFFER,Bt);try{const te=R.textures[Ot],Qt=te.format,Wt=te.type;if(!ue.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ot&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ot),F.readPixels(j,rt,ot,Z,Ct.convert(Qt),Ct.convert(Wt),bt))}finally{const te=X!==null?Kt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,j,rt,ot,Z,bt,Dt,Ot=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(j>=0&&j<=R.width-ot&&rt>=0&&rt<=R.height-Z){Vt.bindFramebuffer(F.FRAMEBUFFER,Bt);const te=R.textures[Ot],Qt=te.format,Wt=te.type;if(!ue.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ot),F.readPixels(j,rt,ot,Z,Ct.convert(Qt),Ct.convert(Wt),0);const De=X!==null?Kt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,De);const ke=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await PS(F,ke,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(fe),F.deleteSync(ke),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,rt=0){const ot=Math.pow(2,-rt),Z=Math.floor(R.image.width*ot),bt=Math.floor(R.image.height*ot),Dt=j!==null?j.x:0,Ot=j!==null?j.y:0;se.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Dt,Ot,Z,bt),Vt.unbindTexture()};const Zo=F.createFramebuffer(),Bi=F.createFramebuffer();this.copyTextureToTexture=function(R,j,rt=null,ot=null,Z=0,bt=null){bt===null&&(Z!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Dt,Ot,Bt,te,Qt,Wt,fe,De,ke;const Se=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,Qt=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Z);Dt=Math.floor(Se.width*ln),Ot=Math.floor(Se.height*ln),R.isDataArrayTexture?Bt=Se.depth:R.isData3DTexture?Bt=Math.floor(Se.depth*ln):Bt=1,te=0,Qt=0,Wt=0}ot!==null?(fe=ot.x,De=ot.y,ke=ot.z):(fe=0,De=0,ke=0);const Me=Ct.convert(j.format),Jt=Ct.convert(j.type);let Ze;j.isData3DTexture?(se.setTexture3D(j,0),Ze=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(se.setTexture2DArray(j,0),Ze=F.TEXTURE_2D_ARRAY):(se.setTexture2D(j,0),Ze=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),wn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pa=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),Fi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Ge=R.isDataArrayTexture||R.isData3DTexture,Cn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const ln=Kt.get(R),gn=Kt.get(j),Tn=Kt.get(ln.__renderTarget),Ti=Kt.get(gn.__renderTarget);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Hi=0;Hi<Bt;Hi++)Ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.get(R).__webglTexture,Z,Wt+Hi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.get(j).__webglTexture,bt,ke+Hi)),F.blitFramebuffer(te,Qt,Dt,Ot,fe,De,Dt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Kt.has(R)){const ln=Kt.get(R),gn=Kt.get(j);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,Zo),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi);for(let Tn=0;Tn<Bt;Tn++)Ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Z,Wt+Tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Z),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,bt,ke+Tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,bt),Z!==0?F.blitFramebuffer(te,Qt,Dt,Ot,fe,De,Dt,Ot,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(Ze,bt,fe,De,ke+Tn,te,Qt,Dt,Ot):F.copyTexSubImage2D(Ze,bt,fe,De,te,Qt,Dt,Ot);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ze,bt,fe,De,ke,Dt,Ot,Bt,Me,Jt,Se.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Ze,bt,fe,De,ke,Dt,Ot,Bt,Me,Se.data):F.texSubImage3D(Ze,bt,fe,De,ke,Dt,Ot,Bt,Me,Jt,Se):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,fe,De,Dt,Ot,Me,Jt,Se.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,fe,De,Se.width,Se.height,Me,Se.data):F.texSubImage2D(F.TEXTURE_2D,bt,fe,De,Dt,Ot,Me,Jt,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fi),bt===0&&j.generateMipmaps&&F.generateMipmap(Ze),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,rt=null,ot=null,Z=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,rt,ot,Z)},this.initRenderTarget=function(R){Kt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){z=0,B=0,X=null,Vt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const D0={type:"change"},Fd={type:"start"},dv={type:"end"},wc=new Wc,U0=new ka,lA=Math.cos(70*NS.DEG2RAD),fn=new Q,Vn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oh=1e-6;class cA extends TM{constructor(t,i=null){super(t,i),this.state=He.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new As,this._lastTargetPosition=new Q,this._quat=new As().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new a0,this._sphericalDelta=new a0,this._scale=1,this._panOffset=new Q,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new Q,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fA.bind(this),this._onPointerDown=uA.bind(this),this._onPointerUp=hA.bind(this),this._onContextMenu=xA.bind(this),this._onMouseWheel=mA.bind(this),this._onKeyDown=gA.bind(this),this._onTouchStart=_A.bind(this),this._onTouchMove=vA.bind(this),this._onMouseDown=dA.bind(this),this._onMouseMove=pA.bind(this),this._interceptControlDown=yA.bind(this),this._interceptControlUp=SA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(D0),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const h=fn.length();d=this._clampDistance(h*this._scale);const m=h-d;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new Q(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),d=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<lA?this.object.lookAt(this.target):(U0.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(U0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oh||this._lastTargetPosition.distanceToSquared(this.target)>Oh?(this.dispatchEvent(D0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let c=fn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,d=s.width,h=s.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(d,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function uA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function fA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function hA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dv),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function dA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=He.DOLLY;break;case Mr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}break;case Mr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Fd)}function pA(r){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function mA(r){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(r.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dv))}function gA(r){this.enabled!==!1&&this._handleKeyDown(r)}function _A(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=He.TOUCH_ROTATE;break;case yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=He.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Fd)}function vA(r){switch(this._trackPointer(r),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=He.NONE}}function xA(r){this.enabled!==!1&&r.preventDefault()}function yA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const MA=/^[og]\s*(.+)?/,EA=/^mtllib /,TA=/^usemtl /,bA=/^usemap /,L0=/\s+/,N0=new Q,Ph=new Q,O0=new Q,P0=new Q,fi=new Q,Cc=new pe;function AA(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const d=this._finalize(!1);d&&(d.inherited||d.groupCount<=0)&&this.materials.splice(d.index,1);const h={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:d!==void 0?d.smooth:this.smooth,groupStart:d!==void 0?d.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(h),h},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let d=this.materials.length-1;d>=0;d--)this.materials[d].groupCount<=0&&this.materials.splice(d,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},s&&s.name&&typeof s.clone=="function"){const l=s.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseNormalIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseUVIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/2)*2},addVertex:function(t,i,s){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,s){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addFaceNormal:function(t,i,s){const l=this.vertices,c=this.object.geometry.normals;N0.fromArray(l,t),Ph.fromArray(l,i),O0.fromArray(l,s),fi.subVectors(O0,Ph),P0.subVectors(N0,Ph),fi.cross(P0),fi.normalize(),c.push(fi.x,fi.y,fi.z),c.push(fi.x,fi.y,fi.z),c.push(fi.x,fi.y,fi.z)},addColor:function(t,i,s){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[s]!==void 0&&c.push(l[s+0],l[s+1],l[s+2])},addUV:function(t,i,s){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[s+0],l[s+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,s,l,c,d,h,m,p){const g=this.vertices.length;let _=this.parseVertexIndex(t,g),x=this.parseVertexIndex(i,g),S=this.parseVertexIndex(s,g);if(this.addVertex(_,x,S),this.addColor(_,x,S),h!==void 0&&h!==""){const T=this.normals.length;_=this.parseNormalIndex(h,T),x=this.parseNormalIndex(m,T),S=this.parseNormalIndex(p,T),this.addNormal(_,x,S)}else this.addFaceNormal(_,x,S);if(l!==void 0&&l!==""){const T=this.uvs.length;_=this.parseUVIndex(l,T),x=this.parseUVIndex(c,T),S=this.parseUVIndex(d,T),this.addUV(_,x,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let s=0,l=t.length;s<l;s++){const c=this.parseVertexIndex(t[s],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const s=this.vertices.length,l=this.uvs.length;for(let c=0,d=t.length;c<d;c++)this.addVertexLine(this.parseVertexIndex(t[c],s));for(let c=0,d=i.length;c<d;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return r.startObject("",!1),r}class RA extends zd{constructor(t){super(t),this.materials=null}load(t,i,s,l){const c=this,d=new vM(this.manager);d.setPath(this.path),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(h){try{i(c.parse(h))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new AA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const s=t.split(`
`);let l=[];for(let h=0,m=s.length;h<m;h++){const p=s[h].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(L0);switch(_[0]){case"v":i.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Cc.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),ei),i.colors.push(Cc.r,Cc.g,Cc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":i.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const x=p.slice(1).trim().split(L0),S=[];for(let E=0,y=x.length;E<y;E++){const v=x[E];if(v.length>0){const O=v.split("/");S.push(O)}}const T=S[0];for(let E=1,y=S.length-1;E<y;E++){const v=S[E],O=S[E+1];i.addFace(T[0],v[0],O[0],T[1],v[1],O[1],T[2],v[2],O[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let x=[];const S=[];if(p.indexOf("/")===-1)x=_;else for(let T=0,E=_.length;T<E;T++){const y=_[T].split("/");y[0]!==""&&x.push(y[0]),y[1]!==""&&S.push(y[1])}i.addLineGeometry(x,S)}else if(g==="p"){const x=p.slice(1).trim().split(" ");i.addPointGeometry(x)}else if((l=MA.exec(p))!==null){const _=(" "+l[0].slice(1).trim()).slice(1);i.startObject(_)}else if(TA.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(EA.test(p))i.materialLibraries.push(p.substring(7).trim());else if(bA.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(l=p.split(" "),l.length>1){const x=l[1].trim().toLowerCase();i.object.smooth=x!=="0"&&x!=="off"}else i.object.smooth=!0;const _=i.object.currentMaterial();_&&(_.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const c=new No;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let h=0,m=i.objects.length;h<m;h++){const p=i.objects[h],g=p.geometry,_=p.materials,x=g.type==="Line",S=g.type==="Points";let T=!1;if(g.vertices.length===0)continue;const E=new di;E.setAttribute("position",new Sn(g.vertices,3)),g.normals.length>0&&E.setAttribute("normal",new Sn(g.normals,3)),g.colors.length>0&&(T=!0,E.setAttribute("color",new Sn(g.colors,3))),g.hasUVIndices===!0&&E.setAttribute("uv",new Sn(g.uvs,2));const y=[];for(let O=0,L=_.length;O<L;O++){const C=_[O],H=C.name+"_"+C.smooth+"_"+T;let z=i.materials[H];if(this.materials!==null){if(z=this.materials.create(C.name),x&&z&&!(z instanceof Ic)){const B=new Ic;Pi.prototype.copy.call(B,z),B.color.copy(z.color),z=B}else if(S&&z&&!(z instanceof Oo)){const B=new Oo({size:10,sizeAttenuation:!1});Pi.prototype.copy.call(B,z),B.color.copy(z.color),B.map=z.map,z=B}}z===void 0&&(x?z=new Ic:S?z=new Oo({size:1,sizeAttenuation:!1}):z=new hM,z.name=C.name,z.flatShading=!C.smooth,z.vertexColors=T,i.materials[H]=z),y.push(z)}let v;if(y.length>1){for(let O=0,L=_.length;O<L;O++){const C=_[O];E.addGroup(C.groupStart,C.groupCount,O)}x?v=new Q_(E,y):S?v=new Ah(E,y):v=new ni(E,y)}else x?v=new Q_(E,y[0]):S?v=new Ah(E,y[0]):v=new ni(E,y[0]);v.name=p.name,c.add(v)}else if(i.vertices.length>0){const h=new Oo({size:1,sizeAttenuation:!1}),m=new di;m.setAttribute("position",new Sn(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new Sn(i.colors,3)),h.vertexColors=!0);const p=new Ah(m,h);c.add(p)}return c}}const wA=({config:r,onStringHeightsUpdate:t})=>{const i=Le.useRef(),s=Le.useRef(new lM),l=Le.useRef(null),c=Le.useRef(),d=Le.useRef(),h=Le.useRef([]),m=Le.useRef([]);Le.useRef([]),Le.useEffect(()=>{const x=i.current,S=s.current;S.background=new pe(13092807);const T=new hi(75,x.clientWidth/x.clientHeight,.1,1e3);T.position.set(0,100,300),d.current=T;const E=new oA({antialias:!0});E.setSize(x.clientWidth,x.clientHeight),c.current=E,x.appendChild(E.domElement);const y=new MM(16777215,.4),v=new SM(16777215,1);v.position.set(10,10,10),S.add(y,v);const O=new cA(T,E.domElement);O.enableDamping=!0,O.dampingFactor=.05,O.target.set(0,100,0);const L=()=>{requestAnimationFrame(L),O.update(),E.render(S,T)};return L(),new RA().load("/configurator/models/myModel.obj",H=>{l.current=H,p()}),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),x.removeChild(E.domElement),g()}},[]),Le.useEffect(()=>{l.current&&p()},[r]);const p=()=>{const x=[],S=s.current,T=l.current.clone();T.scale.set(1,1,1),S.children=S.children.filter(mt=>{var Y,ht,yt;return!((Y=mt.userData)!=null&&Y.isPendant)&&!((ht=mt.userData)!=null&&ht.isString)&&!((yt=mt.userData)!=null&&yt.isSurface)}),h.current.forEach(mt=>S.remove(mt)),h.current=[],g();const{rows:E,cols:y,spacing:v,pattern:O,surfaceHeight:L,lowest:C,highest:H,baseOffset:z,surfaceLength:B,surfaceWidth:X}=r,D=Number(E),w=Number(y),G=Number(C),at=Number(H),J=Math.min(G,at),lt=Math.max(G,at);let ut=B,P=X;P===0&&ut===0&&(P=(w-1)*v+Number(z||0),ut=(D-1)*v+Number(z||0));const K=-((w-1)/2)*v,q=-((D-1)/2)*v,Mt=(D-1)/2,U=(w-1)/2,et=Math.sqrt(Mt*Mt+U*U);for(let mt=0;mt<D;mt++)for(let Y=0;Y<w;Y++){const ht=mt-Mt,yt=Y-U,Rt=Math.sqrt(ht*ht+yt*yt),wt=Rt/et;let qt=J;switch(O){case"flat":qt=J;break;case"dome":qt=J+(lt-J)*(1-wt)**2;break;case"reverseDome":qt=J+(lt-J)*wt**2;break;case"wave":const me=(J+lt)/2,F=(lt-J)/2;qt=me+(Math.sin(Y*.5)+Math.cos(mt*.5))*F*.5;break;case"ripple":qt=J+(lt-J)*(Math.sin(Rt*1.5)*.5+.5);break;case"spiral":const xe=(Math.atan2(ht,yt)+Math.PI)/(2*Math.PI);qt=J+(lt-J)*xe;break;case"diagonal":const ue=(mt+Y)/(D+w-2);qt=J+(lt-J)*ue;break;case"checkerboard":qt=(mt+Y)%2===0?J:lt;break;case"random":qt=J+Math.random()*(lt-J);break;default:qt=J}qt=Math.floor(qt);const kt=T.clone();kt.position.set(K+Y*v,qt,q+mt*v),kt.rotation.set(0,Math.random()*Math.PI*2,0),kt.userData.isPendant=!0,S.add(kt);const be=L-qt,Ce=new ni(new Id(.1,.1,be,8),new t0({color:2697513}));Ce.position.set(kt.position.x,qt+be/2,kt.position.z),Ce.userData.isString=!0,S.add(Ce),x.push({x:q+mt*v,y:K+Y*v,row:mt,col:Y,pendantY:qt,stringHeight:be})}t&&t(x);const xt=new ni(new Wo(P,ut),new t0({color:5592405,side:Ui}));xt.rotation.x=-Math.PI/2,xt.position.set(0,L,0),xt.userData.isSurface=!0,S.add(xt)};function g(){m.current.forEach(x=>{x&&x.parentNode&&x.parentNode.removeChild(x)}),m.current=[]}const _=()=>{const x=i.current,S=c.current,T=d.current;T.aspect=x.clientWidth/x.clientHeight,T.updateProjectionMatrix(),S.setSize(x.clientWidth,x.clientHeight)};return Le.useEffect(()=>(window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)),[]),St.jsx("div",{ref:i,style:{flex:1}})};function CA({children:r,onClick:t,modalState:i}){return i?St.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ",children:St.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-xl relative",children:[St.jsx("div",{className:"absolute top-[-10px] right-[-10px] rounded flex justify-center items-center text-white w-7 h-7 bg-red-500",onClick:t,children:St.jsx(Fy,{})}),r]})}):null}function DA({stringHeights:r,surface:t}){const i=Le.useRef(null);Le.useEffect(()=>{if(!r||r.length===0||!t)return;const h=Number(t.width),m=Number(t.length);if(!h||!m)return;const p=i.current,g=p.getContext("2d"),_=80,x=900,S=Math.min(x/m,x/h),T=m*S,E=h*S;p.width=T+_*2,p.height=E+_*2,g.clearRect(0,0,p.width,p.height),g.translate(_,_),g.strokeStyle="#222",g.lineWidth=2,g.strokeRect(0,0,T,E),g.fillStyle="#000",g.font="12px Arial",r.forEach(y=>{const v=y.y+m/2,O=y.x+h/2,L=v*S,C=O*S;g.beginPath(),g.arc(L,C,4,0,Math.PI*2),g.fill(),g.fillText(`${y.row}-${y.col}`,L-9,C-7)}),s(g,0,E+30,T,`${m} mm`),l(g,T+30,0,E,`${h} mm`)},[r,t]);function s(h,m,p,g,_){h.strokeStyle="#444",h.lineWidth=1,h.beginPath(),h.moveTo(m,p),h.lineTo(m,p+20),h.moveTo(m+g,p),h.lineTo(m+g,p+20),h.stroke(),h.beginPath(),h.moveTo(m,p+10),h.lineTo(m+g,p+10),h.stroke(),c(h,m,p+10,1),c(h,m+g,p+10,-1),h.font="14px Arial",h.fillStyle="#000",h.textAlign="center",h.fillText(_,m+g/2,p+35)}function l(h,m,p,g,_){h.strokeStyle="#444",h.lineWidth=1,h.beginPath(),h.moveTo(m,p),h.lineTo(m+20,p),h.moveTo(m,p+g),h.lineTo(m+20,p+g),h.stroke(),h.beginPath(),h.moveTo(m+10,p),h.lineTo(m+10,p+g),h.stroke(),d(h,m+10,p,1),d(h,m+10,p+g,-1),h.save(),h.translate(m+35,p+g/2),h.rotate(-Math.PI/2),h.font="14px Arial",h.fillStyle="#000",h.textAlign="center",h.fillText(_,0,0),h.restore()}function c(h,m,p,g){h.beginPath(),h.moveTo(m,p),h.lineTo(m+6*g,p-6),h.lineTo(m+6*g,p+6),h.closePath(),h.fillStyle="#444",h.fill()}function d(h,m,p,g){h.beginPath(),h.moveTo(m,p),h.lineTo(m-6,p+6*g),h.lineTo(m+6,p+6*g),h.closePath(),h.fillStyle="#444",h.fill()}return St.jsx("div",{style:{textAlign:"center"},children:St.jsx("canvas",{className:"w-full",ref:i,style:{border:"1px solid #ccc",background:"#fff"}})})}function UA(){const[r,t]=Le.useState(""),[i,s]=Le.useState(!1),[l,c]=Le.useState(!0);function d(){s(E=>!E)}function h(){c(E=>!E)}const m=()=>{const E=_.surfaceLength===0?(_.cols-1)*_.spacing+parseInt(_.baseOffset||0,10):_.surfaceLength,y=_.surfaceWidth===0?(_.rows-1)*_.spacing+parseInt(_.baseOffset||0,10):_.surfaceWidth,v={stringHeights:p,surface:{length:E,width:y,height:_.surfaceHeight,baseOffset:_.baseOffset},pattern:_.pattern,pendantType:"Your pendant type here",finishes:"Your finishes here",objFile:"/configurator/models/myModel.obj"};d(),t(v)},[p,g]=Le.useState([]),[_,x]=Le.useState({rows:9,cols:5,pattern:"wave",spacing:20,surfaceHeight:170,surfaceLength:0,surfaceWidth:0,baseOffset:10,lowest:0,highest:150}),S=E=>{const{name:y,value:v}=E.target;x(y==="pattern"?O=>({...O,[y]:v}):O=>({...O,[y]:parseInt(v,10)})),y==="surfaceHeight"&&(v<_.highest||v<_.lowest)&&x(O=>({...O,highest:v,lowest:v}))},T=()=>{x(E=>({...E,version:E.version+1}))};return St.jsxs("div",{className:nc.wrapper,children:[St.jsxs("div",{className:"flex flex-col justify-start absolute h-screen bg-white",children:[St.jsx("div",{className:"text-right p-4",children:St.jsx("span",{onClick:h,children:"×"})}),St.jsxs("div",{className:`${nc.panel} ${l?"opacity-1 w-[290px] transition-[opacity] delay-200":"opacity-0 w-[2px]"} transition-[width] duration-500 scrollbar-hide`,children:[St.jsxs("label",{children:["Pattern:",St.jsx("select",{name:"pattern",value:_.pattern,onChange:S,children:["flat","dome","reverseDome","wave","ripple","spiral","diagonal","checkerboard","random"].map(E=>St.jsx("option",{value:E,children:E},E))})]}),[{labelName:"Rows",name:"rows",max:20,min:1,val:0},{labelName:"Column",name:"cols",max:20,min:1,val:0},{labelName:"Spacing",name:"spacing",max:100,min:0,val:0},{labelName:"Base Plate Length",name:"surfaceLength",max:999,min:0,val:0},{labelName:"Base Plate Width",name:"surfaceWidth",max:999,min:0,val:0},{labelName:"Base Plate From Floor",name:"surfaceHeight",max:999,min:0,val:0},{labelName:"Base Plate Offset",name:"baseOffset",max:30,min:0,val:0},{labelName:"Lowest From the Ground",name:"lowest",max:999,min:0,val:0},{labelName:"Highest From the Ground",name:"highest",max:999,min:0,val:0}].map(({name:E,max:y,min:v,labelName:O})=>{const L=!(E==="baseOffset"&&_.surfaceLength==0)||!(E==="baseOffset"&&_.surfaceWidth==0),C=E==="surfaceLength"&&_.surfaceLength==0||E==="surfaceWidth"&&_.surfaceWidth==0;return(E==="lowest"||E==="highest")&&(y=_.surfaceHeight),St.jsxs("div",{style:E==="baseOffset"?L?{opacity:0,maxHeight:0,overflow:"hidden",transition:"opacity 1s ease, max-height 0.5s ease 0.3s"}:{opacity:1,maxHeight:"500px",overflow:"hidden",transition:"opacity 1s ease 0.5s, max-height 2s ease 0.5s"}:void 0,children:[St.jsxs("label",{style:{...C?{color:"#ddd"}:{},...E==="surfaceLength"||E==="lowest"?{marginTop:"70px"}:{}},children:[O,":"]},E),St.jsxs("div",{className:nc.inputsDiv,children:[St.jsx("input",{type:"range",name:E,value:_[E],onChange:S,min:v,max:y,className:C?nc.inactive:""}),St.jsx("input",{type:"number",name:E,value:_[E],onChange:S,min:v,max:y,style:C?{color:"#ddd"}:{}})]})]})}),St.jsx("div",{}),St.jsx("button",{style:_.pattern==="random"?{opacity:1,transition:"opacity 0.7s ease"}:{opacity:0,transition:"opacity 0.7s ease"},onClick:T,children:"Generate"})]}),St.jsx("button",{className:`mx-auto mt-auto mb-10
            ${l?"opacity-1 w-3/4 transition-all delay-500":"opacity-0 w-0"}`,onClick:m,children:"Generate Data"})]}),St.jsx(wA,{config:_,onStringHeightsUpdate:g}),St.jsx("div",{children:St.jsx(CA,{onClick:d,modalState:i,children:St.jsx("div",{className:"overflow-y-auto max-h-[80vh] w-[1500px] scrollbar-hide",children:r?St.jsxs("div",{children:[St.jsx("h1",{className:"text-3xl",children:"LOREM IPSUM"}),St.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dicta fugiat eaque iusto nam hic possimus. "}),St.jsx("div",{className:"w-[50%] m-auto",style:{transform:"rotate(90deg)"},children:St.jsx(DA,{stringHeights:r.stringHeights,surface:r.surface,config:_})}),St.jsxs("div",{className:"px-4",children:[St.jsx("h1",{children:"Technical Specs"}),St.jsxs("table",{className:"w-full text-left border-collapse",children:[St.jsx("thead",{children:St.jsxs("tr",{className:"border-b",children:[St.jsx("th",{className:"py-2",children:"POSITION"}),St.jsx("th",{className:"py-2",children:"LIGHT TYPE"}),St.jsx("th",{className:"py-2",children:"COLOR"}),St.jsx("th",{className:"py-2",children:"FITTING COLOR"}),St.jsx("th",{className:"py-2",children:"CABLE LENGTH"}),St.jsx("th",{className:"py-2",children:"ITEMCODE"})]})}),St.jsx("tbody",{className:"divide-y",children:r.stringHeights.map((E,y)=>St.jsxs("tr",{className:"border-b",children:[St.jsx("td",{className:"py-2",children:`${E.row}-${E.col}`}),St.jsx("td",{className:"py-2"}),St.jsx("td",{className:"py-2"}),St.jsx("td",{className:"py-2"}),St.jsx("td",{className:"py-2",children:`${E.stringHeight} cm`}),St.jsx("td",{className:"py-2"})]},y))})]})]})]}):""})})})]})}const LA="_lightDet_q2jkn_1",NA={lightDet:LA};function OA(){return St.jsxs("div",{className:NA.lightDet,children:[St.jsx("h1",{children:"Under Construction"}),St.jsx("p",{children:"Material/Finishes"})]})}function PA(){const[r,t]=Le.useState(!1),[i,s]=Le.useState(0),[l,c]=Le.useState(0),[d,h]=Le.useState(!1),m=[{id:"c1",name:"Crystal 1",images:["/litecomposer//crystals/crystal1/crystal1.jpg","/litecomposer//crystals/crystal1/mock 1.jpg","/litecomposer//crystals/crystal1/mock 2.jpg","/litecomposer//crystals/crystal1/mock 3.jpg","/litecomposer//crystals/crystal1/mock 4.jpg","/litecomposer//crystals/crystal1/mock 5.jpg"]},{id:"c2",name:"Crystal 2",images:["/litecomposer//crystals/crystal 2/crystal2.jpg","/litecomposer//crystals/crystal 2/mock 1.jpg","/litecomposer//crystals/crystal 2/mock 2.jpg","/litecomposer//crystals/crystal 2/mock 3.jpg","/litecomposer//crystals/crystal 2/mock 4.jpg","/litecomposer//crystals/crystal 2/mock 5.jpg"]},{id:"c3",name:"Crystal 3",images:["/litecomposer//crystals/crystal 3/crystal3.jpg","/litecomposer//crystals/crystal 3/mock 1.jpg","/litecomposer//crystals/crystal 3/mock 2.jpg","/litecomposer//crystals/crystal 3/mock 3.jpg","/litecomposer//crystals/crystal 3/mock 4.jpg","/litecomposer//crystals/crystal 3/mock 5.jpg"]}],p=x=>{s(x),c(0),t(!0)},g=()=>{h(!0),setTimeout(()=>{const x=m[i].images;c(S=>(S+1)%x.length),h(!1)},200)},_=()=>{h(!0),setTimeout(()=>{const x=m[i].images;c(S=>S===0?x.length-1:S-1),h(!1)},200)};return St.jsxs(St.Fragment,{children:[St.jsx("div",{className:"flex flex-wrap justify-evenly items-center w-full h-dvh overflow-auto gap-y-10 p-10",children:m.map((x,S)=>St.jsxs("div",{className:`overflow-hidden rounded-3xl bg-gray-700 w-[30%] \r
                       hover:scale-105 transition duration-500 hover:shadow-xl relative group`,children:[St.jsxs("div",{className:`absolute w-full h-full bg-black/70 backdrop-blur-sm \r
                            flex flex-col justify-center items-center \r
                            group-hover:opacity-100 opacity-0 duration-300 transition-all`,children:[St.jsx("button",{className:`bg-black w-1/4 shadow-white/10 shadow-xl  text-white backdrop-blur-md hover:bg-[#0d0d0d]\r
                                 px-4 py-2 rounded-full mb-3 transition`,children:"SELECT"}),St.jsx("button",{onClick:()=>p(S),className:`bg-black w-1/4 shadow-white/10 shadow-xl  text-white backdrop-blur-md hover:bg-[#0d0d0d]\r
                                 px-4 py-2 rounded-full mb-3 transition`,children:"MORE"})]}),St.jsx("img",{src:x.images[0],className:"w-full"})]},x.id+S))}),r&&St.jsx("div",{className:`fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 \r
                     animate-fadeIn`,children:St.jsxs("div",{className:`relative\r
                       shadow-2xl\r
                       animate-slideUp`,children:[St.jsx("button",{onClick:()=>t(!1),className:"absolute top-[-40px] right-[-50px] bg-transparent text-white text-3xl hover:scale-110 transition",children:"✖"}),St.jsx("div",{className:`h-[700px] flex justify-center items-center 
                         overflow-hidden rounded-2xl transition-opacity duration-300
                         ${d?"opacity-0":"opacity-100"}`,children:St.jsx("img",{src:m[i].images[l],className:"w-full h-full object-contain"})}),St.jsxs("div",{className:`flex justify-between absolute \r
            z-50 w-[120%] transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 text-[25px]`,children:[St.jsx("button",{onClick:_,className:"text-white bg-transparent w-10",children:"⟨"}),St.jsx("button",{onClick:g,className:"text-white bg-transparent w-10",children:"⟩"})]})]})}),St.jsx("style",{children:`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        `})]})}function IA(){const[r,t]=Le.useState("type");function i(c){t(c)}let s=null;const l=r;return l==="type"?s=St.jsx(PA,{}):l==="detail"?s=St.jsx(OA,{}):l==="composition"?s=St.jsx(UA,{}):s=St.jsx("p",{children:"Please select a light option."}),St.jsx(St.Fragment,{children:St.jsxs("div",{children:[St.jsx(Ay,{handleTabClick:i}),St.jsxs("div",{className:"main-container",children:[St.jsx("div",{className:"side-bar ",children:St.jsx(Hy,{handleTabClick:i,btnClicked:r})}),St.jsx("div",{className:"w-full ",children:s})]})]})})}by.createRoot(document.getElementById("root")).render(St.jsx(Le.StrictMode,{children:St.jsx(IA,{})}));
