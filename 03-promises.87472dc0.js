!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("8AyfK"),u={firstDelay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnCreate:document.querySelector('button[type="submit"]'),form:document.querySelector(".form")};function i(e,t){return new Promise((function(n,r){setTimeout((function(){Math.random()>.3?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}u.form.addEventListener("submit",(function(e){e.preventDefault();for(var t=0,n=Number(e.target[0].value),r=e.target[2].value,a=Number(e.target[1].value),c=0;c<r;c+=1)i(t+=1,n).then((function(e){return o.default.success(e)})).catch((function(e){return o.default.warning(e)})),n+=a;u.form.reset()}))}();
//# sourceMappingURL=03-promises.87472dc0.js.map