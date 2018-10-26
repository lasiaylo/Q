import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { Button } from "native-base";
import style from "../style/style";
import { createStackNavigator } from "react-navigation";

export default class Start extends Component {
  // static navigationOptions = {
    
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
              <Button
                onPress={() => this.props.navigation.navigate("Choose")}
                rounded
                success
                block
                style={style.greenBtn}
              >
                <Text style={style.greenBtnText}>sign in with spotify</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

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
