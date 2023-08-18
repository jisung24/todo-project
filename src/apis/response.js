const API_END_POINT = 'https://jsonplaceholder.typicode.com'
export const response = async (api, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${api}`)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (e) {
    throw new Error('catch error')
  }
}
