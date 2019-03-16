import getRandomNumber from '../utils';
import { runGame } from '..';

const desc = 'What number is missing in this progression?';

const length = 10;
const game = () => {
  const start = getRandomNumber(100);
  const step = getRandomNumber(10);
  const missingIndex = getRandomNumber(10);
  let question = '';
  for (let index = 1; index <= length; index += 1) {
    if (index === missingIndex) {
      question = `${question} .. `;
    } else question = `${question} ${start + step * index} `;
  }
  const correct = `${start + step * missingIndex}`;

  return [question, correct.toString()];
};

export default () => runGame(desc, game);
