// Prompt

  const prompt = require('prompt-sync')({ sigint: true });

  function pickingDciStudent() {
    const students = [
      "Kostas", "Issa", "Omolara", "Tyhe", "Ilker",
      "Ibrahim", "Katada", "Jamilya", "Ashraf"
    ];
  
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomName = students[randomIndex];
    
    console.log(`Randomly chosen name: ${randomName}`);
  }
  
  const userInput = prompt("Press any key to randomly pick a DCI student.");
  if (userInput !== null) {
    pickingDciStudent();
  }

  let findUser = prompt(`What's your name: `);


  let rulesGame = "\x1b[34m The Game goes like this: First of all select your level, if you pick up the easy one you will have 15 attempts otheriwise your attempts are 6. When you enter your 4-digits guess code, the computer compares it with a secret code and gives you two clues: numbers of bulls and cows. What does this mean? A bull is a digit which you guessed and it is in the right position(index). And a cow means  that the digit is correct but in the wrong position(index). For example, if the secret code is 2056 and you ask 9516, an answer will be one bull and one cow (but you won't know which digit is a bull and which digit is a cow). That's all! Have fun!!\n\x1b[0m";




  function rulesQuestion (){

    let question = prompt(`Do you know the rules of the game ${findUser}? Y/N: `);
    if (question === "N"){
      console.log('\x1b[34m\n----- Game Explained-----\n\x1b[0m');
      console.log(`${rulesGame}`)
    }else{
      console.log('\x1b[34m\n-----Ready to play-----\n\x1b[0m');
      console.log(`Let's do it ${findUser}`)
    }
  }
  rulesQuestion()

  
  
  const levels = ["1", "2"]

  const level = prompt(`Please select the level 1 for easy 2 for advanced: `)
  
  if(!levels.includes(level)){
    console.log("Please  choose the level")
    return;
  }
 
  

  
  

  let  guess = "";
  function updateGuess (){

   guess = prompt('Guess the number: ');
  
  }

  
  
  
   function randomMessage (){
    let cheerMessage = ["\x1b[34m\nI know you can do that, try harder\n\x1b[0m", "\x1b[35m\nNext guess is definetly the right one\n\x1b[0m", "\x1b[31m\nIt's just a matter of time\n\x1b[0m", "\x1b[36m\nDon't give up!!!\n\x1b[0m", "\x1b[31m\nnot even even Einstein was able to finish it before this point\n\x1b[0m"]
   const randomText = [Math.floor(Math.random() * cheerMessage.length)]
    const message = cheerMessage[randomText]
    return message
 }
  


  function generateSecretNumbers() {
    let secretVault = "";
  
    while (secretVault.length < 4) {
      const index = Math.floor(Math.random() * 10).toString();
      if (!secretVault.includes(index)) {
        secretVault += index;
      }
    }
  
    return secretVault;
  }

  const secretNumber = generateSecretNumbers();

function compare (guess, secretNumber){
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secretNumber.length; i++){
    for (let j = 0; j < guess.length; j++){
    if(secretNumber[i] === guess[j]){
      if (i === j){
      bulls++
    }else {
      cows++
    }
    } }}

  return {bulls, cows}
}

let attempts = 0;
let limiter = level === "1" ? 15 : 6;
console.log("You have", limiter, "attempts")

while(attempts < limiter){
  if(guess === secretNumber){
    console.log(`Congratulations ${findUser}, you have guessed the number ${secretNumber} in ${attempts} attempts.`)   
    return
  }
  
  else{
    attempts++
    updateGuess()
    const result = compare(guess, secretNumber)
      console.log(`Hint: Bulls: ${result.bulls} Cows: ${result.cows}`);
  }
  if(level === "1" && attempts > 5 || level === "2" && attempts > 3 && attempts < limiter){
    const funMessage = randomMessage()
    console.log(funMessage)
  }
  if(guess?.toString().length !== 4 || isNaN(guess)){
    console.log(`Invalid input`)
    return 
   }
  
}


if(attempts >= limiter){
  console.log("\x1b[34m\n----------Game Over---------\n\x1b[0m")
}



