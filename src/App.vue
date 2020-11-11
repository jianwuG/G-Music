<template>
 <div>
    <searchView></searchView>
  </div>
</template>

<script lang="js">
import '@assets/fontIcon/iconfont.css'
import searchView from '@components/search/searchView'
export default {
  name: 'App',
  setup(){

  },
    components:{
        searchView
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
}
</style>
