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
import { Row, Grid, Col } from "react-native-easy-grid";
import { FloatingAction } from "react-native-floating-action";
import QList from "./reuse/QList";
import SearchResult from "./SearchResult";
import Spotify from "rn-spotify-sdk";
import * as _ from "lodash";

// const songTypes = ["album", "artist", "track"];
const songTypes = ["track"];

export default class QueueSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResult: {},
      song: "",
      searchResults: []
    };
  }

  genResults(response) {
    this.setState({ searchResults: [] });
    let songs = response.tracks.items;
    let results = [];
    for (var i = 0; i < songs.length; i++) {
      let diet = ({ name, artists, uri }) => {
        artists = artists.map(a => a.name);
        color = this.chooseColor();
        return { name, artists, uri, color };
      };
      results.push(diet(songs[i]));
      this.setState({ searchResults: results });
    }
  }

  async textToQuery() {
    let query = this.state.song;
    query.split(" ").join("%20");
    Spotify.search(query, songTypes).then(results => this.genResults(results));
  }

  chooseColor() {
    var randomColor = require("random-color"); // import the script
    return randomColor([0.6, 0.5]); // a hex code for an attractive color
  }

  chooseResult(song) {
    this.setState({ selectedResult: song });
  }

  makeResult(song) {
    return <SearchResult song={song} callback={s => this.chooseResult(s)} />;
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: colors[this.props.theme],
          paddingTop: 10
        }}
      >
        <Header style={{ backgroundColor: colors[this.props.theme] }}>
          <Text style={[style.nowPlaying, style.modalTitle]}>Queue a song</Text>
          <Right>
            <Button light transparent onPress={this.props.cancelClose}>
              <Icon name="close" />
            </Button>
          </Right>
        </Header>
        <Header span transparent style={{ justifyContent: "center" }}>
          <Content
            style={{
              paddingLeft: 15,
              paddingRight: 15
            }}
            contentContainerStyle={{
              alignContent: "center"
            }}
          >
            <Item rounded>
              <Icon style={{ color: "white" }} light active name="search" />
              <Input
                style={[style.nowPlaying, { color: "white", fontSize: 20 }]}
                placeholderTextColor="white"
                light
                placeholder="Search on spotify"
                onChangeText={text => {
                  this.setState({ song: text });
                }}
                onEndEditing={() => {
                  this.textToQuery();
                }}
              />
            </Item>
          </Content>
        </Header>
        <List
          dataArray={this.state.searchResults}
          renderRow={song => this.makeResult(song)}
          style={{ paddingLeft: -40 }}
        />
        {!_.isEmpty(this.state.selectedResult) && (
          <FloatingAction
            color={colors.white}
            onPressMain={() => this.props.done(this.state.selectedResult)}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
            floatingIcon={require("../assets/icons/done_green.png")}
            iconWidth={25}
            iconHeight={25}
            distanceToEdge={20}
          />
        )}
      </Container>
    );
  }
}
