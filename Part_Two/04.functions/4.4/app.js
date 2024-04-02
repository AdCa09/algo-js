(() => {
  let inputAr = [
    "Angel",
    "Caroline",
    "Julie",
    "Justine ",
    "Jordan",
    "Maryam",
    "Youris",
    "Adrien.B",
    "Arnaud",
    "Lyne",
    "Sonia",
    "Mohamed",
    "Denis",
    "Dorian",
    "Stacy",
    "Dylan",
    "Dzheylyan",
    "Giovanni",
    "Iliess",
    "Isabelle",
    "Jessica",
    "Justine",
    "Louis",
    "Ludovic",
    "Zahra",
    "Denis",
    "Manu CJ",
    "Adrien",
  ];

  let n = 1;
  let apprenantsAléatoires = pickLearner(inputAr, n);

  function pickLearner(inputAr, n) {
    if (n > 0 && n < inputAr.length) {
      console.log("error");
      return [];
    }
  }

  for (let i = 0; i < n; i++) {
    let aléatoire = Math.random() * inputAr.length;
  }
  console.log(pickLearner(5));
})();
