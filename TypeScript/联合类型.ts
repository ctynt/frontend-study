var val1: string | number
var val2: object | null = null

var val3: string | number = 123
console.log(val3.toString())

// 错误：number 类型不存在 length 属性
// console.log(val3.length())

let val4: unknown = 'this is a string'
let strLength: number = (val4 as string).length