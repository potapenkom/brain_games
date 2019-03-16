import getRandomNumber from '../utils';
import { runGame } from '..';

const desc = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};
const game = () => {
  const question = getRandomNumber(100);
  const correct = (isPrime(getRandomNumber)) ? 'yes' : 'no';
  return [question, correct];
};

export default () => runGame(desc, game);
