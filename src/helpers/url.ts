import { isDate, isPlainObject } from './util'

function encode(val: string): string {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}

// 处理拼接 url跟get的参数
export function bulidURL(url: string, params?: any): string {
    if (!params) {
        return url
    }
    // 键值对数组
    const parts: string[] = []
    // 拿到params 的key 
    Object.keys(params).forEach(key => {
        // 拿到每一个parpam的值
        const val = params[key]
        // 判断是否为空 
        if (val === null || typeof val === "undefined") {
            return
        }

        let values = []
        // 判断拿到的 params 键值对 是否是数组
        if (Array.isArray(val)) {
            values = val
            key += "[]"
            console.log("key", key)
        } else {
            // 统一转换为数组 然后去遍历
            values = [val]
            console.log("看我转换数组",values)
        }
        // 开始遍历 数组params 
        values.forEach(val => {
            if (isDate(val)) {
                // 大写
             val = val.toISOString()

            } else if (isPlainObject(val)) {
                // 转化成json
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
            console.log("拿到的parts", parts)
        })
    })

    // 上方遍历完成后转换为字符串
    let serializedParams = parts.join('&')
    console.log("serializedParams", serializedParams)
    // 继续判断是否存在
    if (serializedParams) {
        // 查看url 里面是否有哈希值 也就是路径
        console.log("url", url)
        const markIndex = url.indexOf("#")
        // 如果有的话
        if (markIndex !== -1) {
            //切片掉哈希值
            url = url.slice(0, markIndex)
        }
        // 跟url 进行拼接 查找url路径里面有没有? -1 没有则 拼接 有则& 
        url += (url.indexOf('?') === -1 ? "?" : "&") + serializedParams
    }
    console.log("请求的路径", url)
    return url
}