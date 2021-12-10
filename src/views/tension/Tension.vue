<template>
  <div>
    <h3>Tension</h3>
    <p>
      Dans un système basique, chacun doit pouvoir faire remonter ses idées, ou ses problèmes de manière simple.
      <br>
      La solution envisagée ici est inspirée du système de Tension en holacratie. <br>
      <ul>
        <li>Un titre</li>
        <li>Un description de ce qui est à l'heure actuelle.</li>
        <li>Une description de ce qui devrait être.</li>
        <li>Un proposition pour passer de ce qui est à ce qui devrait être.</li>
      </ul>
    </p>
    <b-card>
      <b-form-input
      v-if="cardActive"
      v-model="tension.title"
      placeholder="Title"
      ></b-form-input>

      <b-form-input
      ref="text"
      v-model="tension.wi"
      :placeholder="text_placeholder"
      @click="inputFocus=true"
      @blur="inputFocus=false"
      ></b-form-input>

      <b-form-input
      v-if="cardActive"
      v-model="tension.wsb"
      placeholder="What should be ?"
      ></b-form-input>

      <b-form-textarea
      id="textarea"
      v-if="cardActive"
      v-model="tension.proposition"
      placeholder="Your proposition..."
      rows="3"
      max-rows="6"
      ></b-form-textarea>

      <vue-tags-input
      v-if="cardActive"
      v-model="tag"
      :tags="tags"
      :autocomplete-items="autocompleteTagsItems"
      @tags-changed="update"
      />


      <!-- <b-form-input
      v-if="cardActive"
      v-model="note.tags"
      placeholder="Tags séparés par une virgule"
      ></b-form-input> -->

      <b-button v-if="cardActive" size="sm" variant="light" @click="clean">Cancel</b-button>
      <b-button v-if="cardActive" variant="info" @click="add">Save</b-button>

      <!-- <b-form-checkbox v-model="share" name="check-button" v-if="cardActive">
        Partager sur
        <a href=" https://scenaristeur.github.io/booklice?source=https://booklice.solidweb.org/public/bookmarks/"
        target="_blank">Booklice Pod</a>
      </b-form-checkbox> -->

    </b-card>
    {{ items.length}}
    {{ items}}
  </div>
</template>

<script>
import _ from 'underscore'
const API_URL = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'

export default {
  name: "Tension",
  components: {
    'VueTagsInput': () => import('@johmun/vue-tags-input'),
  },
  data(){
    return{
      tag: '',
      tags: [],
      autocompleteTagsItems: [],
      debounce: null,
      tension: {title: "", wi: "", wsb: "", proposition: "", tags: ""},
      inputFocus: false,
      cardActive: false,
      text_placeholder: "What should be different ?",
      share: true,
      checked1: true,
    }
  },
  created() {
    this.language = navigator.language.split("-")[0] || 'en'
    this.initForm(this.$route.query)
    this.$store.dispatch('local/getItems', {type: "tension"})
  },
  methods:{

    add(){
      //  if (this.pod != undefined && this.pod.webId != null){
      let t = this.tension
      t.share = this.share
      t.type = "tension"
      this.$store.dispatch('local/saveItem', t)
      this.clean()
      this.$store.dispatch('local/getItems', {type: "tension"})
      // }else{
      //   alert("Tu devrais te connecter en selectionnant un fournisseur de PODs, pour enregistrer un Booklice sur ton Pod")
      //   let path = "/?title="+this.tension.title+"&wi="+this.tension.wi+"&wsb="+this.tension.wsb+"&proposition="+this.tension.proposition+"&tags="+JSON.stringify(this.tension.tags)
      //   this.$router.push({path: path})
      // }
    },
    clean(){
      this.tension = {title: "", wi: "", wsb: "", proposition: "", tags: ""}
      this.currentNote = {title: "", wi: "", wsb: "", proposition: "", tags: ""}
      this.cardActive = false
      this.text_placeholder= "Signal a tension"
      this.tags = []
    },
    initForm(q){
      console.log("init",q)
      if (q.title != undefined || q.wi != undefined || q.wsb != undefined || q.proposition != undefined){
        let t = {title: q.title || "",
        wi: q.wi || "",
        wsb: q.wsb || "",
        proposition: q.proposition || "",
      }
      this.tags = q.tags != undefined ? JSON.parse(q.tags) : ""
      this.cardActive = true
      // if(n.url.length == 0 && n.text.startsWith('http')){
      //   n.url = n.text
      //   n.text = ""
      //   this.text_placeholder = "Ajoutez une description"
      // }
      this.tension = t
      console.log("note init",this.tension)
      this.topic == undefined ? this.topic = "default" : ""
    }
  },
  update(newTags) {
    this.autocompleteTagsItems = [];
    this.tags = newTags;
  },
  // initItems() {
  //   if (this.tag.length < 2) return;
  //   const url = `https://itunes.apple.com/search?term=
  //   ${this.tag}&entity=allArtist&attribute=allArtistTerm&limit=6`;
  //
  //   clearTimeout(this.debounce);
  //   this.debounce = setTimeout(() => {
  //     axios.get(url).then(response => {
  //       this.autocompleteItems = response.data.results.map(a => {
  //         return { text: a.artistName };
  //       });
  //     }).catch(() => console.warn('Oh. Something went wrong'));
  //   }, 600);
  // },
  async getTags(query) {
    //  this.conceptUri = ""
    if(query.length>0){
      this.loading = true
      let search_url = API_URL+"&language="+this.language+"&search="+query
      console.log(search_url)
      try{
        const res = await fetch(search_url)
        const suggestions = await res.json()
        console.log(suggestions)
        this.tags_items = suggestions.search
        console.log(this.tags_items)
        this.autocompleteTagsItems = suggestions.search.map(a => {
          return { text: a.match.text+" ("+a.description+")", url: a.concepturi };
        });
      }catch(e){
        alert(e)
      }
      this.loading = false
    }
  },
},
watch:{
  'tag': _.debounce(function(t) { this.getTags(t) }, 500),
  tags(){
    console.log(this.tags)
    this.tension.tags = this.tags//.map(t => t.text.trim())
  },
  '$route' (to) {
    //  console.log("New Note, to",to)
    this.initForm(to.query)
  },
  inputFocus(){
    if (this.inputFocus == true){
      this.cardActive = true
      this.text_placeholder = "What is ?"
      this.$refs.text.focus()
    }
  },
  currentNote(){
    //console.log("currentNote",this.currentNote)
    this.tension = this.currentTension
    this.tags = this.currentTension.tags//.map(t => {return {text:t}})
    this.cardActive = true
    this.$refs.text.focus()
    //  console.log(this.$refs.text)
  }
},
computed:{
  pod(){
    return this.$store.state.solid.pod
  },
  // currentTension:{
  //   get() { return this.$store.state.app.currentTension},
  //   set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
  // },
  items:{
    get() { return this.$store.state.local.items},
    set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
  },
}
}
</script>

<style>

</style>
