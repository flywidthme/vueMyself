
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api/index'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
// 获取Address的异步action
  async getAddress({commit,state}){
    const {longitude,latitude}=state
    //1.发异步ajax请求
    const result = await reqAddress(longitude,latitude)
    //2.根据提交mutation
    if (result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
// 获取的Categorys异步action
  async getCategorys({commit,state}){
    //1.发异步ajax请求
    const result = await reqCategorys()
    //2.根据提交mutation
    if (result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
// 获取SHOPS的异步action
  async getShops({commit,state}){
    const {longitude,latitude}=state
    //1.发异步ajax请求
    const result = await reqShops({longitude,latitude})
    //2.根据提交mutation
    if (result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
