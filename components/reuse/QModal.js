import React from "react";
import { Modal, View, TouchableWithoutFeedback } from "react-native";

const QModal = ({
  visible,
  width,
  height,
  minHeight,
  color,
  toggleVis,
  children
}) => (
  <Modal
    animationType="slide"
    visible={visible}
    transparent={true}
    onRequestClose={() => console.log("placeholder")}
  >
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center"
      }}
    >
      <TouchableWithoutFeedback onPress={() => toggleVis()}>
        <View
          style={{
            margin: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        />
      </TouchableWithoutFeedback>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: color
        }}
      >
        {children}
      </View>
    </View>
  </Modal>
);

export default QModal;
