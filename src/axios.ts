import { AxiosInstance } from './type/type';
import Axios from './core/Axios'
import { extend } from "./helpers/util"

function createTnstance(): AxiosInstance {
    const context = new Axios()
    const instance = Axios.prototype.request.bind(context)
    extend(instance, context)

    return instance as AxiosInstance
}

const axios = createTnstance()

export default axios