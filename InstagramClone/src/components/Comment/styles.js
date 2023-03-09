import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  commentText: {
    color: COLORS.BLACK,
    flex: 1,
    marginHorizontal: 5,
  },
  comment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldLink: {
    fontWeight: fonts.WEIGHT.BOLD,
  },
  icon: {
    marginHorizontal: 5,
  },
});
