(this["webpackJsonppranav-pwa"]=this["webpackJsonppranav-pwa"]||[]).push([[0],{45:function(e,n,o){},51:function(e,n,o){"use strict";o.r(n);var t=o(0),i=o.n(t),a=o(37),r=o.n(a),c=(o(45),o(14)),s=o(12),l=o(73),g=o(70),h=Object(s.a)("div")({height:"100vh",width:"100vw",backgroundColor:"#B3ABCF"}),d=Object(s.a)(l.a)({color:"#413175",fontFamily:"Roboto"}),u=Object(s.a)(g.a)({color:"#FFFFFF",backgroundColor:"#413175",height:"60px","&:hover":{backgroundColor:"#605292"}}),p=o(72),f=o(3);var v=function(){var e=i.a.useState(!0),n=Object(c.a)(e,2),o=n[0],t=n[1];i.a.useEffect((function(){navigator.serviceWorker.addEventListener("message",(function(e){var n=e.data;void 0!==n&&t(n)}))}),[]);var a,r=["Don't just do something, sit there!","Never postpone what you can cancel","Always take a pillow wherever you go!","You can never have enough sleep","Use the bathroom facing down","Never waste any time you can spend on sleeping","Always say, I'll do it tomorrow","Getting out of bed for work is something we should be bragging about all the time","There may be no excuse for laziness, but always keep looking for one"];"Notification"in window&&(a=Object(f.jsx)(p.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"30px"},children:Object(f.jsx)(u,{onClick:function(){var e=r[Math.floor(Math.random()*r.length)];navigator.serviceWorker.ready.then((function(n){n.showNotification("Sloth says:",{body:e,icon:"images/favicon16.png",image:"../images/logo192.png",vibrate:[200,100,200,100,200,100,200],tag:"non-interactive-notification-sample"})}))},children:"Listen to sloth's wisdom!"})}));var s,l=o?[{action:"wake up",title:"Wake up the sloth!",icon:"images/favicon16.png"},{action:"close",title:"Close notification",icon:"images/favicon16.png"}]:[{action:"put to sleep",title:"Put sloth to sleep again!",icon:"images/favicon16.png"},{action:"close",title:"Close notification",icon:"images/favicon16.png"}],g=o?"Do you really want to wake me up?":"Do you really want me to go to sleep again?",v=o?"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sloth-sleeping-john-benedict.jpg":"https://i.huffpost.com/gen/1742216/thumbs/o-SLOTH-facebook.jpg",w=o?"Wake up the sloth!":"Put sloth to sleep again";return navigator.share&&(s=Object(f.jsx)(p.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"30px"},children:Object(f.jsx)(u,{onClick:function(){try{navigator.share({url:window.location.href,title:document.title})}catch(e){console.error("Could not share! we got error: ",e)}},children:"Spread the sloth's wisdom with your friends!"})})),Object(f.jsx)(h,{children:Object(f.jsxs)(p.a,{container:!0,direction:"row",style:{paddingTop:"100px"},children:[Object(f.jsx)(p.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(f.jsx)(d,{variant:"h2",children:"Sleepy Sloth"})}),Object(f.jsx)(p.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"30px"},children:Object(f.jsx)("img",{src:v,width:"300px",height:"200px"})}),a,Object(f.jsx)(p.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"30px"},children:Object(f.jsx)(u,{onClick:function(){Notification.requestPermission().then((function(e){navigator.serviceWorker.ready.then((function(e){e.showNotification("Sloth says:",{body:g,icon:"images/favicon16.png",image:"../images/logo192.png",actions:l,vibrate:[200,100,200,100,200,100,200],tag:"notification-sample"})}))}))},children:w})}),s]})})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,74)).then((function(n){var o=n.getCLS,t=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;o(e),t(e),i(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pranav-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pranav-pwa","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),b()}},[[51,1,2]]]);
//# sourceMappingURL=main.80f0eed8.chunk.js.map