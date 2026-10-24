(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},5766,e=>{"use strict";let t,r;var a,s=e.i(71645);let i={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,o=/\n+/g,d=(e,t)=>{let r="",a="",s="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+l+";":a+="f"==i[1]?d(l,i):i+"{"+d(l,"k"==i[1]?"":t)+"}":"object"==typeof l?a+=d(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=d.p?d.p(i,l):i+":"+l+";")}return r+(t&&s?t+"{"+s+"}":s)+a},c={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e};function p(e){let t,r,a=this||{},s=e.call?e(a.p):e;return((e,t,r,a,s)=>{var i;let p=u(e),m=c[p]||(c[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!c[m]){let t=p!==e?e:(e=>{let t,r,a=[{}];for(;t=l.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(r=t[3].replace(o," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(o," ").trim();return a[0]})(e);c[m]=d(s?{["@keyframes "+m]:t}:t,r?"":"."+m)}let x=r&&c.g?c.g:null;return r&&(c.g=c[m]),i=c[m],x?t.data=t.data.replace(x,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),m})(s.unshift?s.raw?(t=[].slice.call(arguments,1),r=a.p,s.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(a.target),a.g,a.o,a.k)}p.bind({g:1});let m,x,f,h=p.bind({k:1});function g(e,t){let r=this||{};return function(){let a=arguments;function s(i,l){let n=Object.assign({},i),o=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(o),n.className=p.apply(r,a)+(o?" "+o:""),t&&(n.ref=l);let d=e;return e[0]&&(d=n.as||e,delete n.as),f&&d[0]&&f(n),m(d,n)}return t?t(s):s}}var y=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},j="default",N=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return N(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},w=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},$={},z=(e,t=j)=>{$[t]=N($[t]||k,e),w.forEach(([e,r])=>{e===t&&r($[t])})},E=e=>Object.keys($).forEach(t=>z(e,t)),C=(e=j)=>t=>{z(t,e)},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=e=>(t,r)=>{let a,s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||b()}))(t,e,r);return C(s.toasterId||(a=s.id,Object.keys($).find(e=>$[e].toasts.some(e=>e.id===a))))({type:2,toast:s}),s.id},_=(e,t)=>T("blank")(e,t);_.error=T("error"),_.success=T("success"),_.loading=T("loading"),_.custom=T("custom"),_.dismiss=(e,t)=>{let r={type:3,toastId:e};t?C(t)(r):E(r)},_.dismissAll=e=>_.dismiss(void 0,e),_.remove=(e,t)=>{let r={type:4,toastId:e};t?C(t)(r):E(r)},_.removeAll=e=>_.remove(void 0,e),_.promise=(e,t,r)=>{let a=_.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?y(t.success,e):void 0;return s?_.success(s,{id:a,...r,...null==r?void 0:r.success}):_.dismiss(a),e}).catch(e=>{let s=t.error?y(t.error,e):void 0;s?_.error(s,{id:a,...r,...null==r?void 0:r.error}):_.dismiss(a)}),e};var D=1e3,M=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,I=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,A=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A} 1s linear infinite;
`,H=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,L=h`
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
}`,B=g("div")`
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
    animation: ${L} 0.2s ease-out forwards;
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
`,R=g("div")`
  position: absolute;
