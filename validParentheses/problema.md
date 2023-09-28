# Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'

## Analisis / Pseudocodigo

### Idea rapida

Leyendo el problema especifica que deben estar en el mismo nivel, entonces no se evaluaria expresiones como "([])" (esto tendria que devolver true) _PSDT:Si se tiene que evaluar esas expresiones_

_Primer intento:_ Mediantes ifs evaluar si hay un parentesis de apertura debe de haber uno de cierre de segunda posicion

### _Codigo:_

```
et valid = true
  let i = 0

  while (i < s.length && valid) {
    if (s[i] === '(' && s[i + 1] !== ')') valid = false
    else if (s[i] === '{' && s[i + 1] !== '}') valid = false
    else if (s[i] === '[' && s[i + 1] !== ']') valid = false
    else if (s[i] === ')' || s[i] === ']' || s[i] === '}') valid = false

    i += 2
  }

  return valid
```

_Segundo intento:_ Utilizar un Map(). \nEn lugar de ocupar un map, ocupe un array donde guardaba el signo contrario al parentesis que recibia si era un parentesis de apertura.
Ej. s[i] = '(' entonces arr[i] = ')'

### _Codigo:_

```
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
```
