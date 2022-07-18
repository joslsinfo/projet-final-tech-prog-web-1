//Taux de change pour la conversion des monnaies
const RATE_USD_EUR = 0.87325;
const RATE_EUR_USD = 1.14515;
const RATE_USD_CAD = 1.25124;
const RATE_CAD_USD = 0.79921;
const RATE_EUR_CAD = 1.43315;
const RATE_CAD_EUR = 0.69776;

//Type de monnaies
const EUR_LABEL = "Euro(s)";
const USD_LABEL = "Dollar(s) US";
const CAD_LABEL = "Dollar(s) CA";

//Taux de conversion pour les Longueurs
const RATE_CM_PC = 2.54;
const RATE_KM_ML = 0.62137;

//Type d'unité de longueurs
const PC_LABEL = "Pouce(s)";
const CM_LABEL = "Centimètre(s)";
const KM_LABEL = "Kilomètre(s)";
const ML_LABEL = "Miles";

//Taux de conversion pour les Poids
const RATE_KG_LBS = 2.2046;

//Type d'unité de poids
const LBS_LABEL = "Livre(s)";
const KG_LABEL = "Kilogramme(s)";

/*==== Création de la fonction pour l'exécution de la conversion de devise ====*/
function currentConverter() {
  //Récupération du montant et le stocke dans la variable amount
  var amount = document.getElementById("amount").value;
  //Récupération de la devise de départ et la stocke dans la variable from
  var from = document.getElementById("from").value;
  //Récupération de la devise pour le résultat et la stocke dans la variable to
  var to = document.getElementById("to").value;
  //Récupération de la division hidden-div et la cache.
  document.getElementById("hidden-div").style.display = "none";

  var error = false;
  var result = 0;
  var conversionMsg = "";

  if (!isNaN(amount) && amount != "" && amount > 0) {
    if (from === "dollarsCanadiens" && to === "euros") {
      result = result + amount * RATE_CAD_EUR;
      console.log("Le résultat est:" + result);

      conversionMsg = `Le résultat de la conversion de ${amount} ${CAD_LABEL} est:  ${result.toFixed(
        2
      )} ${EUR_LABEL}.`;
    } else if (from === "euros" && to === "dollars") {
      result = result + amount * RATE_EUR_USD;
      console.log("Le résultat est:" + result);
      conversionMsg = `Le résultat de la conversion de ${amount} ${EUR_LABEL} est:  ${result.toFixed(
        2
      )} ${USD_LABEL}.`;
    } else if (from === "dollars" && to === "dollarsCanadiens") {
      result = result + amount * RATE_USD_CAD;
      console.log("Le résultat est:" + result);
      conversionMsg = `Le résultat de la conversion de ${amount} ${USD_LABEL} est:  ${result.toFixed(
        2
      )} ${CAD_LABEL}.`;
    } else if (from === "dollarsCanadiens" && to === "dollars") {
      result = result + amount * RATE_CAD_USD;
      console.log("Le résultat est:" + result);
      conversionMsg = `Le résultat de la conversion de ${amount} ${CAD_LABEL} est:  ${result.toFixed(
        2
      )} ${USD_LABEL}.`;
    } else if (from === "euros" && to === "dollarsCanadiens") {
      result = result + amount * RATE_EUR_CAD;
      console.log("Le résultat est: " + result);
      conversionMsg = `Le résultat de la conversion de ${amount} ${EUR_LABEL} est:  ${result.toFixed(
        2
      )} ${CAD_LABEL}.`;
    } else if (from === "dollars" && to === "euros") {
      result = result + amount * RATE_USD_EUR;
      console.log("Le résultat est:" + result);
      conversionMsg = `Le résultat de la conversion de ${amount} ${USD_LABEL} est:  ${result.toFixed(
        2
      )} ${EUR_LABEL}.`;
    } else if (from === to) {
      // message d'erreur
      errorMsg = `Vous ne pouvez pas selectionner la même option de selection de devise.`;
      error = true;
    }
  } else {
    // message d'erreur
    var errorMsg = "Le champ montant n'est pas correctement saisi";
    console.log(errorMsg);
    error = true;
  }

  //Récupération de la division hidden-div et l'affiche.
  document.getElementById("hidden-div").style.display = "block";

  //Affichage des resultats
  if (!error) {
    console.log(conversionMsg);
    document.getElementById("resultMsg").innerHTML = conversionMsg;
    document.getElementById("errorCard").style.display = "none";
    document.getElementById("successCard").style.display = "block";
  } else {
    document.getElementById("errorMsg").innerHTML = errorMsg;
    document.getElementById("successCard").style.display = "none";
    document.getElementById("errorCard").style.display = "block";
  }
}

