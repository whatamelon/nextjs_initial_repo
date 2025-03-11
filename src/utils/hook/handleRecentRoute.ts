'use client'

import { deleteCookie, hasCookie, setCookie } from 'cookies-next'

export const setRecentRoute = (pathname: string) => {
  if (hasCookie('recent-route') === true) {
    setCookie('recent-route', pathname)
  }
}

export const deleteRecentRoute = () => {
  if (hasCookie('recent-route') === true) {
    deleteCookie('recent-route')
  }
}
