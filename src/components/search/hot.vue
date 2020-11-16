<template>
    <div class="hot-div">
         <div class="hot-div-head">热歌榜</div>
         <div class="hot-div-list">
             <div v-for="(item,index) in searchHotList" :key="index" data-url="item.iconUrl" class="div-list-item"
             @click="goList(item.searchWord)"
             >
                 <div class="list-item-index">{{index+1}}</div>
                 <div class="list-item-content">
                     <div class="item-content-name">
                         {{item.searchWord}}<img :src="item.iconUrl" v-show="item.iconUrl"
                                                 :class="item.iconType===5?'content-name-img-type5':'content-name-img'"/>
                     </div>
                     <span>{{item.content}}</span>
                 </div>
                 <div class="list-item-score">{{item.score}}</div>


             </div>
         </div>
    </div>
</template>

<script lang="ts">
    import {reactive,toRef,onMounted} from 'vue';
    import {useStore} from 'vuex';
    import Http from '../../util/api'
    export default {
        name: "hot",
        setup(){
            const state:any=reactive({
                searchHotList:[],
            });
            const store=useStore();
            const goList=(searchWord:string)=>{
                store.dispatch('setTypeAndWord',{type:3,word:searchWord});
                store.dispatch('setHistoryList',{word:searchWord,isAdd:true})};

            onMounted(async ()=>{
                let body:any=await Http.get('/search/hot/detail',{});
                console.log('1111',body.data.data);
                state.searchHotList=[...body.data.data];
            });
           const searchHotList=toRef(state,'searchHotList')
            return {
                searchHotList,
                goList
            };
        }
    }
</script>

<style scoped>
 .hot-div{
     display: flex;
     flex-direction: column;
     padding: 0 20px;

 }
    .hot-div-head{
        display: flex;
        font-weight: bold;
    }
    .hot-div-list{
        display: flex;
        flex-direction: column;
        padding: 0 0 40px 0;
    }
    .div-list-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:  10px 0;
   }
    .list-item-index{
        color: red;
        margin-right: 20px;
    }
    .list-item-content{
        display: flex;
        flex-direction: column;
        text-align: left;
        flex:1
    }
    .list-item-content span{
        font-size: 14px;
    }
    .item-content-name{

    }
    .content-name-img{
        width: 22px;
        margin: 0 0 8px 4px ;
    }
 .content-name-img-type5{
     width: 14px;
     margin: 0 0 0 4px ;
 }
    .list-item-score{
        color: #bbb;
    }


</style>
