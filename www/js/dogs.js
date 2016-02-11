var dogs = [
  { "name" : "Bo",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/1n3pvqomqxwr8id/Bo%20-%20OC.jpg"
  },
  { "name" : "Buddy",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/1i8x28gexb83yr3/Buddy%20%282%29.jpg"
  },
  { "name" : "Caramel",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/fdh69osr18a29ns/Caramel.jpg",
    "sponsored" : true
  },
  { "name" : "Chuck",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/6drts82zcz511ki/Chuck%20-%20OC.jpg"},
  {
    "name": "Colby",
    "imageUrl": "https://dl.dropboxusercontent.com/s/8lymt4lzio3h890/Colby%20-%20OC.jpg"
  },
  { "name" : "Dash",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/5u210e1sdx0kbyb/Dash%20.jpg"
  },
  { "name" : "Diamond",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/dnllx4wqxmiqou6/Diamond.jpg"
  },
  { "name" : "Dolly",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/s4wlsrom4omps93/Dolly.jpg"
  },
  { "name" : "Foxy",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/96xh3g55ag8o0v4/Foxy%20-%20OC.jpg",
    "sponsored" : true},
  {
    "name": "Jack",
    "imageUrl": "https://dl.dropboxusercontent.com/s/hx9rspw9q31wh8t/Jack.jpg",
    "sponsored" : true
  },
  { "name" : "Lady",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/pp5se55b7io5j60/Lady%20%281%29.jpg",
    "sponsored" : true
  },
  { "name" : "Madison",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/0r3wsu603f8u6zw/Madison.jpg"},
  {
    "name": "Maxi",
    "imageUrl": "https://dl.dropboxusercontent.com/s/znmc8y4a66mm2z4/Maxi.jpg"
  },

  { "name" : "Mia",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/j8k4nw0skasd9iy/Mia%20-%20Durham.jpg",
    "sponsored" : true
  },
  { "name" : "Mikey",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/tqpkj6cihjukbat/Mikey%20-%20OC.jpg"
  },
  { "name" : "Molly",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/eu9eplxftfei6xm/Molly.jpg"},
  {
    "name": "Nemo",
    "imageUrl": "https://dl.dropboxusercontent.com/s/hscmatnqfv5xnx1/Nemo%20-%20Durham.jpg",
    "sponsored" : true
  },
  { "name" : "Peanut",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/4hykgenkga6ooy2/Peanut.jpg",
    "sponsored" : true
  },
  { "name" : "Reesie Cup",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/8jbpu7dzdd8ruu6/Reesie%20Cup%20-%20OC.jpg",
    "sponsored" : true},
  {
    "name": "Sapphire",
    "imageUrl": "https://dl.dropboxusercontent.com/s/ensvm7ku1dpinun/Sapphire.jpg",
    "sponsored" : true
  },
  { "name" : "Shannelle",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/o6247iag1j8fxyx/Shannelle%20-%20OC.jpg"
  },
  { "name" : "Jasper",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/pzxtlmcui2gnnoq/Jasper%20-%20Durham.jpg"
  },
  { "name" : "Lily",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/xodgia203qjozo9/Lily.jpg",
    "sponsored" : true
  },
  {
    "name": "JC",
    "imageUrl": "https://dl.dropboxusercontent.com/s/t5cyo0t4dl8f5ca/JC%20-%20OC.jpg",
    "sponsored" : true
  },
  { "name" : "Mama",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/3rplrcihiweox13/Mama.jpg",
    "sponsored" : true
  },
  { "name" : "Max",
    "imageUrl" : "https://dl.dropboxusercontent.com/s/gsy5003wpxcaaa5/Max%20%282%29.jpg",
    "sponsored" : true
  },
  {
    "name": "Destiny",
    "imageUrl": "https://dl.dropboxusercontent.com/s/qj3mganw3krrh19/Destiny.jpg"
  }

]


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function limit(array, numItems) {
  if (numItems > 0) {
    var removeCount = array.length - numItems;
    for (i = 0; i < removeCount; i++) {
      array.pop();
    }
  }
  return array;
}

// randomize and limit number displayed; 0 displays all
dogs = limit(shuffle(dogs), 0);
