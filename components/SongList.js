import React from "react";
import { List, ListItem, Body, Right, Thumbnail, Text } from "native-base";
import SongView from "./SongView";
import * as _ from "lodash";

const SongList = ({ songs, style, pos }) => {
  function _filterQueue(queue, pos) {
    return queue.slice(pos + 1, queue.length + 1);
  }

  function _renderSong(song) {
    console.log("SONGGGG", song.color);
    return (
      <SongView name={song.name} artists={song.artists} color={song.color} />
    );
  }

  // let list = [];
  // if (songs != {}) {
  //   list = Object.items(songs);
  // }
  console.log("SONGS", songs);

  return (
    <List
      dataArray={_filterQueue(songs, pos)}
      renderRow={song => _renderSong(song)}
      style={style}
    />
  );
};

export default SongList;
