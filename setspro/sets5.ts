
let mycitynames:Set<string>=new Set()

mycitynames.add("guntur")
mycitynames.add("vijaywade")
mycitynames.add("chennai")
mycitynames.add("benglore")
mycitynames.add("goa")
mycitynames.add("mumbai")
mycitynames.add("krishna")
 
console.log(mycitynames)
console.log(mycitynames.has("krishna"))
mycitynames.delete("krishna")
console.log(mycitynames.has("krishna"))
console.log(mycitynames)

console.log("The number of elements in the set is :" +mycitynames.size)