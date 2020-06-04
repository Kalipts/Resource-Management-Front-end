import validator from 'validator';
import { isString } from './Util';

export const validatePass = (str = '') => {
  if (!isString(str)) {
    return false;
  }
  const strRegex = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  const matchRegStr = str.match(strRegex);
  const isValidateStrname = matchRegStr !== null;
  return isValidateStrname;
};
export const validateEmail = (str = '') => validator.isEmail(str);
