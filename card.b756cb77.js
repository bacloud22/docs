!function(){let e,t;function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=o.parcelRequire94c2;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},o.parcelRequire94c2=i),i.register,i("iE7OH").register(i("aNJCr").getBundleURL("eSBza"),JSON.parse('["eSBza","card.b756cb77.js","aehmt","giphy.356b0fc8.gif","6bPnX","index.1ebec07d.js"]'));var l=i("aJuKM"),d=i("i15G4"),s=i("eUkKm"),c=i("hAmjI"),u=i("8woy4"),f=i("995BL"),p=i("doFtP"),h=i("1uya5"),m=i("aso8C"),g=i("9FmRn"),y=i("44nLm");h.config.searchPseudoElements=!0,(0,h.library).add(m.faFacebook,m.faInstagram,m.faSnapchat,m.faMastodon,m.faTwitter,m.faYoutube,m.faTelegram,m.faSkype,m.faVk,m.faWhatsapp,g.faEnvelope,g.faUser,g.faPhone,g.faKey),(0,h.dom).i2svg(),(0,h.dom).watch(),window.Sharer=d,s.selectors.filter=".stretchy",s.init(document.querySelector(".form1"));let b=new URL(i("aNJCr").getBundleURL("eSBza")+"giphy.356b0fc8.gif"),v=document.querySelector(".form1"),_="0".repeat(p.__supportedSocials.length),E=!1,S=[],w=(0,p.__envPath).split("card.html")[1]||(0,p.__envPath).split("card")[1],L="0"!==w.charAt(w.length-1),A=(w=w.slice(0,-1)).slice(1).hashCode(),C=(0,p.__reverse)(w,_);t=C[0],_=C[1],E=void 0===t||1===t.length;let H=new c.SocialLinks;function R(e){"ar"===e.value?document.dir="rtl":document.dir="ltr",n(l).setLocale(e.value)}!function(){let e=["user",...p.__supportedSocials,"envelope","phone"];S=[];for(let n=0;n<e.length;n++){let o=e[n],r=t[n];if("user"==o)S.push([0,o,r]);else if("envelope"==o)S.push([e.length-2,o,r]);else if("phone"==o)S.push([e.length-1,o,r]);else{let e=parseInt(_[n-1]);S.push([e,o,t[e]])}}for(let n=e.length;n<t.length;n++)S.push([e.length,-1,t[n]]);S.sort()}(),window.addEventListener("DOMContentLoaded",()=>{R(Array.from(document.querySelector("#lang-select").options).filter(e=>!0==e.defaultSelected)[0])}),document.getElementById("lang-select").addEventListener("change",function(){R(this)},!1),document.getElementById("decrypt-button").addEventListener("click",function(){let t=prompt("This social card seems encrypted. Enter in the key!")||"";if(t){if(t.length<4||t.length>8)M(!0);else{for(e of S)e[2]&&(e[2]=(0,u.XORCipher).decode(t,e[2]));document.getElementsByClassName("form1")[0].innerHTML="",B(S)}}});let T=0;function B(t){for(e of t){let t,n=e[1],o=e[2];if(""!=o){if(H.isValid(n,o)&&(t=H.getLink(n,o)),T+=1,"envelope"===n){v.insertAdjacentHTML("beforeend",`<div id="mail-id"><a href="mailto:${o}">${o}</a></div>`);continue}if("phone"===n){v.insertAdjacentHTML("beforeend",`<div id="phone-id"><a href="tel:${o}">${o}</a></div>`);continue}"user"===n&&document.querySelectorAll(".user").forEach(e=>{e.innerHTML=o});let e=document.createElement("I");(0,p.__supportedSocials).indexOf(n)>=0?e.setAttribute("class",`fa-brands fa-${n} icon`):e.setAttribute("class",`fa fa-${n} icon`),v.appendChild(e);let r=document.createElement("INPUT");if(r.setAttribute("name",n),r.setAttribute("class","input-field stretchy"),r.setAttribute("value",o),r.setAttribute("type","text"),r.setAttribute("readonly","readonly"),v.appendChild(r),t){r.style="cursor: pointer;";let e=document.createElement("a");e.style="display: contents;",e.setAttribute("href",t),(0,p.wrap)(r,e)}}}}function M(e){if(!e)return;v.innerHTML="";let t=document.createElement("img");t.src=b,v.appendChild(t);let n=document.createElement("h2");n.innerText="QR code or URL is probably wrong",v.appendChild(n)}if(M(E),!E){B(S),T=T>7?7:T;let e=v.getBoundingClientRect().top+window.scrollY;window.scroll({top:e,behavior:"smooth"}),(0,y.join)(!1,A,L)}document.body.hidden=!1,n(l).enableDomScan(!0),n(l).addCatalogs(f.stoneJsCatalogs)}();
//# sourceMappingURL=card.b756cb77.js.map