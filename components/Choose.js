import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import { Row, Grid, Col } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";
import { createStackNavigator } from "react-navigation";
import navStyle from "../style/navStyle";
import colors from "../style/colors";

const styles = StyleSheet.create({
  letsGo: {
    fontFamily: "Avenir-Light",
    color: "black",
    fontFamily: "Avenir-Light",
    color: "black",
    fontSize: 58,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  host: {
    fontFamily: "Avenir-Light",
    color: colors.purple,
    fontSize: 30
  },
  hostTop: {
    fontFamily: "Avenir-Light",
    color: colors.purple,
    fontSize: 30,
    paddingRight: 107
  },
  listener: {
    fontFamily: "Avenir-Light",
    color: colors.green,
    fontSize: 30
  },
  listenerTop: {
    fontFamily: "Avenir-Light",
    color: colors.green,
    fontSize: 30,
    paddingRight: 107
  },
  hostIcon: {
    fontFamily: "Avenir-Light",
    color: colors.purple,
    fontSize: 50,
    padding: 15
  },
  listenerIcon: {
    fontFamily: "Avenir-Light",
    color: colors.green,
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
          <Grid style={styles.fs}>
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
              <Text style={styles.letsGo}> Let's go! </Text>
            </Row>
            <Row onPress={this.goHome("host")} size={1} style={styles.center}>
              <Icon
                name="md-home"
                style={styles.hostIcon}
                onPress={this.goHome("host")}
              />
              <Button
                transparent
                vertical
                style={styles.button}
                onPress={this.goHome("host")}
              >
                <Text uppercase={false} style={styles.hostTop}>
                  Host a
                </Text>
                <Text uppercase={false} style={styles.host}>
                  Listening Party
                </Text>
              </Button>
            </Row>
            <Row onPress={this.goHome("listen")} size={1} style={styles.center}>
              <Icon
                onPress={this.goHome("listen")}
                name="md-headset"
                style={styles.listenerIcon}
              />
              <Button
                onPress={this.goHome("listen")}
                transparent
                vertical
                style={styles.button}
              >
                <Text uppercase={false} style={styles.listenerTop}>
                  Join a
                </Text>
                <Text uppercase={false} style={styles.listener}>
                  Listening Party
                </Text>
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
