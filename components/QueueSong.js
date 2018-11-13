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
  Input,
  Item
} from "native-base";
import style from "../style/style";
import colors from "../style/colors";
import { FloatingAction } from "react-native-floating-action";
import Spotify from "rn-spotify-sdk";

const songTypes = ["album", "artist", "track"];

export default class QueueSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reaady: false,
      song: "",
      query: ""
    };
  }
  async textToQuery() {
    this.setState({ song: this.state.song.split(" ").join("%20") });
    this.setState({ query: "q=" + this.state.song });

    let a = Spotify.search(this.query, songTypes);
    console.log(a);
    let b = await a;
    console.log(b);
  }
  render() {
    return (
      <Container
        style={{
          flex: 1,
          backgroundColor: colors[this.props.theme]
        }}
      >
        <Header
          onPress={() => this.setState({ ready: !this.state.ready })}
          transparent
        >
          <Text style={[style.nowPlaying, style.modalTitle]}>Queue a song</Text>
          <Right>
            <Button light transparent onPress={this.props.cancelClose}>
              <Icon name="close" />
            </Button>
          </Right>
        </Header>
        <Content style={{ paddingLeft: 15, paddingRight: 15, height: 35 }}>
          <Item rounded>
            <Icon style={{ color: "white" }} light active name="search" />
            <Input
              style={[style.nowPlaying, { color: "white", fontSize: 17 }]}
              placeholderTextColor="white"
              light
              placeholder="Search on spotify"
              onChangeText={text => {
                //console.log(text);
                this.setState({ song: text });
              }}
              onEndEditing={() => {
                this.textToQuery();
                console.log(this.state.song);
                console.log(this.state.query);
              }}
            />
          </Item>
        </Content>

        {this.state.ready && (
          <FloatingAction
            color={colors.white}
            onPressMain={this.props.done}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
            floatingIcon={
              this.props.theme === "gray"
                ? require("../assets/icons/done_gray.png")
                : require("../assets/icons/done_green.png")
            }
            iconWidth={25}
            iconHeight={25}
            distanceToEdge={20}
          />
        )}
      </Container>
    );
  }
}
