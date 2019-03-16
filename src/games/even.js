import getRandomNumber from '../utils';
import { runGame } from '..';


const desc = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => !(number % 2);
const game = () => {
  const question = getRandomNumber(10000);
  const correct = (isEven(getRandomNumber)) ? 'no' : 'yes';
  return [question, correct];
};

export default () => runGame(desc, game);
