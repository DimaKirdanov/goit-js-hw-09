const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disabled=!0})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.77705a01.js.map