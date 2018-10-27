import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const black = 'black';
const green = '#24D161';
const gray = '#181818';
const purple = '#531EE3';
const white = 'white';

const title = {
  family: 'Glacial',
  size: 101,
};

const header = {
  family: 'Avenir-Light',
  size: 32,
};

const btn = {
  family: 'Avenir-Light',
  size: 23,
};

const sublist = {
  family: 'Avenir-Light',
  size: 14,
};


export default StyleSheet.create({
  nowPlaying: {
    fontFamily: "Avenir-Light",
    color: white,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  songText: {
    fontSize: 29
  },
  artistText: {
    fontSize: 21,
    opacity: 0.73
  },
  titleRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50
  },
  titleText: {
    fontFamily: title.family,
    fontSize: title.size,
    color: green,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  subRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 35
  },
  subText: {
    fontSize: 40,
    fontFamily: "Avenir-Light"
  },
  fs: {
    width,
    height
  },
  greenBtnText: {
    fontFamily: btn.family,
    fontSize: btn.size,
    color: white,
    padding: 45
  },
  greenBtn: {
    backgroundColor: green,
    alignItems: "center"
  },
  letsGo: {
    fontFamily: "Avenir-Light",
    color: "black",
    fontSize: 58,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  Hosted: {
    fontFamily: header.fontFamily,
    fontSize: header.fontSize,
    color: white,
    backgroundColor: purple,
  },
  Listening: {
    fontFamily: header.fontFamily,
    fontSize: header.fontSize,
    color: white,
    backgroundColor: black
  },
  listSubtitle: {
    fontFamily: header.fontFamily,
    fontSize: 12,
  }
});
