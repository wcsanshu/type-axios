import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../type/type'
import { parseHeaders } from '../helpers/headers'


export default function xhr(config: AxiosRequestConfig): AxiosPromise {
    
    return new Promise((resolve, reject) => {

        // 拿到对应参数
        const { data = null, url, method = "get", headers, responseType, timeout } = config
        // 发送请求
        const request = new XMLHttpRequest()
        //响应数据的格式
        if (responseType) {
            request.responseType = responseType
        }
        // 超时处理
        if (timeout) {
            request.timeout = timeout
        }


        // 请求方式(转换成大写) 请求链接  是否异步
        request.open(method.toUpperCase(), url!, true)



        Object.keys(headers).forEach(name => {
            // 如果没有要发送的数据则不需要 header 则删除
            if (data === null && name.toLowerCase() === 'content-type') {
                delete headers[name]
            } else {
                // 添加headers 
                request.setRequestHeader(name, headers[name])
            }

        })

        // 发送
        request.send(data)


        // 处理响应的结果
        request.onreadystatechange = function () {

            if (request.status === 0) {
                return
            }
            // 不等于4 则发送失败 返回
            if (request.readyState !== 4) {
                return
            }
            // 获取响应头
            const responseHeaders = parseHeaders(request.getAllResponseHeaders())
            //获取响应数据 如果 相应格式 等于text 则 获取text 格式 
            const responseData = responseType === 'text' ? request.responseText : request.response

            // 最后统一返回
            const response: AxiosResponse = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            }
            // 返回
            handleResponse(response)
        }

        // 处理错误结果
        request.onerror = function () {
            reject(new Error("错误了"))
        }

        // 处理超时时间
        request.ontimeout = function () {
            // 提示错误
            reject(new Error(`time of ${timeout} ms exceeded`))
        }


        // 处理成功结果
        function handleResponse(response: AxiosResponse): void {
            if (response.status >= 200 && response.status < 300) {
                resolve(response)
            } else {
                reject(new Error(`请求失败捕获的失败信息${response.status}`))
            }
        }

    })



}