// this video for assistance https://www.youtube.com/watch?v=NIY0kx-lSQw

// An array of cat objects
let model = {
  currentCat: null,
  cats: [
    {
      clicks: 0,
      name: 'Bobby',
      imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
    },
    {
      clicks: 0,
      name: 'Tanya',
      imgSrc: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
      clicks: 0,
      name: 'Boris',
      imgSrc: 'http://animalsbirds.com/wp-content/uploads/2016/07/Cats-Animal.jpg'
    },
    {
      clicks: 0,
      name: 'Claude',
      imgSrc: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2015%2F12%2F11083247%2Fcat.jpg&w=1400&q=70'
    },
    {
      clicks: 0,
      name: 'Tiffany',
      imgSrc: 'https://lh3.googleusercontent.com/l6JAkhvfxbP61_FWN92j4ulDMXJNH3HT1DR6xrE7MtwW-2AxpZl_WLnBzTpWhCuYkbHihgBQ=w640-h400-e365'
    }
  ]
};


// referred to as octopus in lessons. These talk between page components.
let octopus = {
  // starts the entire application
  init: function () {
    model.currentCat = model.cats[0];
    catList.init();
    catDisplay.init();
  },

  getCurrentCat: function () {
    return model.currentCat;
  },

  getCats: function () {
    return model.cats;
  },

  // sets the current cat to the object passed in
  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },

  incrementClicks: function () {
    model.currentCat.clicks++;
    catDisplay.render();
  }
};


let catList = {
  // init function used to store DOM elements for later use
  init: function () {
    this.catListElem = document.getElementById('cat-list');
    this.render();
  },

  render: function () {
    var cats = octopus.getCats();

    this.catListElem.innerHTML = '';

    for (var i = 0; i < cats.length; i++) {
      let cat = cats[i];
      let li = document.createElement('li');
      li.textContent = cat.name;

      li.addEventListener('click', (function (cat) {
        return function () {
          octopus.setCurrentCat(cat);
          catDisplay.render();
        };

      })(cat));

      this.catListElem.appendChild(li);
    }
  }
};


let catDisplay = {
  init: function () {
    this.catElem = document.getElementById('cat-display');
    this.catNameElem = document.getElementById('cat-name');
    this.catImgElem = document.getElementById('cat-img');
    this.catCounterElem = document.getElementById('counter');

    this.catImgElem.addEventListener('click', function(){
      octopus.incrementClicks();
    });

    this.render();
  },

  render: function () {
    let currentCat = octopus.getCurrentCat();
    this.catNameElem.textContent = currentCat.name;
    this.catImgElem.src = currentCat.imgSrc;
    this.catCounterElem.textContent = currentCat.clicks;
  }
}


octopus.init();