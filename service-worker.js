!function(){let e=[],_="";async function a(){let a=e;for(var n=a.length-1;n>=0;n--)if(a[n].indexOf("giphy")>-1){a.splice(n,1);break}caches.open(_).then(async _=>{try{await _.addAll(e)}catch(e){return console.error(`Oops! ${e}`)}})}async function n(){let e=await caches.keys();await Promise.all(e.map(e=>e!==_&&caches.delete(e)))}e=["/app.js","/index.html","/apple-touch-icon.9424cfda.png","/favicon.48c0a9c0.png","/manifest.webmanifest","/pineapple-72.fbab16cd.png","/pineapple-96.1c1f2a61.png","/pineapple-128.9d335300.png","/pineapple-144.b73364c7.png","/pineapple-152.96a5c869.png","/pineapple-192.eaa3b278.png","/pineapple-384.1ed92c88.png","/pineapple-512.0dbf64e5.png","/safe-browsing.d0b85bc7.png","/one-free.bfde0ae5.png","/private2.82df534d.png","/girl-running.8ae223e8.png","/index.d4548f0c.css","/index.0b957f5e.css","/ui-icons_444444_256x240.3dddeefe.png","/ui-icons_555555_256x240.d9c31d8c.png","/ui-icons_ffffff_256x240.a15bd7e0.png","/ui-icons_777620_256x240.367b65d5.png","/ui-icons_cc0000_256x240.3ede6948.png","/ui-icons_777777_256x240.3cc7a119.png","/index.27a9c7ed.js","/index.210c6e46.js","/index.e16e6d04.js","/trystero.4f19cd1f.js","/index.cb7439af.js","/index.15d5a2d7.js","/trystero.566d5c04.js","/card.html","/card.ae00e67b.js","/giphy.356b0fc8.gif","/card.fecc4e44.js","/giphy.356b0fc8.gif","/landing.html","/landing.80126a76.css","/card2.09e1e940.png","/card1.665c7563.png","/card3.869476da.png"],_="52362a8d",addEventListener("install",e=>e.waitUntil(a())),addEventListener("activate",e=>e.waitUntil(n()))}();
//# sourceMappingURL=service-worker.js.map
