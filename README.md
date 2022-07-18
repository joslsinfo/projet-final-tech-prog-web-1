# ProjetFinalSaintus-Jean-OldorGR1041

# Projet final

## Guide Utilisateur de l'application de conversion des unités

C'est une application qui a été créée en JavaScript dans le cadre d'un projet final de AEC en développement Web Front-End - Cégep de Trois-Rivières, proposée par Vincent Baylly.
Cette application permet de créer des formulaires pour les différentes unités de conversion.
Voici le liste des fonctionnalités:
1 .- Formulaire de devise(monnaie) pour la conversion de monnaies
2 .- Formulaire de longueur pour la conversion de longueurs
3 .- Formulaire de poids pour la conversion de poids

- Le formulaire de devise sert à faire la conversion de dollars canadiens en dollars et en euro ; de dollars en dollars canadiens et en euro et finalement d’euro en dollars canadiens et en dollars.

- Le formulaire de longueur permet de faire la conversion de pouces en centimètres et centimètres en pouces, puis kilomètres en miles et miles en kilomètres.

- Ce dernier formulaire qui est celui de poids sert à faire la conversion de livres en kilogrammes et kilogrammes en livres.

### Avantage de Javascript

- L’avantage de faire cette application en JavaScript, c’est parce que JavaScript est l’une des technologies, parmi tant d’autres technologies, la plus utilisée dans le développement de la programmation web. Il facilite la dynamisation des informations des différentes unités de conversions via une page web de manière plus rapide, plus fluide et plus ergonomique. Il permet de faire bouger, apparaitre ou cacher les différents éléments du menu principal, le formulaire de devise, le formulaire de longueur, et le formulaire de poids. On peut réagir après certaines actions effectuées comme par exemple lors d’un clic pour exécuter la conversion de monnaie,la conversion de longueurs, et la conversion de poids. Il permet aussi d’interagir avec une partie de la page sans pour autant avoir besoin de recharger la page en entier.

### Fonctions Javascript utilisées pour la réalisation du projet

# - Dans L'application de conversion des unités, j'ai utilisé les fonctions suivantes:

- document.getElementById() permet d'aller récupérer ou cibler un élément HTML en particulier avec une valeur unique spécifiée dans la page HTML en question. Par exemple, document.getElementById("amount2").value; permet d'aller récupérer la valeur saisie par l'utilisateur dans le champ input de l'Id amount2 de la page HTML.
- document.createElement() permet de créer un nouvel élément HTML en Javascript c'est-à-dire une instance de l'élément HTML specifié. Par exemple, grâce à cette fonction document.createElement("option"), je peux créer l'élément option et ensuite option.value pour injecter la valeur dans l'élément qu'on vient de créer.
- La méthode charAt() permet de retourner le caractère à la position donnée d'une chaine de caractères. Et le premier caractère de cette méthode est à la position zéro(0)
- La méthode toUpperCase() permet de mettre un texte ou une chaine de caractères en majuscule.
- La méthode slice() permet d'extraire une partie d'une chaine de caractères à partir de la position donnée.
- Pour résumer la liste des fontions mentionnées ci-dessus dans notre application par exemple : option.text = varLongueur.charAt(0).toUpperCase() + varLongueur.slice(1) se traduit ainsi: retourne le caractère qui est à la position 0 et le met en majuscule ensuite extrais le reste de la chaine de caractères à partir de la position 1.
- La méthode appendChild() permet d'insérer un objet ou un noeud en tant que dernier enfant dans notre noeud ou objet parent.
