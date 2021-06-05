export type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'


//定义axios 接受参数的类型
export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType //ts 自动定义的类型 响应来的数据类型 格式
    timeout?:number //超时时间
}

// 定义接受的响应数据
export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

// 确定接口返回一个 AxiosResponse 类型的 promise
export interface AxiosPromise extends Promise<AxiosResponse> {

}