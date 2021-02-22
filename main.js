

/******* PLAN !!!! PARTIE 1 ********

1. Récuperer tout les audios

2. Récuperer toutes les cases 

3. Ecouteur d'événement **addListener** sur la fenetre de type ***keydown*** qui lance une ****audio.play())****

4. *** IF *** l'evenement est égale au data-key d'un des elements du tableau audio 

5. Je récupere l'element et je joue le son + j'ajoute l'animation (ajouter class)

6. DANS KEYDOWN Mettre un 2eme écouteur d'evenement de type ****KEYUP**** = transition end + remove playing sound

7. Si on lache la touche du clavier *****KEYUP**** on arrète le son et on supprime les animations 

**************/

let audio = document.querySelectorAll('audio');
let keys = document.querySelectorAll('.key');

console.log(keys)
console.log(audio)

window.addEventListener('keydown', function(event) {
    keys.forEach (clef =>{
        if (clef.dataset.key == event.keyCode){
            clef.classList.add('playing', 'sound')
            clef.addEventListener('transitionend', function(){
                clef.classList.remove('playing', 'sound')
            })
            audio.forEach(audio=>{
                if (audio.dataset.key == event.keyCode){
                    audio.play();
                }
            })
        }
    })
});




/******* PLAN !!!! PARTIE 2 ********

1. La fonction **** beatBox() **** contient 2 fonctions :
     - une fonction **** simulateKey()**** qui simule la pression d'une touche de clavier (ce qui permet de déclencher le code de votre drumpad déjà fait)
        (Pour simuler la pression d'une touche, je veux créer et paramétrer un nouvel event js
         ensuite je veux dispatch cet event dans le document)
     - une fonction **** playBeat() **** qui renvoie une nouvelle promesse *** .then ***

2. Dans la fonction **** beatBox() **** toujours, faites une chaîne de promesse pour créer un beat = **** playBeat() **** 


**************/

function beatBox() {
    function simulateKey (key) {
        let btnbeat = new Event('keydown',{
            bubbles : true
        });
        btnbeat.keyCode = key
        window.dispatchEvent(btnbeat)
    }

    function playBeat(time,key){
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(simulateKey(key));
            }, time);
        })
    }


    playBeat(300,83).then(() => {
        return playBeat(300,87)
    }) 
        .then(() => {
        return playBeat(300,67)
    }) 
    .then(() => {
        return playBeat(300,69)
    })
    .then(() => {
        return playBeat(300,87)
    }) 
    .then(() => {
        return playBeat(300,67)
    })
    .then(() => {
        return playBeat(300,65)
    }) 
    .then(() => {
        return playBeat(300,83)
    }) 
    .then(() => {
        return playBeat(300,67)
    }) 
    .then(() => {
        return playBeat(300,69)
    })
    .then(() => {
        return playBeat(300,90)
    }) 
    .then(() => {
        return playBeat(300,87)
    }) 
    .then(() => {
        return playBeat(300,67)
    })
    .then(() => {
        return playBeat(300,65)
    })
    .then(() => {
        return playBeat(300,83)
    })
}