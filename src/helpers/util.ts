const toString = Object.prototype.toString

// 判断是否为date
export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}

// 判断是否为obj
export function isObject(val: any): val is object {
    return val !== null && typeof val === 'object'
}

// 判断是否为obj
export function isPlainObject(val: any): val is object {
    return toString.call(val) === "[object Object]"

}