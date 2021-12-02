<template>
  <h1>
    <img :src="imgSrc" alt="">
  </h1>
</template>

<script>
import imgSrc from '../assets/test.png'
export default {
  data() {
    return {
      imgSrc: imgSrc,
    }
  },
}
</script>

<style>
</style>