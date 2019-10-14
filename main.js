"use strict";


/* gestion du drag an drop */
let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}

;
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
})

;
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})

function highlight(e) {
    dropArea.classList.add('highlight')
}

function unhighlight(e) {
    dropArea.classList.remove('highlight')
}

dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    handleFiles(files)
}

function handleFiles(files) {
    files = [...files]
    files.forEach(afficheFile)
}

function afficheFile(file) {
    var reader = new FileReader();
    reader.addEventListener('load', function() { afficheXml(reader.result) })
    reader.readAsText(file);
}

/* gestion du copier/coller */
dropArea.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    afficheXml(paste);
});


/* affichage des données */
function afficheXml(mess_xml_str) {
    let parser = new DOMParser();
    let messXml = parser.parseFromString(mess_xml_str, "text/xml");
    let messNode = messXml.firstChild;
    let messType = messNode.nodeName;
    let messObj = xmlToJson(messNode);
    afficheFormalite(messObj, messType);
}