import { Config } from '../types';
import { districts } from './districts';
import { sampleSize, sample } from 'lodash';

export function getDistricts(config?: Config): string | string[] {
  return config ? sampleSize(districts, config.number) : sample(districts)!;
}
