import { createStore, type ModuleTree, type Store } from 'vuex'
import type { IPostState } from './post/post.state'
import { PostModule } from './post'

export interface IRootState {
  post?: IPostState
}

const store: Store<IRootState> = createStore({
  strict: true,
  modules: <ModuleTree<IRootState>>{
    post: new PostModule<IPostState>()
  }
})

const storeModules = {
  Post: 'post'
}
export { store as default, storeModules }
