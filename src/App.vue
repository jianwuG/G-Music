<template>
 <div>
    <Search></Search>
  </div>
</template>

<script lang="js">
import '@assets/fontIcon/iconfont.css'
import Search from '@components/search/search'
export default {
  name: 'App',
  setup(){

  },
    components:{
        Search
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
