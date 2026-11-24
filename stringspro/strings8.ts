

let myinfo : string ="mybike name is :herohonda,mybike engine no :122@345@6789"
let removenumbers :string =myinfo.replace(/[0-9]/g,"")

console.log(removenumbers)