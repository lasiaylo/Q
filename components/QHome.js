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
  List,
  Item,
  Card,
  Icon
} from "native-base";
import * as _ from "lodash";
import { Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";
import { Dimensions, View, StatusBar, BackHandler } from "react-native";
import QList from "./reuse/QList";
import QModal from "./reuse/QModal";
import NowPlaying from "./NowPlaying";
import ShareQR from "./ShareQR";
import JoinQR from "./JoinQR";
import CreateLP from "./CreateLP";
import HostSettings from "./HostSettings";
import QueueSong from "./QueueSong";
import style from "../style/style";
import navStyle from "../style/navStyle";
import { FloatingAction } from "react-native-floating-action";
import SongList from "./SongList";
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

const fakeQueue = {
  0: {
    name: "thank u, next",
    artists: ["Ariana Grande"],
    uri: "spotify:track:2rPE9A1vEgShuZxxzR2tZH",
    color: colors.purple,
    index: 0
  },
  3: {
    name: "Potato Salad",
    artists: ["Tyler, the Creator", "A$AP Rocky"],
    uri: "spotify:track:1jzIJcHCXneHw7ojC6LXiF",
    color: colors.white,
    index: 3
  },
  1: {
    name: "CANT GET OVER YOU",
    artists: ["papa franku"],
    uri: "spotify:track:7ewESHEg3P3JN66IcWwDho",
    color: colors.gray,
    index: 1
  },
  2: {
    name: "WAKE UP",
    artists: ["Travis Scott", "The Weeknd"],
    uri: "spotify:track:20MuVazoNMv6xjKPnRFOxG",
    color: colors.green,
    index: 2
  }
};

export default class QHome extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    const { params, routeName } = this.navigation.state;
    const userMode = this.navigation.getParam("userMode", "listen");

    this.state = {
      qsearchVisible: false,
      shareVisible: false,
      settingsVisible: false,
      playing: false,
      inLP: true,
      homeTitle: "placeholder",
      userMode: userMode ? userMode : routeName,
      joinQRVis: false,
      createLPVis: false,
      party: null,
      queue: [],
      queuePos: 0
    };
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.handler = this.handler.bind(this);
    this.settingsHandler = this.settingsHandler.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    const partyID = this.navigation.getParam("partyID", "");
    const manager = this.navigation.getParam("manager", null);
    manager.getSongs(partyID, queue => {
      this.setState({ queue, playing: true }, console.log(queue));
    });
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
    const { params } = navigation.state;
    qHeader = params.qHeader;
    return params.qHeader;
  };

  toggleJoinVis() {
    this.setState({ joinQRVis: !this.state.joinQRVis });
  }

  toggleCreateVis() {
    this.setState({ createLPVis: !this.state.createLPVis });
  }

  prev(callback, enable) {
    console.log("prev called on pos: " + this.state.queuePos);
    if (this.state.queuePos > 0) {
      callback(this.state.queue[this.state.queuePos - 1]);
      this.setState({
        queuePos: this.state.queuePos - 1,
        currSong: this.state.queue[this.state.queuePos - 1]
      });
    }
    enable(
      this.state.queuePos < Object.keys(this.state.queue).length,
      this.state.queuePos > 1
    );
  }

  next(callback, enable) {
    console.log("next called on pos: " + this.state.queuePos);
    console.log(
      "LENGTH OF QUEUE TO ME: ",
      Object.keys(this.state.queue).length - 1
    );
    if (
      this.state.queuePos < Object.keys(this.state.queue).length - 1 ||
      (Object.keys(this.state.queue).length === 2 && this.state.queuePos === 0)
    ) {
      callback(this.state.queue[this.state.queuePos + 1]);
      this.setState({
        queuePos: this.state.queuePos + 1,
        currSong: this.state.queue[this.state.queuePos + 1]
      });
    }
    enable(
      this.state.queuePos < Object.keys(this.state.queue).length - 2,
      this.state.queuePos >= 0
    );
  }

  navProps() {
    return {
      qHeader: navStyle[this.userMode + "Header"],
      userMode: this.userMode
    };
  }

  render() {
    const userMode = this.navigation.getParam("userMode", "listen");
    const manager = this.navigation.getParam("manager", null);
    const partyID = this.navigation.getParam("partyID", "");
    let { queue } = this.state;
    if (queue == null) {
      queue = [];
    } else {
      queue = Object.values(queue);
    }

    let PLAYING = null;
    if (this.state.playing && this.state.queue.length) {
      PLAYING = (
        <NowPlaying
          currSong={this.state.queue[this.state.queuePos]}
          userMode={this.state.userMode}
          next={this.next}
          prev={this.prev}
        />
      );
    }

    return (
      <Container style={{ backgroundColor: "#090909" }}>
        <View
          style={[
            style[this.state.userMode + "Header"],
            {
              minWidth: this.width,
              minHeight: this.height * 0.095
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
                  {!this.props.tabbed && (
                    <Button
                      icon
                      light
                      transparent
                      onPress={() =>
                        this.navigation.navigate("DashHome", this.navProps())
                      }
                      style={{
                        position: "absolute",
                        left: 5,
                        paddingTop: StatusBar.currentHeight + 25
                      }}
                    >
                      <Icon
                        name="arrow-back"
                        style={[
                          style[this.state.us257erMode + "HeaderText"],
                          { paddingBottom: 5 }
                        ]}
                      />
                    </Button>
                  )}
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
        {PLAYING}

        <Content
          contentContainerStyle={{
            justifyContent: "flex-start",
            paddingTop: 20
          }}
        >
          <SongList
            songs={queue}
            style={{ paddingLeft: -40 }}
            pos={this.state.queuePos}
          />
        </Content>
        {this.state.userMode === "host" ? (
          !this.props.tabbed ? (
            <FloatingAction
              openOnMount={true}
              color={colors.purple}
              actions={hostActions}
              onPressItem={name => {
                this.hostFAB(name);
              }}
              iconWidth={35}
              iconHeight={35}
              floatingIcon={require("../assets/icons/palette.png")}
              distanceToEdge={20}
            />
          ) : (
            <FloatingAction
              color={colors.purple}
              showBackground={false}
              overlayColor="rgba(0, 0, 0, 0.0)"
              iconWidth={35}
              iconHeight={35}
              floatingIcon={require("../assets/icons/add.png")}
              onPressMain={() => {
                this.setState({ createLPVis: true });
              }}
              distanceToEdge={20}
            />
          )
        ) : !this.props.tabbed ? (
          <FloatingAction
            color={colors.green}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
            onPressMain={() => {
              this.setState({ qsearchVisible: true });
            }}
            floatingIcon={require("../assets/icons/add_queue.png")}
            iconWidth={25}
            iconHeight={25}
            distanceToEdge={20}
          />
        ) : (
          <FloatingAction
            color={colors.green}
            showBackground={false}
            overlayColor="rgba(0, 0, 0, 0.0)"
            iconWidth={35}
            iconHeight={35}
            floatingIcon={require("../assets/icons/add.png")}
            onPressMain={() => {
              this.setState({ joinQRVis: true });
            }}
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
            done={selected => {
              const i = Object.keys(this.state.queue);
              let copy = this.state.queue;
              copy[i] = selected;
              console.log("SELECTED", JSON.stringify(selected));
              manager.addSong(selected, partyID, () =>
                this.setState({
                  qsearchVisible: !this.state.qsearchVisible,
                })
              );

            }}
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

        <QModal
          visible={this.state.joinQRVis}
          height={(this.height * 1) / 2}
          width={this.width}
          color={colors.green}
          toggleVis={() => this.setState({ joinQRVis: !this.state.joinQRVis })}
        >
          <JoinQR
            done={() => {
              this.toggleJoinVis();
              this.goHome("listen", 1234);
            }}
            cancelClose={() => {
              this.setState({ joinQRVis: !this.state.joinQRVis });
            }}
          />
        </QModal>

        <QModal
          visible={this.state.createLPVis}
          height={(this.height * 1) / 4}
          width={this.width}
          color={colors.gray}
          toggleVis={() =>
            this.setState({ createLPVis: !this.state.createLPVis })
          }
        >
          <CreateLP
            done={() => {
              this.toggleCreateVis();
              this.manager.makeParty("partyName", partyID =>
                this.goHome("host", partyID)
              );
            }}
            cancelClose={() =>
              this.setState({ createLPVis: !this.state.createLPVis })
            }
          />
        </QModal>
      </Container>
    );
  }
}
