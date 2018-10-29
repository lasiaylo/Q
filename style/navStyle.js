import colors from "./colors";

const headerTitleStyle = {
  fontFamily: "Avenir-Book",
  fontSize: 35,
  fontWeight: "normal",
  textShadowColor: "rgba(0, 0, 0, 0.3)",
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 10
};

const headerTitleContainerStyle = {
  justifyContent: "center",
  alignContent: "center",
  marginLeft: -45
};

export default class navStyle {
  static get hostHeader() {
    return {
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.purple,
        elevation: null
      },
      headerTitleStyle: headerTitleStyle,
      headerTitleContainerStyle: headerTitleContainerStyle,
      headerTitle: "Host"
    };
  }

  static get listenHeader() {
    return {
      headerTintColor: colors.green,
      headerStyle: {
        backgroundColor: colors.gray,
        elevation: null
      },
      headerTitleStyle: headerTitleStyle,
      headerTitleContainerStyle: headerTitleContainerStyle,
      headerTitle: "Listen"
    };
  }
}
