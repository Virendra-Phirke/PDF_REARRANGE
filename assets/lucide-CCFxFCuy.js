import{g as Z}from"./pdf-lib-DeL605cc.js";var M={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function ee(){if(W)return r;W=1;var y=Symbol.for("react.element"),R=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),E=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),$=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),_=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,T={};function d(e,t,n){this.props=e,this.context=t,this.refs=T,this.updater=n||D}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=d.prototype;function L(e,t,n){this.props=e,this.context=t,this.refs=T,this.updater=n||D}var O=L.prototype=new U;O.constructor=L,F(O,d.prototype),O.isPureReactComponent=!0;var V=Array.isArray,N=Object.prototype.hasOwnProperty,q={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function H(e,t,n){var u,o={},c=null,l=null;if(t!=null)for(u in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(c=""+t.key),t)N.call(t,u)&&!G.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)o[u]===void 0&&(o[u]=s[u]);return{$$typeof:y,type:e,key:c,ref:l,props:o,_owner:q.current}}function J(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function P(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var z=/\/+/g;function I(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function x(e,t,n,u,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case y:case R:l=!0}}if(l)return l=e,o=o(l),e=u===""?"."+I(l,0):u,V(o)?(n="",e!=null&&(n=e.replace(z,"$&/")+"/"),x(o,t,n,"",function(f){return f})):o!=null&&(P(o)&&(o=J(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(z,"$&/")+"/")+e)),t.push(o)),1;if(l=0,u=u===""?".":u+":",V(e))for(var s=0;s<e.length;s++){c=e[s];var i=u+I(c,s);l+=x(c,t,n,i,o)}else if(i=A(e),typeof i=="function")for(e=i.call(e),s=0;!(c=e.next()).done;)c=c.value,i=u+I(c,s++),l+=x(c,t,n,i,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function w(e,t,n){if(e==null)return e;var u=[],o=0;return x(e,u,"","",function(c){return t.call(n,c,o++)}),u}function X(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},S={transition:null},Y={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:S,ReactCurrentOwner:q};function B(){throw Error("act(...) is not supported in production builds of React.")}return r.Children={map:w,forEach:function(e,t,n){w(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return w(e,function(){t++}),t},toArray:function(e){return w(e,function(t){return t})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=d,r.Fragment=m,r.Profiler=h,r.PureComponent=L,r.StrictMode=g,r.Suspense=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,r.act=B,r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=F({},e.props),o=e.key,c=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,l=q.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)N.call(t,i)&&!G.hasOwnProperty(i)&&(u[i]=t[i]===void 0&&s!==void 0?s[i]:t[i])}var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];u.children=s}return{$$typeof:y,type:e.type,key:o,ref:c,props:u,_owner:l}},r.createContext=function(e){return e={$$typeof:E,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k,_context:e},e.Consumer=e},r.createElement=H,r.createFactory=function(e){var t=H.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:b,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:j,_payload:{_status:-1,_result:e},_init:X}},r.memo=function(e,t){return{$$typeof:$,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=S.transition;S.transition={};try{e()}finally{S.transition=t}},r.unstable_act=B,r.useCallback=function(e,t){return a.current.useCallback(e,t)},r.useContext=function(e){return a.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return a.current.useDeferredValue(e)},r.useEffect=function(e,t){return a.current.useEffect(e,t)},r.useId=function(){return a.current.useId()},r.useImperativeHandle=function(e,t,n){return a.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return a.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return a.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return a.current.useMemo(e,t)},r.useReducer=function(e,t,n){return a.current.useReducer(e,t,n)},r.useRef=function(e){return a.current.useRef(e)},r.useState=function(e){return a.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return a.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return a.current.useTransition()},r.version="18.3.1",r}var K;function te(){return K||(K=1,M.exports=ee()),M.exports}var C=te();const ue=Z(C);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),p=(y,R)=>{const m=C.forwardRef(({color:g="currentColor",size:h=24,strokeWidth:k=2,absoluteStrokeWidth:E,className:b="",children:v,...$},j)=>C.createElement("svg",{ref:j,...re,width:h,height:h,stroke:g,strokeWidth:E?Number(k)*24/Number(h):k,className:["lucide",`lucide-${ne(y)}`,b].join(" "),...$},[...R.map(([_,A])=>C.createElement(_,A)),...Array.isArray(v)?v:[v]]));return m.displayName=`${y}`,m};/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=p("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=p("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=p("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=p("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=p("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=p("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.296.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=p("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);export{ie as A,ce as C,se as D,le as F,ae as G,fe as L,ue as R,ye as U,C as a,te as r};