`,U=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=h`
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
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(K,null,t):t:"blank"===r?null:s.createElement(U,null,s.createElement(F,{...a}),"loading"!==r&&s.createElement(R,null,"error"===r?s.createElement(I,{...a}):s.createElement(B,{...a})))},V=g("div")`
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
`,G=s.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,s]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=s.createElement(Z,{toast:e}),n=s.createElement(Y,{...e.ariaProps},y(e.message,e));return s.createElement(V,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:l,message:n}):s.createElement(s.Fragment,null,l,n))});a=s.createElement,d.p=void 0,m=a,x=void 0,f=void 0;var J=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let l=s.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:l,className:t,style:r},i)},Q=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,toasterId:l,containerStyle:n,containerClassName:o})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:r,pausedAt:a}=((e={},t=j)=>{let[r,a]=(0,s.useState)($[t]||k),i=(0,s.useRef)($[t]);(0,s.useEffect)(()=>(i.current!==$[t]&&a($[t]),w.push([t,a]),()=>{let e=w.findIndex(([e])=>e===t);e>-1&&w.splice(e,1)}),[t]);let l=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:l}})(e,t),i=(0,s.useRef)(new Map).current,l=(0,s.useCallback)((e,t=D)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),n({type:4,toastId:e})},t);i.set(e,r)},[]);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&_.dismiss(r.id);return}return setTimeout(()=>_.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,s.useCallback)(C(t),[t]),o=(0,s.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,s.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,s.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,s.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},l=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=l.findIndex(t=>t.id===e.id),o=l.filter((e,t)=>t<n&&e.visible).length;return l.filter(e=>e.visible).slice(...a?[o+1]:[0,o]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,s.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)l(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,l]),{toasts:r,handlers:{updateHeight:d,startPause:o,endPause:c,calculateOffset:u}}})(r,l);return s.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let l,n,o=r.position||t,d=c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}),u=(l=o.includes("top"),n=o.includes("center")?{justifyContent:"center"}:o.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(l?1:-1)}px)`,...l?{top:0}:{bottom:0},...n});return s.createElement(J,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?Q:"",style:u},"custom"===r.type?y(r.message,r):i?i(r):s.createElement(G,{toast:r,position:o}))}))};e.s(["Toaster",()=>W,"toast",()=>_],5766)},73375,e=>{"use strict";let t=(0,e.i(75254).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",()=>t],73375)},27516,e=>{"use strict";let t=(0,e.i(75254).default)("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);e.s(["History",()=>t],27516)},74323,e=>{"use strict";let t=(0,e.i(75254).default)("circle-plus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);e.s(["PlusCircle",()=>t],74323)},78583,e=>{"use strict";let t=(0,e.i(75254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>t],78583)},54862,e=>{"use strict";function t(e){if(!e)return null;let t=String(e).match(/Order\s*#\s*([A-Za-z0-9-]+)/i);return t?.[1]??null}function r(e){return null!=e.id&&""!==e.id?`/dashboard/orders/details?id=${e.id}`:e.orderNumber?`/dashboard/orders/details?number=${encodeURIComponent(String(e.orderNumber))}`:null}e.s(["orderDetailsHref",()=>r,"parseOrderNumberFromText",()=>t])},97700,e=>{"use strict";function t(e){if(!e)return null;let t=String(e).match(/^Purchase (?:Inward|Edit \(Reversal\)|Updated):\s*Invoice\s*#\s*(.+?)\s*$/i);return t?.[1]??null}function r(e){return null!=e.id&&""!==e.id?`/dashboard/purchases/edit?id=${e.id}`:e.invoiceNumber?`/dashboard/purchases/edit?number=${encodeURIComponent(e.invoiceNumber)}`:null}e.s(["parsePurchaseInvoiceNumberFromText",()=>t,"purchaseDetailsHref",()=>r])},84510,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(18566),s=e.i(16973),i=e.i(27516),l=e.i(73375),n=e.i(31278),o=e.i(88844),d=e.i(5766),c=e.i(22016);let u=(0,e.i(75254).default)("circle-minus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);var p=e.i(74323),m=e.i(84614),x=e.i(75157);function f({row:e,className:r}){let a=function(e){let t=e.batch_id;if(null==t)return null;if("number"==typeof t)return Number.isFinite(t)?String(t):null;if("string"==typeof t){let e=t.trim();return""===e?null:e}return null}(e);return a?(0,t.jsxs)("div",{"aria-label":`Batch ${a}`,className:(0,x.cn)("text-[10px] text-muted-foreground font-normal truncate tracking-wide",r),children:["Batch ",a]}):null}var h=e.i(78583),g=e.i(97700),y=e.i(54862);function b({row:e,className:r}){let a=function(e){var t=e.reason;if(null==t)return null;let r=t.trim();return""===r?null:r}(e);if(!a)return null;let s=(0,y.parseOrderNumberFromText)(a),i=(0,g.parsePurchaseInvoiceNumberFromText)(a),l=s?(0,y.orderDetailsHref)({orderNumber:s}):(0,g.purchaseDetailsHref)({invoiceNumber:i});return(0,t.jsxs)("div",{className:(0,x.cn)("flex items-center gap-2 font-bold text-gray-900",r),children:[(0,t.jsx)(h.FileText,{size:12,className:"text-gray-400"}),l?(0,t.jsx)(c.default,{href:l,"aria-label":`Reason ${a}`,className:"text-primary hover:underline",onClick:e=>e.stopPropagation(),children:a}):(0,t.jsx)("span",{"aria-label":`Reason ${a}`,children:a})]})}function v({writeOff:e,className:r}){let a=function(e){let t=e.batch_number;if(null==t)return null;if("number"==typeof t)return Number.isFinite(t)?String(t):null;if(null==t)return null;let r=t.trim();return""===r?null:r}(e);return a?(0,t.jsxs)("div",{"aria-label":`Batch ${a}`,className:(0,x.cn)("text-xs text-muted-foreground font-normal",r),children:["Batch ",a]}):null}function j(e){return"added"===e?"text-green-600 bg-green-50":"sold"===e?"text-blue-600 bg-blue-50":"removed"===e?"text-red-600 bg-red-50":"text-gray-600 bg-gray-50"}function N({logs:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"hidden md:block overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-6",children:"Date & Time"}),(0,t.jsx)("th",{className:"p-6",children:"Type"}),(0,t.jsx)("th",{className:"p-6",children:"Movement"}),(0,t.jsx)("th",{className:"p-6",children:"Balance"}),(0,t.jsx)("th",{className:"p-6",children:"Reason / By"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50 uppercase text-[11px]",children:0===e.length?(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:5,className:"p-20 text-center text-gray-400 italic",children:"No history recorded for this product."})}):e.map(e=>{let r=e.quantity_change>0;return(0,t.jsxs)("tr",{className:"hover:bg-gray-50/30 transition-colors",children:[(0,t.jsx)("td",{className:"p-6",children:(0,t.jsx)("div",{className:"font-bold text-gray-900 whitespace-nowrap",children:new Date(e.created_at).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)("span",{className:`px-2 py-1 rounded-md font-black tracking-widest text-[9px] w-fit ${j(e.log_type)}`,children:e.log_type}),(0,t.jsx)(f,{row:e})]})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:`flex items-center gap-2 text-base font-black ${r?"text-green-600":"text-red-500"}`,children:[r?(0,t.jsx)(p.PlusCircle,{size:14}):(0,t.jsx)(u,{size:14}),Math.abs(e.quantity_change)]})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-[8px] text-gray-400 font-bold",children:"New Balance"}),(0,t.jsx)("span",{className:"text-sm font-black text-gray-900",children:e.new_quantity})]})}),(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)(b,{row:e}),(0,t.jsxs)("div",{className:"flex items-center gap-2 font-bold text-gray-400 italic",children:[(0,t.jsx)(m.User,{size:10})," ",e.created_by]}),(0,t.jsx)(v,{writeOff:e})]})})]},e.id)})})]})}),(0,t.jsx)("div",{className:"block md:hidden divide-y divide-gray-100",children:0===e.length?(0,t.jsx)("div",{className:"p-12 text-center text-gray-400 italic",children:"No history recorded for this product."}):e.map(e=>{let r=e.quantity_change>0;return(0,t.jsxs)("div",{className:"p-4 flex flex-col gap-3",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start gap-3",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-1 min-w-0",children:[(0,t.jsx)("div",{className:"font-bold text-gray-900 text-xs",children:new Date(e.created_at).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})}),(0,t.jsx)("span",{className:`px-2 py-1 rounded-md font-black tracking-widest text-[9px] uppercase w-fit ${j(e.log_type)}`,children:e.log_type}),(0,t.jsx)(f,{row:e})]}),(0,t.jsxs)("div",{className:`flex items-center gap-1 text-base font-black ${r?"text-green-600":"text-red-500"}`,children:[r?(0,t.jsx)(p.PlusCircle,{size:14}):(0,t.jsx)(u,{size:14}),Math.abs(e.quantity_change)]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between text-[11px]",children:[(0,t.jsx)("span",{className:"text-[8px] text-gray-400 font-bold uppercase",children:"New Balance"}),(0,t.jsx)("span",{className:"text-sm font-black text-gray-900",children:e.new_quantity})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsx)(b,{row:e}),(0,t.jsxs)("div",{className:"flex items-center gap-2 font-bold text-gray-400 italic text-[11px]",children:[(0,t.jsx)(m.User,{size:10})," ",e.created_by]}),(0,t.jsx)(v,{writeOff:e})]})]},e.id)})})]})}function w(){let e=(0,a.useSearchParams)().get("id"),[u,p]=(0,r.useState)([]),[m,x]=(0,r.useState)(null),[f,h]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{(async()=>{if(e){h(!0);try{let[t,r]=await Promise.all([s.default.get(`/products/erp/inventory-ledger/?product_id=${e}`),s.default.get(`/products/${e}/`)]);p(t.data),x(r.data)}catch(e){d.toast.error("Failed to load inventory history")}finally{h(!1)}}})()},[e]),f)?(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(n.Loader2,{className:"animate-spin text-primary",size:40})}):m?(0,t.jsxs)("div",{className:"p-8 max-w-5xl mx-auto font-sans min-h-screen pb-32",children:[(0,t.jsx)(d.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-10",children:[(0,t.jsx)(c.default,{href:"/dashboard/products",children:(0,t.jsx)("button",{className:"p-3 hover:bg-white rounded-2xl border border-gray-100 transition-all text-gray-400 hover:text-gray-900 shadow-sm",children:(0,t.jsx)(l.ChevronLeft,{size:24})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-3xl font-black text-gray-900 tracking-tight uppercase",children:m.name}),(0,t.jsxs)("p",{className:"text-gray-500 mt-1 font-medium flex items-center gap-2",children:[(0,t.jsx)(i.History,{size:16})," Inventory Audit Trail"]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-10",children:[(0,t.jsxs)("div",{className:"bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-center border border-gray-800",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2",children:"Current Stock"}),(0,t.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,t.jsx)("span",{className:"text-5xl font-black tracking-tighter",children:m.quantity}),(0,t.jsx)("span",{className:"text-lg font-bold text-gray-500 uppercase",children:m.unit||"Units"})]})]}),(0,t.jsxs)("div",{className:"md:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-8",children:[(0,t.jsx)("div",{className:"size-16 bg-primary/10 text-primary rounded-[1.5rem] flex items-center justify-center",children:(0,t.jsx)(o.Package,{size:32})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900",children:"Total Movements"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Tracking all inward & outward changes"})]})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden",children:[(0,t.jsx)("div",{className:"p-8 border-b border-gray-100 bg-gray-50/30",children:(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900",children:"Transition History"})}),(0,t.jsx)(N,{logs:u})]})]}):(0,t.jsx)("div",{className:"p-20 text-center",children:"Product not found."})}function k(){return(0,t.jsx)(r.Suspense,{fallback:(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(n.Loader2,{className:"animate-spin text-primary",size:40})}),children:(0,t.jsx)(w,{})})}e.s(["default",()=>k],84510)}]);