import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import style from "../style/style";
import { createStackNavigator, header } from "react-navigation";
import NowPlaying from "./NowPlaying";

export default class TestHome extends Component {
  constructor(props) {
    super(props);
    um = this.props.navigation.state.params.userMode;
    // change appearance according to user state
    this.state = { userMode: um };
    console.log(this.state);
    this.themeScreen();
  }

  themeScreen() {
    const { userMode } = this.state;

    if (userMode.includes("host")) {
      this.props.navigation.setParams({
        headerTitle: "b",
        headerTintColor: style.white,
        headerStyle: {
          backgroundColor: style.purple,
          elevation: null
        }
      });
    } else {
      this.props.navigation.setParams({
        headerTitle: "a",
        headerTintColor: style.green,
        headerStyle: {
          backgroundColor: style.dgray,
          elevation: null
        }
      });
    }
  }

  //   // override header visibility
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    // REFACTOR WITH NAVIGATION PARAMS
    return {
      header: header,
      headerTitle: params.headerStyle,
      headerTintColor: params.headerTintColor,
      headerStyle: params.headerStyle,
      headerTitleStyle: {
        fontFamily: "Avenir-Book",
        fontSize: 35,
        fontWeight: "normal",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10
      },
      headerTitleContainerStyle: {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: -45
      }
    };
  };

  render() {
    return (
      <Container>
        <NowPlaying navigation={this.navigation} />
        <Content>
          <Grid style={style.fs}>
            <Row style={style.centerRow} size={1.75}>
              <Text style={style.letsGo}> test home page </Text>
            </Row>
            <Row style={style.titleRow} size={1} />
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center"
              }}
              size={1.75}
            />
          </Grid>
        </Content>
      </Container>
    );
  }

  getTheme() {}

  toggleMode() {
    const { userMode } = this.state;
    if (userMode === "new") {
      this.setState({ userMode: "listen" });
    } else if (userMode === "listen") {
      this.setState({ userMode: "host" });
    } else if (userMode === "listen") {
      this.setState({ userMode: "new" });
    }
  }
}

TestHome.propTypes = {
  navigation: PropTypes.object.isRequired
};
