!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r,i,u=o("8AyfK"),c={firstDelay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnCreate:document.querySelector('button[type="submit"]'),form:document.querySelector(".form")};function a(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}c.form.addEventListener("submit",(function(e){e.preventDefault();for(var t=0,n=Number(e.target[0].value),o=e.target[2].value,r=Number(e.target[1].value),i=0;i<o;i+=1)a(t+=1,n).then((function(e){return u.default.success(e)})).catch((function(e){return u.default.warning(e)})),n+=r;c.form.reset()})),(r=2,i=1500,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:r,delay:i}):t({position:r,delay:i})}),i)}))).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}();
//# sourceMappingURL=03-promises.331c7911.js.map