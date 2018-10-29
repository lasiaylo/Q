import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import { Row, Grid, Col } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";
import { createStackNavigator } from "react-navigation";
import navStyle from "../style/navStyle";

export default class Choose extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  goHome(userMode) {
    upper = this;
    return function() {
      upper.navigation.navigate("Home", {
        qHeader: navStyle[userMode + "Header"],
        userMode: userMode
      });
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Grid style={style.fs}>
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                padding: 75,
                marginTop: 50
              }}
              size={1}
            >
              <Text style={style.letsGo}> Let's go! </Text>
            </Row>
            <Row onPress={this.goHome("host")} size={1} style={style.center}>
              <Icon
                name="md-home"
                style={style.hostIcon}
                onPress={this.goHome("host")}
              />
              <Button
                transparent
                vertical
                style={style.button}
                onPress={this.goHome("host")}
              >
                <Text style={style.hostTop}>Host a</Text>
                <Text style={style.host}>Listening Party</Text>
              </Button>
            </Row>
            <Row onPress={this.goHome("listen")} size={1} style={style.center}>
              <Icon
                onPress={this.goHome("listen")}
                name="md-headset"
                style={style.listenerIcon}
              />
              <Button
                onPress={this.goHome("listen")}
                transparent
                vertical
                style={style.button}
              >
                <Text style={style.listenerTop}>Join a</Text>
                <Text style={style.listener}>Listening Party</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

Choose.propTypes = {
  navigation: PropTypes.object.isRequired
};
