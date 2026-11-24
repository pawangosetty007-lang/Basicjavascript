
interface king
{
    kname : string,
    kstate : string,
    kage : number
}

interface queen
{
    qname : string,
    qstate: string,
    qage : number
}

let kingdata : king =
{
    kname : "krishna",
    kstate : "andhra pradesh",
    kage : 22
}

let queendata : queen =
{
    qname : "rani",
    qstate :"goa",
    qage : 23
}

let kingqueen ={...kingdata,...queendata}
console.log(kingqueen)