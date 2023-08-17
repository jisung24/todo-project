import React from 'react'

export default function TodoButton({ id, onClick, btnText }) {
  return (
    <button
      onClick={() => {
        onClick(id)
      }}
    >
      {btnText}
    </button>
  )
}
