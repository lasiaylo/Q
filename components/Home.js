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
import { Dimensions, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  header
} from "react-navigation";
import QList from "./reuse/QList";
import QModal from "./reuse/QModal";
import NowPlaying from "./NowPlaying";
import style from "../style/style";
import navStyle from "../style/navStyle";
import { FloatingAction } from "react-native-floating-action";
import colors from "../style/colors";

const listenActions = [{}];

const hostActions = [
  {
    text: "Queue a song",
    icon: require("../assets/icons/add_queue.png"),
    name: "add_song",
    color: colors.purple,
    position: 1
  },
  {
    text: "Settings",
    icon: require("../assets/icons/settings.png"),
    name: "settings",
    color: colors.purple,
    position: 2
  },
  {
    text: "Invite friends",
    icon: require("../assets/icons/qr.png"),
    name: "invite",
    color: colors.purple,
    position: 2
  }
];

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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      userMode: this.navigation.getParam("userMode", "listen"),
      qsearchVisible: false
    };
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    console.log(this.width);
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
        {this.state.userMode === "host" ? (
          <FloatingAction
            color={colors.purple}
            actions={hostActions}
            onPressItem={name => {
              console.log("selected button: ${name}");
            }}
            distanceToEdge={20}
          />
        ) : (
          <FloatingAction
            color={colors.green}
            onPressMain={() => {
              this.setState({ qsearchVisible: true });
              console.log(this.state);
              console.log(this.state.qsearchVisible);
            }}
            floatingIcon={require("../assets/icons/add_queue.png")}
            iconWidth={25}
            iconHeight={25}
            distanceToEdge={20}
          />
        )}
        <QModal
          visible={this.state.qsearchVisible}
          height={(this.height * 2) / 3}
          width={this.width}
          color={colors.green}
          toggleVis={() =>
            this.setState({ qsearchVisible: !this.state.qsearchVisible })
          }
        >
          <Text>FUCK ME IN THE BUTT</Text>
        </QModal>
      </Container>
    );
  }
}

// const SwitchModeTabs = createBottomTabNavigator({
//   host: {
//     screen: Home
//   },
//   listen: {
//     screen: Home
//   }
// });
