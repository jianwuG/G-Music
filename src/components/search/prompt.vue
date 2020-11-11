<template>

</template>

<script>
    import {ref,reactive,toRefs,computed,onMounted} from 'vue'
    import Http from '@util/api'
    export default {
        name: "prompt",
        props:{
            searchWord:String
        },
        setup(props){
            const searchWord=computed(()=>{
                return props.searchWord
            });
            onMounted(async ()=>{
                // if(searchWord.value){
                    let url='/search/suggest?keywords='+'ss';
                    console.log('获取输入提示1111',url,searchWord.value);

                    const body=await Http.get(url);
                    console.log('获取输入提示1111',body);
                // }

            })
        }
    }
</script>

<style scoped>

</style>
