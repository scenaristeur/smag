(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70cef27a"],{"25a8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!=e.path?n("b-container",[n("b-button-toolbar",[n("b-button-group",{staticClass:"mx-1"},[n("b-button",{attrs:{title:"Check"},on:{click:e.check}},[e._v("check ")]),n("b-button",{attrs:{title:"Home"},on:{click:function(t){e.path={url:e.pod.storage}}}},[n("b-icon",{attrs:{icon:"house-fill","aria-hidden":"true"}})],1),n("b-button",{attrs:{title:"New document"}},[n("b-icon",{attrs:{icon:"file-earmark","aria-hidden":"true"}})],1),n("b-button",{attrs:{title:"New Folder",variant:"info"},on:{click:e.init_folder}},[n("b-icon-folder-plus")],1),n("b-button",{attrs:{title:"Upload Files",variant:"info"},on:{click:function(t){return e.$refs.fileInput.$el.childNodes[0].click()}}},[n("b-icon-files")],1),n("b-button",{attrs:{title:"Upload Folder",variant:"info"},on:{click:function(t){return e.$refs.folderInput.$el.childNodes[0].click()}}},[n("b-icon-folder-symlink")],1),n("b-button",{attrs:{variant:"info"}},[n("b-icon-arrow-up")],1)],1)],1),e._v(" path : "+e._s(e.path.url)+" "),1==e.loading?n("span",[e._v("Loading...")]):e._e(),n("b-list-group",{staticClass:"scroll"},e._l(e.resources,(function(t){return n("b-list-group-item",{key:t.url,staticClass:"item list-group-item d-flex justify-content-between",attrs:{button:""},on:{click:function(n){e.path=t}}},[n("p",{staticClass:"p-0 m-0 flex-grow-1"},[n("b-icon-file-text"),e._v(" "+e._s(t.icon)+" "+e._s(t.name))],1),n("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary"}},[n("b-icon-alt",{attrs:{variant:"primary"},on:{click:function(t){return t.stopPropagation(),e.init_move(e.fo)}}})],1),n("b-button",{attrs:{size:"sm",variant:"outline-danger"}},[n("b-icon-trash",{attrs:{variant:"danger"},on:{click:function(t){return t.stopPropagation(),e.init_trash(e.fo)}}})],1)],1)})),1),n("b-form-file",{ref:"fileInput",staticStyle:{display:"none"},attrs:{placeholder:"upload files","drop-placeholder":"Drop file here...",multiple:""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),n("b-form-file",{ref:"folderInput",staticStyle:{display:"none"},attrs:{placeholder:"Upload directory","drop-placeholder":"Upoload directory",directory:"",multiple:""},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),n("b-modal",{attrs:{id:"context-menu",title:e.contextTitle}},[n("b-list-group",[n("b-input-group",{attrs:{prepend:"Rename"}},[n("b-form-input",{model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1)],1)],1),n("b-modal",{attrs:{id:"confirm-trash",title:"Trash"},on:{ok:e.trash}},[e._v(" Are you sure you want to delete "),n("b-icon-trash",{attrs:{variant:"danger"}}),n("b",[e._v(e._s(e.currentItem.name))]),e._v(" ("+e._s(e.currentItem.type)+") "),n("b-icon-trash",{attrs:{variant:"danger"}}),e._v(" and all its content ? "),n("br"),n("small",[e._v(" "+e._s(e.currentItem.url)+" ")])],1),n("b-modal",{attrs:{id:"move",title:"Are you sure you want to move or rename"},on:{ok:e.move}},[e._v(" name : "+e._s(e.currentItem.name)+" "),n("br"),n("small",[e._v(" "+e._s(e.currentItem.url)+" ")]),n("b-input-group",{attrs:{size:"sm",prepend:"New location"}},[n("b-form-input",{model:{value:e.new_location,callback:function(t){e.new_location=t},expression:"new_location"}})],1)],1),n("b-modal",{attrs:{id:"folder-modal",title:"New Folder"},on:{ok:e.createFolder}},[n("b-input-group",{attrs:{size:"sm",prepend:"New Folder"}},[n("b-form-input",{model:{value:e.new_folder,callback:function(t){e.new_folder=t},expression:"new_folder"}})],1)],1)],1):e._e()},o=[],i=n("1da1"),a=(n("b0c0"),n("d3b7"),n("159b"),n("96cf"),{name:"Browser",data:function(){return{path:null,resources:[],loading:!1,contextTitle:"",currentItem:{},newName:"",new_location:"",new_folder:"",files:[]}},methods:{check:function(){this.$checkSession()},explore:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$getResources(e.url);case 3:t.resources=n.sent,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},selected:function(e){"folder"==e.type?this.$store.dispatch("solid/updateFolder",e.url):this.$store.dispatch("solid/updateFile",e)},init_folder:function(){this.$bvModal.show("folder-modal")},createFolder:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.new_folder),e.new_folder.length>0?(n=e.folder.url+e.new_folder,console.log(n)):alert("folder name can not be empty");case 2:case"end":return t.stop()}}),t)})))()},right:function(e){console.log("right",e),this.contextTitle=e.name,this.newName=e.name,this.$bvModal.show("context-menu"),this.currentItem=e},init_trash:function(e){console.log(e),this.$bvModal.show("confirm-trash"),this.currentItem=e},init_move:function(e){console.log(e),this.$bvModal.show("move"),this.currentItem=e,this.new_location=e.url},move:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},trash:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("Trash",e.currentItem.type,e.currentItem.url);case 1:case"end":return t.stop()}}),t)})))()},updateFolder:function(e){console.log(e)}},watch:{path:function(){this.explore(this.path)},pod:function(){null!=this.pod?this.path={url:this.pod.storage}:(this.path=null,this.resources=[])},files:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),r=t.folder.url,console.log(r),n.next=5,e.forEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t,n),o=t.webkitRelativePath.length>0?r+t.webkitRelativePath:r+t.name,console.log(o,t,t.type);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 5:case"end":return n.stop()}}),n)})))()}},computed:{pod:function(){return this.$store.state.solid.pod}}}),l=a,s=(n("ef6b"),n("2877")),c=Object(s["a"])(l,r,o,!1,null,null,null);t["default"]=c.exports},"909c":function(e,t,n){},ef6b:function(e,t,n){"use strict";n("909c")}}]);
//# sourceMappingURL=chunk-70cef27a.408d41d6.js.map