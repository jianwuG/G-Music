<template>
  <div class="list-div">
      <div class="list-content">
          <div v-for="(item,index) in searchList" :key="item.id" class="list-item" @click="goPlay(item.id)">
              <div class="list-item-context">
                  <div class="item-context-name">{{item.name}}</div>
                  <div class="item-context-desc">{{item.artists[0].name}}</div>
              </div>
              <i class="iconfont icon-bofang"></i>
          </div>
      </div>
  </div>
</template>

<script>
    import {reactive,toRef,computed,watchEffect} from 'vue'
    import Http from '@util/api'
    import router from "../../router";
    export default {
        name: "List",
        props:{
            searchListWord:String
        },
        setup(props){
            const state=reactive({
                searchList:[]
            })
             const searchListWord=computed(()=>{
                 return props.searchListWord
             });
            watchEffect(async ()=>{
             await getList();
            });
           async function getList(){
               let url='/search?keywords='+searchListWord.value;
               let body=await Http.get(url);
               state.searchList=body.data.result.songs;
            }
            function goPlay(id){
               console.log('zzzzzzzzzzzzzzzzzz',id);
               // router.push({path:'/play',params:{id:id}});//path写法参数会被忽略

                router.push({name:'Play',params:{id:id}})
                // router.push({name:'Play',replace:true,params:{id:id}})
                // router.replace({name:'Play',params:{id:id}})
            }
            const searchList=toRef(state,'searchList')
            return{
                searchList,
                goPlay
            }
        }
    }
</script>

<style scoped>
    .list-div{
        margin: 0 20px;
    }
    .list-content{

    }
 .list-item{
     display: flex;
     height: 40px;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     padding: 6px 0;
    }
    .list-item-context{
        display: flex;
        flex-direction: column;
        width: 90%;
        text-align: left;
    }
    .list-item-context div{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .item-context-name{
        font-size: 18px;
        width: 80%;

    }
    .item-context-desc{
        font-size: 16px;
        color: #ccc;

    }
</style>
