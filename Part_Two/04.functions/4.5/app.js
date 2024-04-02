(() => {
  // je décalre une fonction appellée calcDistance avec 4 paramétres
  function calcDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    // je déclare une variable pourt calculer la distance entre deux points ici x2 et x1
    let x = y2 - y1;
    // je déclare une variable pourt calculer la distance entre deux points ici y2 et y1
    return Math.sqrt(x * x + y * y);
    // je return la distance calculée  en utilisant la méthode Math.sqrt qui est utilisé pour renvoyé la racine carrée d'un nombre..
  }
  console.log(calcDistance(1, 1, 2, 2));
  //je console log ma fonction en indiquant les distances voulues.
})();
