(() => {
  function rand10(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //je réutilise la fonction de mon exercice précédent.

  function multiRand(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(rand10(1, 10));
    }
    return arr;
  }
  //je déclare la fonction multiRand avec comme paramétre (n), je déclare une variable arr ou seront stocker et push mes valeurs générée aléatoirement, j'utilise une for boucle qui déclare une variable i = à 0, si i est plus petit que n (mon paramétre de multiRand), celui ci  sera incrémenté par le i++(i= i+1).
  // l'instruction sera de push donc d'ajouter dans ma variable arr un nombre situé entre 1 et 10 grâce à ma fonction rand10 crée dans l'exercice précédent.
  //une fois que mon itération est terminée je sors de la boucle est donc return les valeurs à ma variable arr.
  console.log(multiRand(6));
  // enfin j'appelle la fonction multiRand qui générera un tableau de 6 nombres aléatoire compris en 1 et 10.
})();
