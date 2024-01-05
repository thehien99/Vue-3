import { PostService } from '@/services/post.service'
import { PostState, type IPostState } from './post.state'
import type { GetterTree, Module, ActionTree, MutationTree } from 'vuex'
import actions from './post.actions'
import getters from './post.getters'
import mutations from './post.mutation'

export class PostModule<RootState> implements Module<IPostState, RootState> {
  state: IPostState
  getters: GetterTree<IPostState, RootState>
  actions: ActionTree<IPostState, RootState>
  mutations: MutationTree<IPostState>

  constructor() {
    this.state = new PostState({
      service: new PostService()
    })
    this.actions = actions
    this.getters = getters
    this.mutations = mutations
  }
}
