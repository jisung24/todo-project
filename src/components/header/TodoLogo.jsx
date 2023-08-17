import React from 'react'

export default React.memo(function TodoLogo({ logoText }) {
  return (
    <h2>
      <span>{logoText}</span>
    </h2>
  )
})
