(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ef136a"],{"857a":function(e,t,n){var r=n("e330"),a=n("1d80"),l=n("577e"),o=/"/g,i=r("".replace);e.exports=function(e,t,n,r){var u=l(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+i(l(r),o,"&quot;")+'"'),c+">"+u+"</"+t+">"}},9911:function(e,t,n){"use strict";var r=n("23e7"),a=n("857a"),l=n("af03");r({target:"String",proto:!0,forced:l("link")},{link:function(e){return a(this,"a","href",e)}})},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},f4c2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"fieldModal",size:"xl",title:e.currentProp.name},on:{ok:e.update}},[e._v(" "+e._s(e.currentProp)+" "),n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"text",active:""},on:{click:function(t){e.fieldType="text"}}},[n("b-form-input",{attrs:{placeholder:"new value"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"textarea"},on:{click:function(t){e.fieldType="textarea"}}},[n("b-form-textarea",{attrs:{placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"item"},on:{click:function(t){e.fieldType="item"}}},[n("ItemSelector",{attrs:{currentProp:e.currentProp},on:{"update:currentProp":function(t){e.currentProp=t},"update:current-prop":function(t){e.currentProp=t}}})],1),n("b-tab",{attrs:{title:"link"},on:{click:function(t){e.fieldType="link"}}},[n("b-form-input",{attrs:{placeholder:"name"},model:{value:e.link.name,callback:function(t){e.$set(e.link,"name",t)},expression:"link.name"}}),n("b-form-input",{attrs:{placeholder:"link"},on:{change:e.addNewLink},model:{value:e.link.href,callback:function(t){e.$set(e.link,"href",t)},expression:"link.href"}})],1)],1)],1)},a=[],l=(n("d3b7"),n("3ca3"),n("ddb0"),n("9911"),{name:"FieldModal",components:{ItemSelector:function(){return n.e("chunk-cb0172c2").then(n.bind(null,"35cf"))}},data:function(){return{link:{},newvalue:null,fieldType:"text"}},methods:{addNewValue:function(){var e={value:this.newvalue,type:this.fieldType};this.currentProp.values.push(e),this.newvalue=null},addNewLink:function(){var e={value:this.link,type:this.fieldType};this.currentProp.values.push(e),this.link={}},update:function(){console.log(this.currentProp),this.$store.commit("app/addProp",this.currentProp)}},computed:{currentProp:{get:function(){return this.$store.state.app.currentProp},set:function(){}}}}),o=l,i=n("2877"),u=Object(i["a"])(o,r,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-a0ef136a.4c50f20f.js.map