/*====Création de la fonction pour l'exécution de la conversion de longueurs====*/
function lengthConverter() {
  //Récupération de la longueur à convertir et la stocke dans la variable amount2
  var amount2 = document.getElementById("amount2").value;
  //Récupération de l'unité de la longueur de départ et la stocke dans la variable fromUnit
  var fromUnit = document.getElementById("fromUnit").value;
  //Récupération de l'unité de longueur du résultat de la conversion et la stocke dans la variable to2
  var to2 = document.getElementById("to2").value;
  //Récupération de la division hidden-div2 et la masquer.
  document.getElementById("hidden-div2").style.display = "none";

  var error2 = false;
  var result2 = 0;
  var conversionMsg2 = "";

  if (!isNaN(amount2) && amount2 != "" && amount2 > 0) {
    if (fromUnit === "pouces" && to2 === "centimètres") {
      result2 = result2 + amount2 * RATE_CM_PC;
      console.log("Le résultat est:" + result2);
      conversionMsg2 = `Le résultat de la conversion de ${amount2} ${PC_LABEL} est:  ${result2.toFixed(
        2
      )} ${CM_LABEL}.`;
    } else if (fromUnit === "centimètres" && to2 === "pouces") {
      result2 = result2 + amount2 / RATE_CM_PC;
      console.log("Le résultat est:" + result2);
      conversionMsg2 = `Le résultat de la conversion de ${amount2} ${CM_LABEL} est:  ${result2.toFixed(
        2
      )} ${PC_LABEL}.`;
    } else if (fromUnit === "kilomètres" && to2 === "miles") {
      result2 = result2 + amount2 * RATE_KM_ML;
      console.log("Le résultat est:" + result2);
      conversionMsg2 = `Le résultat de la conversion de ${amount2} ${KM_LABEL} est:  ${result2.toFixed(
        2
      )} ${ML_LABEL}.`;
    } else if (fromUnit === "miles" && to2 === "kilomètres") {
      result2 = result2 + amount2 / RATE_KM_ML;
      console.log("Le résultat est:" + result2);
      conversionMsg2 = `Le résultat de la conversion de ${amount2} ${ML_LABEL} est:  ${result2.toFixed(
        2
      )} ${KM_LABEL}.`;
    } else if (fromUnit === "pouces" && to2 === "kilomètres") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "kilomètres" && to2 === "pouces") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "pouces" && to2 === "miles") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "miles" && to2 === "pouces") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "centimètres" && to2 === "kilomètres") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "kilomètres" && to2 === "centimètres") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "miles" && to2 === "centimètres") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === "centimètres" && to2 === "miles") {
      // message d'erreur
      errorMsg2 = `Ce module n'est pas encore fonctionnel. Retourne sur la page d'accueil pour voir les modules disponibles.`;
      error2 = true;
    } else if (fromUnit === to2) {
      // message d'erreur
      errorMsg2 = `Vous ne pouvez pas selectionner la même option de selection de longueur.`;
      error2 = true;
    }
  } else {
    // message d'erreur
    var errorMsg2 = "Le champ montant n'est pas correctement saisi";
    console.log(errorMsg2);
    error2 = true;
  }

  document.getElementById("hidden-div2").style.display = "block";

  //Affichage des resultats
  if (!error2) {
    console.log(conversionMsg2);
    document.getElementById("resultMsg2").innerHTML = conversionMsg2;
    document.getElementById("errorCard2").style.display = "none";
    document.getElementById("successCard2").style.display = "block";
  } else {
    document.getElementById("errorMsg2").innerHTML = errorMsg2;
    document.getElementById("successCard2").style.display = "none";
    document.getElementById("errorCard2").style.display = "block";
    console.log(document.getElementById("errorCard2"));
  }
}

/*==== Création de la fonction pour l'exécution de la conversion de poids ====*/

