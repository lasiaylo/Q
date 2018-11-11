import style from "../../style/style";
import { Row, Grid, Col } from "react-native-easy-grid";
import { Button, Icon, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../style/colors";

const styles = StyleSheet.create({
  purple: {
    fontFamily: "Avenir-Light",
    color: colors.purple,
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  purpleTop: {
    fontFamily: "Avenir-Light",
    color: colors.purple,
    fontSize: 30,
    paddingRight: 107,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  green: {
    fontFamily: "Avenir-Light",
    color: colors.green,
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  greenTop: {
    fontFamily: "Avenir-Light",
    color: colors.green,
    fontSize: 30,
    paddingRight: 107,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  purpleIcon: {
    fontFamily: "Avenir-Light",
    color: colors.purple,
    fontSize: 50,
    padding: 15,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  greenIcon: {
    fontFamily: "Avenir-Light",
    color: colors.green,
    fontSize: 50,
    padding: 15,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
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

const ChooseRowButton = ({ icon, onPress, color, upperText, lowerText }) => (
  <Row size={1} style={styles.center} onPress={() => onPress()}>
    <Icon
      name={`${icon}`}
      style={styles[`${color}Icon`]}
      onPress={() => onPress()}
    />
    <Button
      transparent
      vertical
      style={styles.button}
      onPress={() => onPress()}
    >
      <Text uppercase={false} style={styles[`${color}Top`]}>
        {`${upperText}`}
      </Text>
      <Text uppercase={false} style={styles[`${color}`]}>
        {`${lowerText}`}
      </Text>
    </Button>
  </Row>
);

export default ChooseRowButton;
