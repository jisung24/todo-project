import React from 'react'
// React.memo : 파라미터가 일반 변수면 값만 안 달라지면 괜찮음
// 하지만, 함수나, 객체일경우...! => 부모에서 useCallback을 사용하지 않아, 함수가 재선언이 되면,
// 다른 메모리를 가리켜, 파라미터가 바뀐것으로 취급, => 재랜더링 됨.

// 함수 전달할 때 조심하자 => 굳이 계속 랜더링해야할게 아니라면, useCallback
export default React.memo(function TodoLogo({ logoText }) {
  return (
    <h2>
      <span>{logoText}</span>
    </h2>
  )
})
