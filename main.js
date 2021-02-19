
let audio = document.querySelectorAll('audio');
let keys = document.querySelectorAll('.key');

console.log(keys)
console.log(audio)

window.addEventListener('keydown', function(event) {
    keys.forEach (clef =>{
        if (clef.dataset.key == event.keyCode){
            clef.classList.add('playing', 'sound')
            audio.forEach(audio=>{
                if (audio.dataset.key == event.keyCode){
                    audio.play();
                }
            })
        }
    })
});

window.addEventListener('keyup', function(event) {
    keys.forEach (clef =>{
        if (clef.dataset.key == event.keyCode){
            clef.classList.remove('playing', 'sound')
            audio.forEach(audio=>{
                if (audio.dataset.key == event.keyCode){
                    audio.pause();
                    audio.currentTime=0
                }
            })
        }
    })
});



/******* PLAN !!!! ********

1. Récuperer tout les audios

2. Récuperer toutes les cases 

3. Ecouteur d'événement **addListener** sur la fenetre de type ***keydown*** qui lance une ****audio.play())****

4. *** IF *** l'evenement est égale au data-key d'un des elements du tableau audio 

5. Je récupere l'element et je joue le son + j'ajoute l'animation (ajouter class)

6. Mettre un 2eme écouteur d'evenement de type ****KEYUP**** > fonction *****removeTransistion****

7. Si on lache la touche du clavier *****KEYUP**** on arrète le son et on supprime les animations 

**************/