import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { Button } from "native-base";
import style from "../style/style";
import { createStackNavigator } from "react-navigation";

export default class Choose extends Component{
  static navigationOptions = {
    
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
              <Button
                onPress={() => this.props.navigation.navigate("Home")}
                rounded
                success
                block
                style={style.greenBtn}
              >
                <Text style={style.greenBtnText}>go BACK</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

