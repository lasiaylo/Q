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
  Left
} from "native-base";
import { FloatingAction } from "react-native-floating-action";
import { Dimensions } from "react-native";

const CreateLP = ({ cancelClose, done }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const lpName = "New LP";

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: colors.gray
      }}
    >
      <Header transparent>
        <Left style={{ minWidth: width - 100 }}>
          <Title
            style={{
              padding: 10,
              paddingTop: -30
            }}
          >
            <Text style={[style.nowPlaying, style.modalTitle]}>
              {lpName}
            </Text>
            <Icon name="md-create" style={[style.settingsHeaderIcon]} />
          </Title>
        </Left>
        <Right>
          <Button transparent onPress={cancelClose}>
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
              <Button rounded style={[style.createBtn]} onPress={done}>
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
};

export default CreateLP;