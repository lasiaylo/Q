import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const green = "#24D161";
const purple = "#531EE3";
const dgray = "#181818";
const white = "white";

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
    fontFamily: "Glacial",
    fontSize: 101,
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
    fontFamily: "Avenir-Light",
    color: white,
    fontSize: 23,
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
  host: {
    fontFamily: "Avenir-Light",
    color: purple,
    fontSize: 30
  },
  hostTop: {
    fontFamily: "Avenir-Light",
    color: purple,
    fontSize: 30,
    paddingRight: 107
  },
  listener: {
    fontFamily: "Avenir-Light",
    color: green,
    fontSize: 30
  },
  listenerTop: {
    fontFamily: "Avenir-Light",
    color: green,
    fontSize: 30,
    paddingRight: 107
  },
  hostIcon: {
    fontFamily: "Avenir-Light",
    color: purple,
    fontSize: 50,
    padding: 15
  },
  listenerIcon: {
    fontFamily: "Avenir-Light",
    color: green,
    fontSize: 50,
    padding: 15
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  button: {
    justifyContent: "flex-start"
  }
});