function volumeConverter() {
  //Récupération du poids à convertir et le stocke dans la variable amount3
  var amount3 = document.getElementById("amount3").value;
  //Récupération du poids de départ et le stocke dans la variable fromUnit2
  var fromUnit2 = document.getElementById("fromUnit2").value;
  //Récupération du poids pour le résultat et le stocke dans la variable to3
  var to3 = document.getElementById("to3").value;
  //Récupération de la division hidden-div3 et le cache.
  document.getElementById("hidden-div3").style.display = "none";

  var error3 = false;
  var result3 = 0;
  var conversionMsg3 = "";

  if (!isNaN(amount3) && amount3 != "" && amount3 > 0) {
    if (fromUnit2 === "livres" && to3 === "kilogrammes") {
      result3 = result3 + amount3 / RATE_KG_LBS;
      console.log("Le résultat est:" + result3);
      conversionMsg3 = `Le résultat de la conversion de ${amount3} ${LBS_LABEL} est:  ${result3.toFixed(
        2
      )} ${KG_LABEL}.`;
    } else if (fromUnit2 === "kilogrammes" && to3 === "livres") {
      result3 = result3 + amount3 * RATE_KG_LBS;
      console.log("Le résultat est:" + result3);
      conversionMsg3 = `Le résultat de la conversion de ${amount3} ${KG_LABEL} est:  ${result3.toFixed(
        2
      )} ${LBS_LABEL}.`;
    } else if (fromUnit2 === to3) {
      // message d'erreur
      errorMsg3 = `Vous ne pouvez pas selectionner la même option de selection de poids.`;
      error3 = true;
    }
  } else {
    // message d'erreur
    var errorMsg3 = "Le champ montant n'est pas correctement saisi";
    console.log(errorMsg3);
    error3 = true;
  }

  document.getElementById("hidden-div3").style.display = "block";

  //Affichage des resultats
  if (!error3) {
    console.log(conversionMsg3);
    document.getElementById("resultMsg3").innerHTML = conversionMsg3;
    document.getElementById("errorCard3").style.display = "none";
    document.getElementById("successCard3").style.display = "block";
  } else {
    document.getElementById("errorMsg3").innerHTML = errorMsg3;
    document.getElementById("successCard3").style.display = "none";
    document.getElementById("errorCard3").style.display = "block";
  }
}

/**
 * Affichage du menu
 */
function showContent(content) {
  document.getElementById("divHome").style.display = "none";
  document.getElementById("divCurrency").style.display = "none";
  document.getElementById("divLongueurs").style.display = "none";
  document.getElementById("divPoids").style.display = "none";
  document.getElementById(content).style.display = "block";
}

//Initialisation du menu
document.getElementById("divHome").style.display = "block";
document.getElementById("divCurrency").style.display = "none";
document.getElementById("divLongueurs").style.display = "none";
document.getElementById("divPoids").style.display = "none";

/**Création des tableaux pour les unités de conversions de monnaies, de longueurs et de poids */
var tabDevises = ["dollars", "dollarsCanadiens", "euros"];
var tabLongueurs = ["pouces", "centimètres", "kilomètres", "miles"];
var tabPoids = ["livres", "kilogrammes"];

/**Utilisation des listes dynamiques dans les champs de sélection des types de conversion.
 * Insertion dynamique du tableau des unités de monnaie dans le select box
 */
var select1 = document.getElementById("from");
for (const varDevise of tabDevises) {
  var option = document.createElement("option");
  option.value = varDevise;
  option.text = varDevise.charAt(0).toUpperCase() + varDevise.slice(1);
  select1.appendChild(option);
}

var select1 = document.getElementById("to");
for (const varDevise of tabDevises) {
  var option = document.createElement("option");
  option.value = varDevise;
  option.text = varDevise.charAt(0).toUpperCase() + varDevise.slice(1);
  select1.appendChild(option);
}

/**Insertion dynamique du tableau des unités de longueurs dans le select box  */
var select2 = document.getElementById("fromUnit");
for (const varLongueur of tabLongueurs) {
  var option = document.createElement("option");
  option.value = varLongueur;
  option.text = varLongueur.charAt(0).toUpperCase() + varLongueur.slice(1);
  select2.appendChild(option);
}

var select2 = document.getElementById("to2");
for (const varLongueur of tabLongueurs) {
  var option = document.createElement("option");
  option.value = varLongueur;
  option.text = varLongueur.charAt(0).toUpperCase() + varLongueur.slice(1);
  select2.appendChild(option);
}

/**Insertion dynamique du tableau des unités de poids dans le select box */
var select3 = document.getElementById("fromUnit2");
for (const varPoids of tabPoids) {
  var option = document.createElement("option");
  option.value = varPoids;
  option.text = varPoids.charAt(0).toUpperCase() + varPoids.slice(1);
  select3.appendChild(option);
}

var select3 = document.getElementById("to3");
for (const varPoids of tabPoids) {
  var option = document.createElement("option");
  option.value = varPoids;
  option.text = varPoids.charAt(0).toUpperCase() + varPoids.slice(1);
  select3.appendChild(option);
}
