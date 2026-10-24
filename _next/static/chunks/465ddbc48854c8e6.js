(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},5766,e=>{"use strict";let t,r;var a,s=e.i(71645);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=d.p?d.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},c={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e};function p(e){let t,r,a=this||{},s=e.call?e(a.p):e;return((e,t,r,a,s)=>{var i;let p=u(e),m=c[p]||(c[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!c[m]){let t=p!==e?e:(e=>{let t,r,a=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);c[m]=d(s?{["@keyframes "+m]:t}:t,r?"":"."+m)}let f=r&&c.g?c.g:null;return r&&(c.g=c[m]),i=c[m],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),m})(s.unshift?s.raw?(t=[].slice.call(arguments,1),r=a.p,s.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(a.target),a.g,a.o,a.k)}p.bind({g:1});let m,f,h,g=p.bind({k:1});function y(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:f&&f()},n),r.o=/ *go\d+/.test(l),n.className=p.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),h&&d[0]&&h(n),m(d,n)}return t?t(s):s}}var x=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},j="default",w=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},_=(e,t=j)=>{E[t]=w(E[t]||k,e),N.forEach(([e,r])=>{e===t&&r(E[t])})},$=e=>Object.keys(E).forEach(t=>_(e,t)),A=(e=j)=>t=>{_(t,e)},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=e=>(t,r)=>{let a,s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||b()}))(t,e,r);return A(s.toasterId||(a=s.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===a))))({type:2,toast:s}),s.id},S=(e,t)=>C("blank")(e,t);S.error=C("error"),S.success=C("success"),S.loading=C("loading"),S.custom=C("custom"),S.dismiss=(e,t)=>{let r={type:3,toastId:e};t?A(t)(r):$(r)},S.dismissAll=e=>S.dismiss(void 0,e),S.remove=(e,t)=>{let r={type:4,toastId:e};t?A(t)(r):$(r)},S.removeAll=e=>S.remove(void 0,e),S.promise=(e,t,r)=>{let a=S.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?x(t.success,e):void 0;return s?S.success(s,{id:a,...r,...null==r?void 0:r.success}):S.dismiss(a),e}).catch(e=>{let s=t.error?x(t.error,e):void 0;s?S.error(s,{id:a,...r,...null==r?void 0:r.error}):S.dismiss(a)}),e};var O=1e3,D=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,R=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=y("div")`
  position: absolute;
`,B=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(K,null,t):t:"blank"===r?null:s.createElement(B,null,s.createElement(L,{...a}),"loading"!==r&&s.createElement(H,null,"error"===r?s.createElement(P,{...a}):s.createElement(q,{...a})))},Y=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=s.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,s]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=s.createElement(W,{toast:e}),n=s.createElement(Q,{...e.ariaProps},x(e.message,e));return s.createElement(Y,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):s.createElement(s.Fragment,null,o,n))});a=s.createElement,d.p=void 0,m=a,f=void 0,h=void 0;var G=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=s.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:o,className:t,style:r},i)},J=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,V=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:r,pausedAt:a}=((e={},t=j)=>{let[r,a]=(0,s.useState)(E[t]||k),i=(0,s.useRef)(E[t]);(0,s.useEffect)(()=>(i.current!==E[t]&&a(E[t]),N.push([t,a]),()=>{let e=N.findIndex(([e])=>e===t);e>-1&&N.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:o}})(e,t),i=(0,s.useRef)(new Map).current,o=(0,s.useCallback)((e,t=O)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),n({type:4,toastId:e})},t);i.set(e,r)},[]);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&S.dismiss(r.id);return}return setTimeout(()=>S.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,s.useCallback)(A(t),[t]),l=(0,s.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,s.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,s.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,s.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,s.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}})(r,o);return s.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let o,n,l=r.position||t,d=c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}),u=(o=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...n});return s.createElement(G,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?J:"",style:u},"custom"===r.type?x(r.message,r):i?i(r):s.createElement(Z,{toast:r,position:l}))}))};e.s(["Toaster",()=>V,"toast",()=>S],5766)},78894,e=>{"use strict";var t=e.i(82458);e.s(["AlertTriangle",()=>t.default])},29764,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(18566),s=e.i(16973),i=e.i(31278),o=e.i(78894),n=e.i(5766),l=e.i(75157);let d=["damage","expiry","spoilage"];function c(e){return null!=e&&d.includes(e.trim())}function u(e){if(null==e)return null;let t=e.trim();return c(t)?t:null}function p({row:e,className:r}){let a=function(e){var t=e.reason;if(null==t)return null;let r=t.trim();return""===r?null:r}(e);return a?(0,t.jsx)("div",{"aria-label":`Reason ${a}`,className:(0,l.cn)("text-xs text-muted-foreground font-normal truncate",r),children:a}):null}function m(e){return e.product_name?.trim()||`Write-off #${e.id}`}function f({items:e}){return 0===e.length?(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"No write-offs."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"hidden md:block overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-4 pl-6",children:"Product"}),(0,t.jsx)("th",{className:"p-4",children:"Qty"}),(0,t.jsx)("th",{className:"p-4",children:"Type"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50",children:e.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50/50 transition-colors",children:[(0,t.jsx)("td",{className:"p-4 pl-6 font-bold text-gray-900",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{children:m(e)}),(0,t.jsx)(p,{row:e,className:"mt-0.5 font-normal"})]})}),(0,t.jsx)("td",{className:"p-4 text-gray-600",children:e.quantity_change??""}),(0,t.jsx)("td",{className:"p-4 text-gray-600",children:e.log_type??""})]},e.id))})]})}),(0,t.jsx)("div",{className:"md:hidden divide-y divide-gray-50",children:e.map(e=>(0,t.jsxs)("div",{className:"p-4 flex flex-col",children:[(0,t.jsx)("span",{className:"font-bold text-gray-900",children:m(e)}),(0,t.jsx)(p,{row:e,className:"text-[10px] mt-0.5 font-normal normal-case tracking-normal"}),(0,t.jsx)("span",{className:"text-[10px] text-gray-400 font-bold mt-1 uppercase",children:[e.quantity_change,e.log_type].filter(Boolean).join(" · ")})]},e.id))})]})}function h(){let e=(0,a.useSearchParams)(),l=function(e){if(null==e)return null;let t=String(e).trim();if(""===t||!/^\d+$/.test(t))return null;let r=Number(t);return!Number.isSafeInteger(r)||r<=0?null:r}(e.get("product_id")),p=u(e.get("reason")),[m,h]=(0,r.useState)([]),[g,y]=(0,r.useState)(!0),[x,b]=(0,r.useState)(null),v=(0,r.useCallback)(async()=>{y(!0),b(null);try{var e;let t,r,a,i,o=(e={productId:l,reason:p},r=(t=u(e.reason))?[t]:[...d],a=null!=e.productId&&Number.isSafeInteger(e.productId)&&e.productId>0?e.productId:null,i={reason:r.join(",")},null!=a&&(i.product_id=a),i),n=await s.default.get("/products/erp/inventory-ledger/",{params:o});h(function(e){let t=new Set,r=[];for(let a of e)for(let e of function(e){if(Array.isArray(e))return e;if(e&&"object"==typeof e&&"results"in e){let t=e.results;return Array.isArray(t)?t:[]}return[]}(a)){if(!e||"object"!=typeof e||!c(e.reason??null))continue;let a={id:Number(e.id),product_id:void 0===e.product_id?void 0:function(e){if(null==e||"string"==typeof e&&""===e.trim())return null;let t=Number(e);return!Number.isSafeInteger(t)||t<=0?null:t}(e.product_id),product_name:e.product_name,quantity_change:e.quantity_change,log_type:e.log_type,created_at:e.created_at,reason:e.reason};!Number.isFinite(a.id)||t.has(a.id)||(t.add(a.id),r.push(a))}return r}([n.data]))}catch(t){let e=t?.response?.status;h([]),401===e||403===e?b("You don't have access to write-offs."):(b("Failed to load write-offs."),n.toast.error("Failed to load write-offs"))}finally{y(!1)}},[l,p]);return((0,r.useEffect)(()=>{v()},[v]),g)?(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(i.Loader2,{className:"animate-spin text-primary",size:40})}):(0,t.jsxs)("div",{className:"p-8 max-w-5xl mx-auto font-sans min-h-screen pb-32",children:[(0,t.jsx)(n.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-3xl font-black text-gray-900 tracking-tight",children:"Write-offs / Damage"}),(0,t.jsx)("p",{className:"text-gray-500 mt-1 font-medium",children:"Inventory write-off and damage rows. Reason is shown only when the API sent it."})]}),x?(0,t.jsxs)("div",{className:"flex items-center gap-2 text-sm text-muted-foreground bg-white border border-gray-100 rounded-2xl p-6",children:[(0,t.jsx)(o.AlertTriangle,{size:16}),x]}):(0,t.jsxs)(t.Fragment,{children:[m.length>=100?(0,t.jsxs)("p",{className:"mb-3 text-sm text-muted-foreground",children:["Showing the latest ",100," write-offs. Filter by product to see older ones."]}):null,(0,t.jsx)("div",{className:"bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden",children:(0,t.jsx)(f,{items:m})})]})]})}function g(){return(0,t.jsx)(r.Suspense,{fallback:(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(i.Loader2,{className:"animate-spin text-primary",size:40})}),children:(0,t.jsx)(h,{})})}e.s(["default",()=>g],29764)}]);