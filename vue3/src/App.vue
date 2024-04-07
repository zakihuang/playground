<template>
  <Suspense>
    <template #default>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </template>
    <template #fallback>
      <view>Loading...</view>
    </template>
  </Suspense>
</template>

<script>
import { Suspense } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// import './rxjs/demo'

export default {
  name: 'App',
  components: {
    Suspense,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
