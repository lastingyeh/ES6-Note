// import sample1

// import { aString, aObject, aFunc, UseClass } from './lib'

// export default function module() {
//   console.log(aString)
//   console.log(aObject)
//   console.log(aFunc)
//   console.log(UseClass)
// }

// import sample2
import * as moduleUse from './lib'

export default function module() {
  const newClass = new moduleUse.UseClass('Mary', 16)

  console.log(newClass)
  console.log(moduleUse.aFunc)
  console.log(moduleUse.aObject)
  console.log(moduleUse.aString)
}

