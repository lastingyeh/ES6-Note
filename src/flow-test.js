// @flow

// @param number || boolean
// @return number || string

// *Deploy Prod
// babel src -d dist
function test(x: number | boolean): number | string {
  if (typeof x === 'number') {
    return x + 10
  }
  return 'x is boolean'
}

test(1)
test(true)
test(null)

// ex2. null || undefined type
let bar: ?string = null

// ex3. enum
type Suit =
  | 'Diamonds'
  | 'Clubs'
  | 'Hearts'
  | 'Spades'

type Rank =
  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 'Jack'
  | 'Queen'
  | 'King'
  | 'Ace'

type Card = {
  suit: Suit,
  rand: Rank,
}

// ex3. alias
type T = Array<string>
const x: T = []
x["hi"] = 2

// ex4. mixed & any
function mixedUse(mix: mixed): string {
  if (typeof mix === 'number' || typeof mix === 'string') {
    return mix + '10'
  }
  throw new Error('Invalid x type')
}

mixedUse('Hello')
mixedUse(1)

// ex5 object type
const object: { name: string, id: number } = { name: 'hello', id: 1 }

object.name = 111
object.id = '012'

// ex6 function
let anyFun: Function = () => { }

function anyFun2(fun2: number): number {
  return fun2 + 10
}

// ex7 Array<T>
type Data = {
  title?: string,
  content:?string,
}

type DataArray = {
  item: Array<Data>
}