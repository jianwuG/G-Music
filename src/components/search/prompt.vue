<template>
    <div class="prompt-div">
        <span class="prompt-div-head">搜索 "{{searchWord}}" </span>
        <div v-for="(item,index) in suggestList"  :key='index' class="prompt-item" @click="goList(item.keyword)"
        >
            <i class="iconfont icon-Search"></i>
            <span>{{item.keyword}}</span>
        </div>
    </div>
</template>

<script>
    import {reactive,toRef,toRefs,computed,onMounted,watch} from 'vue'
    import Http from '@util/api'
    import {useStore} from 'vuex'
    export default {
        name: "prompt",
        setup(){
            const state=reactive({
                suggestList:[]
            });
            const store=useStore();
            const searchWord=computed(()=>{
                return store.state.searchWord
            });
            const goList=(word)=> {store.dispatch('setTypeAndWord',{type:3,word:word});store.dispatch('setHistoryList',{word:searchWord.value,isAdd:true});};

            onMounted(async ()=>searchWord&&await getSuggestList());

            watch(searchWord,async (searchWord,prevSearchWord)=>{
                if(prevSearchWord!==searchWord.replace(/\s+/g,"")){
                  await getSuggestList();
                }

            });
            async function getSuggestList(){
                console.log('searchWord11111111111',searchWord.value);
                if(searchWord.value){
                    let url='/search/suggest?keywords='+searchWord.value+'&type=mobile';
                    const body=await Http.get(url);
                    state.suggestList=body.data.result.allMatch;
                    console.log('获取输入提示1111',body.data.result.allMatch,toRefs(state));
                }
            };
            const suggestList=toRef(state,'suggestList');
            return {
                suggestList,
                goList,
                searchWord
            }

        }
    }
</script>

<style scoped>
  .prompt-div{
    margin-top: 20px;
      display: flex;
      flex-direction: column;
  }
  .prompt-div-head{
      color: #0077aa;
      font-size: 16px;
      text-align: left;
      padding-left: 20px;
  }
    .prompt-item{
        display: flex;
        align-items: center;
        padding: 20px;
    }
    .prompt-item span{
        margin-left: 6px;
    }
</style>
