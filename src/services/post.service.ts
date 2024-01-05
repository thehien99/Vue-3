import type { ApiResponse } from '@/models/apiConfig/api-response'
import { GenericService } from './generic'
import uriConstants from '@/constants/uri/uri.constants'

const Api = import.meta.env.VITE_API

export class PostService extends GenericService {
  getCate(): Promise<ApiResponse> {
    return this.executeSelectingGet({}, Api + uriConstants.category)
      .then((response: ApiResponse) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.message)
      })
      .catch((error) => Promise.reject(error))
  }
  getPost(params: any): Promise<ApiResponse> {
    return this.executeSelectingGet(params, Api + uriConstants.datapost)
      .then((response: ApiResponse) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.message)
      })
      .catch((error) => Promise.reject(error))
  }
}
