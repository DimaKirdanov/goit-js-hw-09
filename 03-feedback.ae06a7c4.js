!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={saveToStorage:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log("MyStorage save ",e)}},loadFromStorage:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.log("loadfromStorage ",e,t)}}},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),s=Object.prototype.toString,g=Math.max,y=Math.min,m=function(){return v.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,f=setTimeout(j,t),d?p(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=a}function j(){var e=m();if(T(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-c);return v?y(n,a-(e-l)):n}(e))}function w(e){return f=void 0,s&&r?p(e):(r=i=void 0,u)}function O(){var e=m(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(v)return f=setTimeout(j,t),p(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(v="maxWait"in n)?g(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(m())},O}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}var h="feedback-form-state",T=e((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})}))((function(e){if(e.currentTarget){for(var t=e.currentTarget;"FORM"!==t.nodeName;)t=t.parentNode;var r=new FormData(t),o={};r.forEach((function(e,t){o[t]=e})),n.saveToStorage(h,o)}}),500),j=n.loadFromStorage(h),w=document.querySelector(".feedback-form"),O=!0,N=!1,x=void 0;try{for(var E,M=w.elements[Symbol.iterator]();!(O=(E=M.next()).done);O=!0){var F=E.value;F.name&&(j&&j[F.name]&&(F.value=j[F.name]),F.addEventListener("input",T))}}catch(e){N=!0,x=e}finally{try{O||null==M.return||M.return()}finally{if(N)throw x}}w.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.ae06a7c4.js.map
