let blocCouleur = document.getElementById("couleur");
let score = document.getElementById("score");
let reponses = [...document.getElementsByClassName("reponse")];
let compteurScore=0;
let coueleurADeviner;

// Liste des couleurs disponibles
const tabCouleurs = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'black', 'white', 'beige', 'gray', 'brown', 'pink'];


// Fonction pour générer une couleur aléatoire
function getRandomColor() {
 const randomIndex = Math.floor(Math.random() * tabCouleurs.length);
return tabCouleurs[randomIndex];
}


// Utilisation de la fonction pour générer une couleur aléatoire


const initialiser = () => {
    score.textContent = compteurScore ;
    let reponseCorrecte = Math.floor(Math.random() * 4);   //Entre 0 et 3
    reponses.forEach((rep) => (rep.textContent = getRandomColor()));
    coueleurADeviner = reponses[reponseCorrecte].textContent;

    blocCouleur.style.backgroundColor = coueleurADeviner
};

const verifierReponse = (e) => {
    let valeurCliquer = e.target.textContent;
    if (valeurCliquer!= coueleurADeviner) {
        window.alert('Mauvaise Réponse! La réponse était ${couleurAdeviner}' );
    
        return initialiser();
    }
    compteurScore++;
    initialiser();
};

reponses.forEach(rep => {
    rep.addEventListener("click", verifierReponse);
});

initialiser();