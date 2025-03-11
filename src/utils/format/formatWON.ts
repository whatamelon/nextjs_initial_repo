export const formatWon = (value: number | string) => {
  if (!value) return ''
  return Number(value).toLocaleString()
}

export const formatWonNoBlank = (value: number | string) => {
  if (!value) return '0'
  return Number(value).toLocaleString()
}

export const formatPhone = (phone: string) => {
  // 빈값이면 0으로 리턴
  if (!phone) return '0'

  const cleaned = phone.replace(/[^0-9]/g, '')

  if (cleaned.startsWith('02')) {
    if (cleaned.length === 9) {
      // 02-XXX-XXXX 형식
      return cleaned.replace(/^(\d{2})(\d{3})(\d{4})$/, '$1-$2-$3')
    }
    if (cleaned.length === 10) {
      // 02-XXXX-XXXX 형식
      return cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1-$2-$3')
    }
  } else if (cleaned.length === 11) {
    // 010-XXXX-XXXX 형식
    return cleaned.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3')
  }

  // 포맷팅 불가능한 경우 원본 반환
  return phone
}

export const formatWonWithSymbol = (value: number | string) => {
  if (!value) return ''
  if (value.toString().indexOf('-') > -1) {
    return Number(value.toString().slice(1)).toLocaleString()
  }
  return `-${Number(value).toLocaleString()}`
}

export const formatPayMethod = (value: string) => {
  if (!value) return '-'
  switch (value) {
    case 'card':
      return '신용/체크카드'
    case 'vbank':
      return '가상계좌'
    case 'kakaopay':
      return '카카오페이'
    default:
      return value
  }
}
