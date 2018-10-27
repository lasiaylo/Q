import React, { Component } from "react";
import { Container, Content } from "native-base";
import { StyleSheet } from "react-native";
import { Font } from "expo";
import { createStackNavigator } from "react-navigation";

import Start from "./components/Start";
import Choose from "./components/Choose";
import Home from './components/Home';

const RootStack = createStackNavigator(
  {
    Start,
    Choose,
    Home,
  },
  {
    initialRouteName: "Start",
    navigationOptions: {
      // BY DEFAULT header is hidden
      header: null
    }
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        "Avenir-Light": require("./assets/fonts/AvenirLTStd-Light.otf"),
        Glacial: require("./assets/fonts/GlacialIndifference-Regular.otf")
      });
      this.setState({ fontLoaded: !this.state.fontLoaded });
      console.log("fonts are loaded");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state);
    const { fontLoaded } = this.state;
    if (fontLoaded) return <Home />;
    return null;
  }
}
