import React from "react";
import PropTypes from "prop-types";
import { Row, Grid, Col } from "react-native-easy-grid";
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
import Playback from "./Playback";

const themeMap = {
  host: {},
  listener: {}
};

const NowPlaying = ({ userMode, songState }) => (
  <Header span>
    <Left />
    <Body>
      <Title>Country Roads</Title>
      <Subtitle>John Denver</Subtitle>
    </Body>
    <Right>
      <Playback />
    </Right>
  </Header>
);

NowPlaying.propTypes = {
  userMode: PropTypes.string,
  nowPlaying: PropTypes.element,
  navigation: PropTypes.object.isRequired
  // back: PropTypes.function,
  // userMode: PropTypes.string.isRequired,
  // nowPlaying: PropTypes.element.isRequired
};

export default NowPlaying;
