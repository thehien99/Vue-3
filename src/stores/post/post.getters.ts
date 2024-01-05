import type { IPostState } from './post.state'
import postType from './post.type'
const getters = {
  service: (state: IPostState) => state.service,
  [postType.Get.category]: (state: IPostState) => {
    return state.data
  },
  [postType.Get.post]: (state: IPostState) => {
    return state.dataPost
  }
}

export default getters
