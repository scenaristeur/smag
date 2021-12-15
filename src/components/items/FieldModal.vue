<template>

  <b-modal id="fieldModal" size="xl" :title="currentProp.name"
  @ok="update">
  {{ currentProp}}
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

</template>

<script>
export default {
  name: 'FieldModal',
  components: {
    // 'NewItemButton': () => import('@/components/items/NewItemButton'),
    'ItemSelector': () => import('@/components/items/ItemSelector'),
    // 'Values': () => import('@/components/items/Values'),
  },
  data(){
    return{
      link: {},
      newvalue: null,
      fieldType: "text",
    }
  },
  methods: {
    addNewValue(){
      let val = {value: this.newvalue,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.newvalue = null
    },
    addNewLink(){
      let val = {value: this.link,  type: this.fieldType}
      this.currentProp.values.push(val)
      this.link = {}
    },
    update(){
      console.log(this.currentProp)
      this.$store.commit('app/addProp', this.currentProp)
    }
  },
  computed:{
    currentProp:{
      get() { return this.$store.state.app.currentProp},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>

<style>

</style>
