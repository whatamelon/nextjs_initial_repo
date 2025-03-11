/** 공통으로 사용하는 코드 type 입니다. */
export type GlobalCode = {
  name: string
  code: string
}

/** paging response */
export type PaginationRequest = {
  page: number
  limit: number
}

export type PaginationProps = {
  first: boolean
  last: boolean
  limit: number
  page: number
  totalPage: number
}

/** paging response */
export type PaginationResponse<T> = {
  content: T
  count: {
    listCount: number
    totalCount: number
  }
  page: PaginationProps
}

/** Search paging response */
export type SearchPaginationResponse<T> = {
  content?: T
  count?: {
    listCount: number
    totalCount: number
  }
  params?: string[]
  page: PaginationProps
}

export type ComponentPaginationRequest = {
  componentId: string
} & PaginationRequest

export type ComponentTemplate = {
  alias: string
  schema: unknown
  templateId: number
  type: string
  url: string
  version: string
}

/** component response */
export type ComponentResponse<T> = {
  componentId: number
  name: string
  contents: {
    title: string
    body: string
    prodIds: Array<string>
    contentsId: string
  }
  template: ComponentTemplate
  data: PaginationResponse<T>
  createdAt: string
  lastModifiedAt: string
  contentsLastModifiedAt: string
  contentsCount: number
}

export type ComponentResponseTransform<T> = {
  title: string
  body: string
  data: PaginationResponse<T>
}

/** 유저 세션 정보를 받아옵니다. */
export type UserSession = {
  cartCount: number
  salesCount: number
  tokenValid: boolean
}

/** 공통 response type 입니다. */
export type CommonResponse<T> = {
  data: T
  message: string
  statusCode: number
  userSession: UserSession
}

/** 공통 에러 response type 입니다. */
export type CommonError = {
  data: string | undefined
  statusCode: number
  code?: number
  message: string
}

/** api 에러 type입니다. */
export type ApiError = {
  status: number
  data: CommonError
}
