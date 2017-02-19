/**
 * Learn React Native
 * Album List Item Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { Text, View } from 'react-native';

/* Create Album List Item Component */
const AlbumListItem = (props) => {

  const viewStyles = {
    padding: 10
  };

  return (
    <View style={viewStyles}>
      <Text>{ props.album.title }</Text>
      <Text>{ props.album.artist }</Text>
      <Text>{ props.album.url }</Text>
      <Text>{ props.album.image }</Text>
      <Text>{ props.album.thumbnailImage}</Text>
    </View>
  );
};

/* Export Album List Item Component */
export default AlbumListItem;
