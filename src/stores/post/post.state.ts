import type { PostService } from '@/services/post.service'

export interface IPostState {
  service: PostService
  data?: any
  dataPost?: any
}
export class PostState implements IPostState {
  service: PostService
  data?: any
  dataPost?: any
  constructor(options: IPostState) {
    this.service = options.service
    this.data = options.data
    this.dataPost = options.dataPost
  }
}
