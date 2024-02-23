import { getRandomDate } from './date';

export interface Output {
  age: number;
  dob?: Date;
}

export function getRandomAge(withDateOfBirth?: boolean): Output {
  const dob = getRandomDate(new Date(1920, 0, 1), new Date());
  const now = new Date();

  const diffInMilliSeconds = now.getTime() - dob.getTime();
  const diffInYears = diffInMilliSeconds / 1000 / 60 / 60 / 24 / 365.25;
  const age = Math.abs(Math.round(diffInYears));

  return {
    age,
    ...(withDateOfBirth && { dob }),
  };
}
