import { sample } from 'lodash';

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export function getGender(): Gender {
  return sample(Object.values(Gender))!;
}
