(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(52)},29:function(e,t,a){},30:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),o=a.n(s),c=(a(29),a(30),a(23)),l=a(2),i="CHANGE_APP_STATUS",u="INPUT_EMPTY",d=a(21),m=a(5),b={status:u};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return{status:t.payload};default:return e}},v=a(22),N=Object(m.c)(p,Object(m.a)(v.a)),E=function(e){return{type:i,payload:e}},f=function(e){return function(t){t(E("WAITING_RESPONSE")),d.post("/validate-json",{json:e}).then(function(e){var a=e.data.valid;t(E(!0===a?"VALID_JSON":"INVALID_JSON"))})}},h=Object(l.b)(function(e){return{status:e.status}})(function(e){var t;switch(e.status){case"INVALID_JSON":t=r.a.createElement("div",{className:"text-red-500 font-bold text-xl"},"the ",r.a.createElement("span",{className:"text-gray-800"},"JSON"),"  is invalid");break;case"VALID_JSON":t=r.a.createElement("div",{className:"text-gray-800 font-bold text-xl"},"your input is a valid ",r.a.createElement("span",{className:"text-red-800"},"JSON"));break;case"WAITING_RESPONSE":t=r.a.createElement("div",{className:"text-green-700 font-bold text-xl"},"Please wait...");break;default:t=r.a.createElement("div",{className:"text-gray-800 font-bold text-xl"},"please insert a ",r.a.createElement("span",{className:"text-red-800"},"JSON"),"  and press ",r.a.createElement("span",{className:"font-extrabold"},"Submit")," ")}return r.a.createElement("div",{className:"py-5"},t)}),x=Object(l.b)(function(e){return{status:e.status}})(function(e){var t="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block";return"WAITING_SUBMIT"!==e.status&&(t+=" opacity-50 cursor-not-allowed"),r.a.createElement("div",{className:"inline-block mx-10 mt-8"},r.a.createElement("button",{type:"button",className:t,onClick:e.handleSubmit},"SUBMIT"))}),w=Object(l.b)(function(e){return{status:e.status}})(function(e){var t="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded";return("WAITING_RESPONSE"===e.status||e.status===u)&&(t+=" opacity-50 cursor-not-allowed"),r.a.createElement("div",{className:"inline-block"},r.a.createElement("button",{className:t,onClick:e.clearInput},"CLEAR"))}),S=Object(l.b)(function(e){return{status:e.status}})(function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),s=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"text-5xl text-yellow-900 pt-12"},r.a.createElement("span",{className:"text-red-800 font-bold"},"JSON "),r.a.createElement("span",{className:"font-light italic"},"validator")),r.a.createElement("div",{className:"mt-5 w-4/6 mx-auto"},r.a.createElement("textarea",{name:"",id:"",cols:"50",rows:"6",onChange:function(t){t.target.value.length>0?e.dispatch(E("WAITING_SUBMIT")):e.dispatch(E(u)),o(t.target.value)},value:s}),r.a.createElement(h,null),r.a.createElement(x,{handleSubmit:function(){e.dispatch(f(s))}}),r.a.createElement(w,{clearInput:function(){e.dispatch(E(u)),o("")}})))});var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.store=N,window.changeAppStatus=E,window.submitJson=f,o.a.render(r.a.createElement(l.a,{store:N},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.0fb5a281.chunk.js.map