// side effect

// impure func for array 影響原參數值
const impure = function (arr) {
  return arr.splice(0, 3)
}

// pure 不影響原參數值
const pure = function (arr) {
  return arr.slice(0, 3)
}

const array = [1, 2, 3, 4, 5]

// console.log(pure(array))
// console.log(array)

// slice(begin-index,end-index)

// push
const purePush = (aArray, newEntry) => [...aArray, newEntry]
console.log('purePush-result', purePush(array, 6))
console.log('root', array)

// pop LIFO
const purePop = aArray => aArray.slice(0, -1)
console.log('purePop-result', purePop(array))
console.log('root', array)

// shift FIFO
const pureShift = aArray => aArray.slice(1)
console.log('pureShift-result', pureShift(array))
console.log('root', array)

// unShift insert into first
const pureUnShift = (aArray, newEntry) => [newEntry, ...aArray]
console.log('unShift-resut', pureUnShift(array, 6))
console.log('root', array)

// splice
const pureSplice = (aArray, start, delectCount, ...items) =>
  [...aArray.slice(0, start), ...items, ...aArray.slice(start + delectCount)]

console.log('splice-result', pureSplice(array, 1, 3, 9))
console.log('root', array)

// sort copy new array -> [...aArray] && desc -> a < b
const pureSort = (aArray, compareFunc) => [...aArray].sort(compareFunc)

console.log('pureSort-result', pureSort(array, (a, b) => a < b))
console.log('root', array)

// reverse copy new array -> [...aArray]
const pureReverse = aArray => [...aArray].reverse()

console.log('pureReverse-result', pureReverse(array))
console.log('root', array)

// delete
const pureDelete = (aArray, index) => aArray.slice(0, index).concat(aArray.slice(index + 1))

console.log('pureDelete-result', pureDelete(array, 1))
console.log('root', array)
