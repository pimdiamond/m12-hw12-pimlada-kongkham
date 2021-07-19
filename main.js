const places = ["Alaska","Greece", "Iceland", "Japan", "Norway", "Antarctica", "Kukenan River", "Lake Urmia","Parc de la Vanoise", "Banff National Park",];
document.getElementById("list").innerHTML = places;  

function myFunction() {
  for (let i = places.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = places[i]
    places[i] = places[j]
    places[j] = k
  }
  document.getElementById("list").innerHTML = places;
}