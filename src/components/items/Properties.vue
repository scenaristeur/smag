<template>
  <div class="accordion" role="tablist">
    <b-card v-for="p in item['ve:properties']" :key="p.name" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block @click="$root.$emit('bv::toggle::collapse', p.name)" variant="info">{{p.label || p.name}}</b-button>
      </b-card-header>
      <b-collapse :id="p.name" accordion="my-accordion" role="tabpanel">
        <Values :values="p.values"  v-on:update:values="p.values = $event" />
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Properties",
  props: ['item'],
  components: {
    'Values': () => import('@/components/items/Values'),
  }
}
</script>
