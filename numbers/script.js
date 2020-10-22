/* Ciblages */


let firstResult;
let lastResult;
let newLastResult;
let total;


const firstDiv = document.getElementById('first');
const button = document.getElementsByTagName('button')[0];

button.innerText = 'Commencer';


let paras = document.getElementsByTagName('p');


let count = 0;

button.addEventListener('click', () => {

    /* Suppression des éléments précédents au deuxieme click */

    if (count > 0) {
        Array.from(paras).forEach(para => {
            firstDiv.removeChild(firstDiv.firstChild);
        });
    }

    /* Bouton Générer */

    button.innerText = 'Générer les 100 suivants';


    /* Boucle de calcul */

    for (let i = 0 + count * 100; i < 100 + count * 100; i++) {

        if (i == 0) {
            firstResult = 0;
            total = 0;
        }

        else if (i == 1) {
            lastResult = 1;
            total = 1;
        }

        else {
            total = firstResult + lastResult;

            firstResult = lastResult;
            newLastResult = total;
            lastResult = newLastResult;
        }

        /* Creation de chaque paragraphe */
        const para = document.createElement('p');
        let text = document.createTextNode((Math.floor(100 * total) / 100).toFixed(0));
        para.appendChild(text);

        /* Insertion des paragraphes dans la div */
        firstDiv.appendChild(para);


    }

    /* Dégradé couleurs éléments : premier noir (rgb(0, 0, 0)), dernier blanc rgb(255, 255, 255)*/

    for (let j = 0; j < 100; j++) {
        paras[j].style.color = `rgb(${(j * 255) / 100}, ${(j * 255) / 100}, ${(j * 255) / 100})`;
    }

    count++;

})