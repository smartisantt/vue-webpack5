<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit('increment');
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
</style>