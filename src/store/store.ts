import {createStore,createLogger } from 'vuex';
const historyList:string|null=localStorage.getItem('historyList');
const state={
    searchWord: '',//搜索
    searchType:1,//1显示热搜 2显示搜索提示 3搜索结果
    historyWordList:historyList&&JSON.parse(historyList)||[]
};
export const store = createStore({
    plugins: [createLogger()],
    state:state,
    actions: {

        /**
         * 输入框文字
         * @param commit
         * @param word
         */
        setWord({commit}, word) {
            commit('setSearchWord', word);
        },
        setType({commit}, type){
            commit('setSearchType', type)
        },
        setTypeAndWord({commit}, {...info}){
            commit('setSearchWord', info.word);
            commit('setSearchType', info.type);
        },
        setHistoryList({commit}, {...info}){
            commit('setSearchHistoryList', {...info})
        },
    },
    mutations: {
        setSearchWord(state:any, word){
            state.searchWord = word;
            // this.commit('setSearchType',word?2:1);
            state.searchType = word?2:1;
        } ,
        setSearchType(state:any, type:number) {
            state.searchType = type;
        },
        setSearchHistoryList(state:any, info:{isAdd:boolean,word:string}) {
            const {isAdd,word}={...info};
            if(isAdd){
                let hasOne=state.historyWordList&&state.historyWordList.some((item:string)=>item===word);
                console.log('ssssssssssssss',state.historyWordList,hasOne,word);

                !hasOne&&word&&state.historyWordList.push(word);
                localStorage.setItem('historyList',JSON.stringify(state.historyWordList));
            }
            else{
                state.historyWordList=[];
                localStorage.setItem('historyList',JSON.stringify([]))

            }


        },
    }


});
