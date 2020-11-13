import {createStore} from 'vuex';


// const state=function state(){
//     return {
//         searchWord: '333',//搜索
//     }
// };
// const getters=function getters(){
//     return {
//         searchWord: '333',//搜索
//     }
// };

// plugins: [createPersistedState()],

export const store = createStore({
    state() {
        return {
            searchWord: '',//搜索
            searchType:1,//1显示热搜 2显示搜索提示 3搜索结果
            historyWordList:[],//搜索历史
        }
    },
    getters() {

    },
    actions: {

        /**
         * 输入框文字
         * @param commit
         * @param word
         */
        setWord({commit}, word) {
            commit('setSearchWord', word);
            console.log('111xx11111111111111111',word);
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
        setSearchWord(state, word) {
            state.searchWord = word;
            // this.commit('setSearchType',word?2:1);
            state.searchType = word?2:1;
            console.log('1111111111111111111',word);

        } ,
        setSearchType(state, type) {
            state.searchType = type;
            console.log('1111111111111111111',type);

        },
        setSearchHistoryList(state, info) {
            const {isAdd,word}={...info};
            console.log('zzzzzzzzzzzzzzzzzzzzzzzz',info,isAdd,word);

            if(isAdd){
                let hasOne=state.historyWordList.some(item=>item===word);

                !hasOne&&word&&state.historyWordList.push(word);
                console.log('setHistoryList11111111',word,hasOne,state.historyWordList);
            }
            else{
                state.historyWordList.length=0;

            }


        },
    }


});
