(() => {
  //Je déclare une function askTvSerie vide en paramétre.
  function askTvSerie() {
    let object = {
      //je déclare une variable 'object' pour que toute ma data soit implémentée dedans.
      Name: prompt("Quelle est le nom de votre série préférée?"),
      ProductionYear: parseInt(
        prompt("Quelle est l'année de production de cette série?")
      ),
      NamesOfTheCastMembers: prompt("Quelle est votre ou vos acteurs favoris?"),
    };
    //Je crées plusieurs clé avec comme valeurs des prompts pour intéragir avec l'utilisateur.
    return object;
    //je retourne l'object.
  }
  let details = askTvSerie();
  // je déclare une variable qui comprends la fonctionque nous avons crée.
  let json = JSON.stringify(details, null, 2);
  // je déclare une variable pour afficher ses inputs au format JSON avec 3 paramétre, l'object à convertir, null car il n'y a pas d'autre fonction de remplacement et 2 pour l'indentation
  alert("Détails de la série:\n\n" + json);
  //j'affiche à l'utilisateur ses inputs avec deux sauts de lignes puis le contenu de json
})();
