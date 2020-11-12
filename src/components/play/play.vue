<template>
  <div>
     {{id}}
  </div>
</template>

<script>
    import {onMounted,ref,reactive,toRef} from 'vue'
    import {useRoute} from 'vue-router'
    import Http from '@util/api'
    export default {
        name: "Play",
        props:{
            id:Number
        },
        setup(props){
            const state=reactive({
                songInfo:{}
            });
            const songUrl=ref('');
            onMounted(async ()=>{
                const router=useRoute();
                await getSongInfo(router.params.id);
                await getSongUrl(router.params.id);

            });
            async function getSongInfo(id){
                let url='/song/detail?ids='+id;
                const body=await Http.get(url);
                state.songInfo=body.data.songs;
                console.log('获取歌曲详情',state.songInfo);
            }
            async function getSongUrl(id){
                let url='/song/url?id='+id;
                const body=await Http.get(url);
                songUrl.value=body.data.data[0].url;
                console.log('获取歌曲详情2222',songUrl.value);
            }

            const songInfo=toRef(state,'songInfo')
            return {
                songUrl,
                songInfo
            }

        }
    }
</script>

<style scoped>

</style>
