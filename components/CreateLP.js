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
  Body,
  Title,
  Left,
  Input
} from "native-base";
import { FloatingAction } from "react-native-floating-action";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class CreateLP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyName: "Nameless Queue",
      tempName: "",
      editing: false
    };
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: colors.gray
        }}
      >
        <Header transparent>
          <Left style={{ minWidth: width - 150 }}>
            <Row>
              {this.state.editing ? (
                <Input
                  placeholder={this.state.partyName}
                  style={[style.nowPlaying, { color: "white", fontSize: 30 }]}
                  onEndEditing={() => {
                    this.setState({ partyName: this.state.tempName });
                  }}
                  onChangeText={text => {
                    this.setState({ tempName: text });
                  }}
                />
              ) : (
                <Title
                  style={{
                    padding: 10,
                    paddingTop: -30
                  }}
                >
                  <Text style={[style.nowPlaying, style.modalTitle]}>
                    {this.state.partyName}
                  </Text>
                </Title>
              )}
              <Button
                onPress={() => {
                  if (this.state.editing) {
                    this.setState({ partyName: this.state.tempName });
                  } else {
                    this.setState({ tempName: this.state.partyName });
                  }
                  this.setState({ editing: !this.state.editing });
                }}
                icon
                light
                transparent
                style={{ paddingBottom: 20 }}
              >
                <Icon
                  name={this.state.editing ? "checkmark" : "md-create"}
                  style={[style.settingsHeaderIcon]}
                />
              </Button>
            </Row>
          </Left>
          <Right>
            <Button transparent onPress={this.props.cancelClose}>
              <Icon name="md-close" style={[style.white]} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid stye={{ flex: 1 }}>
            <Row>
              <Col style={[style.center]}>
                <Button rounded style={[style.simpleBtn]}>
                  <Text
                    uppercase={false}
                    style={[style.simpleBtnText, { fontSize: 17 }]}
                  >
                    Advanced
                  </Text>
                </Button>
              </Col>
              <Col style={[style.center]}>
                <Button
                  rounded
                  style={[style.createBtn]}
                  onPress={() => this.props.done(this.state.partyName)}
                >
                  <Text
                    uppercase={false}
                    style={[style.createBtnText, { fontSize: 17 }]}
                  >
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

export default CreateLP;
