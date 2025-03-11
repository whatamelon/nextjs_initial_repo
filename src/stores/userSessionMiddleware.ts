import { Middleware } from '@reduxjs/toolkit'
import { getCookie, setCookie } from 'cookies-next'

import { setLoginState, setUserSession } from './slice/authSlice'
/**
 * 유저 세션을 확인하는 미들웨어.
 * 성공했을 때, userSession을 저장한다.
 * 실패했을 때, 401 에러가 발생하면 refreshToken을 사용해서 accessToken을 재발급 받는다.
 * refreshToken이 만료되었을 때, 로그인 페이지로 이동한다.
 */

const resetAndGoToLogin = (next) => {
  next(
    setLoginState({
      accessToken: '',
      refreshToken: '',
    }),
  )
  next(
    setUserSession({
      cartCount: 0,
      salesCount: 0,
      tokenValid: false,
    }),
  )
  setCookie('is-needed-login', 'true')
  setCookie('recent-route', window.location.pathname)
  // 로그인 페이지로 이동
  window.location.replace('/login')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userSessionMiddleware: Middleware = () => (next) => (action: any) => {
  if (action.type.endsWith('fulfilled')) {
    if (action.payload.userSession) {
      // getBrandsHeader는 tokenValid가 false여도 통과 => 무조건 userSession에 null 데이터를 넘겨주기 때문에.
      if (action.meta.arg.endpointName === 'getBrandsHeader') return next(action)

      next(setUserSession(action.payload.userSession))
      if (action.payload.userSession.tokenValid === false) {
        next(
          setLoginState({
            accessToken: '',
            refreshToken: '',
          }),
        )
      }
    }
  }

  if (action.type.endsWith('rejected')) {
    // 401 에러 처리

    if (action.payload?.status === 401) {
      const existAccessToken = getCookie('accessToken')
      const existRefreshToken = getCookie('refreshToken')

      // 토큰 있는지 체크
      if (!existAccessToken || !existRefreshToken) {
        resetAndGoToLogin(next)
      }

      fetch(
        `${process.env.API_BASE_URL}/v20/auth/refresh?accessToken=${existAccessToken}&refreshToken=${existRefreshToken}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Brand-Domain': 'orm',
          },
        },
      )
        .then((res) => res.json())
        .then((res) => {
          // 에러 아니면 토큰 저장
          if (res.data) {
            next(
              setLoginState({
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
              }),
            )
            return next(action)
          }
          if (res.statusCode === 400 || res.statusCode === 401) {
            resetAndGoToLogin(next)
          }
        })
        .catch(() => resetAndGoToLogin(next))
    }
  }

  return next(action)
}
