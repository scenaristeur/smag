(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33bce466"],{"0538":function(e,t,n){"use strict";var r=n("da84"),o=n("e330"),a=n("59ed"),i=n("861d"),s=n("1a2d"),u=n("f36a"),c=r.Function,l=o([].concat),f=o([].join),p={},d=function(e,t,n){if(!s(p,t)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";p[t]=c("C,a","return new C("+f(r,",")+")")}return p[t](e,n)};e.exports=c.bind||function(e){var t=a(this),n=t.prototype,r=u(arguments,1),o=function(){var n=l(r,u(arguments));return this instanceof o?d(t,n.length,n):t.apply(e,n)};return i(n)&&(o.prototype=n),o}},1779:function(e,t,n){var r=n("970b").default,o=n("5bc3").default,a=n("ed6d").default,i=n("2d0d").default;n("d3b7"),n("25f0"),n("e9c4");var s=n("a73c"),u={type:"tension"},c=[{name:"ve:wi",values:[],label:"What is ?",value_type:"text",order:1},{name:"ve:wsb",values:[],label:"What should be ?",value_type:"text",order:2},{name:"ve:proposition",values:[],label:"Your proposition ",value_type:"longtext",order:3}],l=function(e){"use strict";a(n,e);var t=i(n);function n(e){var o;return r(this,n),o=t.call(this,e),o.data=Object.assign(o.data,u),o.data["ve:properties"]=Object.assign(o.data["ve:properties"],c),console.log(o.data),o}return o(n,[{key:"alert",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert(JSON.stringify(this.data,null,2))}))}]),n}(s);e.exports=l},"25f0":function(e,t,n){"use strict";var r=n("e330"),o=n("5e77").PROPER,a=n("6eeb"),i=n("825a"),s=n("3a9b"),u=n("577e"),c=n("d039"),l=n("ad6d"),f="toString",p=RegExp.prototype,d=p[f],v=r(l),m=c((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),h=o&&d.name!=f;(m||h)&&a(RegExp.prototype,f,(function(){var e=i(this),t=u(e.source),n=e.flags,r=u(void 0===n&&s(p,e)&&!("flags"in p)?v(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"2d0d":function(e,t,n){n("4ae1"),n("d3b7"),n("f8c9");var r=n("36c6"),o=n("6f8f"),a=n("6b58");function i(e){var t=o();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return a(this,n)}}e.exports=i,e.exports["default"]=e.exports,e.exports.__esModule=!0},3410:function(e,t,n){var r=n("23e7"),o=n("d039"),a=n("7b0b"),i=n("e163"),s=n("e177"),u=o((function(){i(1)}));r({target:"Object",stat:!0,forced:u,sham:!s},{getPrototypeOf:function(e){return i(a(e))}})},"36c6":function(e,t,n){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports["default"]=e.exports,e.exports.__esModule=!0,r(t)}n("3410"),e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},"3c96":function(e,t){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e.exports=n,e.exports["default"]=e.exports,e.exports.__esModule=!0},"4a4b":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports["default"]=e.exports,e.exports.__esModule=!0,n(t,r)}e.exports=n,e.exports["default"]=e.exports,e.exports.__esModule=!0},"4ae1":function(e,t,n){var r=n("23e7"),o=n("d066"),a=n("2ba4"),i=n("0538"),s=n("5087"),u=n("825a"),c=n("861d"),l=n("7c73"),f=n("d039"),p=o("Reflect","construct"),d=Object.prototype,v=[].push,m=f((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),h=!f((function(){p((function(){}))})),b=m||h;r({target:"Reflect",stat:!0,forced:b,sham:b},{construct:function(e,t){s(e),u(t);var n=arguments.length<3?e:s(arguments[2]);if(h&&!m)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return a(v,r,t),new(a(i,e,r))}var o=n.prototype,f=l(c(o)?o:d),b=a(e,f,t);return c(b)?b:f}})},"5bc3":function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},"6b58":function(e,t,n){var r=n("7037")["default"],o=n("3c96");function a(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)}e.exports=a,e.exports["default"]=e.exports,e.exports.__esModule=!0},"6f8f":function(e,t,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}n("d3b7"),n("f8c9"),n("4ae1"),e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},7037:function(e,t,n){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports["default"]=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports["default"]=e.exports,e.exports.__esModule=!0),r(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),e.exports=r,e.exports["default"]=e.exports,e.exports.__esModule=!0},"857a":function(e,t,n){var r=n("e330"),o=n("1d80"),a=n("577e"),i=/"/g,s=r("".replace);e.exports=function(e,t,n,r){var u=a(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+s(a(r),i,"&quot;")+'"'),c+">"+u+"</"+t+">"}},"970b":function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=n,e.exports["default"]=e.exports,e.exports.__esModule=!0},9911:function(e,t,n){"use strict";var r=n("23e7"),o=n("857a"),a=n("af03");r({target:"String",proto:!0,forced:a("link")},{link:function(e){return o(this,"a","href",e)}})},a241:function(e,t,n){"use strict";n("e27d")},a73c:function(e,t,n){var r=n("c973").default,o=n("970b").default,a=n("5bc3").default;n("96cf"),n("b0c0"),n("d3b7"),n("25f0"),n("e9c4");var i=n("11c1"),s=i.v4,u={"@context":{"@vocab":"https://www.w3.org/ns/activitystreams",as:"https://www.w3.org/ns/activitystreams",ve:"https://scenaristeur.github.io/verse/","@id":"id","@type":"type"},"ve:name":"",type:"agent","ve:age":-1,"ve:properties":[],"ve:tags":""},c=function(){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.options=t,void 0==this.id&&(this.id=s()),this.name=this.options.name||this.id,this.data=u,this.data["as:created"]=Date.now(),1==t.debug&&this.debug(),void 0!=window.env?window.env.pushAgent(this):console.log("can not add to env",this)}return a(e,[{key:"save",value:function(e){console.log("saving",e),window.env.save(e)}},{key:"send",value:function(e,t){var n={id:this.id,name:this.name};console.log("SEND","from",n,"to",e,t)}},{key:"debug",value:function(){console.log("--- DEBUG --- props : ",this.options),console.log("--- DEBUG --- data : ",this.data)}},{key:"print",value:function(){console.log("--printing props : ",this.options,this.data)}},{key:"log",value:function(e){console.log("-----log--- ",e)}},{key:"wait",value:function(){var e=r(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=this.options.name,setTimeout((function(){t+=" "+r,n(t)}),3e3);case 2:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"alert",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert(JSON.stringify(this.data,null,2))}))}]),e}();e.exports=c},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c604:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-iconstack",{staticClass:"floating-action-button",attrs:{"font-scale":"3",type:"button"},on:{click:e.newItem}},[n("b-icon",{attrs:{stacked:"",icon:"circle-fill",variant:"warning"}}),n("b-icon",{attrs:{stacked:"",icon:"pencil",scale:"0.5",variant:"primary"}}),n("b-icon",{attrs:{stacked:"",icon:"circle",variant:"info"}})],1),n("b-modal",{attrs:{id:"newItemModal",size:"lg",title:e.item.name},on:{ok:e.handleOk}},[n("p",{staticClass:"my-4"},[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[e._v("Name:")])]),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:"name",autocomplete:"off",autofocus:""},model:{value:e.item["ve:name"],callback:function(t){e.$set(e.item,"ve:name",t)},expression:"item['ve:name']"}})],1),n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"age"}},[n("code",[e._v("Age")]),e._v(":")])]),n("b-col",[n("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:e.item["ve:age"],callback:function(t){e.$set(e.item,"ve:age",t)},expression:"item['ve:age']"}})],1)],1),e._l(e.item["ve:properties"],(function(t){return n("b-row",{key:t.name},[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[n("code",[e._v(e._s(t.name))]),e._v(":")])]),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return e.showFieldModal(t)}}},[e._v("+")]),n("Values",{attrs:{values:t.values}})],1)],1)})),null!=e.field?n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"3"}},[n("b-form-input",{attrs:{required:"",placeholder:"property name"},on:{change:e.fieldNameChanged},model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.clear_field}},[e._v("X")])],1)],1):e._e(),n("b-row",[n("b-col"),n("b-col",[n("b-btn",{attrs:{variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("+ add a property or a link")])],1)],1),n("b-row",[n("b-col",[n("b-btn",{attrs:{variant:"success"},on:{click:e.save}},[e._v("Save Item")])],1)],1),n("b-modal",{attrs:{id:"fieldModal",size:"xl",title:e.item["ve:name"]+" -> "+e.currentProp.name}},[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"text",active:""},on:{click:function(t){e.fieldType="text"}}},[n("b-form-input",{attrs:{placeholder:"new value"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"textarea"},on:{click:function(t){e.fieldType="textarea"}}},[n("b-form-textarea",{attrs:{placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"item"},on:{click:function(t){e.fieldType="item"}}},[n("ItemSelector",{attrs:{currentProp:e.currentProp},on:{"update:currentProp":function(t){e.currentProp=t},"update:current-prop":function(t){e.currentProp=t}}})],1),n("b-tab",{attrs:{title:"link"},on:{click:function(t){e.fieldType="link"}}},[n("b-form-input",{attrs:{placeholder:"name"},model:{value:e.link.name,callback:function(t){e.$set(e.link,"name",t)},expression:"link.name"}}),n("b-form-input",{attrs:{placeholder:"link"},on:{change:e.addNewLink},model:{value:e.link.href,callback:function(t){e.$set(e.link,"href",t)},expression:"link.href"}})],1)],1)],1),e._v(" "+e._s(e.item)+" ")],2)])],1)},o=[],a=n("1da1"),i=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("c740"),n("b0c0"),n("9911"),n("1779")),s={name:"NewItem",components:{ItemSelector:function(){return n.e("chunk-76800a3d").then(n.bind(null,"35cf"))},Values:function(){return n.e("chunk-f96af618").then(n.bind(null,"f472"))}},data:function(){return{item:{},currentProp:{},link:{},field:null,clearing:!1,fieldType:"text",show:!1,newvalue:null}},methods:{handleOk:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.save();case 2:e.item={};case 3:case"end":return t.stop()}}),t)})))()},newItem:function(){this.$store.commit("app/setCurrentItem",null),this.item={},this.tension=new i({name:"New Tension"}),console.log(this.tension),this.item=this.tension.data,this.$bvModal.show("newItemModal")},save:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("save",e.item),e.tension.save(e.item),e.$store.commit("app/setCurrentItem",null);case 3:case"end":return t.stop()}}),t)})))()},add:function(){this.field={name:""}},fieldNameChanged:function(e){if(console.log(e),0==this.clearing){var t={name:e,values:[]};void 0==this.item["ve:properties"]&&(this.item["ve:properties"]=[]);var n=this.item["ve:properties"].findIndex((function(e){return e.name==t.name}));-1===n?this.item["ve:properties"].push(t):alert(t.name+" already exist")}},clear_field:function(){this.clearing=!0,this.field=null,this.clearing=!1},showFieldModal:function(e){console.log(e),this.currentProp=e,this.$bvModal.show("fieldModal")},addNewValue:function(){var e={value:this.newvalue,type:this.fieldType};this.currentProp.values.push(e),this.newvalue=null},addNewLink:function(){var e={value:this.link,type:this.fieldType};this.currentProp.values.push(e),this.link={}}},watch:{currentItem:function(){console.log(this.currentItem),null!=this.currentItem?(this.tension=new i({name:"New Tension"}),console.log(this.tension),this.item=this.currentItem,this.$bvModal.show("newItemModal")):this.item}},computed:{currentItem:function(){return this.$store.state.app.currentItem}}},u=s,c=(n("a241"),n("2877")),l=Object(c["a"])(u,r,o,!1,null,null,null);t["default"]=l.exports},c740:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,a=n("44d2"),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},c973:function(e,t,n){function r(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,u,"next",e)}function u(e){r(i,o,a,s,u,"throw",e)}s(void 0)}))}}n("d3b7"),e.exports=o,e.exports["default"]=e.exports,e.exports.__esModule=!0},e27d:function(e,t,n){},ed6d:function(e,t,n){var r=n("4a4b");function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}e.exports=o,e.exports["default"]=e.exports,e.exports.__esModule=!0},f8c9:function(e,t,n){var r=n("23e7"),o=n("da84"),a=n("d44e");r({global:!0},{Reflect:{}}),a(o.Reflect,"Reflect",!0)}}]);
//# sourceMappingURL=chunk-33bce466.e0f33353.js.map