(this["webpackJsonphow-far-can-i-go"]=this["webpackJsonphow-far-can-i-go"]||[]).push([[0],{31:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(36),n(7)),u=n(8);function l(){var e=Object(i.a)(["\n  text-align: center;\n  @media (max-width: 600px) {\n    font-size: 1.5rem;\n  }\n"]);return l=function(){return e},e}var s=function(){return r.a.createElement(h,null,"How far can I go?")},h=u.a.h1(l()),f=n(28),m=n(17),b=n(6),p=n(44),g=n(41),v=n(42),O=n(43),d=n(24),j=n(25),w=n(29),E=n(27),y=n(40),x=n(16),k=function(e){Object(w.a)(n,e);var t=Object(E.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"createLeafletElement",value:function(){return Object(x.a)({provider:new x.b,style:"bar",searchLabel:"".concat(this.props.searchLabel),autoClose:!0,retainZoomLevel:!0,classNames:{input:"input"}})}}]),n}(y.a);function L(){var e=Object(i.a)(["\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n"]);return L=function(){return e},e}var S=function(){var e=Object(a.useState)([-37.8047962,144.9413828]),t=Object(m.a)(e,2),n=t[0],o=(t[1],Object(a.useState)([])),c=Object(m.a)(o,2),i=c[0],u=c[1],l=Object(a.useRef)(null),s=Object(b.b)(k);return Object(a.useEffect)((function(){l.current.leafletElement.on("geosearch/showlocation",(function(e){var t=Object(f.a)(i);t.length<2||t.splice(0,2),t.push([e.location.y,e.location.x]),u(t)}))}),[i]),r.a.createElement(W,{center:n,zoom:10,ref:l},r.a.createElement(s,{searchLabel:1===i.length?"Where are you going?":"Where do you live"}),r.a.createElement(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"}),i.map((function(e,t){return r.a.createElement(g.a,{position:e,key:t},r.a.createElement(v.a,{center:e,color:0===t?"blue":"green",radius:25e3,key:t}))})))},W=Object(u.a)(O.a)(L());function z(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n"]);return z=function(){return e},e}var q=function(){return r.a.createElement(B,null,r.a.createElement(s,null),r.a.createElement(S,null))},B=u.a.div(z());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.58c24716.chunk.js.map