
<template>
    <div class="first">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <h2>参数:{{ $route.params.data }}</h2>
    </div>
  <router-view ></router-view>
</template>

<script>
    export default {
        name: 'first',
        data () {
            return {
                msg: 'Welcome to2 Your Vue.js App'
            }
        }, methods: {}, watch: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
