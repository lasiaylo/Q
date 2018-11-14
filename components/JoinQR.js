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
import { Dimensions, Vibration, TouchableWithoutFeedback } from "react-native";
import { BarCodeScanner, Permissions } from "expo";

export default class JoinQR extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.state = {
      ready: false,
      hasCameraPermission: null,
      scanning: false
    };
    this.onScanned = this.onScanned.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  onScanned({ data }) {
    console.log("SCANNED THIS VALUE: " + data);
    this.props.done(data);
    Vibration.vibrate(80);
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0)"
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            if (!this.state.scanning) {
              this.props.cancelClose();
            }
          }}
        >
          <Container
            style={{
              minHeight: this.height / 2,
              backgroundColor: "rgba(0, 0, 0, 0)"
            }}
          >
            {this.state.scanning && (
              <BarCodeScanner
                onBarCodeScanned={this.onScanned}
                style={{ height: this.height / 2, width: this.width }}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
              />
            )}
          </Container>
        </TouchableWithoutFeedback>
        <Container
          style={{
            minHeight: this.height / 2,
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
                <Button
                  large
                  iconLeft
                  light
                  style={{
                    backgroundColor: this.state.scanning ? "white" : "#23AE54",
                    width: this.width - 30,
                    alignItems: "center",
                    justifyContent: "flex-start"
                  }}
                  onPress={() =>
                    this.setState({ scanning: !this.state.scanning })
                  }
                >
                  <Icon
                    light
                    name="md-camera"
                    style={{ color: this.state.scanning ? "#23AE54" : "white" }}
                  />
                  <Text
                    uppercase={false}
                    style={[
                      style.nowPlaying,
                      {
                        fontSize: 25,
                        color: this.state.scanning ? "#23AE54" : "white"
                      }
                    ]}
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
      </Container>
    );
  }
}
