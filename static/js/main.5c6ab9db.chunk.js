(this["webpackJsonphow-far-can-i-go"]=this["webpackJsonphow-far-can-i-go"]||[]).push([[0],{31:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(36),n(7)),u=n(8);function l(){var e=Object(i.a)(["\n  text-align: center;\n  opacity: 0.8;\n  padding: 0 10%;\n  @media (max-width: 600px) {\n    font-size: 0.9rem;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(i.a)(["\n  text-align: center;\n  margin-bottom: 0;\n  @media (max-width: 600px) {\n    font-size: 1.5rem;\n  }\n"]);return s=function(){return e},e}var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,"How far can I go?"),r.a.createElement(f,null,"Find out how far you can go within the 25km lockdown zone in Victoria"))},m=u.a.h1(s()),f=u.a.p(l()),p=n(28),b=n(17),g=n(6),d=n(44),v=n(41),w=n(42),O=n(43),j=n(24),E=n(25),y=n(29),x=n(27),k=n(40),z=n(16),L=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"createLeafletElement",value:function(){return Object(z.a)({provider:new z.b,style:"bar",searchLabel:"".concat(this.props.searchLabel),autoClose:!0,retainZoomLevel:!0,classNames:{input:"input"}})}}]),n}(k.a);function S(){var e=Object(i.a)(["\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n"]);return S=function(){return e},e}var W=function(){var e=Object(a.useState)([-37.8047962,144.9413828]),t=Object(b.a)(e,2),n=t[0],o=(t[1],Object(a.useState)([])),c=Object(b.a)(o,2),i=c[0],u=c[1],l=Object(a.useRef)(null),s=Object(g.b)(L);return Object(a.useEffect)((function(){l.current.leafletElement.on("geosearch/showlocation",(function(e){var t=Object(p.a)(i);t.length<2||t.splice(0,2),t.push([e.location.y,e.location.x]),u(t)}))}),[i]),r.a.createElement(q,{center:n,zoom:10,ref:l},r.a.createElement(s,{searchLabel:1===i.length?"Where are you going?":"Where do you live"}),r.a.createElement(d.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"}),i.map((function(e,t){return r.a.createElement(v.a,{position:e,key:t},r.a.createElement(w.a,{center:e,color:0===t?"blue":"green",radius:25e3,key:t}))})))},q=Object(u.a)(O.a)(S());function B(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n"]);return B=function(){return e},e}var F=function(){return r.a.createElement(I,null,r.a.createElement(h,null),r.a.createElement(W,null))},I=u.a.div(B());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.5c6ab9db.chunk.js.map