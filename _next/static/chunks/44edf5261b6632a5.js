(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27752,e=>{"use strict";var t=e.i(28795);e.s(["Loader2",()=>t.default])},32910,e=>{"use strict";let t=(0,e.i(50737).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",()=>t],32910)},77489,e=>{"use strict";let t,s;var a,r=e.i(36142);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},c={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e};function m(e){let t,s,a=this||{},r=e.call?e(a.p):e;return((e,t,s,a,r)=>{var i;let m=u(e),p=c[m]||(c[m]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(m));if(!c[p]){let t=m!==e?e:(e=>{let t,s,a=[{}];for(;t=o.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(s=t[3].replace(n," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(n," ").trim();return a[0]})(e);c[p]=d(r?{["@keyframes "+p]:t}:t,s?"":"."+p)}let x=s&&c.g?c.g:null;return s&&(c.g=c[p]),i=c[p],x?t.data=t.data.replace(x,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),p})(r.unshift?r.raw?(t=[].slice.call(arguments,1),s=a.p,r.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(a.target),a.g,a.o,a.k)}m.bind({g:1});let p,x,h,f=m.bind({k:1});function y(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;s.p=Object.assign({theme:x&&x()},l),s.o=/ *go\d+/.test(n),l.className=m.apply(s,a)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),h&&d[0]&&h(l),p(d,l)}return t?t(r):r}}var g=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},j="default",N=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return N(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},w=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},C=(e,t=j)=>{E[t]=N(E[t]||k,e),w.forEach(([e,s])=>{e===t&&s(E[t])})},_=e=>Object.keys(E).forEach(t=>C(e,t)),D=(e=j)=>t=>{C(t,e)},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=e=>(t,s)=>{let a,r=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||b()}))(t,e,s);return D(r.toasterId||(a=r.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===a))))({type:2,toast:r}),r.id},R=(e,t)=>I("blank")(e,t);R.error=I("error"),R.success=I("success"),R.loading=I("loading"),R.custom=I("custom"),R.dismiss=(e,t)=>{let s={type:3,toastId:e};t?D(t)(s):_(s)},R.dismissAll=e=>R.dismiss(void 0,e),R.remove=(e,t)=>{let s={type:4,toastId:e};t?D(t)(s):_(s)},R.removeAll=e=>R.remove(void 0,e),R.promise=(e,t,s)=>{let a=R.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?g(t.success,e):void 0;return r?R.success(r,{id:a,...s,...null==s?void 0:s.success}):R.dismiss(a),e}).catch(e=>{let r=t.error?g(t.error,e):void 0;r?R.error(r,{id:a,...s,...null==s?void 0:s.error}):R.dismiss(a)}),e};var T=1e3,z=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,O=f`
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

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
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
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=f`
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
  animation: ${M} 1s linear infinite;
