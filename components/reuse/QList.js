import React from 'react';
import {  List, ListItem, Body, Right, Thumbnail, Text } from 'native-base';
import PropTypes from "prop-types";


function makeItem(item) {
  // const { image, body, right } = item;
  // console.log(i)
  // console.log(body)
  // console.log(right)
  // const aaa = ( <Text>{item}</Text>);
  const aaa = item;
  // console.log(aaa);
  // return
  return (
    <ListItem avatar>
      <Body>
        {aaa}
      </Body>
      <Right>
        {aaa}
      </Right>
    </ListItem>
  )
}

const QList = ({ items }) => (
    <List
      dataArray={items}
      renderRow={(item) => makeItem(item)}
    />
);

QList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QList;