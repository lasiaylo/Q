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

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  select() {
    if (this.state.selected) {
      this.props.callback({});
    } else {
      this.props.callback(this.props.song);
    }
    this.setState({ selected: !this.state.selected });
  }

  render() {
    return (
      <ListItem
        style={{
          backgroundColor: this.state.selected ? "white" : "rgba(0, 0, 0, 0)",
          paddingRight: 20,
          paddingLeft: -35
        }}
        icon
        onPress={() => this.select()}
      >
        <Left style={{ borderRadius: 50 }}>
          <Thumbnail
            small
            source={require("../assets/icons/fill-avatar.png")}
            style={{ backgroundColor: this.props.song.color }}
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
            <Text
              style={[
                style.nowPlaying,
                {
                  color: this.state.selected ? this.props.song.color : "white"
                }
              ]}
            >
              {this.props.song.name}
            </Text>
          </Title>
          <Subtitle
            style={[
              style.nowPlaying,
              {
                opacity: 0.73,
                color: this.state.selected ? this.props.song.color : "white"
              }
            ]}
          >
            {this.props.song.artists.join(", ")}
          </Subtitle>
        </Body>
      </ListItem>
    );
  }
}
