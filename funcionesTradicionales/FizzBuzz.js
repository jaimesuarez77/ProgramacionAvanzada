let i = 0;
while (i<200){
    if (i%3 == 0 && i%5 == 0){
        console.log("fizzBuzz");
    }
    else if (i%3 == 0){
        console.log("fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
    i+=1;
  

}
   


