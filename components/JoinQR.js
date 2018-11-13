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
import { Dimensions, Vibration } from "react-native";
import { BarCodeScanner, Permissions } from 'expo';

export default class JoinQR extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.state = {
      ready: false,
      hasCameraPermission: null
    };
    this.onScanned = this.onScanned.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onScanned({ data }) {
    console.log(data);
    this.props.done(data);
    Vibration.vibrate(80);
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
              <Icon name="md-close" />
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
              <BarCodeScanner
                onBarCodeScanned={this.onScanned}
                style={{ height: 200, width: 200 }}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              />
              <Button
                large
                iconLeft
                light
                style={{
                  backgroundColor: "#23AE54",
                  width: this.width - 30,
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
                onPress={() => this.setState({ ready: !this.state.ready })}
              >
                <Icon light name="md-camera" style={{ color: "white" }} />
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
                disabled
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
        {this.state.ready ? (
          <FloatingAction
            color={colors.white}
            onPressMain={this.props.done}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
            floatingIcon={require("../assets/icons/done_green.png")}
            iconWidth={25}
            iconHeight={25}
            distanceToEdge={20}
          />
        ) : (
          <FloatingAction
            color="#23AE54"
            disabled
            stye={{
              boxShadow: "none",
              elevation: 0,
              textShadowRadius: 0,
              shadowOffset: { height: 0, width: 0 },
              shadowOpacity: 0
            }}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
            floatingIcon={require("../assets/icons/done_dgreen.png")}
            iconWidth={25}
            iconHeight={25}
            distanceToEdge={20}
          />
        )}
      </Container>
    );
  }
}
