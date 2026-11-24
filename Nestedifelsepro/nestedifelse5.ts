
let mymarks :number=96

if(mymarks>=35 && mymarks<50)
{
    console.log("The student just passed")
}
else if(mymarks>=50 || mymarks<60)
       {
          console.log("The student got second class")
       }
    else if(mymarks>=60 || mymarks<90)
          {
            console.log("The student got first class")
          }
        else if(mymarks>=90)
              {
                 console.log("The student got distinction")
              }
            else 
                  {
                     console.log("The student got failed")
                  }