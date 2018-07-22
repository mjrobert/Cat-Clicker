var Cat = function (name, image) {
  // Location variables applied to each instance
  this.name = name;
  this.image = image;
  this.clicks = 0;
};

Cat.prototype.count = function(){
  clicks++;
}

Cat.prototype.arrayUpdate = function(this){
  cats.push(this);
};

let cat1 = new Cat('Fred', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');


let cats =[];


/*
let firstCat = document.getElementById('first-cat');
let firstCounter = document.getElementById('first-counter');
let number = 0;

firstCat.addEventListener('click', function(){
    number++;
    firstCounter.innerHTML = number;
  }, false);
*/
