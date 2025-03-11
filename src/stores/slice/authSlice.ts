/**
 * ==============================================================================
 * @fileoverview authSlice
 * @desc redux toolkit slice를 이용한 예시 파일
 * @module auth/authSlice
 * ==============================================================================
 */

import type { PayloadAction } from '@reduxjs/toolkit'
import { setCookie } from 'cookies-next'
import { PURGE } from 'redux-persist'

import { UserSession } from '@/src/types/global'

import { LoginSession, UserActionType } from '../../types/user'
import { createAppSlice } from '../createAppSlice'

// state 정의
const initialState = {
  isLoggedIn: false,
  userAction: {
    isInSellBig: false,
    isInSellSmall: false,
  },
  userSession: {
    cartCount: 0,
    salesCount: 0,
    tokenValid: false,
  },
  sellActionTotalPoint: 0,
}

// app slice 생성
export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    setLoginState: create.reducer((state, action: PayloadAction<LoginSession>) => {
      if (action.payload.accessToken && action.payload.refreshToken) {
        setCookie('accessToken', action.payload.accessToken)
        setCookie('refreshToken', action.payload.refreshToken)
        state.isLoggedIn = true
      } else {
        setCookie('accessToken', '')
        setCookie('refreshToken', '')
        state.isLoggedIn = false
      }
    }),
    setUserAction: create.reducer((state, action: PayloadAction<UserActionType>) => {
      state.userAction = action.payload
    }),
    setSellActionTotalPoint: create.reducer((state, action: PayloadAction<number>) => {
      state.sellActionTotalPoint = action.payload
    }),
    setUserSession: create.reducer((state, action: PayloadAction<UserSession>) => {
      state.userSession = action.payload
    }),
  }),
  selectors: {
    getLoginState: (state) => state.isLoggedIn,
    getUserAction: (state) => state.userAction,
    getUserSession: (state) => state.userSession,
    getSellActionTotalPoint: (state) => state.sellActionTotalPoint,
    getShowSellTooltip: (state) => state.isLoggedIn && (state.userAction.isInSellBig || state.userAction.isInSellSmall),
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
})

// setter, getter export
export const { setLoginState, setUserAction, setSellActionTotalPoint, setUserSession } = authSlice.actions
export const { getLoginState, getUserAction, getSellActionTotalPoint, getUserSession, getShowSellTooltip } =
  authSlice.selectors

export default authSlice.reducer
