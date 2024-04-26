const words = ["casa", "banana", "computador", "elefante", "girafa"];
let currentWordIndex = 0;
let currentWord = words[currentWordIndex];
 
const wordContainer = document.getElementById("word-container");
const inputVowels = document.getElementById("input-vowels");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
 
// Exibe a palavra a ser completada
function displayWord() {
  wordContainer.textContent = currentWord.replace(/[aeiou]/gi, "_");
}
 
// Verifica se as vogais inseridas estão corretas
function checkVowels() {
  const userInput = inputVowels.value.toLowerCase();
  if (userInput === currentWord.replace(/[^aeiou]/gi, "")) {
    result.textContent = "Correto! Parabéns!";
  } else {
    result.textContent = "Incorreto. Tente novamente.";
  }
}
 
// Avança para a próxima palavra
function nextWord() {
  currentWordIndex++;
  if (currentWordIndex >= words.length) {
    currentWordIndex = 0;
  }
  currentWord = words[currentWordIndex];
  displayWord();
  inputVowels.value = "";
  result.textContent = "";
}
 
displayWord();
checkBtn.addEventListener("click", checkVowels);