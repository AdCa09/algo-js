(() => {
  function askTvSerie() {
    let tvSerie = {
      Name: prompt("Quelle est le nom de votre série préférée?"),
      ProductionYear: parseInt(
        prompt("Quelle est l'année de production de cette série?")
      ),
      NamesOfTheCastMembers: prompt("Quelle est votre ou vos acteurs favoris?"),
    };
    return tvSerie;
  }

  function randomizeCast(tvSerie) {
    let arrAléatoire = [];
    for (let i = 0; i < tvSerie.NamesOfTheCastMembers.length; i++) {
      let random = Math.floor(
        Math.random() * tvSerie.NamesOfTheCastMembers.length
      );
    }
    return tvSerie;
  }

  console.log(randomizeCast(askTvSerie(askTvSerie.tvSerie)));
})();
