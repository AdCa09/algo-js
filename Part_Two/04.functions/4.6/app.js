(() => {
  let num = 6;
  //je déclare une variable ou l'ont indiquera le chiffre pour obtenir sa factorielle
  let result = factorial(num);
  //je déclare une nouvelle variable ou se trouve la fonction factorial avec ma variable num comme paramétre
  function factorial(a) {
    if (a === 0 || a === 1) {
      return 1;
    } else {
      return a * factorial(a - 1);
    }
    //je déclare une fonction avec a comme paramétre, qui vérifie si a serait = a 0 et que a =1 si oui il retournera 1.
    //autrement il retourne la valeur que prendra le a * le paramétre de la fonction factorial -1 .
  }
  console.log(result);
  // enfin ont console log le result pour obtenir le résultat.
})();
