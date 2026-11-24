
function playername1(name:string):void
{
    console.log(name)
}
playername1("Dhoni")

function playerplay1(game:(name:string)=>void):void
{
    game("cricket")
}
playerplay1(playername1)


function playername2(name:string):void
{
    console.log(name)
}
playername2("pavan")

function playerplay2(game:(name:string)=>void):void
{
    game("volleyball")
}
playerplay2(playername2)


function playername3(name:string):void
{
    console.log(name)
}
playername3("krishna")

function playerplay3(game:(name:string)=>void):void
{
    game("football")
}
playerplay3(playername3)