import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";

const { width, height } = Dimensions.get("window");

const title = {
  family: "Glacial",
  size: 101
};

const header = {
  family: "Avenir-Light",
  size: 32
};

const btn = {
  family: "Avenir-Light",
  size: 23
};

const sublist = {
  family: "Avenir-Light",
  size: 14
};

export default StyleSheet.create({
  nowPlaying: {
    fontFamily: "Avenir-Light",
    color: colors.white,
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
    color: colors.green,
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
    color: colors.white,
    padding: 45
  },
  greenBtn: {
    backgroundColor: colors.green,
    alignItems: "center"
  },
  letsGo: {
    fontFamily: "Avenir-Light",
    color: colors.black,
    fontSize: 58,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  Hosted: {
    fontFamily: header.fontFamily,
    fontSize: header.fontSize,
    color: colors.white,
    backgroundColor: colors.purple
  },
  Listening: {
    fontFamily: header.fontFamily,
    fontSize: header.fontSize,
    color: colors.white,
    backgroundColor: colors.black
  },
  listSubtitle: {
    fontFamily: header.fontFamily,
    fontSize: 12
  },
  npHeader: {
    padding: 0,
    marginLeft: -10
  },
  qrBtn: {
    backgroundColor: colors.white
  },
  qrBtnText: {
    color: colors.gray,
    fontFamily: btn.family,
    fontSize: btn.size,
    marginLeft: 15,
    marginRight: 15
  },
  qrCode: {
    color: colors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 300,
    paddingTop: 45
  },
  qrHeader: {
    fontFamily: header.family,
    fontSize: header.size,
    color: colors.white,
    marginLeft: 10
  },
  qrPadding: {
    padding: 10
  },
  hostHeader: {
    backgroundColor: colors.purple
  },
  listenHeader: {
    backgroundColor: colors.gray
  },
  actionBtn: {
    position: "absolute",
    bottom: 20
  },
  white: {
    color: colors.white
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  marginTop10: {
    marginTop: 10
  },
  settingsHeader: {
    color: colors.white,
    marginRight: 20,
    marginLeft: 10,
    fontFamily: header.family,
    fontSize: header.size
  },
  settingsHeaderIcon: {
    color: colors.white,
    paddingTop: 5
  },
  settingsWhiteText: {
    color: colors.white,
    fontFamily: btn.family,
    fontSize: 18,
    marginLeft: 10,
    padding: 3
  },
  settingsSegment: {
    marginLeft: 10,
    alignItems: "stretch",
    flexDirection: "row"
  },
  simpleBtn: {
    backgroundColor: colors.black,
    marginTop: 15
  },
  simpleBtnText: {
    color: colors.white,
    fontFamily: btn.family,
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30
  },
  createBtn: {
    backgroundColor: colors.white,
    marginTop: 15
  },
  createBtnText: {
    color: colors.black,
    fontFamily: btn.family,
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30
  }
});
