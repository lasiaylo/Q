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
  Card,
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
        <Row style={[style.center, { marginTop: 20 }]}>
          <Card
            style={{
              padding: 10,
              margin: 10,
              backgroundColor: "white",
              outlineStyle: "solid",
              outlineColor: "white",
              borderColor: "white",
              borderStyle: "solid",
              height: 270,
              width: 270
            }}
          >
            <QRCode value={partyID} size={250} />
          </Card>
        </Row>
        <Row style={[style.center]}>
          <Text style={[style.qrHeader]}>{`${partyID}`}</Text>
        </Row>
        <Row style={[style.qrPadding]}>
          <Right style={[style.qrPadding]}>
            <Button rounded style={[style.qrBtn]} onPress={action}>
              <Text uppercase={false} style={[style.qrBtnText]}>
                Done
              </Text>
            </Button>
          </Right>
        </Row>
      </Grid>
    </Content>
  </Container>
);

export default ShareQR;
