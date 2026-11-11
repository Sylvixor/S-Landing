(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Rp(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Ou={exports:{}},ao={},Bu={exports:{}},Qe={};var sh;function Bg(){if(sh)return Qe;sh=1;var u=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(z,I,te){this.props=z,this.context=I,this.refs=y,this.updater=te||M}v.prototype.isReactComponent={},v.prototype.setState=function(z,I){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,I,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=v.prototype;function D(z,I,te){this.props=z,this.context=I,this.refs=y,this.updater=te||M}var L=D.prototype=new C;L.constructor=D,T(L,v.prototype),L.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function w(z,I,te){var de,G={},ve=null,ye=null;if(I!=null)for(de in I.ref!==void 0&&(ye=I.ref),I.key!==void 0&&(ve=""+I.key),I)k.call(I,de)&&!H.hasOwnProperty(de)&&(G[de]=I[de]);var xe=arguments.length-2;if(xe===1)G.children=te;else if(1<xe){for(var Se=Array(xe),Ie=0;Ie<xe;Ie++)Se[Ie]=arguments[Ie+2];G.children=Se}if(z&&z.defaultProps)for(de in xe=z.defaultProps,xe)G[de]===void 0&&(G[de]=xe[de]);return{$$typeof:u,type:z,key:ve,ref:ye,props:G,_owner:O.current}}function N(z,I){return{$$typeof:u,type:z.type,key:I,ref:z.ref,props:z.props,_owner:z._owner}}function W(z){return typeof z=="object"&&z!==null&&z.$$typeof===u}function ce(z){var I={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(te){return I[te]})}var ae=/\/+/g;function Z(z,I){return typeof z=="object"&&z!==null&&z.key!=null?ce(""+z.key):I.toString(36)}function j(z,I,te,de,G){var ve=typeof z;(ve==="undefined"||ve==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(ve){case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case u:case e:ye=!0}}if(ye)return ye=z,G=G(ye),z=de===""?"."+Z(ye,0):de,b(G)?(te="",z!=null&&(te=z.replace(ae,"$&/")+"/"),j(G,I,te,"",function(Ie){return Ie})):G!=null&&(W(G)&&(G=N(G,te+(!G.key||ye&&ye.key===G.key?"":(""+G.key).replace(ae,"$&/")+"/")+z)),I.push(G)),1;if(ye=0,de=de===""?".":de+":",b(z))for(var xe=0;xe<z.length;xe++){ve=z[xe];var Se=de+Z(ve,xe);ye+=j(ve,I,te,Se,G)}else if(Se=g(z),typeof Se=="function")for(z=Se.call(z),xe=0;!(ve=z.next()).done;)ve=ve.value,Se=de+Z(ve,xe++),ye+=j(ve,I,te,Se,G);else if(ve==="object")throw I=String(z),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ye}function ie(z,I,te){if(z==null)return z;var de=[],G=0;return j(z,de,"","",function(ve){return I.call(te,ve,G++)}),de}function fe(z){if(z._status===-1){var I=z._result;I=I(),I.then(function(te){(z._status===0||z._status===-1)&&(z._status=1,z._result=te)},function(te){(z._status===0||z._status===-1)&&(z._status=2,z._result=te)}),z._status===-1&&(z._status=0,z._result=I)}if(z._status===1)return z._result.default;throw z._result}var le={current:null},V={transition:null},J={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function q(){throw Error("act(...) is not supported in production builds of React.")}return Qe.Children={map:ie,forEach:function(z,I,te){ie(z,function(){I.apply(this,arguments)},te)},count:function(z){var I=0;return ie(z,function(){I++}),I},toArray:function(z){return ie(z,function(I){return I})||[]},only:function(z){if(!W(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Qe.Component=v,Qe.Fragment=n,Qe.Profiler=o,Qe.PureComponent=D,Qe.StrictMode=s,Qe.Suspense=m,Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Qe.act=q,Qe.cloneElement=function(z,I,te){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var de=T({},z.props),G=z.key,ve=z.ref,ye=z._owner;if(I!=null){if(I.ref!==void 0&&(ve=I.ref,ye=O.current),I.key!==void 0&&(G=""+I.key),z.type&&z.type.defaultProps)var xe=z.type.defaultProps;for(Se in I)k.call(I,Se)&&!H.hasOwnProperty(Se)&&(de[Se]=I[Se]===void 0&&xe!==void 0?xe[Se]:I[Se])}var Se=arguments.length-2;if(Se===1)de.children=te;else if(1<Se){xe=Array(Se);for(var Ie=0;Ie<Se;Ie++)xe[Ie]=arguments[Ie+2];de.children=xe}return{$$typeof:u,type:z.type,key:G,ref:ve,props:de,_owner:ye}},Qe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},Qe.createElement=w,Qe.createFactory=function(z){var I=w.bind(null,z);return I.type=z,I},Qe.createRef=function(){return{current:null}},Qe.forwardRef=function(z){return{$$typeof:c,render:z}},Qe.isValidElement=W,Qe.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:fe}},Qe.memo=function(z,I){return{$$typeof:p,type:z,compare:I===void 0?null:I}},Qe.startTransition=function(z){var I=V.transition;V.transition={};try{z()}finally{V.transition=I}},Qe.unstable_act=q,Qe.useCallback=function(z,I){return le.current.useCallback(z,I)},Qe.useContext=function(z){return le.current.useContext(z)},Qe.useDebugValue=function(){},Qe.useDeferredValue=function(z){return le.current.useDeferredValue(z)},Qe.useEffect=function(z,I){return le.current.useEffect(z,I)},Qe.useId=function(){return le.current.useId()},Qe.useImperativeHandle=function(z,I,te){return le.current.useImperativeHandle(z,I,te)},Qe.useInsertionEffect=function(z,I){return le.current.useInsertionEffect(z,I)},Qe.useLayoutEffect=function(z,I){return le.current.useLayoutEffect(z,I)},Qe.useMemo=function(z,I){return le.current.useMemo(z,I)},Qe.useReducer=function(z,I,te){return le.current.useReducer(z,I,te)},Qe.useRef=function(z){return le.current.useRef(z)},Qe.useState=function(z){return le.current.useState(z)},Qe.useSyncExternalStore=function(z,I,te){return le.current.useSyncExternalStore(z,I,te)},Qe.useTransition=function(){return le.current.useTransition()},Qe.version="18.3.1",Qe}var oh;function Rc(){return oh||(oh=1,Bu.exports=Bg()),Bu.exports}var ah;function Vg(){if(ah)return ao;ah=1;var u=Rc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,m,p){var _,x={},g=null,M=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(M=m.ref);for(_ in m)s.call(m,_)&&!l.hasOwnProperty(_)&&(x[_]=m[_]);if(c&&c.defaultProps)for(_ in m=c.defaultProps,m)x[_]===void 0&&(x[_]=m[_]);return{$$typeof:e,type:c,key:g,ref:M,props:x,_owner:o.current}}return ao.Fragment=n,ao.jsx=d,ao.jsxs=d,ao}var lh;function Gg(){return lh||(lh=1,Ou.exports=Vg()),Ou.exports}var Zi=Gg(),Cr=Rc();const Wg=Rp(Cr);var Ra={},Vu={exports:{}},Sn={},Gu={exports:{}},Wu={};var uh;function Hg(){return uh||(uh=1,function(u){function e(V,J){var q=V.length;V.push(J);e:for(;0<q;){var z=q-1>>>1,I=V[z];if(0<o(I,J))V[z]=J,V[q]=I,q=z;else break e}}function n(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var J=V[0],q=V.pop();if(q!==J){V[0]=q;e:for(var z=0,I=V.length,te=I>>>1;z<te;){var de=2*(z+1)-1,G=V[de],ve=de+1,ye=V[ve];if(0>o(G,q))ve<I&&0>o(ye,G)?(V[z]=ye,V[ve]=q,z=ve):(V[z]=G,V[de]=q,z=de);else if(ve<I&&0>o(ye,q))V[z]=ye,V[ve]=q,z=ve;else break e}}return J}function o(V,J){var q=V.sortIndex-J.sortIndex;return q!==0?q:V.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;u.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();u.unstable_now=function(){return d.now()-c}}var m=[],p=[],_=1,x=null,g=3,M=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(V){for(var J=n(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=V)s(p),J.sortIndex=J.expirationTime,e(m,J);else break;J=n(p)}}function b(V){if(y=!1,L(V),!T)if(n(m)!==null)T=!0,fe(k);else{var J=n(p);J!==null&&le(b,J.startTime-V)}}function k(V,J){T=!1,y&&(y=!1,C(w),w=-1),M=!0;var q=g;try{for(L(J),x=n(m);x!==null&&(!(x.expirationTime>J)||V&&!ce());){var z=x.callback;if(typeof z=="function"){x.callback=null,g=x.priorityLevel;var I=z(x.expirationTime<=J);J=u.unstable_now(),typeof I=="function"?x.callback=I:x===n(m)&&s(m),L(J)}else s(m);x=n(m)}if(x!==null)var te=!0;else{var de=n(p);de!==null&&le(b,de.startTime-J),te=!1}return te}finally{x=null,g=q,M=!1}}var O=!1,H=null,w=-1,N=5,W=-1;function ce(){return!(u.unstable_now()-W<N)}function ae(){if(H!==null){var V=u.unstable_now();W=V;var J=!0;try{J=H(!0,V)}finally{J?Z():(O=!1,H=null)}}else O=!1}var Z;if(typeof D=="function")Z=function(){D(ae)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ie=j.port2;j.port1.onmessage=ae,Z=function(){ie.postMessage(null)}}else Z=function(){v(ae,0)};function fe(V){H=V,O||(O=!0,Z())}function le(V,J){w=v(function(){V(u.unstable_now())},J)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(V){V.callback=null},u.unstable_continueExecution=function(){T||M||(T=!0,fe(k))},u.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},u.unstable_getCurrentPriorityLevel=function(){return g},u.unstable_getFirstCallbackNode=function(){return n(m)},u.unstable_next=function(V){switch(g){case 1:case 2:case 3:var J=3;break;default:J=g}var q=g;g=J;try{return V()}finally{g=q}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(V,J){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var q=g;g=V;try{return J()}finally{g=q}},u.unstable_scheduleCallback=function(V,J,q){var z=u.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?z+q:z):q=z,V){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=q+I,V={id:_++,callback:J,priorityLevel:V,startTime:q,expirationTime:I,sortIndex:-1},q>z?(V.sortIndex=q,e(p,V),n(m)===null&&V===n(p)&&(y?(C(w),w=-1):y=!0,le(b,q-z))):(V.sortIndex=I,e(m,V),T||M||(T=!0,fe(k))),V},u.unstable_shouldYield=ce,u.unstable_wrapCallback=function(V){var J=g;return function(){var q=g;g=J;try{return V.apply(this,arguments)}finally{g=q}}}}(Wu)),Wu}var ch;function Xg(){return ch||(ch=1,Gu.exports=Hg()),Gu.exports}var fh;function jg(){if(fh)return Sn;fh=1;var u=Rc(),e=Xg();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)s.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function g(t){return m.call(x,t)?!0:m.call(_,t)?!1:p.test(t)?x[t]=!0:(_[t]=!0,!1)}function M(t,i,r,a){if(r!==null&&r.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,r,a){if(i===null||typeof i>"u"||M(t,i,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function y(t,i,r,a,f,h,S){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=f,this.mustUseProperty=r,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=S}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new y(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new y(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(C,D);v[i]=new y(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(C,D);v[i]=new y(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(C,D);v[i]=new y(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new y(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new y(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,r,a){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,r,f,a)&&(r=null),a||f===null?g(i)&&(r===null?t.removeAttribute(i):t.setAttribute(i,""+r)):f.mustUseProperty?t[f.propertyName]=r===null?f.type===3?!1:"":r:(i=f.attributeName,a=f.attributeNamespace,r===null?t.removeAttribute(i):(f=f.type,r=f===3||f===4&&r===!0?"":""+r,a?t.setAttributeNS(a,i,r):t.setAttribute(i,r))))}var b=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),O=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),ce=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,z;function I(t){if(z===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+t}var te=!1;function de(t,i){if(!t||te)return"";te=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var a=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){a=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){a=Q}t()}}catch(Q){if(Q&&a&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),h=a.stack.split(`
`),S=f.length-1,P=h.length-1;1<=S&&0<=P&&f[S]!==h[P];)P--;for(;1<=S&&0<=P;S--,P--)if(f[S]!==h[P]){if(S!==1||P!==1)do if(S--,P--,0>P||f[S]!==h[P]){var F=`
`+f[S].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=S&&0<=P);break}}}finally{te=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?I(t):""}function G(t){switch(t.tag){case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return t=de(t.type,!1),t;case 11:return t=de(t.type.render,!1),t;case 1:return t=de(t.type,!0),t;default:return""}}function ve(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case O:return"Portal";case N:return"Profiler";case w:return"StrictMode";case Z:return"Suspense";case j:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ce:return(t.displayName||"Context")+".Consumer";case W:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return i=t.displayName||null,i!==null?i:ve(t.type)||"Memo";case fe:i=t._payload,t=t._init;try{return ve(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(t){var i=Se(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,h=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ye(t){t._valueTracker||(t._valueTracker=Ie(t))}function Ze(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),a="";return t&&(a=Se(t)?t.checked?"true":"false":t.value),t=a,t!==r?(i.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dt(t,i){var r=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function mn(t,i){var r=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;r=xe(i.value!=null?i.value:r),t._wrapperState={initialChecked:a,initialValue:r,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function jt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function It(t,i){jt(t,i);var r=xe(i.value),a=i.type;if(r!=null)a==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?lt(t,i.type,r):i.hasOwnProperty("defaultValue")&&lt(t,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function dt(t,i,r){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,r||i===t.value||(t.value=i),t.defaultValue=i}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function lt(t,i,r){(i!=="number"||et(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Kt=Array.isArray;function Ot(t,i,r,a){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&a&&(t[r].defaultSelected=!0)}else{for(r=""+xe(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,a&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function R(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function E(t,i){var r=i.value;if(r==null){if(r=i.children,i=i.defaultValue,r!=null){if(i!=null)throw Error(n(92));if(Kt(r)){if(1<r.length)throw Error(n(93));r=r[0]}i=r}i==null&&(i=""),r=i}t._wrapperState={initialValue:xe(r)}}function se(t,i){var r=xe(i.value),a=xe(i.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),i.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),a!=null&&(t.defaultValue=""+a)}function Me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function we(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?we(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ze,Ae=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,r,a,f){MSApp.execUnsafeLocalFunction(function(){return t(i,r,a,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ue(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(t){Ne.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Oe[i]=Oe[t]})});function He(t,i,r){return i==null||typeof i=="boolean"||i===""?"":r||typeof i!="number"||i===0||Oe.hasOwnProperty(t)&&Oe[t]?(""+i).trim():i+"px"}function Ve(t,i){t=t.style;for(var r in i)if(i.hasOwnProperty(r)){var a=r.indexOf("--")===0,f=He(r,i[r],a);r==="float"&&(r="cssFloat"),a?t.setProperty(r,f):t[r]=f}}var Ue=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(t,i){if(i){if(Ue[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ut(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var re=null,me=null,Te=null;function Pe(t){if(t=js(t)){if(typeof re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Xo(i),re(t.stateNode,t.type,i))}}function at(t){me?Te?Te.push(t):Te=[t]:me=t}function bt(){if(me){var t=me,i=Te;if(Te=me=null,Pe(t),i)for(t=0;t<i.length;t++)Pe(i[t])}}function Bt(t,i){return t(i)}function Mn(){}var ht=!1;function ln(t,i,r){if(ht)return t(i,r);ht=!0;try{return Bt(t,i,r)}finally{ht=!1,(me!==null||Te!==null)&&(Mn(),bt())}}function Qt(t,i){var r=t.stateNode;if(r===null)return null;var a=Xo(r);if(a===null)return null;r=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(n(231,i,typeof r));return r}var Es=!1;if(c)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Es=!1}function rl(t,i,r,a,f,h,S,P,F){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(r,Q)}catch(pe){this.onError(pe)}}var A=!1,K=null,ne=!1,Y=null,oe={onError:function(t){A=!0,K=t}};function Be(t,i,r,a,f,h,S,P,F){A=!1,K=null,rl.apply(oe,arguments)}function qe(t,i,r,a,f,h,S,P,F){if(Be.apply(this,arguments),A){if(A){var Q=K;A=!1,K=null}else throw Error(n(198));ne||(ne=!0,Y=Q)}}function je(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function $e(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function it(t){if(je(t)!==t)throw Error(n(188))}function nt(t){var i=t.alternate;if(!i){if(i=je(t),i===null)throw Error(n(188));return i!==t?null:t}for(var r=t,a=i;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(a=f.return,a!==null){r=a;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return it(f),t;if(h===a)return it(f),i;h=h.sibling}throw Error(n(188))}if(r.return!==a.return)r=f,a=h;else{for(var S=!1,P=f.child;P;){if(P===r){S=!0,r=f,a=h;break}if(P===a){S=!0,a=f,r=h;break}P=P.sibling}if(!S){for(P=h.child;P;){if(P===r){S=!0,r=h,a=f;break}if(P===a){S=!0,a=h,r=f;break}P=P.sibling}if(!S)throw Error(n(189))}}if(r.alternate!==a)throw Error(n(190))}if(r.tag!==3)throw Error(n(188));return r.stateNode.current===r?t:i}function Je(t){return t=nt(t),t!==null?yt(t):null}function yt(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=yt(t);if(i!==null)return i;t=t.sibling}return null}var Jt=e.unstable_scheduleCallback,Nn=e.unstable_cancelCallback,ci=e.unstable_shouldYield,Et=e.unstable_requestPaint,Fe=e.unstable_now,Ts=e.unstable_getCurrentPriorityLevel,Tt=e.unstable_ImmediatePriority,ei=e.unstable_UserBlockingPriority,nr=e.unstable_NormalPriority,ir=e.unstable_LowPriority,Pr=e.unstable_IdlePriority,Lt=null,Vt=null;function Cs(t){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Lt,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Co,bs=Math.log,sl=Math.LN2;function Co(t){return t>>>=0,t===0?32:31-(bs(t)/sl|0)|0}var bo=64,Ao=4194304;function As(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lo(t,i){var r=t.pendingLanes;if(r===0)return 0;var a=0,f=t.suspendedLanes,h=t.pingedLanes,S=r&268435455;if(S!==0){var P=S&~f;P!==0?a=As(P):(h&=S,h!==0&&(a=As(h)))}else S=r&~f,S!==0?a=As(S):h!==0&&(a=As(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&f)===0&&(f=a&-a,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=r&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)r=31-pt(i),f=1<<r,a|=t[r],i&=~f;return a}function sm(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function om(t,i){for(var r=t.suspendedLanes,a=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var S=31-pt(h),P=1<<S,F=f[S];F===-1?((P&r)===0||(P&a)!==0)&&(f[S]=sm(P,i)):F<=i&&(t.expiredLanes|=P),h&=~P}}function ol(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kc(){var t=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),t}function al(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Ls(t,i,r){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-pt(i),t[i]=r}function am(t,i){var r=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<r;){var f=31-pt(r),h=1<<f;i[f]=0,a[f]=-1,t[f]=-1,r&=~h}}function ll(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var a=31-pt(r),f=1<<a;f&i|t[a]&i&&(t[a]|=i),r&=~f}}var ot=0;function zc(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Fc,ul,Uc,Oc,Bc,cl=!1,Ro=[],bi=null,Ai=null,Li=null,Rs=new Map,Ps=new Map,Ri=[],lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(t,i){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Rs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(i.pointerId)}}function Ds(t,i,r,a,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:a,nativeEvent:h,targetContainers:[f]},i!==null&&(i=js(i),i!==null&&ul(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function um(t,i,r,a,f){switch(i){case"focusin":return bi=Ds(bi,t,i,r,a,f),!0;case"dragenter":return Ai=Ds(Ai,t,i,r,a,f),!0;case"mouseover":return Li=Ds(Li,t,i,r,a,f),!0;case"pointerover":var h=f.pointerId;return Rs.set(h,Ds(Rs.get(h)||null,t,i,r,a,f)),!0;case"gotpointercapture":return h=f.pointerId,Ps.set(h,Ds(Ps.get(h)||null,t,i,r,a,f)),!0}return!1}function Gc(t){var i=rr(t.target);if(i!==null){var r=je(i);if(r!==null){if(i=r.tag,i===13){if(i=$e(r),i!==null){t.blockedOn=i,Bc(t.priority,function(){Uc(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=dl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var a=new r.constructor(r.type,r);wt=a,r.target.dispatchEvent(a),wt=null}else return i=js(r),i!==null&&ul(i),t.blockedOn=r,!1;i.shift()}return!0}function Wc(t,i,r){Po(t)&&r.delete(i)}function cm(){cl=!1,bi!==null&&Po(bi)&&(bi=null),Ai!==null&&Po(Ai)&&(Ai=null),Li!==null&&Po(Li)&&(Li=null),Rs.forEach(Wc),Ps.forEach(Wc)}function Is(t,i){t.blockedOn===i&&(t.blockedOn=null,cl||(cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cm)))}function Ns(t){function i(f){return Is(f,t)}if(0<Ro.length){Is(Ro[0],t);for(var r=1;r<Ro.length;r++){var a=Ro[r];a.blockedOn===t&&(a.blockedOn=null)}}for(bi!==null&&Is(bi,t),Ai!==null&&Is(Ai,t),Li!==null&&Is(Li,t),Rs.forEach(i),Ps.forEach(i),r=0;r<Ri.length;r++)a=Ri[r],a.blockedOn===t&&(a.blockedOn=null);for(;0<Ri.length&&(r=Ri[0],r.blockedOn===null);)Gc(r),r.blockedOn===null&&Ri.shift()}var Dr=b.ReactCurrentBatchConfig,Do=!0;function fm(t,i,r,a){var f=ot,h=Dr.transition;Dr.transition=null;try{ot=1,fl(t,i,r,a)}finally{ot=f,Dr.transition=h}}function dm(t,i,r,a){var f=ot,h=Dr.transition;Dr.transition=null;try{ot=4,fl(t,i,r,a)}finally{ot=f,Dr.transition=h}}function fl(t,i,r,a){if(Do){var f=dl(t,i,r,a);if(f===null)Ll(t,i,a,Io,r),Vc(t,a);else if(um(f,t,i,r,a))a.stopPropagation();else if(Vc(t,a),i&4&&-1<lm.indexOf(t)){for(;f!==null;){var h=js(f);if(h!==null&&Fc(h),h=dl(t,i,r,a),h===null&&Ll(t,i,a,Io,r),h===f)break;f=h}f!==null&&a.stopPropagation()}else Ll(t,i,a,null,r)}}var Io=null;function dl(t,i,r,a){if(Io=null,t=B(a),t=rr(t),t!==null)if(i=je(t),i===null)t=null;else if(r=i.tag,r===13){if(t=$e(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Io=t,null}function Hc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ts()){case Tt:return 1;case ei:return 4;case nr:case ir:return 16;case Pr:return 536870912;default:return 16}default:return 16}}var Pi=null,hl=null,No=null;function Xc(){if(No)return No;var t,i=hl,r=i.length,a,f="value"in Pi?Pi.value:Pi.textContent,h=f.length;for(t=0;t<r&&i[t]===f[t];t++);var S=r-t;for(a=1;a<=S&&i[r-a]===f[h-a];a++);return No=f.slice(t,1<a?1-a:void 0)}function ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function jc(){return!1}function wn(t){function i(r,a,f,h,S){this._reactName=r,this._targetInst=f,this.type=a,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(r=t[P],this[P]=r?r(h):h[P]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?zo:jc,this.isPropagationStopped=jc,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),i}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=wn(Ir),ks=q({},Ir,{view:0,detail:0}),hm=wn(ks),ml,gl,zs,Fo=q({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(ml=t.screenX-zs.screenX,gl=t.screenY-zs.screenY):gl=ml=0,zs=t),ml)},movementY:function(t){return"movementY"in t?t.movementY:gl}}),qc=wn(Fo),pm=q({},Fo,{dataTransfer:0}),mm=wn(pm),gm=q({},ks,{relatedTarget:0}),vl=wn(gm),vm=q({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=wn(vm),xm=q({},Ir,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ym=wn(xm),Sm=q({},Ir,{data:0}),Yc=wn(Sm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tm(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Em[t])?!!i[t]:!1}function _l(){return Tm}var Cm=q({},ks,{key:function(t){if(t.key){var i=Mm[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bm=wn(Cm),Am=q({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=wn(Am),Lm=q({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),Rm=wn(Lm),Pm=q({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dm=wn(Pm),Im=q({},Fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nm=wn(Im),km=[9,13,27,32],xl=c&&"CompositionEvent"in window,Fs=null;c&&"documentMode"in document&&(Fs=document.documentMode);var zm=c&&"TextEvent"in window&&!Fs,Zc=c&&(!xl||Fs&&8<Fs&&11>=Fs),Kc=" ",Qc=!1;function Jc(t,i){switch(t){case"keyup":return km.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function Fm(t,i){switch(t){case"compositionend":return ef(i);case"keypress":return i.which!==32?null:(Qc=!0,Kc);case"textInput":return t=i.data,t===Kc&&Qc?null:t;default:return null}}function Um(t,i){if(Nr)return t==="compositionend"||!xl&&Jc(t,i)?(t=Xc(),No=hl=Pi=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zc&&i.locale!=="ko"?null:i.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Om[t.type]:i==="textarea"}function nf(t,i,r,a){at(a),i=Go(i,"onChange"),0<i.length&&(r=new pl("onChange","change",null,r,a),t.push({event:r,listeners:i}))}var Us=null,Os=null;function Bm(t){Sf(t,0)}function Uo(t){var i=Or(t);if(Ze(i))return t}function Vm(t,i){if(t==="change")return i}var rf=!1;if(c){var yl;if(c){var Sl="oninput"in document;if(!Sl){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),Sl=typeof sf.oninput=="function"}yl=Sl}else yl=!1;rf=yl&&(!document.documentMode||9<document.documentMode)}function of(){Us&&(Us.detachEvent("onpropertychange",af),Os=Us=null)}function af(t){if(t.propertyName==="value"&&Uo(Os)){var i=[];nf(i,Os,t,B(t)),ln(Bm,i)}}function Gm(t,i,r){t==="focusin"?(of(),Us=i,Os=r,Us.attachEvent("onpropertychange",af)):t==="focusout"&&of()}function Wm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uo(Os)}function Hm(t,i){if(t==="click")return Uo(i)}function Xm(t,i){if(t==="input"||t==="change")return Uo(i)}function jm(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Gn=typeof Object.is=="function"?Object.is:jm;function Bs(t,i){if(Gn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),a=Object.keys(i);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var f=r[a];if(!m.call(i,f)||!Gn(t[f],i[f]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uf(t,i){var r=lf(t);t=0;for(var a;r;){if(r.nodeType===3){if(a=t+r.textContent.length,t<=i&&a>=i)return{node:r,offset:i-t};t=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=lf(r)}}function cf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?cf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ff(){for(var t=window,i=et();i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=et(t.document)}return i}function Ml(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function qm(t){var i=ff(),r=t.focusedElem,a=t.selectionRange;if(i!==r&&r&&r.ownerDocument&&cf(r.ownerDocument.documentElement,r)){if(a!==null&&Ml(r)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in r)r.selectionStart=i,r.selectionEnd=Math.min(t,r.value.length);else if(t=(i=r.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=r.textContent.length,h=Math.min(a.start,f);a=a.end===void 0?h:Math.min(a.end,f),!t.extend&&h>a&&(f=a,a=h,h=f),f=uf(r,h);var S=uf(r,a);f&&S&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==S.node||t.focusOffset!==S.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(S.node,S.offset)):(i.setEnd(S.node,S.offset),t.addRange(i)))}}for(i=[],t=r;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<i.length;r++)t=i[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ym=c&&"documentMode"in document&&11>=document.documentMode,kr=null,wl=null,Vs=null,El=!1;function df(t,i,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;El||kr==null||kr!==et(a)||(a=kr,"selectionStart"in a&&Ml(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vs&&Bs(Vs,a)||(Vs=a,a=Go(wl,"onSelect"),0<a.length&&(i=new pl("onSelect","select",null,i,r),t.push({event:i,listeners:a}),i.target=kr)))}function Oo(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var zr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Tl={},hf={};c&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Bo(t){if(Tl[t])return Tl[t];if(!zr[t])return t;var i=zr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in hf)return Tl[t]=i[r];return t}var pf=Bo("animationend"),mf=Bo("animationiteration"),gf=Bo("animationstart"),vf=Bo("transitionend"),_f=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,i){_f.set(t,i),l(i,[t])}for(var Cl=0;Cl<xf.length;Cl++){var bl=xf[Cl],$m=bl.toLowerCase(),Zm=bl[0].toUpperCase()+bl.slice(1);Di($m,"on"+Zm)}Di(pf,"onAnimationEnd"),Di(mf,"onAnimationIteration"),Di(gf,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(vf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Km=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function yf(t,i,r){var a=t.type||"unknown-event";t.currentTarget=r,qe(a,i,void 0,t),t.currentTarget=null}function Sf(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var a=t[r],f=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var S=a.length-1;0<=S;S--){var P=a[S],F=P.instance,Q=P.currentTarget;if(P=P.listener,F!==h&&f.isPropagationStopped())break e;yf(f,P,Q),h=F}else for(S=0;S<a.length;S++){if(P=a[S],F=P.instance,Q=P.currentTarget,P=P.listener,F!==h&&f.isPropagationStopped())break e;yf(f,P,Q),h=F}}}if(ne)throw t=Y,ne=!1,Y=null,t}function mt(t,i){var r=i[kl];r===void 0&&(r=i[kl]=new Set);var a=t+"__bubble";r.has(a)||(Mf(i,t,2,!1),r.add(a))}function Al(t,i,r){var a=0;i&&(a|=4),Mf(r,t,a,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Vo]){t[Vo]=!0,s.forEach(function(r){r!=="selectionchange"&&(Km.has(r)||Al(r,!1,t),Al(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,Al("selectionchange",!1,i))}}function Mf(t,i,r,a){switch(Hc(i)){case 1:var f=fm;break;case 4:f=dm;break;default:f=fl}r=f.bind(null,i,r,t),f=void 0,!Es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),a?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function Ll(t,i,r,a,f){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var S=a.tag;if(S===3||S===4){var P=a.stateNode.containerInfo;if(P===f||P.nodeType===8&&P.parentNode===f)break;if(S===4)for(S=a.return;S!==null;){var F=S.tag;if((F===3||F===4)&&(F=S.stateNode.containerInfo,F===f||F.nodeType===8&&F.parentNode===f))return;S=S.return}for(;P!==null;){if(S=rr(P),S===null)return;if(F=S.tag,F===5||F===6){a=h=S;continue e}P=P.parentNode}}a=a.return}ln(function(){var Q=h,pe=B(r),ge=[];e:{var he=_f.get(t);if(he!==void 0){var be=pl,Re=t;switch(t){case"keypress":if(ko(r)===0)break e;case"keydown":case"keyup":be=bm;break;case"focusin":Re="focus",be=vl;break;case"focusout":Re="blur",be=vl;break;case"beforeblur":case"afterblur":be=vl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Rm;break;case pf:case mf:case gf:be=_m;break;case vf:be=Dm;break;case"scroll":be=hm;break;case"wheel":be=Nm;break;case"copy":case"cut":case"paste":be=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=$c}var De=(i&4)!==0,At=!De&&t==="scroll",X=De?he!==null?he+"Capture":null:he;De=[];for(var U=Q,$;U!==null;){$=U;var _e=$.stateNode;if($.tag===5&&_e!==null&&($=_e,X!==null&&(_e=Qt(U,X),_e!=null&&De.push(Hs(U,_e,$)))),At)break;U=U.return}0<De.length&&(he=new be(he,Re,null,r,pe),ge.push({event:he,listeners:De}))}}if((i&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",he&&r!==wt&&(Re=r.relatedTarget||r.fromElement)&&(rr(Re)||Re[fi]))break e;if((be||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,be?(Re=r.relatedTarget||r.toElement,be=Q,Re=Re?rr(Re):null,Re!==null&&(At=je(Re),Re!==At||Re.tag!==5&&Re.tag!==6)&&(Re=null)):(be=null,Re=Q),be!==Re)){if(De=qc,_e="onMouseLeave",X="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(De=$c,_e="onPointerLeave",X="onPointerEnter",U="pointer"),At=be==null?he:Or(be),$=Re==null?he:Or(Re),he=new De(_e,U+"leave",be,r,pe),he.target=At,he.relatedTarget=$,_e=null,rr(pe)===Q&&(De=new De(X,U+"enter",Re,r,pe),De.target=$,De.relatedTarget=At,_e=De),At=_e,be&&Re)t:{for(De=be,X=Re,U=0,$=De;$;$=Fr($))U++;for($=0,_e=X;_e;_e=Fr(_e))$++;for(;0<U-$;)De=Fr(De),U--;for(;0<$-U;)X=Fr(X),$--;for(;U--;){if(De===X||X!==null&&De===X.alternate)break t;De=Fr(De),X=Fr(X)}De=null}else De=null;be!==null&&wf(ge,he,be,De,!1),Re!==null&&At!==null&&wf(ge,At,Re,De,!0)}}e:{if(he=Q?Or(Q):window,be=he.nodeName&&he.nodeName.toLowerCase(),be==="select"||be==="input"&&he.type==="file")var ke=Vm;else if(tf(he))if(rf)ke=Xm;else{ke=Wm;var Ge=Gm}else(be=he.nodeName)&&be.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(ke=Hm);if(ke&&(ke=ke(t,Q))){nf(ge,ke,r,pe);break e}Ge&&Ge(t,he,Q),t==="focusout"&&(Ge=he._wrapperState)&&Ge.controlled&&he.type==="number"&&lt(he,"number",he.value)}switch(Ge=Q?Or(Q):window,t){case"focusin":(tf(Ge)||Ge.contentEditable==="true")&&(kr=Ge,wl=Q,Vs=null);break;case"focusout":Vs=wl=kr=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,df(ge,r,pe);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":df(ge,r,pe)}var We;if(xl)e:{switch(t){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else Nr?Jc(t,r)&&(Xe="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Xe="onCompositionStart");Xe&&(Zc&&r.locale!=="ko"&&(Nr||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&Nr&&(We=Xc()):(Pi=pe,hl="value"in Pi?Pi.value:Pi.textContent,Nr=!0)),Ge=Go(Q,Xe),0<Ge.length&&(Xe=new Yc(Xe,t,null,r,pe),ge.push({event:Xe,listeners:Ge}),We?Xe.data=We:(We=ef(r),We!==null&&(Xe.data=We)))),(We=zm?Fm(t,r):Um(t,r))&&(Q=Go(Q,"onBeforeInput"),0<Q.length&&(pe=new Yc("onBeforeInput","beforeinput",null,r,pe),ge.push({event:pe,listeners:Q}),pe.data=We))}Sf(ge,i)})}function Hs(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Go(t,i){for(var r=i+"Capture",a=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Qt(t,r),h!=null&&a.unshift(Hs(t,h,f)),h=Qt(t,i),h!=null&&a.push(Hs(t,h,f))),t=t.return}return a}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wf(t,i,r,a,f){for(var h=i._reactName,S=[];r!==null&&r!==a;){var P=r,F=P.alternate,Q=P.stateNode;if(F!==null&&F===a)break;P.tag===5&&Q!==null&&(P=Q,f?(F=Qt(r,h),F!=null&&S.unshift(Hs(r,F,P))):f||(F=Qt(r,h),F!=null&&S.push(Hs(r,F,P)))),r=r.return}S.length!==0&&t.push({event:i,listeners:S})}var Qm=/\r\n?/g,Jm=/\u0000|\uFFFD/g;function Ef(t){return(typeof t=="string"?t:""+t).replace(Qm,`
`).replace(Jm,"")}function Wo(t,i,r){if(i=Ef(i),Ef(t)!==i&&r)throw Error(n(425))}function Ho(){}var Rl=null,Pl=null;function Dl(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,eg=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(t){return Tf.resolve(null).then(t).catch(ng)}:Il;function ng(t){setTimeout(function(){throw t})}function Nl(t,i){var r=i,a=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(a===0){t.removeChild(f),Ns(i);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=f}while(r);Ns(i)}function Ii(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Cf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),ti="__reactFiber$"+Ur,Xs="__reactProps$"+Ur,fi="__reactContainer$"+Ur,kl="__reactEvents$"+Ur,ig="__reactListeners$"+Ur,rg="__reactHandles$"+Ur;function rr(t){var i=t[ti];if(i)return i;for(var r=t.parentNode;r;){if(i=r[fi]||r[ti]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Cf(t);t!==null;){if(r=t[ti])return r;t=Cf(t)}return i}t=r,r=t.parentNode}return null}function js(t){return t=t[ti]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Xo(t){return t[Xs]||null}var zl=[],Br=-1;function Ni(t){return{current:t}}function gt(t){0>Br||(t.current=zl[Br],zl[Br]=null,Br--)}function ft(t,i){Br++,zl[Br]=t.current,t.current=i}var ki={},en=Ni(ki),gn=Ni(!1),sr=ki;function Vr(t,i){var r=t.type.contextTypes;if(!r)return ki;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in r)f[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function vn(t){return t=t.childContextTypes,t!=null}function jo(){gt(gn),gt(en)}function bf(t,i,r){if(en.current!==ki)throw Error(n(168));ft(en,i),ft(gn,r)}function Af(t,i,r){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var f in a)if(!(f in i))throw Error(n(108,ye(t)||"Unknown",f));return q({},r,a)}function qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,sr=en.current,ft(en,t),ft(gn,gn.current),!0}function Lf(t,i,r){var a=t.stateNode;if(!a)throw Error(n(169));r?(t=Af(t,i,sr),a.__reactInternalMemoizedMergedChildContext=t,gt(gn),gt(en),ft(en,t)):gt(gn),ft(gn,r)}var di=null,Yo=!1,Fl=!1;function Rf(t){di===null?di=[t]:di.push(t)}function sg(t){Yo=!0,Rf(t)}function zi(){if(!Fl&&di!==null){Fl=!0;var t=0,i=ot;try{var r=di;for(ot=1;t<r.length;t++){var a=r[t];do a=a(!0);while(a!==null)}di=null,Yo=!1}catch(f){throw di!==null&&(di=di.slice(t+1)),Jt(Tt,zi),f}finally{ot=i,Fl=!1}}return null}var Gr=[],Wr=0,$o=null,Zo=0,kn=[],zn=0,or=null,hi=1,pi="";function ar(t,i){Gr[Wr++]=Zo,Gr[Wr++]=$o,$o=t,Zo=i}function Pf(t,i,r){kn[zn++]=hi,kn[zn++]=pi,kn[zn++]=or,or=t;var a=hi;t=pi;var f=32-pt(a)-1;a&=~(1<<f),r+=1;var h=32-pt(i)+f;if(30<h){var S=f-f%5;h=(a&(1<<S)-1).toString(32),a>>=S,f-=S,hi=1<<32-pt(i)+f|r<<f|a,pi=h+t}else hi=1<<h|r<<f|a,pi=t}function Ul(t){t.return!==null&&(ar(t,1),Pf(t,1,0))}function Ol(t){for(;t===$o;)$o=Gr[--Wr],Gr[Wr]=null,Zo=Gr[--Wr],Gr[Wr]=null;for(;t===or;)or=kn[--zn],kn[zn]=null,pi=kn[--zn],kn[zn]=null,hi=kn[--zn],kn[zn]=null}var En=null,Tn=null,_t=!1,Wn=null;function Df(t,i){var r=Bn(5,null,null,0);r.elementType="DELETED",r.stateNode=i,r.return=t,i=t.deletions,i===null?(t.deletions=[r],t.flags|=16):i.push(r)}function If(t,i){switch(t.tag){case 5:var r=t.type;return i=i.nodeType!==1||r.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,En=t,Tn=Ii(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,En=t,Tn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(r=or!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:i,treeContext:r,retryLane:1073741824},r=Bn(18,null,null,0),r.stateNode=i,r.return=t,t.child=r,En=t,Tn=null,!0):!1;default:return!1}}function Bl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vl(t){if(_t){var i=Tn;if(i){var r=i;if(!If(t,i)){if(Bl(t))throw Error(n(418));i=Ii(r.nextSibling);var a=En;i&&If(t,i)?Df(a,r):(t.flags=t.flags&-4097|2,_t=!1,En=t)}}else{if(Bl(t))throw Error(n(418));t.flags=t.flags&-4097|2,_t=!1,En=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Ko(t){if(t!==En)return!1;if(!_t)return Nf(t),_t=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Dl(t.type,t.memoizedProps)),i&&(i=Tn)){if(Bl(t))throw kf(),Error(n(418));for(;i;)Df(t,i),i=Ii(i.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(i===0){Tn=Ii(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++}t=t.nextSibling}Tn=null}}else Tn=En?Ii(t.stateNode.nextSibling):null;return!0}function kf(){for(var t=Tn;t;)t=Ii(t.nextSibling)}function Hr(){Tn=En=null,_t=!1}function Gl(t){Wn===null?Wn=[t]:Wn.push(t)}var og=b.ReactCurrentBatchConfig;function qs(t,i,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(n(309));var a=r.stateNode}if(!a)throw Error(n(147,t));var f=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(S){var P=f.refs;S===null?delete P[h]:P[h]=S},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!r._owner)throw Error(n(290,t))}return t}function Qo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function zf(t){var i=t._init;return i(t._payload)}function Ff(t){function i(X,U){if(t){var $=X.deletions;$===null?(X.deletions=[U],X.flags|=16):$.push(U)}}function r(X,U){if(!t)return null;for(;U!==null;)i(X,U),U=U.sibling;return null}function a(X,U){for(X=new Map;U!==null;)U.key!==null?X.set(U.key,U):X.set(U.index,U),U=U.sibling;return X}function f(X,U){return X=Hi(X,U),X.index=0,X.sibling=null,X}function h(X,U,$){return X.index=$,t?($=X.alternate,$!==null?($=$.index,$<U?(X.flags|=2,U):$):(X.flags|=2,U)):(X.flags|=1048576,U)}function S(X){return t&&X.alternate===null&&(X.flags|=2),X}function P(X,U,$,_e){return U===null||U.tag!==6?(U=Iu($,X.mode,_e),U.return=X,U):(U=f(U,$),U.return=X,U)}function F(X,U,$,_e){var ke=$.type;return ke===H?pe(X,U,$.props.children,_e,$.key):U!==null&&(U.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===fe&&zf(ke)===U.type)?(_e=f(U,$.props),_e.ref=qs(X,U,$),_e.return=X,_e):(_e=Ma($.type,$.key,$.props,null,X.mode,_e),_e.ref=qs(X,U,$),_e.return=X,_e)}function Q(X,U,$,_e){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Nu($,X.mode,_e),U.return=X,U):(U=f(U,$.children||[]),U.return=X,U)}function pe(X,U,$,_e,ke){return U===null||U.tag!==7?(U=mr($,X.mode,_e,ke),U.return=X,U):(U=f(U,$),U.return=X,U)}function ge(X,U,$){if(typeof U=="string"&&U!==""||typeof U=="number")return U=Iu(""+U,X.mode,$),U.return=X,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case k:return $=Ma(U.type,U.key,U.props,null,X.mode,$),$.ref=qs(X,null,U),$.return=X,$;case O:return U=Nu(U,X.mode,$),U.return=X,U;case fe:var _e=U._init;return ge(X,_e(U._payload),$)}if(Kt(U)||J(U))return U=mr(U,X.mode,$,null),U.return=X,U;Qo(X,U)}return null}function he(X,U,$,_e){var ke=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return ke!==null?null:P(X,U,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case k:return $.key===ke?F(X,U,$,_e):null;case O:return $.key===ke?Q(X,U,$,_e):null;case fe:return ke=$._init,he(X,U,ke($._payload),_e)}if(Kt($)||J($))return ke!==null?null:pe(X,U,$,_e,null);Qo(X,$)}return null}function be(X,U,$,_e,ke){if(typeof _e=="string"&&_e!==""||typeof _e=="number")return X=X.get($)||null,P(U,X,""+_e,ke);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case k:return X=X.get(_e.key===null?$:_e.key)||null,F(U,X,_e,ke);case O:return X=X.get(_e.key===null?$:_e.key)||null,Q(U,X,_e,ke);case fe:var Ge=_e._init;return be(X,U,$,Ge(_e._payload),ke)}if(Kt(_e)||J(_e))return X=X.get($)||null,pe(U,X,_e,ke,null);Qo(U,_e)}return null}function Re(X,U,$,_e){for(var ke=null,Ge=null,We=U,Xe=U=0,Ht=null;We!==null&&Xe<$.length;Xe++){We.index>Xe?(Ht=We,We=null):Ht=We.sibling;var st=he(X,We,$[Xe],_e);if(st===null){We===null&&(We=Ht);break}t&&We&&st.alternate===null&&i(X,We),U=h(st,U,Xe),Ge===null?ke=st:Ge.sibling=st,Ge=st,We=Ht}if(Xe===$.length)return r(X,We),_t&&ar(X,Xe),ke;if(We===null){for(;Xe<$.length;Xe++)We=ge(X,$[Xe],_e),We!==null&&(U=h(We,U,Xe),Ge===null?ke=We:Ge.sibling=We,Ge=We);return _t&&ar(X,Xe),ke}for(We=a(X,We);Xe<$.length;Xe++)Ht=be(We,X,Xe,$[Xe],_e),Ht!==null&&(t&&Ht.alternate!==null&&We.delete(Ht.key===null?Xe:Ht.key),U=h(Ht,U,Xe),Ge===null?ke=Ht:Ge.sibling=Ht,Ge=Ht);return t&&We.forEach(function(Xi){return i(X,Xi)}),_t&&ar(X,Xe),ke}function De(X,U,$,_e){var ke=J($);if(typeof ke!="function")throw Error(n(150));if($=ke.call($),$==null)throw Error(n(151));for(var Ge=ke=null,We=U,Xe=U=0,Ht=null,st=$.next();We!==null&&!st.done;Xe++,st=$.next()){We.index>Xe?(Ht=We,We=null):Ht=We.sibling;var Xi=he(X,We,st.value,_e);if(Xi===null){We===null&&(We=Ht);break}t&&We&&Xi.alternate===null&&i(X,We),U=h(Xi,U,Xe),Ge===null?ke=Xi:Ge.sibling=Xi,Ge=Xi,We=Ht}if(st.done)return r(X,We),_t&&ar(X,Xe),ke;if(We===null){for(;!st.done;Xe++,st=$.next())st=ge(X,st.value,_e),st!==null&&(U=h(st,U,Xe),Ge===null?ke=st:Ge.sibling=st,Ge=st);return _t&&ar(X,Xe),ke}for(We=a(X,We);!st.done;Xe++,st=$.next())st=be(We,X,Xe,st.value,_e),st!==null&&(t&&st.alternate!==null&&We.delete(st.key===null?Xe:st.key),U=h(st,U,Xe),Ge===null?ke=st:Ge.sibling=st,Ge=st);return t&&We.forEach(function(Og){return i(X,Og)}),_t&&ar(X,Xe),ke}function At(X,U,$,_e){if(typeof $=="object"&&$!==null&&$.type===H&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case k:e:{for(var ke=$.key,Ge=U;Ge!==null;){if(Ge.key===ke){if(ke=$.type,ke===H){if(Ge.tag===7){r(X,Ge.sibling),U=f(Ge,$.props.children),U.return=X,X=U;break e}}else if(Ge.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===fe&&zf(ke)===Ge.type){r(X,Ge.sibling),U=f(Ge,$.props),U.ref=qs(X,Ge,$),U.return=X,X=U;break e}r(X,Ge);break}else i(X,Ge);Ge=Ge.sibling}$.type===H?(U=mr($.props.children,X.mode,_e,$.key),U.return=X,X=U):(_e=Ma($.type,$.key,$.props,null,X.mode,_e),_e.ref=qs(X,U,$),_e.return=X,X=_e)}return S(X);case O:e:{for(Ge=$.key;U!==null;){if(U.key===Ge)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){r(X,U.sibling),U=f(U,$.children||[]),U.return=X,X=U;break e}else{r(X,U);break}else i(X,U);U=U.sibling}U=Nu($,X.mode,_e),U.return=X,X=U}return S(X);case fe:return Ge=$._init,At(X,U,Ge($._payload),_e)}if(Kt($))return Re(X,U,$,_e);if(J($))return De(X,U,$,_e);Qo(X,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,U!==null&&U.tag===6?(r(X,U.sibling),U=f(U,$),U.return=X,X=U):(r(X,U),U=Iu($,X.mode,_e),U.return=X,X=U),S(X)):r(X,U)}return At}var Xr=Ff(!0),Uf=Ff(!1),Jo=Ni(null),ea=null,jr=null,Wl=null;function Hl(){Wl=jr=ea=null}function Xl(t){var i=Jo.current;gt(Jo),t._currentValue=i}function jl(t,i,r){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===r)break;t=t.return}}function qr(t,i){ea=t,Wl=jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_n=!0),t.firstContext=null)}function Fn(t){var i=t._currentValue;if(Wl!==t)if(t={context:t,memoizedValue:i,next:null},jr===null){if(ea===null)throw Error(n(308));jr=t,ea.dependencies={lanes:0,firstContext:t}}else jr=jr.next=t;return i}var lr=null;function ql(t){lr===null?lr=[t]:lr.push(t)}function Of(t,i,r,a){var f=i.interleaved;return f===null?(r.next=r,ql(i)):(r.next=f.next,f.next=r),i.interleaved=r,mi(t,a)}function mi(t,i){t.lanes|=i;var r=t.alternate;for(r!==null&&(r.lanes|=i),r=t,t=t.return;t!==null;)t.childLanes|=i,r=t.alternate,r!==null&&(r.childLanes|=i),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Fi=!1;function Yl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ui(t,i,r){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(rt&2)!==0){var f=a.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i,mi(t,r)}return f=a.interleaved,f===null?(i.next=i,ql(a)):(i.next=f.next,f.next=i),a.interleaved=i,mi(t,r)}function ta(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,r|=a,i.lanes=r,ll(t,r)}}function Vf(t,i){var r=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};h===null?f=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?f=h=i:h=h.next=i}else f=h=i;r={baseState:a.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}function na(t,i,r,a){var f=t.updateQueue;Fi=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,P=f.shared.pending;if(P!==null){f.shared.pending=null;var F=P,Q=F.next;F.next=null,S===null?h=Q:S.next=Q,S=F;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,P=pe.lastBaseUpdate,P!==S&&(P===null?pe.firstBaseUpdate=Q:P.next=Q,pe.lastBaseUpdate=F))}if(h!==null){var ge=f.baseState;S=0,pe=Q=F=null,P=h;do{var he=P.lane,be=P.eventTime;if((a&he)===he){pe!==null&&(pe=pe.next={eventTime:be,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Re=t,De=P;switch(he=i,be=r,De.tag){case 1:if(Re=De.payload,typeof Re=="function"){ge=Re.call(be,ge,he);break e}ge=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=De.payload,he=typeof Re=="function"?Re.call(be,ge,he):Re,he==null)break e;ge=q({},ge,he);break e;case 2:Fi=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,he=f.effects,he===null?f.effects=[P]:he.push(P))}else be={eventTime:be,lane:he,tag:P.tag,payload:P.payload,callback:P.callback,next:null},pe===null?(Q=pe=be,F=ge):pe=pe.next=be,S|=he;if(P=P.next,P===null){if(P=f.shared.pending,P===null)break;he=P,P=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);if(pe===null&&(F=ge),f.baseState=F,f.firstBaseUpdate=Q,f.lastBaseUpdate=pe,i=f.shared.interleaved,i!==null){f=i;do S|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);fr|=S,t.lanes=S,t.memoizedState=ge}}function Gf(t,i,r){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],f=a.callback;if(f!==null){if(a.callback=null,a=r,typeof f!="function")throw Error(n(191,f));f.call(a)}}}var Ys={},ni=Ni(Ys),$s=Ni(Ys),Zs=Ni(Ys);function ur(t){if(t===Ys)throw Error(n(174));return t}function $l(t,i){switch(ft(Zs,i),ft($s,t),ft(ni,Ys),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}gt(ni),ft(ni,i)}function Yr(){gt(ni),gt($s),gt(Zs)}function Wf(t){ur(Zs.current);var i=ur(ni.current),r=Ce(i,t.type);i!==r&&(ft($s,t),ft(ni,r))}function Zl(t){$s.current===t&&(gt(ni),gt($s))}var St=Ni(0);function ia(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kl=[];function Ql(){for(var t=0;t<Kl.length;t++)Kl[t]._workInProgressVersionPrimary=null;Kl.length=0}var ra=b.ReactCurrentDispatcher,Jl=b.ReactCurrentBatchConfig,cr=0,Mt=null,Nt=null,Gt=null,sa=!1,Ks=!1,Qs=0,ag=0;function tn(){throw Error(n(321))}function eu(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Gn(t[r],i[r]))return!1;return!0}function tu(t,i,r,a,f,h){if(cr=h,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ra.current=t===null||t.memoizedState===null?fg:dg,t=r(a,f),Ks){h=0;do{if(Ks=!1,Qs=0,25<=h)throw Error(n(301));h+=1,Gt=Nt=null,i.updateQueue=null,ra.current=hg,t=r(a,f)}while(Ks)}if(ra.current=la,i=Nt!==null&&Nt.next!==null,cr=0,Gt=Nt=Mt=null,sa=!1,i)throw Error(n(300));return t}function nu(){var t=Qs!==0;return Qs=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Un(){if(Nt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var i=Gt===null?Mt.memoizedState:Gt.next;if(i!==null)Gt=i,Nt=t;else{if(t===null)throw Error(n(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Js(t,i){return typeof i=="function"?i(t):i}function iu(t){var i=Un(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var a=Nt,f=a.baseQueue,h=r.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}a.baseQueue=f=h,r.pending=null}if(f!==null){h=f.next,a=a.baseState;var P=S=null,F=null,Q=h;do{var pe=Q.lane;if((cr&pe)===pe)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),a=Q.hasEagerState?Q.eagerState:t(a,Q.action);else{var ge={lane:pe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(P=F=ge,S=a):F=F.next=ge,Mt.lanes|=pe,fr|=pe}Q=Q.next}while(Q!==null&&Q!==h);F===null?S=a:F.next=P,Gn(a,i.memoizedState)||(_n=!0),i.memoizedState=a,i.baseState=S,i.baseQueue=F,r.lastRenderedState=a}if(t=r.interleaved,t!==null){f=t;do h=f.lane,Mt.lanes|=h,fr|=h,f=f.next;while(f!==t)}else f===null&&(r.lanes=0);return[i.memoizedState,r.dispatch]}function ru(t){var i=Un(),r=i.queue;if(r===null)throw Error(n(311));r.lastRenderedReducer=t;var a=r.dispatch,f=r.pending,h=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);Gn(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,a]}function Hf(){}function Xf(t,i){var r=Mt,a=Un(),f=i(),h=!Gn(a.memoizedState,f);if(h&&(a.memoizedState=f,_n=!0),a=a.queue,su(Yf.bind(null,r,a,t),[t]),a.getSnapshot!==i||h||Gt!==null&&Gt.memoizedState.tag&1){if(r.flags|=2048,eo(9,qf.bind(null,r,a,f,i),void 0,null),Wt===null)throw Error(n(349));(cr&30)!==0||jf(r,i,f)}return f}function jf(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Mt.updateQueue,i===null?(i={lastEffect:null,stores:null},Mt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function qf(t,i,r,a){i.value=r,i.getSnapshot=a,$f(i)&&Zf(t)}function Yf(t,i,r){return r(function(){$f(i)&&Zf(t)})}function $f(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Gn(t,r)}catch{return!0}}function Zf(t){var i=mi(t,1);i!==null&&qn(i,t,1,-1)}function Kf(t){var i=ii();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:t},i.queue=t,t=t.dispatch=cg.bind(null,Mt,t),[i.memoizedState,t]}function eo(t,i,r,a){return t={tag:t,create:i,destroy:r,deps:a,next:null},i=Mt.updateQueue,i===null?(i={lastEffect:null,stores:null},Mt.updateQueue=i,i.lastEffect=t.next=t):(r=i.lastEffect,r===null?i.lastEffect=t.next=t:(a=r.next,r.next=t,t.next=a,i.lastEffect=t)),t}function Qf(){return Un().memoizedState}function oa(t,i,r,a){var f=ii();Mt.flags|=t,f.memoizedState=eo(1|i,r,void 0,a===void 0?null:a)}function aa(t,i,r,a){var f=Un();a=a===void 0?null:a;var h=void 0;if(Nt!==null){var S=Nt.memoizedState;if(h=S.destroy,a!==null&&eu(a,S.deps)){f.memoizedState=eo(i,r,h,a);return}}Mt.flags|=t,f.memoizedState=eo(1|i,r,h,a)}function Jf(t,i){return oa(8390656,8,t,i)}function su(t,i){return aa(2048,8,t,i)}function ed(t,i){return aa(4,2,t,i)}function td(t,i){return aa(4,4,t,i)}function nd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function id(t,i,r){return r=r!=null?r.concat([t]):null,aa(4,4,nd.bind(null,i,t),r)}function ou(){}function rd(t,i){var r=Un();i=i===void 0?null:i;var a=r.memoizedState;return a!==null&&i!==null&&eu(i,a[1])?a[0]:(r.memoizedState=[t,i],t)}function sd(t,i){var r=Un();i=i===void 0?null:i;var a=r.memoizedState;return a!==null&&i!==null&&eu(i,a[1])?a[0]:(t=t(),r.memoizedState=[t,i],t)}function od(t,i,r){return(cr&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=r):(Gn(r,i)||(r=kc(),Mt.lanes|=r,fr|=r,t.baseState=!0),i)}function lg(t,i){var r=ot;ot=r!==0&&4>r?r:4,t(!0);var a=Jl.transition;Jl.transition={};try{t(!1),i()}finally{ot=r,Jl.transition=a}}function ad(){return Un().memoizedState}function ug(t,i,r){var a=Gi(t);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},ld(t))ud(i,r);else if(r=Of(t,i,r,a),r!==null){var f=cn();qn(r,t,a,f),cd(r,i,a)}}function cg(t,i,r){var a=Gi(t),f={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(ld(t))ud(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,P=h(S,r);if(f.hasEagerState=!0,f.eagerState=P,Gn(P,S)){var F=i.interleaved;F===null?(f.next=f,ql(i)):(f.next=F.next,F.next=f),i.interleaved=f;return}}catch{}finally{}r=Of(t,i,f,a),r!==null&&(f=cn(),qn(r,t,a,f),cd(r,i,a))}}function ld(t){var i=t.alternate;return t===Mt||i!==null&&i===Mt}function ud(t,i){Ks=sa=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function cd(t,i,r){if((r&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,r|=a,i.lanes=r,ll(t,r)}}var la={readContext:Fn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},fg={readContext:Fn,useCallback:function(t,i){return ii().memoizedState=[t,i===void 0?null:i],t},useContext:Fn,useEffect:Jf,useImperativeHandle:function(t,i,r){return r=r!=null?r.concat([t]):null,oa(4194308,4,nd.bind(null,i,t),r)},useLayoutEffect:function(t,i){return oa(4194308,4,t,i)},useInsertionEffect:function(t,i){return oa(4,2,t,i)},useMemo:function(t,i){var r=ii();return i=i===void 0?null:i,t=t(),r.memoizedState=[t,i],t},useReducer:function(t,i,r){var a=ii();return i=r!==void 0?r(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=ug.bind(null,Mt,t),[a.memoizedState,t]},useRef:function(t){var i=ii();return t={current:t},i.memoizedState=t},useState:Kf,useDebugValue:ou,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Kf(!1),i=t[0];return t=lg.bind(null,t[1]),ii().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,r){var a=Mt,f=ii();if(_t){if(r===void 0)throw Error(n(407));r=r()}else{if(r=i(),Wt===null)throw Error(n(349));(cr&30)!==0||jf(a,i,r)}f.memoizedState=r;var h={value:r,getSnapshot:i};return f.queue=h,Jf(Yf.bind(null,a,h,t),[t]),a.flags|=2048,eo(9,qf.bind(null,a,h,r,i),void 0,null),r},useId:function(){var t=ii(),i=Wt.identifierPrefix;if(_t){var r=pi,a=hi;r=(a&~(1<<32-pt(a)-1)).toString(32)+r,i=":"+i+"R"+r,r=Qs++,0<r&&(i+="H"+r.toString(32)),i+=":"}else r=ag++,i=":"+i+"r"+r.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},dg={readContext:Fn,useCallback:rd,useContext:Fn,useEffect:su,useImperativeHandle:id,useInsertionEffect:ed,useLayoutEffect:td,useMemo:sd,useReducer:iu,useRef:Qf,useState:function(){return iu(Js)},useDebugValue:ou,useDeferredValue:function(t){var i=Un();return od(i,Nt.memoizedState,t)},useTransition:function(){var t=iu(Js)[0],i=Un().memoizedState;return[t,i]},useMutableSource:Hf,useSyncExternalStore:Xf,useId:ad,unstable_isNewReconciler:!1},hg={readContext:Fn,useCallback:rd,useContext:Fn,useEffect:su,useImperativeHandle:id,useInsertionEffect:ed,useLayoutEffect:td,useMemo:sd,useReducer:ru,useRef:Qf,useState:function(){return ru(Js)},useDebugValue:ou,useDeferredValue:function(t){var i=Un();return Nt===null?i.memoizedState=t:od(i,Nt.memoizedState,t)},useTransition:function(){var t=ru(Js)[0],i=Un().memoizedState;return[t,i]},useMutableSource:Hf,useSyncExternalStore:Xf,useId:ad,unstable_isNewReconciler:!1};function Hn(t,i){if(t&&t.defaultProps){i=q({},i),t=t.defaultProps;for(var r in t)i[r]===void 0&&(i[r]=t[r]);return i}return i}function au(t,i,r,a){i=t.memoizedState,r=r(a,i),r=r==null?i:q({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ua={isMounted:function(t){return(t=t._reactInternals)?je(t)===t:!1},enqueueSetState:function(t,i,r){t=t._reactInternals;var a=cn(),f=Gi(t),h=gi(a,f);h.payload=i,r!=null&&(h.callback=r),i=Ui(t,h,f),i!==null&&(qn(i,t,f,a),ta(i,t,f))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var a=cn(),f=Gi(t),h=gi(a,f);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Ui(t,h,f),i!==null&&(qn(i,t,f,a),ta(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=cn(),a=Gi(t),f=gi(r,a);f.tag=2,i!=null&&(f.callback=i),i=Ui(t,f,a),i!==null&&(qn(i,t,a,r),ta(i,t,a))}};function fd(t,i,r,a,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,S):i.prototype&&i.prototype.isPureReactComponent?!Bs(r,a)||!Bs(f,h):!0}function dd(t,i,r){var a=!1,f=ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Fn(h):(f=vn(i)?sr:en.current,a=i.contextTypes,h=(a=a!=null)?Vr(t,f):ki),i=new i(r,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ua,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function hd(t,i,r,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,a),i.state!==t&&ua.enqueueReplaceState(i,i.state,null)}function lu(t,i,r,a){var f=t.stateNode;f.props=r,f.state=t.memoizedState,f.refs={},Yl(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Fn(h):(h=vn(i)?sr:en.current,f.context=Vr(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(au(t,i,h,r),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ua.enqueueReplaceState(f,f.state,null),na(t,r,f,a),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function $r(t,i){try{var r="",a=i;do r+=G(a),a=a.return;while(a);var f=r}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function uu(t,i,r){return{value:t,source:null,stack:r??null,digest:i??null}}function cu(t,i){try{console.error(i.value)}catch(r){setTimeout(function(){throw r})}}var pg=typeof WeakMap=="function"?WeakMap:Map;function pd(t,i,r){r=gi(-1,r),r.tag=3,r.payload={element:null};var a=i.value;return r.callback=function(){ga||(ga=!0,Tu=a),cu(t,i)},r}function md(t,i,r){r=gi(-1,r),r.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var f=i.value;r.payload=function(){return a(f)},r.callback=function(){cu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(r.callback=function(){cu(t,i),typeof a!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})}),r}function gd(t,i,r){var a=t.pingCache;if(a===null){a=t.pingCache=new pg;var f=new Set;a.set(i,f)}else f=a.get(i),f===void 0&&(f=new Set,a.set(i,f));f.has(r)||(f.add(r),t=Ag.bind(null,t,i,r),i.then(t,t))}function vd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function _d(t,i,r,a,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(i=gi(-1,1),i.tag=2,Ui(r,i,1))),r.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var mg=b.ReactCurrentOwner,_n=!1;function un(t,i,r,a){i.child=t===null?Uf(i,null,r,a):Xr(i,t.child,r,a)}function xd(t,i,r,a,f){r=r.render;var h=i.ref;return qr(i,f),a=tu(t,i,r,a,h,f),r=nu(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,vi(t,i,f)):(_t&&r&&Ul(i),i.flags|=1,un(t,i,a,f),i.child)}function yd(t,i,r,a,f){if(t===null){var h=r.type;return typeof h=="function"&&!Du(h)&&h.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(i.tag=15,i.type=h,Sd(t,i,h,a,f)):(t=Ma(r.type,null,a,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:Bs,r(S,a)&&t.ref===i.ref)return vi(t,i,f)}return i.flags|=1,t=Hi(h,a),t.ref=i.ref,t.return=i,i.child=t}function Sd(t,i,r,a,f){if(t!==null){var h=t.memoizedProps;if(Bs(h,a)&&t.ref===i.ref)if(_n=!1,i.pendingProps=a=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,vi(t,i,f)}return fu(t,i,r,a,f)}function Md(t,i,r){var a=i.pendingProps,f=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Kr,Cn),Cn|=r;else{if((r&1073741824)===0)return t=h!==null?h.baseLanes|r:r,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ft(Kr,Cn),Cn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:r,ft(Kr,Cn),Cn|=a}else h!==null?(a=h.baseLanes|r,i.memoizedState=null):a=r,ft(Kr,Cn),Cn|=a;return un(t,i,f,r),i.child}function wd(t,i){var r=i.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(i.flags|=512,i.flags|=2097152)}function fu(t,i,r,a,f){var h=vn(r)?sr:en.current;return h=Vr(i,h),qr(i,f),r=tu(t,i,r,a,h,f),a=nu(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,vi(t,i,f)):(_t&&a&&Ul(i),i.flags|=1,un(t,i,r,f),i.child)}function Ed(t,i,r,a,f){if(vn(r)){var h=!0;qo(i)}else h=!1;if(qr(i,f),i.stateNode===null)fa(t,i),dd(i,r,a),lu(i,r,a,f),a=!0;else if(t===null){var S=i.stateNode,P=i.memoizedProps;S.props=P;var F=S.context,Q=r.contextType;typeof Q=="object"&&Q!==null?Q=Fn(Q):(Q=vn(r)?sr:en.current,Q=Vr(i,Q));var pe=r.getDerivedStateFromProps,ge=typeof pe=="function"||typeof S.getSnapshotBeforeUpdate=="function";ge||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(P!==a||F!==Q)&&hd(i,S,a,Q),Fi=!1;var he=i.memoizedState;S.state=he,na(i,a,S,f),F=i.memoizedState,P!==a||he!==F||gn.current||Fi?(typeof pe=="function"&&(au(i,r,pe,a),F=i.memoizedState),(P=Fi||fd(i,r,P,a,he,F,Q))?(ge||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(i.flags|=4194308)):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=F),S.props=a,S.state=F,S.context=Q,a=P):(typeof S.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{S=i.stateNode,Bf(t,i),P=i.memoizedProps,Q=i.type===i.elementType?P:Hn(i.type,P),S.props=Q,ge=i.pendingProps,he=S.context,F=r.contextType,typeof F=="object"&&F!==null?F=Fn(F):(F=vn(r)?sr:en.current,F=Vr(i,F));var be=r.getDerivedStateFromProps;(pe=typeof be=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(P!==ge||he!==F)&&hd(i,S,a,F),Fi=!1,he=i.memoizedState,S.state=he,na(i,a,S,f);var Re=i.memoizedState;P!==ge||he!==Re||gn.current||Fi?(typeof be=="function"&&(au(i,r,be,a),Re=i.memoizedState),(Q=Fi||fd(i,r,Q,a,he,Re,F)||!1)?(pe||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(a,Re,F),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(a,Re,F)),typeof S.componentDidUpdate=="function"&&(i.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof S.componentDidUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=Re),S.props=a,S.state=Re,S.context=F,a=Q):(typeof S.componentDidUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(i.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(i.flags|=1024),a=!1)}return du(t,i,r,a,h,f)}function du(t,i,r,a,f,h){wd(t,i);var S=(i.flags&128)!==0;if(!a&&!S)return f&&Lf(i,r,!1),vi(t,i,h);a=i.stateNode,mg.current=i;var P=S&&typeof r.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&S?(i.child=Xr(i,t.child,null,h),i.child=Xr(i,null,P,h)):un(t,i,P,h),i.memoizedState=a.state,f&&Lf(i,r,!0),i.child}function Td(t){var i=t.stateNode;i.pendingContext?bf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&bf(t,i.context,!1),$l(t,i.containerInfo)}function Cd(t,i,r,a,f){return Hr(),Gl(f),i.flags|=256,un(t,i,r,a),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bd(t,i,r){var a=i.pendingProps,f=St.current,h=!1,S=(i.flags&128)!==0,P;if((P=S)||(P=t!==null&&t.memoizedState===null?!1:(f&2)!==0),P?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),ft(St,f&1),t===null)return Vl(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(S=a.children,t=a.fallback,h?(a=i.mode,h=i.child,S={mode:"hidden",children:S},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=S):h=wa(S,a,0,null),t=mr(t,a,r,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=pu(r),i.memoizedState=hu,t):mu(i,S));if(f=t.memoizedState,f!==null&&(P=f.dehydrated,P!==null))return gg(t,i,S,a,P,f,r);if(h){h=a.fallback,S=i.mode,f=t.child,P=f.sibling;var F={mode:"hidden",children:a.children};return(S&1)===0&&i.child!==f?(a=i.child,a.childLanes=0,a.pendingProps=F,i.deletions=null):(a=Hi(f,F),a.subtreeFlags=f.subtreeFlags&14680064),P!==null?h=Hi(P,h):(h=mr(h,S,r,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,S=t.child.memoizedState,S=S===null?pu(r):{baseLanes:S.baseLanes|r,cachePool:null,transitions:S.transitions},h.memoizedState=S,h.childLanes=t.childLanes&~r,i.memoizedState=hu,a}return h=t.child,t=h.sibling,a=Hi(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=r),a.return=i,a.sibling=null,t!==null&&(r=i.deletions,r===null?(i.deletions=[t],i.flags|=16):r.push(t)),i.child=a,i.memoizedState=null,a}function mu(t,i){return i=wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ca(t,i,r,a){return a!==null&&Gl(a),Xr(i,t.child,null,r),t=mu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function gg(t,i,r,a,f,h,S){if(r)return i.flags&256?(i.flags&=-257,a=uu(Error(n(422))),ca(t,i,S,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,f=i.mode,a=wa({mode:"visible",children:a.children},f,0,null),h=mr(h,f,S,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Xr(i,t.child,null,S),i.child.memoizedState=pu(S),i.memoizedState=hu,h);if((i.mode&1)===0)return ca(t,i,S,null);if(f.data==="$!"){if(a=f.nextSibling&&f.nextSibling.dataset,a)var P=a.dgst;return a=P,h=Error(n(419)),a=uu(h,a,void 0),ca(t,i,S,a)}if(P=(S&t.childLanes)!==0,_n||P){if(a=Wt,a!==null){switch(S&-S){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(a.suspendedLanes|S))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,mi(t,f),qn(a,t,f,-1))}return Pu(),a=uu(Error(n(421))),ca(t,i,S,a)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Lg.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Tn=Ii(f.nextSibling),En=i,_t=!0,Wn=null,t!==null&&(kn[zn++]=hi,kn[zn++]=pi,kn[zn++]=or,hi=t.id,pi=t.overflow,or=i),i=mu(i,a.children),i.flags|=4096,i)}function Ad(t,i,r){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),jl(t.return,i,r)}function gu(t,i,r,a,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=r,h.tailMode=f)}function Ld(t,i,r){var a=i.pendingProps,f=a.revealOrder,h=a.tail;if(un(t,i,a.children,r),a=St.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ad(t,r,i);else if(t.tag===19)Ad(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ft(St,a),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&ia(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),gu(i,!1,f,r,h);break;case"backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ia(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}gu(i,!0,r,null,h);break;case"together":gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function vi(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,(r&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,r=Hi(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Hi(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function vg(t,i,r){switch(i.tag){case 3:Td(i),Hr();break;case 5:Wf(i);break;case 1:vn(i.type)&&qo(i);break;case 4:$l(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,f=i.memoizedProps.value;ft(Jo,a._currentValue),a._currentValue=f;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ft(St,St.current&1),i.flags|=128,null):(r&i.child.childLanes)!==0?bd(t,i,r):(ft(St,St.current&1),t=vi(t,i,r),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(a=(r&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Ld(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ft(St,St.current),a)break;return null;case 22:case 23:return i.lanes=0,Md(t,i,r)}return vi(t,i,r)}var Rd,vu,Pd,Dd;Rd=function(t,i){for(var r=i.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},vu=function(){},Pd=function(t,i,r,a){var f=t.memoizedProps;if(f!==a){t=i.stateNode,ur(ni.current);var h=null;switch(r){case"input":f=Dt(t,f),a=Dt(t,a),h=[];break;case"select":f=q({},f,{value:void 0}),a=q({},a,{value:void 0}),h=[];break;case"textarea":f=R(t,f),a=R(t,a),h=[];break;default:typeof f.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Ho)}tt(r,a);var S;r=null;for(Q in f)if(!a.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var P=f[Q];for(S in P)P.hasOwnProperty(S)&&(r||(r={}),r[S]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in a){var F=a[Q];if(P=f?.[Q],a.hasOwnProperty(Q)&&F!==P&&(F!=null||P!=null))if(Q==="style")if(P){for(S in P)!P.hasOwnProperty(S)||F&&F.hasOwnProperty(S)||(r||(r={}),r[S]="");for(S in F)F.hasOwnProperty(S)&&P[S]!==F[S]&&(r||(r={}),r[S]=F[S])}else r||(h||(h=[]),h.push(Q,r)),r=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,P=P?P.__html:void 0,F!=null&&P!==F&&(h=h||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&mt("scroll",t),h||P===F||(h=[])):(h=h||[]).push(Q,F))}r&&(h=h||[]).push("style",r);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Dd=function(t,i,r,a){r!==a&&(i.flags|=4)};function to(t,i){if(!_t)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,a=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,a|=f.subtreeFlags&14680064,a|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,a|=f.subtreeFlags,a|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=a,t.childLanes=r,i}function _g(t,i,r){var a=i.pendingProps;switch(Ol(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return vn(i.type)&&jo(),nn(i),null;case 3:return a=i.stateNode,Yr(),gt(gn),gt(en),Ql(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ko(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Wn!==null&&(Au(Wn),Wn=null))),vu(t,i),nn(i),null;case 5:Zl(i);var f=ur(Zs.current);if(r=i.type,t!==null&&i.stateNode!=null)Pd(t,i,r,a,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return nn(i),null}if(t=ur(ni.current),Ko(i)){a=i.stateNode,r=i.type;var h=i.memoizedProps;switch(a[ti]=i,a[Xs]=h,t=(i.mode&1)!==0,r){case"dialog":mt("cancel",a),mt("close",a);break;case"iframe":case"object":case"embed":mt("load",a);break;case"video":case"audio":for(f=0;f<Gs.length;f++)mt(Gs[f],a);break;case"source":mt("error",a);break;case"img":case"image":case"link":mt("error",a),mt("load",a);break;case"details":mt("toggle",a);break;case"input":mn(a,h),mt("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},mt("invalid",a);break;case"textarea":E(a,h),mt("invalid",a)}tt(r,h),f=null;for(var S in h)if(h.hasOwnProperty(S)){var P=h[S];S==="children"?typeof P=="string"?a.textContent!==P&&(h.suppressHydrationWarning!==!0&&Wo(a.textContent,P,t),f=["children",P]):typeof P=="number"&&a.textContent!==""+P&&(h.suppressHydrationWarning!==!0&&Wo(a.textContent,P,t),f=["children",""+P]):o.hasOwnProperty(S)&&P!=null&&S==="onScroll"&&mt("scroll",a)}switch(r){case"input":Ye(a),dt(a,h,!0);break;case"textarea":Ye(a),Me(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Ho)}a=f,i.updateQueue=a,a!==null&&(i.flags|=4)}else{S=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=we(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=S.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=S.createElement(r,{is:a.is}):(t=S.createElement(r),r==="select"&&(S=t,a.multiple?S.multiple=!0:a.size&&(S.size=a.size))):t=S.createElementNS(t,r),t[ti]=i,t[Xs]=a,Rd(t,i,!1,!1),i.stateNode=t;e:{switch(S=ut(r,a),r){case"dialog":mt("cancel",t),mt("close",t),f=a;break;case"iframe":case"object":case"embed":mt("load",t),f=a;break;case"video":case"audio":for(f=0;f<Gs.length;f++)mt(Gs[f],t);f=a;break;case"source":mt("error",t),f=a;break;case"img":case"image":case"link":mt("error",t),mt("load",t),f=a;break;case"details":mt("toggle",t),f=a;break;case"input":mn(t,a),f=Dt(t,a),mt("invalid",t);break;case"option":f=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},f=q({},a,{value:void 0}),mt("invalid",t);break;case"textarea":E(t,a),f=R(t,a),mt("invalid",t);break;default:f=a}tt(r,f),P=f;for(h in P)if(P.hasOwnProperty(h)){var F=P[h];h==="style"?Ve(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ae(t,F)):h==="children"?typeof F=="string"?(r!=="textarea"||F!=="")&&ue(t,F):typeof F=="number"&&ue(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?F!=null&&h==="onScroll"&&mt("scroll",t):F!=null&&L(t,h,F,S))}switch(r){case"input":Ye(t),dt(t,a,!1);break;case"textarea":Ye(t),Me(t);break;case"option":a.value!=null&&t.setAttribute("value",""+xe(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Ot(t,!!a.multiple,h,!1):a.defaultValue!=null&&Ot(t,!!a.multiple,a.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ho)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nn(i),null;case 6:if(t&&i.stateNode!=null)Dd(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(r=ur(Zs.current),ur(ni.current),Ko(i)){if(a=i.stateNode,r=i.memoizedProps,a[ti]=i,(h=a.nodeValue!==r)&&(t=En,t!==null))switch(t.tag){case 3:Wo(a.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(a.nodeValue,r,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[ti]=i,i.stateNode=a}return nn(i),null;case 13:if(gt(St),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Tn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kf(),Hr(),i.flags|=98560,h=!1;else if(h=Ko(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ti]=i}else Hr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),h=!1}else Wn!==null&&(Au(Wn),Wn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=r,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(St.current&1)!==0?kt===0&&(kt=3):Pu())),i.updateQueue!==null&&(i.flags|=4),nn(i),null);case 4:return Yr(),vu(t,i),t===null&&Ws(i.stateNode.containerInfo),nn(i),null;case 10:return Xl(i.type._context),nn(i),null;case 17:return vn(i.type)&&jo(),nn(i),null;case 19:if(gt(St),h=i.memoizedState,h===null)return nn(i),null;if(a=(i.flags&128)!==0,S=h.rendering,S===null)if(a)to(h,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(S=ia(t),S!==null){for(i.flags|=128,to(h,!1),a=S.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=r,r=i.child;r!==null;)h=r,t=a,h.flags&=14680066,S=h.alternate,S===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=S.childLanes,h.lanes=S.lanes,h.child=S.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=S.memoizedProps,h.memoizedState=S.memoizedState,h.updateQueue=S.updateQueue,h.type=S.type,t=S.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ft(St,St.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>Qr&&(i.flags|=128,a=!0,to(h,!1),i.lanes=4194304)}else{if(!a)if(t=ia(S),t!==null){if(i.flags|=128,a=!0,r=t.updateQueue,r!==null&&(i.updateQueue=r,i.flags|=4),to(h,!0),h.tail===null&&h.tailMode==="hidden"&&!S.alternate&&!_t)return nn(i),null}else 2*Fe()-h.renderingStartTime>Qr&&r!==1073741824&&(i.flags|=128,a=!0,to(h,!1),i.lanes=4194304);h.isBackwards?(S.sibling=i.child,i.child=S):(r=h.last,r!==null?r.sibling=S:i.child=S,h.last=S)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,r=St.current,ft(St,a?r&1|2:r&1),i):(nn(i),null);case 22:case 23:return Ru(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Cn&1073741824)!==0&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function xg(t,i){switch(Ol(i),i.tag){case 1:return vn(i.type)&&jo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Yr(),gt(gn),gt(en),Ql(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Zl(i),null;case 13:if(gt(St),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Hr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return gt(St),null;case 4:return Yr(),null;case 10:return Xl(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var da=!1,rn=!1,yg=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Zr(t,i){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Ct(t,i,a)}else r.current=null}function _u(t,i,r){try{r()}catch(a){Ct(t,i,a)}}var Id=!1;function Sg(t,i){if(Rl=Do,t=ff(),Ml(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var f=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,P=-1,F=-1,Q=0,pe=0,ge=t,he=null;t:for(;;){for(var be;ge!==r||f!==0&&ge.nodeType!==3||(P=S+f),ge!==h||a!==0&&ge.nodeType!==3||(F=S+a),ge.nodeType===3&&(S+=ge.nodeValue.length),(be=ge.firstChild)!==null;)he=ge,ge=be;for(;;){if(ge===t)break t;if(he===r&&++Q===f&&(P=S),he===h&&++pe===a&&(F=S),(be=ge.nextSibling)!==null)break;ge=he,he=ge.parentNode}ge=be}r=P===-1||F===-1?null:{start:P,end:F}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pl={focusedElem:t,selectionRange:r},Do=!1,Le=i;Le!==null;)if(i=Le,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Le=t;else for(;Le!==null;){i=Le;try{var Re=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Re!==null){var De=Re.memoizedProps,At=Re.memoizedState,X=i.stateNode,U=X.getSnapshotBeforeUpdate(i.elementType===i.type?De:Hn(i.type,De),At);X.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(_e){Ct(i,i.return,_e)}if(t=i.sibling,t!==null){t.return=i.return,Le=t;break}Le=i.return}return Re=Id,Id=!1,Re}function no(t,i,r){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var f=a=a.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&_u(i,r,h)}f=f.next}while(f!==a)}}function ha(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.create;r.destroy=a()}r=r.next}while(r!==i)}}function xu(t){var i=t.ref;if(i!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof i=="function"?i(t):i.current=t}}function Nd(t){var i=t.alternate;i!==null&&(t.alternate=null,Nd(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ti],delete i[Xs],delete i[kl],delete i[ig],delete i[rg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kd(t){return t.tag===5||t.tag===3||t.tag===4}function zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yu(t,i,r){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?r.nodeType===8?r.parentNode.insertBefore(t,i):r.insertBefore(t,i):(r.nodeType===8?(i=r.parentNode,i.insertBefore(t,r)):(i=r,i.appendChild(t)),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ho));else if(a!==4&&(t=t.child,t!==null))for(yu(t,i,r),t=t.sibling;t!==null;)yu(t,i,r),t=t.sibling}function Su(t,i,r){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Su(t,i,r),t=t.sibling;t!==null;)Su(t,i,r),t=t.sibling}var qt=null,Xn=!1;function Oi(t,i,r){for(r=r.child;r!==null;)Fd(t,i,r),r=r.sibling}function Fd(t,i,r){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Lt,r)}catch{}switch(r.tag){case 5:rn||Zr(r,i);case 6:var a=qt,f=Xn;qt=null,Oi(t,i,r),qt=a,Xn=f,qt!==null&&(Xn?(t=qt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):qt.removeChild(r.stateNode));break;case 18:qt!==null&&(Xn?(t=qt,r=r.stateNode,t.nodeType===8?Nl(t.parentNode,r):t.nodeType===1&&Nl(t,r),Ns(t)):Nl(qt,r.stateNode));break;case 4:a=qt,f=Xn,qt=r.stateNode.containerInfo,Xn=!0,Oi(t,i,r),qt=a,Xn=f;break;case 0:case 11:case 14:case 15:if(!rn&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){f=a=a.next;do{var h=f,S=h.destroy;h=h.tag,S!==void 0&&((h&2)!==0||(h&4)!==0)&&_u(r,i,S),f=f.next}while(f!==a)}Oi(t,i,r);break;case 1:if(!rn&&(Zr(r,i),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(P){Ct(r,i,P)}Oi(t,i,r);break;case 21:Oi(t,i,r);break;case 22:r.mode&1?(rn=(a=rn)||r.memoizedState!==null,Oi(t,i,r),rn=a):Oi(t,i,r);break;default:Oi(t,i,r)}}function Ud(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new yg),i.forEach(function(a){var f=Rg.bind(null,t,a);r.has(a)||(r.add(a),a.then(f,f))})}}function jn(t,i){var r=i.deletions;if(r!==null)for(var a=0;a<r.length;a++){var f=r[a];try{var h=t,S=i,P=S;e:for(;P!==null;){switch(P.tag){case 5:qt=P.stateNode,Xn=!1;break e;case 3:qt=P.stateNode.containerInfo,Xn=!0;break e;case 4:qt=P.stateNode.containerInfo,Xn=!0;break e}P=P.return}if(qt===null)throw Error(n(160));Fd(h,S,f),qt=null,Xn=!1;var F=f.alternate;F!==null&&(F.return=null),f.return=null}catch(Q){Ct(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Od(i,t),i=i.sibling}function Od(t,i){var r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(i,t),ri(t),a&4){try{no(3,t,t.return),ha(3,t)}catch(De){Ct(t,t.return,De)}try{no(5,t,t.return)}catch(De){Ct(t,t.return,De)}}break;case 1:jn(i,t),ri(t),a&512&&r!==null&&Zr(r,r.return);break;case 5:if(jn(i,t),ri(t),a&512&&r!==null&&Zr(r,r.return),t.flags&32){var f=t.stateNode;try{ue(f,"")}catch(De){Ct(t,t.return,De)}}if(a&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,S=r!==null?r.memoizedProps:h,P=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{P==="input"&&h.type==="radio"&&h.name!=null&&jt(f,h),ut(P,S);var Q=ut(P,h);for(S=0;S<F.length;S+=2){var pe=F[S],ge=F[S+1];pe==="style"?Ve(f,ge):pe==="dangerouslySetInnerHTML"?Ae(f,ge):pe==="children"?ue(f,ge):L(f,pe,ge,Q)}switch(P){case"input":It(f,h);break;case"textarea":se(f,h);break;case"select":var he=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var be=h.value;be!=null?Ot(f,!!h.multiple,be,!1):he!==!!h.multiple&&(h.defaultValue!=null?Ot(f,!!h.multiple,h.defaultValue,!0):Ot(f,!!h.multiple,h.multiple?[]:"",!1))}f[Xs]=h}catch(De){Ct(t,t.return,De)}}break;case 6:if(jn(i,t),ri(t),a&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(De){Ct(t,t.return,De)}}break;case 3:if(jn(i,t),ri(t),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Ns(i.containerInfo)}catch(De){Ct(t,t.return,De)}break;case 4:jn(i,t),ri(t);break;case 13:jn(i,t),ri(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(Eu=Fe())),a&4&&Ud(t);break;case 22:if(pe=r!==null&&r.memoizedState!==null,t.mode&1?(rn=(Q=rn)||pe,jn(i,t),rn=Q):jn(i,t),ri(t),a&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!pe&&(t.mode&1)!==0)for(Le=t,pe=t.child;pe!==null;){for(ge=Le=pe;Le!==null;){switch(he=Le,be=he.child,he.tag){case 0:case 11:case 14:case 15:no(4,he,he.return);break;case 1:Zr(he,he.return);var Re=he.stateNode;if(typeof Re.componentWillUnmount=="function"){a=he,r=he.return;try{i=a,Re.props=i.memoizedProps,Re.state=i.memoizedState,Re.componentWillUnmount()}catch(De){Ct(a,r,De)}}break;case 5:Zr(he,he.return);break;case 22:if(he.memoizedState!==null){Gd(ge);continue}}be!==null?(be.return=he,Le=be):Gd(ge)}pe=pe.sibling}e:for(pe=null,ge=t;;){if(ge.tag===5){if(pe===null){pe=ge;try{f=ge.stateNode,Q?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(P=ge.stateNode,F=ge.memoizedProps.style,S=F!=null&&F.hasOwnProperty("display")?F.display:null,P.style.display=He("display",S))}catch(De){Ct(t,t.return,De)}}}else if(ge.tag===6){if(pe===null)try{ge.stateNode.nodeValue=Q?"":ge.memoizedProps}catch(De){Ct(t,t.return,De)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===t)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===t)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===t)break e;pe===ge&&(pe=null),ge=ge.return}pe===ge&&(pe=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:jn(i,t),ri(t),a&4&&Ud(t);break;case 21:break;default:jn(i,t),ri(t)}}function ri(t){var i=t.flags;if(i&2){try{e:{for(var r=t.return;r!==null;){if(kd(r)){var a=r;break e}r=r.return}throw Error(n(160))}switch(a.tag){case 5:var f=a.stateNode;a.flags&32&&(ue(f,""),a.flags&=-33);var h=zd(t);Su(t,h,f);break;case 3:case 4:var S=a.stateNode.containerInfo,P=zd(t);yu(t,P,S);break;default:throw Error(n(161))}}catch(F){Ct(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Mg(t,i,r){Le=t,Bd(t)}function Bd(t,i,r){for(var a=(t.mode&1)!==0;Le!==null;){var f=Le,h=f.child;if(f.tag===22&&a){var S=f.memoizedState!==null||da;if(!S){var P=f.alternate,F=P!==null&&P.memoizedState!==null||rn;P=da;var Q=rn;if(da=S,(rn=F)&&!Q)for(Le=f;Le!==null;)S=Le,F=S.child,S.tag===22&&S.memoizedState!==null?Wd(f):F!==null?(F.return=S,Le=F):Wd(f);for(;h!==null;)Le=h,Bd(h),h=h.sibling;Le=f,da=P,rn=Q}Vd(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Le=h):Vd(t)}}function Vd(t){for(;Le!==null;){var i=Le;if((i.flags&8772)!==0){var r=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:rn||ha(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!rn)if(r===null)a.componentDidMount();else{var f=i.elementType===i.type?r.memoizedProps:Hn(i.type,r.memoizedProps);a.componentDidUpdate(f,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Gf(i,h,a);break;case 3:var S=i.updateQueue;if(S!==null){if(r=null,i.child!==null)switch(i.child.tag){case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}Gf(i,S,r)}break;case 5:var P=i.stateNode;if(r===null&&i.flags&4){r=P;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&r.focus();break;case"img":F.src&&(r.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var pe=Q.memoizedState;if(pe!==null){var ge=pe.dehydrated;ge!==null&&Ns(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rn||i.flags&512&&xu(i)}catch(he){Ct(i,i.return,he)}}if(i===t){Le=null;break}if(r=i.sibling,r!==null){r.return=i.return,Le=r;break}Le=i.return}}function Gd(t){for(;Le!==null;){var i=Le;if(i===t){Le=null;break}var r=i.sibling;if(r!==null){r.return=i.return,Le=r;break}Le=i.return}}function Wd(t){for(;Le!==null;){var i=Le;try{switch(i.tag){case 0:case 11:case 15:var r=i.return;try{ha(4,i)}catch(F){Ct(i,r,F)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var f=i.return;try{a.componentDidMount()}catch(F){Ct(i,f,F)}}var h=i.return;try{xu(i)}catch(F){Ct(i,h,F)}break;case 5:var S=i.return;try{xu(i)}catch(F){Ct(i,S,F)}}}catch(F){Ct(i,i.return,F)}if(i===t){Le=null;break}var P=i.sibling;if(P!==null){P.return=i.return,Le=P;break}Le=i.return}}var wg=Math.ceil,pa=b.ReactCurrentDispatcher,Mu=b.ReactCurrentOwner,On=b.ReactCurrentBatchConfig,rt=0,Wt=null,Rt=null,Yt=0,Cn=0,Kr=Ni(0),kt=0,io=null,fr=0,ma=0,wu=0,ro=null,xn=null,Eu=0,Qr=1/0,_i=null,ga=!1,Tu=null,Bi=null,va=!1,Vi=null,_a=0,so=0,Cu=null,xa=-1,ya=0;function cn(){return(rt&6)!==0?Fe():xa!==-1?xa:xa=Fe()}function Gi(t){return(t.mode&1)===0?1:(rt&2)!==0&&Yt!==0?Yt&-Yt:og.transition!==null?(ya===0&&(ya=kc()),ya):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Hc(t.type)),t)}function qn(t,i,r,a){if(50<so)throw so=0,Cu=null,Error(n(185));Ls(t,r,a),((rt&2)===0||t!==Wt)&&(t===Wt&&((rt&2)===0&&(ma|=r),kt===4&&Wi(t,Yt)),yn(t,a),r===1&&rt===0&&(i.mode&1)===0&&(Qr=Fe()+500,Yo&&zi()))}function yn(t,i){var r=t.callbackNode;om(t,i);var a=Lo(t,t===Wt?Yt:0);if(a===0)r!==null&&Nn(r),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(r!=null&&Nn(r),i===1)t.tag===0?sg(Xd.bind(null,t)):Rf(Xd.bind(null,t)),tg(function(){(rt&6)===0&&zi()}),r=null;else{switch(zc(a)){case 1:r=Tt;break;case 4:r=ei;break;case 16:r=nr;break;case 536870912:r=Pr;break;default:r=nr}r=Jd(r,Hd.bind(null,t))}t.callbackPriority=i,t.callbackNode=r}}function Hd(t,i){if(xa=-1,ya=0,(rt&6)!==0)throw Error(n(327));var r=t.callbackNode;if(Jr()&&t.callbackNode!==r)return null;var a=Lo(t,t===Wt?Yt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Sa(t,a);else{i=a;var f=rt;rt|=2;var h=qd();(Wt!==t||Yt!==i)&&(_i=null,Qr=Fe()+500,hr(t,i));do try{Cg();break}catch(P){jd(t,P)}while(!0);Hl(),pa.current=h,rt=f,Rt!==null?i=0:(Wt=null,Yt=0,i=kt)}if(i!==0){if(i===2&&(f=ol(t),f!==0&&(a=f,i=bu(t,f))),i===1)throw r=io,hr(t,0),Wi(t,a),yn(t,Fe()),r;if(i===6)Wi(t,a);else{if(f=t.current.alternate,(a&30)===0&&!Eg(f)&&(i=Sa(t,a),i===2&&(h=ol(t),h!==0&&(a=h,i=bu(t,h))),i===1))throw r=io,hr(t,0),Wi(t,a),yn(t,Fe()),r;switch(t.finishedWork=f,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:pr(t,xn,_i);break;case 3:if(Wi(t,a),(a&130023424)===a&&(i=Eu+500-Fe(),10<i)){if(Lo(t,0)!==0)break;if(f=t.suspendedLanes,(f&a)!==a){cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Il(pr.bind(null,t,xn,_i),i);break}pr(t,xn,_i);break;case 4:if(Wi(t,a),(a&4194240)===a)break;for(i=t.eventTimes,f=-1;0<a;){var S=31-pt(a);h=1<<S,S=i[S],S>f&&(f=S),a&=~h}if(a=f,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*wg(a/1960))-a,10<a){t.timeoutHandle=Il(pr.bind(null,t,xn,_i),a);break}pr(t,xn,_i);break;case 5:pr(t,xn,_i);break;default:throw Error(n(329))}}}return yn(t,Fe()),t.callbackNode===r?Hd.bind(null,t):null}function bu(t,i){var r=ro;return t.current.memoizedState.isDehydrated&&(hr(t,i).flags|=256),t=Sa(t,i),t!==2&&(i=xn,xn=r,i!==null&&Au(i)),t}function Au(t){xn===null?xn=t:xn.push.apply(xn,t)}function Eg(t){for(var i=t;;){if(i.flags&16384){var r=i.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var f=r[a],h=f.getSnapshot;f=f.value;try{if(!Gn(h(),f))return!1}catch{return!1}}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wi(t,i){for(i&=~wu,i&=~ma,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var r=31-pt(i),a=1<<r;t[r]=-1,i&=~a}}function Xd(t){if((rt&6)!==0)throw Error(n(327));Jr();var i=Lo(t,0);if((i&1)===0)return yn(t,Fe()),null;var r=Sa(t,i);if(t.tag!==0&&r===2){var a=ol(t);a!==0&&(i=a,r=bu(t,a))}if(r===1)throw r=io,hr(t,0),Wi(t,i),yn(t,Fe()),r;if(r===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,pr(t,xn,_i),yn(t,Fe()),null}function Lu(t,i){var r=rt;rt|=1;try{return t(i)}finally{rt=r,rt===0&&(Qr=Fe()+500,Yo&&zi())}}function dr(t){Vi!==null&&Vi.tag===0&&(rt&6)===0&&Jr();var i=rt;rt|=1;var r=On.transition,a=ot;try{if(On.transition=null,ot=1,t)return t()}finally{ot=a,On.transition=r,rt=i,(rt&6)===0&&zi()}}function Ru(){Cn=Kr.current,gt(Kr)}function hr(t,i){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,eg(r)),Rt!==null)for(r=Rt.return;r!==null;){var a=r;switch(Ol(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&jo();break;case 3:Yr(),gt(gn),gt(en),Ql();break;case 5:Zl(a);break;case 4:Yr();break;case 13:gt(St);break;case 19:gt(St);break;case 10:Xl(a.type._context);break;case 22:case 23:Ru()}r=r.return}if(Wt=t,Rt=t=Hi(t.current,null),Yt=Cn=i,kt=0,io=null,wu=ma=fr=0,xn=ro=null,lr!==null){for(i=0;i<lr.length;i++)if(r=lr[i],a=r.interleaved,a!==null){r.interleaved=null;var f=a.next,h=r.pending;if(h!==null){var S=h.next;h.next=f,a.next=S}r.pending=a}lr=null}return t}function jd(t,i){do{var r=Rt;try{if(Hl(),ra.current=la,sa){for(var a=Mt.memoizedState;a!==null;){var f=a.queue;f!==null&&(f.pending=null),a=a.next}sa=!1}if(cr=0,Gt=Nt=Mt=null,Ks=!1,Qs=0,Mu.current=null,r===null||r.return===null){kt=1,io=i,Rt=null;break}e:{var h=t,S=r.return,P=r,F=i;if(i=Yt,P.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,pe=P,ge=pe.tag;if((pe.mode&1)===0&&(ge===0||ge===11||ge===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var be=vd(S);if(be!==null){be.flags&=-257,_d(be,S,P,h,i),be.mode&1&&gd(h,Q,i),i=be,F=Q;var Re=i.updateQueue;if(Re===null){var De=new Set;De.add(F),i.updateQueue=De}else Re.add(F);break e}else{if((i&1)===0){gd(h,Q,i),Pu();break e}F=Error(n(426))}}else if(_t&&P.mode&1){var At=vd(S);if(At!==null){(At.flags&65536)===0&&(At.flags|=256),_d(At,S,P,h,i),Gl($r(F,P));break e}}h=F=$r(F,P),kt!==4&&(kt=2),ro===null?ro=[h]:ro.push(h),h=S;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var X=pd(h,F,i);Vf(h,X);break e;case 1:P=F;var U=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Bi===null||!Bi.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var _e=md(h,P,i);Vf(h,_e);break e}}h=h.return}while(h!==null)}$d(r)}catch(ke){i=ke,Rt===r&&r!==null&&(Rt=r=r.return);continue}break}while(!0)}function qd(){var t=pa.current;return pa.current=la,t===null?la:t}function Pu(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||(fr&268435455)===0&&(ma&268435455)===0||Wi(Wt,Yt)}function Sa(t,i){var r=rt;rt|=2;var a=qd();(Wt!==t||Yt!==i)&&(_i=null,hr(t,i));do try{Tg();break}catch(f){jd(t,f)}while(!0);if(Hl(),rt=r,pa.current=a,Rt!==null)throw Error(n(261));return Wt=null,Yt=0,kt}function Tg(){for(;Rt!==null;)Yd(Rt)}function Cg(){for(;Rt!==null&&!ci();)Yd(Rt)}function Yd(t){var i=Qd(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,i===null?$d(t):Rt=i,Mu.current=null}function $d(t){var i=t;do{var r=i.alternate;if(t=i.return,(i.flags&32768)===0){if(r=_g(r,i,Cn),r!==null){Rt=r;return}}else{if(r=xg(r,i),r!==null){r.flags&=32767,Rt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Rt=null;return}}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=t}while(i!==null);kt===0&&(kt=5)}function pr(t,i,r){var a=ot,f=On.transition;try{On.transition=null,ot=1,bg(t,i,r,a)}finally{On.transition=f,ot=a}return null}function bg(t,i,r,a){do Jr();while(Vi!==null);if((rt&6)!==0)throw Error(n(327));r=t.finishedWork;var f=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=r.lanes|r.childLanes;if(am(t,h),t===Wt&&(Rt=Wt=null,Yt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||va||(va=!0,Jd(nr,function(){return Jr(),null})),h=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||h){h=On.transition,On.transition=null;var S=ot;ot=1;var P=rt;rt|=4,Mu.current=null,Sg(t,r),Od(r,t),qm(Pl),Do=!!Rl,Pl=Rl=null,t.current=r,Mg(r),Et(),rt=P,ot=S,On.transition=h}else t.current=r;if(va&&(va=!1,Vi=t,_a=f),h=t.pendingLanes,h===0&&(Bi=null),Cs(r.stateNode),yn(t,Fe()),i!==null)for(a=t.onRecoverableError,r=0;r<i.length;r++)f=i[r],a(f.value,{componentStack:f.stack,digest:f.digest});if(ga)throw ga=!1,t=Tu,Tu=null,t;return(_a&1)!==0&&t.tag!==0&&Jr(),h=t.pendingLanes,(h&1)!==0?t===Cu?so++:(so=0,Cu=t):so=0,zi(),null}function Jr(){if(Vi!==null){var t=zc(_a),i=On.transition,r=ot;try{if(On.transition=null,ot=16>t?16:t,Vi===null)var a=!1;else{if(t=Vi,Vi=null,_a=0,(rt&6)!==0)throw Error(n(331));var f=rt;for(rt|=4,Le=t.current;Le!==null;){var h=Le,S=h.child;if((Le.flags&16)!==0){var P=h.deletions;if(P!==null){for(var F=0;F<P.length;F++){var Q=P[F];for(Le=Q;Le!==null;){var pe=Le;switch(pe.tag){case 0:case 11:case 15:no(8,pe,h)}var ge=pe.child;if(ge!==null)ge.return=pe,Le=ge;else for(;Le!==null;){pe=Le;var he=pe.sibling,be=pe.return;if(Nd(pe),pe===Q){Le=null;break}if(he!==null){he.return=be,Le=he;break}Le=be}}}var Re=h.alternate;if(Re!==null){var De=Re.child;if(De!==null){Re.child=null;do{var At=De.sibling;De.sibling=null,De=At}while(De!==null)}}Le=h}}if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,Le=S;else e:for(;Le!==null;){if(h=Le,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:no(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,Le=X;break e}Le=h.return}}var U=t.current;for(Le=U;Le!==null;){S=Le;var $=S.child;if((S.subtreeFlags&2064)!==0&&$!==null)$.return=S,Le=$;else e:for(S=U;Le!==null;){if(P=Le,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:ha(9,P)}}catch(ke){Ct(P,P.return,ke)}if(P===S){Le=null;break e}var _e=P.sibling;if(_e!==null){_e.return=P.return,Le=_e;break e}Le=P.return}}if(rt=f,zi(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Lt,t)}catch{}a=!0}return a}finally{ot=r,On.transition=i}}return!1}function Zd(t,i,r){i=$r(r,i),i=pd(t,i,1),t=Ui(t,i,1),i=cn(),t!==null&&(Ls(t,1,i),yn(t,i))}function Ct(t,i,r){if(t.tag===3)Zd(t,t,r);else for(;i!==null;){if(i.tag===3){Zd(i,t,r);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bi===null||!Bi.has(a))){t=$r(r,t),t=md(i,t,1),i=Ui(i,t,1),t=cn(),i!==null&&(Ls(i,1,t),yn(i,t));break}}i=i.return}}function Ag(t,i,r){var a=t.pingCache;a!==null&&a.delete(i),i=cn(),t.pingedLanes|=t.suspendedLanes&r,Wt===t&&(Yt&r)===r&&(kt===4||kt===3&&(Yt&130023424)===Yt&&500>Fe()-Eu?hr(t,0):wu|=r),yn(t,i)}function Kd(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ao,Ao<<=1,(Ao&130023424)===0&&(Ao=4194304)));var r=cn();t=mi(t,i),t!==null&&(Ls(t,i,r),yn(t,r))}function Lg(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Kd(t,r)}function Rg(t,i){var r=0;switch(t.tag){case 13:var a=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Kd(t,r)}var Qd;Qd=function(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps||gn.current)_n=!0;else{if((t.lanes&r)===0&&(i.flags&128)===0)return _n=!1,vg(t,i,r);_n=(t.flags&131072)!==0}else _n=!1,_t&&(i.flags&1048576)!==0&&Pf(i,Zo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;fa(t,i),t=i.pendingProps;var f=Vr(i,en.current);qr(i,r),f=tu(null,i,a,t,f,r);var h=nu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(a)?(h=!0,qo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Yl(i),f.updater=ua,i.stateNode=f,f._reactInternals=i,lu(i,a,t,r),i=du(null,i,a,!0,h,r)):(i.tag=0,_t&&h&&Ul(i),un(null,i,f,r),i=i.child),i;case 16:a=i.elementType;e:{switch(fa(t,i),t=i.pendingProps,f=a._init,a=f(a._payload),i.type=a,f=i.tag=Dg(a),t=Hn(a,t),f){case 0:i=fu(null,i,a,t,r);break e;case 1:i=Ed(null,i,a,t,r);break e;case 11:i=xd(null,i,a,t,r);break e;case 14:i=yd(null,i,a,Hn(a.type,t),r);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Hn(a,f),fu(t,i,a,f,r);case 1:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Hn(a,f),Ed(t,i,a,f,r);case 3:e:{if(Td(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,f=h.element,Bf(t,i),na(i,a,null,r);var S=i.memoizedState;if(a=S.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=$r(Error(n(423)),i),i=Cd(t,i,a,r,f);break e}else if(a!==f){f=$r(Error(n(424)),i),i=Cd(t,i,a,r,f);break e}else for(Tn=Ii(i.stateNode.containerInfo.firstChild),En=i,_t=!0,Wn=null,r=Uf(i,null,a,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Hr(),a===f){i=vi(t,i,r);break e}un(t,i,a,r)}i=i.child}return i;case 5:return Wf(i),t===null&&Vl(i),a=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,S=f.children,Dl(a,f)?S=null:h!==null&&Dl(a,h)&&(i.flags|=32),wd(t,i),un(t,i,S,r),i.child;case 6:return t===null&&Vl(i),null;case 13:return bd(t,i,r);case 4:return $l(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Xr(i,null,a,r):un(t,i,a,r),i.child;case 11:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Hn(a,f),xd(t,i,a,f,r);case 7:return un(t,i,i.pendingProps,r),i.child;case 8:return un(t,i,i.pendingProps.children,r),i.child;case 12:return un(t,i,i.pendingProps.children,r),i.child;case 10:e:{if(a=i.type._context,f=i.pendingProps,h=i.memoizedProps,S=f.value,ft(Jo,a._currentValue),a._currentValue=S,h!==null)if(Gn(h.value,S)){if(h.children===f.children&&!gn.current){i=vi(t,i,r);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var P=h.dependencies;if(P!==null){S=h.child;for(var F=P.firstContext;F!==null;){if(F.context===a){if(h.tag===1){F=gi(-1,r&-r),F.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var pe=Q.pending;pe===null?F.next=F:(F.next=pe.next,pe.next=F),Q.pending=F}}h.lanes|=r,F=h.alternate,F!==null&&(F.lanes|=r),jl(h.return,r,i),P.lanes|=r;break}F=F.next}}else if(h.tag===10)S=h.type===i.type?null:h.child;else if(h.tag===18){if(S=h.return,S===null)throw Error(n(341));S.lanes|=r,P=S.alternate,P!==null&&(P.lanes|=r),jl(S,r,i),S=h.sibling}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}un(t,i,f.children,r),i=i.child}return i;case 9:return f=i.type,a=i.pendingProps.children,qr(i,r),f=Fn(f),a=a(f),i.flags|=1,un(t,i,a,r),i.child;case 14:return a=i.type,f=Hn(a,i.pendingProps),f=Hn(a.type,f),yd(t,i,a,f,r);case 15:return Sd(t,i,i.type,i.pendingProps,r);case 17:return a=i.type,f=i.pendingProps,f=i.elementType===a?f:Hn(a,f),fa(t,i),i.tag=1,vn(a)?(t=!0,qo(i)):t=!1,qr(i,r),dd(i,a,f),lu(i,a,f,r),du(null,i,a,!0,t,r);case 19:return Ld(t,i,r);case 22:return Md(t,i,r)}throw Error(n(156,i.tag))};function Jd(t,i){return Jt(t,i)}function Pg(t,i,r,a){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,i,r,a){return new Pg(t,i,r,a)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dg(t){if(typeof t=="function")return Du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===ie)return 14}return 2}function Hi(t,i){var r=t.alternate;return r===null?(r=Bn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ma(t,i,r,a,f,h){var S=2;if(a=t,typeof t=="function")Du(t)&&(S=1);else if(typeof t=="string")S=5;else e:switch(t){case H:return mr(r.children,f,h,i);case w:S=8,f|=8;break;case N:return t=Bn(12,r,i,f|2),t.elementType=N,t.lanes=h,t;case Z:return t=Bn(13,r,i,f),t.elementType=Z,t.lanes=h,t;case j:return t=Bn(19,r,i,f),t.elementType=j,t.lanes=h,t;case le:return wa(r,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:S=10;break e;case ce:S=9;break e;case ae:S=11;break e;case ie:S=14;break e;case fe:S=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Bn(S,r,i,f),i.elementType=t,i.type=a,i.lanes=h,i}function mr(t,i,r,a){return t=Bn(7,t,a,i),t.lanes=r,t}function wa(t,i,r,a){return t=Bn(22,t,a,i),t.elementType=le,t.lanes=r,t.stateNode={isHidden:!1},t}function Iu(t,i,r){return t=Bn(6,t,null,i),t.lanes=r,t}function Nu(t,i,r){return i=Bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ig(t,i,r,a,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=a,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ku(t,i,r,a,f,h,S,P,F){return t=new Ig(t,i,r,P,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Bn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(h),t}function Ng(t,i,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:a==null?null:""+a,children:t,containerInfo:i,implementation:r}}function eh(t){if(!t)return ki;t=t._reactInternals;e:{if(je(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var r=t.type;if(vn(r))return Af(t,r,i)}return i}function th(t,i,r,a,f,h,S,P,F){return t=ku(r,a,!0,t,f,h,S,P,F),t.context=eh(null),r=t.current,a=cn(),f=Gi(r),h=gi(a,f),h.callback=i??null,Ui(r,h,f),t.current.lanes=f,Ls(t,f,a),yn(t,a),t}function Ea(t,i,r,a){var f=i.current,h=cn(),S=Gi(f);return r=eh(r),i.context===null?i.context=r:i.pendingContext=r,i=gi(h,S),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Ui(f,i,S),t!==null&&(qn(t,f,S,h),ta(t,f,S)),S}function Ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function zu(t,i){nh(t,i),(t=t.alternate)&&nh(t,i)}function kg(){return null}var ih=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fu(t){this._internalRoot=t}Ca.prototype.render=Fu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ea(t,i,null,null)},Ca.prototype.unmount=Fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;dr(function(){Ea(null,t,null,null)}),i[fi]=null}};function Ca(t){this._internalRoot=t}Ca.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oc();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Ri.length&&i!==0&&i<Ri[r].priority;r++);Ri.splice(r,0,t),r===0&&Gc(t)}};function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ba(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rh(){}function zg(t,i,r,a,f){if(f){if(typeof a=="function"){var h=a;a=function(){var Q=Ta(S);h.call(Q)}}var S=th(i,a,t,0,null,!1,!1,"",rh);return t._reactRootContainer=S,t[fi]=S.current,Ws(t.nodeType===8?t.parentNode:t),dr(),S}for(;f=t.lastChild;)t.removeChild(f);if(typeof a=="function"){var P=a;a=function(){var Q=Ta(F);P.call(Q)}}var F=ku(t,0,!1,null,null,!1,!1,"",rh);return t._reactRootContainer=F,t[fi]=F.current,Ws(t.nodeType===8?t.parentNode:t),dr(function(){Ea(i,F,r,a)}),F}function Aa(t,i,r,a,f){var h=r._reactRootContainer;if(h){var S=h;if(typeof f=="function"){var P=f;f=function(){var F=Ta(S);P.call(F)}}Ea(i,S,t,f)}else S=zg(r,i,t,f,a);return Ta(S)}Fc=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var r=As(i.pendingLanes);r!==0&&(ll(i,r|1),yn(i,Fe()),(rt&6)===0&&(Qr=Fe()+500,zi()))}break;case 13:dr(function(){var a=mi(t,1);if(a!==null){var f=cn();qn(a,t,1,f)}}),zu(t,1)}},ul=function(t){if(t.tag===13){var i=mi(t,134217728);if(i!==null){var r=cn();qn(i,t,134217728,r)}zu(t,134217728)}},Uc=function(t){if(t.tag===13){var i=Gi(t),r=mi(t,i);if(r!==null){var a=cn();qn(r,t,i,a)}zu(t,i)}},Oc=function(){return ot},Bc=function(t,i){var r=ot;try{return ot=t,i()}finally{ot=r}},re=function(t,i,r){switch(i){case"input":if(It(t,r),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<r.length;i++){var a=r[i];if(a!==t&&a.form===t.form){var f=Xo(a);if(!f)throw Error(n(90));Ze(a),It(a,f)}}}break;case"textarea":se(t,r);break;case"select":i=r.value,i!=null&&Ot(t,!!r.multiple,i,!1)}},Bt=Lu,Mn=dr;var Fg={usingClientEntryPoint:!1,Events:[js,Or,Xo,at,bt,Lu]},oo={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ug={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Je(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Lt=La.inject(Ug),Vt=La}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fg,Sn.createPortal=function(t,i){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(i))throw Error(n(200));return Ng(t,i,null,r)},Sn.createRoot=function(t,i){if(!Uu(t))throw Error(n(299));var r=!1,a="",f=ih;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ku(t,1,!1,null,null,r,!1,a,f),t[fi]=i.current,Ws(t.nodeType===8?t.parentNode:t),new Fu(i)},Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Je(i),t=t===null?null:t.stateNode,t},Sn.flushSync=function(t){return dr(t)},Sn.hydrate=function(t,i,r){if(!ba(i))throw Error(n(200));return Aa(null,t,i,!0,r)},Sn.hydrateRoot=function(t,i,r){if(!Uu(t))throw Error(n(405));var a=r!=null&&r.hydratedSources||null,f=!1,h="",S=ih;if(r!=null&&(r.unstable_strictMode===!0&&(f=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(S=r.onRecoverableError)),i=th(i,null,t,1,r??null,f,!1,h,S),t[fi]=i.current,Ws(t),a)for(t=0;t<a.length;t++)r=a[t],f=r._getVersion,f=f(r._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[r,f]:i.mutableSourceEagerHydrationData.push(r,f);return new Ca(i)},Sn.render=function(t,i,r){if(!ba(i))throw Error(n(200));return Aa(null,t,i,!1,r)},Sn.unmountComponentAtNode=function(t){if(!ba(t))throw Error(n(40));return t._reactRootContainer?(dr(function(){Aa(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1},Sn.unstable_batchedUpdates=Lu,Sn.unstable_renderSubtreeIntoContainer=function(t,i,r,a){if(!ba(r))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Aa(t,i,r,!1,a)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var dh;function qg(){if(dh)return Vu.exports;dh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(e){console.error(e)}}return u(),Vu.exports=jg(),Vu.exports}var hh;function Yg(){if(hh)return Ra;hh=1;var u=qg();return Ra.createRoot=u.createRoot,Ra.hydrateRoot=u.hydrateRoot,Ra}var $g=Yg();const Zg=Rp($g);const Pc="150",Kg=0,ph=1,Qg=2,Pp=1,Jg=2,go=3,er=0,Dn=1,Ki=2,Ji=0,ms=1,mh=2,gh=3,vh=4,e0=5,hs=100,t0=101,n0=102,_h=103,xh=104,i0=200,r0=201,s0=202,o0=203,Dp=204,Ip=205,a0=206,l0=207,u0=208,c0=209,f0=210,d0=0,h0=1,p0=2,Mc=3,m0=4,g0=5,v0=6,_0=7,Np=0,x0=1,y0=2,Ti=0,S0=1,M0=2,w0=3,E0=4,T0=5,kp=300,_s=301,xs=302,wc=303,Ec=304,Ja=306,Tc=1e3,Qn=1001,Cc=1002,zt=1003,yh=1004,Hu=1005,an=1006,C0=1007,_o=1008,br=1009,b0=1010,A0=1011,zp=1012,L0=1013,Mr=1014,wr=1015,xo=1016,R0=1017,P0=1018,gs=1020,D0=1021,Jn=1023,I0=1024,N0=1025,Er=1026,ys=1027,k0=1028,z0=1029,F0=1030,U0=1031,O0=1033,Xu=33776,ju=33777,qu=33778,Yu=33779,Sh=35840,Mh=35841,wh=35842,Eh=35843,B0=36196,Th=37492,Ch=37496,bh=37808,Ah=37809,Lh=37810,Rh=37811,Ph=37812,Dh=37813,Ih=37814,Nh=37815,kh=37816,zh=37817,Fh=37818,Uh=37819,Oh=37820,Bh=37821,$u=36492,V0=36283,Vh=36284,Gh=36285,Wh=36286,Ar=3e3,vt=3001,G0=3200,W0=3201,H0=0,X0=1,oi="srgb",yo="srgb-linear",Fp="display-p3",Zu=7680,j0=519,Hh=35044,Xh="300 es",bc=1035;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,jh=180/Math.PI;function So(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(sn[u&255]+sn[u>>8&255]+sn[u>>16&255]+sn[u>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]).toLowerCase()}function Pn(u,e,n){return Math.max(e,Math.min(n,u))}function q0(u,e){return(u%e+e)%e}function Qu(u,e,n){return(1-n)*u+n*e}function qh(u){return(u&u-1)===0&&u!==0}function Y0(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function Pa(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function bn(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,o=e.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),o=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*o+e.x,this.y=l*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,s,o,l,d,c,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=c,_[3]=n,_[4]=l,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,d=s[0],c=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],M=s[5],T=s[8],y=o[0],v=o[3],C=o[6],D=o[1],L=o[4],b=o[7],k=o[2],O=o[5],H=o[8];return l[0]=d*y+c*D+m*k,l[3]=d*v+c*L+m*O,l[6]=d*C+c*b+m*H,l[1]=p*y+_*D+x*k,l[4]=p*v+_*L+x*O,l[7]=p*C+_*b+x*H,l[2]=g*y+M*D+T*k,l[5]=g*v+M*L+T*O,l[8]=g*C+M*b+T*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],m=e[6],p=e[7],_=e[8];return n*d*_-n*c*p-s*l*_+s*c*m+o*l*p-o*d*m}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],m=e[6],p=e[7],_=e[8],x=_*d-c*p,g=c*m-_*l,M=p*l-d*m,T=n*x+s*g+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/T;return e[0]=x*y,e[1]=(o*p-_*s)*y,e[2]=(c*s-o*d)*y,e[3]=g*y,e[4]=(_*n-o*m)*y,e[5]=(o*l-c*n)*y,e[6]=M*y,e[7]=(s*m-p*n)*y,e[8]=(d*n-s*l)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,o,l,d,c){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*d+p*c)+d+e,-o*p,o*m,-o*(-p*d+m*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(Ju.makeScale(e,n)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ju.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new hn;function Up(u){for(let e=u.length-1;e>=0;--e)if(u[e]>=65535)return!0;return!1}function Qa(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}class Mo{constructor(e=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=o}static slerpFlat(e,n,s,o,l,d,c){let m=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];const g=l[d+0],M=l[d+1],T=l[d+2],y=l[d+3];if(c===0){e[n+0]=m,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(c===1){e[n+0]=g,e[n+1]=M,e[n+2]=T,e[n+3]=y;return}if(x!==y||m!==g||p!==M||_!==T){let v=1-c;const C=m*g+p*M+_*T+x*y,D=C>=0?1:-1,L=1-C*C;if(L>Number.EPSILON){const k=Math.sqrt(L),O=Math.atan2(k,C*D);v=Math.sin(v*O)/k,c=Math.sin(c*O)/k}const b=c*D;if(m=m*v+g*b,p=p*v+M*b,_=_*v+T*b,x=x*v+y*b,v===1-c){const k=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=k,p*=k,_*=k,x*=k}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,s,o,l,d){const c=s[o],m=s[o+1],p=s[o+2],_=s[o+3],x=l[d],g=l[d+1],M=l[d+2],T=l[d+3];return e[n]=c*T+_*x+m*M-p*g,e[n+1]=m*T+_*g+p*x-c*M,e[n+2]=p*T+_*M+c*g-m*x,e[n+3]=_*T-c*x-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,o){return this._x=e,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const s=e._x,o=e._y,l=e._z,d=e._order,c=Math.cos,m=Math.sin,p=c(s/2),_=c(o/2),x=c(l/2),g=m(s/2),M=m(o/2),T=m(l/2);switch(d){case"XYZ":this._x=g*_*x+p*M*T,this._y=p*M*x-g*_*T,this._z=p*_*T+g*M*x,this._w=p*_*x-g*M*T;break;case"YXZ":this._x=g*_*x+p*M*T,this._y=p*M*x-g*_*T,this._z=p*_*T-g*M*x,this._w=p*_*x+g*M*T;break;case"ZXY":this._x=g*_*x-p*M*T,this._y=p*M*x+g*_*T,this._z=p*_*T+g*M*x,this._w=p*_*x-g*M*T;break;case"ZYX":this._x=g*_*x-p*M*T,this._y=p*M*x+g*_*T,this._z=p*_*T-g*M*x,this._w=p*_*x+g*M*T;break;case"YZX":this._x=g*_*x+p*M*T,this._y=p*M*x+g*_*T,this._z=p*_*T-g*M*x,this._w=p*_*x-g*M*T;break;case"XZY":this._x=g*_*x-p*M*T,this._y=p*M*x-g*_*T,this._z=p*_*T+g*M*x,this._w=p*_*x+g*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],o=n[4],l=n[8],d=n[1],c=n[5],m=n[9],p=n[2],_=n[6],x=n[10],g=s+c+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(l-p)*M,this._z=(d-o)*M}else if(s>c&&s>x){const M=2*Math.sqrt(1+s-c-x);this._w=(_-m)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+p)/M}else if(c>x){const M=2*Math.sqrt(1+c-s-x);this._w=(l-p)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-c);this._w=(d-o)/M,this._x=(l+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,o=e._y,l=e._z,d=e._w,c=n._x,m=n._y,p=n._z,_=n._w;return this._x=s*_+d*c+o*p-l*m,this._y=o*_+d*m+l*c-s*p,this._z=l*_+d*p+s*m-o*c,this._w=d*_-s*c-o*m-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,d=this._w;let c=d*e._w+s*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=s,this._y=o,this._z=l,this;const m=1-c*c;if(m<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*s+n*this._x,this._y=M*o+n*this._y,this._z=M*l+n*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),_=Math.atan2(p,c),x=Math.sin((1-n)*_)/p,g=Math.sin(n*_)/p;return this._w=d*x+this._w*g,this._x=s*x+this._x*g,this._y=o*x+this._y*g,this._z=l*x+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=Math.random(),n=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(o),s*Math.sin(l),s*Math.cos(l),n*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,s=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*o,this.y=l[1]*n+l[4]*s+l[7]*o,this.z=l[2]*n+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=e.elements,d=1/(l[3]*n+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*o+l[12])*d,this.y=(l[1]*n+l[5]*s+l[9]*o+l[13])*d,this.z=(l[2]*n+l[6]*s+l[10]*o+l[14])*d,this}applyQuaternion(e){const n=this.x,s=this.y,o=this.z,l=e.x,d=e.y,c=e.z,m=e.w,p=m*n+d*o-c*s,_=m*s+c*n-l*o,x=m*o+l*s-d*n,g=-l*n-d*s-c*o;return this.x=p*m+g*-l+_*-c-x*-d,this.y=_*m+g*-d+x*-l-p*-c,this.z=x*m+g*-c+p*-d-_*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*o,this.y=l[1]*n+l[5]*s+l[9]*o,this.z=l[2]*n+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,o=e.y,l=e.z,d=n.x,c=n.y,m=n.z;return this.x=o*m-l*c,this.y=l*d-s*m,this.z=s*c-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Pn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return n*n+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const o=Math.sin(n)*e;return this.x=o*Math.sin(s),this.y=Math.cos(n)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(n),this.y=s*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new ee,Yh=new Mo;function vs(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function tc(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const $0=new hn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Z0=new hn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Qi=new ee;function K0(u){return u.convertSRGBToLinear(),Qi.set(u.r,u.g,u.b).applyMatrix3(Z0),u.setRGB(Qi.x,Qi.y,Qi.z)}function Q0(u){return Qi.set(u.r,u.g,u.b).applyMatrix3($0),u.setRGB(Qi.x,Qi.y,Qi.z).convertLinearToSRGB()}const J0={[yo]:u=>u,[oi]:u=>u.convertSRGBToLinear(),[Fp]:K0},ev={[yo]:u=>u,[oi]:u=>u.convertLinearToSRGB(),[Fp]:Q0},fn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(u){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!u},get workingColorSpace(){return yo},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,n){if(this.enabled===!1||e===n||!e||!n)return u;const s=J0[e],o=ev[n];if(s===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return o(s(u))},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}};let es;class Op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=Qa("canvas")),es.width=e.width,es.height=e.height;const s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qa("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=vs(l[d]/255)*255;return s.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(vs(n[s]/255)*255):n[s]=vs(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Bp{constructor(e=null){this.isSource=!0,this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,c=o.length;d<c;d++)o[d].isDataTexture?l.push(nc(o[d].image)):l.push(nc(o[d]))}else l=nc(o);s.url=l}return n||(e.images[this.uuid]=s),s}}function nc(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?Op.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tv=0;class pn extends Ms{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,s=Qn,o=Qn,l=an,d=_o,c=Jn,m=br,p=pn.DEFAULT_ANISOTROPY,_=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=So(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=n,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tc:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tc:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kp;pn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,o){return this.x=e,this.y=n,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*s+d[8]*o+d[12]*l,this.y=d[1]*n+d[5]*s+d[9]*o+d[13]*l,this.z=d[2]*n+d[6]*s+d[10]*o+d[14]*l,this.w=d[3]*n+d[7]*s+d[11]*o+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,o,l;const m=e.elements,p=m[0],_=m[4],x=m[8],g=m[1],M=m[5],T=m[9],y=m[2],v=m[6],C=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-y)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+y)<.1&&Math.abs(T+v)<.1&&Math.abs(p+M+C-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,b=(M+1)/2,k=(C+1)/2,O=(_+g)/4,H=(x+y)/4,w=(T+v)/4;return L>b&&L>k?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=O/s,l=H/s):b>k?b<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),s=O/o,l=w/o):k<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),s=H/l,o=w/l),this.set(s,o,l,n),this}let D=Math.sqrt((v-T)*(v-T)+(x-y)*(x-y)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(v-T)/D,this.y=(x-y)/D,this.z=(g-_)/D,this.w=Math.acos((p+M+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lr extends Ms{constructor(e=1,n=1,s={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const o={width:e,height:n,depth:1};this.texture=new pn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:an,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(e,n,s=1){(this.width!==e||this.height!==n||this.depth!==s)&&(this.width=e,this.height=n,this.depth=s,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vp extends pn{constructor(e=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=zt,this.minFilter=zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nv extends pn{constructor(e=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=zt,this.minFilter=zt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,s=1/0,o=1/0,l=-1/0,d=-1/0,c=-1/0;for(let m=0,p=e.length;m<p;m+=3){const _=e[m],x=e[m+1],g=e[m+2];_<n&&(n=_),x<s&&(s=x),g<o&&(o=g),_>l&&(l=_),x>d&&(d=x),g>c&&(c=g)}return this.min.set(n,s,o),this.max.set(l,d,c),this}setFromBufferAttribute(e){let n=1/0,s=1/0,o=1/0,l=-1/0,d=-1/0,c=-1/0;for(let m=0,p=e.count;m<p;m++){const _=e.getX(m),x=e.getY(m),g=e.getZ(m);_<n&&(n=_),x<s&&(s=x),g<o&&(o=g),_>l&&(l=_),x>d&&(d=x),g>c&&(c=g)}return this.min.set(n,s,o),this.max.set(l,d,c),this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=gr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0)if(n&&s.attributes!=null&&s.attributes.position!==void 0){const l=s.attributes.position;for(let d=0,c=l.count;d<c;d++)gr.fromBufferAttribute(l,d).applyMatrix4(e.matrixWorld),this.expandByPoint(gr)}else s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox),ic.applyMatrix4(e.matrixWorld),this.union(ic);const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Da.subVectors(this.max,lo),ts.subVectors(e.a,lo),ns.subVectors(e.b,lo),is.subVectors(e.c,lo),ji.subVectors(ns,ts),qi.subVectors(is,ns),vr.subVectors(ts,is);let n=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-vr.z,vr.y,ji.z,0,-ji.x,qi.z,0,-qi.x,vr.z,0,-vr.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-vr.y,vr.x,0];return!rc(n,ts,ns,is,Da)||(n=[1,0,0,0,1,0,0,0,1],!rc(n,ts,ns,is,Da))?!1:(Ia.crossVectors(ji,qi),n=[Ia.x,Ia.y,Ia.z],rc(n,ts,ns,is,Da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],gr=new ee,ic=new wo,ts=new ee,ns=new ee,is=new ee,ji=new ee,qi=new ee,vr=new ee,lo=new ee,Da=new ee,Ia=new ee,_r=new ee;function rc(u,e,n,s,o){for(let l=0,d=u.length-3;l<=d;l+=3){_r.fromArray(u,l);const c=o.x*Math.abs(_r.x)+o.y*Math.abs(_r.y)+o.z*Math.abs(_r.z),m=e.dot(_r),p=n.dot(_r),_=s.dot(_r);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>c)return!1}return!0}const iv=new wo,uo=new ee,sc=new ee;class Dc{constructor(e=new ee,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):iv.setFromPoints(e).getCenter(s);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const n=uo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(uo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(sc)),this.expandByPoint(uo.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new ee,oc=new ee,Na=new ee,Yi=new ee,ac=new ee,ka=new ee,lc=new ee;class rv{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,s,o){oc.copy(e).add(n).multiplyScalar(.5),Na.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(oc);const l=e.distanceTo(n)*.5,d=-this.direction.dot(Na),c=Yi.dot(this.direction),m=-Yi.dot(Na),p=Yi.lengthSq(),_=Math.abs(1-d*d);let x,g,M,T;if(_>0)if(x=d*m-c,g=d*c-m,T=l*_,x>=0)if(g>=-T)if(g<=T){const y=1/_;x*=y,g*=y,M=x*(x+d*g+2*c)+g*(d*x+g+2*m)+p}else g=l,x=Math.max(0,-(d*g+c)),M=-x*x+g*(g+2*m)+p;else g=-l,x=Math.max(0,-(d*g+c)),M=-x*x+g*(g+2*m)+p;else g<=-T?(x=Math.max(0,-(-d*l+c)),g=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+g*(g+2*m)+p):g<=T?(x=0,g=Math.min(Math.max(-l,-m),l),M=g*(g+2*m)+p):(x=Math.max(0,-(d*l+c)),g=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+g*(g+2*m)+p);else g=d>0?-l:l,x=Math.max(0,-(d*g+c)),M=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(oc).addScaledVector(Na,g),M}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const s=yi.dot(this.direction),o=yi.dot(yi)-s*s,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),c=s-d,m=s+d;return m<0?null:c<0?this.at(m,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,o,l,d,c,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),s>d||l>o||((l>s||isNaN(s))&&(s=l),(d<o||isNaN(o))&&(o=d),x>=0?(c=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(c=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||c>o)||((c>s||s!==s)&&(s=c),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,s,o,l){ac.subVectors(n,e),ka.subVectors(s,e),lc.crossVectors(ac,ka);let d=this.direction.dot(lc),c;if(d>0){if(o)return null;c=1}else if(d<0)c=-1,d=-d;else return null;Yi.subVectors(this.origin,e);const m=c*this.direction.dot(ka.crossVectors(Yi,ka));if(m<0)return null;const p=c*this.direction.dot(ac.cross(Yi));if(p<0||m+p>d)return null;const _=-c*Yi.dot(lc);return _<0?null:this.at(_/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,s,o,l,d,c,m,p,_,x,g,M,T,y,v){const C=this.elements;return C[0]=e,C[4]=n,C[8]=s,C[12]=o,C[1]=l,C[5]=d,C[9]=c,C[13]=m,C[2]=p,C[6]=_,C[10]=x,C[14]=g,C[3]=M,C[7]=T,C[11]=y,C[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,o=1/rs.setFromMatrixColumn(e,0).length(),l=1/rs.setFromMatrixColumn(e,1).length(),d=1/rs.setFromMatrixColumn(e,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*d,n[9]=s[9]*d,n[10]=s[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,o=e.y,l=e.z,d=Math.cos(s),c=Math.sin(s),m=Math.cos(o),p=Math.sin(o),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=d*_,M=d*x,T=c*_,y=c*x;n[0]=m*_,n[4]=-m*x,n[8]=p,n[1]=M+T*p,n[5]=g-y*p,n[9]=-c*m,n[2]=y-g*p,n[6]=T+M*p,n[10]=d*m}else if(e.order==="YXZ"){const g=m*_,M=m*x,T=p*_,y=p*x;n[0]=g+y*c,n[4]=T*c-M,n[8]=d*p,n[1]=d*x,n[5]=d*_,n[9]=-c,n[2]=M*c-T,n[6]=y+g*c,n[10]=d*m}else if(e.order==="ZXY"){const g=m*_,M=m*x,T=p*_,y=p*x;n[0]=g-y*c,n[4]=-d*x,n[8]=T+M*c,n[1]=M+T*c,n[5]=d*_,n[9]=y-g*c,n[2]=-d*p,n[6]=c,n[10]=d*m}else if(e.order==="ZYX"){const g=d*_,M=d*x,T=c*_,y=c*x;n[0]=m*_,n[4]=T*p-M,n[8]=g*p+y,n[1]=m*x,n[5]=y*p+g,n[9]=M*p-T,n[2]=-p,n[6]=c*m,n[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*p,T=c*m,y=c*p;n[0]=m*_,n[4]=y-g*x,n[8]=T*x+M,n[1]=x,n[5]=d*_,n[9]=-c*_,n[2]=-p*_,n[6]=M*x+T,n[10]=g-y*x}else if(e.order==="XZY"){const g=d*m,M=d*p,T=c*m,y=c*p;n[0]=m*_,n[4]=-x,n[8]=p*_,n[1]=g*x+y,n[5]=d*_,n[9]=M*x-T,n[2]=T*x-M,n[6]=c*_,n[10]=y*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sv,e,ov)}lookAt(e,n,s){const o=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),$i.crossVectors(s,An),$i.lengthSq()===0&&(Math.abs(s.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),$i.crossVectors(s,An)),$i.normalize(),za.crossVectors(An,$i),o[0]=$i.x,o[4]=za.x,o[8]=An.x,o[1]=$i.y,o[5]=za.y,o[9]=An.y,o[2]=$i.z,o[6]=za.z,o[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,l=this.elements,d=s[0],c=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],M=s[13],T=s[2],y=s[6],v=s[10],C=s[14],D=s[3],L=s[7],b=s[11],k=s[15],O=o[0],H=o[4],w=o[8],N=o[12],W=o[1],ce=o[5],ae=o[9],Z=o[13],j=o[2],ie=o[6],fe=o[10],le=o[14],V=o[3],J=o[7],q=o[11],z=o[15];return l[0]=d*O+c*W+m*j+p*V,l[4]=d*H+c*ce+m*ie+p*J,l[8]=d*w+c*ae+m*fe+p*q,l[12]=d*N+c*Z+m*le+p*z,l[1]=_*O+x*W+g*j+M*V,l[5]=_*H+x*ce+g*ie+M*J,l[9]=_*w+x*ae+g*fe+M*q,l[13]=_*N+x*Z+g*le+M*z,l[2]=T*O+y*W+v*j+C*V,l[6]=T*H+y*ce+v*ie+C*J,l[10]=T*w+y*ae+v*fe+C*q,l[14]=T*N+y*Z+v*le+C*z,l[3]=D*O+L*W+b*j+k*V,l[7]=D*H+L*ce+b*ie+k*J,l[11]=D*w+L*ae+b*fe+k*q,l[15]=D*N+L*Z+b*le+k*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],o=e[8],l=e[12],d=e[1],c=e[5],m=e[9],p=e[13],_=e[2],x=e[6],g=e[10],M=e[14],T=e[3],y=e[7],v=e[11],C=e[15];return T*(+l*m*x-o*p*x-l*c*g+s*p*g+o*c*M-s*m*M)+y*(+n*m*M-n*p*g+l*d*g-o*d*M+o*p*_-l*m*_)+v*(+n*p*x-n*c*M-l*d*x+s*d*M+l*c*_-s*p*_)+C*(-o*c*_-n*m*x+n*c*g+o*d*x-s*d*g+s*m*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],l=e[3],d=e[4],c=e[5],m=e[6],p=e[7],_=e[8],x=e[9],g=e[10],M=e[11],T=e[12],y=e[13],v=e[14],C=e[15],D=x*v*p-y*g*p+y*m*M-c*v*M-x*m*C+c*g*C,L=T*g*p-_*v*p-T*m*M+d*v*M+_*m*C-d*g*C,b=_*y*p-T*x*p+T*c*M-d*y*M-_*c*C+d*x*C,k=T*x*m-_*y*m-T*c*g+d*y*g+_*c*v-d*x*v,O=n*D+s*L+o*b+l*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/O;return e[0]=D*H,e[1]=(y*g*l-x*v*l-y*o*M+s*v*M+x*o*C-s*g*C)*H,e[2]=(c*v*l-y*m*l+y*o*p-s*v*p-c*o*C+s*m*C)*H,e[3]=(x*m*l-c*g*l-x*o*p+s*g*p+c*o*M-s*m*M)*H,e[4]=L*H,e[5]=(_*v*l-T*g*l+T*o*M-n*v*M-_*o*C+n*g*C)*H,e[6]=(T*m*l-d*v*l-T*o*p+n*v*p+d*o*C-n*m*C)*H,e[7]=(d*g*l-_*m*l+_*o*p-n*g*p-d*o*M+n*m*M)*H,e[8]=b*H,e[9]=(T*x*l-_*y*l-T*s*M+n*y*M+_*s*C-n*x*C)*H,e[10]=(d*y*l-T*c*l+T*s*p-n*y*p-d*s*C+n*c*C)*H,e[11]=(_*c*l-d*x*l-_*s*p+n*x*p+d*s*M-n*c*M)*H,e[12]=k*H,e[13]=(_*y*o-T*x*o+T*s*g-n*y*g-_*s*v+n*x*v)*H,e[14]=(T*c*o-d*y*o-T*s*m+n*y*m+d*s*v-n*c*v)*H,e[15]=(d*x*o-_*c*o+_*s*m-n*x*m-d*s*g+n*c*g)*H,this}scale(e){const n=this.elements,s=e.x,o=e.y,l=e.z;return n[0]*=s,n[4]*=o,n[8]*=l,n[1]*=s,n[5]*=o,n[9]*=l,n[2]*=s,n[6]*=o,n[10]*=l,n[3]*=s,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(e,n,s){return this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),o=Math.sin(n),l=1-s,d=e.x,c=e.y,m=e.z,p=l*d,_=l*c;return this.set(p*d+s,p*c-o*m,p*m+o*c,0,p*c+o*m,_*c+s,_*m-o*d,0,p*m-o*c,_*m+o*d,l*m*m+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,o,l,d){return this.set(1,s,l,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,s){const o=this.elements,l=n._x,d=n._y,c=n._z,m=n._w,p=l+l,_=d+d,x=c+c,g=l*p,M=l*_,T=l*x,y=d*_,v=d*x,C=c*x,D=m*p,L=m*_,b=m*x,k=s.x,O=s.y,H=s.z;return o[0]=(1-(y+C))*k,o[1]=(M+b)*k,o[2]=(T-L)*k,o[3]=0,o[4]=(M-b)*O,o[5]=(1-(g+C))*O,o[6]=(v+D)*O,o[7]=0,o[8]=(T+L)*H,o[9]=(v-D)*H,o[10]=(1-(g+y))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,s){const o=this.elements;let l=rs.set(o[0],o[1],o[2]).length();const d=rs.set(o[4],o[5],o[6]).length(),c=rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Yn.copy(this);const p=1/l,_=1/d,x=1/c;return Yn.elements[0]*=p,Yn.elements[1]*=p,Yn.elements[2]*=p,Yn.elements[4]*=_,Yn.elements[5]*=_,Yn.elements[6]*=_,Yn.elements[8]*=x,Yn.elements[9]*=x,Yn.elements[10]*=x,n.setFromRotationMatrix(Yn),s.x=l,s.y=d,s.z=c,this}makePerspective(e,n,s,o,l,d){const c=this.elements,m=2*l/(n-e),p=2*l/(s-o),_=(n+e)/(n-e),x=(s+o)/(s-o),g=-(d+l)/(d-l),M=-2*d*l/(d-l);return c[0]=m,c[4]=0,c[8]=_,c[12]=0,c[1]=0,c[5]=p,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,s,o,l,d){const c=this.elements,m=1/(n-e),p=1/(s-o),_=1/(d-l),x=(n+e)*m,g=(s+o)*p,M=(d+l)*_;return c[0]=2*m,c[4]=0,c[8]=0,c[12]=-x,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=-2*_,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const rs=new ee,Yn=new Zt,sv=new ee(0,0,0),ov=new ee(1,1,1),$i=new ee,za=new ee,An=new ee,$h=new Zt,Zh=new Mo;class el{constructor(e=0,n=0,s=0,o=el.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,o=this._order){return this._x=e,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const o=e.elements,l=o[0],d=o[4],c=o[8],m=o[1],p=o[5],_=o[9],x=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Pn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Pn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}el.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const Kh=new ee,ss=new Mo,Si=new Zt,Fa=new ee,co=new ee,lv=new ee,uv=new Mo,Qh=new ee(1,0,0),Jh=new ee(0,1,0),ep=new ee(0,0,1),cv={type:"added"},tp={type:"removed"};class In extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new ee,n=new el,s=new Mo,o=new ee(1,1,1);function l(){s.setFromEuler(n,!1)}function d(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new hn}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Fa.copy(e):Fa.set(e,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(co,Fa,this.up):Si.lookAt(Fa,co,this.up),this.quaternion.setFromRotationMatrix(Si),o&&(Si.extractRotation(o.matrixWorld),ss.setFromRotationMatrix(Si),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(tp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n){let s=[];this[e]===n&&s.push(this);for(let o=0,l=this.children.length;o<l;o++){const d=this.children[o].getObjectsByProperty(e,n);d.length>0&&(s=s.concat(d))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++){const l=n[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(c,m){return c[m.uuid]===void 0&&(c[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const m=c.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let m=0,p=this.material.length;m<p;m++)c.push(l(e.materials,this.material[m]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const m=this.animations[c];o.animations.push(l(e.animations,m))}}if(n){const c=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),x=d(e.shapes),g=d(e.skeletons),M=d(e.animations),T=d(e.nodes);c.length>0&&(s.geometries=c),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=o,s;function d(c){const m=[];for(const p in c){const _=c[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}In.DEFAULT_UP=new ee(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new ee,Mi=new ee,uc=new ee,wi=new ee,os=new ee,as=new ee,np=new ee,cc=new ee,fc=new ee,dc=new ee;class Ei{constructor(e=new ee,n=new ee,s=new ee){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,o){o.subVectors(s,n),$n.subVectors(e,n),o.cross($n);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,s,o,l){$n.subVectors(o,n),Mi.subVectors(s,n),uc.subVectors(e,n);const d=$n.dot($n),c=$n.dot(Mi),m=$n.dot(uc),p=Mi.dot(Mi),_=Mi.dot(uc),x=d*p-c*c;if(x===0)return l.set(-2,-1,-1);const g=1/x,M=(p*m-c*_)*g,T=(d*_-c*m)*g;return l.set(1-M-T,T,M)}static containsPoint(e,n,s,o){return this.getBarycoord(e,n,s,o,wi),wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,n,s,o,l,d,c,m){return this.getBarycoord(e,n,s,o,wi),m.set(0,0),m.addScaledVector(l,wi.x),m.addScaledVector(d,wi.y),m.addScaledVector(c,wi.z),m}static isFrontFacing(e,n,s,o){return $n.subVectors(s,n),Mi.subVectors(e,n),$n.cross(Mi).dot(o)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,o){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,s,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),$n.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,s,o,l){return Ei.getUV(e,this.a,this.b,this.c,n,s,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,o=this.b,l=this.c;let d,c;os.subVectors(o,s),as.subVectors(l,s),cc.subVectors(e,s);const m=os.dot(cc),p=as.dot(cc);if(m<=0&&p<=0)return n.copy(s);fc.subVectors(e,o);const _=os.dot(fc),x=as.dot(fc);if(_>=0&&x<=_)return n.copy(o);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),n.copy(s).addScaledVector(os,d);dc.subVectors(e,l);const M=os.dot(dc),T=as.dot(dc);if(T>=0&&M<=T)return n.copy(l);const y=M*p-m*T;if(y<=0&&p>=0&&T<=0)return c=p/(p-T),n.copy(s).addScaledVector(as,c);const v=_*T-M*x;if(v<=0&&x-_>=0&&M-T>=0)return np.subVectors(l,o),c=(x-_)/(x-_+(M-T)),n.copy(o).addScaledVector(np,c);const C=1/(v+y+g);return d=y*C,c=g*C,n.copy(s).addScaledVector(os,d).addScaledVector(as,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fv=0;class tl extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ms,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dp,this.blendDst=Ip,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zu,this.stencilZFail=Zu,this.stencilZPass=Zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const o=this[n];if(o===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(s.blending=this.blending),this.side!==er&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(s.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const d=[];for(const c in l){const m=l[c];delete m.metadata,d.push(m)}return d}if(n){const l=o(e.textures),d=o(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function hc(u,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?u+(e-u)*6*n:n<1/2?e:n<2/3?u+(e-u)*6*(2/3-n):u}class xt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&s===void 0?this.set(e):this.setRGB(e,n,s)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,n),this}setRGB(e,n,s,o=fn.workingColorSpace){return this.r=e,this.g=n,this.b=s,fn.toWorkingColorSpace(this,o),this}setHSL(e,n,s,o=fn.workingColorSpace){if(e=q0(e,1),n=Pn(n,0,1),s=Pn(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,d=2*s-l;this.r=hc(d,l,e+1/3),this.g=hc(d,l,e),this.b=hc(d,l,e-1/3)}return fn.toWorkingColorSpace(this,o),this}setStyle(e,n=oi){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],c=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(l[1],10))/255,this.g=Math.min(255,parseInt(l[2],10))/255,this.b=Math.min(255,parseInt(l[3],10))/255,fn.toWorkingColorSpace(this,n),s(l[4]),this;if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(l[1],10))/100,this.g=Math.min(100,parseInt(l[2],10))/100,this.b=Math.min(100,parseInt(l[3],10))/100,fn.toWorkingColorSpace(this,n),s(l[4]),this;break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const m=parseFloat(l[1])/360,p=parseFloat(l[2])/100,_=parseFloat(l[3])/100;return s(l[4]),this.setHSL(m,p,_,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,fn.toWorkingColorSpace(this,n),this;if(d===6)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,fn.toWorkingColorSpace(this,n),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const s=Wp[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return fn.fromWorkingColorSpace(on.copy(this),e),Pn(on.r*255,0,255)<<16^Pn(on.g*255,0,255)<<8^Pn(on.b*255,0,255)<<0}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=fn.workingColorSpace){fn.fromWorkingColorSpace(on.copy(this),n);const s=on.r,o=on.g,l=on.b,d=Math.max(s,o,l),c=Math.min(s,o,l);let m,p;const _=(c+d)/2;if(c===d)m=0,p=0;else{const x=d-c;switch(p=_<=.5?x/(d+c):x/(2-d-c),d){case s:m=(o-l)/x+(o<l?6:0);break;case o:m=(l-s)/x+2;break;case l:m=(s-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=fn.workingColorSpace){return fn.fromWorkingColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=oi){fn.fromWorkingColorSpace(on.copy(this),e);const n=on.r,s=on.g,o=on.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${n*255|0},${s*255|0},${o*255|0})`}offsetHSL(e,n,s){return this.getHSL(Zn),Zn.h+=e,Zn.s+=n,Zn.l+=s,this.setHSL(Zn.h,Zn.s,Zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Zn),e.getHSL(Ua);const s=Qu(Zn.h,Ua.h,n),o=Qu(Zn.s,Ua.s,n),l=Qu(Zn.l,Ua.l,n);return this.setHSL(s,o,l),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new xt;xt.NAMES=Wp;class Hp extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new ee,Oa=new ct;class ui{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Hh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),s=bn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,o){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),s=bn(s,this.array),o=bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,n,s,o,l){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),s=bn(s,this.array),o=bn(o,this.array),l=bn(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Xp extends ui{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class jp extends ui{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Tr extends ui{constructor(e,n,s){super(new Float32Array(e),n,s)}}let dv=0;const Vn=new Zt,pc=new In,ls=new ee,Ln=new wo,fo=new wo,Xt=new ee;class Rr extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?jp:Xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new hn().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,s){return Vn.makeTranslation(e,n,s),this.applyMatrix4(Vn),this}scale(e,n,s){return Vn.makeScale(e,n,s),this.applyMatrix4(Vn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Tr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];Ln.setFromBufferAttribute(l),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const s=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];fo.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(Ln.min,fo.min),Ln.expandByPoint(Xt),Xt.addVectors(Ln.max,fo.max),Ln.expandByPoint(Xt)):(Ln.expandByPoint(fo.min),Ln.expandByPoint(fo.max))}Ln.getCenter(s);let o=0;for(let l=0,d=e.count;l<d;l++)Xt.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Xt));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],m=this.morphTargetsRelative;for(let p=0,_=c.count;p<_;p++)Xt.fromBufferAttribute(c,p),m&&(ls.fromBufferAttribute(e,p),Xt.add(ls)),o=Math.max(o,s.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=n.position.array,l=n.normal.array,d=n.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*c),4));const m=this.getAttribute("tangent").array,p=[],_=[];for(let W=0;W<c;W++)p[W]=new ee,_[W]=new ee;const x=new ee,g=new ee,M=new ee,T=new ct,y=new ct,v=new ct,C=new ee,D=new ee;function L(W,ce,ae){x.fromArray(o,W*3),g.fromArray(o,ce*3),M.fromArray(o,ae*3),T.fromArray(d,W*2),y.fromArray(d,ce*2),v.fromArray(d,ae*2),g.sub(x),M.sub(x),y.sub(T),v.sub(T);const Z=1/(y.x*v.y-v.x*y.y);isFinite(Z)&&(C.copy(g).multiplyScalar(v.y).addScaledVector(M,-y.y).multiplyScalar(Z),D.copy(M).multiplyScalar(y.x).addScaledVector(g,-v.x).multiplyScalar(Z),p[W].add(C),p[ce].add(C),p[ae].add(C),_[W].add(D),_[ce].add(D),_[ae].add(D))}let b=this.groups;b.length===0&&(b=[{start:0,count:s.length}]);for(let W=0,ce=b.length;W<ce;++W){const ae=b[W],Z=ae.start,j=ae.count;for(let ie=Z,fe=Z+j;ie<fe;ie+=3)L(s[ie+0],s[ie+1],s[ie+2])}const k=new ee,O=new ee,H=new ee,w=new ee;function N(W){H.fromArray(l,W*3),w.copy(H);const ce=p[W];k.copy(ce),k.sub(H.multiplyScalar(H.dot(ce))).normalize(),O.crossVectors(w,ce);const Z=O.dot(_[W])<0?-1:1;m[W*4]=k.x,m[W*4+1]=k.y,m[W*4+2]=k.z,m[W*4+3]=Z}for(let W=0,ce=b.length;W<ce;++W){const ae=b[W],Z=ae.start,j=ae.count;for(let ie=Z,fe=Z+j;ie<fe;ie+=3)N(s[ie+0]),N(s[ie+1]),N(s[ie+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const o=new ee,l=new ee,d=new ee,c=new ee,m=new ee,p=new ee,_=new ee,x=new ee;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),y=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),_.subVectors(d,l),x.subVectors(o,l),_.cross(x),c.fromBufferAttribute(s,T),m.fromBufferAttribute(s,y),p.fromBufferAttribute(s,v),c.add(_),m.add(_),p.add(_),s.setXYZ(T,c.x,c.y,c.z),s.setXYZ(y,m.x,m.y,m.z),s.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),d.fromBufferAttribute(n,g+2),_.subVectors(d,l),x.subVectors(o,l),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,m){const p=c.array,_=c.itemSize,x=c.normalized,g=new p.constructor(m.length*_);let M=0,T=0;for(let y=0,v=m.length;y<v;y++){c.isInterleavedBufferAttribute?M=m[y]*c.data.stride+c.offset:M=m[y]*_;for(let C=0;C<_;C++)g[T++]=p[M++]}return new ui(g,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rr,s=this.index.array,o=this.attributes;for(const c in o){const m=o[c],p=e(m,s);n.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const m=[],p=l[c];for(let _=0,x=p.length;_<x;_++){const g=p[_],M=e(g,s);m.push(M)}n.morphAttributes[c]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,m=d.length;c<m;c++){const p=d[c];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];_.push(M.toJSON(e.data))}_.length>0&&(o[m]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const l=e.morphAttributes;for(const p in l){const _=[],x=l[p];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new Zt,si=new rv,Ba=new Dc,rp=new ee,ho=new ee,po=new ee,mo=new ee,mc=new ee,Va=new ee,Ga=new ct,Wa=new ct,Ha=new ct,gc=new ee,Xa=new ee;class li extends In{constructor(e=new Rr,n=new Hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;n.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){Va.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const _=c[m],x=l[m];_!==0&&(mc.fromBufferAttribute(x,e),d?Va.addScaledVector(mc,_):Va.addScaledVector(mc.sub(n),_))}n.add(Va)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const s=this.geometry,o=this.material,l=this.matrixWorld;if(o===void 0||(s.boundingSphere===null&&s.computeBoundingSphere(),Ba.copy(s.boundingSphere),Ba.applyMatrix4(l),si.copy(e.ray).recast(e.near),Ba.containsPoint(si.origin)===!1&&(si.intersectSphere(Ba,rp)===null||si.origin.distanceToSquared(rp)>(e.far-e.near)**2))||(ip.copy(l).invert(),si.copy(e.ray).applyMatrix4(ip),s.boundingBox!==null&&si.intersectsBox(s.boundingBox)===!1))return;let d;const c=s.index,m=s.attributes.position,p=s.attributes.uv,_=s.attributes.uv2,x=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let M=0,T=x.length;M<T;M++){const y=x[M],v=o[y.materialIndex],C=Math.max(y.start,g.start),D=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let L=C,b=D;L<b;L+=3){const k=c.getX(L),O=c.getX(L+1),H=c.getX(L+2);d=ja(this,v,e,si,p,_,k,O,H),d&&(d.faceIndex=Math.floor(L/3),d.face.materialIndex=y.materialIndex,n.push(d))}}else{const M=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let y=M,v=T;y<v;y+=3){const C=c.getX(y),D=c.getX(y+1),L=c.getX(y+2);d=ja(this,o,e,si,p,_,C,D,L),d&&(d.faceIndex=Math.floor(y/3),n.push(d))}}else if(m!==void 0)if(Array.isArray(o))for(let M=0,T=x.length;M<T;M++){const y=x[M],v=o[y.materialIndex],C=Math.max(y.start,g.start),D=Math.min(m.count,Math.min(y.start+y.count,g.start+g.count));for(let L=C,b=D;L<b;L+=3){const k=L,O=L+1,H=L+2;d=ja(this,v,e,si,p,_,k,O,H),d&&(d.faceIndex=Math.floor(L/3),d.face.materialIndex=y.materialIndex,n.push(d))}}else{const M=Math.max(0,g.start),T=Math.min(m.count,g.start+g.count);for(let y=M,v=T;y<v;y+=3){const C=y,D=y+1,L=y+2;d=ja(this,o,e,si,p,_,C,D,L),d&&(d.faceIndex=Math.floor(y/3),n.push(d))}}}}function hv(u,e,n,s,o,l,d,c){let m;if(e.side===Dn?m=s.intersectTriangle(d,l,o,!0,c):m=s.intersectTriangle(o,l,d,e.side===er,c),m===null)return null;Xa.copy(c),Xa.applyMatrix4(u.matrixWorld);const p=n.ray.origin.distanceTo(Xa);return p<n.near||p>n.far?null:{distance:p,point:Xa.clone(),object:u}}function ja(u,e,n,s,o,l,d,c,m){u.getVertexPosition(d,ho),u.getVertexPosition(c,po),u.getVertexPosition(m,mo);const p=hv(u,e,n,s,ho,po,mo,gc);if(p){o&&(Ga.fromBufferAttribute(o,d),Wa.fromBufferAttribute(o,c),Ha.fromBufferAttribute(o,m),p.uv=Ei.getUV(gc,ho,po,mo,Ga,Wa,Ha,new ct)),l&&(Ga.fromBufferAttribute(l,d),Wa.fromBufferAttribute(l,c),Ha.fromBufferAttribute(l,m),p.uv2=Ei.getUV(gc,ho,po,mo,Ga,Wa,Ha,new ct));const _={a:d,b:c,c:m,normal:new ee,materialIndex:0};Ei.getNormal(ho,po,mo,_.normal),p.face=_}return p}class Eo extends Rr{constructor(e=1,n=1,s=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:l,depthSegments:d};const c=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const m=[],p=[],_=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,s,n,e,d,l,0),T("z","y","x",1,-1,s,n,-e,d,l,1),T("x","z","y",1,1,e,s,n,o,d,2),T("x","z","y",1,-1,e,s,-n,o,d,3),T("x","y","z",1,-1,e,n,s,o,l,4),T("x","y","z",-1,-1,e,n,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(_,3)),this.setAttribute("uv",new Tr(x,2));function T(y,v,C,D,L,b,k,O,H,w,N){const W=b/H,ce=k/w,ae=b/2,Z=k/2,j=O/2,ie=H+1,fe=w+1;let le=0,V=0;const J=new ee;for(let q=0;q<fe;q++){const z=q*ce-Z;for(let I=0;I<ie;I++){const te=I*W-ae;J[y]=te*D,J[v]=z*L,J[C]=j,p.push(J.x,J.y,J.z),J[y]=0,J[v]=0,J[C]=O>0?1:-1,_.push(J.x,J.y,J.z),x.push(I/H),x.push(1-q/w),le+=1}}for(let q=0;q<w;q++)for(let z=0;z<H;z++){const I=g+z+ie*q,te=g+z+ie*(q+1),de=g+(z+1)+ie*(q+1),G=g+(z+1)+ie*q;m.push(I,te,G),m.push(te,de,G),V+=6}c.addGroup(M,V,N),M+=V,g+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(u){const e={};for(const n in u){e[n]={};for(const s in u[n]){const o=u[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[n][s]=o.clone():Array.isArray(o)?e[n][s]=o.slice():e[n][s]=o}}return e}function dn(u){const e={};for(let n=0;n<u.length;n++){const s=Ss(u[n]);for(const o in s)e[o]=s[o]}return e}function pv(u){const e=[];for(let n=0;n<u.length;n++)e.push(u[n].clone());return e}function qp(u){return u.getRenderTarget()===null&&u.outputEncoding===vt?oi:yo}const mv={clone:Ss,merge:dn};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gv,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Yp extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kn extends Yp{constructor(e=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,s,o,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ku*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;l+=d.offsetX*o/m,n-=d.offsetY*s/p,o*=d.width/m,s*=d.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-s,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const us=-90,cs=1;class _v extends In{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s;const o=new Kn(us,cs,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const l=new Kn(us,cs,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(-1,0,0),this.add(l);const d=new Kn(us,cs,e,n);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const c=new Kn(us,cs,e,n);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const m=new Kn(us,cs,e,n);m.layers=this.layers,m.up.set(0,1,0),m.lookAt(0,0,1),this.add(m);const p=new Kn(us,cs,e,n);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,n){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget,[o,l,d,c,m,p]=this.children,_=e.getRenderTarget(),x=e.toneMapping,g=e.xr.enabled;e.toneMapping=Ti,e.xr.enabled=!1;const M=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0),e.render(n,o),e.setRenderTarget(s,1),e.render(n,l),e.setRenderTarget(s,2),e.render(n,d),e.setRenderTarget(s,3),e.render(n,c),e.setRenderTarget(s,4),e.render(n,m),s.texture.generateMipmaps=M,e.setRenderTarget(s,5),e.render(n,p),e.setRenderTarget(_),e.toneMapping=x,e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}}class $p extends pn{constructor(e,n,s,o,l,d,c,m,p,_){e=e!==void 0?e:[],n=n!==void 0?n:_s,super(e,n,s,o,l,d,c,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xv extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new $p(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Eo(5,5,5),l=new Ci({name:"CubemapFromEquirect",uniforms:Ss(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:Ji});l.uniforms.tEquirect.value=n;const d=new li(o,l),c=n.minFilter;return n.minFilter===_o&&(n.minFilter=an),new _v(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,s,o){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,s,o);e.setRenderTarget(l)}}const vc=new ee,yv=new ee,Sv=new hn;class xr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,o){return this.normal.set(e,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const o=vc.subVectors(s,n).cross(yv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(vc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Sv.getNormalMatrix(e),o=this.coplanarPoint(vc).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Dc,qa=new ee;class Zp{constructor(e=new xr,n=new xr,s=new xr,o=new xr,l=new xr,d=new xr){this.planes=[e,n,s,o,l,d]}set(e,n,s,o,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(s),c[3].copy(o),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e){const n=this.planes,s=e.elements,o=s[0],l=s[1],d=s[2],c=s[3],m=s[4],p=s[5],_=s[6],x=s[7],g=s[8],M=s[9],T=s[10],y=s[11],v=s[12],C=s[13],D=s[14],L=s[15];return n[0].setComponents(c-o,x-m,y-g,L-v).normalize(),n[1].setComponents(c+o,x+m,y+g,L+v).normalize(),n[2].setComponents(c+l,x+p,y+M,L+C).normalize(),n[3].setComponents(c-l,x-p,y-M,L-C).normalize(),n[4].setComponents(c-d,x-_,y-T,L-D).normalize(),n[5].setComponents(c+d,x+_,y+T,L+D).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const n=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(qa.x=o.normal.x>0?e.max.x:e.min.x,qa.y=o.normal.y>0?e.max.y:e.min.y,qa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kp(){let u=null,e=!1,n=null,s=null;function o(l,d){n(l,d),s=u.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(s=u.requestAnimationFrame(o),e=!0)},stop:function(){u.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){u=l}}}function Mv(u,e){const n=e.isWebGL2,s=new WeakMap;function o(p,_){const x=p.array,g=p.usage,M=u.createBuffer();u.bindBuffer(_,M),u.bufferData(_,x,g),p.onUploadCallback();let T;if(x instanceof Float32Array)T=5126;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)T=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=5123;else if(x instanceof Int16Array)T=5122;else if(x instanceof Uint32Array)T=5125;else if(x instanceof Int32Array)T=5124;else if(x instanceof Int8Array)T=5120;else if(x instanceof Uint8Array)T=5121;else if(x instanceof Uint8ClampedArray)T=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:M,type:T,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version}}function l(p,_,x){const g=_.array,M=_.updateRange;u.bindBuffer(x,p),M.count===-1?u.bufferSubData(x,0,g):(n?u.bufferSubData(x,M.offset*g.BYTES_PER_ELEMENT,g,M.offset,M.count):u.bufferSubData(x,M.offset*g.BYTES_PER_ELEMENT,g.subarray(M.offset,M.offset+M.count)),M.count=-1),_.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=s.get(p);_&&(u.deleteBuffer(_.buffer),s.delete(p))}function m(p,_){if(p.isGLBufferAttribute){const g=s.get(p);(!g||g.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=s.get(p);x===void 0?s.set(p,o(p,_)):x.version<p.version&&(l(x.buffer,p,_),x.version=p.version)}return{get:d,remove:c,update:m}}class To extends Rr{constructor(e=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:o};const l=e/2,d=n/2,c=Math.floor(s),m=Math.floor(o),p=c+1,_=m+1,x=e/c,g=n/m,M=[],T=[],y=[],v=[];for(let C=0;C<_;C++){const D=C*g-d;for(let L=0;L<p;L++){const b=L*x-l;T.push(b,-D,0),y.push(0,0,1),v.push(L/c),v.push(1-C/m)}}for(let C=0;C<m;C++)for(let D=0;D<c;D++){const L=D+p*C,b=D+p*(C+1),k=D+1+p*(C+1),O=D+1+p*C;M.push(L,b,O),M.push(b,k,O)}this.setIndex(M),this.setAttribute("position",new Tr(T,3)),this.setAttribute("normal",new Tr(y,3)),this.setAttribute("uv",new Tr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}var wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv="vec3 transformed = vec3( position );",Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Dv=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Iv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gv=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Hv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o_=`#ifdef USE_GRADIENTMAP
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
}`,a_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,d_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,__=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,x_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,M_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,N_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,k_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,F_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,hx=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,px=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_x=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mx=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Rx=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Bx=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Hx=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,jx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Qx=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:wv,alphamap_pars_fragment:Ev,alphatest_fragment:Tv,alphatest_pars_fragment:Cv,aomap_fragment:bv,aomap_pars_fragment:Av,begin_vertex:Lv,beginnormal_vertex:Rv,bsdfs:Pv,iridescence_fragment:Dv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Nv,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Fv,color_fragment:Uv,color_pars_fragment:Ov,color_pars_vertex:Bv,color_vertex:Vv,common:Gv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Xv,displacementmap_vertex:jv,emissivemap_fragment:qv,emissivemap_pars_fragment:Yv,encodings_fragment:$v,encodings_pars_fragment:Zv,envmap_fragment:Kv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:Jv,envmap_pars_vertex:e_,envmap_physical_pars_fragment:d_,envmap_vertex:t_,fog_vertex:n_,fog_pars_vertex:i_,fog_fragment:r_,fog_pars_fragment:s_,gradientmap_pars_fragment:o_,lightmap_fragment:a_,lightmap_pars_fragment:l_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:c_,lights_pars_begin:f_,lights_toon_fragment:h_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:v_,lights_physical_pars_fragment:__,lights_fragment_begin:x_,lights_fragment_maps:y_,lights_fragment_end:S_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:T_,map_fragment:C_,map_pars_fragment:b_,map_particle_fragment:A_,map_particle_pars_fragment:L_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:P_,morphcolor_vertex:D_,morphnormal_vertex:I_,morphtarget_pars_vertex:N_,morphtarget_vertex:k_,normal_fragment_begin:z_,normal_fragment_maps:F_,normal_pars_fragment:U_,normal_pars_vertex:O_,normal_vertex:B_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:X_,output_fragment:j_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:$_,dithering_fragment:Z_,dithering_pars_fragment:K_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:sx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:ux,tonemapping_fragment:cx,tonemapping_pars_fragment:fx,transmission_fragment:dx,transmission_pars_fragment:hx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,uv2_pars_fragment:vx,uv2_pars_vertex:_x,uv2_vertex:xx,worldpos_vertex:yx,background_vert:Sx,background_frag:Mx,backgroundCube_vert:wx,backgroundCube_frag:Ex,cube_vert:Tx,cube_frag:Cx,depth_vert:bx,depth_frag:Ax,distanceRGBA_vert:Lx,distanceRGBA_frag:Rx,equirect_vert:Px,equirect_frag:Dx,linedashed_vert:Ix,linedashed_frag:Nx,meshbasic_vert:kx,meshbasic_frag:zx,meshlambert_vert:Fx,meshlambert_frag:Ux,meshmatcap_vert:Ox,meshmatcap_frag:Bx,meshnormal_vert:Vx,meshnormal_frag:Gx,meshphong_vert:Wx,meshphong_frag:Hx,meshphysical_vert:Xx,meshphysical_frag:jx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:$x,points_frag:Zx,shadow_vert:Kx,shadow_frag:Qx,sprite_vert:Jx,sprite_frag:ey},Ee={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},ai={basic:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:dn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:dn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:dn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:dn([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:dn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:dn([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:dn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:dn([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:dn([Ee.common,Ee.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:dn([Ee.lights,Ee.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ai.physical={uniforms:dn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ct(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ya={r:0,b:0,g:0};function ty(u,e,n,s,o,l,d){const c=new xt(0);let m=l===!0?0:1,p,_,x=null,g=0,M=null;function T(v,C){let D=!1,L=C.isScene===!0?C.background:null;L&&L.isTexture&&(L=(C.backgroundBlurriness>0?n:e).get(L));const b=u.xr,k=b.getSession&&b.getSession();k&&k.environmentBlendMode==="additive"&&(L=null),L===null?y(c,m):L&&L.isColor&&(y(L,1),D=!0),(u.autoClear||D)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),L&&(L.isCubeTexture||L.mapping===Ja)?(_===void 0&&(_=new li(new Eo(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Ss(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,H,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.toneMapped=L.encoding!==vt,(x!==L||g!==L.version||M!==u.toneMapping)&&(_.material.needsUpdate=!0,x=L,g=L.version,M=u.toneMapping),_.layers.enableAll(),v.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new li(new To(2,2),new Ci({name:"BackgroundMaterial",uniforms:Ss(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=L.encoding!==vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||g!==L.version||M!==u.toneMapping)&&(p.material.needsUpdate=!0,x=L,g=L.version,M=u.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function y(v,C){v.getRGB(Ya,qp(u)),s.buffers.color.setClear(Ya.r,Ya.g,Ya.b,C,d)}return{getClearColor:function(){return c},setClearColor:function(v,C=1){c.set(v),m=C,y(c,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v,y(c,m)},render:T}}function ny(u,e,n,s){const o=u.getParameter(34921),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||l!==null,c={},m=v(null);let p=m,_=!1;function x(j,ie,fe,le,V){let J=!1;if(d){const q=y(le,fe,ie);p!==q&&(p=q,M(p.object)),J=C(j,le,fe,V),J&&D(j,le,fe,V)}else{const q=ie.wireframe===!0;(p.geometry!==le.id||p.program!==fe.id||p.wireframe!==q)&&(p.geometry=le.id,p.program=fe.id,p.wireframe=q,J=!0)}V!==null&&n.update(V,34963),(J||_)&&(_=!1,w(j,ie,fe,le),V!==null&&u.bindBuffer(34963,n.get(V).buffer))}function g(){return s.isWebGL2?u.createVertexArray():l.createVertexArrayOES()}function M(j){return s.isWebGL2?u.bindVertexArray(j):l.bindVertexArrayOES(j)}function T(j){return s.isWebGL2?u.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function y(j,ie,fe){const le=fe.wireframe===!0;let V=c[j.id];V===void 0&&(V={},c[j.id]=V);let J=V[ie.id];J===void 0&&(J={},V[ie.id]=J);let q=J[le];return q===void 0&&(q=v(g()),J[le]=q),q}function v(j){const ie=[],fe=[],le=[];for(let V=0;V<o;V++)ie[V]=0,fe[V]=0,le[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:fe,attributeDivisors:le,object:j,attributes:{},index:null}}function C(j,ie,fe,le){const V=p.attributes,J=ie.attributes;let q=0;const z=fe.getAttributes();for(const I in z)if(z[I].location>=0){const de=V[I];let G=J[I];if(G===void 0&&(I==="instanceMatrix"&&j.instanceMatrix&&(G=j.instanceMatrix),I==="instanceColor"&&j.instanceColor&&(G=j.instanceColor)),de===void 0||de.attribute!==G||G&&de.data!==G.data)return!0;q++}return p.attributesNum!==q||p.index!==le}function D(j,ie,fe,le){const V={},J=ie.attributes;let q=0;const z=fe.getAttributes();for(const I in z)if(z[I].location>=0){let de=J[I];de===void 0&&(I==="instanceMatrix"&&j.instanceMatrix&&(de=j.instanceMatrix),I==="instanceColor"&&j.instanceColor&&(de=j.instanceColor));const G={};G.attribute=de,de&&de.data&&(G.data=de.data),V[I]=G,q++}p.attributes=V,p.attributesNum=q,p.index=le}function L(){const j=p.newAttributes;for(let ie=0,fe=j.length;ie<fe;ie++)j[ie]=0}function b(j){k(j,0)}function k(j,ie){const fe=p.newAttributes,le=p.enabledAttributes,V=p.attributeDivisors;fe[j]=1,le[j]===0&&(u.enableVertexAttribArray(j),le[j]=1),V[j]!==ie&&((s.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ie),V[j]=ie)}function O(){const j=p.newAttributes,ie=p.enabledAttributes;for(let fe=0,le=ie.length;fe<le;fe++)ie[fe]!==j[fe]&&(u.disableVertexAttribArray(fe),ie[fe]=0)}function H(j,ie,fe,le,V,J){s.isWebGL2===!0&&(fe===5124||fe===5125)?u.vertexAttribIPointer(j,ie,fe,V,J):u.vertexAttribPointer(j,ie,fe,le,V,J)}function w(j,ie,fe,le){if(s.isWebGL2===!1&&(j.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const V=le.attributes,J=fe.getAttributes(),q=ie.defaultAttributeValues;for(const z in J){const I=J[z];if(I.location>=0){let te=V[z];if(te===void 0&&(z==="instanceMatrix"&&j.instanceMatrix&&(te=j.instanceMatrix),z==="instanceColor"&&j.instanceColor&&(te=j.instanceColor)),te!==void 0){const de=te.normalized,G=te.itemSize,ve=n.get(te);if(ve===void 0)continue;const ye=ve.buffer,xe=ve.type,Se=ve.bytesPerElement;if(te.isInterleavedBufferAttribute){const Ie=te.data,Ye=Ie.stride,Ze=te.offset;if(Ie.isInstancedInterleavedBuffer){for(let et=0;et<I.locationSize;et++)k(I.location+et,Ie.meshPerAttribute);j.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let et=0;et<I.locationSize;et++)b(I.location+et);u.bindBuffer(34962,ye);for(let et=0;et<I.locationSize;et++)H(I.location+et,G/I.locationSize,xe,de,Ye*Se,(Ze+G/I.locationSize*et)*Se)}else{if(te.isInstancedBufferAttribute){for(let Ie=0;Ie<I.locationSize;Ie++)k(I.location+Ie,te.meshPerAttribute);j.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ie=0;Ie<I.locationSize;Ie++)b(I.location+Ie);u.bindBuffer(34962,ye);for(let Ie=0;Ie<I.locationSize;Ie++)H(I.location+Ie,G/I.locationSize,xe,de,G*Se,G/I.locationSize*Ie*Se)}}else if(q!==void 0){const de=q[z];if(de!==void 0)switch(de.length){case 2:u.vertexAttrib2fv(I.location,de);break;case 3:u.vertexAttrib3fv(I.location,de);break;case 4:u.vertexAttrib4fv(I.location,de);break;default:u.vertexAttrib1fv(I.location,de)}}}}O()}function N(){ae();for(const j in c){const ie=c[j];for(const fe in ie){const le=ie[fe];for(const V in le)T(le[V].object),delete le[V];delete ie[fe]}delete c[j]}}function W(j){if(c[j.id]===void 0)return;const ie=c[j.id];for(const fe in ie){const le=ie[fe];for(const V in le)T(le[V].object),delete le[V];delete ie[fe]}delete c[j.id]}function ce(j){for(const ie in c){const fe=c[ie];if(fe[j.id]===void 0)continue;const le=fe[j.id];for(const V in le)T(le[V].object),delete le[V];delete fe[j.id]}}function ae(){Z(),_=!0,p!==m&&(p=m,M(p.object))}function Z(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:ae,resetDefaultState:Z,dispose:N,releaseStatesOfGeometry:W,releaseStatesOfProgram:ce,initAttributes:L,enableAttribute:b,disableUnusedAttributes:O}}function iy(u,e,n,s){const o=s.isWebGL2;let l;function d(p){l=p}function c(p,_){u.drawArrays(l,p,_),n.update(_,l,1)}function m(p,_,x){if(x===0)return;let g,M;if(o)g=u,M="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[M](l,p,_,x),n.update(_,l,x)}this.setMode=d,this.render=c,this.renderInstances=m}function ry(u,e,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");s=u.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(H){if(H==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";H="mediump"}return H==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&u instanceof WebGL2RenderingContext;let c=n.precision!==void 0?n.precision:"highp";const m=l(c);m!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const p=d||e.has("WEBGL_draw_buffers"),_=n.logarithmicDepthBuffer===!0,x=u.getParameter(34930),g=u.getParameter(35660),M=u.getParameter(3379),T=u.getParameter(34076),y=u.getParameter(34921),v=u.getParameter(36347),C=u.getParameter(36348),D=u.getParameter(36349),L=g>0,b=d||e.has("OES_texture_float"),k=L&&b,O=d?u.getParameter(36183):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:_,maxTextures:x,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:T,maxAttributes:y,maxVertexUniforms:v,maxVaryings:C,maxFragmentUniforms:D,vertexTextures:L,floatFragmentTextures:b,floatVertexTextures:k,maxSamples:O}}function sy(u){const e=this;let n=null,s=0,o=!1,l=!1;const d=new xr,c=new hn,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||o;return o=g,s=x.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){n=_(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,y=x.clipIntersection,v=x.clipShadows,C=u.get(x);if(!o||T===null||T.length===0||l&&!v)l?_(null):p();else{const D=l?0:s,L=D*4;let b=C.clippingState||null;m.value=b,b=_(T,g,L,M);for(let k=0;k!==L;++k)b[k]=n[k];C.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,g,M,T){const y=x!==null?x.length:0;let v=null;if(y!==0){if(v=m.value,T!==!0||v===null){const C=M+y*4,D=g.matrixWorldInverse;c.getNormalMatrix(D),(v===null||v.length<C)&&(v=new Float32Array(C));for(let L=0,b=M;L!==y;++L,b+=4)d.copy(x[L]).applyMatrix4(D,c),d.normal.toArray(v,b),v[b+3]=d.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function oy(u){let e=new WeakMap;function n(d,c){return c===wc?d.mapping=_s:c===Ec&&(d.mapping=xs),d}function s(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const c=d.mapping;if(c===wc||c===Ec)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new xv(m.height/2);return p.fromEquirectangularTexture(u,d),e.set(d,p),d.addEventListener("dispose",o),n(p.texture,d.mapping)}else return null}}return d}function o(d){const c=d.target;c.removeEventListener("dispose",o);const m=e.get(c);m!==void 0&&(e.delete(c),m.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Ic extends Yp{constructor(e=-1,n=1,s=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,d=s+e,c=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,c-=_*this.view.offsetY,m=c-_*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,m,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ps=4,sp=[.125,.215,.35,.446,.526,.582],Sr=20,_c=new Ic,op=new xt;let xc=null;const yr=(1+Math.sqrt(5))/2,ds=1/yr,ap=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,yr,ds),new ee(0,yr,-ds),new ee(ds,0,yr),new ee(-ds,0,yr),new ee(yr,ds,0),new ee(-yr,ds,0)];class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,o=100){xc=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget();const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:an,minFilter:an,generateMipmaps:!1,type:xo,format:Jn,encoding:Ar,depthBuffer:!1},o=up(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,n,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ay(l)),this._blurMaterial=ly(l,e,n)}return o}_compileMaterial(e){const n=new li(this._lodPlanes[0],e);this._renderer.compile(n,_c)}_sceneToCubeUV(e,n,s,o){const c=new Kn(90,1,n,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,g=_.toneMapping;_.getClearColor(op),_.toneMapping=Ti,_.autoClear=!1;const M=new Hp({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),T=new li(new Eo,M);let y=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,y=!0):(M.color.copy(op),y=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(c.up.set(0,m[C],0),c.lookAt(p[C],0,0)):D===1?(c.up.set(0,0,m[C]),c.lookAt(0,p[C],0)):(c.up.set(0,m[C],0),c.lookAt(0,0,p[C]));const L=this._cubeSize;$a(o,D*L,C>2?L:0,L,L),_.setRenderTarget(o),y&&_.render(T,c),_.render(e,c)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=g,_.autoClear=x,e.background=v}_textureToCubeUV(e,n){const s=this._renderer,o=e.mapping===_s||e.mapping===xs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());const l=o?this._cubemapMaterial:this._equirectMaterial,d=new li(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const m=this._cubeSize;$a(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(d,_c)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),d=ap[(o-1)%ap.length];this._blur(e,o-1,o,l,d)}n.autoClear=s}_blur(e,n,s,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,s,o,"latitudinal",l),this._halfBlur(d,e,s,s,o,"longitudinal",l)}_halfBlur(e,n,s,o,l,d,c){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new li(this._lodPlanes[o],p),g=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),y=l/T,v=isFinite(l)?1+Math.floor(_*y):Sr;v>Sr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Sr}`);const C=[];let D=0;for(let H=0;H<Sr;++H){const w=H/y,N=Math.exp(-w*w/2);C.push(N),H===0?D+=N:H<v&&(D+=2*N)}for(let H=0;H<C.length;H++)C[H]=C[H]/D;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=C,g.latitudinal.value=d==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const b=this._sizeLods[o],k=3*b*(o>L-ps?o-L+ps:0),O=4*(this._cubeSize-b);$a(n,k,O,3*b,2*b),m.setRenderTarget(n),m.render(x,_c)}}function ay(u){const e=[],n=[],s=[];let o=u;const l=u-ps+1+sp.length;for(let d=0;d<l;d++){const c=Math.pow(2,o);n.push(c);let m=1/c;d>u-ps?m=sp[d-u+ps-1]:d===0&&(m=0),s.push(m);const p=1/(c-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,T=6,y=3,v=2,C=1,D=new Float32Array(y*T*M),L=new Float32Array(v*T*M),b=new Float32Array(C*T*M);for(let O=0;O<M;O++){const H=O%3*2/3-1,w=O>2?0:-1,N=[H,w,0,H+2/3,w,0,H+2/3,w+1,0,H,w,0,H+2/3,w+1,0,H,w+1,0];D.set(N,y*T*O),L.set(g,v*T*O);const W=[O,O,O,O,O,O];b.set(W,C*T*O)}const k=new Rr;k.setAttribute("position",new ui(D,y)),k.setAttribute("uv",new ui(L,v)),k.setAttribute("faceIndex",new ui(b,C)),e.push(k),o>ps&&o--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function up(u,e,n){const s=new Lr(u,e,n);return s.texture.mapping=Ja,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $a(u,e,n,s,o){u.viewport.set(e,n,s,o),u.scissor.set(e,n,s,o)}function ly(u,e,n){const s=new Float32Array(Sr),o=new ee(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cp(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function fp(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function uy(u){let e=new WeakMap,n=null;function s(c){if(c&&c.isTexture){const m=c.mapping,p=m===wc||m===Ec,_=m===_s||m===xs;if(p||_)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return n===null&&(n=new lp(u)),x=p?n.fromEquirectangular(c,x):n.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(p&&x&&x.height>0||_&&x&&o(x)){n===null&&(n=new lp(u));const g=p?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,g),c.addEventListener("dispose",l),g.texture}else return null}}}return c}function o(c){let m=0;const p=6;for(let _=0;_<p;_++)c[_]!==void 0&&m++;return m===p}function l(c){const m=c.target;m.removeEventListener("dispose",l);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function cy(u){const e={};function n(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=u.getExtension(s)}return e[s]=o,o}return{has:function(s){return n(s)!==null},init:function(s){s.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(s){const o=n(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function fy(u,e,n,s){const o={},l=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(x,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,n.memory.geometries++),g}function m(x){const g=x.attributes;for(const T in g)e.update(g[T],34962);const M=x.morphAttributes;for(const T in M){const y=M[T];for(let v=0,C=y.length;v<C;v++)e.update(y[v],34962)}}function p(x){const g=[],M=x.index,T=x.attributes.position;let y=0;if(M!==null){const D=M.array;y=M.version;for(let L=0,b=D.length;L<b;L+=3){const k=D[L+0],O=D[L+1],H=D[L+2];g.push(k,O,O,H,H,k)}}else{const D=T.array;y=T.version;for(let L=0,b=D.length/3-1;L<b;L+=3){const k=L+0,O=L+1,H=L+2;g.push(k,O,O,H,H,k)}}const v=new(Up(g)?jp:Xp)(g,1);v.version=y;const C=l.get(x);C&&e.remove(C),l.set(x,v)}function _(x){const g=l.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:c,update:m,getWireframeAttribute:_}}function dy(u,e,n,s){const o=s.isWebGL2;let l;function d(g){l=g}let c,m;function p(g){c=g.type,m=g.bytesPerElement}function _(g,M){u.drawElements(l,M,c,g*m),n.update(M,l,1)}function x(g,M,T){if(T===0)return;let y,v;if(o)y=u,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](l,M,c,g*m,T),n.update(M,l,T)}this.setMode=d,this.setIndex=p,this.render=_,this.renderInstances=x}function hy(u){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,c){switch(n.calls++,d){case 4:n.triangles+=c*(l/3);break;case 1:n.lines+=c*(l/2);break;case 3:n.lines+=c*(l-1);break;case 2:n.lines+=c*l;break;case 0:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:s}}function py(u,e){return u[0]-e[0]}function my(u,e){return Math.abs(e[1])-Math.abs(u[1])}function gy(u,e,n){const s={},o=new Float32Array(8),l=new WeakMap,d=new $t,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function m(p,_,x){const g=p.morphTargetInfluences;if(e.isWebGL2===!0){const T=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,y=T!==void 0?T.length:0;let v=l.get(_);if(v===void 0||v.count!==y){let ie=function(){Z.dispose(),l.delete(_),_.removeEventListener("dispose",ie)};var M=ie;v!==void 0&&v.texture.dispose();const L=_.morphAttributes.position!==void 0,b=_.morphAttributes.normal!==void 0,k=_.morphAttributes.color!==void 0,O=_.morphAttributes.position||[],H=_.morphAttributes.normal||[],w=_.morphAttributes.color||[];let N=0;L===!0&&(N=1),b===!0&&(N=2),k===!0&&(N=3);let W=_.attributes.position.count*N,ce=1;W>e.maxTextureSize&&(ce=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const ae=new Float32Array(W*ce*4*y),Z=new Vp(ae,W,ce,y);Z.type=wr,Z.needsUpdate=!0;const j=N*4;for(let fe=0;fe<y;fe++){const le=O[fe],V=H[fe],J=w[fe],q=W*ce*4*fe;for(let z=0;z<le.count;z++){const I=z*j;L===!0&&(d.fromBufferAttribute(le,z),ae[q+I+0]=d.x,ae[q+I+1]=d.y,ae[q+I+2]=d.z,ae[q+I+3]=0),b===!0&&(d.fromBufferAttribute(V,z),ae[q+I+4]=d.x,ae[q+I+5]=d.y,ae[q+I+6]=d.z,ae[q+I+7]=0),k===!0&&(d.fromBufferAttribute(J,z),ae[q+I+8]=d.x,ae[q+I+9]=d.y,ae[q+I+10]=d.z,ae[q+I+11]=J.itemSize===4?d.w:1)}}v={count:y,texture:Z,size:new ct(W,ce)},l.set(_,v),_.addEventListener("dispose",ie)}let C=0;for(let L=0;L<g.length;L++)C+=g[L];const D=_.morphTargetsRelative?1:1-C;x.getUniforms().setValue(u,"morphTargetBaseInfluence",D),x.getUniforms().setValue(u,"morphTargetInfluences",g),x.getUniforms().setValue(u,"morphTargetsTexture",v.texture,n),x.getUniforms().setValue(u,"morphTargetsTextureSize",v.size)}else{const T=g===void 0?0:g.length;let y=s[_.id];if(y===void 0||y.length!==T){y=[];for(let b=0;b<T;b++)y[b]=[b,0];s[_.id]=y}for(let b=0;b<T;b++){const k=y[b];k[0]=b,k[1]=g[b]}y.sort(my);for(let b=0;b<8;b++)b<T&&y[b][1]?(c[b][0]=y[b][0],c[b][1]=y[b][1]):(c[b][0]=Number.MAX_SAFE_INTEGER,c[b][1]=0);c.sort(py);const v=_.morphAttributes.position,C=_.morphAttributes.normal;let D=0;for(let b=0;b<8;b++){const k=c[b],O=k[0],H=k[1];O!==Number.MAX_SAFE_INTEGER&&H?(v&&_.getAttribute("morphTarget"+b)!==v[O]&&_.setAttribute("morphTarget"+b,v[O]),C&&_.getAttribute("morphNormal"+b)!==C[O]&&_.setAttribute("morphNormal"+b,C[O]),o[b]=H,D+=H):(v&&_.hasAttribute("morphTarget"+b)===!0&&_.deleteAttribute("morphTarget"+b),C&&_.hasAttribute("morphNormal"+b)===!0&&_.deleteAttribute("morphNormal"+b),o[b]=0)}const L=_.morphTargetsRelative?1:1-D;x.getUniforms().setValue(u,"morphTargetBaseInfluence",L),x.getUniforms().setValue(u,"morphTargetInfluences",o)}}return{update:m}}function vy(u,e,n,s){let o=new WeakMap;function l(m){const p=s.render.frame,_=m.geometry,x=e.get(m,_);return o.get(x)!==p&&(e.update(x),o.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",c)===!1&&m.addEventListener("dispose",c),n.update(m.instanceMatrix,34962),m.instanceColor!==null&&n.update(m.instanceColor,34962)),x}function d(){o=new WeakMap}function c(m){const p=m.target;p.removeEventListener("dispose",c),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:d}}const Qp=new pn,Jp=new Vp,em=new nv,tm=new $p,dp=[],hp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function ws(u,e,n){const s=u[0];if(s<=0||s>0)return u;const o=e*n;let l=dp[o];if(l===void 0&&(l=new Float32Array(o),dp[o]=l),e!==0){s.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,u[d].toArray(l,c)}return l}function Ft(u,e){if(u.length!==e.length)return!1;for(let n=0,s=u.length;n<s;n++)if(u[n]!==e[n])return!1;return!0}function Ut(u,e){for(let n=0,s=e.length;n<s;n++)u[n]=e[n]}function nl(u,e){let n=hp[e];n===void 0&&(n=new Int32Array(e),hp[e]=n);for(let s=0;s!==e;++s)n[s]=u.allocateTextureUnit();return n}function _y(u,e){const n=this.cache;n[0]!==e&&(u.uniform1f(this.addr,e),n[0]=e)}function xy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;u.uniform2fv(this.addr,e),Ut(n,e)}}function yy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;u.uniform3fv(this.addr,e),Ut(n,e)}}function Sy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;u.uniform4fv(this.addr,e),Ut(n,e)}}function My(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ft(n,e))return;u.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Ft(n,s))return;gp.set(s),u.uniformMatrix2fv(this.addr,!1,gp),Ut(n,s)}}function wy(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ft(n,e))return;u.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Ft(n,s))return;mp.set(s),u.uniformMatrix3fv(this.addr,!1,mp),Ut(n,s)}}function Ey(u,e){const n=this.cache,s=e.elements;if(s===void 0){if(Ft(n,e))return;u.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Ft(n,s))return;pp.set(s),u.uniformMatrix4fv(this.addr,!1,pp),Ut(n,s)}}function Ty(u,e){const n=this.cache;n[0]!==e&&(u.uniform1i(this.addr,e),n[0]=e)}function Cy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;u.uniform2iv(this.addr,e),Ut(n,e)}}function by(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;u.uniform3iv(this.addr,e),Ut(n,e)}}function Ay(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;u.uniform4iv(this.addr,e),Ut(n,e)}}function Ly(u,e){const n=this.cache;n[0]!==e&&(u.uniform1ui(this.addr,e),n[0]=e)}function Ry(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(u.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;u.uniform2uiv(this.addr,e),Ut(n,e)}}function Py(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(u.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;u.uniform3uiv(this.addr,e),Ut(n,e)}}function Dy(u,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(u.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;u.uniform4uiv(this.addr,e),Ut(n,e)}}function Iy(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture2D(e||Qp,o)}function Ny(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(e||em,o)}function ky(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(e||tm,o)}function zy(u,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(u.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(e||Jp,o)}function Fy(u){switch(u){case 5126:return _y;case 35664:return xy;case 35665:return yy;case 35666:return Sy;case 35674:return My;case 35675:return wy;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return Cy;case 35668:case 35672:return by;case 35669:case 35673:return Ay;case 5125:return Ly;case 36294:return Ry;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return zy}}function Uy(u,e){u.uniform1fv(this.addr,e)}function Oy(u,e){const n=ws(e,this.size,2);u.uniform2fv(this.addr,n)}function By(u,e){const n=ws(e,this.size,3);u.uniform3fv(this.addr,n)}function Vy(u,e){const n=ws(e,this.size,4);u.uniform4fv(this.addr,n)}function Gy(u,e){const n=ws(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,n)}function Wy(u,e){const n=ws(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,n)}function Hy(u,e){const n=ws(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,n)}function Xy(u,e){u.uniform1iv(this.addr,e)}function jy(u,e){u.uniform2iv(this.addr,e)}function qy(u,e){u.uniform3iv(this.addr,e)}function Yy(u,e){u.uniform4iv(this.addr,e)}function $y(u,e){u.uniform1uiv(this.addr,e)}function Zy(u,e){u.uniform2uiv(this.addr,e)}function Ky(u,e){u.uniform3uiv(this.addr,e)}function Qy(u,e){u.uniform4uiv(this.addr,e)}function Jy(u,e,n){const s=this.cache,o=e.length,l=nl(n,o);Ft(s,l)||(u.uniform1iv(this.addr,l),Ut(s,l));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Qp,l[d])}function eS(u,e,n){const s=this.cache,o=e.length,l=nl(n,o);Ft(s,l)||(u.uniform1iv(this.addr,l),Ut(s,l));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||em,l[d])}function tS(u,e,n){const s=this.cache,o=e.length,l=nl(n,o);Ft(s,l)||(u.uniform1iv(this.addr,l),Ut(s,l));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||tm,l[d])}function nS(u,e,n){const s=this.cache,o=e.length,l=nl(n,o);Ft(s,l)||(u.uniform1iv(this.addr,l),Ut(s,l));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Jp,l[d])}function iS(u){switch(u){case 5126:return Uy;case 35664:return Oy;case 35665:return By;case 35666:return Vy;case 35674:return Gy;case 35675:return Wy;case 35676:return Hy;case 5124:case 35670:return Xy;case 35667:case 35671:return jy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return $y;case 36294:return Zy;case 36295:return Ky;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class rS{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.setValue=Fy(n.type)}}class sS{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.size=n.size,this.setValue=iS(n.type)}}class oS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const c=o[l];c.setValue(e,n[c.id],s)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function vp(u,e){u.seq.push(e),u.map[e.id]=e}function aS(u,e,n){const s=u.name,o=s.length;for(yc.lastIndex=0;;){const l=yc.exec(s),d=yc.lastIndex;let c=l[1];const m=l[2]==="]",p=l[3];if(m&&(c=c|0),p===void 0||p==="["&&d+2===o){vp(n,p===void 0?new rS(c,u,e):new sS(c,u,e));break}else{let x=n.map[c];x===void 0&&(x=new oS(c),vp(n,x)),n=x}}}class Ka{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,35718);for(let o=0;o<s;++o){const l=e.getActiveUniform(n,o),d=e.getUniformLocation(n,l.name);aS(l,d,this)}}setValue(e,n,s,o){const l=this.map[n];l!==void 0&&l.setValue(e,s,o)}setOptional(e,n,s){const o=n[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,n,s,o){for(let l=0,d=n.length;l!==d;++l){const c=n[l],m=s[c.id];m.needsUpdate!==!1&&c.setValue(e,m.value,o)}}static seqWithValue(e,n){const s=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in n&&s.push(d)}return s}}function _p(u,e,n){const s=u.createShader(e);return u.shaderSource(s,n),u.compileShader(s),s}let lS=0;function uS(u,e){const n=u.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=o;d<l;d++){const c=d+1;s.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return s.join(`
`)}function cS(u){switch(u){case Ar:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function xp(u,e,n){const s=u.getShaderParameter(e,35713),o=u.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+uS(u.getShaderSource(e),d)}else return o}function fS(u,e){const n=cS(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function dS(u,e){let n;switch(e){case S0:n="Linear";break;case M0:n="Reinhard";break;case w0:n="OptimizedCineon";break;case E0:n="ACESFilmic";break;case T0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+u+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hS(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.tangentSpaceNormalMap||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vo).join(`
`)}function pS(u){const e=[];for(const n in u){const s=u[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function mS(u,e){const n={},s=u.getProgramParameter(e,35721);for(let o=0;o<s;o++){const l=u.getActiveAttrib(e,o),d=l.name;let c=1;l.type===35674&&(c=2),l.type===35675&&(c=3),l.type===35676&&(c=4),n[d]={type:l.type,location:u.getAttribLocation(e,d),locationSize:c}}return n}function vo(u){return u!==""}function yp(u,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sp(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(u){return u.replace(gS,vS)}function vS(u,e){const n=Ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ac(n)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(u){return u.replace(_S,xS)}function xS(u,e,n,s){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function wp(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yS(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===Pp?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===go&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function wS(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case Np:e="ENVMAP_BLENDING_MULTIPLY";break;case x0:e="ENVMAP_BLENDING_MIX";break;case y0:e="ENVMAP_BLENDING_ADD";break}return e}function ES(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function TS(u,e,n,s){const o=u.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const m=yS(n),p=SS(n),_=MS(n),x=wS(n),g=ES(n),M=n.isWebGL2?"":hS(n),T=pS(l),y=o.createProgram();let v,C,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[T].filter(vo).join(`
`),v.length>0&&(v+=`
`),C=[M,T].filter(vo).join(`
`),C.length>0&&(C+=`
`)):(v=[wp(n),"#define SHADER_NAME "+n.shaderName,T,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),C=[M,wp(n),"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Ti?dS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,fS("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),d=Ac(d),d=yp(d,n),d=Sp(d,n),c=Ac(c),c=yp(c,n),c=Sp(c,n),d=Mp(d),c=Mp(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,C=["#define varying in",n.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const L=D+v+d,b=D+C+c,k=_p(o,35633,L),O=_p(o,35632,b);if(o.attachShader(y,k),o.attachShader(y,O),n.index0AttributeName!==void 0?o.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),u.debug.checkShaderErrors){const N=o.getProgramInfoLog(y).trim(),W=o.getShaderInfoLog(k).trim(),ce=o.getShaderInfoLog(O).trim();let ae=!0,Z=!0;if(o.getProgramParameter(y,35714)===!1){ae=!1;const j=xp(o,k,"vertex"),ie=xp(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+N+`
`+j+`
`+ie)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(W===""||ce==="")&&(Z=!1);Z&&(this.diagnostics={runnable:ae,programLog:N,vertexShader:{log:W,prefix:v},fragmentShader:{log:ce,prefix:C}})}o.deleteShader(k),o.deleteShader(O);let H;this.getUniforms=function(){return H===void 0&&(H=new Ka(o,y)),H};let w;return this.getAttributes=function(){return w===void 0&&(w=mS(o,y)),w},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=k,this.fragmentShader=O,this}let CS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new AS(e),n.set(e,s)),s}}class AS{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}}function LS(u,e,n,s,o,l,d){const c=new Gp,m=new bS,p=[],_=o.isWebGL2,x=o.logarithmicDepthBuffer,g=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w,N,W,ce,ae){const Z=ce.fog,j=ae.geometry,ie=w.isMeshStandardMaterial?ce.environment:null,fe=(w.isMeshStandardMaterial?n:e).get(w.envMap||ie),le=fe&&fe.mapping===Ja?fe.image.height:null,V=T[w.type];w.precision!==null&&(M=o.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const J=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,q=J!==void 0?J.length:0;let z=0;j.morphAttributes.position!==void 0&&(z=1),j.morphAttributes.normal!==void 0&&(z=2),j.morphAttributes.color!==void 0&&(z=3);let I,te,de,G;if(V){const Ye=ai[V];I=Ye.vertexShader,te=Ye.fragmentShader}else I=w.vertexShader,te=w.fragmentShader,m.update(w),de=m.getVertexShaderID(w),G=m.getFragmentShaderID(w);const ve=u.getRenderTarget(),ye=w.alphaTest>0,xe=w.clearcoat>0,Se=w.iridescence>0;return{isWebGL2:_,shaderID:V,shaderName:w.type,vertexShader:I,fragmentShader:te,defines:w.defines,customVertexShaderID:de,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:g,outputEncoding:ve===null?u.outputEncoding:ve.isXRRenderTarget===!0?ve.texture.encoding:Ar,map:!!w.map,matcap:!!w.matcap,envMap:!!fe,envMapMode:fe&&fe.mapping,envMapCubeUVHeight:le,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===X0,tangentSpaceNormalMap:w.normalMapType===H0,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===vt,clearcoat:xe,clearcoatMap:xe&&!!w.clearcoatMap,clearcoatRoughnessMap:xe&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!w.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!w.iridescenceMap,iridescenceThicknessMap:Se&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===ms,alphaMap:!!w.alphaMap,alphaTest:ye,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!j.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!Z,useFog:w.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:x,skinning:ae.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:z,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:u.shadowMap.enabled&&W.length>0,shadowMapType:u.shadowMap.type,toneMapping:w.toneMapped?u.toneMapping:Ti,useLegacyLights:u.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===Dn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:_||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||s.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const W in w.defines)N.push(W),N.push(w.defines[W]);return w.isRawShaderMaterial===!1&&(C(N,w),D(N,w),N.push(u.outputEncoding)),N.push(w.customProgramCacheKey),N.join()}function C(w,N){w.push(N.precision),w.push(N.outputEncoding),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.combine),w.push(N.vertexUvs),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function D(w,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.map&&c.enable(4),N.matcap&&c.enable(5),N.envMap&&c.enable(6),N.lightMap&&c.enable(7),N.aoMap&&c.enable(8),N.emissiveMap&&c.enable(9),N.bumpMap&&c.enable(10),N.normalMap&&c.enable(11),N.objectSpaceNormalMap&&c.enable(12),N.tangentSpaceNormalMap&&c.enable(13),N.clearcoat&&c.enable(14),N.clearcoatMap&&c.enable(15),N.clearcoatRoughnessMap&&c.enable(16),N.clearcoatNormalMap&&c.enable(17),N.iridescence&&c.enable(18),N.iridescenceMap&&c.enable(19),N.iridescenceThicknessMap&&c.enable(20),N.displacementMap&&c.enable(21),N.specularMap&&c.enable(22),N.roughnessMap&&c.enable(23),N.metalnessMap&&c.enable(24),N.gradientMap&&c.enable(25),N.alphaMap&&c.enable(26),N.alphaTest&&c.enable(27),N.vertexColors&&c.enable(28),N.vertexAlphas&&c.enable(29),N.vertexUvs&&c.enable(30),N.vertexTangents&&c.enable(31),N.uvsVertexOnly&&c.enable(32),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.specularIntensityMap&&c.enable(15),N.specularColorMap&&c.enable(16),N.transmission&&c.enable(17),N.transmissionMap&&c.enable(18),N.thicknessMap&&c.enable(19),N.sheen&&c.enable(20),N.sheenColorMap&&c.enable(21),N.sheenRoughnessMap&&c.enable(22),N.decodeVideoTexture&&c.enable(23),N.opaque&&c.enable(24),w.push(c.mask)}function L(w){const N=T[w.type];let W;if(N){const ce=ai[N];W=mv.clone(ce.uniforms)}else W=w.uniforms;return W}function b(w,N){let W;for(let ce=0,ae=p.length;ce<ae;ce++){const Z=p[ce];if(Z.cacheKey===N){W=Z,++W.usedTimes;break}}return W===void 0&&(W=new TS(u,N,w,l),p.push(W)),W}function k(w){if(--w.usedTimes===0){const N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),w.destroy()}}function O(w){m.remove(w)}function H(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:L,acquireProgram:b,releaseProgram:k,releaseShaderCache:O,programs:p,dispose:H}}function RS(){let u=new WeakMap;function e(l){let d=u.get(l);return d===void 0&&(d={},u.set(l,d)),d}function n(l){u.delete(l)}function s(l,d,c){u.get(l)[d]=c}function o(){u=new WeakMap}return{get:e,remove:n,update:s,dispose:o}}function PS(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function Ep(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function Tp(){const u=[];let e=0;const n=[],s=[],o=[];function l(){e=0,n.length=0,s.length=0,o.length=0}function d(x,g,M,T,y,v){let C=u[e];return C===void 0?(C={id:x.id,object:x,geometry:g,material:M,groupOrder:T,renderOrder:x.renderOrder,z:y,group:v},u[e]=C):(C.id=x.id,C.object=x,C.geometry=g,C.material=M,C.groupOrder=T,C.renderOrder=x.renderOrder,C.z=y,C.group=v),e++,C}function c(x,g,M,T,y,v){const C=d(x,g,M,T,y,v);M.transmission>0?s.push(C):M.transparent===!0?o.push(C):n.push(C)}function m(x,g,M,T,y,v){const C=d(x,g,M,T,y,v);M.transmission>0?s.unshift(C):M.transparent===!0?o.unshift(C):n.unshift(C)}function p(x,g){n.length>1&&n.sort(x||PS),s.length>1&&s.sort(g||Ep),o.length>1&&o.sort(g||Ep)}function _(){for(let x=e,g=u.length;x<g;x++){const M=u[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:o,init:l,push:c,unshift:m,finish:_,sort:p}}function DS(){let u=new WeakMap;function e(s,o){const l=u.get(s);let d;return l===void 0?(d=new Tp,u.set(s,[d])):o>=l.length?(d=new Tp,l.push(d)):d=l[o],d}function n(){u=new WeakMap}return{get:e,dispose:n}}function IS(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new xt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return u[e.id]=n,n}}}function NS(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=n,n}}}let kS=0;function zS(u,e){return(e.castShadow?2:0)-(u.castShadow?2:0)+(e.map?1:0)-(u.map?1:0)}function FS(u,e){const n=new IS,s=NS(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let _=0;_<9;_++)o.probe.push(new ee);const l=new ee,d=new Zt,c=new Zt;function m(_,x){let g=0,M=0,T=0;for(let ce=0;ce<9;ce++)o.probe[ce].set(0,0,0);let y=0,v=0,C=0,D=0,L=0,b=0,k=0,O=0,H=0,w=0;_.sort(zS);const N=x===!0?Math.PI:1;for(let ce=0,ae=_.length;ce<ae;ce++){const Z=_[ce],j=Z.color,ie=Z.intensity,fe=Z.distance,le=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null;if(Z.isAmbientLight)g+=j.r*ie*N,M+=j.g*ie*N,T+=j.b*ie*N;else if(Z.isLightProbe)for(let V=0;V<9;V++)o.probe[V].addScaledVector(Z.sh.coefficients[V],ie);else if(Z.isDirectionalLight){const V=n.get(Z);if(V.color.copy(Z.color).multiplyScalar(Z.intensity*N),Z.castShadow){const J=Z.shadow,q=s.get(Z);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,o.directionalShadow[y]=q,o.directionalShadowMap[y]=le,o.directionalShadowMatrix[y]=Z.shadow.matrix,b++}o.directional[y]=V,y++}else if(Z.isSpotLight){const V=n.get(Z);V.position.setFromMatrixPosition(Z.matrixWorld),V.color.copy(j).multiplyScalar(ie*N),V.distance=fe,V.coneCos=Math.cos(Z.angle),V.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),V.decay=Z.decay,o.spot[C]=V;const J=Z.shadow;if(Z.map&&(o.spotLightMap[H]=Z.map,H++,J.updateMatrices(Z),Z.castShadow&&w++),o.spotLightMatrix[C]=J.matrix,Z.castShadow){const q=s.get(Z);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,o.spotShadow[C]=q,o.spotShadowMap[C]=le,O++}C++}else if(Z.isRectAreaLight){const V=n.get(Z);V.color.copy(j).multiplyScalar(ie),V.halfWidth.set(Z.width*.5,0,0),V.halfHeight.set(0,Z.height*.5,0),o.rectArea[D]=V,D++}else if(Z.isPointLight){const V=n.get(Z);if(V.color.copy(Z.color).multiplyScalar(Z.intensity*N),V.distance=Z.distance,V.decay=Z.decay,Z.castShadow){const J=Z.shadow,q=s.get(Z);q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,o.pointShadow[v]=q,o.pointShadowMap[v]=le,o.pointShadowMatrix[v]=Z.shadow.matrix,k++}o.point[v]=V,v++}else if(Z.isHemisphereLight){const V=n.get(Z);V.skyColor.copy(Z.color).multiplyScalar(ie*N),V.groundColor.copy(Z.groundColor).multiplyScalar(ie*N),o.hemi[L]=V,L++}}D>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ee.LTC_FLOAT_1,o.rectAreaLTC2=Ee.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ee.LTC_HALF_1,o.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=g,o.ambient[1]=M,o.ambient[2]=T;const W=o.hash;(W.directionalLength!==y||W.pointLength!==v||W.spotLength!==C||W.rectAreaLength!==D||W.hemiLength!==L||W.numDirectionalShadows!==b||W.numPointShadows!==k||W.numSpotShadows!==O||W.numSpotMaps!==H)&&(o.directional.length=y,o.spot.length=C,o.rectArea.length=D,o.point.length=v,o.hemi.length=L,o.directionalShadow.length=b,o.directionalShadowMap.length=b,o.pointShadow.length=k,o.pointShadowMap.length=k,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=b,o.pointShadowMatrix.length=k,o.spotLightMatrix.length=O+H-w,o.spotLightMap.length=H,o.numSpotLightShadowsWithMaps=w,W.directionalLength=y,W.pointLength=v,W.spotLength=C,W.rectAreaLength=D,W.hemiLength=L,W.numDirectionalShadows=b,W.numPointShadows=k,W.numSpotShadows=O,W.numSpotMaps=H,o.version=kS++)}function p(_,x){let g=0,M=0,T=0,y=0,v=0;const C=x.matrixWorldInverse;for(let D=0,L=_.length;D<L;D++){const b=_[D];if(b.isDirectionalLight){const k=o.directional[g];k.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(C),g++}else if(b.isSpotLight){const k=o.spot[T];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(C),k.direction.setFromMatrixPosition(b.matrixWorld),l.setFromMatrixPosition(b.target.matrixWorld),k.direction.sub(l),k.direction.transformDirection(C),T++}else if(b.isRectAreaLight){const k=o.rectArea[y];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(C),c.identity(),d.copy(b.matrixWorld),d.premultiply(C),c.extractRotation(d),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),y++}else if(b.isPointLight){const k=o.point[M];k.position.setFromMatrixPosition(b.matrixWorld),k.position.applyMatrix4(C),M++}else if(b.isHemisphereLight){const k=o.hemi[v];k.direction.setFromMatrixPosition(b.matrixWorld),k.direction.transformDirection(C),v++}}}return{setup:m,setupView:p,state:o}}function Cp(u,e){const n=new FS(u,e),s=[],o=[];function l(){s.length=0,o.length=0}function d(x){s.push(x)}function c(x){o.push(x)}function m(x){n.setup(s,x)}function p(x){n.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:n},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:c}}function US(u,e){let n=new WeakMap;function s(l,d=0){const c=n.get(l);let m;return c===void 0?(m=new Cp(u,e),n.set(l,[m])):d>=c.length?(m=new Cp(u,e),c.push(m)):m=c[d],m}function o(){n=new WeakMap}return{get:s,dispose:o}}class OS extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new ee,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
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
}`;function WS(u,e,n){let s=new Zp;const o=new ct,l=new ct,d=new $t,c=new OS({depthPacking:W0}),m=new BS,p={},_=n.maxTextureSize,x={[er]:Dn,[Dn]:er,[Ki]:Ki},g=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:VS,fragmentShader:GS}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Rr;T.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new li(T,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pp,this.render=function(b,k,O){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;const H=u.getRenderTarget(),w=u.getActiveCubeFace(),N=u.getActiveMipmapLevel(),W=u.state;W.setBlending(Ji),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let ce=0,ae=b.length;ce<ae;ce++){const Z=b[ce],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const ie=j.getFrameExtents();if(o.multiply(ie),l.copy(j.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ie.x),o.x=l.x*ie.x,j.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ie.y),o.y=l.y*ie.y,j.mapSize.y=l.y)),j.map===null){const le=this.type!==go?{minFilter:zt,magFilter:zt}:{};j.map=new Lr(o.x,o.y,le),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}u.setRenderTarget(j.map),u.clear();const fe=j.getViewportCount();for(let le=0;le<fe;le++){const V=j.getViewport(le);d.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),W.viewport(d),j.updateMatrices(Z,le),s=j.getFrustum(),L(k,O,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===go&&C(j,O),j.needsUpdate=!1}v.needsUpdate=!1,u.setRenderTarget(H,w,N)};function C(b,k){const O=e.update(y);g.defines.VSM_SAMPLES!==b.blurSamples&&(g.defines.VSM_SAMPLES=b.blurSamples,M.defines.VSM_SAMPLES=b.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Lr(o.x,o.y)),g.uniforms.shadow_pass.value=b.map.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,u.setRenderTarget(b.mapPass),u.clear(),u.renderBufferDirect(k,null,O,g,y,null),M.uniforms.shadow_pass.value=b.mapPass.texture,M.uniforms.resolution.value=b.mapSize,M.uniforms.radius.value=b.radius,u.setRenderTarget(b.map),u.clear(),u.renderBufferDirect(k,null,O,M,y,null)}function D(b,k,O,H,w,N){let W=null;const ce=O.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(ce!==void 0)W=ce;else if(W=O.isPointLight===!0?m:c,u.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ae=W.uuid,Z=k.uuid;let j=p[ae];j===void 0&&(j={},p[ae]=j);let ie=j[Z];ie===void 0&&(ie=W.clone(),j[Z]=ie),W=ie}return W.visible=k.visible,W.wireframe=k.wireframe,N===go?W.side=k.shadowSide!==null?k.shadowSide:k.side:W.side=k.shadowSide!==null?k.shadowSide:x[k.side],W.alphaMap=k.alphaMap,W.alphaTest=k.alphaTest,W.map=k.map,W.clipShadows=k.clipShadows,W.clippingPlanes=k.clippingPlanes,W.clipIntersection=k.clipIntersection,W.displacementMap=k.displacementMap,W.displacementScale=k.displacementScale,W.displacementBias=k.displacementBias,W.wireframeLinewidth=k.wireframeLinewidth,W.linewidth=k.linewidth,O.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(W.referencePosition.setFromMatrixPosition(O.matrixWorld),W.nearDistance=H,W.farDistance=w),W}function L(b,k,O,H,w){if(b.visible===!1)return;if(b.layers.test(k.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===go)&&(!b.frustumCulled||s.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld);const ce=e.update(b),ae=b.material;if(Array.isArray(ae)){const Z=ce.groups;for(let j=0,ie=Z.length;j<ie;j++){const fe=Z[j],le=ae[fe.materialIndex];if(le&&le.visible){const V=D(b,le,H,O.near,O.far,w);u.renderBufferDirect(O,null,ce,V,b,fe)}}}else if(ae.visible){const Z=D(b,ae,H,O.near,O.far,w);u.renderBufferDirect(O,null,ce,Z,b,null)}}const W=b.children;for(let ce=0,ae=W.length;ce<ae;ce++)L(W[ce],k,O,H,w)}}function HS(u,e,n){const s=n.isWebGL2;function o(){let B=!1;const re=new $t;let me=null;const Te=new $t(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!B&&(u.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,at,bt,Bt,Mn){Mn===!0&&(Pe*=Bt,at*=Bt,bt*=Bt),re.set(Pe,at,bt,Bt),Te.equals(re)===!1&&(u.clearColor(Pe,at,bt,Bt),Te.copy(re))},reset:function(){B=!1,me=null,Te.set(-1,0,0,0)}}}function l(){let B=!1,re=null,me=null,Te=null;return{setTest:function(Pe){Pe?ye(2929):xe(2929)},setMask:function(Pe){re!==Pe&&!B&&(u.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(me!==Pe){switch(Pe){case d0:u.depthFunc(512);break;case h0:u.depthFunc(519);break;case p0:u.depthFunc(513);break;case Mc:u.depthFunc(515);break;case m0:u.depthFunc(514);break;case g0:u.depthFunc(518);break;case v0:u.depthFunc(516);break;case _0:u.depthFunc(517);break;default:u.depthFunc(515)}me=Pe}},setLocked:function(Pe){B=Pe},setClear:function(Pe){Te!==Pe&&(u.clearDepth(Pe),Te=Pe)},reset:function(){B=!1,re=null,me=null,Te=null}}}function d(){let B=!1,re=null,me=null,Te=null,Pe=null,at=null,bt=null,Bt=null,Mn=null;return{setTest:function(ht){B||(ht?ye(2960):xe(2960))},setMask:function(ht){re!==ht&&!B&&(u.stencilMask(ht),re=ht)},setFunc:function(ht,ln,Qt){(me!==ht||Te!==ln||Pe!==Qt)&&(u.stencilFunc(ht,ln,Qt),me=ht,Te=ln,Pe=Qt)},setOp:function(ht,ln,Qt){(at!==ht||bt!==ln||Bt!==Qt)&&(u.stencilOp(ht,ln,Qt),at=ht,bt=ln,Bt=Qt)},setLocked:function(ht){B=ht},setClear:function(ht){Mn!==ht&&(u.clearStencil(ht),Mn=ht)},reset:function(){B=!1,re=null,me=null,Te=null,Pe=null,at=null,bt=null,Bt=null,Mn=null}}}const c=new o,m=new l,p=new d,_=new WeakMap,x=new WeakMap;let g={},M={},T=new WeakMap,y=[],v=null,C=!1,D=null,L=null,b=null,k=null,O=null,H=null,w=null,N=!1,W=null,ce=null,ae=null,Z=null,j=null;const ie=u.getParameter(35661);let fe=!1,le=0;const V=u.getParameter(7938);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),fe=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),fe=le>=2);let J=null,q={};const z=u.getParameter(3088),I=u.getParameter(2978),te=new $t().fromArray(z),de=new $t().fromArray(I);function G(B,re,me){const Te=new Uint8Array(4),Pe=u.createTexture();u.bindTexture(B,Pe),u.texParameteri(B,10241,9728),u.texParameteri(B,10240,9728);for(let at=0;at<me;at++)u.texImage2D(re+at,0,6408,1,1,0,6408,5121,Te);return Pe}const ve={};ve[3553]=G(3553,3553,1),ve[34067]=G(34067,34069,6),c.setClear(0,0,0,1),m.setClear(1),p.setClear(0),ye(2929),m.setFunc(Mc),jt(!1),It(ph),ye(2884),Dt(Ji);function ye(B){g[B]!==!0&&(u.enable(B),g[B]=!0)}function xe(B){g[B]!==!1&&(u.disable(B),g[B]=!1)}function Se(B,re){return M[B]!==re?(u.bindFramebuffer(B,re),M[B]=re,s&&(B===36009&&(M[36160]=re),B===36160&&(M[36009]=re)),!0):!1}function Ie(B,re){let me=y,Te=!1;if(B)if(me=T.get(re),me===void 0&&(me=[],T.set(re,me)),B.isWebGLMultipleRenderTargets){const Pe=B.texture;if(me.length!==Pe.length||me[0]!==36064){for(let at=0,bt=Pe.length;at<bt;at++)me[at]=36064+at;me.length=Pe.length,Te=!0}}else me[0]!==36064&&(me[0]=36064,Te=!0);else me[0]!==1029&&(me[0]=1029,Te=!0);Te&&(n.isWebGL2?u.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ye(B){return v!==B?(u.useProgram(B),v=B,!0):!1}const Ze={[hs]:32774,[t0]:32778,[n0]:32779};if(s)Ze[_h]=32775,Ze[xh]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(Ze[_h]=B.MIN_EXT,Ze[xh]=B.MAX_EXT)}const et={[i0]:0,[r0]:1,[s0]:768,[Dp]:770,[f0]:776,[u0]:774,[a0]:772,[o0]:769,[Ip]:771,[c0]:775,[l0]:773};function Dt(B,re,me,Te,Pe,at,bt,Bt){if(B===Ji){C===!0&&(xe(3042),C=!1);return}if(C===!1&&(ye(3042),C=!0),B!==e0){if(B!==D||Bt!==N){if((L!==hs||O!==hs)&&(u.blendEquation(32774),L=hs,O=hs),Bt)switch(B){case ms:u.blendFuncSeparate(1,771,1,771);break;case mh:u.blendFunc(1,1);break;case gh:u.blendFuncSeparate(0,769,0,1);break;case vh:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ms:u.blendFuncSeparate(770,771,1,771);break;case mh:u.blendFunc(770,1);break;case gh:u.blendFuncSeparate(0,769,0,1);break;case vh:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,k=null,H=null,w=null,D=B,N=Bt}return}Pe=Pe||re,at=at||me,bt=bt||Te,(re!==L||Pe!==O)&&(u.blendEquationSeparate(Ze[re],Ze[Pe]),L=re,O=Pe),(me!==b||Te!==k||at!==H||bt!==w)&&(u.blendFuncSeparate(et[me],et[Te],et[at],et[bt]),b=me,k=Te,H=at,w=bt),D=B,N=!1}function mn(B,re){B.side===Ki?xe(2884):ye(2884);let me=B.side===Dn;re&&(me=!me),jt(me),B.blending===ms&&B.transparent===!1?Dt(Ji):Dt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),m.setFunc(B.depthFunc),m.setTest(B.depthTest),m.setMask(B.depthWrite),c.setMask(B.colorWrite);const Te=B.stencilWrite;p.setTest(Te),Te&&(p.setMask(B.stencilWriteMask),p.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),p.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(32926):xe(32926)}function jt(B){W!==B&&(B?u.frontFace(2304):u.frontFace(2305),W=B)}function It(B){B!==Kg?(ye(2884),B!==ce&&(B===ph?u.cullFace(1029):B===Qg?u.cullFace(1028):u.cullFace(1032))):xe(2884),ce=B}function dt(B){B!==ae&&(fe&&u.lineWidth(B),ae=B)}function lt(B,re,me){B?(ye(32823),(Z!==re||j!==me)&&(u.polygonOffset(re,me),Z=re,j=me)):xe(32823)}function Kt(B){B?ye(3089):xe(3089)}function Ot(B){B===void 0&&(B=33984+ie-1),J!==B&&(u.activeTexture(B),J=B)}function R(B,re,me){me===void 0&&(J===null?me=33984+ie-1:me=J);let Te=q[me];Te===void 0&&(Te={type:void 0,texture:void 0},q[me]=Te),(Te.type!==B||Te.texture!==re)&&(J!==me&&(u.activeTexture(me),J=me),u.bindTexture(B,re||ve[B]),Te.type=B,Te.texture=re)}function E(){const B=q[J];B!==void 0&&B.type!==void 0&&(u.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{u.compressedTexImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{u.compressedTexImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{u.texSubImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{u.texSubImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{u.compressedTexSubImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{u.texStorage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{u.texStorage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{u.texImage2D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{u.texImage3D.apply(u,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(B){te.equals(B)===!1&&(u.scissor(B.x,B.y,B.z,B.w),te.copy(B))}function Ue(B){de.equals(B)===!1&&(u.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function tt(B,re){let me=x.get(re);me===void 0&&(me=new WeakMap,x.set(re,me));let Te=me.get(B);Te===void 0&&(Te=u.getUniformBlockIndex(re,B.name),me.set(B,Te))}function ut(B,re){const Te=x.get(re).get(B);_.get(re)!==Te&&(u.uniformBlockBinding(re,Te,B.__bindingPointIndex),_.set(re,Te))}function wt(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),s===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),g={},J=null,q={},M={},T=new WeakMap,y=[],v=null,C=!1,D=null,L=null,b=null,k=null,O=null,H=null,w=null,N=!1,W=null,ce=null,ae=null,Z=null,j=null,te.set(0,0,u.canvas.width,u.canvas.height),de.set(0,0,u.canvas.width,u.canvas.height),c.reset(),m.reset(),p.reset()}return{buffers:{color:c,depth:m,stencil:p},enable:ye,disable:xe,bindFramebuffer:Se,drawBuffers:Ie,useProgram:Ye,setBlending:Dt,setMaterial:mn,setFlipSided:jt,setCullFace:It,setLineWidth:dt,setPolygonOffset:lt,setScissorTest:Kt,activeTexture:Ot,bindTexture:R,unbindTexture:E,compressedTexImage2D:se,compressedTexImage3D:Me,texImage2D:Ne,texImage3D:He,updateUBOMapping:tt,uniformBlockBinding:ut,texStorage2D:ue,texStorage3D:Oe,texSubImage2D:we,texSubImage3D:Ce,compressedTexSubImage2D:ze,compressedTexSubImage3D:Ae,scissor:Ve,viewport:Ue,reset:wt}}function XS(u,e,n,s,o,l,d){const c=o.isWebGL2,m=o.maxTextures,p=o.maxCubemapSize,_=o.maxTextureSize,x=o.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let y;const v=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(R,E){return C?new OffscreenCanvas(R,E):Qa("canvas")}function L(R,E,se,Me){let we=1;if((R.width>Me||R.height>Me)&&(we=Me/Math.max(R.width,R.height)),we<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const Ce=E?Y0:Math.floor,ze=Ce(we*R.width),Ae=Ce(we*R.height);y===void 0&&(y=D(ze,Ae));const ue=se?D(ze,Ae):y;return ue.width=ze,ue.height=Ae,ue.getContext("2d").drawImage(R,0,0,ze,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ze+"x"+Ae+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return qh(R.width)&&qh(R.height)}function k(R){return c?!1:R.wrapS!==Qn||R.wrapT!==Qn||R.minFilter!==zt&&R.minFilter!==an}function O(R,E){return R.generateMipmaps&&E&&R.minFilter!==zt&&R.minFilter!==an}function H(R){u.generateMipmap(R)}function w(R,E,se,Me,we=!1){if(c===!1)return E;if(R!==null){if(u[R]!==void 0)return u[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ce=E;return E===6403&&(se===5126&&(Ce=33326),se===5131&&(Ce=33325),se===5121&&(Ce=33321)),E===33319&&(se===5126&&(Ce=33328),se===5131&&(Ce=33327),se===5121&&(Ce=33323)),E===6408&&(se===5126&&(Ce=34836),se===5131&&(Ce=34842),se===5121&&(Ce=Me===vt&&we===!1?35907:32856),se===32819&&(Ce=32854),se===32820&&(Ce=32855)),(Ce===33325||Ce===33326||Ce===33327||Ce===33328||Ce===34842||Ce===34836)&&e.get("EXT_color_buffer_float"),Ce}function N(R,E,se){return O(R,se)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function W(R){return R===zt||R===yh||R===Hu?9728:9729}function ce(R){const E=R.target;E.removeEventListener("dispose",ce),Z(E),E.isVideoTexture&&T.delete(E)}function ae(R){const E=R.target;E.removeEventListener("dispose",ae),ie(E)}function Z(R){const E=s.get(R);if(E.__webglInit===void 0)return;const se=R.source,Me=v.get(se);if(Me){const we=Me[E.__cacheKey];we.usedTimes--,we.usedTimes===0&&j(R),Object.keys(Me).length===0&&v.delete(se)}s.remove(R)}function j(R){const E=s.get(R);u.deleteTexture(E.__webglTexture);const se=R.source,Me=v.get(se);delete Me[E.__cacheKey],d.memory.textures--}function ie(R){const E=R.texture,se=s.get(R),Me=s.get(E);if(Me.__webglTexture!==void 0&&(u.deleteTexture(Me.__webglTexture),d.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let we=0;we<6;we++)u.deleteFramebuffer(se.__webglFramebuffer[we]),se.__webglDepthbuffer&&u.deleteRenderbuffer(se.__webglDepthbuffer[we]);else{if(u.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&u.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&u.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let we=0;we<se.__webglColorRenderbuffer.length;we++)se.__webglColorRenderbuffer[we]&&u.deleteRenderbuffer(se.__webglColorRenderbuffer[we]);se.__webglDepthRenderbuffer&&u.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let we=0,Ce=E.length;we<Ce;we++){const ze=s.get(E[we]);ze.__webglTexture&&(u.deleteTexture(ze.__webglTexture),d.memory.textures--),s.remove(E[we])}s.remove(E),s.remove(R)}let fe=0;function le(){fe=0}function V(){const R=fe;return R>=m&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+m),fe+=1,R}function J(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.encoding),E.join()}function q(R,E){const se=s.get(R);if(R.isVideoTexture&&Kt(R),R.isRenderTargetTexture===!1&&R.version>0&&se.__version!==R.version){const Me=R.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(se,R,E);return}}n.bindTexture(3553,se.__webglTexture,33984+E)}function z(R,E){const se=s.get(R);if(R.version>0&&se.__version!==R.version){xe(se,R,E);return}n.bindTexture(35866,se.__webglTexture,33984+E)}function I(R,E){const se=s.get(R);if(R.version>0&&se.__version!==R.version){xe(se,R,E);return}n.bindTexture(32879,se.__webglTexture,33984+E)}function te(R,E){const se=s.get(R);if(R.version>0&&se.__version!==R.version){Se(se,R,E);return}n.bindTexture(34067,se.__webglTexture,33984+E)}const de={[Tc]:10497,[Qn]:33071,[Cc]:33648},G={[zt]:9728,[yh]:9984,[Hu]:9986,[an]:9729,[C0]:9985,[_o]:9987};function ve(R,E,se){if(se?(u.texParameteri(R,10242,de[E.wrapS]),u.texParameteri(R,10243,de[E.wrapT]),(R===32879||R===35866)&&u.texParameteri(R,32882,de[E.wrapR]),u.texParameteri(R,10240,G[E.magFilter]),u.texParameteri(R,10241,G[E.minFilter])):(u.texParameteri(R,10242,33071),u.texParameteri(R,10243,33071),(R===32879||R===35866)&&u.texParameteri(R,32882,33071),(E.wrapS!==Qn||E.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(R,10240,W(E.magFilter)),u.texParameteri(R,10241,W(E.minFilter)),E.minFilter!==zt&&E.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Me=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===zt||E.minFilter!==Hu&&E.minFilter!==_o||E.type===wr&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===xo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||s.get(E).__currentAnisotropy)&&(u.texParameterf(R,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy)}}function ye(R,E){let se=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",ce));const Me=E.source;let we=v.get(Me);we===void 0&&(we={},v.set(Me,we));const Ce=J(E);if(Ce!==R.__cacheKey){we[Ce]===void 0&&(we[Ce]={texture:u.createTexture(),usedTimes:0},d.memory.textures++,se=!0),we[Ce].usedTimes++;const ze=we[R.__cacheKey];ze!==void 0&&(we[R.__cacheKey].usedTimes--,ze.usedTimes===0&&j(E)),R.__cacheKey=Ce,R.__webglTexture=we[Ce].texture}return se}function xe(R,E,se){let Me=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Me=35866),E.isData3DTexture&&(Me=32879);const we=ye(R,E),Ce=E.source;n.bindTexture(Me,R.__webglTexture,33984+se);const ze=s.get(Ce);if(Ce.version!==ze.__version||we===!0){n.activeTexture(33984+se),u.pixelStorei(37440,E.flipY),u.pixelStorei(37441,E.premultiplyAlpha),u.pixelStorei(3317,E.unpackAlignment),u.pixelStorei(37443,0);const Ae=k(E)&&b(E.image)===!1;let ue=L(E.image,Ae,!1,_);ue=Ot(E,ue);const Oe=b(ue)||c,Ne=l.convert(E.format,E.encoding);let He=l.convert(E.type),Ve=w(E.internalFormat,Ne,He,E.encoding,E.isVideoTexture);ve(Me,E,Oe);let Ue;const tt=E.mipmaps,ut=c&&E.isVideoTexture!==!0,wt=ze.__version===void 0||we===!0,B=N(E,ue,Oe);if(E.isDepthTexture)Ve=6402,c?E.type===wr?Ve=36012:E.type===Mr?Ve=33190:E.type===gs?Ve=35056:Ve=33189:E.type===wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Er&&Ve===6402&&E.type!==zp&&E.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Mr,He=l.convert(E.type)),E.format===ys&&Ve===6402&&(Ve=34041,E.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=gs,He=l.convert(E.type))),wt&&(ut?n.texStorage2D(3553,1,Ve,ue.width,ue.height):n.texImage2D(3553,0,Ve,ue.width,ue.height,0,Ne,He,null));else if(E.isDataTexture)if(tt.length>0&&Oe){ut&&wt&&n.texStorage2D(3553,B,Ve,tt[0].width,tt[0].height);for(let re=0,me=tt.length;re<me;re++)Ue=tt[re],ut?n.texSubImage2D(3553,re,0,0,Ue.width,Ue.height,Ne,He,Ue.data):n.texImage2D(3553,re,Ve,Ue.width,Ue.height,0,Ne,He,Ue.data);E.generateMipmaps=!1}else ut?(wt&&n.texStorage2D(3553,B,Ve,ue.width,ue.height),n.texSubImage2D(3553,0,0,0,ue.width,ue.height,Ne,He,ue.data)):n.texImage2D(3553,0,Ve,ue.width,ue.height,0,Ne,He,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ut&&wt&&n.texStorage3D(35866,B,Ve,tt[0].width,tt[0].height,ue.depth);for(let re=0,me=tt.length;re<me;re++)Ue=tt[re],E.format!==Jn?Ne!==null?ut?n.compressedTexSubImage3D(35866,re,0,0,0,Ue.width,Ue.height,ue.depth,Ne,Ue.data,0,0):n.compressedTexImage3D(35866,re,Ve,Ue.width,Ue.height,ue.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?n.texSubImage3D(35866,re,0,0,0,Ue.width,Ue.height,ue.depth,Ne,He,Ue.data):n.texImage3D(35866,re,Ve,Ue.width,Ue.height,ue.depth,0,Ne,He,Ue.data)}else{ut&&wt&&n.texStorage2D(3553,B,Ve,tt[0].width,tt[0].height);for(let re=0,me=tt.length;re<me;re++)Ue=tt[re],E.format!==Jn?Ne!==null?ut?n.compressedTexSubImage2D(3553,re,0,0,Ue.width,Ue.height,Ne,Ue.data):n.compressedTexImage2D(3553,re,Ve,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?n.texSubImage2D(3553,re,0,0,Ue.width,Ue.height,Ne,He,Ue.data):n.texImage2D(3553,re,Ve,Ue.width,Ue.height,0,Ne,He,Ue.data)}else if(E.isDataArrayTexture)ut?(wt&&n.texStorage3D(35866,B,Ve,ue.width,ue.height,ue.depth),n.texSubImage3D(35866,0,0,0,0,ue.width,ue.height,ue.depth,Ne,He,ue.data)):n.texImage3D(35866,0,Ve,ue.width,ue.height,ue.depth,0,Ne,He,ue.data);else if(E.isData3DTexture)ut?(wt&&n.texStorage3D(32879,B,Ve,ue.width,ue.height,ue.depth),n.texSubImage3D(32879,0,0,0,0,ue.width,ue.height,ue.depth,Ne,He,ue.data)):n.texImage3D(32879,0,Ve,ue.width,ue.height,ue.depth,0,Ne,He,ue.data);else if(E.isFramebufferTexture){if(wt)if(ut)n.texStorage2D(3553,B,Ve,ue.width,ue.height);else{let re=ue.width,me=ue.height;for(let Te=0;Te<B;Te++)n.texImage2D(3553,Te,Ve,re,me,0,Ne,He,null),re>>=1,me>>=1}}else if(tt.length>0&&Oe){ut&&wt&&n.texStorage2D(3553,B,Ve,tt[0].width,tt[0].height);for(let re=0,me=tt.length;re<me;re++)Ue=tt[re],ut?n.texSubImage2D(3553,re,0,0,Ne,He,Ue):n.texImage2D(3553,re,Ve,Ne,He,Ue);E.generateMipmaps=!1}else ut?(wt&&n.texStorage2D(3553,B,Ve,ue.width,ue.height),n.texSubImage2D(3553,0,0,0,Ne,He,ue)):n.texImage2D(3553,0,Ve,Ne,He,ue);O(E,Oe)&&H(Me),ze.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Se(R,E,se){if(E.image.length!==6)return;const Me=ye(R,E),we=E.source;n.bindTexture(34067,R.__webglTexture,33984+se);const Ce=s.get(we);if(we.version!==Ce.__version||Me===!0){n.activeTexture(33984+se),u.pixelStorei(37440,E.flipY),u.pixelStorei(37441,E.premultiplyAlpha),u.pixelStorei(3317,E.unpackAlignment),u.pixelStorei(37443,0);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let re=0;re<6;re++)!ze&&!Ae?ue[re]=L(E.image[re],!1,!0,p):ue[re]=Ae?E.image[re].image:E.image[re],ue[re]=Ot(E,ue[re]);const Oe=ue[0],Ne=b(Oe)||c,He=l.convert(E.format,E.encoding),Ve=l.convert(E.type),Ue=w(E.internalFormat,He,Ve,E.encoding),tt=c&&E.isVideoTexture!==!0,ut=Ce.__version===void 0||Me===!0;let wt=N(E,Oe,Ne);ve(34067,E,Ne);let B;if(ze){tt&&ut&&n.texStorage2D(34067,wt,Ue,Oe.width,Oe.height);for(let re=0;re<6;re++){B=ue[re].mipmaps;for(let me=0;me<B.length;me++){const Te=B[me];E.format!==Jn?He!==null?tt?n.compressedTexSubImage2D(34069+re,me,0,0,Te.width,Te.height,He,Te.data):n.compressedTexImage2D(34069+re,me,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?n.texSubImage2D(34069+re,me,0,0,Te.width,Te.height,He,Ve,Te.data):n.texImage2D(34069+re,me,Ue,Te.width,Te.height,0,He,Ve,Te.data)}}}else{B=E.mipmaps,tt&&ut&&(B.length>0&&wt++,n.texStorage2D(34067,wt,Ue,ue[0].width,ue[0].height));for(let re=0;re<6;re++)if(Ae){tt?n.texSubImage2D(34069+re,0,0,0,ue[re].width,ue[re].height,He,Ve,ue[re].data):n.texImage2D(34069+re,0,Ue,ue[re].width,ue[re].height,0,He,Ve,ue[re].data);for(let me=0;me<B.length;me++){const Pe=B[me].image[re].image;tt?n.texSubImage2D(34069+re,me+1,0,0,Pe.width,Pe.height,He,Ve,Pe.data):n.texImage2D(34069+re,me+1,Ue,Pe.width,Pe.height,0,He,Ve,Pe.data)}}else{tt?n.texSubImage2D(34069+re,0,0,0,He,Ve,ue[re]):n.texImage2D(34069+re,0,Ue,He,Ve,ue[re]);for(let me=0;me<B.length;me++){const Te=B[me];tt?n.texSubImage2D(34069+re,me+1,0,0,He,Ve,Te.image[re]):n.texImage2D(34069+re,me+1,Ue,He,Ve,Te.image[re])}}}O(E,Ne)&&H(34067),Ce.__version=we.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ie(R,E,se,Me,we){const Ce=l.convert(se.format,se.encoding),ze=l.convert(se.type),Ae=w(se.internalFormat,Ce,ze,se.encoding);s.get(E).__hasExternalTextures||(we===32879||we===35866?n.texImage3D(we,0,Ae,E.width,E.height,E.depth,0,Ce,ze,null):n.texImage2D(we,0,Ae,E.width,E.height,0,Ce,ze,null)),n.bindFramebuffer(36160,R),lt(E)?g.framebufferTexture2DMultisampleEXT(36160,Me,we,s.get(se).__webglTexture,0,dt(E)):(we===3553||we>=34069&&we<=34074)&&u.framebufferTexture2D(36160,Me,we,s.get(se).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ye(R,E,se){if(u.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let Me=33189;if(se||lt(E)){const we=E.depthTexture;we&&we.isDepthTexture&&(we.type===wr?Me=36012:we.type===Mr&&(Me=33190));const Ce=dt(E);lt(E)?g.renderbufferStorageMultisampleEXT(36161,Ce,Me,E.width,E.height):u.renderbufferStorageMultisample(36161,Ce,Me,E.width,E.height)}else u.renderbufferStorage(36161,Me,E.width,E.height);u.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const Me=dt(E);se&&lt(E)===!1?u.renderbufferStorageMultisample(36161,Me,35056,E.width,E.height):lt(E)?g.renderbufferStorageMultisampleEXT(36161,Me,35056,E.width,E.height):u.renderbufferStorage(36161,34041,E.width,E.height),u.framebufferRenderbuffer(36160,33306,36161,R)}else{const Me=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let we=0;we<Me.length;we++){const Ce=Me[we],ze=l.convert(Ce.format,Ce.encoding),Ae=l.convert(Ce.type),ue=w(Ce.internalFormat,ze,Ae,Ce.encoding),Oe=dt(E);se&&lt(E)===!1?u.renderbufferStorageMultisample(36161,Oe,ue,E.width,E.height):lt(E)?g.renderbufferStorageMultisampleEXT(36161,Oe,ue,E.width,E.height):u.renderbufferStorage(36161,ue,E.width,E.height)}}u.bindRenderbuffer(36161,null)}function Ze(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const Me=s.get(E.depthTexture).__webglTexture,we=dt(E);if(E.depthTexture.format===Er)lt(E)?g.framebufferTexture2DMultisampleEXT(36160,36096,3553,Me,0,we):u.framebufferTexture2D(36160,36096,3553,Me,0);else if(E.depthTexture.format===ys)lt(E)?g.framebufferTexture2DMultisampleEXT(36160,33306,3553,Me,0,we):u.framebufferTexture2D(36160,33306,3553,Me,0);else throw new Error("Unknown depthTexture format")}function et(R){const E=s.get(R),se=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Ze(E.__webglFramebuffer,R)}else if(se){E.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)n.bindFramebuffer(36160,E.__webglFramebuffer[Me]),E.__webglDepthbuffer[Me]=u.createRenderbuffer(),Ye(E.__webglDepthbuffer[Me],R,!1)}else n.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=u.createRenderbuffer(),Ye(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(36160,null)}function Dt(R,E,se){const Me=s.get(R);E!==void 0&&Ie(Me.__webglFramebuffer,R,R.texture,36064,3553),se!==void 0&&et(R)}function mn(R){const E=R.texture,se=s.get(R),Me=s.get(E);R.addEventListener("dispose",ae),R.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=u.createTexture()),Me.__version=E.version,d.memory.textures++);const we=R.isWebGLCubeRenderTarget===!0,Ce=R.isWebGLMultipleRenderTargets===!0,ze=b(R)||c;if(we){se.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)se.__webglFramebuffer[Ae]=u.createFramebuffer()}else{if(se.__webglFramebuffer=u.createFramebuffer(),Ce)if(o.drawBuffers){const Ae=R.texture;for(let ue=0,Oe=Ae.length;ue<Oe;ue++){const Ne=s.get(Ae[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=u.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&lt(R)===!1){const Ae=Ce?E:[E];se.__webglMultisampledFramebuffer=u.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,se.__webglMultisampledFramebuffer);for(let ue=0;ue<Ae.length;ue++){const Oe=Ae[ue];se.__webglColorRenderbuffer[ue]=u.createRenderbuffer(),u.bindRenderbuffer(36161,se.__webglColorRenderbuffer[ue]);const Ne=l.convert(Oe.format,Oe.encoding),He=l.convert(Oe.type),Ve=w(Oe.internalFormat,Ne,He,Oe.encoding,R.isXRRenderTarget===!0),Ue=dt(R);u.renderbufferStorageMultisample(36161,Ue,Ve,R.width,R.height),u.framebufferRenderbuffer(36160,36064+ue,36161,se.__webglColorRenderbuffer[ue])}u.bindRenderbuffer(36161,null),R.depthBuffer&&(se.__webglDepthRenderbuffer=u.createRenderbuffer(),Ye(se.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(36160,null)}}if(we){n.bindTexture(34067,Me.__webglTexture),ve(34067,E,ze);for(let Ae=0;Ae<6;Ae++)Ie(se.__webglFramebuffer[Ae],R,E,36064,34069+Ae);O(E,ze)&&H(34067),n.unbindTexture()}else if(Ce){const Ae=R.texture;for(let ue=0,Oe=Ae.length;ue<Oe;ue++){const Ne=Ae[ue],He=s.get(Ne);n.bindTexture(3553,He.__webglTexture),ve(3553,Ne,ze),Ie(se.__webglFramebuffer,R,Ne,36064+ue,3553),O(Ne,ze)&&H(3553)}n.unbindTexture()}else{let Ae=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?Ae=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ae,Me.__webglTexture),ve(Ae,E,ze),Ie(se.__webglFramebuffer,R,E,36064,Ae),O(E,ze)&&H(Ae),n.unbindTexture()}R.depthBuffer&&et(R)}function jt(R){const E=b(R)||c,se=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Me=0,we=se.length;Me<we;Me++){const Ce=se[Me];if(O(Ce,E)){const ze=R.isWebGLCubeRenderTarget?34067:3553,Ae=s.get(Ce).__webglTexture;n.bindTexture(ze,Ae),H(ze),n.unbindTexture()}}}function It(R){if(c&&R.samples>0&&lt(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],se=R.width,Me=R.height;let we=16384;const Ce=[],ze=R.stencilBuffer?33306:36096,Ae=s.get(R),ue=R.isWebGLMultipleRenderTargets===!0;if(ue)for(let Oe=0;Oe<E.length;Oe++)n.bindFramebuffer(36160,Ae.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Oe,36161,null),n.bindFramebuffer(36160,Ae.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Oe,3553,null,0);n.bindFramebuffer(36008,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,Ae.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){Ce.push(36064+Oe),R.depthBuffer&&Ce.push(ze);const Ne=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(Ne===!1&&(R.depthBuffer&&(we|=256),R.stencilBuffer&&(we|=1024)),ue&&u.framebufferRenderbuffer(36008,36064,36161,Ae.__webglColorRenderbuffer[Oe]),Ne===!0&&(u.invalidateFramebuffer(36008,[ze]),u.invalidateFramebuffer(36009,[ze])),ue){const He=s.get(E[Oe]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,He,0)}u.blitFramebuffer(0,0,se,Me,0,0,se,Me,we,9728),M&&u.invalidateFramebuffer(36008,Ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),ue)for(let Oe=0;Oe<E.length;Oe++){n.bindFramebuffer(36160,Ae.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Oe,36161,Ae.__webglColorRenderbuffer[Oe]);const Ne=s.get(E[Oe]).__webglTexture;n.bindFramebuffer(36160,Ae.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Oe,3553,Ne,0)}n.bindFramebuffer(36009,Ae.__webglMultisampledFramebuffer)}}function dt(R){return Math.min(x,R.samples)}function lt(R){const E=s.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Kt(R){const E=d.render.frame;T.get(R)!==E&&(T.set(R,E),R.update())}function Ot(R,E){const se=R.encoding,Me=R.format,we=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===bc||se!==Ar&&(se===vt?c===!1?e.has("EXT_sRGB")===!0&&Me===Jn?(R.format=bc,R.minFilter=an,R.generateMipmaps=!1):E=Op.sRGBToLinear(E):(Me!==Jn||we!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",se)),E}this.allocateTextureUnit=V,this.resetTextureUnits=le,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=I,this.setTextureCube=te,this.rebindTextures=Dt,this.setupRenderTarget=mn,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=lt}function jS(u,e,n){const s=n.isWebGL2;function o(l,d=null){let c;if(l===br)return 5121;if(l===R0)return 32819;if(l===P0)return 32820;if(l===b0)return 5120;if(l===A0)return 5122;if(l===zp)return 5123;if(l===L0)return 5124;if(l===Mr)return 5125;if(l===wr)return 5126;if(l===xo)return s?5131:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===D0)return 6406;if(l===Jn)return 6408;if(l===I0)return 6409;if(l===N0)return 6410;if(l===Er)return 6402;if(l===ys)return 34041;if(l===bc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===k0)return 6403;if(l===z0)return 36244;if(l===F0)return 33319;if(l===U0)return 33320;if(l===O0)return 36249;if(l===Xu||l===ju||l===qu||l===Yu)if(d===vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===ju)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===qu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Sh||l===Mh||l===wh||l===Eh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===B0)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Th||l===Ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Th)return d===vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Ch)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===bh||l===Ah||l===Lh||l===Rh||l===Ph||l===Dh||l===Ih||l===Nh||l===kh||l===zh||l===Fh||l===Uh||l===Oh||l===Bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===bh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Ah)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Lh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Rh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Ph)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Dh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Ih)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Nh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===kh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===zh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Fh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Uh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Oh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Bh)return d===vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===$u)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===$u)return d===vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===V0||l===Vh||l===Gh||l===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===$u)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===gs?s?34042:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):u[l]!==void 0?u[l]:null}return{convert:o}}class qS extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YS={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let o=null,l=null,d=null;const c=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,s),C=this._getHandJoint(p,y);v!==null&&(C.matrix.fromArray(v.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.jointRadius=v.radius),C.visible=v!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,T=.005;p.inputState.pinching&&g>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));c!==null&&(o=n.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(YS)))}return c!==null&&(c.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Za;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class $S extends pn{constructor(e,n,s,o,l,d,c,m,p,_){if(_=_!==void 0?_:Er,_!==Er&&_!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Er&&(s=Mr),s===void 0&&_===ys&&(s=gs),super(null,o,l,d,c,m,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:zt,this.minFilter=m!==void 0?m:zt,this.flipY=!1,this.generateMipmaps=!1}}class ZS extends Ms{constructor(e,n){super();const s=this;let o=null,l=1,d=null,c="local-floor",m=1,p=null,_=null,x=null,g=null,M=null,T=null;const y=n.getContextAttributes();let v=null,C=null;const D=[],L=[],b=new Set,k=new Map,O=new Kn;O.layers.enable(1),O.viewport=new $t;const H=new Kn;H.layers.enable(2),H.viewport=new $t;const w=[O,H],N=new qS;N.layers.enable(1),N.layers.enable(2);let W=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let te=D[I];return te===void 0&&(te=new Sc,D[I]=te),te.getTargetRaySpace()},this.getControllerGrip=function(I){let te=D[I];return te===void 0&&(te=new Sc,D[I]=te),te.getGripSpace()},this.getHand=function(I){let te=D[I];return te===void 0&&(te=new Sc,D[I]=te),te.getHandSpace()};function ae(I){const te=L.indexOf(I.inputSource);if(te===-1)return;const de=D[te];de!==void 0&&de.dispatchEvent({type:I.type,data:I.inputSource})}function Z(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",j);for(let I=0;I<D.length;I++){const te=L[I];te!==null&&(L[I]=null,D[I].disconnect(te))}W=null,ce=null,e.setRenderTarget(v),M=null,g=null,x=null,o=null,C=null,z.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){l=I,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){c=I,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(I){p=I},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(I){if(o=I,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await n.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:o.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,te),o.updateRenderState({baseLayer:M}),C=new Lr(M.framebufferWidth,M.framebufferHeight,{format:Jn,type:br,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let te=null,de=null,G=null;y.depth&&(G=y.stencil?35056:33190,te=y.stencil?ys:Er,de=y.stencil?gs:Mr);const ve={colorFormat:32856,depthFormat:G,scaleFactor:l};x=new XRWebGLBinding(o,n),g=x.createProjectionLayer(ve),o.updateRenderState({layers:[g]}),C=new Lr(g.textureWidth,g.textureHeight,{format:Jn,type:br,depthTexture:new $S(g.textureWidth,g.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const ye=e.properties.get(C);ye.__ignoreDepthValues=g.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await o.requestReferenceSpace(c),z.setContext(o),z.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function j(I){for(let te=0;te<I.removed.length;te++){const de=I.removed[te],G=L.indexOf(de);G>=0&&(L[G]=null,D[G].disconnect(de))}for(let te=0;te<I.added.length;te++){const de=I.added[te];let G=L.indexOf(de);if(G===-1){for(let ye=0;ye<D.length;ye++)if(ye>=L.length){L.push(de),G=ye;break}else if(L[ye]===null){L[ye]=de,G=ye;break}if(G===-1)break}const ve=D[G];ve&&ve.connect(de)}}const ie=new ee,fe=new ee;function le(I,te,de){ie.setFromMatrixPosition(te.matrixWorld),fe.setFromMatrixPosition(de.matrixWorld);const G=ie.distanceTo(fe),ve=te.projectionMatrix.elements,ye=de.projectionMatrix.elements,xe=ve[14]/(ve[10]-1),Se=ve[14]/(ve[10]+1),Ie=(ve[9]+1)/ve[5],Ye=(ve[9]-1)/ve[5],Ze=(ve[8]-1)/ve[0],et=(ye[8]+1)/ye[0],Dt=xe*Ze,mn=xe*et,jt=G/(-Ze+et),It=jt*-Ze;te.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(It),I.translateZ(jt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const dt=xe+jt,lt=Se+jt,Kt=Dt-It,Ot=mn+(G-It),R=Ie*Se/lt*dt,E=Ye*Se/lt*dt;I.projectionMatrix.makePerspective(Kt,Ot,R,E,dt,lt)}function V(I,te){te===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(te.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(o===null)return;N.near=H.near=O.near=I.near,N.far=H.far=O.far=I.far,(W!==N.near||ce!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,ce=N.far);const te=I.parent,de=N.cameras;V(N,te);for(let ve=0;ve<de.length;ve++)V(de[ve],te);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),I.matrix.copy(N.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const G=I.children;for(let ve=0,ye=G.length;ve<ye;ve++)G[ve].updateMatrixWorld(!0);de.length===2?le(N,O,H):N.projectionMatrix.copy(O.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(I){m=I,g!==null&&(g.fixedFoveation=I),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=I)},this.getPlanes=function(){return b};let J=null;function q(I,te){if(_=te.getViewerPose(p||d),T=te,_!==null){const de=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let G=!1;de.length!==N.cameras.length&&(N.cameras.length=0,G=!0);for(let ve=0;ve<de.length;ve++){const ye=de[ve];let xe=null;if(M!==null)xe=M.getViewport(ye);else{const Ie=x.getViewSubImage(g,ye);xe=Ie.viewport,ve===0&&(e.setRenderTargetTextures(C,Ie.colorTexture,g.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(C))}let Se=w[ve];Se===void 0&&(Se=new Kn,Se.layers.enable(ve),Se.viewport=new $t,w[ve]=Se),Se.matrix.fromArray(ye.transform.matrix),Se.projectionMatrix.fromArray(ye.projectionMatrix),Se.viewport.set(xe.x,xe.y,xe.width,xe.height),ve===0&&N.matrix.copy(Se.matrix),G===!0&&N.cameras.push(Se)}}for(let de=0;de<D.length;de++){const G=L[de],ve=D[de];G!==null&&ve!==void 0&&ve.update(G,te,p||d)}if(J&&J(I,te),te.detectedPlanes){s.dispatchEvent({type:"planesdetected",data:te.detectedPlanes});let de=null;for(const G of b)te.detectedPlanes.has(G)||(de===null&&(de=[]),de.push(G));if(de!==null)for(const G of de)b.delete(G),k.delete(G),s.dispatchEvent({type:"planeremoved",data:G});for(const G of te.detectedPlanes)if(!b.has(G))b.add(G),k.set(G,te.lastChangedTime),s.dispatchEvent({type:"planeadded",data:G});else{const ve=k.get(G);G.lastChangedTime>ve&&(k.set(G,G.lastChangedTime),s.dispatchEvent({type:"planechanged",data:G}))}}T=null}const z=new Kp;z.setAnimationLoop(q),this.setAnimationLoop=function(I){J=I},this.dispose=function(){}}}function KS(u,e){function n(y,v){v.color.getRGB(y.fogColor.value,qp(u)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function s(y,v,C,D,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(y,v):v.isMeshToonMaterial?(o(y,v),_(y,v)):v.isMeshPhongMaterial?(o(y,v),p(y,v)):v.isMeshStandardMaterial?(o(y,v),x(y,v),v.isMeshPhysicalMaterial&&g(y,v,L)):v.isMeshMatcapMaterial?(o(y,v),M(y,v)):v.isMeshDepthMaterial?o(y,v):v.isMeshDistanceMaterial?(o(y,v),T(y,v)):v.isMeshNormalMaterial?o(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?c(y,v,C,D):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map),v.alphaMap&&(y.alphaMap.value=v.alphaMap),v.bumpMap&&(y.bumpMap.value=v.bumpMap,y.bumpScale.value=v.bumpScale,v.side===Dn&&(y.bumpScale.value*=-1)),v.displacementMap&&(y.displacementMap.value=v.displacementMap,y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap),v.normalMap&&(y.normalMap.value=v.normalMap,y.normalScale.value.copy(v.normalScale),v.side===Dn&&y.normalScale.value.negate()),v.specularMap&&(y.specularMap.value=v.specularMap),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const C=e.get(v).envMap;if(C&&(y.envMap.value=C,y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const b=u.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*b}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity);let D;v.map?D=v.map:v.specularMap?D=v.specularMap:v.displacementMap?D=v.displacementMap:v.normalMap?D=v.normalMap:v.bumpMap?D=v.bumpMap:v.roughnessMap?D=v.roughnessMap:v.metalnessMap?D=v.metalnessMap:v.alphaMap?D=v.alphaMap:v.emissiveMap?D=v.emissiveMap:v.clearcoatMap?D=v.clearcoatMap:v.clearcoatNormalMap?D=v.clearcoatNormalMap:v.clearcoatRoughnessMap?D=v.clearcoatRoughnessMap:v.iridescenceMap?D=v.iridescenceMap:v.iridescenceThicknessMap?D=v.iridescenceThicknessMap:v.specularIntensityMap?D=v.specularIntensityMap:v.specularColorMap?D=v.specularColorMap:v.transmissionMap?D=v.transmissionMap:v.thicknessMap?D=v.thicknessMap:v.sheenColorMap?D=v.sheenColorMap:v.sheenRoughnessMap&&(D=v.sheenRoughnessMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),y.uvTransform.value.copy(D.matrix));let L;v.aoMap?L=v.aoMap:v.lightMap&&(L=v.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),y.uv2Transform.value.copy(L.matrix))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function c(y,v,C,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*C,y.scale.value=D*.5,v.map&&(y.map.value=v.map),v.alphaMap&&(y.alphaMap.value=v.alphaMap),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let L;v.map?L=v.map:v.alphaMap&&(L=v.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),y.uvTransform.value.copy(L.matrix))}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map),v.alphaMap&&(y.alphaMap.value=v.alphaMap),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);let C;v.map?C=v.map:v.alphaMap&&(C=v.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),y.uvTransform.value.copy(C.matrix))}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.roughness.value=v.roughness,y.metalness.value=v.metalness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function g(y,v,C){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),y.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===Dn&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap)}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){y.referencePosition.value.copy(v.referencePosition),y.nearDistance.value=v.nearDistance,y.farDistance.value=v.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function QS(u,e,n,s){let o={},l={},d=[];const c=n.isWebGL2?u.getParameter(35375):0;function m(D,L){const b=L.program;s.uniformBlockBinding(D,b)}function p(D,L){let b=o[D.id];b===void 0&&(T(D),b=_(D),o[D.id]=b,D.addEventListener("dispose",v));const k=L.program;s.updateUBOMapping(D,k);const O=e.render.frame;l[D.id]!==O&&(g(D),l[D.id]=O)}function _(D){const L=x();D.__bindingPointIndex=L;const b=u.createBuffer(),k=D.__size,O=D.usage;return u.bindBuffer(35345,b),u.bufferData(35345,k,O),u.bindBuffer(35345,null),u.bindBufferBase(35345,L,b),b}function x(){for(let D=0;D<c;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const L=o[D.id],b=D.uniforms,k=D.__cache;u.bindBuffer(35345,L);for(let O=0,H=b.length;O<H;O++){const w=b[O];if(M(w,O,k)===!0){const N=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let ce=0;for(let ae=0;ae<W.length;ae++){const Z=W[ae],j=y(Z);typeof Z=="number"?(w.__data[0]=Z,u.bufferSubData(35345,N+ce,w.__data)):Z.isMatrix3?(w.__data[0]=Z.elements[0],w.__data[1]=Z.elements[1],w.__data[2]=Z.elements[2],w.__data[3]=Z.elements[0],w.__data[4]=Z.elements[3],w.__data[5]=Z.elements[4],w.__data[6]=Z.elements[5],w.__data[7]=Z.elements[0],w.__data[8]=Z.elements[6],w.__data[9]=Z.elements[7],w.__data[10]=Z.elements[8],w.__data[11]=Z.elements[0]):(Z.toArray(w.__data,ce),ce+=j.storage/Float32Array.BYTES_PER_ELEMENT)}u.bufferSubData(35345,N,w.__data)}}u.bindBuffer(35345,null)}function M(D,L,b){const k=D.value;if(b[L]===void 0){if(typeof k=="number")b[L]=k;else{const O=Array.isArray(k)?k:[k],H=[];for(let w=0;w<O.length;w++)H.push(O[w].clone());b[L]=H}return!0}else if(typeof k=="number"){if(b[L]!==k)return b[L]=k,!0}else{const O=Array.isArray(b[L])?b[L]:[b[L]],H=Array.isArray(k)?k:[k];for(let w=0;w<O.length;w++){const N=O[w];if(N.equals(H[w])===!1)return N.copy(H[w]),!0}}return!1}function T(D){const L=D.uniforms;let b=0;const k=16;let O=0;for(let H=0,w=L.length;H<w;H++){const N=L[H],W={boundary:0,storage:0},ce=Array.isArray(N.value)?N.value:[N.value];for(let ae=0,Z=ce.length;ae<Z;ae++){const j=ce[ae],ie=y(j);W.boundary+=ie.boundary,W.storage+=ie.storage}if(N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,H>0){O=b%k;const ae=k-O;O!==0&&ae-W.boundary<0&&(b+=k-O,N.__offset=b)}b+=W.storage}return O=b%k,O>0&&(b+=k-O),D.__size=b,D.__cache={},this}function y(D){const L={boundary:0,storage:0};return typeof D=="number"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function v(D){const L=D.target;L.removeEventListener("dispose",v);const b=d.indexOf(L.__bindingPointIndex);d.splice(b,1),u.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function C(){for(const D in o)u.deleteBuffer(o[D]);d=[],o={},l={}}return{bind:m,update:p,dispose:C}}function JS(){const u=Qa("canvas");return u.style.display="block",u}function il(u={}){this.isWebGLRenderer=!0;const e=u.canvas!==void 0?u.canvas:JS(),n=u.context!==void 0?u.context:null,s=u.depth!==void 0?u.depth:!0,o=u.stencil!==void 0?u.stencil:!0,l=u.antialias!==void 0?u.antialias:!1,d=u.premultipliedAlpha!==void 0?u.premultipliedAlpha:!0,c=u.preserveDrawingBuffer!==void 0?u.preserveDrawingBuffer:!1,m=u.powerPreference!==void 0?u.powerPreference:"default",p=u.failIfMajorPerformanceCaveat!==void 0?u.failIfMajorPerformanceCaveat:!1;let _;n!==null?_=n.getContextAttributes().alpha:_=u.alpha!==void 0?u.alpha:!1;let x=null,g=null;const M=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ar,this.useLegacyLights=!0,this.toneMapping=Ti,this.toneMappingExposure=1;const y=this;let v=!1,C=0,D=0,L=null,b=-1,k=null;const O=new $t,H=new $t;let w=null,N=e.width,W=e.height,ce=1,ae=null,Z=null;const j=new $t(0,0,N,W),ie=new $t(0,0,N,W);let fe=!1;const le=new Zp;let V=!1,J=!1,q=null;const z=new Zt,I=new ee,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return L===null?ce:1}let G=n;function ve(A,K){for(let ne=0;ne<A.length;ne++){const Y=A[ne],oe=e.getContext(Y,K);if(oe!==null)return oe}return null}try{const A={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",Ve,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),G===null){const K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),G=ve(K,A),G===null)throw ve(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,xe,Se,Ie,Ye,Ze,et,Dt,mn,jt,It,dt,lt,Kt,Ot,R,E,se,Me,we,Ce,ze,Ae,ue;function Oe(){ye=new cy(G),xe=new ry(G,ye,u),ye.init(xe),ze=new jS(G,ye,xe),Se=new HS(G,ye,xe),Ie=new hy,Ye=new RS,Ze=new XS(G,ye,Se,Ye,xe,ze,Ie),et=new oy(y),Dt=new uy(y),mn=new Mv(G,xe),Ae=new ny(G,ye,mn,xe),jt=new fy(G,mn,Ie,Ae),It=new vy(G,jt,mn,Ie),Me=new gy(G,xe,Ze),R=new sy(Ye),dt=new LS(y,et,Dt,ye,xe,Ae,R),lt=new KS(y,Ye),Kt=new DS,Ot=new US(ye,xe),se=new ty(y,et,Dt,Se,It,_,d),E=new WS(y,It,xe),ue=new QS(G,Ie,xe,Se),we=new iy(G,ye,Ie,xe),Ce=new dy(G,ye,Ie,xe),Ie.programs=dt.programs,y.capabilities=xe,y.extensions=ye,y.properties=Ye,y.renderLists=Kt,y.shadowMap=E,y.state=Se,y.info=Ie}Oe();const Ne=new ZS(y,G);this.xr=Ne,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(N,W,!1))},this.getSize=function(A){return A.set(N,W)},this.setSize=function(A,K,ne=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,W=K,e.width=Math.floor(A*ce),e.height=Math.floor(K*ce),ne===!0&&(e.style.width=A+"px",e.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(N*ce,W*ce).floor()},this.setDrawingBufferSize=function(A,K,ne){N=A,W=K,ce=ne,e.width=Math.floor(A*ne),e.height=Math.floor(K*ne),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,K,ne,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,K,ne,Y),Se.viewport(O.copy(j).multiplyScalar(ce).floor())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,K,ne,Y){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,K,ne,Y),Se.scissor(H.copy(ie).multiplyScalar(ce).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){Se.setScissorTest(fe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(A=!0,K=!0,ne=!0){let Y=0;A&&(Y|=16384),K&&(Y|=256),ne&&(Y|=1024),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Ve,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),Kt.dispose(),Ot.dispose(),Ye.dispose(),et.dispose(),Dt.dispose(),It.dispose(),Ae.dispose(),ue.dispose(),dt.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",me),Ne.removeEventListener("sessionend",Te),q&&(q.dispose(),q=null),Pe.stop()};function He(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=Ie.autoReset,K=E.enabled,ne=E.autoUpdate,Y=E.needsUpdate,oe=E.type;Oe(),Ie.autoReset=A,E.enabled=K,E.autoUpdate=ne,E.needsUpdate=Y,E.type=oe}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const K=A.target;K.removeEventListener("dispose",tt),ut(K)}function ut(A){wt(A),Ye.remove(A)}function wt(A){const K=Ye.get(A).programs;K!==void 0&&(K.forEach(function(ne){dt.releaseProgram(ne)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ne,Y,oe,Be){K===null&&(K=te);const qe=oe.isMesh&&oe.matrixWorld.determinant()<0,je=Es(A,K,ne,Y,oe);Se.setMaterial(Y,qe);let $e=ne.index,it=1;Y.wireframe===!0&&($e=jt.getWireframeAttribute(ne),it=2);const nt=ne.drawRange,Je=ne.attributes.position;let yt=nt.start*it,Jt=(nt.start+nt.count)*it;Be!==null&&(yt=Math.max(yt,Be.start*it),Jt=Math.min(Jt,(Be.start+Be.count)*it)),$e!==null?(yt=Math.max(yt,0),Jt=Math.min(Jt,$e.count)):Je!=null&&(yt=Math.max(yt,0),Jt=Math.min(Jt,Je.count));const Nn=Jt-yt;if(Nn<0||Nn===1/0)return;Ae.setup(oe,Y,je,ne,$e);let ci,Et=we;if($e!==null&&(ci=mn.get($e),Et=Ce,Et.setIndex(ci)),oe.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*de()),Et.setMode(1)):Et.setMode(4);else if(oe.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),Se.setLineWidth(Fe*de()),oe.isLineSegments?Et.setMode(1):oe.isLineLoop?Et.setMode(2):Et.setMode(3)}else oe.isPoints?Et.setMode(0):oe.isSprite&&Et.setMode(4);if(oe.isInstancedMesh)Et.renderInstances(yt,Nn,oe.count);else if(ne.isInstancedBufferGeometry){const Fe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ts=Math.min(ne.instanceCount,Fe);Et.renderInstances(yt,Nn,Ts)}else Et.render(yt,Nn)},this.compile=function(A,K){function ne(Y,oe,Be){Y.transparent===!0&&Y.side===Ki&&Y.forceSinglePass===!1?(Y.side=Dn,Y.needsUpdate=!0,ln(Y,oe,Be),Y.side=er,Y.needsUpdate=!0,ln(Y,oe,Be),Y.side=Ki):ln(Y,oe,Be)}g=Ot.get(A),g.init(),T.push(g),A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(y.useLegacyLights),A.traverse(function(Y){const oe=Y.material;if(oe)if(Array.isArray(oe))for(let Be=0;Be<oe.length;Be++){const qe=oe[Be];ne(qe,A,Y)}else ne(oe,A,Y)}),T.pop(),g=null};let B=null;function re(A){B&&B(A)}function me(){Pe.stop()}function Te(){Pe.start()}const Pe=new Kp;Pe.setAnimationLoop(re),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(A){B=A,Ne.setAnimationLoop(A),A===null?Pe.stop():Pe.start()},Ne.addEventListener("sessionstart",me),Ne.addEventListener("sessionend",Te),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(K),K=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,K,L),g=Ot.get(A,T.length),g.init(),T.push(g),z.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),le.setFromProjectionMatrix(z),J=this.localClippingEnabled,V=R.init(this.clippingPlanes,J),x=Kt.get(A,M.length),x.init(),M.push(x),at(A,K,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ae,Z),V===!0&&R.beginShadows();const ne=g.state.shadowsArray;if(E.render(ne,A,K),V===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(x,A),g.setupLights(y.useLegacyLights),K.isArrayCamera){const Y=K.cameras;for(let oe=0,Be=Y.length;oe<Be;oe++){const qe=Y[oe];bt(x,A,qe,qe.viewport)}}else bt(x,A,K);L!==null&&(Ze.updateMultisampleRenderTarget(L),Ze.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(y,A,K),Ae.resetDefaultState(),b=-1,k=null,T.pop(),T.length>0?g=T[T.length-1]:g=null,M.pop(),M.length>0?x=M[M.length-1]:x=null};function at(A,K,ne,Y){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){Y&&I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(z);const qe=It.update(A),je=A.material;je.visible&&x.push(A,qe,je,ne,I.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ie.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ie.render.frame),!A.frustumCulled||le.intersectsObject(A))){Y&&I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(z);const qe=It.update(A),je=A.material;if(Array.isArray(je)){const $e=qe.groups;for(let it=0,nt=$e.length;it<nt;it++){const Je=$e[it],yt=je[Je.materialIndex];yt&&yt.visible&&x.push(A,qe,yt,ne,I.z,Je)}}else je.visible&&x.push(A,qe,je,ne,I.z,null)}}const Be=A.children;for(let qe=0,je=Be.length;qe<je;qe++)at(Be[qe],K,ne,Y)}function bt(A,K,ne,Y){const oe=A.opaque,Be=A.transmissive,qe=A.transparent;g.setupLightsView(ne),V===!0&&R.setGlobalState(y.clippingPlanes,ne),Be.length>0&&Bt(oe,K,ne),Y&&Se.viewport(O.copy(Y)),oe.length>0&&Mn(oe,K,ne),Be.length>0&&Mn(Be,K,ne),qe.length>0&&Mn(qe,K,ne),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Bt(A,K,ne){const Y=xe.isWebGL2;q===null&&(q=new Lr(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?xo:br,minFilter:_o,samples:Y&&l===!0?4:0}));const oe=y.getRenderTarget();y.setRenderTarget(q),y.clear();const Be=y.toneMapping;y.toneMapping=Ti,Mn(A,K,ne),y.toneMapping=Be,Ze.updateMultisampleRenderTarget(q),Ze.updateRenderTargetMipmap(q),y.setRenderTarget(oe)}function Mn(A,K,ne){const Y=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,Be=A.length;oe<Be;oe++){const qe=A[oe],je=qe.object,$e=qe.geometry,it=Y===null?qe.material:Y,nt=qe.group;je.layers.test(ne.layers)&&ht(je,K,ne,$e,it,nt)}}function ht(A,K,ne,Y,oe,Be){A.onBeforeRender(y,K,ne,Y,oe,Be),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(y,K,ne,Y,A,Be),oe.transparent===!0&&oe.side===Ki&&oe.forceSinglePass===!1?(oe.side=Dn,oe.needsUpdate=!0,y.renderBufferDirect(ne,K,Y,oe,A,Be),oe.side=er,oe.needsUpdate=!0,y.renderBufferDirect(ne,K,Y,oe,A,Be),oe.side=Ki):y.renderBufferDirect(ne,K,Y,oe,A,Be),A.onAfterRender(y,K,ne,Y,oe,Be)}function ln(A,K,ne){K.isScene!==!0&&(K=te);const Y=Ye.get(A),oe=g.state.lights,Be=g.state.shadowsArray,qe=oe.state.version,je=dt.getParameters(A,oe.state,Be,K,ne),$e=dt.getProgramCacheKey(je);let it=Y.programs;Y.environment=A.isMeshStandardMaterial?K.environment:null,Y.fog=K.fog,Y.envMap=(A.isMeshStandardMaterial?Dt:et).get(A.envMap||Y.environment),it===void 0&&(A.addEventListener("dispose",tt),it=new Map,Y.programs=it);let nt=it.get($e);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===qe)return Qt(A,je),nt}else je.uniforms=dt.getUniforms(A),A.onBuild(ne,je,y),A.onBeforeCompile(je,y),nt=dt.acquireProgram(je,$e),it.set($e,nt),Y.uniforms=je.uniforms;const Je=Y.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=R.uniform),Qt(A,je),Y.needsLights=rl(A),Y.lightsStateVersion=qe,Y.needsLights&&(Je.ambientLightColor.value=oe.state.ambient,Je.lightProbe.value=oe.state.probe,Je.directionalLights.value=oe.state.directional,Je.directionalLightShadows.value=oe.state.directionalShadow,Je.spotLights.value=oe.state.spot,Je.spotLightShadows.value=oe.state.spotShadow,Je.rectAreaLights.value=oe.state.rectArea,Je.ltc_1.value=oe.state.rectAreaLTC1,Je.ltc_2.value=oe.state.rectAreaLTC2,Je.pointLights.value=oe.state.point,Je.pointLightShadows.value=oe.state.pointShadow,Je.hemisphereLights.value=oe.state.hemi,Je.directionalShadowMap.value=oe.state.directionalShadowMap,Je.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Je.spotShadowMap.value=oe.state.spotShadowMap,Je.spotLightMatrix.value=oe.state.spotLightMatrix,Je.spotLightMap.value=oe.state.spotLightMap,Je.pointShadowMap.value=oe.state.pointShadowMap,Je.pointShadowMatrix.value=oe.state.pointShadowMatrix);const yt=nt.getUniforms(),Jt=Ka.seqWithValue(yt.seq,Je);return Y.currentProgram=nt,Y.uniformsList=Jt,nt}function Qt(A,K){const ne=Ye.get(A);ne.outputEncoding=K.outputEncoding,ne.instancing=K.instancing,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}function Es(A,K,ne,Y,oe){K.isScene!==!0&&(K=te),Ze.resetTextureUnits();const Be=K.fog,qe=Y.isMeshStandardMaterial?K.environment:null,je=L===null?y.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:Ar,$e=(Y.isMeshStandardMaterial?Dt:et).get(Y.envMap||qe),it=Y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!Y.normalMap&&!!ne.attributes.tangent,Je=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,Jt=!!ne.morphAttributes.color,Nn=Y.toneMapped?y.toneMapping:Ti,ci=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Et=ci!==void 0?ci.length:0,Fe=Ye.get(Y),Ts=g.state.lights;if(V===!0&&(J===!0||A!==k)){const pt=A===k&&Y.id===b;R.setState(Y,A,pt)}let Tt=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ts.state.version||Fe.outputEncoding!==je||oe.isInstancedMesh&&Fe.instancing===!1||!oe.isInstancedMesh&&Fe.instancing===!0||oe.isSkinnedMesh&&Fe.skinning===!1||!oe.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==$e||Y.fog===!0&&Fe.fog!==Be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==R.numPlanes||Fe.numIntersection!==R.numIntersection)||Fe.vertexAlphas!==it||Fe.vertexTangents!==nt||Fe.morphTargets!==Je||Fe.morphNormals!==yt||Fe.morphColors!==Jt||Fe.toneMapping!==Nn||xe.isWebGL2===!0&&Fe.morphTargetsCount!==Et)&&(Tt=!0):(Tt=!0,Fe.__version=Y.version);let ei=Fe.currentProgram;Tt===!0&&(ei=ln(Y,K,oe));let nr=!1,ir=!1,Pr=!1;const Lt=ei.getUniforms(),Vt=Fe.uniforms;if(Se.useProgram(ei.program)&&(nr=!0,ir=!0,Pr=!0),Y.id!==b&&(b=Y.id,ir=!0),nr||k!==A){if(Lt.setValue(G,"projectionMatrix",A.projectionMatrix),xe.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),k!==A&&(k=A,ir=!0,Pr=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const pt=Lt.map.cameraPosition;pt!==void 0&&pt.setValue(G,I.setFromMatrixPosition(A.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||oe.isSkinnedMesh)&&Lt.setValue(G,"viewMatrix",A.matrixWorldInverse)}if(oe.isSkinnedMesh){Lt.setOptional(G,oe,"bindMatrix"),Lt.setOptional(G,oe,"bindMatrixInverse");const pt=oe.skeleton;pt&&(xe.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),Lt.setValue(G,"boneTexture",pt.boneTexture,Ze),Lt.setValue(G,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cs=ne.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&xe.isWebGL2===!0)&&Me.update(oe,ne,ei),(ir||Fe.receiveShadow!==oe.receiveShadow)&&(Fe.receiveShadow=oe.receiveShadow,Lt.setValue(G,"receiveShadow",oe.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Vt.envMap.value=$e,Vt.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ir&&(Lt.setValue(G,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&tr(Vt,Pr),Be&&Y.fog===!0&&lt.refreshFogUniforms(Vt,Be),lt.refreshMaterialUniforms(Vt,Y,ce,W,q),Ka.upload(G,Fe.uniformsList,Vt,Ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ka.upload(G,Fe.uniformsList,Vt,Ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(G,"center",oe.center),Lt.setValue(G,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(G,"normalMatrix",oe.normalMatrix),Lt.setValue(G,"modelMatrix",oe.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const pt=Y.uniformsGroups;for(let bs=0,sl=pt.length;bs<sl;bs++)if(xe.isWebGL2){const Co=pt[bs];ue.update(Co,ei),ue.bind(Co,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function tr(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,K,ne){Ye.get(A.texture).__webglTexture=K,Ye.get(A.depthTexture).__webglTexture=ne;const Y=Ye.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ne===void 0,Y.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,K){const ne=Ye.get(A);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ne=0){L=A,C=K,D=ne;let Y=!0,oe=null,Be=!1,qe=!1;if(A){const $e=Ye.get(A);$e.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),Y=!1):$e.__webglFramebuffer===void 0?Ze.setupRenderTarget(A):$e.__hasExternalTextures&&Ze.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(qe=!0);const nt=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(oe=nt[K],Be=!0):xe.isWebGL2&&A.samples>0&&Ze.useMultisampledRTT(A)===!1?oe=Ye.get(A).__webglMultisampledFramebuffer:oe=nt,O.copy(A.viewport),H.copy(A.scissor),w=A.scissorTest}else O.copy(j).multiplyScalar(ce).floor(),H.copy(ie).multiplyScalar(ce).floor(),w=fe;if(Se.bindFramebuffer(36160,oe)&&xe.drawBuffers&&Y&&Se.drawBuffers(A,oe),Se.viewport(O),Se.scissor(H),Se.setScissorTest(w),Be){const $e=Ye.get(A.texture);G.framebufferTexture2D(36160,36064,34069+K,$e.__webglTexture,ne)}else if(qe){const $e=Ye.get(A.texture),it=K||0;G.framebufferTextureLayer(36160,36064,$e.__webglTexture,ne||0,it)}b=-1},this.readRenderTargetPixels=function(A,K,ne,Y,oe,Be,qe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je){Se.bindFramebuffer(36160,je);try{const $e=A.texture,it=$e.format,nt=$e.type;if(it!==Jn&&ze.convert(it)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=nt===xo&&(ye.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(nt!==br&&ze.convert(nt)!==G.getParameter(35738)&&!(nt===wr&&(xe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-Y&&ne>=0&&ne<=A.height-oe&&G.readPixels(K,ne,Y,oe,ze.convert(it),ze.convert(nt),Be)}finally{const $e=L!==null?Ye.get(L).__webglFramebuffer:null;Se.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(A,K,ne=0){const Y=Math.pow(2,-ne),oe=Math.floor(K.image.width*Y),Be=Math.floor(K.image.height*Y);Ze.setTexture2D(K,0),G.copyTexSubImage2D(3553,ne,0,0,A.x,A.y,oe,Be),Se.unbindTexture()},this.copyTextureToTexture=function(A,K,ne,Y=0){const oe=K.image.width,Be=K.image.height,qe=ze.convert(ne.format),je=ze.convert(ne.type);Ze.setTexture2D(ne,0),G.pixelStorei(37440,ne.flipY),G.pixelStorei(37441,ne.premultiplyAlpha),G.pixelStorei(3317,ne.unpackAlignment),K.isDataTexture?G.texSubImage2D(3553,Y,A.x,A.y,oe,Be,qe,je,K.image.data):K.isCompressedTexture?G.compressedTexSubImage2D(3553,Y,A.x,A.y,K.mipmaps[0].width,K.mipmaps[0].height,qe,K.mipmaps[0].data):G.texSubImage2D(3553,Y,A.x,A.y,qe,je,K.image),Y===0&&ne.generateMipmaps&&G.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ne,Y,oe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=A.max.x-A.min.x+1,qe=A.max.y-A.min.y+1,je=A.max.z-A.min.z+1,$e=ze.convert(Y.format),it=ze.convert(Y.type);let nt;if(Y.isData3DTexture)Ze.setTexture3D(Y,0),nt=32879;else if(Y.isDataArrayTexture)Ze.setTexture2DArray(Y,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,Y.flipY),G.pixelStorei(37441,Y.premultiplyAlpha),G.pixelStorei(3317,Y.unpackAlignment);const Je=G.getParameter(3314),yt=G.getParameter(32878),Jt=G.getParameter(3316),Nn=G.getParameter(3315),ci=G.getParameter(32877),Et=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;G.pixelStorei(3314,Et.width),G.pixelStorei(32878,Et.height),G.pixelStorei(3316,A.min.x),G.pixelStorei(3315,A.min.y),G.pixelStorei(32877,A.min.z),ne.isDataTexture||ne.isData3DTexture?G.texSubImage3D(nt,oe,K.x,K.y,K.z,Be,qe,je,$e,it,Et.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(nt,oe,K.x,K.y,K.z,Be,qe,je,$e,Et.data)):G.texSubImage3D(nt,oe,K.x,K.y,K.z,Be,qe,je,$e,it,Et),G.pixelStorei(3314,Je),G.pixelStorei(32878,yt),G.pixelStorei(3316,Jt),G.pixelStorei(3315,Nn),G.pixelStorei(32877,ci),oe===0&&Y.generateMipmaps&&G.generateMipmap(nt),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ze.setTextureCube(A,0):A.isData3DTexture?Ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ze.setTexture2DArray(A,0):Ze.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,Se.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(il.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(u){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!u}}});class eM extends il{}eM.prototype.isWebGL1Renderer=!0;let nm=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class tM extends pn{constructor(e,n,s,o,l,d,c,m,p){super(e,n,s,o,l,d,c,m,p),this.isVideoTexture=!0,this.minFilter=d!==void 0?d:an,this.magFilter=l!==void 0?l:an,this.generateMipmaps=!1;const _=this;function x(){_.needsUpdate=!0,e.requestVideoFrameCallback(x)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(x)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class im extends pn{constructor(e,n,s,o,l,d,c,m,p){super(e,n,s,o,l,d,c,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);function nM(u,e){const n=new Ci({uniforms:{u_texture:{value:u},u_combinedTexture:{value:e.texture},u_aspect:{value:1.7777777777777777},u_resolution:{value:new ct(1920,1080)},u_distortionAmount:{value:.06},u_bloom:{value:.8},u_time:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec2 vUv;

      // Uniform inputs from JavaScript
      uniform sampler2D u_texture;
      uniform sampler2D u_combinedTexture;
      uniform float u_aspect;
      uniform float u_distortionAmount;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_bloom;

      // Calculate distance to a rounded rectangle
      float roundedRectDistance(vec2 pt, vec2 size, float radius) {
        vec2 halfSize = size * 0.5;
        vec2 d = abs(pt) - halfSize + vec2(radius);
        return length(max(d, 0.0)) - radius;
      }

      // Generate pseudo-random noise for glitch effects
      float noise2d(vec2 uv) {
        return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
      }

      //Apply chromatic aberration effect
      vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
        vec2 center = vec2(0.5);
        vec2 dir = uv - center;
        float dist = length(dir);
        vec2 offset = normalize(dir) * amount * dist;

        // Sample each color channel with slight offset
        float r = texture2D(tex, uv + offset).r;
        float g = texture2D(tex, uv).g;
        float b = texture2D(tex, uv - offset).b;
        return vec3(r, g, b);
      }

      void main() {
        // Convert UV coordinates to centered coordinate system
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= u_aspect;

        // Apply barrel distortion for CRT effect
        float r = length(uv);
        float distortedR = r + u_distortionAmount * pow(r, 3.0);
        vec2 distortedUV = uv * (distortedR / r);

        // Create rounded rectangle mask for screen edges
        float dist = roundedRectDistance(distortedUV, vec2(u_aspect * 2.0, 2.0), 0.12);
        if (dist > 0.0) discard;

        // Convert back to texture coordinates
        vec2 finalUV = distortedUV;
        finalUV.x /= u_aspect;
        finalUV = finalUV * 0.5 + 0.5;

        // Discard pixels outside valid texture range
        if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) discard;

        // Apply chromatic aberration to the video texture
        float caAmount = 0.007;
        vec3 videoColor = chromaticAberration(u_texture, finalUV, caAmount);
        
        // Generate bloom effect by sampling surrounding pixels
        vec3 bloom = vec3(0.0);
        float bloomRadius = 0.005;
        for(int i = 0; i < 8; i++) {
          float angle = float(i) * 0.785398; // 45 degree increments
          vec2 offset = vec2(cos(angle), sin(angle)) * bloomRadius;
          bloom += chromaticAberration(u_texture, finalUV + offset, caAmount) * 0.125;
        }
        
        // Mix original video with bloom effect
        videoColor = mix(videoColor, bloom, u_bloom * 0.3);
        
        // Dim the video to make UI overlay more visible
        videoColor *= 0.5;

        // Sample UI texture with glitch effects
        vec2 textUV = finalUV;

        // Generate glitch offsets using noise
        float glitchXOffset = (noise2d(vec2(textUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.002;
        float glitchYOffset = (noise2d(vec2(textUV.x * 100.0 + 1000.0, u_time * 25.0)) - 0.5) * 0.002;
        vec2 glitchOffset = vec2(glitchXOffset, glitchYOffset);
        vec2 glitchUV = (textUV + glitchOffset);

        // Sample the UI texture with glitch offset
        vec4 textSample = texture2D(u_combinedTexture, glitchUV);

        // Calculate luminance for alpha blending
        float lum = dot(textSample.rgb, vec3(0.299, 0.587, 0.114));
        float alpha = smoothstep(0.15, 0.65, lum);

        // Create glow effect around UI elements
        float glow = 0.0;
        float glowRadius = 0.02;
        glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;

        // Color the text with glow effect
        vec3 textColor = mix(vec3(1.0), vec3(0.6, 0.8, 1.0), glow);

        // Blend video background with UI overlay
        vec3 finalColor = mix(videoColor, textColor, alpha);

        // Apply flickering effect for retro feel
        float flicker = 0.95 + 0.1 * sin(u_time * 20.0 + textUV.y * 50.0);
        finalColor *= flicker;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,transparent:!0}),s=new To(2,2);return new li(s,n)}const Rn=[{text:"coming soon!",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}];class iM{texture;canvas;ctx;constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=1920,this.canvas.height=1080,this.texture=new im(this.canvas),this.texture.minFilter=zt,this.texture.magFilter=zt,this.texture.generateMipmaps=!1,this.draw(null,new Array(Rn.length).fill(0))}draw(e,n){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.font="bold 45px 'Courier New', Courier, monospace",this.ctx.textBaseline="top",this.ctx.fillStyle="white",this.ctx.shadowColor="rgba(0,0,0,0.85)",this.ctx.shadowBlur=6,this.ctx.lineWidth=3,this.ctx.strokeStyle="black",this.ctx.imageSmoothingEnabled=!1;const s="Welcome, see projects below",o=60;this.ctx.strokeText(s,o,40),this.ctx.fillText(s,o,30),this.ctx.beginPath(),this.ctx.moveTo(o,90),this.ctx.lineTo(o+this.ctx.measureText(s).width,90),this.ctx.lineWidth=2,this.ctx.strokeStyle="rgba(255, 255, 255, 0.6)",this.ctx.stroke(),this.ctx.font="bold 40px 'Courier New', Courier, monospace";const l=75,d=120,c=50;for(let g=0;g<Rn.length;g++){const T=Rn[g].text,y=n[g],v=16,C=6,D=this.ctx.measureText(T).width+v*2,L=d+g*(c+20),b=l-v,k=L-C/2,O=6;this.ctx.save();const H=.2+.8*y;this.ctx.fillStyle=`rgba(100, 100, 120, ${H})`,this.ctx.beginPath(),this.ctx.moveTo(b+O,k),this.ctx.lineTo(b+D-O,k),this.ctx.quadraticCurveTo(b+D,k,b+D,k+O),this.ctx.lineTo(b+D,k+c-O),this.ctx.quadraticCurveTo(b+D,k+c,b+D-O,k+c),this.ctx.lineTo(b+O,k+c),this.ctx.quadraticCurveTo(b,k+c,b,k+c-O),this.ctx.lineTo(b,k+O),this.ctx.quadraticCurveTo(b,k,b+O,k),this.ctx.closePath(),this.ctx.fill(),this.ctx.strokeStyle="rgba(255, 255, 255, 0.6)",this.ctx.lineWidth=1,this.ctx.stroke(),y<.1?(this.ctx.shadowColor="rgba(0,0,0,0.85)",this.ctx.shadowBlur=6,this.ctx.lineWidth=3,this.ctx.strokeStyle="black"):(this.ctx.shadowColor="transparent",this.ctx.shadowBlur=0,this.ctx.lineWidth=0);const w=255-255*y,N=255-255*y,W=255-255*y;this.ctx.fillStyle=`rgb(${w}, ${N}, ${W})`,y<.1&&this.ctx.strokeText(T,l,L),this.ctx.fillText(T,l,L),this.ctx.restore()}this.ctx.font="bold 45px 'Courier New', Courier, monospace",this.ctx.shadowColor="rgba(0,0,0,0.85)",this.ctx.shadowBlur=6,this.ctx.lineWidth=3,this.ctx.strokeStyle="black";const m="@sylvixor",p=this.ctx.measureText(m).width,_=this.canvas.width-p-60,x=this.canvas.height-85;this.ctx.fillStyle="white",this.ctx.strokeText(m,_,x),this.ctx.fillText(m,_,x),this.texture.needsUpdate=!0}}function rM(u,e){let n=null;const s=new Array(Rn.length).fill(0),o=new Array(Rn.length).fill(0),l=(x,g)=>{const T=u.domElement.getBoundingClientRect(),y=x-T.left,v=g-T.top,C=y/T.width,D=v/T.height,L=C*1920,b=D*1080;return{x:L,y:b}},d=(x,g)=>{const T=document.createElement("canvas").getContext("2d");if(!T)return null;T.font="bold 40px 'Courier New', Courier, monospace";const y=160,v=170,C=70;for(let D=0;D<Rn.length;D++){const L=Rn[D],b=L.text,k=T.measureText(b).width-14,O=y+13,H=v+D*C,w=-20;if(x>=O&&x<=O+k){const N=(x-O)/k,W=H+w*N;if(g>=W&&g<=W+50)return L.text}}return null},c=x=>{x.preventDefault(),x.stopPropagation();const{x:g,y:M}=l(x.clientX,x.clientY),T=d(g,M);if(T){const y=Rn.find(v=>v.text===T);if(y){const v=document.createElement("a");v.href=y.url,v.target="_blank",v.rel="noopener noreferrer",document.body.appendChild(v),v.click(),document.body.removeChild(v)}}},m=x=>{const{x:g,y:M}=l(x.clientX,x.clientY),T=d(g,M);if(T!==n){n=T;for(let y=0;y<Rn.length;y++)o[y]=n===Rn[y].text?1:0;u.domElement.style.cursor=n?"pointer":"default"}},p=u.domElement;return p.addEventListener("click",c,{passive:!1}),p.addEventListener("mousemove",m),{cleanup:()=>{p.removeEventListener("click",c),p.removeEventListener("mousemove",m)},updateHoverProgress:()=>{let g=!1;for(let M=0;M<Rn.length;M++)s[M]+=(o[M]-s[M])*.1,Math.abs(s[M]-o[M])>.01&&(g=!0);return g?(e.draw(n,s),!0):!1}}}const Lc=()=>{const u=window.innerWidth/window.innerHeight,e=16/9;let n,s;return u>e?(s=window.innerHeight,n=s*e):(n=window.innerWidth,s=n/e),{width:n,height:s}},Ap=u=>{const{width:e,height:n}=Lc();u.style.position="absolute",u.style.left="50%",u.style.top="50%",u.style.transform="translate(-50%, -50%)",u.style.width=`${e}px`,u.style.height=`${n}px`},sM=()=>{const u=Cr.useRef(null);return Cr.useEffect(()=>{if(!u.current)return;const e=new il({antialias:!0,alpha:!0});let{width:n,height:s}=Lc();e.setSize(n,s),u.current.appendChild(e.domElement);const o=document.createElement("video");o.src="/BG.mp4",o.autoplay=!0,o.loop=!0,o.muted=!0,o.playsInline=!0,o.crossOrigin="anonymous",o.preload="auto";const l=()=>{o.play().catch(v=>console.warn("Video playback failed:",v))};o.oncanplaythrough=()=>{l();const v=document.getElementById("loading-overlay");v&&v.classList.add("hidden")};const d=new tM(o);d.minFilter=an,d.magFilter=an,d.generateMipmaps=!1;const c=new nm,m=new Ic(-1,1,1,-1,0,1),p=new iM,_=nM(d,p);c.add(_);const{cleanup:x,updateHoverProgress:g}=rM(e,p);Ap(e.domElement);const M=()=>{const{width:v,height:C}=Lc();n=v,s=C,e.setSize(v,C);const D=_.material;D&&(D.uniforms.u_aspect.value=16/9,D.uniforms.u_resolution.value.set(n,s)),Ap(e.domElement)};window.addEventListener("resize",M);const T=new rm,y=()=>{console.log("Animation loop running...");const v=T.getElapsedTime(),C=_.material;C&&(C.uniforms.u_time.value=v),o.paused&&l(),g()&&(C.uniforms.u_combinedTexture.value.needsUpdate=!0),e.render(c,m),requestAnimationFrame(y)};return y(),()=>{window.removeEventListener("resize",M),u.current&&u.current.removeChild(e.domElement),d.dispose(),e.dispose(),x()}},[]),Zi.jsx("div",{ref:u})},oM=()=>{const u=Cr.useRef(null);return Cr.useEffect(()=>{if(!u.current)return;const e=window.innerWidth/window.innerHeight,n=16/9;let s,o;e>n?(o=window.innerHeight,s=o*n):(s=window.innerWidth,o=s/n);const l=s*2.5,d=o*2.5,c=new il({antialias:!0,alpha:!0});c.setSize(l,d),u.current.appendChild(c.domElement);const m=c.domElement;m.style.cssText=`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: ${l}px;
      height: ${d}px;
    `;const p=new nm,_=new Ic(-1,1,1,-1,0,1),x=document.createElement("canvas"),g=x.getContext("2d");x.width=1920,x.height=1080;const M=new im(x);M.minFilter=zt,M.magFilter=zt,M.generateMipmaps=!1;const T=()=>{g.clearRect(0,0,x.width,x.height),g.font="bold 80px 'Courier New', monospace",g.fillStyle="white",g.textAlign="center",g.textBaseline="middle";const H=30,w=x.width/2,N=["welcome, see","projects below"];let W=x.height/2-200;N.forEach((fe,le)=>{g.fillText(fe,w,W+le*100)}),W+=150+H,g.beginPath(),g.moveTo(w-300,W),g.lineTo(w+300,W),g.strokeStyle="rgba(255, 255, 255, 0.6)",g.lineWidth=4,g.stroke(),W+=H+20,g.font="bold 70px 'Courier New', monospace",g.strokeStyle="rgba(255, 255, 255, 0.6)",g.lineWidth=3;const ce=30,ae=110,Z=10,j=(fe,le)=>{const J=g.measureText(fe).width+ce*2,q=w-J/2;return g.save(),g.fillStyle="rgba(100, 100, 120, 0.8)",g.beginPath(),g.roundRect(q,le,J,ae,Z),g.stroke(),g.restore(),g.fillText(fe,w,le+ae/2),{x:q,y:le,width:J,height:ae}},ie=Rn.map((fe,le)=>j(fe.text,W+le*(ae+H)));return M.needsUpdate=!0,ie},y=T(),v=H=>{const w=m.getBoundingClientRect(),N=x.width/w.width,W=x.height/w.height,ce=(H.clientX-w.left)*N,ae=(H.clientY-w.top)*W;y.forEach((Z,j)=>{ce>=Z.x&&ce<=Z.x+Z.width&&ae>=Z.y&&ae<=Z.y+Z.height&&(window.location.href=Rn[j].url)})};m.addEventListener("click",v);const C=new Ci({uniforms:{u_texture:{value:null},u_combinedTexture:{value:M},u_aspect:{value:l/d},u_distortionAmount:{value:.5},u_time:{value:0},u_resolution:{value:new ct(l,d)},u_bloom:{value:.8},u_brightnessFlicker:{value:.04}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D u_texture;
        uniform sampler2D u_combinedTexture;
        uniform float u_aspect;
        uniform float u_distortionAmount;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_bloom;
        uniform float u_brightnessFlicker;

        // Calculate distance to rounded rectangle
        float roundedRectDistance(vec2 pt, vec2 size, float radius) {
          vec2 halfSize = size * 0.5;
          vec2 d = abs(pt) - halfSize + vec2(radius);
          return length(max(d, 0.0)) - radius;
        }

        // Simple 2D noise function for glitch effects
        float noise2d(vec2 uv) {
          return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
        }

        // Chromatic aberration effect (color channel separation)
        vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
          vec2 center = vec2(0.5);
          vec2 dir = uv - center;
          float dist = length(dir);
          vec2 offset = normalize(dir) * amount * dist;

          // Sample red, green, blue channels with slight offsets
          float r = texture2D(tex, uv + offset).r;
          float g = texture2D(tex, uv).g;
          float b = texture2D(tex, uv - offset).b;
          return vec3(r, g, b);
        }

        void main() {
          // Convert UV coordinates to screen space centered at origin
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= u_aspect;

          // Apply barrel distortion for CRT effect
          float r = length(uv);
          float distortedR = r + u_distortionAmount * pow(r, 3.0);
          vec2 distortedUV = uv * (distortedR / r);

          // Clip to rounded rectangle screen shape
          float dist = roundedRectDistance(distortedUV, vec2(u_aspect * 2.0, 2.0), 0.12);
          if (dist > 0.0) discard;

          // Convert back to texture coordinates
          vec2 finalUV = distortedUV;
          finalUV.x /= u_aspect;
          finalUV = finalUV * 0.5 + 0.5;

          // Discard pixels outside texture bounds
          if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) discard;

          // Add subtle glitch offset using noise
          float glitchXOffset = (noise2d(vec2(finalUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.002;
          float glitchYOffset = (noise2d(vec2(finalUV.x * 100.0 + 1000.0, u_time * 25.0)) - 0.5) * 0.002;
          vec2 glitchUV = finalUV + vec2(glitchXOffset, glitchYOffset);

          // Sample the UI texture
          vec4 textSample = texture2D(u_combinedTexture, glitchUV);

          // Apply chromatic aberration
          float caAmount = 0.003;
          vec3 processedColor = chromaticAberration(u_combinedTexture, glitchUV, caAmount);

          // Add bloom effect by sampling surrounding pixels
          vec3 bloom = vec3(0.0);
          float bloomRadius = 0.005;
          for(int i = 0; i < 8; i++) {
            float angle = float(i) * 0.785398; // 45 degree increments
            vec2 offset = vec2(cos(angle), sin(angle)) * bloomRadius;
            bloom += chromaticAberration(u_combinedTexture, glitchUV + offset, caAmount) * 0.125;
          }
          processedColor = mix(processedColor, bloom, u_bloom * 0.3);

          // Calculate alpha based on luminance for text rendering
          float lum = dot(textSample.rgb, vec3(0.299, 0.587, 0.114));
          float alpha = smoothstep(0.15, 0.65, lum);

          // Add glow effect around text
          float glow = 0.0;
          float glowRadius = 0.02;
          glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
          glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;

          // Mix text color with glow effect
          vec3 textColor = mix(vec3(1.0), vec3(0.6, 0.8, 1.0), glow);
          vec3 finalColor = mix(processedColor, textColor, alpha);

          // Add scanline flicker effect
          float flicker = 0.95 + 0.1 * sin(u_time * 20.0 + finalUV.y * 50.0);
          finalColor *= flicker;

          // Add overall brightness flickering
          finalColor *= (1.0 - u_brightnessFlicker + u_brightnessFlicker * sin(u_time * 100.0));

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,transparent:!0}),D=new To(2,2),L=new li(D,C);p.add(L);const b=()=>{const H=window.innerWidth/window.innerHeight,w=16/9;let N,W;H>w?(W=window.innerHeight,N=W*w):(N=window.innerWidth,W=N/w);const ce=N*2.5,ae=W*2.5;c.setSize(ce,ae),C.uniforms.u_aspect.value=ce/ae,C.uniforms.u_resolution.value.set(ce,ae),T(),m.style.width=`${ce}px`,m.style.height=`${ae}px`};window.addEventListener("resize",b);const k=new rm,O=()=>{requestAnimationFrame(O),C.uniforms.u_time.value=k.getElapsedTime(),c.render(p,_)};return O(),()=>{window.removeEventListener("resize",b),u.current&&u.current.removeChild(c.domElement),c.dispose()}},[]),Zi.jsx("div",{ref:u})},aM=()=>{const[u,e]=Cr.useState(!1);return Cr.useEffect(()=>{const n=()=>{e(window.innerWidth<768)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),Zi.jsx(Zi.Fragment,{children:u?Zi.jsx(oM,{}):Zi.jsx(sM,{})})},Lp=document.getElementById("root");Lp&&Zg.createRoot(Lp).render(Zi.jsx(Wg.StrictMode,{children:Zi.jsx(aM,{})}));
