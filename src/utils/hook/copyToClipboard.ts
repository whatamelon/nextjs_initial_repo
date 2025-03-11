/**
 * 클립보드에 텍스트 복사 (deprecated, modern 두 가지 방법).
 * - 기종별 호환성을 위해 두 가지 방법을 모두 사용
 * 1. execCommand 사용 (deprecated)
 * 2. Clipboard API 사용 (modern)
 * @param text 복사할 텍스트
 */
export const copyToClipboard = async (text: string) => {
  // 방법 1. execCommand 사용 (deprecated)
  // link: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
  const t = document.createElement('textarea')
  document.body.appendChild(t)
  t.value = text
  t.select()
  document.execCommand('copy')
  document.body.removeChild(t)

  // 방법 2. Clipboard API 사용 (modern)
  // link: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
  await navigator.clipboard.writeText(text)
}
