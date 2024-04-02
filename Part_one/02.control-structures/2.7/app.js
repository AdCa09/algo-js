(() => {

  let n = parseInt(prompt("Entrer un chiffre"));

  let sum = 0;

  for(let i = 0; i < n; i++){
    let num  = parseInt(prompt("Entrer un chiffre"));
    sum += num;
  }
 console.log(sum);

})();