let first = document.getElementById('first');
let cards = document.getElementById('cards');
let slide = document.getElementsByClassName('slide');

first.classList.add('active-slide');

let right = document.getElementsByClassName('rightArrow');
let left = document.getElementsByClassName('leftArrow');

const getTranslate = () => { }

let count = 0;
for (let i = 0; i < right.length; i++) {

    right[i].addEventListener('click', () => {
        count = 0;
        count++;

        /* Obtenir la valeur translateX (x) */
        const style = window.getComputedStyle(cards);
        const matrix = style.transform;
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        const xString = matrixValues[4]
        const x = parseInt(xString);
        /* ----------------------------------- */

        for (let j = 0; j < slide.length; j++) {
            cards.style.transform = `translateX(${x - 400}px)`;
            slide[i].classList.remove('active-slide');
            slide[i + count].classList.add('active-slide');
        }

    })

    left[i].addEventListener('click', () => {
        /* Obtenir la valeur translateX (x) */
        const style = window.getComputedStyle(cards);
        const matrix = style.transform;
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        const xString = matrixValues[4]
        const x = parseInt(xString);
        /* ----------------------------------- */

        for (let j = 0; j < slide.length; j++) {
            cards.style.transform = `translateX(${x + 400}px)`;
            slide[i + count].classList.remove('active-slide');
            slide[i].classList.add('active-slide');
        }

    })

}

let play = document.getElementById('play');
let pause = document.getElementById('stop');

play.addEventListener('click', () => {
    cards.classList.remove('pause');
    cards.classList.add('automatic');

    for (let i = 0; i < slide.length; i++) {
        setTimeout(() => {
            slide[i].classList.remove('active-slide');
            slide[i + 1].classList.add('active-slide');
        }, 6000 * (i + 1));
        setTimeout(() => {
            slide[4].classList.remove('active-slide');
            slide[0].classList.add('active-slide');
        }, 30000);
    }

    setTimeout(() => {
        cards.classList.remove('automatic');
    }, 30000);
})

pause.addEventListener('click', () => {
    cards.classList.add('pause');
});