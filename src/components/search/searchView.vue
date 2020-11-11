<template>
    <div>
        <Search @getPrompt="getPrompt"></Search>
        <Prompt :searchWord="searchWord"></Prompt>
        <Hot></Hot>
    </div>
</template>

<script lang="js">
    import Search from '@components/search/search';
    import Hot from '@components/search/hot';
    import Prompt from '@components/search/prompt';

    import {ref} from 'vue'

    export default {
        name: "SearchView",
        components: {
            Search,
            Hot,
            Prompt,
        },
        setup() {
            const searchType = ref(1);
            const searchWord = ref('');
            function getPrompt(val) {
                searchWord.value=val;
            }
            return{
                searchType,
                searchWord,
                getPrompt
            }
        },


    }
</script>

<style scoped>


</style>
