import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Grid, Col } from "react-native-easy-grid";
import {
  Container,
  Header,
  Card,
  CardItem,
  Subtitle,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Thumbnail
} from "native-base";
import style from "../style/style";

export default class SongSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {}
}

NowPlaying.propTypes = {
  userMode: PropTypes.string,
  songState: PropTypes.object
};
