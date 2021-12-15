<template>
  <div>
    <b-row v-for="p in item['ve:properties']" :key="p.name">
      <b-col sm="3">
        <label for="name"><code>{{p.label || p.name}}</code>:</label>
      </b-col>
      <b-col sm="9">

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

    <FieldModal :item="item" :currentProp="currentProp" />
  </div>
</template>

<script>
export default {
  name: 'NodeProperties',
  props: ['item'],
  components: {
    // 'NewItemButton': () => import('@/components/items/NewItemButton'),
    // 'ItemSelector': () => import('@/components/items/ItemSelector'),
    'Values': () => import('@/components/items/Values'),
    'FieldModal': () => import('@/components/items/FieldModal'),
  },
  data(){
    return{
      field : null,
      currentProp: {},
      clearing: false,
    }
  },
  methods:{
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
        console.log(p, this.item)
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
  }
}
</script>

<style>

</style>
