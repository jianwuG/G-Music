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
    import {ref,reactive,toRef,toRefs,computed,onMounted,watchEffect,watch} from 'vue'
    import Http from '@util/api'
    export default {
        name: "prompt",
        props:{
            searchWord:String
        },
        setup(props,{emit}){
            const state=reactive({
                suggestList:[]
            });
            const searchWord=computed(()=>{
                return props.searchWord
            });

            const oldSearchWord=ref('');//空格清空相同不请求数据

            watchEffect((onInvalidate)=>{
                let word=searchWord.value.replace(/\s+/g,"")
                if(oldSearchWord.value!==word){
                    oldSearchWord.value=word;
                    getSuggestList();
                }
                onInvalidate(() => {
                    // id 改变时 或 停止侦听时
                    // 取消之前的异步操作
                    console.log('先执行这个，后执行watchEffect内函数');
                });
            });
            // watch(searchWord, () => {
            //     console.log('zzzzzzzzzzzzz11',searchWord.value);
            // });
            async function getSuggestList(){
                if(searchWord.value){
                    let url='/search/suggest?keywords='+searchWord.value+'&type=mobile';
                    const body=await Http.get(url);
                    state.suggestList=body.data.result.allMatch;
                    console.log('获取输入提示1111',body.data.result.allMatch,toRefs(state));
                }
                else{
                    state.suggestList=[];
                    emit('changeType',1);
                }
            };

            function goList(word){
                console.log('1111111111111',word);
                emit('getSearchList',word);
            }

            // 方法1
            // return toRefs(state)

            const suggestList=toRef(state,'suggestList');
            //
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
