import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Button } from "native-base";

import style from "../style/style";

const NowPlaying = ({ visible, userMode, song }) => (
  <Button onPress={onPress} rounded success block style={style[`${type}Btn`]}>
    <Text style={style[`${type}BtnText`]}>{`${children}`}</Text>
  </Button>
);

NowPlaying.propTypes = {
  visible: PropTypes.boolean.isRequired,
  userMode: PropTypes.string.isRequired,
  song: PropTypes.object
};

export default QButton;
