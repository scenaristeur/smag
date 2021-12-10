(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5abb"],{"3fa3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("Tension")]),t._m(0),i("b-card",[t.cardActive?i("b-form-input",{attrs:{placeholder:"Title"},model:{value:t.tension.title,callback:function(e){t.$set(t.tension,"title",e)},expression:"tension.title"}}):t._e(),i("b-form-input",{ref:"text",attrs:{placeholder:t.text_placeholder},on:{click:function(e){t.inputFocus=!0},blur:function(e){t.inputFocus=!1}},model:{value:t.tension.wi,callback:function(e){t.$set(t.tension,"wi",e)},expression:"tension.wi"}}),t.cardActive?i("b-form-input",{attrs:{placeholder:"What should be ?"},model:{value:t.tension.wsb,callback:function(e){t.$set(t.tension,"wsb",e)},expression:"tension.wsb"}}):t._e(),t.cardActive?i("b-form-textarea",{attrs:{id:"textarea",placeholder:"Your proposition...",rows:"3","max-rows":"6"},model:{value:t.tension.proposition,callback:function(e){t.$set(t.tension,"proposition",e)},expression:"tension.proposition"}}):t._e(),t.cardActive?i("vue-tags-input",{attrs:{tags:t.tags,"autocomplete-items":t.autocompleteItems},on:{"tags-changed":t.update},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}):t._e(),t.cardActive?i("b-button",{attrs:{size:"sm",variant:"light"},on:{click:t.clean}},[t._v("Cancel")]):t._e(),t.cardActive?i("b-button",{attrs:{size:"sm",variant:"info"},on:{click:t.add}},[t._v("Save")]):t._e(),t.cardActive?i("b-form-checkbox",{attrs:{name:"check-button"},model:{value:t.share,callback:function(e){t.share=e},expression:"share"}},[t._v(" Partager sur "),i("a",{attrs:{href:" https://scenaristeur.github.io/booklice?source=https://booklice.solidweb.org/public/bookmarks/",target:"_blank"}},[t._v("Booklice Pod")])]):t._e()],1),t._v(" "+t._s(t.tensions)+" ")],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" Dans un système basique, chacun doit pouvoir faire remonter ses idées, ou ses problèmes de manière simple. "),i("br"),t._v(" La solution envisagée ici est inspirée du système de Tension en holacratie. "),i("br"),i("ul",[i("li",[t._v("Un titre")]),i("li",[t._v("Un description de ce qui est à l'heure actuelle.")]),i("li",[t._v("Une description de ce qui devrait être.")]),i("li",[t._v("Un proposition pour passer de ce qui est à ce qui devrait être.")])])])}],o=i("1da1"),a=(i("96cf"),i("d3b7"),i("3ca3"),i("ddb0"),i("ac1f"),i("1276"),i("e9c4"),i("841c"),i("d81d"),i("466d"),i("a4d3"),i("e01a"),i("c46f")),r="https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json",c={name:"Tension",components:{VueTagsInput:function(){return i.e("chunk-2d217c19").then(i.t.bind(null,"c7a0",7))}},data:function(){return{tag:"",tags:[],autocompleteItems:[],debounce:null,tension:{title:"",wi:"",wsb:"",proposition:"",tags:""},inputFocus:!1,cardActive:!1,text_placeholder:"What should be different ?",share:!0,checked1:!0}},created:function(){this.language=navigator.language.split("-")[0]||"en",this.initForm(this.$route.query)},methods:{add:function(){if(void 0!=this.pod&&null!=this.pod.webId){var t=this.tension;t.share=this.share,this.$store.dispatch("app/addTension",t),this.clean()}else{alert("Tu devrais te connecter en selectionnant un fournisseur de PODs, pour enregistrer un Booklice sur ton Pod");var e="/?title="+this.tension.title+"&wi="+this.tension.wi+"&wsb="+this.tension.wsb+"&proposition="+this.tension.proposition+"&tags="+JSON.stringify(this.note.tags);this.$router.push({path:e})}},clean:function(){this.tension={title:"",wi:"",wsb:"",proposition:"",tags:""},this.currentNote={title:"",wi:"",wsb:"",proposition:"",tags:""},this.cardActive=!1,this.text_placeholder="Signal a tension",this.tags=[]},initForm:function(t){if(console.log("init",t),void 0!=t.title||void 0!=t.wi||void 0!=t.wsb||void 0!=t.proposition){var e={title:t.title||"",wi:t.wi||"",wsb:t.wsb||"",proposition:t.proposition||""};this.tags=void 0!=t.tags?JSON.parse(t.tags):"",this.cardActive=!0,this.tension=e,console.log("note init",this.tension),void 0==this.topic&&(this.topic="default")}},update:function(t){this.autocompleteItems=[],this.tags=t},getItems:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){var n,s,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!(t.length>0)){i.next=21;break}return e.loading=!0,n=r+"&language="+e.language+"&search="+t,console.log(n),i.prev=4,i.next=7,fetch(n);case 7:return s=i.sent,i.next=10,s.json();case 10:o=i.sent,console.log(o),e.items=o.search,console.log(e.items),e.autocompleteItems=o.search.map((function(t){return{text:t.match.text+" ("+t.description+")",url:t.concepturi}})),i.next=20;break;case 17:i.prev=17,i.t0=i["catch"](4),alert(i.t0);case 20:e.loading=!1;case 21:case"end":return i.stop()}}),i,null,[[4,17]])})))()}},watch:{tag:a["a"].debounce((function(t){this.getItems(t)}),500),tags:function(){console.log(this.tags),this.tension.tags=this.tags},$route:function(t){this.initForm(t.query)},inputFocus:function(){1==this.inputFocus&&(this.cardActive=!0,this.text_placeholder="What is ?",this.$refs.text.focus())},currentNote:function(){this.tension=this.currentTension,this.tags=this.currentTension.tags,this.cardActive=!0,this.$refs.text.focus()}},computed:{pod:function(){return this.$store.state.solid.pod},currentNote:{get:function(){return this.$store.state.app.currentTension},set:function(){}},tensions:{get:function(){return this.$store.state.app.tensions},set:function(){}}}},u=c,l=i("2877"),p=Object(l["a"])(u,n,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c5abb.c34bba07.js.map