// menu change
function menuChange() {
  let drinkMenu = `HANKY PANKY``Junmai namachozo sake, strawberry, yuzu, sparkling rose, bitters``$17``BLIND DATE
Shochu, shushing, lime rose water, soda water
$17
BINGO BANGO
Nigori sake, butterfly pea, yuzu, lemon, jasmine water
$17
WASABI MARGARITA
Agave wine, cucumber, junta sake, lime, wasabi, togarashi
$16
SHEEBA SHEEBA
Agave wine, blanc vermouth, ponzu, lime, prickly pear
$16
ROASTED BARLEY OLD FASHIONED
Barrel rested shook, roasted barley, hickory- smoked cherry bitters
$16`;
}

let drinkElement = document.querySelector("#menu");
drinkElement.innerHTML = drinkMenu;
drinkMenu.addEventListener("click", drinkElement);

//menu change from food to drink - innerhtml
// when submit button is hit, alert we have received your request
