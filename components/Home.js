import React, { Component } from "react";
import { Container, Content, Header, Title, Text } from "native-base";
import PropTypes from "prop-types";
import { createBottomTabNavigator } from "react-navigation";

import style from "../style/style";
import QList from "./reuse/QList";

const Home = (props) => {
  const items = [
    (<Text>Kumar Pratik</Text>),
    (<Text>Kumar Pratik</Text>),
  ];


  return (
    <Container>
      <Content>
        <Header style={style.hostheader}>
          <Title style={style.hostheader}>Hosted Parties</Title>
        </Header>
        <QList items={items} />
      </Content>
    </Container>
  )

}

export default createBottomTabNavigator({
  Home,
})