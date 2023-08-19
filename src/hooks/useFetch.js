import { useState } from 'react'

const API_END_POINT = 'https://jsonplaceholder.typicode.com/users'
export default function useFetch() {
  const [todos, setTodos] = useState(null)
  const request = async () => {
    try {
      // get요청밖에는 아직 없어서..!
      const res = await fetch(API_END_POINT)
      if (res.ok) {
        const data = await res.json()
        setTodos((prev) => data)
      }
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return [todos, request]
}
