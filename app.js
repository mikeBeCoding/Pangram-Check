 

  
 function isPangram(){

    const checkTxt = document.getElementById('search').value;

     let allLowerCase = checkTxt.toLowerCase(); // converts input to lowercase letters
     
     for(let abc of 'abcdefghijklmnopqrstuvwxyz'){// for...of statement 
      
        //if it does NOT include whole alphabet
     if(!allLowerCase.includes(abc)){
         
         return false, alert("Sorry, This is not a valid Pangram");
        }
     }
     return true, alert("Good Job, You've created a valid Pangram!"); // if whole alphabet is used
 }

