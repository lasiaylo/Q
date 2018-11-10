import React, { Component } from "react";
import style from "../style/style";
import colors from "../style/colors";
import {
  Container,
  Header,
  Text,
  Right,
  Button,
  Icon,
  Content,
  Grid,
  Row,
  Segment,
  Col,
  Body
} from "native-base";
import { FloatingAction } from "react-native-floating-action";
import { Dimensions } from "react-native";

export default class JoinQR extends Component {
  constructor(props) {
    super(props);
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: colors.green
        }}
      >
        <Header style={{ paddingTop: -50 }} transparent>
          <Body style={{ paddingTop: -50 }}>
            <Text style={[style.nowPlaying, style.modalTitle]}>
              Join a party
            </Text>
          </Body>
          <Right>
            <Button light transparent onPress={this.props.cancelClose}>
              <Icon name="close" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid stye={{ flex: 1 }}>
            <Row
              size={1}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                padding: 5
              }}
            >
              <Button
                large
                iconLeft
                light
                style={{
                  backgroundColor: "#23AE54",
                  width: this.width - 30,
                  alignItems: "center"
                }}
              >
                <Icon light name="camera" style={{ color: "white" }} />
                <Text
                  uppercase={false}
                  style={[style.nowPlaying, { fontSize: 25 }]}
                >
                  Scan Code
                </Text>
              </Button>
            </Row>
            <Row
              size={0.5}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                padding: 5
              }}
            >
              <Text
                uppercase={false}
                style={[style.nowPlaying, { fontSize: 28 }]}
              >
                or
              </Text>
            </Row>
            <Row
              size={1}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                padding: 5
              }}
            >
              <Button
                large
                iconLeft
                light
                style={{
                  backgroundColor: "#23AE54",
                  width: this.width - 30,
                  alignItems: "center"
                }}
              >
                <Text
                  uppercase={false}
                  style={[style.nowPlaying, { fontSize: 25 }]}
                >
                  Type Code
                </Text>
              </Button>
            </Row>
            <Row size={2} />
          </Grid>
        </Content>
        <FloatingAction
          color={colors.white}
          onPressMain={this.props.done}
          showBackground={false}
          overlayColor="rgba(0, 0, 0, 0.0)"
          floatingIcon={require("../assets/icons/done.png")}
          iconWidth={25}
          iconHeight={25}
          distanceToEdge={20}
        />
      </Container>
    );
  }
}
