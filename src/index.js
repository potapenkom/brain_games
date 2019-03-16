import readlineSync from 'readline-sync';

import runEvenGame from './games/even';
import runCalcGame from './games/calc';
import runGCDGame from './games/gcd';
import runBalanceGame from './games/balance';
import runProgressionGame from './games/progression';
import runPrimeGame from './games/prime';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const runGame = (desc, game) => {
  console.log(`${desc}`);
  const iter = (gameFunc, acc) => {
    if (acc === 3) {
      console.log('Congratulations!');
      return null;
    }

    const games = game();
    const question = games[0];
    const correctAnswer = games[1];
    const userAnswer = getUserAnswer(question);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(gameFunc, acc + 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  };
  return iter(game, 0);
};

export const chooseTheGame = () => {
  const user = askUserName();
  console.log(`Hello, ${user}!\n`);
  console.log('Choose the game:');
  console.log('1. Even number');
  console.log('2. Calculate the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Balance the number');
  console.log('5. Guess missing number');
  console.log('6. Prime number');
  console.log('0. Exit');
  const choice = readlineSync.question('Your choice: ');
  switch (choice) {
    case '1': runEvenGame(); break;
    case '2': runCalcGame(); break;
    case '3': runGCDGame(); break;
    case '4': runBalanceGame(); break;
    case '5': runProgressionGame(); break;
    case '6': runPrimeGame(); break;
    case '0': break;
    default:
      console.log('No such option. Choose again, please.');
      return chooseTheGame();
  }
  return null;
};
