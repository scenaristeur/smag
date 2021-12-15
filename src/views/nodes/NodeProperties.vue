<template>
  <div>
    properties in nodeproperties: {{properties}}
    <b-row v-for="p in properties" :key="p.name">
      <b-col sm="5">
        <label for="name"><code>{{p.label || p.name}}</code>:</label>
      </b-col>
      <b-col sm="7">

        <b-button @click="showFieldModal(p)" variant="outline-primary">+</b-button>
        <!-- {{ p.values}} -->

        <Values :values="p.values" />

      </b-col>
    </b-row>

    <b-row v-if="field != null" class="mt-3">
      <b-col>
        <b-form-input @change="fieldNameChanged" v-model="field.name" required placeholder="property name" />
      </b-col>
      <b-col >
        <b-button variant="outline-secondary" size="sm" @click="clear_field">X</b-button>
      </b-col>
    </b-row>

    <b-row v-else>

      <b-btn variant="outline-primary" size="sm" @click="add">+ add a property or a link</b-btn>

    </b-row>

    <FieldModal />
    {{properties}}
  </div>
</template>

<script>
export default {
  name: 'NodeProperties',
  components: {
    'Values': () => import('@/components/items/Values'),
    'FieldModal': () => import('@/components/items/FieldModal'),
  },
  data(){
    return{
      field : null,
      clearing: false,
    }
  },
  // created(){
  //   this.properties == undefined ? this.properties = [] : ""
  // },
  methods:{
    add(){
      this.field = {name: ""}
    },
    fieldNameChanged(field_name){
      console.log(field_name)
      if(this.clearing == false && field_name.length > 0){
        let p = {name: field_name, values: []}

        var index = this.properties.findIndex(x => x.name==p.name);
        index === -1 ? this.properties.push(p) : alert(p.name+" already exist")
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
      this.$bvModal.show("fieldModal")
      this.$store.commit('app/setCurrentProp', p)
    },
  },
  computed:{
    properties:{
      get() { return this.$store.state.app.item['ve:properties'] || []},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>

<style>

</style>
