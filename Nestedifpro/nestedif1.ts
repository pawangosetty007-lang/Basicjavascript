
let a:number=66
let b:number=99
let c:number=77

if(a<c)
{
    console.log("a is less than c")
    if(b>c)
    {
        console.log("c is less than b")
        if(a<b)
        {
            console.log("b is more than a")
        }
    }
}