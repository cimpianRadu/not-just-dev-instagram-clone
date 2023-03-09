import {TextStyle} from 'react-native';

const SIZE = {
  XS: 10,
  SM: 12,
  DEFAULT: 14,
  MD: 16,
  LG: 20,
  XLG: 24,
  XXLG: 30,
};

const WEIGHT: {[key: string]: TextStyle['fontWeight']} = {
  FULL: '900',
  BOLD: 'bold',
  NORMAL: 'normal',
  THIN: '400',
};

export default {SIZE, WEIGHT};
