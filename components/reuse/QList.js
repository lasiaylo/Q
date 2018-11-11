import React from "react";
import {
  Button,
  Left,
  List,
  ListItem,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import PropTypes from "prop-types";

function makeItem(item) {
  const { image, body, right } = item;
  const uri =
    "https://mir-s3-cdn-cf.behance.net/projects/202/d039c063218895.Y3JvcCwxNjUwLDEyOTIsMzYsNTU4.jpg";

  return (
    <ListItem icon>
      <Left>
        <Thumbnail small source={{ uri }} />
      </Left>
      <Body>{body}</Body>
      {right}
    </ListItem>
  );
}

const QList = ({ items }) => (
  <List dataArray={items} renderRow={item => makeItem(item)} />
);

QList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default QList;
