import getRandomNumber from '../utils';
import { runGame } from '..';

const desc = 'Find the greatest common divisor of given numbers.';
const findGcd = (first, second) => {
  const min = Math.min(first, second);
  const max = Math.max(first, second);
  if (min === 0) {
    return max;
  }
  return findGcd(min, max % min);
};

const game = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correct = findGcd(firstNum, secondNum);
  return [question, correct.toString()];
};

export default () => runGame(desc, game);
