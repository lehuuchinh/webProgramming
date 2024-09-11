var x = 20
var y = () => {
    var a = x + 10
    console.log(a)
}
y()
console.log(x)

let a = 20
if(x === 20) {
    let a = 30
    console.log(a)
}
console.log(a)

const d = 10
const c = () => {
    d = 100
    console.log(d)
}
c()