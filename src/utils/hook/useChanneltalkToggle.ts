'use client'

import { hideChannelButton, hideMessenger, showChannelButton } from '@channel.io/channel-web-sdk-loader'
import { useEffect } from 'react'

export const useChanneltalkToggle = () => {
  // body에서 data-scroll-locked 속성을 가져옴
  // data-scroll-locked: radix ui 에서 body의 스크롤을 막는 속성 > 다이얼로그, 시트 등에서 Open 상태일때 사용됨

  const targetNode = document.getElementsByTagName('body')[0]

  const config = {
    attributes: true,
    childList: true,
    subtree: true,
  }

  const channelTalkHide = () => {
    hideMessenger()
  }

  const callback = (mutationList: Array<MutationRecord>) => {
    mutationList.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'data-scroll-locked') {
          const scrollLockAttr = targetNode.getAttribute('data-scroll-locked')

          if (scrollLockAttr === '1') {
            hideChannelButton()
          } else {
            showChannelButton()
          }
        }

        if (
          mutation.attributeName === 'class' &&
          (mutation.target as Element).id === 'ch-plugin-script' &&
          (mutation.target as Element).classList.length === 1 &&
          (mutation.target as Element).classList.contains('ch-mobile-messenger')
        ) {
          window.history.pushState(null, document.title, window.location.href)
          window.addEventListener('popstate', channelTalkHide)
        } else {
          window.removeEventListener('popstate', channelTalkHide)
        }
      }
    })
  }

  const observer = new MutationObserver(callback)

  useEffect(() => {
    observer.observe(targetNode, config)
    return () => {
      observer.disconnect()
    }
  }, [])
}
