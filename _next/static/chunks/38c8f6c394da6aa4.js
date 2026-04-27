(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},55436,e=>{"use strict";let t=(0,e.i(75254).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",()=>t],55436)},5766,e=>{"use strict";let t,a;var r,s=e.i(71645);let i={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let a="",r="",s="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+l+";":r+="f"==i[1]?d(l,i):i+"{"+d(l,"k"==i[1]?"":t)+"}":"object"==typeof l?r+=d(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=d.p?d.p(i,l):i+":"+l+";")}return a+(t&&s?t+"{"+s+"}":s)+r},c={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e};function p(e){let t,a,r=this||{},s=e.call?e(r.p):e;return((e,t,a,r,s)=>{var i;let p=u(e),m=c[p]||(c[p]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(p));if(!c[m]){let t=p!==e?e:(e=>{let t,a,r=[{}];for(;t=l.exec(e.replace(o,""));)t[4]?r.shift():t[3]?(a=t[3].replace(n," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(n," ").trim();return r[0]})(e);c[m]=d(s?{["@keyframes "+m]:t}:t,a?"":"."+m)}let x=a&&c.g?c.g:null;return a&&(c.g=c[m]),i=c[m],x?t.data=t.data.replace(x,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),m})(s.unshift?s.raw?(t=[].slice.call(arguments,1),a=r.p,s.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(r.target),r.g,r.o,r.k)}p.bind({g:1});let m,x,g,h=p.bind({k:1});function f(e,t){let a=this||{};return function(){let r=arguments;function s(i,l){let o=Object.assign({},i),n=o.className||s.className;a.p=Object.assign({theme:x&&x()},o),a.o=/ *go\d+/.test(n),o.className=p.apply(a,r)+(n?" "+n:""),t&&(o.ref=l);let d=e;return e[0]&&(d=o.as||e,delete o.as),g&&d[0]&&g(o),m(d,o)}return t?t(s):s}}var b=(e,t)=>"function"==typeof e?e(t):e,y=(t=0,()=>(++t).toString()),v=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},N="default",j=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},w=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},_=(e,t=N)=>{C[t]=j(C[t]||k,e),w.forEach(([e,a])=>{e===t&&a(C[t])})},E=e=>Object.keys(C).forEach(t=>_(e,t)),S=(e=N)=>t=>{_(t,e)},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=e=>(t,a)=>{let r,s=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||y()}))(t,e,a);return S(s.toasterId||(r=s.id,Object.keys(C).find(e=>C[e].toasts.some(e=>e.id===r))))({type:2,toast:s}),s.id},L=(e,t)=>A("blank")(e,t);L.error=A("error"),L.success=A("success"),L.loading=A("loading"),L.custom=A("custom"),L.dismiss=(e,t)=>{let a={type:3,toastId:e};t?S(t)(a):E(a)},L.dismissAll=e=>L.dismiss(void 0,e),L.remove=(e,t)=>{let a={type:4,toastId:e};t?S(t)(a):E(a)},L.removeAll=e=>L.remove(void 0,e),L.promise=(e,t,a)=>{let r=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?b(t.success,e):void 0;return s?L.success(s,{id:r,...a,...null==a?void 0:a.success}):L.dismiss(r),e}).catch(e=>{let s=t.error?b(t.error,e):void 0;s?L.error(s,{id:r,...a,...null==a?void 0:a.error}):L.dismiss(r)}),e};var D=1e3,I=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,O=f("div")`
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
`,M=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=f("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,F=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=h`
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
}`,U=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
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
`,q=f("div")`
  position: absolute;
`,B=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(K,null,t):t:"blank"===a?null:s.createElement(B,null,s.createElement(T,{...r}),"loading"!==a&&s.createElement(q,null,"error"===a?s.createElement(O,{...r}):s.createElement(U,{...r})))},Y=f("div")`
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
`,Z=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,G=s.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=s.createElement(J,{toast:e}),o=s.createElement(Z,{...e.ariaProps},b(e.message,e));return s.createElement(Y,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:l,message:o}):s.createElement(s.Fragment,null,l,o))});r=s.createElement,d.p=void 0,m=r,x=void 0,g=void 0;var Q=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let l=s.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return s.createElement("div",{ref:l,className:t,style:a},i)},V=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,toasterId:l,containerStyle:o,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:a,pausedAt:r}=((e={},t=N)=>{let[a,r]=(0,s.useState)(C[t]||k),i=(0,s.useRef)(C[t]);(0,s.useEffect)(()=>(i.current!==C[t]&&r(C[t]),w.push([t,r]),()=>{let e=w.findIndex(([e])=>e===t);e>-1&&w.splice(e,1)}),[t]);let l=a.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...a,toasts:l}})(e,t),i=(0,s.useRef)(new Map).current,l=(0,s.useCallback)((e,t=D)=>{if(i.has(e))return;let a=setTimeout(()=>{i.delete(e),o({type:4,toastId:e})},t);i.set(e,a)},[]);(0,s.useEffect)(()=>{if(r)return;let e=Date.now(),s=a.map(a=>{if(a.duration===1/0)return;let r=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(r<0){a.visible&&L.dismiss(a.id);return}return setTimeout(()=>L.dismiss(a.id,t),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[a,r,t]);let o=(0,s.useCallback)(S(t),[t]),n=(0,s.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),d=(0,s.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),c=(0,s.useCallback)(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=(0,s.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=t||{},l=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=l.findIndex(t=>t.id===e.id),n=l.filter((e,t)=>t<o&&e.visible).length;return l.filter(e=>e.visible).slice(...r?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+s,0)},[a]);return(0,s.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)l(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[a,l]),{toasts:a,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}})(a,l);return s.createElement("div",{"data-rht-toaster":l||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let l,o,n=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(l=n.includes("top"),o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(l?1:-1)}px)`,...l?{top:0}:{bottom:0},...o});return s.createElement(Q,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?V:"",style:u},"custom"===a.type?b(a.message,a):i?i(a):s.createElement(G,{toast:a,position:n}))}))};e.s(["Toaster",()=>W,"toast",()=>L],5766)},61659,e=>{"use strict";let t=(0,e.i(75254).default)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);e.s(["CreditCard",()=>t],61659)},50651,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(31278);e.s(["InfiniteScrollTrigger",0,({onLoadMore:e,hasMore:s,isLoading:i})=>{let l=(0,a.useRef)(null);return((0,a.useEffect)(()=>{let t=new IntersectionObserver(t=>{t[0].isIntersecting&&s&&!i&&e()},{threshold:.1});return l.current&&t.observe(l.current),()=>{l.current&&t.unobserve(l.current)}},[s,i,e]),s)?(0,t.jsx)("div",{ref:l,className:"py-8 flex justify-center w-full",children:i&&(0,t.jsxs)("div",{className:"flex items-center gap-2 text-muted-foreground animate-pulse",children:[(0,t.jsx)(r.Loader2,{className:"h-5 w-5 animate-spin"}),(0,t.jsx)("span",{className:"text-sm font-medium",children:"Loading more records..."})]})}):null}])},79002,e=>{"use strict";let t=(0,e.i(75254).default)("user-plus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);e.s(["UserPlus",()=>t],79002)},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>t],72520)},43432,e=>{"use strict";let t=(0,e.i(75254).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>t],43432)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>t],63488)},63875,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(16973),s=e.i(10980),i=e.i(55436),l=e.i(84614),o=e.i(43432),n=e.i(72520),d=e.i(61659),c=e.i(31278),u=e.i(79002),p=e.i(63488),m=e.i(5766),x=e.i(22016),g=e.i(50651);function h(){let[e,h]=(0,a.useState)([]),[f,b]=(0,a.useState)(!0),[y,v]=(0,a.useState)(!1),[N,j]=(0,a.useState)(null),[w,k]=(0,a.useState)(""),[C,_]=(0,a.useState)(!1),[E,S]=(0,a.useState)({company_name:"",contact_person:"",phone_number:"",email:"",address:""});(0,a.useEffect)(()=>{let e=setTimeout(()=>{z(!1)},300);return()=>clearTimeout(e)},[w]);let z=async(e=!1)=>{e?v(!0):b(!0);try{let t={};if(w&&(t.search=w),e&&N){let e=new URL(N).searchParams.get("page");e&&(t.page=e)}let a=await r.default.get("/products/erp/suppliers/",{params:t}),s=a.data.results||a.data,i=a.data.next||null;e?h(e=>[...e,...s]):h(s),j(i)}catch(e){m.toast.error("Failed to load suppliers")}finally{b(!1),v(!1)}},A=async e=>{e.preventDefault();try{await r.default.post("/products/erp/suppliers/",E),m.toast.success("Supplier added successfully"),_(!1),z(),S({company_name:"",contact_person:"",phone_number:"",email:"",address:""})}catch(e){m.toast.error("Failed to add supplier")}},L=e.filter(e=>Number(e.balance_due)>0).reduce((e,t)=>e+Number(t.balance_due),0),D=e.filter(e=>0>Number(e.balance_due)).reduce((e,t)=>e+Math.abs(Number(t.balance_due)),0);return(0,t.jsxs)("div",{className:"p-8 max-w-7xl mx-auto font-sans",children:[(0,t.jsx)(m.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{className:"text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"p-2.5 bg-primary/10 text-primary rounded-xl overflow-hidden relative",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-primary/20 animate-pulse opacity-50"}),(0,t.jsx)(s.BookOpen,{size:28,className:"relative z-10"})]}),"Khata & Suppliers"]}),(0,t.jsx)("p",{className:"text-gray-500 mt-2 ml-14",children:"Manage distributor relations and outstanding credit balances."})]}),(0,t.jsxs)("button",{onClick:()=>_(!0),className:"bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 px-6 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:-translate-y-1 active:scale-95",children:[(0,t.jsx)(u.UserPlus,{size:20})," Add New Distributor"]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-10",children:[(0,t.jsxs)("div",{className:"bg-white p-6 rounded-[2rem] border border-red-100 shadow-sm relative overflow-hidden group",children:[(0,t.jsx)("div",{className:"absolute -right-6 -top-6 bg-red-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-red-400 uppercase tracking-widest mb-1",children:"Total Debt"}),(0,t.jsxs)("h3",{className:"text-3xl font-black text-red-600 tracking-tight",children:["₹",L.toLocaleString("en-IN")]}),(0,t.jsx)("p",{className:"text-[10px] text-gray-400 mt-1 uppercase font-bold",children:"LIFETIME ALL SUPPLIERS"})]})]}),D>0&&(0,t.jsxs)("div",{className:"bg-white p-6 rounded-[2rem] border border-green-100 shadow-sm relative overflow-hidden group",children:[(0,t.jsx)("div",{className:"absolute -right-6 -top-6 bg-green-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-green-500 uppercase tracking-widest mb-1",children:"Advance Paid"}),(0,t.jsxs)("h3",{className:"text-3xl font-black text-green-600 tracking-tight",children:["₹",D.toLocaleString("en-IN")]}),(0,t.jsx)("p",{className:"text-[10px] text-gray-400 mt-1 uppercase font-bold",children:"Extra payments pool"})]})]}),(0,t.jsxs)("div",{className:`bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-primary/20 transition-all cursor-pointer ${D>0?"":"md:col-span-2"}`,children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2",children:"Largest Creditor"}),e.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900 line-clamp-1",children:e.sort((e,t)=>Number(t.balance_due)-Number(e.balance_due))[0].company_name}),(0,t.jsxs)("p",{className:"text-sm text-primary font-bold mt-1 uppercase tracking-wider",children:["₹",Math.max(0,Number(e.sort((e,t)=>Number(t.balance_due)-Number(e.balance_due))[0].balance_due)).toLocaleString("en-IN")," Due"]})]}):(0,t.jsx)("h3",{className:"text-xl font-bold text-gray-300",children:"No data"})]}),(0,t.jsxs)("div",{className:"bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1",children:"Credit Invoices"}),(0,t.jsx)("h3",{className:"text-3xl font-black text-gray-900",children:e.filter(e=>Number(e.balance_due)>0).length})]}),(0,t.jsx)("div",{className:"size-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500",children:(0,t.jsx)(d.CreditCard,{size:28})})]})]}),(0,t.jsxs)("div",{className:"bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden",children:[(0,t.jsxs)("div",{className:"p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4",children:[(0,t.jsx)("h3",{className:"text-xl font-black text-gray-900",children:"Distributor List"}),(0,t.jsxs)("div",{className:"relative w-full md:w-96",children:[(0,t.jsx)(i.Search,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:18}),(0,t.jsx)("input",{type:"text",placeholder:"Search by company or phone...",value:w,onChange:e=>k(e.target.value),className:"w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-gray-900 placeholder:text-gray-400"})]})]}),(0,t.jsx)("div",{className:"overflow-x-auto p-4",children:(0,t.jsxs)("table",{className:"w-full text-left",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black border-b border-gray-50",children:[(0,t.jsx)("th",{className:"p-6",children:"Company Name"}),(0,t.jsx)("th",{className:"p-6",children:"Contact Person"}),(0,t.jsx)("th",{className:"p-6",children:"Contact Details"}),(0,t.jsx)("th",{className:"p-6 text-right",children:"Outstanding Balance"}),(0,t.jsx)("th",{className:"p-6"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-50",children:f?(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{colSpan:5,className:"p-20 text-center text-gray-400",children:[(0,t.jsx)(c.Loader2,{className:"animate-spin mx-auto mb-4"}),"Loading ledger summary..."]})}):0===e.length?(0,t.jsx)("tr",{children:(0,t.jsxs)("td",{colSpan:5,className:"p-20 text-center text-gray-400",children:[(0,t.jsx)("p",{className:"text-lg font-bold text-gray-600 mb-1",children:"No suppliers found"}),(0,t.jsx)("p",{className:"text-sm",children:"Add a new distributor to start managing their khata."})]})}):e.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50/50 transition-colors group",children:[(0,t.jsx)("td",{className:"p-6",children:(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"size-12 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center font-black text-xl border border-gray-100 uppercase group-hover:bg-primary group-hover:text-white transition-all",children:e.company_name.charAt(0)}),(0,t.jsx)("div",{className:"font-black text-gray-900 text-lg uppercase tracking-tight",children:e.company_name})]})}),(0,t.jsx)("td",{className:"p-6 font-medium text-gray-600",children:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(l.User,{size:14,className:"text-gray-300"}),e.contact_person||"N/A"]})}),(0,t.jsx)("td",{className:"p-6 text-sm",children:(0,t.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 font-bold",children:[(0,t.jsx)(o.Phone,{size:14,className:"text-gray-300"}),e.phone_number]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-gray-400",children:[(0,t.jsx)(p.Mail,{size:14,className:"text-gray-300"}),e.email||"No email"]})]})}),(0,t.jsxs)("td",{className:"p-6 text-right",children:[(0,t.jsxs)("div",{className:`text-2xl font-black ${Number(e.balance_due)>0?"text-red-600":0>Number(e.balance_due)?"text-green-600":"text-gray-900"}`,children:["₹",Math.abs(Number(e.balance_due)).toLocaleString("en-IN")]}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1",children:Number(e.balance_due)>0?"Due Amount":0>Number(e.balance_due)?"Advance Paid":"Settled"})]}),(0,t.jsx)("td",{className:"p-6 text-right",children:(0,t.jsx)(x.default,{href:`/dashboard/suppliers/ledger?id=${e.id}`,children:(0,t.jsx)("button",{className:"bg-gray-50 hover:bg-primary hover:text-white p-3 rounded-2xl text-gray-400 transition-all group-hover:shadow-lg group-hover:shadow-primary/20",children:(0,t.jsx)(n.ArrowRight,{size:20})})})})]},e.id))})]})})]}),C&&(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:(0,t.jsxs)("div",{className:"bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl p-10 animate-in zoom-in-95 duration-200",children:[(0,t.jsx)("h2",{className:"text-2xl font-black text-gray-900 mb-2",children:"New Distributor"}),(0,t.jsx)("p",{className:"text-gray-500 mb-8 font-medium",children:"Create a record for your stock provider."}),(0,t.jsxs)("form",{onSubmit:A,className:"space-y-6",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Company Name *"}),(0,t.jsx)("input",{required:!0,type:"text",placeholder:"e.g. ABC Foods Ltd",value:E.company_name,onChange:e=>S({...E,company_name:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Contact Person"}),(0,t.jsx)("input",{type:"text",placeholder:"John Doe",value:E.contact_person,onChange:e=>S({...E,contact_person:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Phone Number *"}),(0,t.jsx)("input",{required:!0,type:"tel",placeholder:"10-digit mobile",value:E.phone_number,onChange:e=>S({...E,phone_number:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Email Address"}),(0,t.jsx)("input",{type:"email",placeholder:"distributor@mail.com",value:E.email,onChange:e=>S({...E,email:e.target.value}),className:"w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest pl-1",children:"Office Address"}),(0,t.jsx)("textarea",{rows:3,placeholder:"Full office or warehouse address...",value:E.address,onChange:e=>S({...E,address:e.target.value}),className:"w-full bg-gray-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-primary/20 resize-none"})]}),(0,t.jsxs)("div",{className:"flex gap-4 pt-6",children:[(0,t.jsx)("button",{type:"button",onClick:()=>_(!1),className:"flex-1 px-6 py-4 rounded-2xl font-bold bg-gray-100 text-gray-600 hover:bg-gray-200",children:"Cancel"}),(0,t.jsx)("button",{type:"submit",className:"flex-[2] bg-primary text-white px-6 py-4 rounded-2xl font-bold hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all",children:"Register Distributor"})]})]})]})}),(0,t.jsx)(g.InfiniteScrollTrigger,{onLoadMore:()=>z(!0),hasMore:!!N,isLoading:y})]})}e.s(["default",()=>h])}]);