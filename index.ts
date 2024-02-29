import { parse, stringify } from 'qs'

/**
 * 当前浏览器是否支持 webp 格式
 * @returns boolean
 * @example
 * if (canUseWebp) {
 * 		// 使用 webp 格式
 * }
 */
export const canUseWebp: boolean = (() => {
	const canvas = document.createElement('canvas')
	if (canvas.getContext && canvas.getContext('2d')) {
		return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
	}
	return false
})()

/**
 * 当前系统是否是 windows
 * @returns boolean
 * @example
 * if (isWindows) {
 * 		// windows 系统操作
 * }
 */
export const isWindows: boolean = (() => {
	const agent = navigator.userAgent.toLowerCase();
  if (
    agent.includes('win32') ||
    agent.includes('wow32')
  ) {
    return true
  }
  if (
    agent.includes('win64') ||
    agent.includes('wow64')
  ) {
    return true
  }
  return false
})()

/**
 * 根据当前 url 解析参数
 * @example
 * const queryParams = getPageQuery()
 */
export const getPageQuery = (): { [key: string]: string } => {
  if (!location.href.includes('?')) return {}
  const hrefSegment = window.location.href.split('?')
  if (hrefSegment.length === 1) return {}
  return parse(hrefSegment[hrefSegment.length - 1]) as any
}

/**
 * @param path 链接
 * @param query 需要拼接的参数对象
 * @returns 携带参数的链接
 * @example
 * const path = getQueryPath('www.baidu.com', { name: 'shisongyan', age: 18 })
 * // www.baidu.com?name=shisongyan&age=18
 */
export const getQueryPath = (path: string, query: {}) => {
  const search = stringify(query)
  if (search.length) {
    return `${path}?${search}`
  }
  return path
}
