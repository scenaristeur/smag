<template>
  <div>
    <b-iconstack font-scale="3"  @click="newItem" class="floating-action-button" type="button">
      <b-icon stacked icon="circle-fill" variant="warning"></b-icon>
      <b-icon stacked icon="pencil" scale="0.5" variant="primary"></b-icon>
      <b-icon stacked icon="circle" variant="info"></b-icon>
    </b-iconstack>

    <b-modal
    id="newItemModal"
    size="lg"
    :title="item.name"

    @ok="handleOk"
    >

    current {{ currentItem}}
    <hr>
    effective {{item}}
    <!--    @show="popModal"
    @hidden="resetModal"
  -->
  <p class="my-4">
    <b-row>
      <b-col sm="3">
        <label for="name">Name:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="name" v-model="item['ve:name']" autocomplete="off" autofocus />
      </b-col>
      <b-col sm="3">
        <label for="age"><code>Age</code>:</label>
      </b-col>
      <b-col>
        <b-form-input
        id="age"
        v-model="item['ve:age']"
        required type="number"  />
      </b-col>
    </b-row>

    <b-row v-for="p in item['ve:properties']" :key="p.name">
      <b-col sm="3">
        <label for="name"><code>{{p.name}}</code>:</label>
      </b-col>
      <b-col sm="9">

        <!-- <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-dropdown size="sm" class="mx-1" right text="+" variant="outline-primary">
        <b-dropdown-item @click="fieldType = 'text'">Text</b-dropdown-item>
        <b-dropdown-item @click="fieldType = 'textarea'">Textarea</b-dropdown-item>
        <b-dropdown-item @click="fieldType = 'node'">Node</b-dropdown-item>
        <b-dropdown-item @click="fieldType = 'link'">Link</b-dropdown-item>
      </b-dropdown>

    </b-button-toolbar> -->
    <b-button @click="showFieldModal(p)" variant="outline-primary">+</b-button>
    <!-- {{ p.values}} -->

    <Values :values="p.values" />

    <!-- <b-form-input id="name" v-model="node.name" required /> -->
  </b-col>
</b-row>

<b-row v-if="field != null" class="mt-3">
  <b-col sm="3">
    <b-form-input @change="fieldNameChanged" v-model="field.name" required placeholder="property name" />
  </b-col>
  <b-col sm="9">
    <b-button variant="outline-secondary" size="sm" @click="clear_field">X</b-button>
  </b-col>
</b-row>

<b-row>
  <b-col>
  </b-col>
  <b-col>
    <b-btn variant="outline-primary" size="sm" @click="add">+ add a property or a link</b-btn>
  </b-col>
</b-row>
<b-row>
  <b-col>
    <!-- <b-button  :variant="node['ve:privacy'] == 'public' ? 'warning' : 'outline-success'"
    @click="node['ve:privacy'] = node['ve:privacy'] == undefined || node['ve:privacy'] == 'public' ? 'private' : 'public'">
    {{node['ve:privacy']}}</b-button> -->
    <b-btn variant="success" @click="save">Save Item</b-btn>
  </b-col>
</b-row>

<b-modal id="fieldModal" size="xl" :title="item['ve:name']+' -> '+currentProp.name">
  <!-- {{ currentProp}} -->
  <b-tabs content-class="mt-3">
    <b-tab title="text" active @click="fieldType = 'text'">
      <b-form-input
      v-model="newvalue"
      placeholder="new value"
      @change="addNewValue"/>
    </b-tab>
    <b-tab title="textarea" @click="fieldType = 'textarea'">
      <b-form-textarea
      v-model="newvalue"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      @change="addNewValue"
      ></b-form-textarea>
    </b-tab>
    <b-tab title="item" @click="fieldType = 'item'">
      <ItemSelector :currentProp.sync="currentProp"/>
    </b-tab>
    <b-tab title="link" @click="fieldType = 'link'">
      <b-form-input
      v-model="link.name"
      placeholder="name"
      />
      <b-form-input
      v-model="link.href"
      placeholder="link"
      @change="addNewLink"/>
    </b-tab>
    <!-- <b-tab title="tiny" @click="fieldType = 'tiny'">

    <editor

    v-model="tinycontent"
    :init="{
    height: 500,
    menubar: false,
    plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
    'undo redo | formatselect | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlist outdent indent | removeformat | help'
  }"
  />
</b-tab> -->
</b-tabs>
</b-modal>

{{item}}

</p>
</b-modal>
</div>
</template>

<script>
import * as Tension from '@/agents/tension'

export default {
  name: "NewItem",
  components: {
    'ItemSelector': () => import('@/components/items/ItemSelector'),
    // 'NodeLite': () => import('@/components/NodeLite'),
    'Values': () => import('@/components/items/Values'),
    // 'Quasar': () => import('@/views/Quasar'),
    // 'CKWysiwyg': () => import('@/views/CKWysiwyg'),
    // 'editor': Editor
  },
  data(){
    return{
      item : {},
      currentProp: {},
      link: {},
      field : null,
      clearing: false,
      fieldType: "text",
      show: false,
      newvalue: null,
      // privacy: "private"
    }
  },
  methods:{
    async handleOk(){
      await this.save()
      this.item = {}
    },
    newItem(){
      this.$store.commit('app/setCurrentItem', null)
      this.item = {}
      this.tension = new Tension({name: "New Tension"})
      console.log(this.tension)
      this.item = this.tension.data
      this.$bvModal.show("newItemModal")
    },
    // OLD from node verse
    async save() {
      console.log("save", this.item)
      this.tension.save(this.item)
      this.$store.commit('app/setCurrentItem', null)
    //  this.tension = null
      //this.tension = null
      //this.item = {}
      // this.tension1.test_change = "BIP"

      // await this.$store.dispatch('nodes/saveNode', this.node);
      // this.$store.commit('nodes/setCurrentNode', null)
      // this.$router.push('/');
    },
    add(){
      this.field = {name: ""}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false){
        let p = {name: field_name, values: []}
        this.item['ve:properties'] == undefined ? this.item['ve:properties'] = [] : ""
        var index = this.item['ve:properties'].findIndex(x => x.name==p.name);
        index === -1 ? this.item['ve:properties'].push(p) : alert(p.name+" already exist")
      }
    },
    clear_field(){
      this.clearing = true
      this.field = null
      this.clearing = false
    },
    showFieldModal(p){
      console.log(p)
      this.currentProp = p
      this.$bvModal.show("fieldModal")
    },
    addNewValue(){
      let val = {value: this.newvalue,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.newvalue = null
    },
    addNewLink(){
      //console.log(this.link)
      let val = {value: this.link,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.link = {}
    },


    // testAgents(){
    //   console.log("ADDBUTTON")
    //   let tension1 = new Tension({name: "Tension 1"})
    //   tension1.print()
    //   tension1.log("yohoho, hello!")
    //
    //   //tension1.alert()
    //   tension1.send('theUser', {action: "name"})
    //   window.env.removeAgentByName('fictif 1')
    //   let agents = window.env.getAgents()
    //   console.log(agents)
    //
    //   //  this.$router.push({ name: 'edit', params: {modele: this.modele} });
    // },
  },
  watch:{
    currentItem(){
      console.log(this.currentItem)
      if (this.currentItem != null){
        this.tension = new Tension({name: "New Tension"})
        console.log(this.tension)
        this.item = this.currentItem
        this.$bvModal.show("newItemModal")
      }else{
        this.item == {}
      }
    }
  },
  computed:{
    currentItem() {
      return this.$store.state.app.currentItem
    },

  }
}
</script>

<style>
.floating-action-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index:3;
}
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
