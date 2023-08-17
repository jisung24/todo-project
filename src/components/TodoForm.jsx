import React, { useEffect, useRef } from 'react'

// 입력받고, 제출하는작업!
export default function TodoForm({ inputValue, onChange, onSubmit }) {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        ref={inputRef}
      />
      <button>제출!</button>
    </form>
  )
}
