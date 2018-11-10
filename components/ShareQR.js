import React, { Component } from "react";
import style from "../style/style";
import {
  Container,
  Header,
  Text,
  Right,
  Button,
  Icon,
  Content,
  Grid,
  Row
} from "native-base";

export default class ShareQR extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header style={[style.listenHeader]}>
          <Text style={[style.qrHeader]}>Join LP NAME</Text>
          <Right>
            <Button transparent onPress={this.props.action}>
              <Icon name="md-close" style={[style.white]} />
            </Button>
          </Right>
        </Header>
        <Content style={[style.listenHeader]}>
          <Grid>
            <Row style={[style.center]}>
              <Icon name="md-qr-scanner" style={[style.qrCode]} />
            </Row>
            <Row style={[style.center]}>
              <Text style={[style.qrHeader]}>Code Name</Text>
            </Row>
            <Row style={[style.qrPadding]}>
              <Right style={[style.qrPadding]}>
                <Button
                  rounded
                  style={[style.qrBtn]}
                  onPress={this.props.action}
                >
                  <Text style={[style.qrBtnText]}>Done</Text>
                </Button>
              </Right>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
