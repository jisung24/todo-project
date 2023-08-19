import { useState } from 'react'

export default function useInput() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue((prev) => e.target.value)
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    console.log('제출 inputValue >> ', inputValue)
  }

  return [inputValue, handleInputChange, handleInputSubmit]
}
