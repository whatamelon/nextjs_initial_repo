'use client'

import { useEffect } from 'react'

import { allowScroll, preventScroll } from './scroll'

export const usePreventScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      preventScroll()
      return () => {
        allowScroll()
      }
    }
    // 25.01.03 html 태그 scrollBehavior = auto 로 변경 (denny)
    // document.documentElement.style.scrollBehavior = 'smooth'
  }, [open])
}
