(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},15505,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-left-right",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);e.s(["ArrowLeftRight",()=>t],15505)},73375,e=>{"use strict";let t=(0,e.i(75254).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",()=>t],73375)},87316,e=>{"use strict";let t=(0,e.i(75254).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],87316)},5766,e=>{"use strict";let t,s;var r,a=e.i(71645);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let s="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(i,o):i+":"+o+";")}return s+(t&&a?t+"{"+a+"}":a)+r},c={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e};function m(e){let t,s,r=this||{},a=e.call?e(r.p):e;return((e,t,s,r,a)=>{var i;let m=u(e),p=c[m]||(c[m]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(m));if(!c[p]){let t=m!==e?e:(e=>{let t,s,r=[{}];for(;t=o.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(s=t[3].replace(n," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(n," ").trim();return r[0]})(e);c[p]=d(a?{["@keyframes "+p]:t}:t,s?"":"."+p)}let x=s&&c.g?c.g:null;return s&&(c.g=c[p]),i=c[p],x?t.data=t.data.replace(x,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),p})(a.unshift?a.raw?(t=[].slice.call(arguments,1),s=r.p,a.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(r.target),r.g,r.o,r.k)}m.bind({g:1});let p,x,h,f=m.bind({k:1});function g(e,t){let s=this||{};return function(){let r=arguments;function a(i,o){let l=Object.assign({},i),n=l.className||a.className;s.p=Object.assign({theme:x&&x()},l),s.o=/ *go\d+/.test(n),l.className=m.apply(s,r)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),h&&d[0]&&h(l),p(d,l)}return t?t(a):a}}var y=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},j="default",N=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return N(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},w=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},_={},E=(e,t=j)=>{_[t]=N(_[t]||k,e),w.forEach(([e,s])=>{e===t&&s(_[t])})},C=e=>Object.keys(_).forEach(t=>E(e,t)),R=(e=j)=>t=>{E(t,e)},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=e=>(t,s)=>{let r,a=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||b()}))(t,e,s);return R(a.toasterId||(r=a.id,Object.keys(_).find(e=>_[e].toasts.some(e=>e.id===r))))({type:2,toast:a}),a.id},O=(e,t)=>D("blank")(e,t);O.error=D("error"),O.success=D("success"),O.loading=D("loading"),O.custom=D("custom"),O.dismiss=(e,t)=>{let s={type:3,toastId:e};t?R(t)(s):C(s)},O.dismissAll=e=>O.dismiss(void 0,e),O.remove=(e,t)=>{let s={type:4,toastId:e};t?R(t)(s):C(s)},O.removeAll=e=>O.remove(void 0,e),O.promise=(e,t,s)=>{let r=O.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?y(t.success,e):void 0;return a?O.success(a,{id:r,...s,...null==s?void 0:s.success}):O.dismiss(r),e}).catch(e=>{let a=t.error?y(t.error,e):void 0;a?O.error(a,{id:r,...s,...null==s?void 0:s.error}):O.dismiss(r)}),e};var z=1e3,A=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
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
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,S=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,M=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=f`
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
}`,H=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${F} 0.2s ease-out forwards;
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
`,U=g("div")`
  position: absolute;
