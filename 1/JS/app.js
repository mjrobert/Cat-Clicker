let firstCat = document.getElementById('first-cat');
let firstCounter = document.getElementById('first-counter');
let number = 0;

firstCat.addEventListener('click', function(){
    number++;
    firstCounter.innerHTML = number;
  }, false);

