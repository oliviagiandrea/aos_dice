// BONUS: “important numbers” at the top - print out dice distributions

// ANOTHER BONUS: some numbers can terminate sequence immediately

// 7 field entries for numbers you’re throwing 
// attacker (damage, attacks, hit, wound, rend) and defender (save, ward-save)
// undefined save or save > 6 → skip save phase
// A amount of dice = number of attacks
//  (GENERATE)
// B >= attacker’s hit value = hit 
// (GENERATE)
// C >= attacker’s wound value out of B = wound
// (GENERATE)
// D (rend) will raise E (defender’s save) → optional
// any dice <= (GENERATE)
// F <= defender’s ward-save = ward-save → optional
// return how many dice “got through” at which damage

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');
button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
