
//hide an element
const hide = (Id) => {
   document.getElementById(Id).style.display = "none";
}
//show an element
const show = (Id) => {
   document.getElementById(Id).style.display = "block";
}
  
 function isPangram(){

    const checkTxt = document.getElementById("search").value;

     let allLowerCase = checkTxt.toLowerCase(); // converts input to lowercase letters
     
     for(let abc of 'abcdefghijklmnopqrstuvwxyz'){// for...of statement 
      
        //if it does NOT include whole alphabet
     if(!allLowerCase.includes(abc)){
         
      show("invalid");
      
      return setTimeout( function (){
            hide("invalid");
         }, 3000);
        }

     }
      // if whole alphabet is used
     show("valid");
     
     return setTimeout( function (){
      hide("valid");
   }, 3000);
 }


