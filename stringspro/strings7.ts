

let myinfo : string ="mybike name is :herohonda,mybike engine no :122@345@6789"
let removealpha :string =myinfo.replace(/[A-Za-z]/g,"")

console.log(removealpha)