`,q=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?a.createElement(K,null,t):t:"blank"===s?null:a.createElement(q,null,a.createElement(S,{...r}),"loading"!==s&&a.createElement(U,null,"error"===s?a.createElement(T,{...r}):a.createElement(H,{...r})))},V=g("div")`
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
`,Y=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=a.memo(({toast:e,position:t,style:s,children:r})=>{let i=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[r,a]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${f(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=a.createElement(Q,{toast:e}),l=a.createElement(Y,{...e.ariaProps},y(e.message,e));return a.createElement(V,{className:e.className,style:{...i,...s,...e.style}},"function"==typeof r?r({icon:o,message:l}):a.createElement(a.Fragment,null,o,l))});r=a.createElement,d.p=void 0,p=r,x=void 0,h=void 0;var G=({id:e,className:t,style:s,onHeightUpdate:r,children:i})=>{let o=a.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return a.createElement("div",{ref:o,className:t,style:s},i)},J=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:i,toasterId:o,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:r}=((e={},t=j)=>{let[s,r]=(0,a.useState)(_[t]||k),i=(0,a.useRef)(_[t]);(0,a.useEffect)(()=>(i.current!==_[t]&&r(_[t]),w.push([t,r]),()=>{let e=w.findIndex(([e])=>e===t);e>-1&&w.splice(e,1)}),[t]);let o=s.toasts.map(t=>{var s,r,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...s,toasts:o}})(e,t),i=(0,a.useRef)(new Map).current,o=(0,a.useCallback)((e,t=z)=>{if(i.has(e))return;let s=setTimeout(()=>{i.delete(e),l({type:4,toastId:e})},t);i.set(e,s)},[]);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),a=s.map(s=>{if(s.duration===1/0)return;let r=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(r<0){s.visible&&O.dismiss(s.id);return}return setTimeout(()=>O.dismiss(s.id,t),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[s,r,t]);let l=(0,a.useCallback)(R(t),[t]),n=(0,a.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,a.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,a.useCallback)(()=>{r&&l({type:6,time:Date.now()})},[r,l]),u=(0,a.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=t||{},o=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+a,0)},[s]);return(0,a.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[s,o]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}})(s,o);return a.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let o,l,n=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(o=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...l});return a.createElement(G,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?J:"",style:u},"custom"===s.type?y(s.message,s):i?i(s):a.createElement(Z,{toast:s,position:n}))}))};e.s(["Toaster",()=>W,"toast",()=>O],5766)},88081,e=>{"use strict";let t=(0,e.i(75254).default)("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);e.s(["Hash",()=>t],88081)},82212,e=>{"use strict";var t=e.i(43476),s=e.i(71645),r=e.i(18566),a=e.i(16973),i=e.i(73375),o=e.i(31278),l=e.i(84614),n=e.i(87316),d=e.i(88081),c=e.i(15505),u=e.i(88844),m=e.i(5766),p=e.i(22016),x=e.i(75157);function h({salesReturn:e,className:s}){let r=function(e){var t=e.notes;if(null==t)return null;let s=t.trim();return""===s?null:s}(e);return r?(0,t.jsxs)("div",{className:(0,x.cn)("space-y-2",s),children:[(0,t.jsx)("div",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Notes"}),(0,t.jsx)("div",{"aria-label":`Notes ${r}`,className:"text-sm text-gray-700 font-medium whitespace-pre-wrap",children:r})]}):null}function f(){let e=(0,r.useRouter)(),x=(0,r.useSearchParams)().get("id"),[f,g]=(0,s.useState)(null),[y,b]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{if(!x){m.toast.error("Return ID is missing"),e.push("/dashboard/orders");return}(async()=>{try{let e=await a.default.get(`/returns/sales/${x}/`);g(e.data)}catch(e){console.error(e),m.toast.error("Failed to load return details")}finally{b(!1)}})()},[x,e]),y)?(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(o.Loader2,{className:"animate-spin text-red-500",size:40})}):f?(0,t.jsxs)("div",{className:"p-8 max-w-[1200px] mx-auto font-sans min-h-screen pb-32",children:[(0,t.jsx)(m.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-8",children:[(0,t.jsx)(p.default,{href:"/dashboard/orders",children:(0,t.jsx)("button",{className:"p-3 hover:bg-white rounded-2xl border border-gray-100 transition-all text-gray-400 hover:text-gray-900 shadow-sm",children:(0,t.jsx)(i.ChevronLeft,{size:24})})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"text-3xl font-black text-red-700 tracking-tight flex items-center gap-3",children:[(0,t.jsx)(c.ArrowLeftRight,{className:"text-red-500"})," Sale Return Details"]}),(0,t.jsx)("p",{className:"text-gray-500 mt-1",children:"View items returned from a customer order and stock restore."})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{className:"xl:col-span-2 space-y-6",children:[(0,t.jsxs)("div",{className:"bg-red-50/30 p-8 rounded-[2rem] border border-red-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2",children:[(0,t.jsx)(l.User,{size:14})," Customer"]}),(0,t.jsx)("div",{className:"text-lg font-bold text-red-900",children:f.customer_name||"—"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2",children:[(0,t.jsx)(d.Hash,{size:14})," Return Number"]}),(0,t.jsx)("div",{className:"text-lg font-bold text-red-900",children:f.return_number||`SRET-${f.id}`}),f.order_number?(0,t.jsxs)("div",{className:"text-xs font-medium text-red-500",children:["Against Order: ",f.order_number]}):null]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2",children:[(0,t.jsx)(n.Calendar,{size:14})," Return Date"]}),(0,t.jsx)("div",{className:"text-lg font-bold text-red-900",children:f.return_date||f.created_at?new Date(f.return_date||f.created_at||"").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"—"})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col",children:[(0,t.jsxs)("div",{className:"p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2",children:[(0,t.jsx)(u.Package,{className:"text-gray-400",size:20}),(0,t.jsx)("h3",{className:"text-lg font-bold text-gray-900",children:"Returned Items"})]}),(0,t.jsx)("div",{className:"flex-1 overflow-x-auto p-4",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-4 px-6",children:"Product"}),(0,t.jsx)("th",{className:"p-4 text-center",children:"Qty Returned"}),(0,t.jsx)("th",{className:"p-4 text-right",children:"Unit Price"}),(0,t.jsx)("th",{className:"p-4 text-right",children:"Total Refund"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50",children:f.items?.map((e,s)=>{var r;return(0,t.jsxs)("tr",{className:"hover:bg-gray-50/50 transition-colors",children:[(0,t.jsx)("td",{className:"p-4 px-6",children:(0,t.jsx)("div",{className:"font-bold text-gray-900",children:e.product_name})}),(0,t.jsx)("td",{className:"p-4 text-center",children:(0,t.jsx)("span",{className:"font-black text-red-600 bg-red-50 px-3 py-1 rounded-lg",children:e.quantity})}),(0,t.jsxs)("td",{className:"p-4 text-right font-medium text-gray-600",children:["₹",Number(e.unit_price??e.refund_unit_price??0).toFixed(2)]}),(0,t.jsxs)("td",{className:"p-4 text-right font-black text-gray-900",children:["₹",(void 0!==(r=e).total&&null!==r.total&&""!==r.total?Number(r.total):Number(r.quantity||0)*Number(r.unit_price??r.refund_unit_price??0)).toFixed(2)]})]},e.id??s)})})]})})]})]}),(0,t.jsx)("div",{className:"space-y-6",children:(0,t.jsxs)("div",{className:"bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5 sticky top-8",children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900 mb-6 flex items-center gap-2",children:"Return Summary"}),(0,t.jsxs)("div",{className:"space-y-4 mb-8",children:[(0,t.jsxs)("div",{className:"flex justify-between text-gray-500 font-medium",children:[(0,t.jsx)("span",{children:"Items Returned"}),(0,t.jsx)("span",{children:f.items?.reduce((e,t)=>e+Number(t.quantity||0),0)||0})]}),(0,t.jsxs)("div",{className:"flex justify-between items-end pt-4 border-t border-dashed border-gray-200",children:[(0,t.jsx)("span",{className:"text-lg font-bold text-gray-900",children:"Total Refund"}),(0,t.jsxs)("span",{className:"text-4xl font-black text-red-600 tracking-tighter",children:["₹",Number(f.refund_amount??f.total_amount??0).toFixed(2)]})]})]}),f.reason?.trim()&&(0,t.jsxs)("div",{className:"space-y-2 mb-6",children:[(0,t.jsx)("div",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Reason"}),(0,t.jsx)("div",{"aria-label":`Reason ${f.reason.trim()}`,className:"text-sm text-gray-700 font-medium whitespace-pre-wrap",children:f.reason.trim()})]}),(0,t.jsx)(h,{salesReturn:f,className:"mb-8"}),f.processed_by_name&&(0,t.jsxs)("div",{className:"mt-8 text-xs text-gray-400 font-medium px-1",children:["Processed by ",f.processed_by_name]})]})})]})]}):(0,t.jsxs)("div",{className:"p-8 max-w-4xl mx-auto text-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-700",children:"Return record not found"}),(0,t.jsx)("button",{onClick:()=>e.push("/dashboard/orders"),className:"mt-4 text-primary hover:underline",children:"Back to Orders"})]})}function g(){return(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(o.Loader2,{className:"animate-spin text-red-500",size:40})}),children:(0,t.jsx)(f,{})})}e.s(["default",()=>g],82212)}]);