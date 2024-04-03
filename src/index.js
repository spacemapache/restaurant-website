// menu change

//menu change from food to drink - innerhtml
// when submit button is hit, alert we have received your request
// if form is empty = else say please fill in the form

// submit btn
function submitBtn() {
  event.preventDefault();
  alert("We have received your reservation request");
}

// function for switching menus
function drinkBtn(event) {
  event.preventDefault();
  let drinkMenu = document.getElementById("menuItems");
  drinkMenu.innerHTML = `<li>HANKY PANKY</li>
              <li>
                Junmai namachozo sake, strawberry, yuzu, sparkling rose, bitters
              </li>
              <li>BLIND DATE</li>
              <li>Shochu, shushing, lime rose water, soda water</li>
              <li>BINGO BANGO</li>
              <li>Nigori sake, butterfly pea, yuzu, lemon, jasmine water</li>
              <li>WASABI MARGARITA</li>
              <li>Agave wine, cucumber, junta sake, lime, wasabi, togarashi</li>`;
}

function foodBtn(event) {
  event.preventDefault();
  let foodMenu = document.getElementById("menuItems");
  foodMenu.innerHTML = `<li>BIG FIISH</li>
              <li>
                Edamame, seaweed salad cucumber salad, aged tuna sashimi, 2
                salmon with lemon zest, 2 albacore garlic ponzu pickled onion, 2
                yellowtail jalapeño negi, 2 stripped bass ponzu togarashi negi,
                1 tuna jalapeño garlic aioli sesame, 1 snapper yuzu koshu wasabi
                negi, 4 pieces salmon cut roll, 4 pieces spicy tuna roll
              </li>
              <li>LITTLE FIISH</li>
              <li>
                Edamame, seaweed salad, 2 salmon with lemon zest, 1 albacore
                garlic ponzu pickled onion, 2 yellowtail jalapeño Negi, 1
                stripped bass ponzu togarashi Negi, 1 tuna smoked soy wasabi
                sashimi, 4 pieces salmon cut roll, 4 pieces spicy Tuna roll
              </li>`;
}
