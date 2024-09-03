let arrs = [
    {
        name: 'aaa',
        color: '红色'
    },
    {
        name: 'bbb',
        color: '绿色'
    },
    {
        name: 'ccc',
        color: '红色'
    },
    {
        name: 'ddd',
        color: '绿色'
    },
]

let obj = arrs.find((obj) => obj.color === '红色')
console.log(obj)

let obj1 = arrs.findLast((obj1) => obj1.color === '红色')
console.log(obj1)


let obj2 = arrs.find((obj2) => obj2.color === '白色')
console.log(obj2)
