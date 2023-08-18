// useCallback
// 함수가 무차별적으로 재선언 되는 것 방지!
// 파라미터를 제외하고, 함수 내부에서 만약 외부의 변수를 참고한다면,
// 그 처음 받은 외부의 변수가 찍임
// 함수 2개 비교
// ========== << 1번함수 >> ==========
// const checkLength = useCallback((inputLength) => {
//   return inputLength >= MIN_LENGTH && inputLength <= MAX_LENGTH
// }, [])
// ========== << 2번함수 >> ==========
// ❗️잘못된 예제❗️
// const checkDuplicate = useCallback((findValue) => {
//   return todos.find((e) => e.content === findValue)
// }, [])
// 이거 역시 함수안에 todos라는 state가 있는데,
// 의존성배열을 []로 했다는건 todos가 절대 변하지않아
// 그래서 값이 추가된 6번째에 fff넣고 7번째에 fff넣으면 값이 추가가돼..
// 그래서 추가된 todos까지
// 👉 1. 모든 함수에 useCallback을 써주는게 좋은지(매번 호출돼야하는 함수 말고는..)
// 👉 2. 모든 계산값에 useMemo를 써줘야하는지
// 👉 3. React.memo는 그냥 모든 컴포에 걸어두면 안 되는지 => 알아서 걸러지는데
