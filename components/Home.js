import React, { Component } from "react";
import { Container, Content, Header, Title, Text, Button, Icon, Right, Body, ListItem } from "native-base";
import { View } from 'react-native';
import * as _ from 'lodash';
import { Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";
import { createBottomTabNavigator } from "react-navigation";

import style from "../style/style";
import QList from "./reuse/QList";

const right = () => (
  <Grid>
    <Row>
      <Text style={style.listSubtitle}>04.20.18 • 12 songs</Text>
      <Button icon transparent>
        <Icon name='beer' />
      </Button>
    </Row>
  </Grid>
);

const Home = (props) => {
  const { navigation: { state: {routeName} } } = props;
  const item = {
    body: <Text>Things Fall Apart</Text>,
    right: right(),
  };
  const items = _.fill(Array(20), item)


  return (
    <Container>
      <Header style={style[routeName]}>
        <Title style={style[routeName]}>{`${routeName} Parties`}</Title>
      </Header>
      <Content>
        <QList items={items} />
      </Content>
    </Container>
  )

}

export default createBottomTabNavigator({
  Hosted: Home,
  Listening: Home,
})