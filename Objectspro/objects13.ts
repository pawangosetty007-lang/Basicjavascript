


interface myinfo
{
    myid : number,
    myname : string,
    mysalary :number,
    mydesignation :string,
    isActive : boolean,
    myaddress :
             {
                mystreet : string,
                myarea : string,
                mycity : string,
                mystate : string,
                mypin : number
             }    
}

let mydata : myinfo =
{
    myid :9391,
    myname : "krishna",
    mysalary : 70000,
    mydesignation : "software tester",
    isActive : true,
    myaddress :
             {
                mystreet : "Road no : 4",
                myarea : "Krishna Colony",
                mycity : "Guntur",
                mystate : " Andhra Pradesh",
                mypin : 919363


             }
}

for (let A in mydata)
{
    console.log(mydata[A])
}  
for (let A in mydata)
{
    console.log(A+ "value is : " +mydata[A])
}   