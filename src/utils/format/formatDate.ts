import dayjs from 'dayjs'

export const formatDate = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  return date.substring(0, 10)
}

export const formatDateKR = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  return `${date.substring(0, 4)}년 ${date.substring(5, 7)}월 ${date.substring(8, 10)}일`
}

export const formatDateKRWithTime = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  const hour = parseInt(date.substring(11, 13), 10)
  let hourWord = ''
  if (hour < 12) hourWord = ` 오전 ${hour}시`
  else hourWord = ` 오후 ${Math.abs(12 - hour)}시`

  return `${date.substring(0, 4)}.${date.substring(5, 7)}.${date.substring(8, 10)}${hourWord}`
}

export const formatDateFull = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  return date.substring(0, 19)
}

export const formatDateFullForUTC = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  return `${date.substring(0, 10)}  ${date.substring(11, 19)}`
}

export const formatDateReplace = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  return date.substring(0, 10).split('-').join('.')
}

/**
 * ### `"n일 뒤" 추가 할인 종료` - 문구 표시를 위한 format method
 * 현재 일자의 차만 계산함. (시간 고려하지 않음)
 * - 0일 => 오늘
 * - 1일 이상 => n일 뒤
 * @param {string} date due date
 * @returns {string} due date와 now date의 차
 */
export const formatDaysRemain = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'

  // 현재는 일자의 차만 계산하기 때문에.
  // 만약 2024-07-26 12:00:00 이 들어오면, 2024-07-27 00:00:00 으로 변환 후 계산한다.
  const onlyDate = date.substring(0, 10)
  const dueDate = dayjs(onlyDate).add(1, 'day')

  const dateDiff = dueDate.diff(dayjs(), 'd')
  if (dateDiff === 0) {
    return '오늘까지만'
  }
  return `${dateDiff.toString()}일 뒤`
}

// formatDaysRemain 함수의 오늘 구분함수
export const formatDaysRemainToday = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'

  const onlyDate = date.substring(0, 10)
  const diffs = dayjs(onlyDate).add(1, 'day').diff(dayjs(), 'd')

  if (diffs === 0) {
    return '중'
  }
  return `종료`
}
/**
 * n월 m일 형식으로 변환
 */
export const formatKoreanDate = (date: string | null): string => {
  if (date == null) return '-'
  if (date === '-') return '-'
  if (date === '') return '-'
  return dayjs(date).format('M월 D일')
}
