// destructuring
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 }

console.log(a)
console.log(b)
console.log(rest)

// ***********************************************************
const { prop: x, prop2: [, y] } = { prop: 5, prop2: [10, 100] }

console.log(x, y)

// ***********************************************************

const {
  prop: x1,
  prop2: {
    prop2: {
      nested: [, , x2],
    },
  },
} = { prop: 'Hello', prop2: { prop2: { nested: ['a', 'b', 'c'] } } }

console.log(x1)
console.log(x2)

// ***********************************************************

// const [x3] = false
// const [y3] = 10
const [z3] = 'hello'

console.log(z3) // h

// ***********************************************************

const [missing = true] = []
console.log(missing)

// ***********************************************************

const { message: msg = 'something went wrong' } = {}
console.log(msg)

// ***********************************************************

const { num = 3 } = {}
console.log(num)

// ***********************************************************

const { a5 = 'hello' } = 'hello'
const [b5 = 'hello'] = 'hello'

console.log(a5, b5)

// ***********************************************************

function func({ a6 = 3, b6 = 5 } = {}) {
  console.log(a6 + b6)
  return a6 + b6
}

func({ a6: 1, b6: 2 }) // 3
func({ a6: 1 }) // 6
func({ b6: 2 }) // 5
func({}) // 8
func() // 8

// ***********************************************************

function func2({ fa = 1, fb = 2 } = { fa: 10, fb: 20 }) {
  console.log(fa + fb)
}

func2({ fa: 3, fb: 5 }) // 8
func2({ fa: 3 }) // 5
func2({ fb: 5 }) // 6
func2({ fa: null }) // fa => 0 -> 2
func2({ fb: null }) // fb => 0 -> 1
func2({ fa: undefined }) // fa = fb => default -> 3
func2({ fb: undefined }) // fb = fa => default -> 3
func2({}) // 3
func2() // 30