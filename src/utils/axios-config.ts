import { ApiResponse } from '@/models/apiConfig/api-response'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IAxiosConfigurationHelper {
  axiosResponseHandler(config: AxiosResponse): any
  axiosUnauthorizedResponseHandler(config: AxiosRequestConfig): any
  axiosValidResponseHandler(config: AxiosRequestConfig): any
  axiosInternalExceptionResponseHandler(config: AxiosResponse): any
  axiosNotFoundResponseHandler(config: any): any
}

export class AxiosConfigurationHelper implements IAxiosConfigurationHelper {
  private getLoginUrl() {
    const url = '//' + location.hostname + (location.port ? ':' + location.port : '')
    return url
  }
  private gotoLogin() {
    location.href = this.getLoginUrl()
  }

  axiosResponseHandler(response: AxiosResponse) {
    switch (response.status) {
      case 200:
      case 201:
      case 204:
        response.data = new ApiResponse({ isSuccess: true, data: response.data }, response.headers)
        break
      case 400:
      case 422:
        response.data = new ApiResponse({
          isSuccess: false,
          data: null,
          code: response.data?.code || response.status,
          message: response.data?.error?.reason || response.data?.message || 'Đã có lỗi xảy ra'
        })
        break
      case 401:
        // todo: refresh token
        // this.clearAuthDataStorage();
        this.gotoLogin()

        // response.data = new ApiResponse({
        //     isSuccess: false,
        //     data: null,
        //     code: response.data?.code || response.status,
        //     message: response.data?.error?.reason || response.data?.message || "Đã có lỗi xảy ra"
        // });
        break
      case 403:
        // this.gotoPermissionWarning();
        response.data = new ApiResponse({
          isSuccess: false,
          data: null,
          code: response.data?.code || response.status,
          message: response.data?.error?.reason || response.data?.message || 'Đã có lỗi xảy ra'
        })
        break
      case 404:
        response.data = new ApiResponse({
          isSuccess: false,
          data: null,
          code: response.data?.code || response.status,
          message: response.data?.error?.reason || response.data?.message || 'Đã có lỗi xảy ra'
        })
        break
      case 500:
        response.data = new ApiResponse({
          isSuccess: false,
          data: null,
          code: response.data?.code || response.status,
          message: response.data?.error?.reason || response.data?.message || 'Đã có lỗi xảy ra'
        })
        break
      case 501:
      case 502:
      case 503:
        break
      default:
        response.data = new ApiResponse({
          isSuccess: false,
          data: null,
          code: response.data?.code || response.status,
          message: `Đã xảy ra lỗi ${response.status}`
        })
        break
    }
    return response
  }

  axiosValidResponseHandler(response: AxiosResponse | AxiosRequestConfig) {
    return response
  }
  axiosInternalExceptionResponseHandler(response: AxiosResponse) {
    return response
  }
  axiosNotFoundResponseHandler(response: any) {
    if (response.response) {
      const error = this.axiosResponseHandler(response.response)
      return error.data
    } else {
      return new ApiResponse({
        isSuccess: false,
        data: null,
        message: response.data?.error?.reason || response.data?.message || 'Đã có lỗi xảy ra!!!'
      })
    }
  }

  axiosUnauthorizedResponseHandler(response: AxiosResponse | AxiosRequestConfig): ApiResponse {
    return new ApiResponse({
      isSuccess: false,
      code: response.data.Code,
      message: response.data.Details
    })
  }
}
