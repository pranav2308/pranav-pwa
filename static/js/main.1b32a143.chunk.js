(this["webpackJsonppranav-pwa"]=this["webpackJsonppranav-pwa"]||[]).push([[0],{45:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(37),c=t.n(a),r=(t(45),t(14)),s=t(12),l=t(73),g=t(70),h=Object(s.a)("div")({height:"100vh",width:"100vw",backgroundColor:"#B3ABCF"}),u=Object(s.a)(l.a)({color:"#413175",fontFamily:"Roboto"}),p=Object(s.a)(g.a)({color:"#FFFFFF",backgroundColor:"#413175",height:"60px","&:hover":{backgroundColor:"#605292"}}),d=t(72),f=t(3);var v=function(){var e=i.a.useState(!0),n=Object(r.a)(e,2),t=n[0],o=n[1];i.a.useEffect((function(){navigator.serviceWorker.addEventListener("message",(function(e){var n=e.data;void 0!==n&&o(n)}))}),[]);var a=t?[{action:"wake up",title:"Wake up the sloth!",icon:"images/favicon16.png"},{action:"close",title:"Close notification",icon:"images/favicon16.png"}]:[{action:"put to sleep",title:"Put sloth to sleep again!",icon:"images/favicon16.png"},{action:"close",title:"Close notification",icon:"images/favicon16.png"}],c=t?"Do you really want to wake me up?":"Do you really want me to go to sleep again?",s=t?"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sloth-sleeping-john-benedict.jpg":"https://i.huffpost.com/gen/1742216/thumbs/o-SLOTH-facebook.jpg",l=t?"Press this button to wake up the sloth!":"Press this button to put sloth to sleep again";return Object(f.jsx)(h,{children:Object(f.jsxs)(d.a,{container:!0,direction:"row",style:{paddingTop:"100px"},children:[Object(f.jsx)(d.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(f.jsx)(u,{variant:"h2",children:"Sleepy Sloth"})}),Object(f.jsx)(d.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"30px"},children:Object(f.jsx)("img",{src:s,width:"300px",height:"200px"})}),Object(f.jsx)(d.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"30px"},children:Object(f.jsx)(p,{onClick:function(){Notification.requestPermission().then((function(e){navigator.serviceWorker.ready.then((function(e){e.showNotification("Sloth says:",{body:c,icon:"images/favicon16.png",image:"../images/logo192.png",actions:a,vibrate:[200,100,200,100,200,100,200],tag:"notification-sample"})}))}))},children:l})})]})})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),a(e),c(e)}))};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pranav-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pranav-pwa","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),b()}},[[51,1,2]]]);
//# sourceMappingURL=main.1b32a143.chunk.js.map