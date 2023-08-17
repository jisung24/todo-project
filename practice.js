const obj = [
  { todos: 'aaa' },
  { todos: 'aaa2' },
  { todos: 'aaa3' },
  { todos: 'aaa4' },
  { todos: 'aaa5' },
  { todos: 'aaa6' },
]

const findOne = obj.find((e) => e.todos === 'aaadwdwd')
console.log(findOne)
