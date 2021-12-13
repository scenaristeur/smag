<template>
  <b-container v-if="path != null">
    <b-button-toolbar>
      <b-button-group class="mx-1">
        <b-button title="Check" @click="check">check
          <!-- <b-icon icon="cloud-upload" aria-hidden="true"></b-icon> -->
        </b-button>
        <b-button title="Home" @click="path={url:pod.storage}">
          <b-icon icon="house-fill" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="New document" @click="create">
          <b-icon icon="file-earmark" aria-hidden="true" ></b-icon>
        </b-button>
        <b-button title="New document" @click="load">
          load
        </b-button>
        <b-button title="New Folder" @click="init_folder" variant="info"><b-icon-folder-plus></b-icon-folder-plus></b-button>
        <b-button title="Upload Files" @click="$refs.fileInput.$el.childNodes[0].click()" variant="info"> <b-icon-files></b-icon-files></b-button>
        <b-button title="Upload Folder" @click="$refs.folderInput.$el.childNodes[0].click()" variant="info"> <b-icon-folder-symlink></b-icon-folder-symlink></b-button>
        <b-button variant="info" ><b-icon-arrow-up></b-icon-arrow-up></b-button>
      </b-button-group>

    </b-button-toolbar>

    path : {{path.url}} <span v-if="loading==true">Loading...</span>
    <!-- resources : {{resources}} -->

    <b-list-group class="scroll">
      <b-list-group-item button v-for="r in resources" :key="r.url" @click="path=r"
      class="item list-group-item d-flex justify-content-between">
      <p class="p-0 m-0 flex-grow-1"><b-icon-file-text></b-icon-file-text>   {{r.icon}} {{r.name}}</p>

      <b-button size="sm mr-2" variant="outline-primary">
        <b-icon-alt @click.stop="init_move(fo)" variant="primary"></b-icon-alt>
      </b-button>

      <b-button size="sm" variant="outline-danger">
        <b-icon-trash @click.stop="init_trash(fo)" variant="danger"></b-icon-trash>
      </b-button>
    </b-list-group-item>

  </b-list-group>
  <b-form-file
  ref="fileInput" style="display:none;"
  v-model="files"
  placeholder="upload files"
  drop-placeholder="Drop file here..."
  multiple
  ></b-form-file>

  <b-form-file
  ref="folderInput" style="display:none;"
  v-model="files"
  placeholder="Upload directory"
  drop-placeholder="Upoload directory"
  directory
  multiple
  ></b-form-file>


  <b-modal id="context-menu" :title="contextTitle">
    <b-list-group>

      <b-input-group prepend="Rename">
        <b-form-input v-model="newName"></b-form-input>
      </b-input-group>

      <!--<b-list-group-item>Move</b-list-group-item>-->
      <!--<b-list-group-item><b-icon-trash @click="trash"></b-icon-trash></b-list-group-item>-->
      <!--  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>-->
    </b-list-group>
  </b-modal>

  <b-modal id="confirm-trash" title="Trash" @ok="trash">
    Are you sure you want to delete
    <b-icon-trash variant="danger"></b-icon-trash>
    <b>{{ currentItem.name }}</b> ({{ currentItem.type }})
    <b-icon-trash variant="danger"></b-icon-trash> and all its content ?
    <br>
    <small>
      {{ currentItem.url }}
    </small>
  </b-modal>

  <b-modal id="move" title="Are you sure you want to move or rename" @ok="move">
    name : {{ currentItem.name }}
    <br>
    <small>
      {{ currentItem.url }}
    </small>
    <b-input-group size="sm" prepend="New location">
      <b-form-input v-model="new_location"></b-form-input>
    </b-input-group>
  </b-modal>

  <b-modal id="folder-modal" title="New Folder" @ok="createFolder">
    <b-input-group size="sm" prepend="New Folder">
      <b-form-input v-model="new_folder"></b-form-input>
    </b-input-group>
  </b-modal>

</b-container>
</template>

