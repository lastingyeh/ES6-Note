class Player {
  constructor(fullName, age, gender, hairColor) {
    this.fullName = fullName
    this.age = age
    this.gender = gender
    this.hairColor = hairColor
  }

  toString() {
    return `Name: ${this.fullName}, Age: ${this.age}`
  }
}

const player1 = new Player('p1', 16, 'girl', 'pink')
console.log(player1.toString())
console.log(`fullName: ${player1.fullName}`)
// ***********************************************************
class Option {
  constructor(key, value, autoLoad = false) {
    if (typeof key !== 'undefined') {
      this[key] = value
    }
    this.autoLoad = autoLoad
  }
}

const op1 = new Option('color', 'red')
const op2 = new Option('color', 'blue', true)

console.log(op1, op2)
// ***********************************************************
// private setting,but it's not real private set
class Student {
  constructor(id, firstName, lastName) {
    this._id = id
    this._firstName = firstName
    this._lastName = lastName
  }
  toString() {
    return `id is ${this._id} his/her name is ${this._firstName}, ${this._lastName}`
  }
}

const student = new Student(1, 'Hello', 'Mary')
console.log(student.toString())
// ***********************************************************
// use get & set
class Option2 {
  constructor(key, value, autoLoad = false) {
    if (typeof key !== 'undefined') {
      this[`_${key}`] = value
      this.autoLoad = autoLoad
    }
  }

  get color() {
    if (this._color !== undefined) {
      return this._color
    }
    return 'no color prop'
  }

  set color(value) {
    this._color = value
  }
}

const opt1 = new Option2('yoman', 'red')
opt1.color = 'yellow'
const opt2 = new Option2('action', 'run')
opt2.color = 'blue'

console.log(opt1, opt2)

// ***********************************************************
// static
class StaticDemo {
  constructor(id, firstName, lastName) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName

    StaticDemo._countStudent()
  }
  static _countStudent() {
    console.log(this._numOfStudents)
    if (this._numOfStudents === 'undefined') {
      this._numOfStudents = 1
      console.log('undefined')
    } else {
      this._numOfStudents++
      console.log('++')
    }
    console.log('other')
  }

  static get numOfStudents() {
    return this._numOfStudents
  }
}

const aStudent = new Student(11, 'Eddy', 'Chang')
console.log(StaticDemo.numOfStudents, aStudent)

const bStudent = new Student(22, 'Ed', 'Lu')
console.log(StaticDemo.numOfStudents, bStudent)

// ***********************************************************
// extends
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return `x:${this.x},$y:${this.y}`
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color
  }
  toString() {
    return `${super.toString()} in ${this.color}`
  }
}

const pv = new ColorPoint(2, 2, 'yellow')
console.log(pv)