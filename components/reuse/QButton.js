import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Button } from "native-base";

import style from "../../style/style";

const QButton = ({ children, type, onPress }) => (
  <Button
    onPress={onPress}
    rounded
    success
    block
    style={style[`${type}Btn`]}
  >
    <Text style={style[`${type}BtnText`]}>
      {`${children}`}
    </Text>
  </Button>
);

QButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default QButton;

