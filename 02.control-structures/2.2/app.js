(() => {
    
   let min = prompt("Entrez un chiffre minimum");
   let max = prompt ("Entrez un chiffre maximum");
   let current = prompt("Entrez un chiffre entre min et max");

   if(current > min && current < max){
    console.log(current);
   }else if(min > max){
    console.log("Error min plus grand que max");
   }else{
    console.log();
   }



})();