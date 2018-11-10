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

export default class CreateLP extends Component {
  constructor(props) {
    super(props);
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.lpName = "New LP";
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: colors.gray
        }}
      >
        <Header style={{ paddingTop: -50 }} transparent>
          <Body style={{ paddingTop: -50 }}>
            <Text style={[style.nowPlaying, style.modalTitle]}>
              {this.lpName}
            </Text>
            <Icon name="md-create" style={[style.settingsHeaderIcon]} />
          </Body>
          <Right>
            <Button light transparent onPress={this.props.cancelClose}>
              <Icon name="close" />
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
                  onPress={this.props.done}
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
