
let mycitynames : Map<number,string>=new Map()

mycitynames.set(1111,"krishna")
mycitynames.set(2222,"bus")
mycitynames.set(9999,"false")
mycitynames.set(66666,"brother")
mycitynames.set(4444,"day")
mycitynames.set(3333,"mother")
mycitynames.set(1212,"no")
mycitynames.set(2121,"ink")
mycitynames.set(32322,"friend")
mycitynames.set(454545,"friend")

for(let k of mycitynames.keys())
{
    console.log(k)
}

for(let v of mycitynames.values())
{
    console.log(v)
}