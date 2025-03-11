/** 로그인 세션 type 입니다. */
export type LoginSession = { accessToken: string; refreshToken: string }

/** 회원가입 request type 입니다. */
export type SignupRequest = {
  relayId: string
  relayPassword: string
  marketingFlag: boolean
  impUid: string
}

export type UserActionType = {
  isInSellBig: boolean
  isInSellSmall: boolean
}

/** 로그인 request type 입니다. */
export type LoginRequest = {
  relayId: string
  relayPassword: string
}
/** 로그인/회원가입 response type 입니다. */
export type SignResponse = {
  accessToken: string
  refreshToken: string
  isAuthVerified: boolean
  isBrandVerified: boolean
  lastAccessDate: string
  userAction: UserActionType
}
/** 비밀번호 변경 request type 입니다. */
export type ChangePasswordRequest = {
  oldPassword: string
  newPassword: string
}
