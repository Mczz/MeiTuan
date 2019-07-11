import URLS from './urls'
import Axios from 'axios'
const appkey = "zhangmc_1560173446617";
const myAjax = Axios.create({
    method:'GET',
    baseURL:URLS.baseURL
})
export default{
    login(userName,password){
        return myAjax.get(URLS.login,{
            params:{
                userName,
                password,
                appkey
            }
        })
    },
    register (data) {
        return myAjax.get(URLS.register,{
            params:{
                ...data,
                appkey
            }
        })
    },
    search(){
        return myAjax.get(URLS.search,{
            params:{
                appkey
            }
        })
    },
    searchHotWords(){
        return myAjax.get(URLS.searchHotWords,{
            params:{
                appkey
            }
        })
    },
    nav(){
        return myAjax.get(URLS.nav,{
            params:{
                appkey
            }
        })
    },
    resultsByKeywords(){
        return myAjax.get(URLS.resultsByKeywords,{
            params:{
                appkey
            }
        })
    },
    cityList(){
        return myAjax.get(URLS.cityList,{
            params:{
                appkey
            }
        })
    },
    hot(){
        return myAjax.get(URLS.hot,{
            params:{
                appkey
            }
        })
    },
    province(data){
        return myAjax.get(URLS.province,{
            params:{
                appkey,
                ...data
            }
        })
    },
    recents(){
        return myAjax.get(URLS.recents,{
            params:{
                appkey
            }
        })
    },
    goodList(){
        return myAjax.get(URLS.goodList,{
            params:{
                appkey
            }
        })
    },
    recommend(){
        return myAjax.get(URLS.recommend,{
            params:{
                appkey,
                
            }
        })
    },
    classify(data){
        return myAjax.get(URLS.classify,{
            params:{
                appkey,
                ...data
            }
        })
    },
    areaList(){
        return myAjax.get(URLS.areaList,{
            params:{
                appkey,
            }
         })
    },
    getPosition(){
        return myAjax.get(URLS.getPosition,{
            params:{
                appkey
                
            }
        })
    },
    detail(data){
        return myAjax.get(URLS.detail,{
            params:{
                appkey,
                ...data
            }
        })
    },
}