(() => {
    let choose = parseInt(prompt("Séléctionner un chiffre entre 1 et 7 "));
    switch(choose){
        case 1:
            alert("Lundi");
            break;
        case 2:
            alert("Mardi");
            break;
        case 3:
            alert("Mercredi");
            break;
        case 4:
            alert("Jeudi");
            break;  
        case 5:
            alert("Vendredi");
            break;
        case 6:
            alert("Samedi");
        case 7: 
            alert("Dimanche"); 
            break;
    }
    
})();