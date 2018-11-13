import React from "react";
import { List, ListItem, Body, Right, Thumbnail, Text } from "native-base";
import SongView from "./SongView";
import * as _ from "lodash";

const SongList = ({ songs, style, pos }) => {
  function _filterQueue(queue, pos) {
    const numSongs = Object.keys(queue).length;
    const keys = Array.from(
      new Array(numSongs - pos - 1),
      (x, i) => i + pos + 1
    );

    return _.map(keys, key => queue[key]);
  }

  function _renderSong(song) {
    console.log("SONGGGG", song);
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
