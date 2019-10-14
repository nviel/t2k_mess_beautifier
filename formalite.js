"use strict";

function afficheFormalite(mess, messType) {
    // met à jour l'affichage avec le bon modèle
    mess = prepareMess(mess);
    let FormaliteElemStr;
    if (messType == 'NCA_FAL1') {
        FormaliteElemStr = getViewFAL1(mess);
    } else if (messType == 'NCA_FAL5') {
        FormaliteElemStr = getViewFAL5(mess);
    } else if (messType == 'NCA_FAL6') {
        FormaliteElemStr = getViewFAL6(mess);
    } else {
        FormaliteElemStr = getViewNotImpemented(messType);
    }
    let contentElem = document.getElementById("content");
    contentElem.innerHTML = FormaliteElemStr;
}


function prepareMess(mess) {
    // améliore le contenu du message pour une meilleur lisibilité (ex: locode -> nom port)
    if (mess.Body.FormInformation.entryOrExit == "0") {
        mess.Body.FormInformation.entryOrExit = "arrival"
    } else {
        mess.Body.FormInformation.entryOrExit = "departure"
    }
    return mess;
}

function getViewNotImpemented(messType) {
    //retourne le code HTML à afficher
    return `
      <h2>${messType}</h2>
      Pas encore implémenté! Si vous le souhaitez, vous pouvez contribuer au projet sur <a href="https://github.com/nviel/t2k_mess_beautifier">GitHub<a>
      `;
}