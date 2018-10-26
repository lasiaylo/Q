import React, { Component } from "react";
import { Container, Content } from "native-base";
import { StyleSheet } from "react-native";
import { Font } from "expo";
import Start from "./components/Start";
import { createStackNavigator } from "react-navigation";

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
      this.setState({ fontLoaded: true });
      console.log("fonts are loaded");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { fontLoaded } = this.state;
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  // OAuth: OAuthScreen,
  // Choose: ChooseScreen,
});

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Start />
        </Content>
      </Container>
    );
  }
}