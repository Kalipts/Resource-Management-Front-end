import { validateEmail, validatePass } from '../../../utils/validate';

export const validateForm = (
  setError,
  firstName,
  lastName,
  email,
  password,
  jobtitle,
  department,
) => {
  if (firstName === '') {
    setError('Invalid first lame');
    return 0;
  }
  if (lastName === '') {
    setError('Invalid last name');
    return 0;
  }
  if (!validateEmail(email)) {
    setError('Invalid email address');
    return 0;
  }
  if (!validatePass(password)) {
    setError('Invalid password');
    return 0;
  }
  if (jobtitle === undefined) {
    setError('Invalid job title');
    return 0;
  }
  if (department === undefined) {
    setError('Invalid department');
    return 0;
  }
  return 1;
};
