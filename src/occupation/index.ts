import { Config } from '../types';
import { occupations } from './occupations';
import { sampleSize } from 'lodash';

export function getOccupations(config?: Config): string | string[] {
  return !config || config.number === 1
    ? occupations[Math.floor(Math.random() * occupations.length)]
    : sampleSize(occupations, config.number);
}
