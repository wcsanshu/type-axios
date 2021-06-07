import { isPlainObject } from './util'

export function transfromRequest(data: any): any {
<<<<<<< HEAD
    // 等于对象则转成json格式
    if (isPlainObject(data)) {
        return JSON.stringify(data)
    }

    return data
=======
  // 等于对象则转成json格式
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
>>>>>>> c36f276 (axios-4.0)
}

// 数据响应处理 处理data字符串返回成 json格式
export function tranformResponse(data: any): any {
<<<<<<< HEAD
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
=======
  try {
    //给字符串转成 json
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
  } catch (error) {
    //  do nothing
  }

  return data
}
>>>>>>> c36f276 (axios-4.0)
