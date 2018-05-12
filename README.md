# Laboratoire \#3

## But :
Se familiariser avec le JavaScript ES6

## Travail :
Réaliser un composant de notifications de type **toast** en utilisant les fonctionnalités de ES6.

## Consignes :
Les notifications doivent supporter:
* 3 types, erreur, succès, info
* Doivent disparaître après un certain temps
* Doivent se “stacker” si plusieurs notifications
s’affichent rapidement
* Démontrez ces fonctionnalités grâce à une page de
démo incluant:
  * Un input de texte pour taper le texte à afficher dans
la notification
  * Un bouton pour choisir le type de notification (erreur,
succès, info)

## Consignes techniques :
Utiliser ES6 au maximum
* Pas de `bind`, `var _this = this` , etc.
* Utiliser les modules ES6
* Donc un seul fichier doit être importé dans le
index.html, les autres seront importés via la primitive
`import`
* Aucun framework ne doit être utilisé.
* Aucun outil de compilation (Ex: babel) n’est nécessaire

N.B => Chrome version 61+ supporte les modules
ES6, s'assurer que votre navigateur est à
jour pour effectuer la correction de ce laboratoire. Il n’est donc pas nécessaire de
“transpiler” notre laboratoire.