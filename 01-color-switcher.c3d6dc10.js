!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,n.disabled=!1,o=setInterval((function(){color="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.style.background=color}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,n.disabled=!0,clearInterval(o)}));var o=null}();
//# sourceMappingURL=01-color-switcher.c3d6dc10.js.map
