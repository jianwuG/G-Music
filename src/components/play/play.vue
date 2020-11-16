<template>
  <div class="play-template" >
<!--  <div class="play-template" :style="{backgroundImage: 'url(' + picUrl + ')'}" >-->
      <div v-if="songInfo" class="play-div">
          <div class="play-title">{{songInfo.name}}/<span v-if="songInfo.ar">{{songInfo.ar[0].name}}</span></div>
         <img :src="picUrl" class="play-picUrl" v-if="songInfo.al"/>
      </div>

      <div class="play-btn">
          <i class="iconfont icon-bofang play-bofang" @click="play"></i>
<!--          <i class="iconfont icon-zanting play-bofang"></i>-->

      </div>
  </div>
</template>

<script lang="ts">
    import {onMounted,ref,reactive,toRef} from 'vue'
    import {useRoute} from 'vue-router'
    import Http from '../../util/api'
    export default {
        name: "Play",
        props:{
            id:Number
        },
        setup(){
            const state:any=reactive({
                songInfo:{}
            });
            const picUrl:any=ref('');

            const songUrl=ref('');
            onMounted(async ()=>{
                const router=useRoute();
                state.songInfo= await getSongInfo(router.params.id);
                picUrl.value=state.songInfo.al.picUrl;
                songUrl.value=await getSongUrl(router.params.id);

            });
            async function getSongInfo(id:string|string[]){
                let url='/song/detail?ids='+id;
                const body:any=await Http.get(url,{});
                console.log('获取歌曲详情',state.songInfo);
                return  body.data.songs[0];
            }
            async function getSongUrl(id:string|string[]){
                let url='/song/url?id='+id;
                const body:any=await Http.get(url,{});
                console.log('获取歌曲详情2222',songUrl.value);
                return body.data.data[0].url;
            }
            const songInfo=toRef(state,'songInfo');
            console.log('111zzzzzzzzzzzzzz',songInfo);

            return {
                songUrl,
                songInfo,
                picUrl
            }

        }
    }
</script>

<style scoped>
    div{
        overflow: hidden;
    }
    .play-template{
        display: flex;
        width: 100vw;
        height: 100vh;
        background-size: 100% 100%;
        flex-direction: column;
        align-items: center;
        background:  linear-gradient(to bottom, #b3d4fc 0%,#ffffff 100%);;
    }
    .play-title{
        padding: 20px;
        color: #fff;
        font-size: 20px;
    }
    .play-div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  .play-picUrl{
      width: 50%;
      border-radius: 50%;
      margin-top: 20%;
  }
    .cc{
        display: flex;
    }
    .play-btn{
        margin-top: 40%;
    }
    .play-bofang{
        font-size: 30px;
    }
</style>
