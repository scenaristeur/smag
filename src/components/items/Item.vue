<template>
  <b-card>
    <b-card-title>{{item['ve:name']}}</b-card-title>
    <b-button size="sm" variant="danger" @click="$emit('delete',item)">Delete</b-button>
    <b-button size="sm" @click="$emit('edit',item)">Edit</b-button>
    <!-- <a :href="'https://scenaristeur.github.io/verse?source='+item['ve:url']" target="_blank">
    <b-button size="sm" variant="outline-primary">
    <b-icon icon="share-fill" aria-label="Share"></b-icon>
  </b-button>
</a> -->
{{item['ve:age']}}
<b-card-header>
  <b>What is :       </b> {{item['ve:wi']}}
  <hr>
  <b>What should be: </b>{{item['ve:wsb']}}
</b-card-header>


<b-card-text>
  <div v-html="item['ve:proposition']">
  </div>
</b-card-text>

<b-card-footer>
  <span v-if="item['ve:url'] != undefined">remote</span><span v-else>local</span>
  <!-- [[dendrites- watch]]{{node.modele}}[[axione - send]] -->
</b-card-footer>
<Properties :item="item" />
</b-card>
</template>

<!-- title="Card Title"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top
tag="article"
style="max-width: 20rem;"
class="mb-2" -->
<script>
export default {
  name: "Item",
  props: ['item'],
  components: {
    'Properties': () => import('@/components/items/Properties'),
  },
}
</script>

<style>

</style>
