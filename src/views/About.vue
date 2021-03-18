<template>
  <div class="about">
    <h1>{{ name }}</h1>
    <button @click="$store.commit('cangeName')">click </button>
  </div>
</template>


<script>
export default {
  computed:{
    name(){
      return this.$store.state.name.name;
    }
  }
}
</script>

<style>

</style>
