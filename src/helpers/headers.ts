import { isPlainObject } from './util'

<<<<<<< HEAD


// 严格判断大小写并 转换
function normalizeHeaderName(headers: any, normalizeName: any): void {

    if (!headers) {
        return
    }
    // 遍历headers
    Object.keys(headers).forEach(name => {
        // 如果不相等 但是转换成大写却相等的话
        if (name != normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
            // headers.Content-Type 的内容等于 headers[name]里面的 的内容
            headers[normalizeName] = headers[name]
            // 然后删除 headers[name]
            delete headers[name]
        }
    })
}

// 处理headers 
export function processHeaders(headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type')
    if (isPlainObject(data)) {
        // 如果有headers 参数 然后haders里面没有Content-Type' 则进行赋值
        if (headers && !headers['Content-Type']) {
            //赋值
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}


// header 转换为对象
export function parseHeaders(headers: string): any {
    let parsed = Object.create(null)
    if (!headers) {
        return
    }
    headers.split('\r\n').forEach(line => {
        // 依次赋值
        let [key, val] = line.split(':')
        if (!key) {
            return
        }
        // 去除空格 转换小写
        key = key.trim().toLowerCase()
        if (val) {
            val = val.trim()
        }
        parsed[key] = val
    })

    return parsed
}
=======
// 严格判断大小写并 转换
function normalizeHeaderName(headers: any, normalizeName: any): void {
  if (!headers) {
    return
  }
  // 遍历headers
  Object.keys(headers).forEach(name => {
    // 如果不相等 但是转换成大写却相等的话
    if (name != normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      // headers.Content-Type 的内容等于 headers[name]里面的 的内容
      headers[normalizeName] = headers[name]
      // 然后删除 headers[name]
      delete headers[name]
    }
  })
}

// 处理headers
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    // 如果有headers 参数 然后haders里面没有Content-Type' 则进行赋值
    if (headers && !headers['Content-Type']) {
      //赋值
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

// header 转换为对象
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return
  }
  headers.split('\r\n').forEach(line => {
    // 依次赋值
    let [key, val] = line.split(':')
    if (!key) {
      return
    }
    // 去除空格 转换小写
    key = key.trim().toLowerCase()
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })

  return parsed
}
>>>>>>> c36f276 (axios-4.0)
