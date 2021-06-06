import { isPlainObject } from './util'

export function transfromRequest(data: any): any {
    // 等于对象则转成json格式
    if (isPlainObject(data)) {
        return JSON.stringify(data)
    }

    return data
}

// 数据响应处理 处理data字符串返回成 json格式
export function tranformResponse(data: any): any {
    try {
        //给字符串转成 json
        if (typeof data === "string") {
            data = JSON.parse(data)
        }
    } catch (error) {
        //  do nothing
    }

    return data

}