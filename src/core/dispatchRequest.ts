import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../type/type'
import xhr from '../xhr/xhr'
import { bulidURL } from '../helpers/url'
import { transfromRequest, tranformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
<<<<<<< HEAD
    // 发送请求前 先调用 处理url
    processConfig(config)
    // 拿到处理好的参数 然后提交请求
    return xhr(config).then(res => {
        // 请求返回前 处理一下
        return transfromResponseData(res)
    }) //返回promise
}

function processConfig(config: AxiosRequestConfig): void {
    // 嵌套 调用 处理url
    config.url = transfromURL(config)
    // 处理headers
    config.headers = transformHeaders(config)

    //处理data 
    config.data = transformRequestData(config)
}

function transfromURL(config: AxiosRequestConfig): string {
    // 解构 
    const { url, params } = config
    // 调用处理url 的方法 并且返回
    return bulidURL(url!, params)
}


function transformRequestData(config: AxiosRequestConfig): any {
    // 处理data 并且返回
    return transfromRequest(config.data)
=======
  // 发送请求前 先调用 处理url
  processConfig(config)
  // 拿到处理好的参数 然后提交请求
  return xhr(config).then(res => {
    // 请求返回前 处理一下
    return transfromResponseData(res)
  }) //返回promise
}

function processConfig(config: AxiosRequestConfig): void {
  // 嵌套 调用 处理url
  config.url = transfromURL(config)
  // 处理headers
  config.headers = transformHeaders(config)

  //处理data
  config.data = transformRequestData(config)
}

function transfromURL(config: AxiosRequestConfig): string {
  // 解构
  const { url, params } = config
  // 调用处理url 的方法 并且返回
  return bulidURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  // 处理data 并且返回
  return transfromRequest(config.data)
>>>>>>> c36f276 (axios-4.0)
}

// 处理headers
function transformHeaders(config: AxiosRequestConfig): any {
<<<<<<< HEAD
    const { headers = {}, data } = config
    console.log(data)
    return processHeaders(headers, data)
}


// data 返回结果 处理 字符串 处理成json格式
export function transfromResponseData(res: AxiosResponse): AxiosResponse {
    res.data = tranformResponse(res.data)
    return res
=======
  const { headers = {}, data } = config
  console.log(data)
  return processHeaders(headers, data)
}

// data 返回结果 处理 字符串 处理成json格式
export function transfromResponseData(res: AxiosResponse): AxiosResponse {
  res.data = tranformResponse(res.data)
  return res
>>>>>>> c36f276 (axios-4.0)
}
