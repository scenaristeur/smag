(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c2f73b0"],{"2a9a":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"login"},[null==t.session||0==t.session.isLoggedIn?s("div",{staticClass:"d-flex align-items-center"},[s("b-form-group",[s("b-form-select",{attrs:{autofocus:"",size:"sm",options:t.issuers},on:{change:t.login},scopedSlots:t._u([{key:"first",fn:function(){return[s("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Login / Connexion --")])]},proxy:!0}],null,!1,3168236525),model:{value:t.issuer,callback:function(e){t.issuer=e},expression:"issuer"}}),"other"==t.issuer?s("div",[s("b-form-group",{attrs:{id:"fieldset-1",description:"ex: `https://solidcommunity.net`",label:"Entrez l'url de votre fournissuer de POD","label-for":"input-1","valid-feedback":"Merci!","invalid-feedback":t.invalidFeedback,state:t.state}},[s("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},on:{change:t.onChange},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1),s("b-button",{attrs:{size:"sm",variant:"info"}},[t._v("Login / connexion")])],1):t._e()],1)],1):s("div",{staticClass:"d-flex align-items-center"},[s("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.logout}},[t._v("Logout")])],1)])},i=[],o=(s("2ca0"),{name:"Login",data:function(){return{issuers:[{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net"},{value:"https://dev.inrupt.net",text:"dev.inrupt.net"},{value:"https://solidcommunity.net",text:"SolidCommunity.net"},{value:"https://solidweb.org",text:"Solidweb.org"},{value:"https://trinpod.us/",text:"Trinpod.us"},{value:"other",text:"Autre / Other"}],issuer:null,restore:!0,other:""}},methods:{onInput:function(){console.log("input",this.other)},onChange:function(){console.log("change",this.other),void 0!=this.other&&void 0!=this.other.length&&(this.issuer=this.other,this.login(this.issuer))},login:function(t){console.log(t),this.issuer=t,null!=this.issuer&&"other"!=this.issuer&&(console.log(this.issuer),this.$login(this.issuer))},logout:function(){this.$logout()}},computed:{session:{get:function(){return this.$store.state.solid.session},set:function(){}},state:function(){return this.other.startsWith("http")},invalidFeedback:function(){return this.other.length>0&&!this.other.startsWith("http")?"L'url de ton fournisseur devrait commencer par `http`":"l'url de ton fournisseur/provider, pas celle de ton webId"}}}),r=o,u=(s("ceb7"),s("2877")),l=Object(u["a"])(r,n,i,!1,null,null,null);e["default"]=l.exports},"2ca0":function(t,e,s){"use strict";var n=s("23e7"),i=s("e330"),o=s("06cf").f,r=s("50c4"),u=s("577e"),l=s("5a34"),a=s("1d80"),c=s("ab13"),h=s("c430"),d=i("".startsWith),p=i("".slice),f=Math.min,g=c("startsWith"),v=!h&&!g&&!!function(){var t=o(String.prototype,"startsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!v&&!g},{startsWith:function(t){var e=u(a(this));l(t);var s=r(f(arguments.length>1?arguments[1]:void 0,e.length)),n=u(t);return d?d(e,n,s):p(e,s,s+n.length)===n}})},"7f21":function(t,e,s){},ceb7:function(t,e,s){"use strict";s("7f21")}}]);
//# sourceMappingURL=chunk-8c2f73b0.974240ba.js.map