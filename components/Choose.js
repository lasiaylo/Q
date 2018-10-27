import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import { Row, Grid, Col } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";
import { createStackNavigator } from "react-navigation";

const Choose = ({ navigation }) => (
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
        <Row size={1} style={style.center}>
          <Icon name="md-home" style={style.hostIcon} />
          <Button transparent vertical style={style.button}>
            <Text style={style.hostTop}>Host a</Text>
            <Text style={style.host}>Listening Party</Text>
          </Button>
        </Row>
        <Row size={1} style={style.center}>
          <Icon name="md-headset" style={style.listenerIcon} />
          <Button transparent vertical style={style.button}>
            <Text style={style.listenerTop}>Join a</Text>
            <Text style={style.listener}>Listening Party</Text>
          </Button>
        </Row>
      </Grid>
    </Content>
  </Container>
);

Choose.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Choose;
