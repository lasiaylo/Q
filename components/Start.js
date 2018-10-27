import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";

const Start = ({ navigation }) => (
  <Container>
    <Content>
      <Grid style={style.fs}>
        <Row style={style.titleRow} size={1.75}>
          <Text style={style.titleText}> aux </Text>
        </Row>
        <Row style={style.titleRow} size={1}>
          <Grid>
            <Row style={style.subRow} size={1}>
              <Text style={style.subText}>shared</Text>
            </Row>
            <Row style={style.subRow} size={1}>
              <Text style={style.subText}>listening</Text>
            </Row>
            <Row style={[style.subRow, style.lastRow]} size={1}>
              <Text style={style.subText}>experiences</Text>
            </Row>
          </Grid>
        </Row>
        <Row
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center"
          }}
          size={1.75}
        >
          <QButton
            onPress={() => navigation.navigate("Choose")}
            type="green"
          >
            sign in with spotify
          </QButton>
        </Row>
      </Grid>
    </Content>
  </Container>
);


Start.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Start;
// const appStack = createStackNavigator(
//   {
//     Start: {
//       screen: Start
//     }
//   },
//   {
//     headerMode: "screen"
//   }
// );
