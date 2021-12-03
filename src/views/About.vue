<template>
  <div>
    <h1>{{$store.state.count}}</h1>
    <button @click="handleClick" }>click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit('increment')
    },
  },
}
</script>

<style>
</style>