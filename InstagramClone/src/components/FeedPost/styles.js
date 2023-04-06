import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  post: {
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.WEIGHT.BOLD,
    color: COLORS.BLACK,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
  boldLink: {
    fontWeight: fonts.WEIGHT.BOLD,
  },
});
