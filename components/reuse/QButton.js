import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "native-base";

import style from "../../style/style";

const QButton = ({ children, type, onPress, width }) => (
  <Button
    onPress={onPress}
    rounded
    success
    block
    style={[style[`${type}Btn`], { minWidth: width }]}
  >
    <Text
      uppercase={false}
      style={style[`${type}BtnText`]}
    >{`${children}`}</Text>
  </Button>
);

QButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default QButton;
