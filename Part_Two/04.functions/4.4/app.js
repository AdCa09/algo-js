(() => {
  let apprenantsAléatoires = [];
  // Je déclare une variable qui me serviras pour stocker les résultats
  let inputAr = [
    "Angel", "Caroline", "Julie", "Justine ", "Jordan", "Maryam", "Youris", "Adrien.B", "Arnaud", "Lyne", "Sonia", "Mohamed", "Denis", "Dorian", "Stacy", "Dylan", "Dzheylyan", "Giovanni", "Iliess", "Isabelle", "Jessica", "Justine", "Louis", "Ludovic", "Zahra", "Denis", "Manu CJ", "Adrien"];
  // Je récupere la variable avec les noms de mes camarades de classe de l'exercice que j'ai fais plûtot.

  let n = 10;
  // Je déclare une variable en indiquant le nombre de noms  (string) que j'aimerais générer.

  function pickLearner(inputAr, n) {
    // création d'une fonction avec comme paramétres mes deux variables déclarée ci dessus.

    if (n < 0 || n > inputAr.length) {
      console.log("error");

      //création d'une if instruction, si "n" est plus petit que 0 ou si "n" est plus grand que la longueur des données contenue dans mon inputAR, alors cela affichera dans la console "error".
    }
    // ci dessous, création d'une boucle for qui incrémentera i si i est plus petit que n.
    for (let i = 0; i < n; i++) {
      let random = Math.floor(Math.random() * inputAr.length);
      //je déclare une variable random qui contiens une méthode Math.floor qui renvoie le plus grand entier, une méthode Math.random  qui génere soit 0 ou 1 que l'on multiplie * la longueur du tableau inputAr.
      apprenantsAléatoires.push(inputAr[random]);
      //ici, j'appelle ma variabl en ajoutant la méthode .push() qui ajoute en fin de tableaux, j'appelle inputAr avec le tableau [random].

      inputAr.splice(random, 1);
      //on utilise la méthode .splice, ont supprimera dans le tableau inputAr à partir de random en supprimant ici 1 éléments.

    };
    console.log(apprenantsAléatoires);
    //ont console log la ou nos valeurs ont été dépplacée.
  } pickLearner(inputAr, n);
  //enfin ont appelle notre fonction pour que celle ci fonctionne .


})();
