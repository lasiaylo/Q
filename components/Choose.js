import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";
import { createStackNavigator } from "react-navigation";

const Choose = ({ navigation }) => (
  <Container>
    <Content>
      <Grid style={style.fs}>
        <Row style={style.centerRow} size={1.75}>
          <Text style={style.letsGo}> Let's go! </Text>
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
          <QButton type="green">go to test</QButton>
        </Row>
      </Grid>
    </Content>
  </Container>
);

Choose.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Choose;
