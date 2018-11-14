import React, { Component } from "react";
import { Font } from "expo";
import { createStackNavigator } from "react-navigation";

import Start from "./components/Start";
import Choose from "./components/Choose";
import QHome from "./components/QHome";
import DashHome from "./components/DashHome";

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      userMode: "new"
    };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        "Avenir-Light": require("./assets/fonts/AvenirLTStd-Light.otf"),
        "Avenir-Book": require("./assets/fonts/AvenirLTStd-Book.otf"),
        Glacial: require("./assets/fonts/GlacialIndifference-Regular.otf")
      });
      this.setState({ fontLoaded: !this.state.fontLoaded });
    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const { fontLoaded } = this.state;
    RootStack = createStackNavigator(
      {
        Start: Start,
        Choose: Choose,
        QHome: QHome,
        DashHome: DashHome
      },
      {
        initialRouteName: "Start",
        navigationOptions: {
          headerMode: "screen",
          header: null
        },
        initialRouteParams: {
          userMode: this.state.userMode
        }
      }
    );
    if (fontLoaded) return <RootStack />;
    return null;
  }
}
