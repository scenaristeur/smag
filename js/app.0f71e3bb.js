(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0d0047e6","chunk-054d10f8":"0f8aeedf","chunk-2d0c953b":"b0ce1395","chunk-2d0d3a59":"8d7808b5","chunk-2d207f75":"a54ba090","chunk-37e80acb":"03b58149","chunk-8c2f73b0":"c476d96e","chunk-2d0a47a3":"f6c5f415","chunk-76800a3d":"3336f1e0","chunk-7d59fcc4":"673c7f12","chunk-f96af618":"ff2da461","chunk-1f9630aa":"2b9f4184"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-8c2f73b0":1,"chunk-7d59fcc4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-054d10f8":"31d6cfe0","chunk-2d0c953b":"31d6cfe0","chunk-2d0d3a59":"31d6cfe0","chunk-2d207f75":"31d6cfe0","chunk-37e80acb":"31d6cfe0","chunk-8c2f73b0":"05d97788","chunk-2d0a47a3":"31d6cfe0","chunk-76800a3d":"31d6cfe0","chunk-7d59fcc4":"5dc319d7","chunk-f96af618":"31d6cfe0","chunk-1f9630aa":"31d6cfe0"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/smag/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("AutomergeTest")],1),n("router-view"),n("hr"),n("Checklist"),n("Login"),n("NewItem"),e._v(" "+e._s(e.session)+" "),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",[n("i",[e._v("0.0.2 - automerge ")])])}],c=n("1da1"),u=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),{name:"App",components:{Navbar:function(){return n.e("chunk-2d207f75").then(n.bind(null,"a37d"))},Login:function(){return n.e("chunk-8c2f73b0").then(n.bind(null,"2a9a"))},NewItem:function(){return n.e("chunk-37e80acb").then(n.bind(null,"c604"))},Checklist:function(){return n.e("chunk-2d0d3a59").then(n.bind(null,"5e3f"))},AutomergeTest:function(){return n.e("chunk-2d0c953b").then(n.bind(null,"5956"))}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$checkSession();case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){},watch:{$route:function(){void 0!=this.$route.query.source&&this.$route.query.source.length>0?this.$processSource(this.$route.query):(this.$store.commit("nodes/setSource",null),this.$checkSession())}},computed:{session:{get:function(){return this.$store.state.solid.session},set:function(){}}}}),s=u,i=(n("034f"),n("2877")),l=Object(i["a"])(s,o,a,!1,null,null,null),f=l.exports,p=n("9483");Object(p["a"])("".concat("/smag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Smag has been updated, please close the app & re-open")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"home"})},g=[],m={name:"Home",components:{}},b=m,v=Object(i["a"])(b,h,g,!1,null,null,null),w=v.exports;r["default"].use(d["a"]);var x,k=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new d["a"]({mode:"history",base:"/smag/",routes:k}),j=y,O=n("2f62"),R=function(){return{session:null,pod:null}},$={addWorkspace:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.state.pod.workspaces.push(t),r["default"].prototype.$addWorkspaceToPod(t);case 2:case"end":return n.stop()}}),n)})))()}},I={setPod:function(e,t){console.log("pod",t),e.pod=t},setSession:function(e,t){e.session=t}},S={namespaced:!0,state:R,actions:$,mutations:I},A=function(){return{currentItem:null}},P={},_={setCurrentItem:function(e,t){e.currentItem=t}},D={namespaced:!0,state:A,actions:P,mutations:_},E=(n("159b"),n("e9c4"),"smag"),C=1,N={getDb:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(x)return e(x);console.log("OPENING DB",x);var n=window.indexedDB.open(E,C);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){x=t.target.result,e(x)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;t.createObjectStore("node",{keyPath:"id"})}})));case 1:case"end":return e.stop()}}),e)})))()},deleteItem:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["node"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("node");o.delete(e.id)})));case 4:case"end":return n.stop()}}),n)})))()},clearStore:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("clear store"),t.prev=1,t.next=4,e.getDb();case 4:n=t.sent,r=n.transaction(["node"],"readwrite"),o=r.objectStore("node"),a=o.clear(),a.onsuccess=function(e){console.log(e)},t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),alert(t.t0);case 14:return t.next=16,e.getItems();case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getItems:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return n=t.sent,t.abrupt("return",new Promise((function(e){var t=n.transaction(["node"],"readonly");t.oncomplete=function(){e(o)};var r=t.objectStore("node"),o=[];r.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t.continue())}})));case 4:case"end":return t.stop()}}),t)})))()},saveItem:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["node"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("node");o.put(e)})));case 4:case"end":return n.stop()}}),n)})))()}},T=n("4f8e"),M={create:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T["from"](e);case 2:return n=t.sent,t.next=5,T["getActorId"](n);case 5:return r=t.sent,t.next=8,T["save"](n);case 8:return o=t.sent,t.abrupt("return",{id:r,uint8:o});case 10:case"end":return t.stop()}}),t)})))()},load:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T["load"](e.uint8);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},L=n("11c1"),F=function(){return{items:[]}},W={deleteItem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=confirm("Are you sur you want to delete "+t["ve:name"]),1!=n){e.next=5;break}return console.log("store is being asked to delete "+t.id,t["ve:name"]),e.next=5,N.deleteItem(t);case 5:case"end":return e.stop()}}),e)})))()},getItems:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.items=[],t.next=3,N.getItems();case 3:n=t.sent,n.forEach(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.load(n);case 2:n.doc=t.sent,console.log(n),e.state.items.push(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})))()},createItem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return void 0==t["ve:created"]&&(t["ve:created"]=Date.now()),t["ve:updated"]=Date.now(),e.next=4,M.create(t);case 4:return n=e.sent,console.log("node",n),e.next=8,N.saveItem(n);case 8:case"end":return e.stop()}}),e)})))()},saveItem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0==t.id&&(t.id=Object(L["v4"])()),void 0==t["ve:created"]&&(t["ve:created"]=Date.now()),t["ve:updated"]=Date.now(),
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
n=!1,o=null,1==n){e.next=11;break}return e.next=8,r["default"].prototype.$createAM(t);case 8:o=e.sent,e.next=14;break;case 11:return e.next=13,r["default"].prototype.$changeAM(n,t);case 13:o=e.sent;case 14:return console.log("newDoc",o),e.next=17,r["default"].prototype.$saveAM(o);case 17:return a=e.sent,a.type="tension",console.log("store is being asked to save "+JSON.stringify(a)),e.next=22,N.saveItem(a);case 22:case"end":return e.stop()}}),e)})))()},clearStore:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=confirm("Do you want to KEEP all nodes stored on this device ?"),0!=t){e.next=4;break}return e.next=4,N.clearStore();case 4:case"end":return e.stop()}}),e)})))()}},B={},V={namespaced:!0,state:F,actions:W,mutations:B};r["default"].use(O["a"]);var q=new O["a"].Store({state:{},mutations:{},actions:{},modules:{solid:S,app:D,local:V}}),H=n("668b"),J=(n("b0c0"),n("d81d"),n("caad"),n("2532"),n("93ef")),K=n("d11f"),U=n("dbc7"),G=n("8522"),z={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$checkSession=Object(c["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G["handleIncomingRedirect"]({restorePreviousSession:!0}).then((function(e){if(1==e.isLoggedIn){console.log("Logged in with WebID [".concat(e.webId,"]")),n.commit("solid/setSession",e);var r=G["getDefaultSession"]();t.$getPodInfosFromSession(r)}}));case 2:case"end":return e.stop()}}),e)}))),e.prototype.$login=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("login",t),G["getDefaultSession"]().info.isLoggedIn){e.next=4;break}return e.next=4,G["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Verse"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=G["getDefaultSession"](),e.next=3,t.logout();case 3:n.commit("solid/setSession",null),n.commit("solid/setPod",null);case 5:case"end":return e.stop()}}),e)}))),e.prototype.$getPodInfosFromSession=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=14;break}return r.webId=t.info.webId,e.next=6,this.$getPodInfos(r);case 6:r=e.sent,void 0==r.neuroneStore&&(r.neuroneStore=r.storage+"public/neurones/"),void 0==r.workspaces&&(r.workspaces=[]),n.commit("solid/setPod",r),console.log(r),r.storage,e.next=15;break;case 14:n.commit("solid/setPod",null);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,u,s,i,l,f,p,d,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(J["d"])(t.webId,{fetch:G["fetch"]});case 3:return n=e.sent,e.next=6,Object(J["g"])(n,t.webId);case 6:return r=e.sent,e.next=9,Object(J["f"])(r,K["b"].name);case 9:return t.name=e.sent,e.next=12,Object(J["j"])(r,K["b"].knows).map((function(e){return{webId:e}}));case 12:return t.friends=e.sent,e.next=15,Object(J["i"])(r,U["b"].storage);case 15:return t.storage=e.sent,e.next=18,Object(J["i"])(r,K["c"].hasPhoto);case 18:return t.photo=e.sent,t.workspaces=[],o=t.storage+"settings/publicTypeIndex.ttl",e.next=23,Object(J["d"])(o,{fetch:G["fetch"]});case 23:return a=e.sent,e.next=26,Object(J["h"])(a);case 26:c=e.sent,u=!1,s=!1,e.prev=29,l=Object(H["a"])(c);case 31:return e.next=33,l.next();case 33:if(!(u=!(f=e.sent).done)){e.next=51;break}return p=f.value,e.next=37,Object(J["j"])(p,"http://www.w3.org/ns/solid/terms#forClass");case 37:if(d=e.sent,!d.includes("https://scenaristeur.github.io/verse#Workspace")){e.next=48;break}return console.log(p),h={},e.next=43,Object(J["f"])(p,K["a"].name);case 43:return h.name=e.sent,e.next=46,Object(J["i"])(p,U["a"].instance);case 46:h.storage=e.sent,t.workspaces.push(h);case 48:u=!1,e.next=31;break;case 51:e.next=57;break;case 53:e.prev=53,e.t0=e["catch"](29),s=!0,i=e.t0;case 57:if(e.prev=57,e.prev=58,!u||null==l.return){e.next=62;break}return e.next=62,l.return();case 62:if(e.prev=62,!s){e.next=65;break}throw i;case 65:return e.finish(62);case 66:return e.finish(57);case 67:e.next=72;break;case 69:e.prev=69,e.t1=e["catch"](0),console.log("erreur",e.t1,t);case 72:return e.next=74,t;case 74:return e.abrupt("return",e.sent);case 75:case"end":return e.stop()}}),e,null,[[0,69],[29,53,57,67],[58,,62,66]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var Q=z,X=n("b85c"),Y=(n("ac1f"),n("1276"),n("8a79"),n("fb6a"),{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$getResources=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("path",t),e.next=3,Object(J["d"])(t,{fetch:G["fetch"]});case 3:return n=e.sent,e.next=6,Object(J["b"])(n,{fetch:G["fetch"]}).map((function(e){var n={url:e,parent:t},r=e.split("/");return e.endsWith("/")?(n.name=r[r.length-2],n.type="folder",n.icon="📁"):(n.name=r[r.length-1],n.type="file",n.icon="📄"),n}));case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResourcesDetails=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("path",t),n=[],e.next=4,Object(J["d"])(t,{fetch:G["fetch"]});case 4:return r=e.sent,e.next=7,Object(J["b"])(r,{fetch:G["fetch"]});case 7:o=e.sent,a=Object(X["a"])(o),e.prev=9,a.s();case 11:if((c=a.n()).done){e.next=22;break}return u=c.value,s={url:u,parent:t},e.next=16,Object(J["c"])(u,{fetch:G["fetch"]});case 16:s.file=e.sent,i=u.split("/"),u.endsWith("/")?(s.name=i[i.length-2],s.type="folder",s.icon="📁"):(s.name=i[i.length-1],s.type="file",s.icon="📄"),n.push(s);case 20:e.next=11;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](9),a.e(e.t0);case 27:return e.prev=27,a.f(),e.finish(27);case 30:return e.abrupt("return",n);case 31:case"end":return e.stop()}}),e,null,[[9,24,27,30]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResourcesFull=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("path",t),n=[],e.next=4,Object(J["d"])(t,{fetch:G["fetch"]});case 4:return r=e.sent,e.next=7,Object(J["b"])(r,{fetch:G["fetch"]});case 7:o=e.sent,a=Object(X["a"])(o),e.prev=9,a.s();case 11:if((c=a.n()).done){e.next=22;break}return u=c.value,s={url:u,parent:t},e.next=16,Object(J["c"])(u,{fetch:G["fetch"]});case 16:s.file=e.sent,i=u.split("/"),u.endsWith("/")?(s.name=i[i.length-2],s.type="folder",s.icon="📁",s.resources=this.$getResources(s.url)):(s.name=i[i.length-1],s.type="file",s.icon="📄"),n.push(s);case 20:e.next=11;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](9),a.e(e.t0);case 27:return e.prev=27,a.f(),e.finish(27);case 30:return e.abrupt("return",n);case 31:case"end":return e.stop()}}),e,this,[[9,24,27,30]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getResource=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("read",t),e.next=3,Object(J["c"])(t.url,{fetch:G["fetch"]});case 3:return n=e.sent,t.file=n,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$updateFile=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),n=t.file.type,e.prev=2,e.next=5,Object(J["k"])(t.url,new Blob([t.content],{type:n}),{contentType:n,fetch:G["fetch"]});case 5:return r=e.sent,console.log("File saved at ".concat(Object(J["e"])(r))),e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getContent=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("get content de ",t),e.prev=1,e.next=4,Object(J["c"])(t,{fetch:G["fetch"]});case 4:r=e.sent,o=new FileReader,o.onload=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=o.result,console.log("content",t),n.commit("bureau/setContent",t);case 3:case"end":return e.stop()}}),e)}))),o.onerror=function(e){console.log(e)},o.readAsText(r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFolder=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(J["a"])(t,{fetch:G["fetch"]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$subscribe=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,r="wss://"+t.split("/")[2],o=new WebSocket(r,["solid.0.1.0"]),o.onopen=function(){this.send("sub "+t)},o.onmessage=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.data||"pub"!==t.data.slice(0,3)){e.next=14;break}if(console.log("pub",t.data),r=t.data.split(" ")[1],!t.data.endsWith("/")){e.next=10;break}return e.next=6,n.$getResources(r);case 6:o=e.sent,o.forEach((function(e){n.$subscribe(e.url)})),e.next=14;break;case 10:return e.next=12,n.$getResource(r);case 12:a=e.sent,console.log("66666666666",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}});"undefined"!==typeof window&&window.Vue&&window.Vue.use(Y);var Z=Y,ee={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$createAM=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T["from"](t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$changeAM=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T["change"](t,(function(e){e=Object.assign(e,n),console.log(e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e.prototype.$saveAM=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=T["getActorId"](t),e.next=3,T["save"](t);case 3:return e.t1=e.sent,e.abrupt("return",{id:e.t0,doc:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$loadAM=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T["load"](t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$loadAMWithId=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T["load"](t.doc,t.id);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$automergeTest=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=T["from"]({cards:[]}),t=T["change"](t,"Add card",(function(e){e.cards.push({title:"Rewrite everything in Clojure",done:!1})})),console.log(t),t=T["change"](t,"Add another card",(function(e){e.cards.insertAt(0,{title:"Rewrite everything in Haskell",done:!1})})),console.log(t),n=T["init"](),n=T["merge"](n,t),t=T["change"](t,"Mark card as done",(function(e){e.cards[0].done=!0})),console.log(t,n),n=T["change"](n,"Delete card",(function(e){delete e.cards[1]})),console.log(t,n),r=T["merge"](t,n),console.log(r),o=T["getHistory"](r).map((function(e){return[e.change.message,e.snapshot.cards.length]})),console.log(r,o);case 15:case"end":return e.stop()}}),e)})))}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ee);var te=ee,ne=n("5f5b"),re=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(Q,{store:q}),r["default"].use(Z,{store:q}),r["default"].use(te,{store:q}),r["default"].use(ne["a"]),r["default"].use(re["a"]),r["default"].config.productionTip=!1,new r["default"]({router:j,store:q,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.0f71e3bb.js.map