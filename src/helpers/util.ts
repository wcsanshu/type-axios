const toString = Object.prototype.toString

// 判断是否为date
export function isDate(val: any): val is Date {
<<<<<<< HEAD
    return toString.call(val) === '[object Date]'
=======
  return toString.call(val) === '[object Date]'
>>>>>>> c36f276 (axios-4.0)
}

// 判断是否为obj
export function isObject(val: any): val is object {
<<<<<<< HEAD
    return val !== null && typeof val === 'object'
=======
  return val !== null && typeof val === 'object'
>>>>>>> c36f276 (axios-4.0)
}

// 判断是否为obj
export function isPlainObject(val: any): val is object {
<<<<<<< HEAD
    return toString.call(val) === "[object Object]"
}


export function extend<T, U>(to: T, from: U): T & U {
    for (const key in from) {
        ; (to as T & U)[key] = from[key] as any
        console.log(to)
    }
    return to as T & U
}
=======
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
    console.log(to)
  }
  return to as T & U
}
>>>>>>> c36f276 (axios-4.0)
