import axios from 'axios';
import {Toast} from 'vant'


axios.interceptors.request.use(config => {
    console.log('request go');
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
    });
    return config;
}, err => {
    console.log('请求失败')
    return Promise.reject(err)
})
//拦截响应
axios.interceptors.response.use(config => {
    Toast.clear();
    return config;
}, err => {
    console.log('响应失败')
    return err.response
})

const get = function (url:string, option:any) {
    return new Promise((resolve, reject) => {
        axios.get(url, option).then((res) => {
            resolve(res);
        }).catch(function (error) {
            console.log(error);
        });
    })

};

const post= function (url:string, option:any) {

    return new Promise((resolve, reject) => {
        axios.post(url,
            option
        ).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
};
const Http={
    get:get,
    post:post
};
export default Http;
