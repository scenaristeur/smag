(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8bf9"],{"55cf":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.properties,(function(e){return n("b-row",{key:e.name},[n("b-col",{attrs:{sm:"5"}},[n("label",{attrs:{for:"name"}},[n("code",[t._v(t._s(e.label||e.name))]),t._v(":")])]),n("b-col",{attrs:{sm:"7"}},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.showFieldModal(e)}}},[t._v("+")]),n("Values",{attrs:{values:e.values}})],1)],1)})),null!=t.field?n("b-row",{staticClass:"mt-3"},[n("b-col",[n("b-form-input",{attrs:{required:"",placeholder:"property name"},on:{change:t.fieldNameChanged},model:{value:t.field.name,callback:function(e){t.$set(t.field,"name",e)},expression:"field.name"}})],1),n("b-col",[n("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:t.clear_field}},[t._v("X")])],1)],1):n("b-row",[n("b-btn",{attrs:{variant:"outline-primary",size:"sm"},on:{click:t.add}},[t._v("+ add a property or a link")])],1),n("FieldModal")],2)},o=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"NodeProperties",components:{Values:function(){return n.e("chunk-f96af618").then(n.bind(null,"f472"))},FieldModal:function(){return n.e("chunk-a0ef136a").then(n.bind(null,"f4c2"))}},data:function(){return{field:null,clearing:!1}},methods:{add:function(){this.field={name:""}},fieldNameChanged:function(t){if(console.log(t),0==this.clearing&&t.length>0){var e={name:t,values:[]};this.$store.commit("app/addProp",e),this.choudbi.addProperty(t),this.choudbi.debug(),this.field={}}},clear_field:function(){this.clearing=!0,this.field=null,this.clearing=!1},showFieldModal:function(t){console.log(t),this.$bvModal.show("fieldModal"),this.$store.commit("app/setCurrentProp",t)}},watch:{},computed:{properties:{get:function(){return this.$store.state.app.properties},set:function(){}},editing:{get:function(){return this.$store.state.app.editing},set:function(){}},item:{get:function(){return this.$store.state.app.item},set:function(){}},choudbi:{get:function(){return this.$store.state.choudbi.choudbi},set:function(t){this.$store.commit("choudbi/update",t)}}}}),r=a,l=n("2877"),s=Object(l["a"])(r,i,o,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0c8bf9.98639beb.js.map