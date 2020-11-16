<template>
    <div>
        <Search></Search>
        <Prompt v-if="searchType===2"></Prompt>
        <History v-if="searchType===1&&historyWordList.length"></History>
        <Hot v-if="searchType===1" ></Hot>
        <List v-if="searchType===3" ></List>
    </div>
</template>

<script lang="ts">
    import Search from '@components/search/search.vue';
    import Hot from '@components/search/hot.vue';
    import Prompt from '@components/search/prompt.vue';
    import List from '@components/search/list.vue';
    import History from '@components/search/history.vue';

    import {computed} from 'vue';
    import {useStore} from 'vuex'

    export default {
        name: "SearchView",
        components: {
            Search,
            Hot,
            Prompt,
            List,
            History
        },
        setup() {
            const store = useStore();
            return{
                searchWord:computed(()=>store.state.searchWord),
                searchType:computed(()=>store.state.searchType),
                historyWordList:computed(()=>store.state.historyWordList)
            }
        },


    }
</script>

<style scoped>


</style>
