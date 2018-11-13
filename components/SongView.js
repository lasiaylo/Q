import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Title,
  Text,
  Button,
  Icon,
  Right,
  Left,
  Body,
  ListItem,
  List,
  Thumbnail,
  Subtitle,
  Input,
  Item
} from "native-base";
import style from "../style/style";
import colors from "../style/colors";
import { FloatingAction } from "react-native-floating-action";
import QList from "./reuse/QList";
import Spotify from "rn-spotify-sdk";
import * as _ from "lodash";

export default class SongView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        style={{
          paddingRight: 20,
          paddingLeft: -35
        }}
        icon
        onPress={() => console.log("touch me daddy")}
      >
        <Left style={{ borderRadius: 50 }}>
          <Thumbnail
            small
            source={require("../assets/icons/fill-avatar.png")}
            style={{ backgroundColor: this.props.color }}
          />
        </Left>
        <Body
          style={{
            paddingLeft: 10,
            alignItems: "flex-start",
            alignContent: "flex-start"
          }}
        >
          <Title>
            <Text style={[style.nowPlaying, { color: "white" }]}>
              {this.props.name}
            </Text>
          </Title>
          <Subtitle style={[style.nowPlaying, { color: "white" }]}>
            {this.props.artists.join(", ")}
          </Subtitle>
        </Body>
      </ListItem>
    );
  }
}
