

let myinfo : string ="mybike name is :herohonda,mybike engine no :122@345@6789"
let removespecial :string =myinfo.replace(/[A-Za-z0-9]/g,"")
let myspecial :string =myinfo.replace(/[A-Za-z0-9]/g,"")
console.log(removespecial)
console.log(myspecial)