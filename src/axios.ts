<<<<<<< HEAD
import { AxiosInstance } from './type/type';
import Axios from './core/Axios'
import { extend } from "./helpers/util"

function createTnstance(): AxiosInstance {
    const context = new Axios()
    const instance = Axios.prototype.request.bind(context)
    extend(instance, context)

    return instance as AxiosInstance
=======
import { AxiosInstance } from './type/type'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createTnstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxiosInstance
>>>>>>> c36f276 (axios-4.0)
}

const axios = createTnstance()

<<<<<<< HEAD
export default axios
=======
export default axios
>>>>>>> c36f276 (axios-4.0)
