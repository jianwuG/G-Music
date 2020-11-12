<template>
    <div class="search-div">
        <i class="iconfont icon-sousuo"></i>
        <input class="search-input" type="text" v-model="keyWord" placeholder="搜索歌曲" @keyup.native.13="getSearchList"
               @input="getSuggest"/>
        <i class="iconfont icon-guanbi" @click="clearWord" v-if="keyWord"></i>
        <div>
        </div>
    </div>
</template>

<script>
    import {ref,reactive,toRefs,computed} from 'vue'
    export default {
        name: "Search",
        props:{
            searchType:Number
        },
        setup(props,{emit}){
            const keyWord=ref('');//搜索输入
            function getSuggest(){
                console.log('11111111111',keyWord.value);
                emit('getPrompt',keyWord.value);
            }
            function clearWord(){
                keyWord.value='';
                emit('getPrompt',keyWord.value);
            }
            function getSearchList(){
                console.log('222222222222');
            }
            // const {getSuggest}=usePrompt(keyWord);
            return {
                keyWord,
                getSuggest,clearWord,getSearchList
            }
        },

    }

    function usePrompt(keyWord){
        const getSuggest=()=>{
            console.log('1111111111122',keyWord.value);
        }
        return {
            getSuggest
        }
    }
</script>

<style scoped>
    .search-div {
        display: flex;
        align-items: center;
        height: 40px;
        background: #f2f2f2;
        border-radius: 20px;
        margin: 20px;
    }

    .search-div i {
        margin: 0 13px;
    }

    .search-input {
        flex: 1;
        font-size: 14px;
        border: none;
        background: #f2f2f2;
        outline: none;
    }
</style>
