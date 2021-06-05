import { isPlainObject } from './util'

export function transfromRequest(data: any): any {
    // 等于对象则转成json格式
    if (isPlainObject(data)) {
        return JSON.stringify(data)
    }

    return data
}