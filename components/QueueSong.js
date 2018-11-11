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

export default class QueueSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reaady: false
    };
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
          style={{ paddingTop: -50 }}
          transparent
        >
          <Body style={{ paddingTop: -50 }}>
            <Text style={[style.nowPlaying, style.modalTitle]}>
              Queue a song
            </Text>
          </Body>
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
