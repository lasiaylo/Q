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

export default class NowPlaying extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        span
        style={{
          padding: 0,
          marginLeft: -10,
          backgroundColor: "#531EE3"
        }}
      >
        <Left>
          <Thumbnail
            square
            large
            source={{ uri: "https://i.imgur.com/RfZvIlj.png" }}
            style={{ minHeight: 117, minWidth: 117, margin: 5 }}
          />
        </Left>
        <Card
          primary
          transparent
          style={{
            flex: 1,
            padding: 0,
            margin: 0,
            color: style.purple,
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
                <Text style={[style.nowPlaying, style.songText]}>
                  Country Roads
                </Text>
                <Text style={[style.nowPlaying, style.artistText]} light note>
                  John Denver
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem
            footer
            style={{ backgroundColor: "transparent", padding: 0, margin: 0 }}
          >
            <Button light transparent>
              <Icon name="skip-backward" />
            </Button>
            <Button light transparent>
              <Icon name="pause" />
            </Button>
            <Button light transparent>
              <Icon name="skip-forward" />
            </Button>
          </CardItem>
        </Card>
        <Right>
          <Grid>
            <Row style={{ justifyContent: "flex-end", marginTop: 15 }}>
              <Button light transparent>
                <Icon name="heart" style={{ opacity: 0.3, fontSize: 28 }} />
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
                <Icon name="checkmark" style={{ opacity: 0.3, fontSize: 28 }} />
              </Button>
            </Row>
          </Grid>
        </Right>
      </Header>
    );
  }
}

NowPlaying.propTypes = {
  userMode: PropTypes.string,
  songState: PropTypes.object
};