<script>
export default {
  name: "Browser",
  data(){
    return{
      path: null,
      resources: [],
      loading: false,
      //
      contextTitle: "",
      currentItem: {},
      newName: "",
      //  deleteMessage: "",
      new_location:"",
      new_folder:"",
      files:[],
      docId: ""
    }
  },
  async created(){
    await this.$store.dispatch('local/getItems', {type: "tension"})
  },
  methods: {
    check(){
      this.$checkSession()
    },
    async create(){

      let d = {name: "one", date: "two"}
      let doc = await this.$createAM(d)
      console.log(doc)
      let changed = await this.$changeAM(doc, {yipy: "pop", date: Date.now()})
      console.log("changed", changed)
      // not compatible with route.query this.$checkSession()
      let result = await this.$saveAM(changed)
      result.type = "tension"
      await this.$store.dispatch('local/saveItem', result)

      console.log("save", result)
      this.docId = result.id
      //  this.$load()
    },

    async load(){
      let items = await this.$store.dispatch('local/getItems', {type: 'test'})
      console.log(items)
      // let doc = await this.$loadAM(bytes)
      // console.log("doc", doc)
    },
    async explore(path){
      this.loading = true
      this.resources = await this.$getResources(path.url)
      this.loading = false
    },
    selected(item){
      item.type == "folder" ?   this.$store.dispatch('solid/updateFolder', item.url) : this.$store.dispatch('solid/updateFile', item)
    },
    init_folder(){
      this.$bvModal.show("folder-modal")
    },
    async createFolder(){
      console.log(this.new_folder)
      if (this.new_folder.length > 0){
        //  this.new_folder =  ! this.new_folder.endsWith("/") ? this.new_folder+"/" : this.new_folder
        let f = this.folder.url+this.new_folder
        console.log(f)
        // if( !(await fc.itemExists(f)) ) {
        //   await fc.createFolder(f) // only create if it doesn't already exist
        // }else{
        //   alert (f+" already exists")
        // }
        // this.updateFolder(this.folder.url)
      }else{
        alert("folder name can not be empty")
      }
    },
    right(item){
      console.log("right",item)
      this.contextTitle = item.name
      this.newName = item.name
      this.$bvModal.show("context-menu")
      this.currentItem = item
    },
    init_trash(item){
      console.log(item)
      this.$bvModal.show("confirm-trash")
      this.currentItem = item
    },
    init_move(item){
      console.log(item)
      this.$bvModal.show("move")
      this.currentItem = item
      this.new_location = item.url
    },
    async  move(){
      // console.log("Move",this.currentItem.type, this.currentItem.url, "to", this.new_location)
      // try{
      //   this.currentItem.type == "folder" ? await fc.move( this.currentItem.url, this.new_location ) : await fc.move( this.currentItem.url, this.new_location )
      //   this.updateFolder(this.folder.url)
      // }
      // catch(e){
      //   this.makeToast("Error", e, "danger")
      // }
    },
    async  trash(){
      console.log("Trash",this.currentItem.type,this.currentItem.url)
      // if (this.currentItem.type != "folder"){
      //   await deleteFile(
      //     this.currentItem.url
      //   );
      //   console.log("File deleted !");
      //   this.makeToast("success !", "File deleted !", "success")
      // }else{
      //   await  fc.deleteFolder(this.currentItem.url)
      // }
      // this.updateFolder(this.folder.url)
    },
    updateFolder(folder){
      console.log(folder)
      // this.$store.dispatch('solid/updateFolder', folder)
    }
  },
  watch:{
    path(){
      this.explore(this.path)
    },
    pod(){
      if(this.pod != null){
        this.path = {url: this.pod.storage}
      }else{
        this.path = null
        this.resources = []
      }
    },
    async  files (files) {
      console.log(files)
      let folder = this.folder.url
      console.log(folder)
      await   files.forEach(async function(f, i)  {
        console.log(f,i)
        let uri = f.webkitRelativePath.length > 0 ? folder+f.webkitRelativePath : folder+f.name
        console.log(uri, f, f.type)
        //  await fc.createFile(uri, f, f.type)
      })
      //this.updateFolder(this.folder.url)
    },
  },
  computed:{
    pod() {
      return this.$store.state.solid.pod
    }
  }
}
</script>

<style>
.scroll{
  max-height: 80vh;
  margin-bottom: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
