(()=>{"use strict";function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,o=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==t.return||t.return()}finally{if(i)throw a}}return o}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw u}}}}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var a,o,u,i,l,c,d,s,f,y,v,h,m,b,p,g,S,w;(a=[],o=["C","D","H","S"],u=["A","J","Q","K"],i=[],l=document.querySelector("#btn_pedir"),c=document.querySelector("#btn_detener"),d=document.querySelector("#btn_nuevoJuego"),s=document.querySelectorAll(".div_cartas"),f=document.querySelectorAll("small"),y=document.querySelector("#cards"),v=document.querySelector("#cards_computadora"),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;a=m(),i=[];for(var n=0;n<e;n++)i.push(0);f.forEach((function(e){return e.innerText=0})),s.forEach((function(e){return e.innerText=""})),l.disabled=!1,c.disabled=!1,y.classList.add("espacio"),v.classList.add("espacio")},m=function(){a=[];for(var e=2;e<=10;e++){var t,r=n(o);try{for(r.s();!(t=r.n()).done;){var i=t.value;a.push(e+i)}}catch(e){r.e(e)}finally{r.f()}}var l,c=n(o);try{for(c.s();!(l=c.n()).done;){var d,s=l.value,f=n(u);try{for(f.s();!(d=f.n()).done;){var y=d.value;a.push(y+s)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){c.e(e)}finally{c.f()}return b(a)},b=function(e){return e.sort((function(){return Math.random()-.5})),e},p=function(){if(0===a.length)throw"No hay cartas en el deck";return a.pop()},g=function(e,n){return i[n]=i[n]+function(e){var n=e.substring(0,e.length-1);return isNaN(n)?"A"===n?11:10:1*n}(e),f[n].innerText=i[n],i[n]},S=function(e,n){var t=document.createElement("img");t.src="assets/img/cartas/".concat(e,".png"),t.classList.add("carta"),s[n].append(t)},w=function(n){var t=0;do{var r=p();t=g(r,i.length-1),S(r,i.length-1)}while(t<n&&n<=21);!function(){var n=e(i,2),t=n[0],r=n[1];setTimeout((function(){r===t?alert("Nadie gana"):t>21?alert("Computadora ha ganado"):r>21?alert("Has ganado"):alert("Computadora ha ganado")}),250)}()},l.addEventListener("click",(function(){var e=p(),n=g(e,0);S(e,0),n>21?(console.warn("Lo siento perdiste"),l.disabled=!0,c.disabled=!0,w(n)):21===n&&(console.warn("21, lo lograste"),l.disabled=!0,c.disabled=!0,w(n))})),c.addEventListener("click",(function(){l.disabled=!0,c.disabled=!0,w(i[0])})),d.addEventListener("click",(function(){h()})),{nuevoJuego:h}).nuevoJuego()})();