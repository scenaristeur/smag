(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28d32cd0"],{"0538":function(t,e,n){"use strict";var r=n("da84"),o=n("e330"),i=n("59ed"),a=n("861d"),s=n("1a2d"),u=n("f36a"),c=r.Function,f=o([].concat),l=o([].join),d={},p=function(t,e,n){if(!s(d,e)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";d[e]=c("C,a","return new C("+l(r,",")+")")}return d[e](t,n)};t.exports=c.bind||function(t){var e=i(this),n=e.prototype,r=u(arguments,1),o=function(){var n=f(r,u(arguments));return this instanceof o?p(e,n.length,n):e.apply(t,n)};return a(n)&&(o.prototype=n),o}},1402:function(t,e,n){var r=n("970b").default,o=n("5bc3").default,i=n("ed6d").default,a=n("2d0d").default;n("d3b7"),n("25f0"),n("e9c4");var s=n("abff"),u={type:"tension"},c=[{name:"ve:wi",values:[],label:"What is ?",value_type:"text",order:1},{name:"ve:wsb",values:[],label:"What should be ?",value_type:"text",order:2},{name:"ve:proposition",values:[],label:"Your proposition ",value_type:"longtext",order:3}],f=function(t){"use strict";i(n,t);var e=a(n);function n(t){var o;return r(this,n),o=e.call(this,t),o.data=Object.assign(o.data,u),o.init(),console.log(o.data),o}return o(n,[{key:"alert",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){alert(JSON.stringify(this.data,null,2))}))},{key:"init",value:function(){this.data["ve:properties"]=Object.assign(this.data["ve:properties"],c)}}]),n}(s);t.exports=f},"25f0":function(t,e,n){"use strict";var r=n("e330"),o=n("5e77").PROPER,i=n("6eeb"),a=n("825a"),s=n("3a9b"),u=n("577e"),c=n("d039"),f=n("ad6d"),l="toString",d=RegExp.prototype,p=d[l],b=r(f),v=c((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),h=o&&p.name!=l;(v||h)&&i(RegExp.prototype,l,(function(){var t=a(this),e=u(t.source),n=t.flags,r=u(void 0===n&&s(d,t)&&!("flags"in d)?b(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2d0d":function(t,e,n){n("4ae1"),n("d3b7"),n("f8c9");var r=n("36c6"),o=n("6f8f"),i=n("6b58");function a(t){var e=o();return function(){var n,o=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i(this,n)}}t.exports=a,t.exports["default"]=t.exports,t.exports.__esModule=!0},3410:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("7b0b"),a=n("e163"),s=n("e177"),u=o((function(){a(1)}));r({target:"Object",stat:!0,forced:u,sham:!s},{getPrototypeOf:function(t){return a(i(t))}})},"36c6":function(t,e,n){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports["default"]=t.exports,t.exports.__esModule=!0,r(e)}n("3410"),t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},"3c96":function(t,e){function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},"4a4b":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports["default"]=t.exports,t.exports.__esModule=!0,n(e,r)}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},"4ae1":function(t,e,n){var r=n("23e7"),o=n("d066"),i=n("2ba4"),a=n("0538"),s=n("5087"),u=n("825a"),c=n("861d"),f=n("7c73"),l=n("d039"),d=o("Reflect","construct"),p=Object.prototype,b=[].push,v=l((function(){function t(){}return!(d((function(){}),[],t)instanceof t)})),h=!l((function(){d((function(){}))})),m=v||h;r({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(t,e){s(t),u(e);var n=arguments.length<3?t:s(arguments[2]);if(h&&!v)return d(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return i(b,r,e),new(i(a,t,r))}var o=n.prototype,l=f(c(o)?o:p),m=i(t,l,e);return c(m)?m:l}})},5956:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[t._v("Name:")])]),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{ref:"name",attrs:{id:"name",autocomplete:"off",autofocus:""},model:{value:t.item["ve:name"],callback:function(e){t.$set(t.item,"ve:name",e)},expression:"item['ve:name']"}})],1),n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"age"}},[n("code",[t._v("Age")]),t._v(":")])]),n("b-col",[n("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:t.item["ve:age"],callback:function(e){t.$set(t.item,"ve:age",e)},expression:"item['ve:age']"}})],1)],1),n("b-row",[t._v(" props "+t._s(t.item["ve:properties"])+" ")]),null==t.editing?n("b-button",{attrs:{variant:"info"},on:{click:t.create}},[t._v("Create")]):t._e(),void 0!=t.item["ve:name"]&&t.item["ve:name"].length>0?n("b-dropdown",{staticClass:"m-2",attrs:{text:"Add Properties",variant:"outline-dark"}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Add a custom property (todo)")]),t._l(t.modeles,(function(e,r){return n("b-dropdown-item",{key:e.id,on:{click:function(n){return t.addModele(e)}}},[t._v(t._s(r))])}))],2):t._e(),null!=t.editing?n("b-button",{attrs:{variant:"info"},on:{click:t.update}},[t._v("Update")]):t._e(),null!=t.editing?n("b-button",{attrs:{variant:"light"},on:{click:t.cancel}},[t._v("Cancel")]):t._e(),null!=t.editing?n("b-button",{attrs:{variant:"warning"},on:{click:t.remove}},[t._v("Remove")]):t._e(),n("Nodes")],1)},o=[],i=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1402")),s={name:"AutomergeTest",components:{Nodes:function(){return n.e("chunk-23f4a38f").then(n.bind(null,"0739"))}},data:function(){return{default:{},item:{},modeles:{}}},created:function(){this.init(),this.modeles.tension=new a({name:"New Tension"}),this.modeles.person=new a({name:"Old Tension Tes"}),this.modeles.group=new a({name:"the Group"}),this.modeles.Action=new a({name:"OAn action"})},mounted:function(){this.$refs.name.focus()},methods:{create:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("local/create",t.item);case 2:t.init();case 3:case"end":return e.stop()}}),e)})))()},readAll:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("local/getItems");case 2:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("local/update",{old:t.editing,new:t.item});case 2:t.init();case 3:case"end":return e.stop()}}),e)})))()},cancel:function(){this.init()},remove:function(){this.$store.dispatch("local/delete",this.editing),this.init()},init:function(){this.item=Object.assign({},this.default),this.$store.dispatch("local/getItems"),this.$store.commit("local/editing",null)},addModele:function(t){console.log(t),this.item=Object.assign(this.item,t.data),console.log(this.item)}},watch:{editing:function(){null!=this.editing?this.item=Object.assign({},this.editing.doc):this.item=Object.assign({},this.default),this.$refs.name.focus()}},computed:{editing:{get:function(){return this.$store.state.local.editing},set:function(){}}}},u=s,c=n("2877"),f=Object(c["a"])(u,r,o,!1,null,null,null);e["default"]=f.exports},"5bc3":function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},"6b58":function(t,e,n){var r=n("7037")["default"],o=n("3c96");function i(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)}t.exports=i,t.exports["default"]=t.exports,t.exports.__esModule=!0},"6f8f":function(t,e,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n("d3b7"),n("f8c9"),n("4ae1"),t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},7037:function(t,e,n){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),r(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},"970b":function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},abff:function(t,e,n){var r=n("970b").default,o={"@context":{"@vocab":"https://www.w3.org/ns/activitystreams",as:"https://www.w3.org/ns/activitystreams",ve:"https://scenaristeur.github.io/verse/","@type":"type"},type:"agent","ve:properties":[],"ve:tags":""},i=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.options=e,this.data=o,this.data["as:created"]=Date.now(),1==e.debug&&this.debug()}return t}();t.exports=i},e9c4:function(t,e,n){var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("2ba4"),s=n("e330"),u=n("d039"),c=o.Array,f=i("JSON","stringify"),l=s(/./.exec),d=s("".charAt),p=s("".charCodeAt),b=s("".replace),v=s(1..toString),h=/[\uD800-\uDFFF]/g,m=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,x=function(t,e,n){var r=d(n,e-1),o=d(n,e+1);return l(m,t)&&!l(g,o)||l(g,t)&&!l(m,r)?"\\u"+v(p(t,0),16):t},y=u((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&r({target:"JSON",stat:!0,forced:y},{stringify:function(t,e,n){for(var r=0,o=arguments.length,i=c(o);r<o;r++)i[r]=arguments[r];var s=a(f,null,i);return"string"==typeof s?b(s,h,x):s}})},ed6d:function(t,e,n){var r=n("4a4b");function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}t.exports=o,t.exports["default"]=t.exports,t.exports.__esModule=!0},f8c9:function(t,e,n){var r=n("23e7"),o=n("da84"),i=n("d44e");r({global:!0},{Reflect:{}}),i(o.Reflect,"Reflect",!0)}}]);
//# sourceMappingURL=chunk-28d32cd0.502b68af.js.map