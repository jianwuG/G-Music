<template>
    <div>
        <div class="search-div">
            <i class="iconfont icon-Search"></i>
            <input class="search-input" type="text" v-model="keyWord" placeholder="搜索歌曲" onkeyup.13="getSearchList"/>
            <i class="iconfont icon-Colosed"></i>
        </div>
    </div>
</template>

<script lang="js">
    import {ref} from 'vue'
    import Http from '@util/api'

    export default {
        name: "Search",
        setup() {
            const msg = ref(1);
            const keyWord=ref('');
            async function getSearchList(){
                 console.log('111111111111',keyWord.value);
            }

            return {
                msg,
                keyWord
            }
        },
        async mounted(){
            let url='/api/search/hot';
            let body=await Http.get(url,{});
            console.log('1111111111111111',body);
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
