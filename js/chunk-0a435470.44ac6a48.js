(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a435470"],{aa66:function(t,e,a){var o=a("970b").default,n=a("5bc3").default;a("c740");var i=a("11c1"),s=i.v4,r={"@context":{"@vocab":"https://www.w3.org/ns/activitystreams",as:"https://www.w3.org/ns/activitystreams",ve:"https://scenaristeur.github.io/verse/","@type":"type"},type:"choudbi","ve:properties":[],"ve:tags":"","ve:status":"init"},u=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=e,this._data=Object.assign({},r),this._data["as:created"]=Date.now(),1==e.debug&&this.debug()}return n(t,[{key:"debug",value:function(){console.log("--- DEBUG --- CHOUDBI : ",this),console.log("--- DEBUG --- CHOUDBI_options : ",this.options),console.log("--- DEBUG --- CHOUDBI_data : ",this._data),console.log("--- DEBUG --- CHOUDBI_data.properties : ",this._data["ve:properties"])}},{key:"update_data",value:function(t){this._data=Object.assign(this._data,t)}},{key:"update_status",value:function(t){this["ve:status"]=t}},{key:"addProperty",value:function(t){console.log("add prop",t),this["ve:status"]="addProp";var e={id:s(),name:t,values:[]};this._data["ve:properties"].push(e)}},{key:"updateProp",value:function(t){console.log("update prop",t);var e=this._data["ve:properties"].findIndex((function(e){return e.id==t.id}));Object.assign(this._data["ve:properties"][e],t)}}]),t}();t.exports=u},b45a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"name"}},[a("code",[t._v("Name")]),t._v(":")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{ref:"name",attrs:{id:"name",autocomplete:"off",autofocus:""},model:{value:t.choudbi._data["ve:name"],callback:function(e){t.$set(t.choudbi._data,"ve:name",e)},expression:"choudbi._data['ve:name']"}})],1),a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"age"}},[a("code",[t._v("Age")]),t._v(":")])]),a("b-col",[a("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:t.choudbi._data["ve:age"],callback:function(e){t.$set(t.choudbi._data,"ve:age",e)},expression:"choudbi._data['ve:age']"}})],1)],1),a("b-row",[a("NodeProperties")],1)],1)},n=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("aa66")),s={name:"NodeEditor",components:{NodeProperties:function(){return a.e("chunk-2d0c8bf9").then(a.bind(null,"55cf"))}},mounted:function(){this.$refs.name.focus()},watch:{choudbi:function(){this.$refs.name.focus()},editing:function(){console.log("EDITING",this.editing);var t=new i({debug:!0});console.log(t)}},computed:{choudbi:{get:function(){return this.$store.state.choudbi.choudbi},set:function(t){this.$store.commit("choudbi/update",t)}},editing:{get:function(){return this.$store.state.app.editing},set:function(){}}}},r=s,u=a("2877"),c=Object(u["a"])(r,o,n,!1,null,null,null);e["default"]=c.exports},c740:function(t,e,a){"use strict";var o=a("23e7"),n=a("b727").findIndex,i=a("44d2"),s="findIndex",r=!0;s in[]&&Array(1)[s]((function(){r=!1})),o({target:"Array",proto:!0,forced:r},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)}}]);
//# sourceMappingURL=chunk-0a435470.44ac6a48.js.map