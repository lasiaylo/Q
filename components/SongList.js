import React from "react";
import { List, ListItem, Body, Right, Thumbnail, Text } from "native-base";
import SongView from "./SongView";
import * as _ from "lodash";

const SongList = ({ songs, style, pos }) => {
  function _filterQueue(queue, pos) {
    return queue.slice(pos + 1, queue.length + 1);
  }

  function _renderSong(song) {
    return (
      <SongView name={song.name} artists={song.artists} color={song.color} />
    );
  }

  return (
    <List
      dataArray={_filterQueue(songs, pos)}
      renderRow={song => _renderSong(song)}
      style={style}
    />
  );
};

export default SongList;
