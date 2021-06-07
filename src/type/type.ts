export type Method =
<<<<<<< HEAD
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
    url?: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType //ts 自动定义的类型 响应来的数据类型 格式
    timeout?: number //超时时间
=======
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
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType //ts 自动定义的类型 响应来的数据类型 格式
  timeout?: number //超时时间
>>>>>>> c36f276 (axios-4.0)
}

// 定义接受的响应数据
export interface AxiosResponse {
<<<<<<< HEAD
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

//axios类中的公共方法接口
export interface Axios {

    request(config: AxiosRequestConfig): AxiosPromise
    get(url: string, config?: AxiosRequestConfig): AxiosPromise
    delete(url: string, config?: AxiosRequestConfig): AxiosPromise
    head(url: string, config?: AxiosRequestConfig): AxiosPromise
    post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
    put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
    patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

=======
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

// 确定接口返回一个 AxiosResponse 类型的 promise
export interface AxiosPromise extends Promise<AxiosResponse> {}

//axios类中的公共方法接口
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise
  get(url: string, config?: AxiosRequestConfig): AxiosPromise
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise
  head(url: string, config?: AxiosRequestConfig): AxiosPromise
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
>>>>>>> c36f276 (axios-4.0)
}

//混合类型接口
export interface AxiosInstance extends Axios {
<<<<<<< HEAD
    (config: AxiosRequestConfig): AxiosPromise
    (url: string, config: AxiosRequestConfig): AxiosPromise
=======
  (config: AxiosRequestConfig): AxiosPromise
  (url: string, config: AxiosRequestConfig): AxiosPromise
>>>>>>> c36f276 (axios-4.0)
}

// 需要泛型 因为 请求拦截器 跟响应拦截器是两种类型
export interface ResolvedFn<T> {
<<<<<<< HEAD
    (val: T): T | Promise<T>
}

export interface AxiosInterCeptorManager {
    // 有一个use方法  两个参数都是函数类型
    use(resolved, rejected)
}
=======
  (val: T): T | Promise<T>
}

export interface AxiosInterCeptorManager<T> {
  // 有一个use方法  两个参数都是函数类型 实现请求或者相应拦截器的方法
  use(resolved: ResolvedFn<T>, rejected: RejectedFn): number
  //删除方法
  eject(id: number): void
}

// 成功的返回值类型
export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

// 失败的返回值 类型

export interface RejectedFn {
  (error: any): any
}
>>>>>>> c36f276 (axios-4.0)
