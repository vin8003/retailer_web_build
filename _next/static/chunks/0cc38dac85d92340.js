(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},5766,e=>{"use strict";let t,a;var s,r=e.i(71645);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let a="",s="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":s+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(i,o):i+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+s},c={},p=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+p(e[a]);return t}return e};function u(e){let t,a,s=this||{},r=e.call?e(s.p):e;return((e,t,a,s,r)=>{var i;let u=p(e),m=c[u]||(c[u]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(u));if(!c[m]){let t=u!==e?e:(e=>{let t,a,s=[{}];for(;t=o.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(a=t[3].replace(n," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(n," ").trim();return s[0]})(e);c[m]=d(r?{["@keyframes "+m]:t}:t,a?"":"."+m)}let h=a&&c.g?c.g:null;return a&&(c.g=c[m]),i=c[m],h?t.data=t.data.replace(h,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),m})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=s.p,r.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(s.target),s.g,s.o,s.k)}u.bind({g:1});let m,h,f,x=u.bind({k:1});function y(e,t){let a=this||{};return function(){let s=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;a.p=Object.assign({theme:h&&h()},l),a.o=/ *go\d+/.test(n),l.className=u.apply(a,s)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),f&&d[0]&&f(l),m(d,l)}return t?t(r):r}}var g=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},j="default",w=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},z=(e,t=j)=>{E[t]=w(E[t]||k,e),N.forEach(([e,a])=>{e===t&&a(E[t])})},$=e=>Object.keys(E).forEach(t=>z(e,t)),C=(e=j)=>t=>{z(t,e)},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=e=>(t,a)=>{let s,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||b()}))(t,e,a);return C(r.toasterId||(s=r.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===s))))({type:2,toast:r}),r.id},_=(e,t)=>T("blank")(e,t);_.error=T("error"),_.success=T("success"),_.loading=T("loading"),_.custom=T("custom"),_.dismiss=(e,t)=>{let a={type:3,toastId:e};t?C(t)(a):$(a)},_.dismissAll=e=>_.dismiss(void 0,e),_.remove=(e,t)=>{let a={type:4,toastId:e};t?C(t)(a):$(a)},_.removeAll=e=>_.remove(void 0,e),_.promise=(e,t,a)=>{let s=_.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?g(t.success,e):void 0;return r?_.success(r,{id:s,...a,...null==a?void 0:a.success}):_.dismiss(s),e}).catch(e=>{let r=t.error?g(t.error,e):void 0;r?_.error(r,{id:s,...a,...null==a?void 0:a.error}):_.dismiss(s)}),e};var A=1e3,D=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,S=y("div")`
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
    animation: ${O} 0.15s ease-out forwards;
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
`,I=x`
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
  animation: ${I} 1s linear infinite;
`,H=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=x`
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
}`,R=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,q=y("div")`
  position: absolute;
`,B=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=x`
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
`,V=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?r.createElement(K,null,t):t:"blank"===a?null:r.createElement(B,null,r.createElement(L,{...s}),"loading"!==a&&r.createElement(q,null,"error"===a?r.createElement(S,{...s}):r.createElement(R,{...s})))},Y=y("div")`
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
`,Z=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,G=r.memo(({toast:e,position:t,style:a,children:s})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[s,r]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${x(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=r.createElement(V,{toast:e}),l=r.createElement(Z,{...e.ariaProps},g(e.message,e));return r.createElement(Y,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof s?s({icon:o,message:l}):r.createElement(r.Fragment,null,o,l))});s=r.createElement,d.p=void 0,m=s,h=void 0,f=void 0;var J=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let o=r.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return r.createElement("div",{ref:o,className:t,style:a},i)},Q=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,toasterId:o,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:a,pausedAt:s}=((e={},t=j)=>{let[a,s]=(0,r.useState)(E[t]||k),i=(0,r.useRef)(E[t]);(0,r.useEffect)(()=>(i.current!==E[t]&&s(E[t]),N.push([t,s]),()=>{let e=N.findIndex(([e])=>e===t);e>-1&&N.splice(e,1)}),[t]);let o=a.toasts.map(t=>{var a,s,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||M[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:o}})(e,t),i=(0,r.useRef)(new Map).current,o=(0,r.useCallback)((e,t=A)=>{if(i.has(e))return;let a=setTimeout(()=>{i.delete(e),l({type:4,toastId:e})},t);i.set(e,a)},[]);(0,r.useEffect)(()=>{if(s)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let s=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(s<0){a.visible&&_.dismiss(a.id);return}return setTimeout(()=>_.dismiss(a.id,t),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,s,t]);let l=(0,r.useCallback)(C(t),[t]),n=(0,r.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,r.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,r.useCallback)(()=>{s&&l({type:6,time:Date.now()})},[s,l]),p=(0,r.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=t||{},o=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,r.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:p}}})(a,o);return r.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let o,l,n=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}),p=(o=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...l});return r.createElement(J,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?Q:"",style:p},"custom"===a.type?g(a.message,a):i?i(a):r.createElement(G,{toast:a,position:n}))}))};e.s(["Toaster",()=>W,"toast",()=>_],5766)},73375,e=>{"use strict";let t=(0,e.i(75254).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",()=>t],73375)},27516,e=>{"use strict";let t=(0,e.i(75254).default)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);e.s(["History",()=>t],27516)},74323,e=>{"use strict";let t=(0,e.i(75254).default)("circle-plus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);e.s(["PlusCircle",()=>t],74323)},78583,e=>{"use strict";let t=(0,e.i(75254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>t],78583)},84510,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(18566),r=e.i(16973),i=e.i(27516),o=e.i(73375),l=e.i(31278),n=e.i(88844),d=e.i(74323);let c=(0,e.i(75254).default)("circle-minus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);var p=e.i(78583),u=e.i(84614),m=e.i(5766),h=e.i(22016);function f(){let e=(0,s.useSearchParams)();(0,s.useRouter)();let f=e.get("id"),[x,y]=(0,a.useState)([]),[g,b]=(0,a.useState)(null),[v,j]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{(async()=>{if(f){j(!0);try{let[e,t]=await Promise.all([r.default.get(`/products/erp/inventory-ledger/?product_id=${f}`),r.default.get(`/products/${f}/`)]);y(e.data),b(t.data)}catch(e){m.toast.error("Failed to load inventory history")}finally{j(!1)}}})()},[f]),v)?(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(l.Loader2,{className:"animate-spin text-primary",size:40})}):g?(0,t.jsxs)("div",{className:"p-8 max-w-5xl mx-auto font-sans min-h-screen pb-32",children:[(0,t.jsx)(m.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-10",children:[(0,t.jsx)(h.default,{href:"/dashboard/products",children:(0,t.jsx)("button",{className:"p-3 hover:bg-white rounded-2xl border border-gray-100 transition-all text-gray-400 hover:text-gray-900 shadow-sm",children:(0,t.jsx)(o.ChevronLeft,{size:24})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-3xl font-black text-gray-900 tracking-tight uppercase",children:g.name}),(0,t.jsxs)("p",{className:"text-gray-500 mt-1 font-medium flex items-center gap-2",children:[(0,t.jsx)(i.History,{size:16})," Inventory Audit Trail"]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-10",children:[(0,t.jsxs)("div",{className:"bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-center border border-gray-800",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2",children:"Current Stock"}),(0,t.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,t.jsx)("span",{className:"text-5xl font-black tracking-tighter",children:g.quantity}),(0,t.jsx)("span",{className:"text-lg font-bold text-gray-500 uppercase",children:g.unit||"Units"})]})]}),(0,t.jsxs)("div",{className:"md:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-8",children:[(0,t.jsx)("div",{className:"size-16 bg-primary/10 text-primary rounded-[1.5rem] flex items-center justify-center",children:(0,t.jsx)(n.Package,{size:32})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900",children:"Total Movements"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Tracking all inward & outward changes"})]})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden",children:[(0,t.jsx)("div",{className:"p-8 border-b border-gray-100 bg-gray-50/30",children:(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900",children:"Transition History"})}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-6",children:"Date & Time"}),(0,t.jsx)("th",{className:"p-6",children:"Type"}),(0,t.jsx)("th",{className:"p-6",children:"Movement"}),(0,t.jsx)("th",{className:"p-6",children:"Balance"}),(0,t.jsx)("th",{className:"p-6",children:"Reason / By"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50 uppercase text-[11px]",children:0===x.length?(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:5,className:"p-20 text-center text-gray-400 italic",children:"No history recorded for this product."})}):x.map(e=>{let a=e.quantity_change>0,s="added"===e.log_type?"text-green-600 bg-green-50":"sold"===e.log_type?"text-blue-600 bg-blue-50":"removed"===e.log_type?"text-red-600 bg-red-50":"text-gray-600 bg-gray-50";return(0,t.jsxs)("tr",{className:"hover:bg-gray-50/30 transition-colors",children:[(0,t.jsx)("td",{className:"p-6",children:(0,t.jsx)("div",{className:"font-bold text-gray-900 whitespace-nowrap",children:new Date(e.created_at).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsx)("span",{className:`px-2 py-1 rounded-md font-black tracking-widest text-[9px] ${s}`,children:e.log_type})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:`flex items-center gap-2 text-base font-black ${a?"text-green-600":"text-red-500"}`,children:[a?(0,t.jsx)(d.PlusCircle,{size:14}):(0,t.jsx)(c,{size:14}),Math.abs(e.quantity_change)]})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-[8px] text-gray-400 font-bold",children:"New Balance"}),(0,t.jsx)("span",{className:"text-sm font-black text-gray-900",children:e.new_quantity})]})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 font-bold text-gray-900",children:[(0,t.jsx)(p.FileText,{size:12,className:"text-gray-400"}),e.reason||"N/A"]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 font-bold text-gray-400 italic",children:[(0,t.jsx)(u.User,{size:10})," ",e.created_by]})]})})]},e.id)})})]})})]})]}):(0,t.jsx)("div",{className:"p-20 text-center",children:"Product not found."})}function x(){return(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(l.Loader2,{className:"animate-spin text-primary",size:40})}),children:(0,t.jsx)(f,{})})}e.s(["default",()=>x],84510)}]);