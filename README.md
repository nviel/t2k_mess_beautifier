# t2k_mess_beautifier

Cette "application" déployée sur https://t2kmessbeautifier.niccode.dev permet de consulter sous une forme "humainement lisible" les messages xml émis par les ports vers Trafic2000 et de trafic2000 vers certaines administrations.

Voir ce [lien](https://www.ecologique-solidaire.gouv.fr/guichet-unique-maritime-et-portuaire-gump) pour en savoir plus sur le guichet unique portuaire et le rôle de trafic2000.

## Utilisation:
Il suffit de sélectionner le fichier d'un message avec l'explorateur de fichier ou bien de le glisser/déposer ou de copier/coller son contenu dans le navigateur pour afficher les informations de la manière le plus proche possible des [formulaires de l'OMI FAL](http://www.imo.org/fr/OurWork/Facilitation/FormsCertificates/Pages/Default.aspx).

## Note sur les données confidentielles:
Les messages de Trafic2000 peuvent contenir des informations confidentielles ou personnelles. Pour cette raison les données ne sont jamais transmises au serveur (elles ne le seront jamais, je n'en veux aucune trace sur le serveur dont j'ai la responsabilité).
Le rendu est entièrement fait par le navigateur en javascript.

## Installation locale:
Vous pouvez installer t2k_mess_beautifier sur votre poste très simplement en téléchargeant le code à l'adresse suivante:
https://github.com/tools4ports/t2k_mess_beautifier/archive/master.zip

Dézippez dans un répertoire de votre choix. Par exemple ```c:/mon/repertoire/t2k_mess_beautifier-master```

Saissez l'adresse suivante dans votre navigateur pour lancer l'appli:
```file:///c:/mon/repertoire/t2k_mess_beautifier-master```

Et voilà!

Si vous voulez mettre en place un serveur sur votre réseau local pour que tout le monde utilise la même installation il faudra installer un serveur http (apache, nginx ou autre ...) et lui faire servir le répertoire ```c:/mon/repertoire/t2k_mess_beautifier-master```. Si vous savez le faire c'est facile, sinon utilisez simplement https://t2kmessbeautifier.niccode.dev ou une installation sur votre poste comme indiquée ci dessus. 

**Note:** T2k_mess_beautifier n'est pas une application officielle et n'a aucun lien avec les équipes de trafic2000. Les auteurs ne peuvent être tenus responsables des dommages qui pourraient découler d'un dysfonctionnement de l'application.
