var current_cell_counter = 0;
var counter = 0;
var current_word = "";
var word = "APPLE";
var letters_in_solution = [word[0], word[1], word[2], word[3], word[4]];
var current_cell = document.getElementById(current_cell_counter);
var letters_written_in_current_word = ["", "", "", "", ""];
let pressedKey;

function handleLetter(letter) {
  pressedKey = letter.toUpperCase();
  current_word += pressedKey;
  letters_written_in_current_word[current_cell_counter] = pressedKey;
  current_cell.textContent = pressedKey;
  current_cell_counter += 1;
  current_cell = document.getElementById(current_cell_counter);
  counter += 1
  if (counter === 5) {
    console.log(current_word);
      if (current_word === word) {
          alert("Congratulations! You've guessed the word!");
      }
      current_word = "";
      counter = 0;
  }
}

document.addEventListener('keydown', function(event) {
  if (/^[a-zA-Z]$/.test(event.key)) {
    handleLetter(event.key);
  }
});

document.querySelectorAll('.key').forEach(function(button) {
  button.addEventListener('click', function() {
    handleLetter(button.textContent);
  });
});