`,S=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=f`
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
}`,F=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
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
`,B=y("div")`
  position: absolute;
`,q=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=f`
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
`,V=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?r.createElement(K,null,t):t:"blank"===s?null:r.createElement(q,null,r.createElement(L,{...a}),"loading"!==s&&r.createElement(B,null,"error"===s?r.createElement(P,{...a}):r.createElement(F,{...a})))},Q=y("div")`
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
`,Y=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=r.memo(({toast:e,position:t,style:s,children:a})=>{let i=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${f(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=r.createElement(V,{toast:e}),l=r.createElement(Y,{...e.ariaProps},g(e.message,e));return r.createElement(Q,{className:e.className,style:{...i,...s,...e.style}},"function"==typeof a?a({icon:o,message:l}):r.createElement(r.Fragment,null,o,l))});a=r.createElement,d.p=void 0,p=a,x=void 0,h=void 0;var G=({id:e,className:t,style:s,onHeightUpdate:a,children:i})=>{let o=r.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return r.createElement("div",{ref:o,className:t,style:s},i)},J=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:i,toasterId:o,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:a}=((e={},t=j)=>{let[s,a]=(0,r.useState)(E[t]||k),i=(0,r.useRef)(E[t]);(0,r.useEffect)(()=>(i.current!==E[t]&&a(E[t]),w.push([t,a]),()=>{let e=w.findIndex(([e])=>e===t);e>-1&&w.splice(e,1)}),[t]);let o=s.toasts.map(t=>{var s,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...s,toasts:o}})(e,t),i=(0,r.useRef)(new Map).current,o=(0,r.useCallback)((e,t=T)=>{if(i.has(e))return;let s=setTimeout(()=>{i.delete(e),l({type:4,toastId:e})},t);i.set(e,s)},[]);(0,r.useEffect)(()=>{if(a)return;let e=Date.now(),r=s.map(s=>{if(s.duration===1/0)return;let a=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(a<0){s.visible&&R.dismiss(s.id);return}return setTimeout(()=>R.dismiss(s.id,t),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[s,a,t]);let l=(0,r.useCallback)(D(t),[t]),n=(0,r.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,r.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,r.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),u=(0,r.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=t||{},o=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[s]);return(0,r.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[s,o]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}})(s,o);return r.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let o,l,n=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}),u=(o=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...l});return r.createElement(G,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?J:"",style:u},"custom"===s.type?g(s.message,s):i?i(s):r.createElement(Z,{toast:s,position:n}))}))};e.s(["Toaster",()=>W,"toast",()=>R],77489)},52665,e=>{"use strict";let t=(0,e.i(50737).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],52665)},89022,e=>{"use strict";let t=(0,e.i(50737).default)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);e.s(["Truck",()=>t],89022)},78536,e=>{"use strict";let t=(0,e.i(50737).default)("hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);e.s(["Hash",()=>t],78536)},71038,e=>{"use strict";var t=e.i(60115),s=e.i(36142),a=e.i(52790),r=e.i(57879),i=e.i(32910),o=e.i(27752),l=e.i(89022),n=e.i(52665),d=e.i(78536);let c=(0,e.i(50737).default)("arrow-left-right",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);var u=e.i(40879),m=e.i(77489),p=e.i(20435);function x(){let e=(0,a.useRouter)(),x=(0,a.useSearchParams)().get("id"),[h,f]=(0,s.useState)(null),[y,g]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{if(!x){m.toast.error("Return ID is missing"),e.push("/dashboard/purchases");return}(async()=>{try{let e=await r.default.get(`/returns/purchase/${x}/`);f(e.data)}catch(e){console.error(e),m.toast.error("Failed to load return details")}finally{g(!1)}})()},[x,e]),y)?(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(o.Loader2,{className:"animate-spin text-red-500",size:40})}):h?(0,t.jsxs)("div",{className:"p-8 max-w-[1200px] mx-auto font-sans min-h-screen pb-32",children:[(0,t.jsx)(m.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-8",children:[(0,t.jsx)(p.default,{href:"/dashboard/purchases",children:(0,t.jsx)("button",{className:"p-3 hover:bg-white rounded-2xl border border-gray-100 transition-all text-gray-400 hover:text-gray-900 shadow-sm",children:(0,t.jsx)(i.ChevronLeft,{size:24})})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"text-3xl font-black text-red-700 tracking-tight flex items-center gap-3",children:[(0,t.jsx)(c,{className:"text-red-500"})," Return Details"]}),(0,t.jsx)("p",{className:"text-gray-500 mt-1",children:"View items returned to distributor and ledger impact."})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{className:"xl:col-span-2 space-y-6",children:[(0,t.jsxs)("div",{className:"bg-red-50/30 p-8 rounded-[2rem] border border-red-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2",children:[(0,t.jsx)(l.Truck,{size:14})," Distributor"]}),(0,t.jsx)("div",{className:"text-lg font-bold text-red-900",children:h.supplier_name||"Unknown"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2",children:[(0,t.jsx)(d.Hash,{size:14})," Return Number"]}),(0,t.jsx)("div",{className:"text-lg font-bold text-red-900",children:h.return_number||`RET-${h.id}`}),(0,t.jsxs)("div",{className:"text-xs font-medium text-red-500",children:["Against Bill: ",h.invoice_number]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-2",children:[(0,t.jsx)(n.Calendar,{size:14})," Return Date"]}),(0,t.jsx)("div",{className:"text-lg font-bold text-red-900",children:new Date(h.return_date||h.created_at).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col",children:[(0,t.jsxs)("div",{className:"p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2",children:[(0,t.jsx)(u.Package,{className:"text-gray-400",size:20}),(0,t.jsx)("h3",{className:"text-lg font-bold text-gray-900",children:"Returned Items"})]}),(0,t.jsx)("div",{className:"flex-1 overflow-x-auto p-4",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-4 px-6",children:"Product"}),(0,t.jsx)("th",{className:"p-4 text-center",children:"Batch"}),(0,t.jsx)("th",{className:"p-4 text-center",children:"Qty Returned"}),(0,t.jsx)("th",{className:"p-4 text-right",children:"Inward Price"}),(0,t.jsx)("th",{className:"p-4 text-right",children:"Total Refund"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50",children:h.items?.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50/50 transition-colors",children:[(0,t.jsx)("td",{className:"p-4 px-6",children:(0,t.jsx)("div",{className:"font-bold text-gray-900",children:e.product_name})}),(0,t.jsx)("td",{className:"p-4 text-center",children:(0,t.jsx)("div",{className:"text-xs font-mono text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded",children:e.batch_number||"-"})}),(0,t.jsx)("td",{className:"p-4 text-center",children:(0,t.jsx)("span",{className:"font-black text-red-600 bg-red-50 px-3 py-1 rounded-lg",children:e.quantity})}),(0,t.jsxs)("td",{className:"p-4 text-right font-medium text-gray-600",children:["₹",Number(e.purchase_price).toFixed(2)]}),(0,t.jsxs)("td",{className:"p-4 text-right font-black text-gray-900",children:["₹",Number(e.total).toFixed(2)]})]},e.id))})]})})]})]}),(0,t.jsx)("div",{className:"space-y-6",children:(0,t.jsxs)("div",{className:"bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5 sticky top-8",children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900 mb-6 flex items-center gap-2",children:"Return Summary"}),(0,t.jsxs)("div",{className:"space-y-4 mb-8",children:[(0,t.jsxs)("div",{className:"flex justify-between text-gray-500 font-medium",children:[(0,t.jsx)("span",{children:"Items Returned"}),(0,t.jsx)("span",{children:h.items?.reduce((e,t)=>e+t.quantity,0)||0})]}),(0,t.jsxs)("div",{className:"flex justify-between items-end pt-4 border-t border-dashed border-gray-200",children:[(0,t.jsx)("span",{className:"text-lg font-bold text-gray-900",children:"Total Refund"}),(0,t.jsxs)("span",{className:"text-4xl font-black text-red-600 tracking-tighter",children:["₹",Number(h.total_amount).toFixed(2)]})]})]}),(0,t.jsx)("div",{className:"bg-green-50 rounded-[2rem] p-6 mb-8 border border-green-100",children:(0,t.jsxs)("p",{className:"text-sm font-medium text-green-800 leading-relaxed",children:["A DEBIT entry of ",(0,t.jsxs)("span",{className:"font-black",children:["₹",Number(h.total_amount).toFixed(2)]})," has been automatically recorded in ",h.supplier_name,"'s ledger. Inventory has also been deducted accordingly."]})}),h.notes&&(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest px-1",children:"Notes"}),(0,t.jsxs)("div",{className:"bg-gray-50 rounded-2xl py-4 px-5 text-gray-700 text-sm italic border border-gray-100",children:['"',h.notes,'"']})]}),h.processed_by_name&&(0,t.jsxs)("div",{className:"mt-8 text-xs text-gray-400 font-medium px-1",children:["Processed by ",h.processed_by_name]})]})})]})]}):(0,t.jsxs)("div",{className:"p-8 max-w-4xl mx-auto text-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-700",children:"Return record not found"}),(0,t.jsx)("button",{onClick:()=>e.push("/dashboard/purchases"),className:"mt-4 text-primary hover:underline",children:"Back to Purchases"})]})}function h(){return(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(o.Loader2,{className:"animate-spin text-red-500",size:40})}),children:(0,t.jsx)(x,{})})}e.s(["default",()=>h],71038)}]);