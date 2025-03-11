/** gnb 보여주기 */
export const showGnb = () => {
  const bottomNavi = document.getElementById('bottomNavigation')!
  bottomNavi.style.bottom = '0'
}
/** gnb 숨기기 */
export const hideGnb = () => {
  const bottomNavi = document.getElementById('bottomNavigation')!
  bottomNavi.style.bottom = '-100px'
}
