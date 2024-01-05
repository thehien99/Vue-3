import type { MutationTree } from 'vuex/types/index.js'
import type { IPostState } from './post.state'
import postType from './post.type'

const mutations: MutationTree<IPostState> = <MutationTree<IPostState>>{
  [postType.Get.category]: (state, value: any) => {
    state.data = value
  },
  [postType.Get.post]: (state, value: any) => {
    state.dataPost = value
  }
}
export default mutations
