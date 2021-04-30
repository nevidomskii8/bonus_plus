// const array = [
//   12,
//   3,
//   4,
//   5,
//   7,
//   8,
//   19,
//   9,
//   10,
//   11,
//   27,
//   2,
//   13,
//   24,
//   14,
//   20,
//   23,
//   15,
//   16,
//   17,
//   6,
//   26,
//   18,
//   1000,
//   22,
//   25,
//   1,
//   28,
//   29,
// ]

// function pow(a, b) {}

// const sulution = (array, targ) => {
//   const filtered = array.filter((el) => el <= targ)
//   const sort = filtered.sort((a, b) => a - b)
//   const response = []
//   let current = 0
//   sort.forEach((el) => {
//     let check = sort.find((item) => item === targ - el + current)
//     if (targ % el === 0) {
//       response.push({ 1: new Array(targ / el).fill(el) })
//     } else if (check) {
//       response.push({ 2: [el, check] })
//       const sqrt = (Math.sqrt(check) + '').length
//       if (sqrt === 1 && check !== 1) {
//         response.push({ 3: [el, ...new Array(check).fill(sqrt)] })
//       }
//     }
//   })
//   return response
// }

// console.log(sulution(array, 9))

function f(n, k) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (n[i] + n[j] === k) {
        return [n[i], n[j]]
      }
    }
  }
  return false
}
const n = [10, 3, 7]
const k = 17

console.log(f(n, k))
