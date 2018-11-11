import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Title,
  Text,
  Button,
  Right,
  Left,
  Body,
  ListItem,
  Input,
  Item,
  Card,
  Icon
} from "native-base";
import * as _ from "lodash";
import { Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";
import { Dimensions, View, StatusBar } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  header
} from "react-navigation";

import QList from "./reuse/QList";
import QModal from "./reuse/QModal";
import NowPlaying from "./NowPlaying";
import ShareQR from "./ShareQR";
import HostSettings from "./HostSettings";
import QueueSong from "./QueueSong";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      qsearchVisible: false,
      shareVisible: false,
      settingsVisible: false,
      joinQRVisible: false,
      playing: false,
      inLP: false,
      homeTitle: "placeholder"
    };
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.handler = this.handler.bind(this);
    this.settingsHandler = this.settingsHandler.bind(this);
    console.log(this.state.userMode);
  }

  hostFAB(name) {
    if (name === "invite") {
      this.setState({ shareVisible: true });
    } else if (name === "settings") {
      this.setState({ settingsVisible: true });
    } else if (name === "add_song") {
      this.setState({ qsearchVisible: true });
    }
  }

  handler() {
    this.setState({
      shareVisible: !this.state.shareVisible
    });
  }

  settingsHandler() {
    this.setState({
      settingsVisible: !this.state.settingsVisible
    });
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    const { params } = navigation.state;
    qHeader = params.qHeader;
    return params.qHeader;
  };

  _renderItem(parties) {
    return parties.map(party => ({
      body: <Text>{`${party.name}`}</Text>,
      right: (
        <Grid>
          <Row>
            <Text style={style.listSubtitle}>{`${party.date} • ${
              party.songs
            } songs`}</Text>
            <Button icon transparent />
          </Row>
        </Grid>
      )
    }));
  }

  render() {
    const userMode = this.navigation.getParam("userMode", "listen");
    const parties = this.navigation.getParam(`${userMode}Parties`, []);
    const partyID = this.navigation.getParam("partyID", "");
    return (
      <Container>
        <View
          style={[
            style[this.state.userMode + "Header"],
            {
              minWidth: this.width,
              minHeight: this.height * 0.09
            }
          ]}
        >
          <Container style={style[this.state.userMode + "Header"]}>
            <Content>
              <Grid>
                <Row
                  style={{
                    flex: 1,
                    alignContent: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={[
                      { paddingTop: StatusBar.currentHeight + 5 },
                      style.headerTitle,
                      style[this.state.userMode + "HeaderText"]
                    ]}
                  >
                    {this.state.homeTitle}
                  </Text>
                </Row>
              </Grid>
            </Content>
          </Container>
        </View>
        <NowPlaying userMode={this.state.userMode} />

        <Content>
          <QList items={this._renderItem(parties)} />
        </Content>
        {userMode === "host" ? (
          <FloatingAction
            openOnMount={true}
            color={colors.purple}
            actions={hostActions}
            onPressItem={name => {
              console.log("selected button: ${name}");
              this.hostFAB(name);
            }}
            distanceToEdge={20}
          />
        ) : (
          <FloatingAction
            color={colors.green}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
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
          <QueueSong
            theme={this.state.userMode === "listen" ? "green" : "gray"}
            cancelClose={() =>
              this.setState({
                qsearchVisible: !this.state.qsearchVisible
              })
            }
            done={() =>
              this.setState({
                qsearchVisible: !this.state.qsearchVisible
              })
            }
          />
        </QModal>

        <QModal
          visible={this.state.shareVisible}
          height={(this.height * 2) / 3}
          minHeight={800}
          width={this.width}
          color={colors.gray}
          toggleVis={() =>
            this.setState({ shareVisible: !this.state.shareVisible })
          }
        >
          <ShareQR action={this.handler} partyID={partyID} />
        </QModal>

        <QModal
          visible={this.state.settingsVisible}
          height={(this.height * 2) / 3}
          width={this.width}
          color={colors.gray}
          toggleVis={() =>
            this.setState({ settingsVisible: !this.state.settingsVisible })
          }
        >
          <HostSettings action={this.settingsHandler} />
        </QModal>
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
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "host") {
          iconName = "desktop";
        } else if (routeName === "listen") {
          iconName = "musical-note";
        }
        color = "#707070";
        if (focused) {
          color = "white";
        }
        console.log(iconName);
        console.log(color);
        return <Icon name={iconName} style={{ color: color }} />;
      },
      qHeader: () => {
        const { routeName } = navigation.state;
        return navStyle[routeName + "Header"];
      },
      userMode: navigation.state.routeName
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#707070",
      inactiveBackgroundColor: colors.gray,
      activeBackgroundColor: colors.gray,
      style: style.tabNav,
      labelStyle: style.nowPlaying
    }
  }
);
