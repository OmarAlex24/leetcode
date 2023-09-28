function isValid(s) {
  let stack = []

  if (s.length <= 1) return false

  for (let element of s) {
    if (element === '(') {
      stack.push(')')
    } else if (element === '{') {
      stack.push('}')
    } else if (element === '[') {
      stack.push(']')
    } else if (stack.pop() !== element) {
      return false
    }
  }

  return !stack.length
}

console.log(isValid('(){[]}'))
