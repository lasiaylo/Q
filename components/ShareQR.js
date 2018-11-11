import React, { Component } from "react";
import QRCode from "react-native-qrcode";
import color from "../style/colors";
import style from "../style/style";
import PartyManager from "../firebase/PartyManager";
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

const ShareQR = ({ action, partyID }) => (
  <Container>
    <Header style={[style.listenHeader]}>
      <Text style={[style.qrHeader]}>Join LP NAME</Text>
      <Right>
        <Button transparent onPress={action}>
          <Icon name="md-close" style={[style.white]} />
        </Button>
      </Right>
    </Header>
    <Content style={[style.listenHeader]}>
      <Grid>
        <Row style={[style.center, {marginTop: 20}]}>
          <QRCode
            value={partyID}
            size={250}
            bgColor={color.gray}
            fgColor={color.white}
          />
        </Row>
        <Row style={[style.center]}>
          <Text style={[style.qrHeader]}>{`${partyID}`}</Text>
        </Row>
        <Row style={[style.qrPadding]}>
          <Right style={[style.qrPadding]}>
            <Button
              rounded
              style={[style.qrBtn]}
              onPress={action}
            >
              <Text style={[style.qrBtnText]}>Done</Text>
            </Button>
          </Right>
        </Row>
      </Grid>
    </Content>
  </Container>
);

export default ShareQR;
