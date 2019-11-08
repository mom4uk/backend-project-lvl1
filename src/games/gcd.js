
import {
  frame, randomInteger,
} from '..';

const descriptionTask = 'Find the greatest common divisor of given numbers.';

const getTaskAndCorrectAnswer = () => {
  const firstRandNum = randomInteger(1, 100);
  const secondRandNum = randomInteger(1, 100);
  const question = `${firstRandNum} ${secondRandNum}`;

  const getGreatestCommonDenom = (firstNum, secondNum) => {
    if (firstNum % secondNum === 0) {
      return secondNum;
    }
    return getGreatestCommonDenom(secondNum, firstNum % secondNum);
  };

  const correctAnswer = String(getGreatestCommonDenom(firstRandNum, secondRandNum));

  return [question, correctAnswer];
};
const startGameGcd = () => frame(descriptionTask, getTaskAndCorrectAnswer);
export default startGameGcd;
