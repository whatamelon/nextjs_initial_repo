'use client'

import { hideChannelButton, showChannelButton } from '@channel.io/channel-web-sdk-loader'
import _ from 'lodash'
import { useEffect, useState } from 'react'

type Scroll = {
  scrollDirection: null | string
  scrollPos: number
}

/**
 * 스크롤 방향을 감지하는 훅
 * @param isChannelTalk 채널톡 토글 사용 여부 (기본값: true) - 채널톡 토글을 사용하지 않을 경우 false로 설정
 * @returns scrollStatus 스크롤 방향과 위치
 */
export function useScrollDirectionDetect(isChannelTalk = true) {
  const [scrollStatus, setScrollStatus] = useState<Scroll>({
    scrollDirection: null,
    scrollPos: 0,
  })

  const handleScrollDocument = _.throttle(() => {
    setScrollStatus((prev) => ({
      scrollDirection: document.body.getBoundingClientRect().top < prev.scrollPos ? 'down' : 'up',
      scrollPos: document.body.getBoundingClientRect().top,
    }))
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDocument)
    return () => window.removeEventListener('scroll', handleScrollDocument)
  }, [])

  useEffect(() => {
    if (!isChannelTalk) {
      return
    }
    if (scrollStatus.scrollDirection === 'down') {
      hideChannelButton()
    } else {
      showChannelButton()
    }
    return () => showChannelButton()
  }, [scrollStatus.scrollDirection])

  return scrollStatus
}
