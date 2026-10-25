// 1. PREPARATION DU PROJET creer un dossier contenant trois fichier
// 2. Declaration des donnees de la commande
const client = "Awa";
const code_du_plat = 1;
const quantiteTexte = "3";
const quantite = Number(quantiteTexte);
const montant_versé = 5000;
console.log(quantite);
console.log(`Client: ${client}, code du plat : ${code_du_plat}, quantite: ${quantite}, montant versé: ${montant_versé}`);

// Données de la cantine
const Attiéké_poisson = 1500;
const Riz_poulet = 2000;
const Alloco_oeuf = 1000;

// Prix unitaire en fonction du code du plat
let nomPlat ="0";
let prixUnitaire = 0;

if (code_du_plat === 1) {
    prixUnitaire = Attiéké_poisson;
    nomPlat = "Attiéké-poisson";
    console.log(`${nomPlat}: ${prixUnitaire}`);

} else if (code_du_plat === 2) {
    nomPlat = "Riz-poulet";
    prixUnitaire = Riz_poulet;
    console.log(`${nomPlat}: ${prixUnitaire}`);

} else if (code_du_plat === 3) {
    nomPlat = "Alloco-oeuf";
    prixUnitaire = Alloco_oeuf;
    console.log(`${nomPlat}: ${prixUnitaire}`);

} else {
    nomPlat = "Plat inconnu";
    prixUnitaire = 0;
}

// Fonction de calcul
function calculerTotal(prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}

// Resultat rangé dans une variable
const total = calculerTotal(prixUnitaire, quantite);
