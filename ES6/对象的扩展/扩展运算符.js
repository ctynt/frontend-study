// let obj = { a: 1, b: 2, c:3 , d: 4, e: 5 }
// let { a, b, ...other } = obj
// console.log(a)
// console.log(b)
// console.log(other)

let obj = { a:1, b:2 }
// 相当于对象的赋值，浅拷贝
// let {...copy } = obj
// console.log(copy)
// 等同于

let copy = { ...obj }
console.log(copy)