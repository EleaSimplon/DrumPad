# DrumPad

⛳ TP Drum Pad

Dans ce TP, nous allons réaliser un clavier numérique en utilisant toutes les notions que nous avons vu sur les transitions et les événements JS.

Vous allez devoir appréhender le code déjà fourni. Analysez-le afin de pouvoir l'utiliser.

Dans ce TP vous n'avez aucun code CSS à ajouter.

Vous êtes fortement encouragés à réaliser ce tp en groupe et à partager vos découvertes. Sans entraide et sans collaboration il s’avérera très compliqué !

La compréhension des consignes fait partie de l'exercice
Drum Pad Exercice CodePen

->Consignes :

Voici votre point de départ, le but est d'arriver à ce rendu : https://i.gyazo.com/b258219bebb02401e6d7f72e76baebda.gif

- Dans un premier temps, vous devez construire les 8 autres pad du drumpad
- Attribuez aux touches du pad la lettre correspondante au keycode du clavier de votre ordinateur (en fonction du data-attribute)

Vous allez devoir faire interagir les balises audio lors de la pression d'une touche de clavier avec les pad que vous avez créées
Pour ce faire : coder la fonction playSound()

cette fonction doit sélectionner la balise audio qui correspond à la bonne touche du clavier :

- elle doit faire jouer le son de cette balise
- elle doit aussi ajouter l'animation CSS de "pression" du pad qui correspond à sa balise audio (qui est déjà codé dans la partie css)
- Créez un écouteur d’événement capable d'écouter la pression d'une touche de clavier et qui lance la fonction playSound()
A ce stade, si vous avez réussi le reste, le pad reste "enfoncé" dans le drumpad si vous appuyez sur la touche du clavier.

Créez la fonction removeTransition() pour gérer ce problème avec un écouteur d’événement qui regarde si un pad a fini son animation.
Comportement attendu :
-> Je peux jouer un son à la pression d'un pad même si la lecture de la balise audio n'est pas terminé
