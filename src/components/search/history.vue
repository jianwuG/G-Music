<template>
   <div>
      <div class="history-div">
         <i class="iconfont icon-shanchu del-icon" @click="clear"></i>
         <div class="item-all-div">
            <div v-for="(item,index) in historyList" :key="index" class="history-div-item">
               <span class="history-div-item-span">{{item}}</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import {computed} from 'vue';
   import {useStore} from 'vuex'
    export default {
        name: "History",
        setup(){
           const store=useStore();
           const historyList=computed(()=>{
              return store.state.historyWordList;
           });
           const clear=()=>store.dispatch('setHistoryList',{word:'',isAdd:false});

           return{
              historyList,
              clear
           }

        }
    }
</script>

<style scoped>
   .history-div{
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-sizing: border-box;
   }
   .item-all-div{
      display: flex;
      flex-wrap: wrap;

   }
  .history-div-item{
     display: flex;
     padding: 2px 4px;
     border: 1px solid #ccc;
     border-radius: 30px;
     flex-flow: wrap;
     margin: 5px;
     font-size: 12px;
  }
   .del-icon{
      display: flex;
      justify-content: flex-end;
   }
</style>
<!--vuex-persistedstate-->
