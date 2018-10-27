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
import { View } from "react-native";
import * as _ from "lodash";
import { Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";
import { createBottomTabNavigator } from "react-navigation";

import style from "../style/style";
import QList from "./reuse/QList";

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
  // themeScreen() {
  //   const { userMode } = this.state;

  //   if (userMode.includes("host")) {
  //     this.props.navigation.setParams({
  //       headerTitle: "b",
  //       headerTintColor: style.white,
  //       headerStyle: {
  //         backgroundColor: style.purple,
  //         elevation: null
  //       }
  //     });
  //   } else {
  //     this.props.navigation.setParams({
  //       headerTitle: "a",
  //       headerTintColor: style.green,
  //       headerStyle: {
  //         backgroundColor: style.gray,
  //         elevation: null
  //       }
  //     });
  //   }
  // }

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;
  //   return {
  //     header: header,
  //     headerTitle: params.headerTitle,
  //     headerTintColor: params.headerTintColor,
  //     headerStyle: params.headerStyle,
  //     headerTitleStyle: {
  //       fontFamily: "Avenir-Book",
  //       fontSize: 35,
  //       fontWeight: "normal",
  //       textShadowColor: "rgba(0, 0, 0, 0.3)",
  //       textShadowOffset: { width: 1, height: 1 },
  //       textShadowRadius: 10
  //     },
  //     headerTitleContainerStyle: {
  //       justifyContent: "center",
  //       alignContent: "center",
  //       marginLeft: -45
  //     }
  //   };
  // };

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      header: header,
      headerTitle: "placeholder",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#531EE3",
        elevation: null
      },
      headerTitleStyle: {
        fontFamily: "Avenir-Book",
        fontSize: 35,
        fontWeight: "normal",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10
      },
      headerTitleContainerStyle: {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: -45
      }
    };
  };

  render() {
    const {
      navigation: {
        state: { routeName }
      }
    } = props;
    const item = {
      body: <Text>Things Fall Apart</Text>,
      right: right()
    };
    const items = _.fill(Array(20), item);

    return (
      <Container>
        <NowPlaying navigation={this.navigation} />
        <Content>
          <QList items={items} />
        </Content>
      </Container>
    );
  }
}

// const Home = props => {
//   const {
//     navigation: {
//       state: { routeName }
//     }
//   } = props;
//   const item = {
//     body: <Text>Things Fall Apart</Text>,
//     right: right()
//   };
//   const items = _.fill(Array(20), item);

//   return (
//     <Container>
//       <NowPlaying navigation={this.navigation} />
//       <Content>
//         <QList items={items} />
//       </Content>
//     </Container>
//   );
// };

export default createBottomTabNavigator({
  Hosted: Home,
  Listening: Home
});
