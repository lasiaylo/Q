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
import SongView from "./SongView";
import PartyManager from "../firebase/PartyManager";

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

export default class QHome extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    const { params, routeName } = this.navigation.state;
    const { partyID, userMode, profile } = params;
    console.log("\n\n TABBED IS not: " + !this.props.tabbed);
    console.log("USER ID: " + profile.id);
    this.state = {
      profile: profile,
      qsearchVisible: false,
      shareVisible: false,
      settingsVisible: false,
      playing: false,
      homeTitle: params.homeTitle,
      userMode: userMode ? userMode : routeName,
      joinQRVis: false,
      createLPVis: false,
      currSong: {},
      party: null,
      queue: [],
      queuePos: 0
      // refresh: false
    };
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.handler = this.handler.bind(this);
    this.settingsHandler = this.settingsHandler.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    // this.child = React.createRef();

    this.partyID = this.navigation.getParam("partyID", "");
    console.log("QHOME RECEIVED ID : " + this.partyID);
    const manager = this.navigation.getParam("manager", null);
    manager.getSongs(this.partyID, queue => {
      this.setState({ queue, playing: true }, console.log(queue));
    });
    manager.getPos(this.partyID, pos => {
      // this.setState({ refresh: !this.state.refresh });
      this.setState({ queuePos: pos });
      this.setState({ currSong: this.state.queue[this.state.queuePos] });
      // if (this.userMode != "host") {
      //   this.child.current.play(this.state.queue[this.state.queuePos], false);
      // }
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
    console.log("next called on pos: " + this.state.queuePos);
    console.log(
      "LENGTH OF QUEUE TO ME: ",
      Object.keys(this.state.queue).length - 1
    );
    if (this.state.queuePos > 0) {
      const manager = this.navigation.getParam("manager", null);
      manager.updatePos(this.state.queuePos - 1, this.partyID, () => {
        console.log("INSIDE UPDATE POS");
        callback(this.state.queue[this.state.queuePos], true);
        this.setState({
          queuePos: this.state.queuePos,
          currSong: this.state.queue[this.state.queuePos]
        });
        enable(
          this.state.queuePos < Object.keys(this.state.queue).length,
          this.state.queuePos > 0
        );
      });
    } else {
      callback(this.state.queue[this.state.queuePos], false);
    }
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", function() {
      this.navigation.navigate("Choose");
      return true;
    });
    const partyID = this.navigation.getParam("partyID", "");
    const userMode = this.navigation.getParam("userMode", "listen");
    const manager = this.navigation.getParam("manager", null);
    const parties = this.navigation.getParam(`${userMode}Parties`, []);
    // if (this.props.tabbed) {
    //   console.log("fuck me right????");
    //   this.setState({
    //     homeTitle: userMode == "host" ? "Hosted Parties" : "Listening Parties"
    //   });
    // this.manager.getParty("listening", listenParties => {
    //   this.setState({ listenParties });
    //   console.log("Listener parties: ", listenParties);
    // });
    // this.manager.getParty("hosted", hostParties => {
    //   this.setState({ hostParties });
    //   console.log("Hosted parties: ", hostParties);
    // });
    // }
    manager.updatePos(0, partyID, () => console.log("init queue pos"));
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
      const manager = this.navigation.getParam("manager", null);
      manager.updatePos(this.state.queuePos + 1, this.partyID, () => {
        console.log("INSIDE UPDATE POS");
        callback(this.state.queue[this.state.queuePos], true);
        this.setState({
          queuePos: this.state.queuePos,
          currSong: this.state.queue[this.state.queuePos]
        });
        enable(
          this.state.queuePos < Object.keys(this.state.queue).length - 1,
          this.state.queuePos >= 0
        );
      });
    } else {
      callback(this.state.queue[this.state.queuePos], false);
    }
  }

  _filterQueue(queue, pos) {
    return queue.slice(pos + 1, queue.length + 1);
  }

  _renderSong(song) {
    return (
      <SongView name={song.name} artists={song.artists} color={song.color} />
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

    return (
      <Container style={{ backgroundColor: "#090909" }}>
        <View
          style={[
            style[this.state.userMode + "Header"],
            {
              minWidth: this.width,
              minHeight: this.height * 0.12
            }
          ]}
        >
          <Container style={[style[this.state.userMode + "Header"]]}>
            <Content
              sylte={{
                minHeight: this.height * 0.15
              }}
            >
              <Grid>
                <Row
                  style={{
                    flex: 1,
                    alignContent: "center",
                    justifyContent: "center"
                  }}
                >
                  {(!this.props.tabbed ||
                    this.navigation.state.routeName == "Choose") && (
                    <Button
                      icon
                      light
                      transparent
                      onPress={() => this.navigation.navigate("Choose")}
                      style={{
                        position: "absolute",
                        left: 5,
                        paddingTop: StatusBar.currentHeight + 30
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
                      { paddingTop: StatusBar.currentHeight + 12 },
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
        {this.state.playing &&
          this.state.queue.length &&
          this.state.queue[this.state.queuePos] && (
            <NowPlaying
              currSong={this.state.queue[this.state.queuePos]}
              userMode={this.state.userMode}
              queuePos={this.state.queuePos}
              queue={this.state.queue}
              next={this.next}
              prev={this.prev}
              refr={this.state.refresh}
              ref={this.child}
            />
          )}
        <Content
          contentContainerStyle={{
            justifyContent: "flex-start",
            paddingTop: 20
          }}
        >
          <List
            dataArray={this._filterQueue(this.state.queue, this.state.queuePos)}
            renderRow={song => this._renderSong(song)}
            style={{ paddingLeft: -40 }}
          />
          {this.state.queue.length === 0 && (
            <Container
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                minHeight: this.height,
                alignItems: "center"
              }}
              contentContainerStyle={{
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <Content
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  minHeight: this.height
                }}
                contentContainerStyle={{
                  alignContent: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={[
                    style.nowPlaying,

                    {
                      flex: 1,
                      fontSize: 22,
                      opacity: 0.6,
                      margin: "auto",
                      width: 0.8 * this.width
                    }
                  ]}
                >
                  No songs... Click the action button to add a song to the
                  queue!
                </Text>
              </Content>
            </Container>
          )}
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
              const i = Object.keys(this.state.queue).length;
              let copy = this.state.queue;
              copy[i] = selected;
              console.log("SELECTED", JSON.stringify(selected));
              manager.addSong(selected, partyID, () =>
                this.setState({
                  qsearchVisible: !this.state.qsearchVisible
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
            done={partyID => {
              this.toggleJoinVis();
              this.goHome("listen", partyID, partyID);
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
            done={name => {
              this.toggleCreateVis();
              this.manager.makeParty(name, (partyID, name) =>
                this.goHome("host", partyID, name)
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
