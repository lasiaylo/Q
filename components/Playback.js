import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Subtitle,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import style from "../style/style";

const Playback = ({ nowPlaying, navigation }) => (
  <Header span>
    <Left />
    <Body>
      <Title>Country Roads</Title>
      <Subtitle>John Denver</Subtitle>
    </Body>
    <Right />
  </Header>
);

Playback.propTypes = {};

export default Playback;
