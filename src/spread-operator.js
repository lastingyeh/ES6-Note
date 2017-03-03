const params = ['hello', true, 7]
const other = [1, 2, ...params]

console.log(other)
// ***********************************************************

const arr = [1, 2, 3]
const arr2 = [...arr]

arr2.push(4)

console.log(arr2)
// ***********************************************************

function sum(a, b, c) {
  return a + b + c
}
const numbers = [1, 2, 3]

console.log(sum(...numbers))
// ***********************************************************
const aString = 'foo'
const chars = [...aString]

console.log(chars)
// ***********************************************************
function xFunc() {
  console.log(arguments)
  console.log(Array.isArray(arguments))

  const newArr = [...arguments]
  console.log(newArr)
  console.log(Array.isArray(newArr))
}

xFunc(1)
// ***********************************************************
function restFunc(...nums) {
  let result = 0

  nums.forEach((num) => {
    result += num
  })

  console.log(result)

  return result
}

restFunc(1)
restFunc(1, 2, 3, 4, 5)
// ***********************************************************
function rest2Func(r1, ...r2) {
  console.log(`r1=${r1},r2=${r2}`)
}
rest2Func(1, 2, 3)
rest2Func()
// ***********************************************************
function desFunc(d1, d2, ...d3) {
  console.log(d1, d2, d3)
  return d1 + d2 + d3
}

desFunc(1)
desFunc(1, 2, 3)
desFunc(1, 2, 3, 4)
// ***********************************************************
const { x, y, ...z } = { x: 1, y: 2, w1: 3, w2: 4 }
console.log(x)
console.log(y)
console.log(z)

const n = { x, y, ...z }
console.log(n)
