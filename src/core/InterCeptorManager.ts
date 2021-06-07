import { ResolvedFn, RejectedFn } from '../type/type'

interface Interceptors<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterCeptorManager<T> {
  //私有属性,存储拦截器
  // 定义拦截器 是一个数组 然后里面包含 resolved  rejected 两个方法
  private interceptors: Array<Interceptors<T> | null>

  constructor() {
    this.interceptors = []
  }

  //遍历上面的 interceptors 函数
  //接收一个函数 函数的参数是 Interceptors类型 函数返回void foreatch 返回 void
  forEatch(fn: (interceptors: Interceptors<T>) => void): void {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  ues(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  //删除方法
  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
