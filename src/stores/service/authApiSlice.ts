import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from 'cookies-next'
import { ApiError } from 'next/dist/server/api-utils'

import { CommonResponse } from '@/src/types/global'

import { ChangePasswordRequest, LoginRequest, SignResponse } from '../../types/user'

// fetchBaseQuery 로 fetch를 함 -> HTTP 요청을 단순화
// prepareHeaders : 모든 요청에 헤더를 삽입
export const authApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_BASE_URL}/v20/auth`,
    // headers: { 'Brand-Domain': 'orm' },'
    // prepareHeaders : 모든 요청에 headers를 삽입
    prepareHeaders: (headers, api) => {
      const { brand } = api.getState() as { brand: { brandDomain: string } }

      const accessToken = getCookie('accessToken')
      const refreshToken = getCookie('refreshToken')
      if (!headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }
      headers.set('refreshtoken', `Bearer ${refreshToken}`)
      headers.set('Brand-Domain', brand.brandDomain)
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }) as unknown as BaseQueryFn<string | FetchArgs, unknown, ApiError>,
  reducerPath: 'AuthApi',
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    login: build.mutation<CommonResponse<SignResponse>, LoginRequest>({
      query: (params) => ({
        url: `/signin`,
        method: 'POST',
        body: JSON.stringify(params),
      }),
    }),
    logout: build.mutation<CommonResponse<void>, void>({
      query: (params) => ({
        url: `/signout`,
        method: 'POST',
        body: JSON.stringify(params),
      }),
      onQueryStarted: (arg, api) => {
        api.queryFulfilled.then(() => {
          // api.dispatch(myApiSlice.util.invalidateTags([{ type: 'MyInfo', id: 'all' }])) // 마이페이지 - 내 정보 관리 - 내 정보 데이터 갱신
        })
      },
    }),
    changePassword: build.mutation<CommonResponse<null>, ChangePasswordRequest>({
      query: (params) => ({
        url: `/password`,
        method: 'PATCH',
        body: JSON.stringify(params),
      }),
    }),
  }),
})

// endpoint 기반으로 자동으로 이름이 생성됨.
export const { useLoginMutation, useLogoutMutation, useChangePasswordMutation } = authApiSlice
