//parallax change img

let tab = document.querySelectorAll('.tab a');
let arrImg = ['images/metro/Без имени.png', 'images/tranzit/dogs.png', 'images/tranzit/u11307_9853_115.jpg'];
let img = document.querySelector('.parallax img');

for(let i = 0; i < tab.length; i++){
    tab[i].onclick = function(e) {
            img.src = arrImg[i];
            console.log(img.src);
            console.log(e.target);
    }
}