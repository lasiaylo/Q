import React, { Component } from "react";
import { Font } from "expo";
import Start from "./components/Start";
import Choose from "./components/Choose";
import TestHome from "./components/TestHome";
import { createStackNavigator } from "react-navigation";

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
        TestHome: TestHome
      },
      {
        initialRouteName: "TestHome",
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
