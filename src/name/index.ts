import { Config } from '../types';
import { firstNames, lastNames } from './names';
import { sampleSize, sample } from 'lodash';

export function getFirstNames(config?: Config): string | string[] {
  if (!config || config.number === 1) {
    return sample(firstNames)!;
  } else return sampleSize(firstNames, config.number);
}

export function getLastNames(config?: Config): string | string[] {
  if (!config || config.number === 1) {
    return sample(lastNames)!;
  } else return sampleSize(lastNames, config.number);
}

export function getFullNames(config?: Config): string | string[] {
  if (!config || config.number === 1) {
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  } else {
    let fullNames: string[] = [];
    for (let i = 0; i < config.number; i++) {
      fullNames.push(
        `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
          lastNames[Math.floor(Math.random() * lastNames.length)]
        }`
      );
    }
    return fullNames;
  }
}
