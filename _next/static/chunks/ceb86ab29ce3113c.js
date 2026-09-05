(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31278,e=>{"use strict";var t=e.i(17521);e.s(["Loader2",()=>t.default])},5766,e=>{"use strict";let t,s;var r,i=e.i(71645);let a={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let s="",r="",i="";for(let a in e){let n=e[a];"@"==a[0]?"i"==a[1]?s=a+" "+n+";":r+="f"==a[1]?d(n,a):a+"{"+d(n,"k"==a[1]?"":t)+"}":"object"==typeof n?r+=d(n,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=n&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=d.p?d.p(a,n):a+":"+n+";")}return s+(t&&i?t+"{"+i+"}":i)+r},c={},u=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+u(e[s]);return t}return e};function m(e){let t,s,r=this||{},i=e.call?e(r.p):e;return((e,t,s,r,i)=>{var a;let m=u(e),p=c[m]||(c[m]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(m));if(!c[p]){let t=m!==e?e:(e=>{let t,s,r=[{}];for(;t=n.exec(e.replace(o,""));)t[4]?r.shift():t[3]?(s=t[3].replace(l," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);c[p]=d(i?{["@keyframes "+p]:t}:t,s?"":"."+p)}let h=s&&c.g?c.g:null;return s&&(c.g=c[p]),a=c[p],h?t.data=t.data.replace(h,a):-1===t.data.indexOf(a)&&(t.data=r?a+t.data:t.data+a),p})(i.unshift?i.raw?(t=[].slice.call(arguments,1),s=r.p,i.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==a?"":a)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||a})(r.target),r.g,r.o,r.k)}m.bind({g:1});let p,h,f,x=m.bind({k:1});function y(e,t){let s=this||{};return function(){let r=arguments;function i(a,n){let o=Object.assign({},a),l=o.className||i.className;s.p=Object.assign({theme:h&&h()},o),s.o=/ *go\d+/.test(l),o.className=m.apply(s,r)+(l?" "+l:""),t&&(o.ref=n);let d=e;return e[0]&&(d=o.as||e,delete o.as),f&&d[0]&&f(o),p(d,o)}return t?t(i):i}}var g=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},j="default",w=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},_=[],S={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},N=(e,t=j)=>{k[t]=w(k[t]||S,e),_.forEach(([e,s])=>{e===t&&s(k[t])})},z=e=>Object.keys(k).forEach(t=>N(e,t)),C=(e=j)=>t=>{N(t,e)},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=e=>(t,s)=>{let r,i=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||b()}))(t,e,s);return C(i.toasterId||(r=i.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===r))))({type:2,toast:i}),i.id},E=(e,t)=>F("blank")(e,t);E.error=F("error"),E.success=F("success"),E.loading=F("loading"),E.custom=F("custom"),E.dismiss=(e,t)=>{let s={type:3,toastId:e};t?C(t)(s):z(s)},E.dismissAll=e=>E.dismiss(void 0,e),E.remove=(e,t)=>{let s={type:4,toastId:e};t?C(t)(s):z(s)},E.removeAll=e=>E.remove(void 0,e),E.promise=(e,t,s)=>{let r=E.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?g(t.success,e):void 0;return i?E.success(i,{id:r,...s,...null==s?void 0:s.success}):E.dismiss(r),e}).catch(e=>{let i=t.error?g(t.error,e):void 0;i?E.error(i,{id:r,...s,...null==s?void 0:s.error}):E.dismiss(r)}),e};var O=1e3,T=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=x`
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

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${M} 0.15s ease-out forwards;
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
`,$=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${I} 1s linear infinite;
`,L=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,D=x`
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
}`,H=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${D} 0.2s ease-out forwards;
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
`,U=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(V,null,t):t:"blank"===s?null:i.createElement(U,null,i.createElement($,{...r}),"loading"!==s&&i.createElement(B,null,"error"===s?i.createElement(P,{...r}):i.createElement(H,{...r})))},Y=y("div")`
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
`,G=i.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[r,i]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${x(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(K,{toast:e}),o=i.createElement(Z,{...e.ariaProps},g(e.message,e));return i.createElement(Y,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:n,message:o}):i.createElement(i.Fragment,null,n,o))});r=i.createElement,d.p=void 0,p=r,h=void 0,f=void 0;var J=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let n=i.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:n,className:t,style:s},a)},Q=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,toasterId:n,containerStyle:o,containerClassName:l})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:r}=((e={},t=j)=>{let[s,r]=(0,i.useState)(k[t]||S),a=(0,i.useRef)(k[t]);(0,i.useEffect)(()=>(a.current!==k[t]&&r(k[t]),_.push([t,r]),()=>{let e=_.findIndex(([e])=>e===t);e>-1&&_.splice(e,1)}),[t]);let n=s.toasts.map(t=>{var s,r,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||R[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...s,toasts:n}})(e,t),a=(0,i.useRef)(new Map).current,n=(0,i.useCallback)((e,t=O)=>{if(a.has(e))return;let s=setTimeout(()=>{a.delete(e),o({type:4,toastId:e})},t);a.set(e,s)},[]);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),i=s.map(s=>{if(s.duration===1/0)return;let r=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(r<0){s.visible&&E.dismiss(s.id);return}return setTimeout(()=>E.dismiss(s.id,t),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[s,r,t]);let o=(0,i.useCallback)(C(t),[t]),l=(0,i.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),d=(0,i.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),c=(0,i.useCallback)(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:a}=t||{},n=s.filter(t=>(t.position||a)===(e.position||a)&&t.height),o=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<o&&e.visible).length;return n.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[s]);return(0,i.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[s,n]),{toasts:s,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}})(s,n);return i.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let n,o,l=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(n=l.includes("top"),o=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...o});return i.createElement(J,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?Q:"",style:u},"custom"===s.type?g(s.message,s):a?a(s):i.createElement(G,{toast:s,position:l}))}))};e.s(["Toaster",()=>W,"toast",()=>E],5766)},1928,e=>{"use strict";let t=(0,e.i(75254).default)("shopping-cart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);e.s(["ShoppingCart",()=>t],1928)},3281,e=>{"use strict";let t=(0,e.i(75254).default)("printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);e.s(["Printer",()=>t],3281)},25652,e=>{"use strict";let t=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["TrendingUp",()=>t],25652)},87378,e=>{"use strict";let t=(0,e.i(75254).default)("banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);e.s(["Banknote",()=>t],87378)},90092,e=>{"use strict";let t=(0,e.i(75254).default)("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);e.s(["RefreshCcw",()=>t],90092)},26707,e=>{"use strict";let t=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>t],26707)},16015,(e,t,s)=>{},98547,(e,t,s)=>{var r=e.i(47167);e.r(16015);var i=e.r(71645),a=i&&"object"==typeof i&&"default"in i?i:{default:i},n=void 0!==r.default&&r.default.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,s=t.name,r=void 0===s?"stylesheet":s,i=t.optimizeForSpeed,a=void 0===i?n:i;d(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",d("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,s=e.prototype;return s.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"==typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(d(o(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!=typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var s="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(r){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];d(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},s.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},s.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},s.makeStyleTag=function(e,t,s){t&&d(o(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return s?i.insertBefore(r,s):i.appendChild(r),r},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0},u={};function m(e,t){if(!t)return"jsx-"+e;var s=String(t),r=e+s;return u[r]||(u[r]="jsx-"+c(e+"-"+s)),u[r]}function p(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var s=e+t;return u[s]||(u[s]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[s]}var h=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,i=t.optimizeForSpeed,a=void 0!==i&&i;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"==typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var s=this.getIdAndRules(e),r=s.styleId,i=s.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var a=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=a,this._instancesCounts[r]=1},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return s[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,s;return t=this.cssRules(),void 0===(s=e)&&(s={}),t.map(function(e){var t=e[0],r=e[1];return a.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:s.nonce?s.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,s=e.dynamic,r=e.id;if(s){var i=m(r,s);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return p(i,e)}):[p(i,t)]}}return{styleId:m(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),f=i.createContext(null);function x(){return new h}function y(){return i.useContext(f)}f.displayName="StyleSheetContext";var g=a.default.useInsertionEffect||a.default.useLayoutEffect,b="u">typeof window?x():void 0;function v(e){var t=b||y();return t&&("u"<typeof window?t.add(e):g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}v.dynamic=function(e){return e.map(function(e){return m(e[0],e[1])}).join(" ")},s.StyleRegistry=function(e){var t=e.registry,s=e.children,r=i.useContext(f),n=i.useState(function(){return r||t||x()})[0];return a.default.createElement(f.Provider,{value:n},s)},s.createStyleRegistry=x,s.style=v,s.useStyleRegistry=y},37902,(e,t,s)=>{t.exports=e.r(98547).style},34830,e=>{"use strict";var t=e.i(43476),s=e.i(37902),r=e.i(71645),i=e.i(16973),a=e.i(75254);let n=(0,a.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);var o=e.i(1928),l=e.i(25652),d=e.i(26707),c=e.i(87378),u=e.i(31278);let m=(0,a.default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),p=(0,a.default)("arrow-down-right",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);var h=e.i(3281),f=e.i(90092),x=e.i(5766);function y(){let[e,a]=(0,r.useState)(null),[y,g]=(0,r.useState)(!0),b=async()=>{g(!0);try{let e=await i.default.get("/products/erp/daily-sales-summary/");a(e.data)}catch(e){x.toast.error("Failed to load daily summary")}finally{g(!1)}};if((0,r.useEffect)(()=>{b()},[]),y)return(0,t.jsx)("div",{className:"flex h-[80vh] items-center justify-center",children:(0,t.jsx)(u.Loader2,{className:"animate-spin text-primary",size:40})});if(!e)return(0,t.jsx)("div",{children:"Failed to load summary."});let v=e.total_sales>0?e.cash_sales/e.total_sales*100:0,j=e.total_sales>0?e.digital_sales/e.total_sales*100:0;return(0,t.jsxs)("div",{className:"jsx-81384e32220355df p-4 sm:p-8 max-w-6xl mx-auto font-sans min-h-screen pb-32",children:[(0,t.jsx)(x.Toaster,{position:"top-right"}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-10",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df",children:[(0,t.jsxs)("h1",{className:"jsx-81384e32220355df text-2xl sm:text-4xl font-black text-gray-900 tracking-tight flex items-center gap-2.5 sm:gap-3",children:[(0,t.jsx)(n,{size:28,className:"text-primary sm:hidden"}),(0,t.jsx)(n,{size:36,className:"text-primary hidden sm:block"})," Daily Sales Report"]}),(0,t.jsxs)("p",{className:"jsx-81384e32220355df text-gray-500 mt-1 text-xs sm:text-base font-medium italic",children:["Closing summary for ",new Date(e.date).toLocaleDateString("en-IN",{dateStyle:"full"})]})]}),(0,t.jsxs)("button",{onClick:b,className:"jsx-81384e32220355df w-full sm:w-auto justify-center flex items-center gap-2 bg-white border border-gray-150 p-2.5 sm:p-3 px-5 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all shadow-sm font-bold text-sm text-gray-600",children:[(0,t.jsx)(f.RefreshCcw,{size:16})," Refresh"]})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df bg-primary p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] text-primary-foreground shadow-2xl shadow-primary/20 mb-6 md:mb-10 relative overflow-hidden group",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df absolute top-0 right-0 p-6 sm:p-12 opacity-10 group-hover:scale-110 transition-transform duration-700",children:[(0,t.jsx)(l.TrendingUp,{size:80,className:"sm:hidden"}),(0,t.jsx)(l.TrendingUp,{size:140,className:"hidden sm:block"})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df text-center sm:text-left",children:[(0,t.jsx)("p",{className:"jsx-81384e32220355df text-[10px] sm:text-xs font-bold opacity-70 uppercase tracking-[0.3em] mb-2 sm:mb-4 text-white",children:"Total Sales Today"}),(0,t.jsxs)("h2",{className:"jsx-81384e32220355df text-4xl sm:text-7xl font-black tracking-tighter mb-2",children:["₹",e.total_sales.toLocaleString("en-IN")]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex items-center justify-center sm:justify-start gap-2 opacity-90 text-xs sm:text-sm",children:[(0,t.jsx)(o.ShoppingCart,{size:16}),(0,t.jsxs)("span",{className:"jsx-81384e32220355df font-bold",children:[e.order_count," Orders Processed"]})]})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df bg-white/10 backdrop-blur-md p-4 sm:p-6 sm:px-10 rounded-2xl sm:rounded-[2rem] border border-white/10 text-center w-full sm:w-auto",children:[(0,t.jsx)("p",{className:"jsx-81384e32220355df text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 text-white",children:"Avg Order Value"}),(0,t.jsxs)("p",{className:"jsx-81384e32220355df text-xl sm:text-3xl font-black text-white",children:["₹",e.order_count>0?(e.total_sales/e.order_count).toFixed(0):"0"]})]})]})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 md:mb-10",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df bg-white p-5 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden",children:[(0,t.jsx)("h3",{className:"jsx-81384e32220355df text-base sm:text-lg font-black text-gray-900 mb-4 sm:mb-8 border-b border-gray-50 pb-4",children:"Payment Breakdown"}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df space-y-6 sm:space-y-8",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex justify-between items-end mb-3",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df p-2 sm:p-3 bg-green-50 text-green-600 rounded-xl sm:rounded-2xl",children:[(0,t.jsx)(c.Banknote,{size:20,className:"sm:hidden"}),(0,t.jsx)(c.Banknote,{size:24,className:"hidden sm:block"})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df",children:[(0,t.jsx)("p",{className:"jsx-81384e32220355df text-xs font-bold text-gray-400 uppercase tracking-wider",children:"Cash in Hand"}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex items-baseline gap-2",children:[(0,t.jsxs)("p",{className:"jsx-81384e32220355df text-xl sm:text-2xl font-black text-gray-900",children:["₹",e.cash_sales.toLocaleString()]}),e.cash_refunds>0&&(0,t.jsxs)("span",{className:"jsx-81384e32220355df text-[10px] font-bold text-red-500",children:["(-₹",e.cash_refunds,")"]})]})]})]}),(0,t.jsxs)("span",{className:"jsx-81384e32220355df text-[10px] sm:text-xs font-black text-green-600 bg-green-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full",children:[v.toFixed(0),"%"]})]}),(0,t.jsx)("div",{className:"jsx-81384e32220355df w-full bg-gray-50 h-2.5 sm:h-3 rounded-full overflow-hidden",children:(0,t.jsx)("div",{style:{width:`${v}%`},className:"jsx-81384e32220355df bg-green-500 h-full rounded-full transition-all duration-1000"})})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex justify-between items-end mb-3",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df p-2 sm:p-3 bg-blue-50 text-blue-600 rounded-xl sm:rounded-2xl",children:[(0,t.jsx)(d.Smartphone,{size:20,className:"sm:hidden"}),(0,t.jsx)(d.Smartphone,{size:24,className:"hidden sm:block"})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df",children:[(0,t.jsx)("p",{className:"jsx-81384e32220355df text-xs font-bold text-gray-400 uppercase tracking-wider",children:"Digital Payments"}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df flex items-baseline gap-2",children:[(0,t.jsxs)("p",{className:"jsx-81384e32220355df text-xl sm:text-2xl font-black text-gray-900",children:["₹",e.digital_sales.toLocaleString()]}),e.upi_refunds>0&&(0,t.jsxs)("span",{className:"jsx-81384e32220355df text-[10px] font-bold text-red-500",children:["(-₹",e.upi_refunds,")"]})]})]})]}),(0,t.jsxs)("span",{className:"jsx-81384e32220355df text-[10px] sm:text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full",children:[j.toFixed(0),"%"]})]}),(0,t.jsx)("div",{className:"jsx-81384e32220355df w-full bg-gray-50 h-2.5 sm:h-3 rounded-full overflow-hidden",children:(0,t.jsx)("div",{style:{width:`${j}%`},className:"jsx-81384e32220355df bg-blue-500 h-full rounded-full transition-all duration-1000"})})]})]})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df bg-white p-5 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 shadow-sm",children:[(0,t.jsx)("h3",{className:"jsx-81384e32220355df text-base sm:text-lg font-black text-gray-900 mb-4 sm:mb-8 border-b border-gray-50 pb-4",children:"Channel Performance"}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df grid grid-cols-2 gap-3 sm:gap-6",children:[(0,t.jsxs)("div",{className:"jsx-81384e32220355df p-4 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center",children:[(0,t.jsx)("div",{className:"jsx-81384e32220355df size-10 sm:size-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm text-primary mb-3 sm:mb-4",children:(0,t.jsx)(m,{size:20,className:"sm:size-6"})}),(0,t.jsx)("p",{className:"jsx-81384e32220355df text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",children:"POS Sales"}),(0,t.jsxs)("p",{className:"jsx-81384e32220355df text-xl sm:text-3xl font-black text-gray-900",children:["₹",e.pos_sales.toLocaleString()]})]}),(0,t.jsxs)("div",{className:"jsx-81384e32220355df p-4 sm:p-8 bg-gray-900 text-white rounded-2xl sm:rounded-[2.5rem] flex flex-col items-center text-center",children:[(0,t.jsx)("div",{className:"jsx-81384e32220355df size-10 sm:size-12 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4",children:(0,t.jsx)(p,{size:20,className:"sm:size-6"})}),(0,t.jsx)("p",{className:"jsx-81384e32220355df text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1",children:"Online Store"}),(0,t.jsxs)("p",{className:"jsx-81384e32220355df text-xl sm:text-3xl font-black text-white",children:["₹",e.online_sales.toLocaleString()]})]})]})]})]}),(0,t.jsx)("div",{className:"jsx-81384e32220355df flex justify-center",children:(0,t.jsxs)("button",{onClick:()=>window.print(),className:"jsx-81384e32220355df w-full sm:w-auto justify-center flex items-center gap-3 bg-gray-900 text-white p-4 px-6 sm:p-5 sm:px-10 rounded-2xl sm:rounded-3xl hover:bg-black transition-all shadow-xl shadow-gray-200 font-bold active:scale-95 no-print text-sm sm:text-base",children:[(0,t.jsx)(h.Printer,{size:18,className:"sm:size-5"})," Print Closing Summary"]})}),(0,t.jsx)(s.default,{id:"81384e32220355df",children:"@media print{.no-print,aside,header{display:none!important}main{margin:0!important;padding:0!important}}"})]})}e.s(["default",()=>y],34830)}]);