import getRandomNumber from '../utils';
import { runGame } from '..';

const desc = 'Balance the given number.';

const getBalancedNumber = (num) => {
  const numToArr = num.toString().split('').sort();
  const iter = (arr) => {
    const a = parseInt(arr.slice(0), 10);
    const b = parseInt(arr.slice(-1), 10);
    if (b - a < 2) return arr;
    const newArr = [b - 1].concat(arr.slice(1, -1)).concat(a + 1).sort();
    return iter(newArr);
  };
  return iter(numToArr).join('');
};

const geme = () => {
  const question = getRandomNumber(10000);
  const correct = getBalancedNumber(question);
  return [question, correct];
};

export default () => runGame(desc, geme);
