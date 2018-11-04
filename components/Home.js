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
  Body,
  ListItem
} from "native-base";
import * as _ from "lodash";
import { Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";
import {
  createBottomTabNavigator,
  createStackNavigator,
  header
} from "react-navigation";
import QList from "./reuse/QList";
import NowPlaying from "./NowPlaying";
import style from "../style/style";
import navStyle from "../style/navStyle";

const right = () => (
  <Grid>
    <Row>
      <Text style={style.listSubtitle}>04.20.18 • 12 songs</Text>
      <Button icon transparent>
        <Icon name="beer" />
      </Button>
    </Row>
  </Grid>
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      userMode: this.navigation.getParam("userMode", "listen")
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    const { params } = navigation.state;
    qHeader = params.qHeader;
    qHeader.header = header;
    return params.qHeader;
  };

  render() {
    const item = {
      body: <Text>Things Fall Apart</Text>,
      right: right()
    };
    const items = _.fill(Array(20), item);

    return (
      <Container>
        <NowPlaying userMode={this.state.userMode} />
        <Content>
          <QList items={items} />
        </Content>
      </Container>
    );
  }
}

export default createBottomTabNavigator(
  {
    host: {
      screen: Home
    },
    listen: {
      screen: Home
    }
  },
  {
    navigationOptions: {
      header: header,
      qHeader: navStyle["listenHeader"],
      userMode: "listen"
    }
  }
);

// export default createStackNavigator({ SwitchModeTabs }, { headerMode: "none" });
