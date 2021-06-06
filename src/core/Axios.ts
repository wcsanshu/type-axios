import { AxiosRequestConfig, AxiosPromise, Method } from './../type/type';
import dispatchRequest from '../core/dispatchRequest'
import { config } from 'shelljs';

export default class Axios {
    //请求函数的实现(主要的请求方式)
    request(config: AxiosRequestConfig): AxiosPromise {
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