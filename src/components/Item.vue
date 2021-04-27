<template>
  <div>
    <h1>Item</h1>
    <p v-for="i in cur_item" :key="i">{{i}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      cur_item: this.item
    }
  }
};
</script>

<style>
</style>