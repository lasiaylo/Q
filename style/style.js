import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const green = '#24D161';
const white = 'white';

export default StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50
  },
  titleText: {
    fontFamily: 'Glacial',
    fontSize: 101,
    color: green,
  },
  subRow: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 35
  },
  subText: {
    fontSize: 40,
    fontFamily: 'Avenir-Light',
    // padding: 80
  },
  fs: {
    width,
    height,
  },
  greenBtnText: {
    fontFamily: 'Avenir-Light',
    color: white,
    fontSize: 23,
    padding: 45
  },
  greenBtn: {
    backgroundColor: green,
    alignItems: 'center'
  }
});