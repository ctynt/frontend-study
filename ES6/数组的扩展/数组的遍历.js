var arrs = [1,2,3,4,5]
arrs.forEach((e) => {
    console.log(e)
})

// 遍历的同时，将每个元素X2
let res = arrs.map((e) => {
    return e * 2
})

console.log(res)