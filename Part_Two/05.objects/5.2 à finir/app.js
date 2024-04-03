(() => {
  function askTvSerie() {
    let object = {
      //je déclare une variable 'object' pour que toute ma data soit implémentée dedans.
      Name: prompt("Quelle est le nom de votre série préférée?"),
      ProductionYear: parseInt(
        prompt("Quelle est l'année de production de cette série?")
      ),
      NamesOfTheCastMembers: prompt("Quelle est votre ou vos acteurs favoris?"),
    };

    function randomizeCast(tvSerie) {
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
    function randomizeCast(tvSerie) {
      for (let i = 0; i < n; i++) {
        tvSerie.members[i] = tvSerie.members[Math.floor(Math.random() * n)]
      };

    } randomizeCast(askTvSerie(tvSerie))
  }
})();
