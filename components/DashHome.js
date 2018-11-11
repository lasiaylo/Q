// import { createBottomTabNavigator } from "react-navigation";
// import React, { Component } from "react";
// import navStyle from "../style/navStyle";
// import style from "../style/style";
// import colors from "../style/colors";
// import QHome from "./QHome";
// import Icon from "native-base";

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
import QList from "./reuse/QList";
import QModal from "./reuse/QModal";
import NowPlaying from "./NowPlaying";
import ShareQR from "./ShareQR";
import JoinQR from "./JoinQR";
import CreateLP from "./CreateLP";
import HostSettings from "./HostSettings";
import { createBottomTabNavigator } from "react-navigation";
import QueueSong from "./QueueSong";
import style from "../style/style";
import navStyle from "../style/navStyle";
import { FloatingAction } from "react-native-floating-action";
import colors from "../style/colors";
import QHome from "./QHome";

const DashHome = ({ navigation }) => (
  <QHome navigation={navigation} tabbed={true} />
);

export default createBottomTabNavigator(
  {
    host: {
      screen: DashHome,
      navigationOptions: {
        userMode: "host",
        qHeader: navStyle["hostHeader"]
      }
    },
    listen: {
      screen: DashHome,
      navigationOptions: {
        userMode: "listen",
        qHeader: navStyle["listenHeader"]
      }
    }
  },
  {
    initialRouteName: "listen",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        let iconName = "musical-notes";
        if (routeName === "host") {
          iconName = "desktop";
        }
        let color = "#707070";
        if (focused) {
          color = "white";
        }
        return <Icon name={iconName} style={{ color: color }} />;
      }
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
