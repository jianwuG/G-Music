<template>
  <div>
      <div v-if="songInfo" class="play-div">
          <div>     {{songInfo.name}}/<span v-if="songInfo.ar">{{songInfo.ar[0].name}}</span></div>
         <img :src="songInfo.al.picUrl" class="play-picUrl" v-if="songInfo.al"/>
      </div>

      {{songUrl}}
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
        setup(){
            const state=reactive({
                songInfo:{}
            });

            const songUrl=ref('');
            onMounted(async ()=>{
                const router=useRoute();
                state.songInfo= await getSongInfo(router.params.id);
                songUrl.value=await getSongUrl(router.params.id);

            });
            async function getSongInfo(id){
                let url='/song/detail?ids='+id;
                const body=await Http.get(url);
                console.log('获取歌曲详情',state.songInfo);
                return  body.data.songs[0];
            }
            async function getSongUrl(id){
                let url='/song/url?id='+id;
                const body=await Http.get(url);
                console.log('获取歌曲详情2222',songUrl.value);
                return body.data.data[0].url;
            }
            const songInfo=toRef(state,'songInfo');
            console.log('111zzzzzzzzzzzzzz',songInfo);

            return {
                songUrl,
                songInfo
            }

        }
    }
</script>

<style scoped>
    .play-div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  .play-picUrl{
      width: 50%;
      border-radius: 50%;
  }
</style>
