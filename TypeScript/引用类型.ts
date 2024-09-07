let arr1: (number | string) [] = [1,2,'3','4']
let arr2: any[] = [1,'2',true,null]

var date: object = new Date()
var fun: object = () => {}
var arr: object = ['object']

// 错误：不能将 number 类型分配给 obiect 类型
// var num:object = 2

// 错误：不能将 string 类型分配给 object 类型
// var str: object = 'hello world'