(() => {
  function calcSurface(a, b) {
    return a * b;
  }
  //je déclarer une function avec comme paramétre a et b, dans cette fonction je de demande à ce que celle ci me return a*b.

  let l = prompt("Entrez la longueur d'un rectangle");
  let L = prompt("Entrez la largeur d'un rectangle");
  // je déclare dexu variables l et L, dans celle ci j'y ai mis un prompt() pour demander à l'utilisateur d'entrer la longueur et la largeur d'un rectangle.
  console.log(calcSurface(l, L));
  // enfin je console log ma fonction avec dedans les informations demandée à l'utilisateur pour pouvoir obtenir ma réponse finale.
})();
