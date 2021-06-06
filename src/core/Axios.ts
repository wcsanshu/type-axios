import { AxiosRequestConfig, AxiosPromise, Method } from './../type/type';
import dispatchRequest from '../core/dispatchRequest'

export default class Axios {
    //请求函数的实现(主要的请求方式)
    request(url: any, config?: any): AxiosPromise {
        /**
         * 这里主要让 抛出去的axios 有两种模式
         * 第一种 只传递一个参数 
         * 第二种 可以传递两个参数 url + {} 一个对象
         */
        // 如果url等于string 则说明传递了 两个参数 
        if (typeof url === "string") {
            // 如果有config 
            if (config) {
                // 则把config里的url 改成传递过来的url 就是第一个参数
                config.url = url
            }
        } else {
            // 否则 说明值传递了 一个参数 就是config 
            //由于上面设置了两个参数 所以这时的url是config  config则是空
            //所以 需要把 url赋值到config 
            config = url
        }
        return dispatchRequest(config)
    }

    // 下面单独的请求函数实现 (就是在用于调用axios.get这里的方法后所实现的功能)
    // 实现get
    get(url: string, config?: AxiosRequestConfig): AxiosPromise {
        return this._requestMethodData("get", url, config)
    }

    delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
        return this._requestMethodData("delete", url, config)
    }

    // post 请求 多一个data
    post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
        return this.request(Object.assign(config || {}, {
            method: "post",
            url,
            data
        }))
    }

    // 统一实现 get类似的请求
    _requestMethodData(method: Method, url: string, config?: AxiosRequestConfig) {
        // Object.assign config method url 组合到一起 传递给 request(config)
        return this.request(Object.assign(config || {}, {
            method,
            url
        }))
    }

    // 实现post 的 data
    // _requestMethodPostData(method: Method, data: any, url: string, config?: AxiosRequestConfig) {
    //     // Object.assign config method url 组合到一起 传递给 request(config)
    //     return this.request(Object.assign(config || {}, {
    //         method,
    //         url,
    //         data
    //     }))
    // }
}