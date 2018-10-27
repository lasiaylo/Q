import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";
import { createStackNavigator, header } from "react-navigation";
import NowPlaying from "./NowPlaying";

export default class TestHome extends Component {
  constructor(props) {
    super(props);
    um = this.props.navigation.state.params.userMode;
    // change appearance according to user state
    this.state = { userMode: um };
  }

  // override header visibility
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      header: header,
      headerTitle: "fuck me raw daddy"
    };
    // const { userMode } = this.state;

    // switch (userMode) {
    //   case "new":
    //     console.log("i see new");
    //     break;
    //   case "listen_inactive":
    //     console.log("listen_inactive");
    //     break;
    //   case "listen_playing":
    //     console.log("listen_playing");
    //     break;
    //   case "host_inactive":
    //     console.log("host_inactive");
    //     break;
    //   case "host_playing":
    //     console.log("host_playing");
    //     break;
    // }
  };

  render() {
    return (
      <Container>
        <NowPlaying />
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
            >
              <QButton onPress={this.toggleMode()} type="green">
                switch mode
              </QButton>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }

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
