import { useState } from 'react'

export default function useInput({ initialInputValue }) {
  const [inputValue, setInputValue] = useState(initialInputValue)

  const handleChange = (e) => {
    setInputValue((prev) => e.target.value)
  }

  const handleSubmit = (e) => {
    console.log()
    e.preventDefault()
  }
  return [inputValue, handleChange, handleSubmit]
}
// html이 없으니까 html에 대한 useRef는 밖에서 해주는게 맞음
