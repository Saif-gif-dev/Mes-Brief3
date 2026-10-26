// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.


const produitCarte = document.querySelector("#liste-produits");

for(let i = 0 ; produits.length ; i++){

  const userProduit = produits[i];
  const carteAffiche = document.createElement("div");
  carteAffiche.classList.add("produit");


  const userNom = document.createElement("h3");
  userNom.textContent = userProduit.nom;
  userNom.classList.add("nom-produit");
  carteAffiche.appendChild(userNom);


  const userPrix = document.createElement("p");
  userPrix.textContent = userProduit.prix;
  userPrix.classList.add("prix-produit");
  userPrix.textContent = produits[i].prix + " MAD "

  carteAffiche.appendChild(userPrix);

  const nomPrix = document.createElement("div");
  nomPrix.classList.add("nom-produit,prix-produit");
  nomPrix.appendChild(userNom);
  nomPrix.appendChild(userPrix);
  carteAffiche.appendChild(nomPrix)



  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Retirer";
  deleteBtn.classList.add("supprimer");
  carteAffiche.appendChild(deleteBtn);

  produitCarte.appendChild(carteAffiche);
}

const ajouterBtn = document.getElementById("button");
let nomInput = document.getElementById(nomInput);
let prixInput = document.getElementById(prixInput);

ajouterBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const nom = nomInput.value;
    const prix = prixInput.value;

    if( nom == "" || prix == ""){
      alert("fill the fields please")
      return;
    }
    
  })