<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h3>{{ counter}}</h3>
    <button @click="$store.dispatch('decrementCounter')">sub</button>
     <button @click="$store.dispatch('increaseCounter')">add</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed:{
    counter(){
      return this.$store.state.count.counter
    }
  },
  components: {
  },
};
</script>
