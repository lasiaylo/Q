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
  modalTitle: {
    fontWeight: "lighter",
    fontSize: 35
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
  hostHeader: {
    backgroundColor: colors.purple
  },
  listenHeader: {
    backgroundColor: colors.gray
  },
  actionBtn: {
    position: "absolute",
    bottom: 20
  }
});
