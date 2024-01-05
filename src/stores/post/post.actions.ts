import type { ActionTree } from 'vuex'
import type { IPostState } from './post.state'
import postType from './post.type'
import uriConstants from '@/constants/uri/uri.constants'

const api = import.meta.env.VITE_API
const actions = <ActionTree<IPostState, any>>{
  [postType.Get.category]: ({ getters, commit }: any) => {
    return getters.service
      .getCate(api + uriConstants.category)
      .then((res: any) => {
        commit(postType.Get.category, res?.response)
        return Promise.resolve(res?.response || [])
      })
      .catch((err: any) => {
        commit(postType.Get.category, [])
        return Promise.reject(err)
      })
  },
  [postType.Get.post]: ({ getters, commit }: any, params: any) => {
    return getters.service
      .getPost(params)
      .then((res: any) => {
        commit(postType.Get.post, res?.data?.response)
        return Promise.resolve(res?.data?.response || [])
      })
      .catch((err: any) => {
        commit(postType.Get.post, [])
        return Promise.reject(err)
      })
  }
}
export default actions
