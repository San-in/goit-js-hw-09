var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("7ROMk");const u={firstDelay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnCreate:document.querySelector('button[type="submit"]'),form:document.querySelector(".form")};function i(e,t){return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.form.addEventListener("submit",(function(e){e.preventDefault();let t=0,r=Number(e.target[0].value);const n=e.target[2].value,l=Number(e.target[1].value);for(let e=0;e<n;e+=1)t+=1,i(t,r).then((e=>o.default.success(e))).catch((e=>o.default.warning(e))),r+=l;u.form.reset()}));
//# sourceMappingURL=03-promises.2777bfe2.js.map
