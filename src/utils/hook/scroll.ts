export const preventScroll = () => {
  // const currentScrollY = window.scrollY
  // document.body.style.position = 'fixed'
  // document.body.style.height = '100%'
  // document.body.style.top = `-${currentScrollY}px` // 현재 스크롤 위치
  document.body.style.overflowY = 'hidden'
  // document.documentElement.style.scrollBehavior = 'auto'
  // return currentScrollY
}

export const allowScroll = () => {
  // document.body.style.position = ''
  // document.body.style.height = ''
  // document.body.style.top = ''
  document.body.style.overflowY = ''
  // window.scrollTo(0, prevScrollY)
}
