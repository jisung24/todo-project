import React, { useEffect, useRef } from 'react'

// 입력받고, 제출하는작업!
export default function TodoForm({ inputValue, onChange, onSubmit }) {
  const inputRef = useRef(null)

  // 렌더링이 된 시점(form태그가 실제로 브라우저에 그려진 후)에 실행이 된다.
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
