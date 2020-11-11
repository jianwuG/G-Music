<template>
    <div class="search-div">
        <i class="iconfont icon-Search"></i>
        <input class="search-input" type="text" v-model="keyWord" placeholder="搜索歌曲" @keyup.13="getSearchList()"
               @input="getSuggest"/>
        <i class="iconfont icon-Colosed"></i>
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
        setup(props){
            const searchType=computed(()=>{
                return props.searchType
            });
                return {
                    searchType
            }
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