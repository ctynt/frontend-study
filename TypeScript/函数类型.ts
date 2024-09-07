// 普通类型
function fun1(): void {
    console.log('这是一个普通函数')
}

// 箭头函数 
const fun2 = (): void => {
    console.log('这是一个箭头函数')
}

const fun3 = (name: string): string => {
    return `姓名：${name}`
}

const fun4 = (name: string, tag?:string): string => {
    return tag || '' + name
}

fun4('你好')
fun4('你好',"世界")

var fun5: (name: string, tag?: string) => string

fun5 = (arg1: string, arg2?: string) => arg1 + arg2 || ''

type myFunType = (name: string, tag?: string) => string

var fun6: myFunType = (name, tag) => {
    return name + tag
}