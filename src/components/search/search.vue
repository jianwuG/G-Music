<template>
    <div class="search-div">
        <i class="iconfont icon-sousuo"></i>
        <input class="search-input" type="text" v-model="searchWord" placeholder="搜索歌曲" @keyup.enter="getSearchList"
               @input="setWord(true)"/>
        <i class="iconfont icon-guanbi" @click="setWord(false)" v-if="searchWord"></i>
        <div>
        </div>
    </div>
</template>

<script>
    import {computed} from 'vue';
    import {useStore} from 'vuex'

    export default {
        name: "Search",

        setup() {

            const store = useStore();
             const searchWord=computed({
                 get:()=>store.state.searchWord,
                 set:(word)=>store.dispatch('setWord', word)

             });
            const setWord = (isSet) => {
                store.dispatch('setWord', isSet ? searchWord.value : '');
                searchWord.value = isSet ? searchWord.value : '';
            };

            const getSearchList=store.dispatch('setHistoryList',{word:searchWord.value,isAdd:true});

            return {
                searchWord,
                setWord,
                getSearchList
            }
        },

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
