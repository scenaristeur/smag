<template>
  <div>

    <b-modal
    id="newItemModal"
    size="lg"
    title="Item Edition"

    @ok="handleOk"
    >
    <p class="my-4" v-if="item != null">
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
          <label for="name"><code>{{p.label || p.name}}</code>:</label>
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

  <b-row v-else>
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
      <!-- <b-btn variant="success" @click="save">Save Item</b-btn> -->
    </b-col>
  </b-row>

  <b-modal id="fieldModal" size="xl" :title="item['ve:name']+' -> '+currentProp.label || currentProp.name">
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
    </b-tabs>
  </b-modal>

  {{item}}

</p>
</b-modal>

<NewItemButton />



</div>
</template>

<script>
import * as schema from '@/models/tension.json'


export default {
  name: "NewItem",
  components: {
    'NewItemButton': () => import('@/components/items/NewItemButton'),
    'ItemSelector': () => import('@/components/items/ItemSelector'),
    'Values': () => import('@/components/items/Values'),
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
  created(){
      //this.schema = Object.assign({}, schema.default)
    // this.tension = new Tension()
    // console.log(this.tension)
  },
  methods:{
    // handleOk(){
    //   console.log(this.item)
    //   this.save()
    //   // this.item = {}
    // },
    async handleOk() {
      console.log("save", this.item)
      this.currentProp = {}

      await this.$store.dispatch('local/saveItem', this.item)
      await this.$store.dispatch('local/getItems', this.item)
      //  this.tension.save(this.item)
      this.$store.commit('app/setCurrentItem', null)
      //  this.tension = null
      //this.tension = null
    //  Object.assign(this.item, {})
      // this.tension1.test_change = "BIP"
      //this.item = null

    //  this.item = Object.assign({}, schema.default)

    //  console.log("schema",this.schema)

      // await this.$store.dispatch('nodes/saveNode', this.node);
      // this.$store.commit('nodes/setCurrentNode', null)
      // this.$router.push('/');
    },
    add(){
      this.field = {name: ""}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false && field_name.length > 0){
        let p = {name: field_name, values: []}
        this.item['ve:properties'] == undefined ? this.item['ve:properties'] = [] : ""
        var index = this.item['ve:properties'].findIndex(x => x.name==p.name);
        index === -1 ? this.item['ve:properties'].push(p) : alert(p.name+" already exist")
        this.field = {}
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
    //  console.log(val, this.schema)
      this.currentProp.values.push(val)
      this.newvalue = null
    },
    addNewLink(){
      //console.log(this.link)
      let val = {value: this.link,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.link = {}
    },

  },
  watch:{
    currentItem(){
      console.log("schema", schema)
      console.log(this.currentItem)
      if (this.currentItem != null){
        if (Object.entries(this.currentItem).length === 0){
          this.currentProp = {}
          // console.log("schema", this.schema)
          this.item = Object.assign({}, schema.default)
          console.log("assign", this.item)
        }else{
          this.item = this.currentItem
        }
        console.log(this.item)
        // console.log("schema", this.schema)
        //  Object.assign(this.currentProp,{})
        // if (Object.entries(this.item).length === 0){
        //   this.tension = new Tension({name: "New Tension"})
        //   console.log(this.tension)
        //   Object.assign(this.item,this.tension.data)
        //   console.log(this.item)
        // }

        // this.item['ve:age'] == undefined ? this.item['ve:age'] = -6 : ""
        //
        // this.item['ve:properties'] == undefined ? this.item['ve:properties'] = [] : ""

        this.$bvModal.show("newItemModal")
      }else{
        this.item = null
      }

      // if (this.currentItem != null){
      //   this.tension = new Tension({name: "New Tension"})
      //   console.log(this.tension)
      //   this.item = this.currentItem
      //   this.$bvModal.show("newItemModal")
      // }else{
      //   this.item == {}
      // }
    }
  },
  computed:{
    currentItem() {
      return this.$store.state.app.currentItem
    }
  }
}
</script>
