"use strict";


function rendererSelector(messType){
    let func_name = "getView_" + messType;
    let func = window[func_name];
    if ( func === undefined){
        func = function(mess){return getView_NotImplemented(messType);}
    }
    return func;
}

function isDefined(mess, propsStr){
    if (mess === undefined){
        return false;
    }
    let obj = mess;
    let props = propsStr.split('.');
    for (const prop of props){
        if (obj[prop]===undefined){
            return false;
        }
        obj = obj[prop];
    }
    return true;
}

function enhanceMess(mess) {
    // améliore le contenu du message pour une meilleur lisibilité (ex: locode -> nom port)
    if (isDefined(mess, "Body.FormInformation.entryOrExit")){
        if (mess.Body.FormInformation.entryOrExit == "0") {
            mess.Body.FormInformation.entryOrExit = "arrival"
        } else {
            mess.Body.FormInformation.entryOrExit = "departure"
        }
    }
    return mess;
}

function getView_NotImplemented(messType) {
    //retourne le code HTML à afficher
    return `
      <h2>${messType}</h2>
      Pas encore implémenté! Si vous le souhaitez, vous pouvez contribuer au projet sur <a href="https://github.com/nviel/t2k_mess_beautifier">GitHub<a>
      `;
}