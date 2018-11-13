import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dimensions, View, StyleSheet } from "react-native";
import { Container, Content, Icon, Button, Text } from "native-base";
import { Row, Grid, Col } from "react-native-easy-grid";
import style from "../style/style";
import QButton from "./reuse/QButton";
import { createStackNavigator } from "react-navigation";
import navStyle from "../style/navStyle";
import colors from "../style/colors";
import JoinQR from "./JoinQR";
import QModal from "./reuse/QModal";
import CreateLP from "./CreateLP";
import ChooseRowButton from "./reuse/ChooseRowButton";
import PartyManager from "../firebase/PartyManager";

const styles = StyleSheet.create({
  letsGo: {
    fontFamily: "Avenir-Light",
    color: "black",
    fontFamily: "Avenir-Light",
    color: "black",
    fontSize: 58,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  }
});

export default class Choose extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.state = {
      joinQRVis: false,
      createLPVis: false,
      listenParties: [],
      hostParties: []
    };

    this.toggleJoinVis = this.toggleJoinVis.bind(this);
    this.toggleCreateVis = this.toggleCreateVis.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  componentDidMount() {
    const { id, name, image } = this.navigation.getParam("profile", "");
    this.manager = new PartyManager(id);
    this.manager.makeUser(id, name, image);
  }

  goHome(userMode, partyID) {
    console.log("\ngoHome: " + userMode + " " + partyID);
    this.navigation.navigate("QHome", {
      qHeader: navStyle[userMode + "Header"],
      userMode: userMode,
      partyID: partyID
    });
  }

  toggleCreateVis() {
    this.setState({ createLPVis: !this.state.createLPVis });
  }

  toggleJoinVis() {
    this.setState({ joinQRVis: !this.state.joinQRVis });
  }

  render() {
    const { createLPVis, joinQRVis } = this.state;
    return (
      <Container>
        <Content>
          <Grid style={styles.fs}>
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                padding: 75,
                marginTop: 50,
                height: (this.height * 2) / 5
              }}
              size={1}
            >
              <Text style={styles.letsGo}> Let's go! </Text>
            </Row>
            <ChooseRowButton
              icon="md-home"
              onPress={this.toggleCreateVis}
              color="purple"
              upperText="Host a"
              lowerText="Listening Party"
            />
            <ChooseRowButton
              color="green"
              icon="md-headset"
              onPress={this.toggleJoinVis}
              upperText="Join a"
              lowerText="Listening Party"
            />
          </Grid>
        </Content>
        <QModal
          visible={joinQRVis}
          height={(this.height * 1) / 2}
          width={this.width}
          color={colors.green}
          toggleVis={this.toggleJoinVis}
        >
          <JoinQR
            done={(partyID) => {
              this.toggleJoinVis();
              this.manager.joinParty((partyID), id => this.goHome("listen", id))
            }}
            cancelClose={this.toggleJoinVis}
          />
        </QModal>
        <QModal
          id="small create LP"
          visible={createLPVis}
          height={(this.height * 1) / 4}
          width={this.width}
          color={colors.gray}
          toggleVis={this.toggleCreateVis}
        >
          <CreateLP
            done={() => {
              this.toggleCreateVis();
              this.manager.makeParty("partyName", partyID =>
                this.goHome("host", partyID)
              );
            }}
            cancelClose={this.toggleCreateVis}
          />
        </QModal>
      </Container>
    );
  }
}

Choose.propTypes = {
  navigation: PropTypes.object.isRequired
};
