(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},55436,e=>{"use strict";let t=(0,e.i(75254).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",()=>t],55436)},5766,e=>{"use strict";let t,a;var s,r=e.i(71645);let i={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,o=/\n+/g,d=(e,t)=>{let a="",s="",r="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+l+";":s+="f"==i[1]?d(l,i):i+"{"+d(l,"k"==i[1]?"":t)+"}":"object"==typeof l?s+=d(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(i,l):i+":"+l+";")}return a+(t&&r?t+"{"+r+"}":r)+s},c={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e};function p(e){let t,a,s=this||{},r=e.call?e(s.p):e;return((e,t,a,s,r)=>{var i;let p=m(e),u=c[p]||(c[p]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(p));if(!c[u]){let t=p!==e?e:(e=>{let t,a,s=[{}];for(;t=l.exec(e.replace(n,""));)t[4]?s.shift():t[3]?(a=t[3].replace(o," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(o," ").trim();return s[0]})(e);c[u]=d(r?{["@keyframes "+u]:t}:t,a?"":"."+u)}let x=a&&c.g?c.g:null;return a&&(c.g=c[u]),i=c[u],x?t.data=t.data.replace(x,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),u})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=s.p,r.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(s.target),s.g,s.o,s.k)}p.bind({g:1});let u,x,h,g=p.bind({k:1});function b(e,t){let a=this||{};return function(){let s=arguments;function r(i,l){let n=Object.assign({},i),o=n.className||r.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(o),n.className=p.apply(a,s)+(o?" "+o:""),t&&(n.ref=l);let d=e;return e[0]&&(d=n.as||e,delete n.as),h&&d[0]&&h(n),u(d,n)}return t?t(r):r}}var f=(e,t)=>"function"==typeof e?e(t):e,y=(t=0,()=>(++t).toString()),v=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},N="default",j=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},w=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},_={},C=(e,t=N)=>{_[t]=j(_[t]||k,e),w.forEach(([e,a])=>{e===t&&a(_[t])})},z=e=>Object.keys(_).forEach(t=>C(e,t)),A=(e=N)=>t=>{C(t,e)},E={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=e=>(t,a)=>{let s,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||y()}))(t,e,a);return A(r.toasterId||(s=r.id,Object.keys(_).find(e=>_[e].toasts.some(e=>e.id===s))))({type:2,toast:r}),r.id},L=(e,t)=>S("blank")(e,t);L.error=S("error"),L.success=S("success"),L.loading=S("loading"),L.custom=S("custom"),L.dismiss=(e,t)=>{let a={type:3,toastId:e};t?A(t)(a):z(a)},L.dismissAll=e=>L.dismiss(void 0,e),L.remove=(e,t)=>{let a={type:4,toastId:e};t?A(t)(a):z(a)},L.removeAll=e=>L.remove(void 0,e),L.promise=(e,t,a)=>{let s=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?f(t.success,e):void 0;return r?L.success(r,{id:s,...a,...null==a?void 0:a.success}):L.dismiss(s),e}).catch(e=>{let r=t.error?f(t.error,e):void 0;r?L.error(r,{id:s,...a,...null==a?void 0:a.error}):L.dismiss(s)}),e};var D=1e3,I=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,O=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
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
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,R=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,F=g`
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
}`,U=b("div")`
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
`,B=b("div")`
  position: absolute;
`,q=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?r.createElement(K,null,t):t:"blank"===a?null:r.createElement(q,null,r.createElement(T,{...s}),"loading"!==a&&r.createElement(B,null,"error"===a?r.createElement(O,{...s}):r.createElement(U,{...s})))},Y=b("div")`
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
`,Z=b("div")`
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
`];return{animation:t?`${g(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=r.createElement(J,{toast:e}),n=r.createElement(Z,{...e.ariaProps},f(e.message,e));return r.createElement(Y,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof s?s({icon:l,message:n}):r.createElement(r.Fragment,null,l,n))});s=r.createElement,d.p=void 0,u=s,x=void 0,h=void 0;var Q=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let l=r.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return r.createElement("div",{ref:l,className:t,style:a},i)},V=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,toasterId:l,containerStyle:n,containerClassName:o})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:a,pausedAt:s}=((e={},t=N)=>{let[a,s]=(0,r.useState)(_[t]||k),i=(0,r.useRef)(_[t]);(0,r.useEffect)(()=>(i.current!==_[t]&&s(_[t]),w.push([t,s]),()=>{let e=w.findIndex(([e])=>e===t);e>-1&&w.splice(e,1)}),[t]);let l=a.toasts.map(t=>{var a,s,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||E[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:l}})(e,t),i=(0,r.useRef)(new Map).current,l=(0,r.useCallback)((e,t=D)=>{if(i.has(e))return;let a=setTimeout(()=>{i.delete(e),n({type:4,toastId:e})},t);i.set(e,a)},[]);(0,r.useEffect)(()=>{if(s)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let s=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(s<0){a.visible&&L.dismiss(a.id);return}return setTimeout(()=>L.dismiss(a.id,t),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,s,t]);let n=(0,r.useCallback)(A(t),[t]),o=(0,r.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,r.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,r.useCallback)(()=>{s&&n({type:6,time:Date.now()})},[s,n]),m=(0,r.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=t||{},l=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=l.findIndex(t=>t.id===e.id),o=l.filter((e,t)=>t<n&&e.visible).length;return l.filter(e=>e.visible).slice(...s?[o+1]:[0,o]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,r.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)l(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[a,l]),{toasts:a,handlers:{updateHeight:d,startPause:o,endPause:c,calculateOffset:m}}})(a,l);return r.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let l,n,o=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}),m=(l=o.includes("top"),n=o.includes("center")?{justifyContent:"center"}:o.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(l?1:-1)}px)`,...l?{top:0}:{bottom:0},...n});return r.createElement(Q,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?V:"",style:m},"custom"===a.type?f(a.message,a):i?i(a):r.createElement(G,{toast:a,position:o}))}))};e.s(["Toaster",()=>W,"toast",()=>L],5766)},61659,e=>{"use strict";let t=(0,e.i(75254).default)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);e.s(["CreditCard",()=>t],61659)},50651,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(31278);e.s(["InfiniteScrollTrigger",0,({onLoadMore:e,hasMore:r,isLoading:i})=>{let l=(0,a.useRef)(null);return((0,a.useEffect)(()=>{let t=new IntersectionObserver(t=>{t[0].isIntersecting&&r&&!i&&e()},{threshold:.1});return l.current&&t.observe(l.current),()=>{l.current&&t.unobserve(l.current)}},[r,i,e]),r)?(0,t.jsx)("div",{ref:l,className:"py-8 flex justify-center w-full",children:i&&(0,t.jsxs)("div",{className:"flex items-center gap-2 text-muted-foreground animate-pulse",children:[(0,t.jsx)(s.Loader2,{className:"h-5 w-5 animate-spin"}),(0,t.jsx)("span",{className:"text-sm font-medium",children:"Loading more records..."})]})}):null}])},79002,e=>{"use strict";let t=(0,e.i(75254).default)("user-plus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);e.s(["UserPlus",()=>t],79002)},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>t],72520)},43432,e=>{"use strict";let t=(0,e.i(75254).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>t],43432)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>t],63488)},63875,e=>{"use strict";var t=e.i(43476),a=e.i(71645),s=e.i(16973),r=e.i(10980),i=e.i(55436),l=e.i(84614),n=e.i(43432),o=e.i(72520),d=e.i(61659),c=e.i(31278),m=e.i(79002),p=e.i(63488),u=e.i(5766),x=e.i(22016),h=e.i(50651);function g(){let[e,g]=(0,a.useState)([]),[b,f]=(0,a.useState)(!0),[y,v]=(0,a.useState)(!1),[N,j]=(0,a.useState)(null),[w,k]=(0,a.useState)(""),[_,C]=(0,a.useState)(!1),[z,A]=(0,a.useState)({company_name:"",contact_person:"",phone_number:"",email:"",address:""});(0,a.useEffect)(()=>{let e=setTimeout(()=>{E(!1)},300);return()=>clearTimeout(e)},[w]);let E=async(e=!1)=>{e?v(!0):f(!0);try{let t={};if(w&&(t.search=w),e&&N){let e=new URL(N).searchParams.get("page");e&&(t.page=e)}let a=await s.default.get("/products/erp/suppliers/",{params:t}),r=a.data.results||a.data,i=a.data.next||null;e?g(e=>[...e,...r]):g(r),j(i)}catch(e){u.toast.error("Failed to load suppliers")}finally{f(!1),v(!1)}},S=async e=>{e.preventDefault();try{await s.default.post("/products/erp/suppliers/",z),u.toast.success("Supplier added successfully"),C(!1),E(),A({company_name:"",contact_person:"",phone_number:"",email:"",address:""})}catch(e){u.toast.error("Failed to add supplier")}},L=e.filter(e=>Number(e.balance_due)>0).reduce((e,t)=>e+Number(t.balance_due),0),D=e.filter(e=>0>Number(e.balance_due)).reduce((e,t)=>e+Math.abs(Number(t.balance_due)),0);return(0,t.jsxs)("div",{className:"p-4 sm:p-8 max-w-7xl mx-auto font-sans",children:[(0,t.jsx)(u.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"p-2 sm:p-2.5 bg-primary/10 text-primary rounded-xl overflow-hidden relative",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-primary/20 animate-pulse opacity-50"}),(0,t.jsx)(r.BookOpen,{size:24,className:"relative z-10 sm:hidden"}),(0,t.jsx)(r.BookOpen,{size:28,className:"relative z-10 hidden sm:block"})]}),"Khata & Suppliers"]}),(0,t.jsx)("p",{className:"text-gray-500 mt-2 ml-12 sm:ml-14 text-sm sm:text-base",children:"Manage distributor relations and outstanding credit balances."})]}),(0,t.jsxs)("button",{onClick:()=>C(!0),className:"w-full sm:w-auto justify-center bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center gap-2 transition-all hover:-translate-y-1 active:scale-95",children:[(0,t.jsx)(m.UserPlus,{size:20})," Add New Distributor"]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 md:mb-10",children:[(0,t.jsxs)("div",{className:"bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-red-100 shadow-sm relative overflow-hidden group",children:[(0,t.jsx)("div",{className:"absolute -right-6 -top-6 bg-red-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-red-400 uppercase tracking-widest mb-1",children:"Total Debt"}),(0,t.jsxs)("h3",{className:"text-2xl sm:text-3xl font-black text-red-600 tracking-tight",children:["₹",L.toLocaleString("en-IN")]}),(0,t.jsx)("p",{className:"text-[10px] text-gray-400 mt-1 uppercase font-bold",children:"LIFETIME ALL SUPPLIERS"})]})]}),D>0&&(0,t.jsxs)("div",{className:"bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-green-100 shadow-sm relative overflow-hidden group",children:[(0,t.jsx)("div",{className:"absolute -right-6 -top-6 bg-green-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-green-500 uppercase tracking-widest mb-1",children:"Advance Paid"}),(0,t.jsxs)("h3",{className:"text-2xl sm:text-3xl font-black text-green-600 tracking-tight",children:["₹",D.toLocaleString("en-IN")]}),(0,t.jsx)("p",{className:"text-[10px] text-gray-400 mt-1 uppercase font-bold",children:"Extra payments pool"})]})]}),(0,t.jsxs)("div",{className:"bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1",children:"Credit Invoices"}),(0,t.jsx)("h3",{className:"text-2xl sm:text-3xl font-black text-gray-900",children:e.filter(e=>Number(e.balance_due)>0).length})]}),(0,t.jsxs)("div",{className:"size-10 sm:size-14 bg-orange-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-orange-500 flex-shrink-0",children:[(0,t.jsx)(d.CreditCard,{size:20,className:"sm:hidden"}),(0,t.jsx)(d.CreditCard,{size:28,className:"hidden sm:block"})]})]}),(0,t.jsxs)("div",{className:`bg-white p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-gray-100 shadow-sm group hover:border-primary/20 transition-all cursor-pointer ${D>0?"":"col-span-2 md:col-span-2"}`,children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2",children:"Largest Creditor"}),e.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"text-lg sm:text-xl font-black text-gray-900 line-clamp-1",children:e.sort((e,t)=>Number(t.balance_due)-Number(e.balance_due))[0].company_name}),(0,t.jsxs)("p",{className:"text-xs sm:text-sm text-primary font-bold mt-1 uppercase tracking-wider",children:["₹",Math.max(0,Number(e.sort((e,t)=>Number(t.balance_due)-Number(e.balance_due))[0].balance_due)).toLocaleString("en-IN")," Due"]})]}):(0,t.jsx)("h3",{className:"text-lg sm:text-xl font-bold text-gray-300",children:"No data"})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-3xl sm:rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden",children:[(0,t.jsxs)("div",{className:"p-4 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4",children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900",children:"Distributor List"}),(0,t.jsxs)("div",{className:"relative w-full md:w-96",children:[(0,t.jsx)(i.Search,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:18}),(0,t.jsx)("input",{type:"text",placeholder:"Search by company or phone...",value:w,onChange:e=>k(e.target.value),className:"w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-gray-900 placeholder:text-gray-400"})]})]}),(0,t.jsx)("div",{className:"hidden md:block overflow-x-auto p-4",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-6",children:"Company Name"}),(0,t.jsx)("th",{className:"p-6",children:"Contact Person"}),(0,t.jsx)("th",{className:"p-6",children:"Contact Details"}),(0,t.jsx)("th",{className:"p-6 text-right",children:"Outstanding Balance"}),(0,t.jsx)("th",{className:"p-6"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50",children:b?(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{colSpan:5,className:"p-20 text-center text-gray-400",children:[(0,t.jsx)(c.Loader2,{className:"animate-spin mx-auto mb-4"}),"Loading ledger summary..."]})}):0===e.length?(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{colSpan:5,className:"p-20 text-center text-gray-400",children:[(0,t.jsx)("p",{className:"text-lg font-bold text-gray-600 mb-1",children:"No suppliers found"}),(0,t.jsx)("p",{className:"text-sm",children:"Add a new distributor to start managing their khata."})]})}):e.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50/50 transition-colors group",children:[(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"size-12 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center font-black text-xl border border-gray-100 uppercase group-hover:bg-primary group-hover:text-white transition-all",children:e.company_name.charAt(0)}),(0,t.jsx)("div",{className:"font-black text-gray-900 text-lg uppercase tracking-tight",children:e.company_name})]})}),(0,t.jsx)("td",{className:"p-6 font-medium text-gray-600",children:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(l.User,{size:14,className:"text-gray-300"}),e.contact_person||"N/A"]})}),(0,t.jsx)("td",{className:"p-6 text-sm",children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 font-bold",children:[(0,t.jsx)(n.Phone,{size:14,className:"text-gray-300"}),e.phone_number]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-400",children:[(0,t.jsx)(p.Mail,{size:14,className:"text-gray-300"}),e.email||"No email"]})]})}),(0,t.jsxs)("td",{className:"p-6 text-right",children:[(0,t.jsxs)("div",{className:`text-2xl font-black ${Number(e.balance_due)>0?"text-red-600":0>Number(e.balance_due)?"text-green-600":"text-gray-900"}`,children:["₹",Math.abs(Number(e.balance_due)).toLocaleString("en-IN")]}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1",children:Number(e.balance_due)>0?"Due Amount":0>Number(e.balance_due)?"Advance Paid":"Settled"})]}),(0,t.jsx)("td",{className:"p-6 text-right",children:(0,t.jsx)(x.default,{href:`/dashboard/suppliers/ledger?id=${e.id}`,children:(0,t.jsx)("button",{className:"bg-gray-50 hover:bg-primary hover:text-white p-3 rounded-2xl text-gray-400 transition-all group-hover:shadow-lg group-hover:shadow-primary/20",children:(0,t.jsx)(o.ArrowRight,{size:20})})})})]},e.id))})]})}),(0,t.jsx)("div",{className:"block md:hidden divide-y divide-gray-100",children:b?(0,t.jsxs)("div",{className:"p-12 text-center text-gray-400",children:[(0,t.jsx)(c.Loader2,{className:"animate-spin mx-auto mb-4"}),"Loading ledger summary..."]}):0===e.length?(0,t.jsxs)("div",{className:"p-12 text-center text-gray-400",children:[(0,t.jsx)("p",{className:"text-base font-bold text-gray-600 mb-1",children:"No suppliers found"}),(0,t.jsx)("p",{className:"text-xs",children:"Add a new distributor to start managing their khata."})]}):e.map(e=>(0,t.jsxs)("div",{className:"p-4 flex flex-col gap-3 hover:bg-gray-50/50 transition-colors",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"size-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center font-black text-base border border-gray-100 uppercase flex-shrink-0",children:e.company_name.charAt(0)}),(0,t.jsxs)("div",{className:"min-w-0",children:[(0,t.jsx)("div",{className:"font-black text-gray-900 text-sm uppercase tracking-tight truncate max-w-[150px]",children:e.company_name}),(0,t.jsxs)("div",{className:"flex items-center gap-1 text-[11px] text-gray-500 mt-0.5",children:[(0,t.jsx)(l.User,{size:10,className:"text-gray-400 flex-shrink-0"}),(0,t.jsx)("span",{className:"truncate max-w-[100px]",children:e.contact_person||"N/A"})]})]})]}),(0,t.jsxs)("div",{className:"text-right flex-shrink-0",children:[(0,t.jsxs)("div",{className:`text-base font-black ${Number(e.balance_due)>0?"text-red-600":0>Number(e.balance_due)?"text-green-600":"text-gray-900"}`,children:["₹",Math.abs(Number(e.balance_due)).toLocaleString("en-IN")]}),(0,t.jsx)("div",{className:"text-[9px] font-bold text-gray-400 uppercase tracking-wider",children:Number(e.balance_due)>0?"Due Amount":0>Number(e.balance_due)?"Advance Paid":"Settled"})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between bg-gray-50/70 p-2.5 rounded-xl border border-gray-100/50",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-0.5 text-xs text-gray-600 min-w-0",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5 font-bold",children:[(0,t.jsx)(n.Phone,{size:12,className:"text-gray-400 flex-shrink-0"}),(0,t.jsx)("span",{children:e.phone_number})]}),e.email&&(0,t.jsxs)("div",{className:"flex items-center gap-1.5 text-[11px] text-gray-400",children:[(0,t.jsx)(p.Mail,{size:11,className:"text-gray-400 flex-shrink-0"}),(0,t.jsx)("span",{className:"truncate max-w-[160px]",children:e.email})]})]}),(0,t.jsx)(x.default,{href:`/dashboard/suppliers/ledger?id=${e.id}`,className:"flex-shrink-0",children:(0,t.jsxs)("button",{className:"bg-white hover:bg-primary text-gray-500 hover:text-white px-3 py-2 rounded-lg border border-gray-200 transition-all flex items-center gap-1 text-[11px] font-bold shadow-sm",children:["Ledger ",(0,t.jsx)(o.ArrowRight,{size:12})]})})]})]},e.id))})]}),_&&(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:(0,t.jsxs)("div",{className:"bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl p-10 animate-in zoom-in-95 duration-200",children:[(0,t.jsx)("h2",{className:"text-2xl font-black text-gray-900 mb-2",children:"New Distributor"}),(0,t.jsx)("p",{className:"text-gray-500 mb-8 font-medium",children:"Create a record for your stock provider."}),(0,t.jsxs)("form",{onSubmit:S,className:"space-y-6",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Company Name *"}),(0,t.jsx)("input",{required:!0,type:"text",placeholder:"e.g. ABC Foods Ltd",value:z.company_name,onChange:e=>A({...z,company_name:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Contact Person"}),(0,t.jsx)("input",{type:"text",placeholder:"John Doe",value:z.contact_person,onChange:e=>A({...z,contact_person:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Phone Number (recommended)"}),(0,t.jsx)("input",{type:"tel",placeholder:"10-digit mobile (optional)",value:z.phone_number,onChange:e=>A({...z,phone_number:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Email Address"}),(0,t.jsx)("input",{type:"email",placeholder:"distributor@mail.com",value:z.email,onChange:e=>A({...z,email:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Office Address"}),(0,t.jsx)("textarea",{rows:3,placeholder:"Full office or warehouse address...",value:z.address,onChange:e=>A({...z,address:e.target.value}),className:"w-full bg-gray-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-primary/20 resize-none"})]}),(0,t.jsxs)("div",{className:"flex gap-4 pt-6",children:[(0,t.jsx)("button",{type:"button",onClick:()=>C(!1),className:"flex-1 px-6 py-4 rounded-2xl font-bold bg-gray-100 text-gray-600 hover:bg-gray-200",children:"Cancel"}),(0,t.jsx)("button",{type:"submit",className:"flex-[2] bg-primary text-white px-6 py-4 rounded-2xl font-bold hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all",children:"Register Distributor"})]})]})]})}),(0,t.jsx)(h.InfiniteScrollTrigger,{onLoadMore:()=>E(!0),hasMore:!!N,isLoading:y})]})}e.s(["default",()=>g])}]);