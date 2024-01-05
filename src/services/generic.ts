import type { AxiosPromise } from 'axios'
import axios from 'axios'

export class GenericService {
  protected executeSelectingGet<TValue, TResult>(
    params?: TValue,
    path?: string,
    encodeURI: boolean = false
  ): AxiosPromise<TResult> {
    path = path || ''
    const uri = encodeURI ? encodeURIComponent(path) : path
    return axios
      .get(uri, { params })
      .then((response) => response.data)
      .catch((error) => error)
  }

  protected executeSelectingPost<TValue, TResult>(
    value?: TValue, 
    path?: string,
    config?: any
  ): AxiosPromise<TResult> {
    path = path || ''
    return axios
      .post(path, value, config)
      .then((response) => response.data)
      .catch((error) => error)
  }

  protected executeSelectingPut<Tvalue, TResult>(
    value?: Tvalue,
    path?: string,
    config?: any
  ): AxiosPromise<TResult> {
    path = path || ''
    return axios
      .put(path, value, config)
      .then((response) => response.data)
      .catch((error) => error)
  }

  protected executeDeleting<TResult>(path?: string): AxiosPromise<TResult> {
    path = path || ''
    return axios
      .delete(path)
      .then((response) => response.data)
      .catch((error) => error)
  }

  protected executeDeleteTingWith<TResult>(value: any, path?: string): AxiosPromise<TResult> {
    path = path || ''
    return axios
      .delete(path, { data: value })
      .then((response) => response.data)
      .catch((error) => error)
  }
}
