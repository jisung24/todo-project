const API_END_POINT = 'https://jsonplaceholder.typicode.com'
export const response = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`)
    if (res.ok) {
      const data = await res.json()
      return data
    } else {
      throw new Error(`Could not fetch ${API_END_POINT}`)
    }
  } catch (e) {
    throw new Error('catch error')
  }
}
