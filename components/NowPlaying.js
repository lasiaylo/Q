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

import Spotify from "rn-spotify-sdk";

export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.userMode = props.userMode;
    this.state = {
      playing: true,
      queue: this.props.queue,
      currSong: this.props.currSong,
      currName: this.props.currSong.name,
      queuePos: this.props.queuePos,
      currArtist: this.props.currSong.artists[0],
      canSkip: true,
      canBack: true,
      refresh: this.props.refresh,
      partyID: this.props.partyID,
      manager: this.props.manager
    };
    this.play = this.play.bind(this);
    if (this.userMode === "listen") {
      this.state.manager.getPos(this.partyID, pos => {
        // this.setState({ refresh: !this.state.refresh });
        this.setState({ queuePos: pos });
        this.setState({ currSong: this.state.queue[this.state.queuePos] });
        // if (this.userMode != "host") {
        //   this.child.current.play(this.state.queue[this.state.queuePos], false);
        // }
      });
    }
  }

  componentDidMount() {
    Spotify.getMe().then(result => {
      if (this.userMode === "host") {
        this.setState({ playing: true });
        this.play(this.state.currSong, true);
      }
    });
    Spotify.addListener("trackDelivered", result => {
      this.skip();
    });
    this.height = document.getElementById("nowPlaying").clientHeight;
  }

  async playPause() {
    return await Spotify.setPlaying(!this.state.playing);
  }

  back() {
    this.props.prev(
      song => this.play(song, true),
      (b, c) => this.setState({ canSkip: b, canBack: c })
    );
  }

  skip() {
    this.props.next(
      song => this.play(song, true),
      (b, c) => this.setState({ canSkip: b, canBack: c })
    );
  }

  async play(song, b) {
    console.log("play called on:" + song.name);
    this.setState({
      currSong: song,
      currName: song.name,
      currArtist: song.artists[0]
    });
    if (b) await Spotify.playURI(song.uri, 0, 0);
  }

  render() {
    return (
      <Header span style={[style.npHeader, style[this.userMode + "Header"]]}>
        <Left>
          <Thumbnail
            square
            large
            source={{ uri: "https://i.imgur.com/RfZvIlj.png" }}
            style={{ height: this.height * 8, width: this.height * 0.8 }}
          />
        </Left>
        <Card
          primary
          transparent
          style={{
            flex: 1,
            padding: 0,
            margin: 0,
            marginRight: -250
          }}
        >
          <CardItem
            header
            style={{
              backgroundColor: "transparent",
              padding: 0,
              margin: 0,
              marginBottom: -25
            }}
          >
            <Left>
              <Body>
                <Text
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  style={[style.nowPlaying, style.songText]}
                >
                  {this.state.currName}
                </Text>
                <Text style={[style.nowPlaying, style.artistText]} light note>
                  {this.state.currArtist}
                </Text>
              </Body>
            </Left>
          </CardItem>
          {this.userMode === "host" ? (
            <CardItem
              footer
              style={{ backgroundColor: "transparent", padding: 0, margin: 0 }}
            >
              <Button light transparent onPress={() => this.back()}>
                <Icon
                  name="md-skip-backward"
                  style={{ opacity: this.state.canBack ? 1 : 0.25 }}
                />
              </Button>
              <Button
                light
                transparent
                onPress={() => {
                  this.setState({ playing: !this.state.playing });
                  this.playPause();
                }}
              >
                <Icon name={this.state.playing ? "md-pause" : "md-play"} />
              </Button>
              <Button light transparent onPress={() => this.skip()}>
                <Icon
                  name="md-skip-forward"
                  style={{ opacity: this.state.canSkip ? 1 : 0.25 }}
                />
              </Button>
            </CardItem>
          ) : (
            <CardItem
              footer
              style={{ backgroundColor: "transparent", padding: 0, margin: 0 }}
            />
          )}
        </Card>
        <Right>
          <Grid>
            <Row style={{ justifyContent: "flex-end", marginTop: 15 }}>
              <Button light transparent>
                <Icon name="md-heart" style={{ opacity: 0.3, fontSize: 28 }} />
              </Button>
            </Row>
            <Row
              style={{
                justifyContent: "flex-end",
                marginBottom: 10,
                marginTop: 10
              }}
            >
              <Button light transparent>
                <Icon
                  name="md-checkmark"
                  style={{ opacity: 0.3, fontSize: 28 }}
                />
              </Button>
            </Row>
          </Grid>
        </Right>
      </Header>
    );
  }
}
