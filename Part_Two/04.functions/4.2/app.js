(() => {
  function rand10(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // je déclare une function nomée rand10 avec comme paramétre min et max, dans cette function j'ajoute un return, j'utilise avant tout Math.floor qui permet d'arrondir n'importe quelle nombre à un entier le plus proche, puis j'utilise Math.random qui génere un nombre entre 0 et 1 que je multiplie par la plage utiliser par max et min, +min sert à additionner un nombre de plus pour que nous restions dans la plage demandée.

  console.log(rand10(1, 10));

  //finalement je console log ma fonction avec comme paramétre des nombres aléatoires que j'aurais choisis
})();
