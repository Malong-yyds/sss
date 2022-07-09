<template>
  <div id="app" >
    <!-- class="relative min-h-screen" -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!-- class="absolute min-h-screen w-full z-20" -->
    <router-view ></router-view>
  </div>
 
</template>

<script lang="">
import { defineComponent, onBeforeMount, onMounted } from 'vue'
export default defineComponent({
  name: 'App',
  components: {},
  mounted () {
    console.log(this.$data)
  },
  beforeMount () {
    console.log('beforemounted')
  },
  setup () {
    onBeforeMount(() => {
      console.log('before mounted')
    })
    onMounted(() => {
      console.log('after mounted')
    })
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
   color: #42b983; 
}
</style>
