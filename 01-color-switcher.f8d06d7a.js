refs={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let t=null;refs.body.addEventListener("click",(function({target:e}){e===refs.btnStart&&(refs.btnStop.removeAttribute("disabled"),refs.btnStart.setAttribute("disabled",!0),t=setInterval((()=>{refs.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3));e===refs.btnStop&&(refs.btnStart.removeAttribute("disabled"),refs.btnStop.setAttribute("disabled",!0),clearInterval(t))})),refs.btnStop.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.f8d06d7a.js.map
