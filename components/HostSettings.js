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
  Col
} from "native-base";

export default class HostSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anonSelected: true,
      namedSelected: false,
      singleSelected: true,
      silentSelected: false,
      hostPauseSelected: true,
      ffaPauseSelected: false,
      hostSkipSelected: true,
      ffaSkipSelected: false,
      chronSelected: true,
      popSelected: false
    };
  }

  render() {
    return (
      <Container>
        <Header style={[style.listenHeader]}>
          <Text style={[style.settingsHeader]}>LP NAME</Text>
          <Icon name="md-create" style={[style.settingsHeaderIcon]} />
          <Right>
            <Button transparent onPress={this.props.action}>
              <Icon name="md-close" style={[style.white]} />
            </Button>
          </Right>
        </Header>
        <Content style={[style.listenHeader]}>
          <Grid>
            <Row>
              <Text style={[style.settingsWhiteText, style.marginTop10]}>
                Listener Privacy
              </Text>
            </Row>
            <Row>
              <Col>
                <Segment style={[style.settingsSegment]}>
                  <Button
                    first
                    style={{
                      backgroundColor: this.state.anonSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.anonSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        anonSelected: !this.state.anonSelected,
                        namedSelected: !this.state.namedSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.anonSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Anon Listeners
                    </Text>
                  </Button>
                  <Button
                    last
                    style={{
                      backgroundColor: this.state.namedSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.namedSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        anonSelected: !this.state.anonSelected,
                        namedSelected: !this.state.namedSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.namedSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Named Listeners
                    </Text>
                  </Button>
                </Segment>
              </Col>
            </Row>

            <Row>
              <Text style={[style.settingsWhiteText, style.marginTop10]}>
                Playback
              </Text>
            </Row>
            <Row>
              <Col>
                <Segment style={[style.settingsSegment]}>
                  <Button
                    first
                    style={{
                      backgroundColor: this.state.singleSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.singleSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        singleSelected: !this.state.singleSelected,
                        silentSelected: !this.state.silentSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.singleSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Single Speaker
                    </Text>
                  </Button>
                  <Button
                    last
                    style={{
                      backgroundColor: this.state.silentSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.silentSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        singleSelected: !this.state.singleSelected,
                        silentSelected: !this.state.silentSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.silentSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Silent Disco
                    </Text>
                  </Button>
                </Segment>
              </Col>
            </Row>

            <Row>
              <Text style={[style.settingsWhiteText, style.marginTop10]}>
                Pausing
              </Text>
            </Row>
            <Row>
              <Col>
                <Segment style={[style.settingsSegment]}>
                  <Button
                    first
                    style={{
                      backgroundColor: this.state.hostPauseSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.hostPauseSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        hostPauseSelected: !this.state.hostPauseSelected,
                        ffaPauseSelected: !this.state.ffaPauseSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.hostPauseSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Host-only
                    </Text>
                  </Button>
                  <Button
                    last
                    style={{
                      backgroundColor: this.state.ffaPauseSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.ffaPauseSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        hostPauseSelected: !this.state.hostPauseSelected,
                        ffaPauseSelected: !this.state.ffaPauseSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.ffaPauseSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      FFA
                    </Text>
                  </Button>
                </Segment>
              </Col>
            </Row>

            <Row>
              <Text style={[style.settingsWhiteText, style.marginTop10]}>
                Skipping
              </Text>
            </Row>
            <Row>
              <Col>
                <Segment style={[style.settingsSegment]}>
                  <Button
                    first
                    style={{
                      backgroundColor: this.state.hostSkipSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.hostSkipSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        hostSkipSelected: !this.state.hostSkipSelected,
                        ffaSkipSelected: !this.state.ffaSkipSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.hostSkipSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Host-only
                    </Text>
                  </Button>
                  <Button
                    last
                    style={{
                      backgroundColor: this.state.ffaSkipSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.ffaSkipSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        hostSkipSelected: !this.state.hostSkipSelected,
                        ffaSkipSelected: !this.state.ffaSkipSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.ffaSkipSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      FFA
                    </Text>
                  </Button>
                </Segment>
              </Col>
            </Row>

            <Row>
              <Text style={[style.settingsWhiteText, style.marginTop10]}>
                Queue Order
              </Text>
            </Row>
            <Row>
              <Col>
                <Segment style={[style.settingsSegment]}>
                  <Button
                    first
                    style={{
                      backgroundColor: this.state.chronSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.chronSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        chronSelected: !this.state.chronSelected,
                        popSelected: !this.state.popSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.chronSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Chronological
                    </Text>
                  </Button>
                  <Button
                    last
                    style={{
                      backgroundColor: this.state.popSelected
                        ? colors.white
                        : colors.black,
                      borderColor: this.state.popSelected
                        ? colors.white
                        : colors.black,
                      width: "45%",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() =>
                      this.setState({
                        chronSelected: !this.state.chronSelected,
                        popSelected: !this.state.popSelected
                      })
                    }
                  >
                    <Text
                      uppercase={false}
                      style={{
                        color: this.state.popSelected
                          ? colors.black
                          : colors.white,
                        textAlign: "center",
                        fontFamily: "Avenir-Light"
                      }}
                    >
                      Popularity
                    </Text>
                  </Button>
                </Segment>
              </Col>
            </Row>
            <Row>
              <Col style={[style.center]}>
                <Button rounded style={[style.simpleBtn]}>
                  <Text uppercase={false} style={[style.simpleBtnText]}>
                    Simple
                  </Text>
                </Button>
              </Col>
              <Col style={[style.center]}>
                <Button rounded style={[style.createBtn]}>
                  <Text uppercase={false} style={[style.createBtnText]}>
                    Create!
                  </Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
