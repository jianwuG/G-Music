<template>
    <div>
        <Search @getPrompt="getPrompt" :searchWord="searchWord"></Search>
        <Prompt :searchWord="searchWord" @changeType="changeType"
                @getSearchList="getSearchList"
                v-if="searchType===2"></Prompt>
        <Hot v-if="searchType===1" @getSearchList="getSearchList"></Hot>
        <List v-if="searchType===3" :searchListWord="searchListWord"></List>
    </div>
</template>

<script lang="js">
    import Search from '@components/search/search';
    import Hot from '@components/search/hot';
    import Prompt from '@components/search/prompt';
    import List from '@components/search/list';

    import {ref} from 'vue'

    export default {
        name: "SearchView",
        components: {
            Search,
            Hot,
            Prompt,
            List
        },
        setup() {
            const searchType = ref(1);//1显示热搜 2显示搜索提示 3搜索结果
            const searchWord = ref('');
            const searchListWord=ref('')

            function getPrompt(val) {
                searchWord.value=val;

                searchType.value=val?2:1;
            }
            function changeType(val){
                searchType.value=val;
            }
            function getSearchList(inputWord = ''){
                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzz',inputWord);
                searchType.value=3;
                searchListWord.value=inputWord||searchWord.value;

                searchWord.value=searchListWord.value;
            }
            return{
                searchType,
                searchWord,
                searchListWord,
                getPrompt,
                changeType,
                getSearchList
            }
        },


    }
</script>

<style scoped>


</style>
