//axios请求

import instance from './header'



const request = class{
    constructor(url,arg){
        this.url = url
        this.arg = arg

    }
    //post请求
    modepost(){
        return new Promise((resolve,reject)=>{
            instance.post((this.url),this.arg)
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
    //get请求
    modeget(){
        return new Promise((resolve,reject)=>{
            instance.get((this.url))
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}

export default request
