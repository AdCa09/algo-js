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
  let details = askTvSerie();
  let json = JSON.stringify(details, null, 2);
  alert("Détails de la série:\n\n" + json);
})();
