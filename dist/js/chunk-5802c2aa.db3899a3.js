(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5802c2aa"],{1681:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-card",[t.cardActive?n("b-form-input",{attrs:{placeholder:"Titre"},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}}):t._e(),n("b-form-input",{ref:"text",attrs:{placeholder:t.text_placeholder},on:{click:function(e){t.inputFocus=!0},blur:function(e){t.inputFocus=!1}},model:{value:t.note.text,callback:function(e){t.$set(t.note,"text",e)},expression:"note.text"}}),t.cardActive?n("b-form-input",{attrs:{placeholder:"Url"},model:{value:t.note.url,callback:function(e){t.$set(t.note,"url",e)},expression:"note.url"}}):t._e(),t.cardActive?n("vue-tags-input",{attrs:{tags:t.tags,"autocomplete-items":t.autocompleteItems},on:{"tags-changed":t.update},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}}):t._e(),t.cardActive?n("b-button",{attrs:{size:"sm",variant:"info"},on:{click:t.add}},[t._v("Enregistrer")]):t._e(),t.cardActive?n("b-button",{attrs:{size:"sm",variant:"light"},on:{click:t.clean}},[t._v("Annuler")]):t._e(),t.cardActive?n("b-form-checkbox",{attrs:{name:"check-button"},model:{value:t.share,callback:function(e){t.share=e},expression:"share"}},[t._v(" Partager sur "),n("a",{attrs:{href:" https://scenaristeur.github.io/booklice?source=https://booklice.solidweb.org/public/bookmarks/",target:"_blank"}},[t._v("Booklice Pod")])]):t._e()],1)],1)},i=[],r=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("e9c4"),n("2ca0"),n("841c"),n("d81d"),n("466d"),n("a4d3"),n("e01a"),n("c46f")),a="https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json",c={name:"NewNote",components:{VueTagsInput:function(){return n.e("chunk-2d217c19").then(n.t.bind(null,"c7a0",7))}},data:function(){return{tag:"",tags:[],autocompleteItems:[],debounce:null,note:{title:"",text:"",url:"",tags:""},inputFocus:!1,cardActive:!1,text_placeholder:"Créer une note",share:!0,checked1:!0}},created:function(){this.language=navigator.language.split("-")[0]||"en",this.initForm(this.$route.query)},methods:{add:function(){if(void 0!=this.pod&&null!=this.pod.webId){var t=this.note;t.share=this.share,this.$store.dispatch("booklice/add",t),this.clean()}else{alert("Tu devrais te connecter en selectionnant un fournisseur de PODs, pour enregistrer un Booklice sur ton Pod");var e="/?title="+this.note.title+"&text="+this.note.text+"&url="+this.note.url+"&tags="+JSON.stringify(this.note.tags);this.$router.push({path:e})}},clean:function(){this.note={title:"",text:"",url:"",tags:""},this.currentNote={title:"",text:"",url:"",tags:""},this.cardActive=!1,this.text_placeholder="Créer une note",this.tags=[]},initForm:function(t){if(console.log("init",t),void 0!=t.title||void 0!=t.text||void 0!=t.url){var e={title:t.title||"",text:t.text||"",url:t.url||""};this.tags=void 0!=t.tags?JSON.parse(t.tags):"",this.cardActive=!0,0==e.url.length&&e.text.startsWith("http")&&(e.url=e.text,e.text="",this.text_placeholder="Ajoutez une description"),this.note=e,console.log("note init",this.note),void 0==this.topic&&(this.topic="default")}},update:function(t){this.autocompleteItems=[],this.tags=t},getItems:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var o,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t.length>0)){n.next=21;break}return e.loading=!0,o=a+"&language="+e.language+"&search="+t,console.log(o),n.prev=4,n.next=7,fetch(o);case 7:return i=n.sent,n.next=10,i.json();case 10:r=n.sent,console.log(r),e.items=r.search,console.log(e.items),e.autocompleteItems=r.search.map((function(t){return{text:t.match.text+" ("+t.description+")",url:t.concepturi}})),n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](4),alert(n.t0);case 20:e.loading=!1;case 21:case"end":return n.stop()}}),n,null,[[4,17]])})))()}},watch:{tag:s["a"].debounce((function(t){this.getItems(t)}),500),tags:function(){console.log(this.tags),this.note.tags=this.tags},$route:function(t){this.initForm(t.query)},inputFocus:function(){1==this.inputFocus&&(this.cardActive=!0,this.text_placeholder="Note",this.$refs.text.focus())},currentNote:function(){this.note=this.currentNote,this.tags=this.currentNote.tags,this.cardActive=!0,this.$refs.text.focus()}},computed:{pod:function(){return this.$store.state.solid.pod},currentNote:{get:function(){return this.$store.state.app.currentNote},set:function(){}}}},u=c,l=n("2877"),h=Object(l["a"])(u,o,i,!1,null,null,null);e["default"]=h.exports},"2ca0":function(t,e,n){"use strict";var o=n("23e7"),i=n("e330"),r=n("06cf").f,s=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=i("".startsWith),p=i("".slice),g=Math.min,f=l("startsWith"),v=!h&&!f&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();o({target:"String",proto:!0,forced:!v&&!f},{startsWith:function(t){var e=a(u(this));c(t);var n=s(g(arguments.length>1?arguments[1]:void 0,e.length)),o=a(t);return d?d(e,o,n):p(e,n,n+o.length)===o}})}}]);
//# sourceMappingURL=chunk-5802c2aa.db3899a3.js.map