<template>
    <div>
        <Search :searchType="searchType"></Search>
        <Hot></Hot>
    </div>
</template>

<script lang="js">
    import Search from '@components/search/search';
    import Hot from '@components/search/hot';

    import {ref} from 'vue'

    export default {
        name: "SearchView",
        components: {
            Search,
            Hot
        },
        setup() {
            const searchType = ref(1);
            return{
                searchType
            }
        },


    }
</script>

<style scoped>


</style>
