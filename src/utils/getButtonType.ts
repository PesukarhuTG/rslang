import { ButtonType } from '../components/Button';

const getButtonType = (targetValue: number, value: number): ButtonType => {
  return value === targetValue ? 'primary' : value === -targetValue ? 'wrong' : 'bordered';
};

export default getButtonType;
