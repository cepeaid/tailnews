"use strict";!function(t,e){if("object"==typeof module&&"object"==typeof module.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");module.exports=e(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],e(t)):e(t)}("undefined"!=typeof window?window:this,(function(t){var e,o,n=t.document,i={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,responsive:null,mobileFirst:!1,onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1},s=function(t,e,o){console.warn("%cHC Sticky:%c "+o+"%c '"+t+"'%c is now deprecated and will be removed. Use%c '"+e+"'%c instead.","color: #fa253b","color: default","color: #5595c6","color: default","color: #5595c6","color: default")},r=function(e,o){var l=this;if(o=o||{},!(e="string"==typeof e?n.querySelector(e):e))return!1;o.queries&&s("queries","responsive","option"),o.queryFlow&&s("queryFlow","mobileFirst","option");var a={},c=r.Helpers,f=e.parentNode;function u(t){c.isEmptyObject(t=t||{})&&!c.isEmptyObject(a)||(a=Object.assign({},i,a,t))}function d(){return a.disable}function p(){var e,n=a.responsive||a.queries;if(n){var s=t.innerWidth;if(e=o,(a=Object.assign({},i,e||{})).mobileFirst)for(var r in n)r<=s&&!c.isEmptyObject(n[r])&&u(n[r]);else{var l,f=[];for(l in n){var d={};d[l]=n[l],f.push(d)}for(var p=f.length-1;0<=p;p--){var m=f[p],g=Object.keys(m)[0];s<=g&&!c.isEmptyObject(m[g])&&u(m[g])}}}}function m(){I=H(),E=B(),q=k+E-O-A,z=T<I;var o,i=t.pageYOffset||n.documentElement.scrollTop,s=c.offset(e).top,r=s-i;F=i<D?"up":"down",R=i-D,C<(D=i)?q+O+(z?N:0)-(a.followScroll&&z?0:O)<=i+I-j-(T-(C-j)<I-j&&a.followScroll&&0<(o=I-T-j)?o:0)?M.release({position:"absolute",bottom:x+f.offsetHeight-q-O}):z&&a.followScroll?"down"==F?r+I+N<=T+.9?M.stick({bottom:N}):"fixed"===M.position&&M.release({position:"absolute",top:s-O-C-R+j}):Math.ceil(r+j)<0&&"fixed"===M.position?M.release({position:"absolute",top:s-O-C+j-R}):i+O-j<=s&&M.stick({top:O-j}):M.stick({top:O-j}):M.release({stop:!0})}function g(){W&&(t.removeEventListener("scroll",m,c.supportsPassive),W=!1)}function h(){null!==e.offsetParent&&"none"!==c.getStyle(e,"display")?(function(){var o,i,s,r;M.css=(o=e,i=c.getCascadedStyle(o),s=c.getStyle(o),r={height:o.offsetHeight+"px",left:i.left,right:i.right,top:i.top,bottom:i.bottom,position:s.position,display:s.display,verticalAlign:s.verticalAlign,boxSizing:s.boxSizing,marginLeft:i.marginLeft,marginRight:i.marginRight,marginTop:i.marginTop,marginBottom:i.marginBottom,paddingLeft:i.paddingLeft,paddingRight:i.paddingRight},i.float&&(r.float=i.float||"none"),i.cssFloat&&(r.cssFloat=i.cssFloat||"none"),s.MozBoxSizing&&(r.MozBoxSizing=s.MozBoxSizing),r.width="auto"!==i.width?i.width:"border-box"===r.boxSizing||"border-box"===r.MozBoxSizing?o.offsetWidth+"px":s.width,r),Y.init(),w=!(!a.stickTo||!("document"===a.stickTo||a.stickTo.nodeType&&9===a.stickTo.nodeType||"object"==typeof a.stickTo&&a.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),L=a.stickTo?w?n:c.getElement(a.stickTo):f,I=(H=function(){var t=e.offsetHeight+(parseInt(M.css.marginTop)||0)+(parseInt(M.css.marginBottom)||0),o=(I||0)-t;return-1<=o&&o<=1?I:t})(),E=(B=function(){return w?Math.max(n.documentElement.clientHeight,n.body.scrollHeight,n.documentElement.scrollHeight,n.body.offsetHeight,n.documentElement.offsetHeight):L.offsetHeight})(),k=w?0:c.offset(L).top,x=a.stickTo?w?0:c.offset(f).top:k,T=t.innerHeight,P=e.offsetTop-(parseInt(M.css.marginTop)||0),S=c.getElement(a.innerSticker),O=isNaN(a.top)&&-1<a.top.indexOf("%")?parseFloat(a.top)/100*T:a.top,N=isNaN(a.bottom)&&-1<a.bottom.indexOf("%")?parseFloat(a.bottom)/100*T:a.bottom,j=S?S.offsetTop:a.innerTop||0,A=isNaN(a.bottomEnd)&&-1<a.bottomEnd.indexOf("%")?parseFloat(a.bottomEnd)/100*T:a.bottomEnd,C=k-O+j+P}(),E<I?g():(m(),W||(t.addEventListener("scroll",m,c.supportsPassive),W=!0))):g()}function y(){e.style.position="",e.style.left="",e.style.top="",e.style.bottom="",e.style.width="",e.classList?e.classList.remove(a.stickyClass):e.className=e.className.replace(new RegExp("(^|\\b)"+a.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),M.css={},!(M.position=null)===Y.isAttached&&Y.detach()}function v(){y(),p(),(d()?g:h)()}function b(){V&&(t.removeEventListener("resize",U,c.supportsPassive),V=!1),g()}"static"===c.getStyle(f,"position")&&(f.style.position="relative");var w,L,S,E,k,x,T,O,N,j,A,C,q,z,I,P,B,H,R,F,M={css:{},position:null,stick:function(t){t=t||{},c.hasClass(e,a.stickyClass)||(!1===Y.isAttached&&Y.attach(),M.position="fixed",e.style.position="fixed",e.style.left=Y.offsetLeft+"px",e.style.width=Y.width,void 0===t.bottom?e.style.bottom="auto":e.style.bottom=t.bottom+"px",void 0===t.top?e.style.top="auto":e.style.top=t.top+"px",e.classList?e.classList.add(a.stickyClass):e.className+=" "+a.stickyClass,a.onStart&&a.onStart.call(e,Object.assign({},a)))},release:function(t){var o;(t=t||{}).stop=t.stop||!1,!0!==t.stop&&"fixed"!==M.position&&null!==M.position&&(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(c.getStyle(e,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(c.getStyle(e,"bottom"))||0)===t.bottom)||(!0===t.stop?!0===Y.isAttached&&Y.detach():!1===Y.isAttached&&Y.attach(),o=t.position||M.css.position,M.position=o,e.style.position=o,e.style.left=!0===t.stop?M.css.left:Y.positionLeft+"px",e.style.width=("absolute"!==o?M.css:Y).width,void 0===t.bottom?e.style.bottom=!0===t.stop?"":"auto":e.style.bottom=t.bottom+"px",void 0===t.top?e.style.top=!0===t.stop?"":"auto":e.style.top=t.top+"px",e.classList?e.classList.remove(a.stickyClass):e.className=e.className.replace(new RegExp("(^|\\b)"+a.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),a.onStop&&a.onStop.call(e,Object.assign({},a)))}},Y={el:n.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in Y.el.className="sticky-spacer",M.css)Y.el.style[t]=M.css[t];Y.el.style["z-index"]="-1";var o=c.getStyle(e);Y.offsetLeft=c.offset(e).left-(parseInt(o.marginLeft)||0),Y.positionLeft=c.position(e).left,Y.width=c.getStyle(e,"width")},attach:function(){f.insertBefore(Y.el,e),Y.isAttached=!0},detach:function(){Y.el=f.removeChild(Y.el),Y.isAttached=!1}},D=t.pageYOffset||n.documentElement.scrollTop,W=!1,V=!1,Q=function(){a.onBeforeResize&&a.onBeforeResize.call(e,Object.assign({},a)),v(),a.onResize&&a.onResize.call(e,Object.assign({},a))},U=a.resizeDebounce?c.debounce(Q,a.resizeDebounce):Q;Q=function(){V||(t.addEventListener("resize",U,c.supportsPassive),V=!0),p(),(d()?g:h)()};this.options=function(t){return t?a[t]:Object.assign({},a)},this.refresh=v,this.update=function(t){u(t),o=Object.assign({},o,t||{}),v()},this.attach=Q,this.detach=b,this.destroy=function(){b(),y()},this.triggerMethod=function(t,e){"function"==typeof l[t]&&l[t](e)},this.reinit=function(){s("reinit","refresh","method"),v()},u(o),Q(),t.addEventListener("load",v)};return void 0!==t.jQuery&&(e=t.jQuery,o="hcSticky",e.fn.extend({hcSticky:function(t,n){return this.length?"options"===t?e.data(this.get(0),o).options():this.each((function(){var i=e.data(this,o);i?i.triggerMethod(t,n):(i=new r(this,t),e.data(this,o,i))})):this}})),t.hcSticky=t.hcSticky||r,r})),function(t){var e=t.hcSticky,o=t.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s])}return o},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,o;if(null==this)throw new TypeError("this is null or not defined");var n,i=Object(this),s=i.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(1<arguments.length&&(e=arguments[1]),o=0;o<s;)o in i&&(n=i[o],t.call(e,n,o,i)),o++});var n=!1;try{var i=Object.defineProperty({},"passive",{get:function(){n={passive:!1}}});t.addEventListener("testPassive",null,i),t.removeEventListener("testPassive",null,i)}catch(e){}function s(e,n){return t.getComputedStyle?n?o.defaultView.getComputedStyle(e,null).getPropertyValue(n):o.defaultView.getComputedStyle(e,null):e.currentStyle?n?e.currentStyle[n.replace(/-\w/g,(function(t){return t.toUpperCase().replace("-","")}))]:e.currentStyle:void 0}function r(e){var n=e.getBoundingClientRect(),i=t.pageYOffset||o.documentElement.scrollTop;e=t.pageXOffset||o.documentElement.scrollLeft;return{top:n.top+i,left:n.left+e}}e.Helpers={supportsPassive:n,isEmptyObject:function(t){for(var e in t)return!1;return!0},debounce:function(t,e,o){var n;return function(){var i=this,s=arguments,r=o&&!n;clearTimeout(n),n=setTimeout((function(){n=null,o||t.apply(i,s)}),e),r&&t.apply(i,s)}},hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},offset:r,position:function(t){var e=r(n=t.offsetParent),o=r(t),n=s(n);t=s(t);return e.top+=parseInt(n.borderTopWidth)||0,e.left+=parseInt(n.borderLeftWidth)||0,{top:o.top-e.top-(parseInt(t.marginTop)||0),left:o.left-e.left-(parseInt(t.marginLeft)||0)}},getElement:function(e){var n=null;return"string"==typeof e?n=o.querySelector(e):t.jQuery&&e instanceof t.jQuery&&e.length?n=e[0]:e instanceof Element&&(n=e),n},getStyle:s,getCascadedStyle:function(e){var n,i=e.cloneNode(!0);i.style.display="none",Array.prototype.slice.call(i.querySelectorAll('input[type="radio"]')).forEach((function(t){t.removeAttribute("name")})),e.parentNode.insertBefore(i,e.nextSibling),i.currentStyle?n=i.currentStyle:t.getComputedStyle&&(n=o.defaultView.getComputedStyle(i,null));var s,r,l,a={};for(s in n)!isNaN(s)||"string"!=typeof n[s]&&"number"!=typeof n[s]||(a[s]=n[s]);if(Object.keys(a).length<3)for(var c in a={},n)isNaN(c)||(a[n[c].replace(/-\w/g,(function(t){return t.toUpperCase().replace("-","")}))]=n.getPropertyValue(n[c]));return a.margin||"auto"!==a.marginLeft?a.margin||a.marginLeft!==a.marginRight||a.marginLeft!==a.marginTop||a.marginLeft!==a.marginBottom||(a.margin=a.marginLeft):a.margin="auto",a.margin||"0px"!==a.marginLeft||"0px"!==a.marginRight||(l=(r=e.offsetLeft-e.parentNode.offsetLeft)-(parseInt(a.left)||0)-(parseInt(a.right)||0),0!=(l=e.parentNode.offsetWidth-e.offsetWidth-r-(parseInt(a.right)||0)+(parseInt(a.left)||0)-l)&&1!=l||(a.margin="auto")),i.parentNode.removeChild(i),i=null,a}}}(window),function(){var t=document.querySelector(".back-top"),e=window.scrollY,o={duration:400,easing:function(t,e,o,n){return-o*(t/=n)*(t-2)+e},to:0},n=function(t){r(t)&&(t={to:t});var e=l(o,t);e.startingYOffset=window.pageYOffset,e.distanceYOffset=parseInt(e.to,10)-e.startingYOffset,window.requestAnimationFrame((function(t){return i(e,t)}))},i=function t(e,o){e.startTime||(e.startTime=o);var n=o-e.startTime,i=Math.round(e.easing(n,e.startingYOffset,e.distanceYOffset,e.duration));n<e.duration?window.requestAnimationFrame((function(o){return t(e,o)})):i=e.to,s(i)},s=function(t){document.documentElement.scrollTop=t,document.body.scrollTop=t},r=function(t){return Number.isInteger?Number.isInteger(t):"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},l=function(t,e){var o={};for(var n in t)o[n]=e[n]||t[n];return o},a=function(t,e,o,n){return o*(t/=n)*t*t*t*t+e};const c=document.querySelectorAll(".back-top");if(null!=c)for(var f=0;f<c.length;f++)c[f].addEventListener("click",(function(){n({easing:a,duration:800})}));window.addEventListener("scroll",(function(){(e=window.scrollY)>300?(t.classList.add("block"),t.classList.remove("hidden")):(t.classList.remove("block","opacity-90"),t.classList.add("hidden")),e>1200&&t.classList.add("opacity-90")}))}(),null!=document.querySelector(".preloader")&&window.addEventListener("load",(function(){document.querySelector("body").classList.add("loaded-success")})),function(){var t=document.querySelectorAll(".sticky");if(null!=t)for(var e=0;e<t.length;e++)new hcSticky(t[e],{stickTo:t[e].parentNode,top:28,bottomEnd:0})}(),function(){for(var t=document.querySelectorAll(".dropdown > a"),e=document.querySelectorAll(".dropdown > .dropdown-menu"),o=document.querySelectorAll(".dropdown > .dropdown-menu > .subdropdown > .dropdown-menu"),n=function(e){t[e].addEventListener("click",(function(n){n.stopPropagation(),n.preventDefault(),t[e].nextElementSibling.classList.toggle("show"),t[e].parentNode.classList.toggle("show"),void 0===o[e]||(o[e].classList.remove("show"),o[e].parentNode.classList.remove("show"))}))},i=0;i<t.length;i++)n(i);window.onclick=function(t){if(!t.target.matches(".dropdown > a")){var n;for(n=0;n<e.length;n++){var i=e[n];i.classList.contains("show")&&i.classList.remove("show")}for(n=0;n<o.length;n++){var s=o[n];s.classList.contains("show")&&s.classList.remove("show")}}}}(),function(){for(var t=document.querySelectorAll(".dropdown > .dropdown-menu > .subdropdown > a"),e=function(e){t[e].addEventListener("click",(function(o){o.stopPropagation(),o.preventDefault(),t[e].nextElementSibling.classList.toggle("show"),t[e].parentNode.classList.toggle("show")})),window.addEventListener("mouseup",(function(o){o.target!=t[e].nextElementSibling&&o.target.parentNode!=t[e].nextElementSibling&&1!=o.target.classList.contains("dropdown-menu")&&(void 0===t[e]||t[e].parentNode.classList.remove("show"))}))},o=0;o<t.length;o++)e(o)}(),function(){for(var t=document.querySelectorAll(".search-dropdown > button"),e=(document.querySelectorAll(".search-dropdown > .dropdown-menu"),function(e){t[e].addEventListener("click",(function(o){o.stopPropagation(),o.preventDefault(),t[e].nextElementSibling.classList.toggle("show"),t[e].parentNode.classList.toggle("show")}))}),o=0;o<t.length;o++)e(o)}(),function(){var t=document.querySelectorAll(".back-menu");if(null!=t)for(var e=0;e<t.length;e++)t[e].addEventListener("click",(function(){for(var t=document.getElementsByClassName("side-menu"),e=0;e<t.length;e++)t[e].classList.remove("show");var o=document.querySelectorAll(".side-area");for(e=0;e<o.length;e++)o[e].classList.remove("show")}))}(),function(){var t=document.querySelectorAll(".menu-mobile");if(null!=t)for(var e=0;e<t.length;e++)t[e].addEventListener("click",(function(){for(var t=document.getElementsByClassName("side-menu"),e=0;e<t.length;e++)t[e].classList.add("show");var o=document.querySelectorAll(".side-area");for(e=0;e<o.length;e++)o[e].classList.add("show")}))}();
