// default-value
// demo1
function foo1(a = 0, b = a + 100) {
  console.log(a + b)
}

foo1()
foo1(1)
foo1(1, 2)

// demo2
function go(x) {
  return x + 10
}

function foo2(a = 1, b = go(a)) {
  console.log(a + b)
}

foo2()
foo2(1)
foo2(1, 2)

// demo3
function foo3(x = []) {
  x.push(1)
  console.log(x)
}

foo3()
foo3()
foo3()

// demo4
function foo4(x = this, y = this.value) {
  console.log(x)
  console.log(y)
}

foo4.call({ value: 'Hello' })

// demo5
function foo5({ a, b } = { a: 1, b: 2 }) {
  console.log(a, b)
}

foo5()
foo5({ a: 5 }) // a = 5, b = undefined
foo5({ a: 10, b: 22 })

// demo6
function foo6({ a = 1, b = 2 } = {}) {
  console.log(a, b)
}
foo6()
foo6({ a: 5 })
foo6({ a: 10, b: 22 })
