/**
 * Learn React Native
 * Album List Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumListItem from './AlbumListItem';

/* Create Album List Component */
class AlbumList extends Component {

  constructor() {
    super();
    this.state = { albums: [] };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        console.log('GET request returns :', response.data);
        this.setState({ albums: response.data });
      });
  }

  renderAlbumList() {

    const albums = this.state.albums.map((album) =>
      <AlbumListItem
        key={album.title}
        album={album}
      />
    );

    return (
      <ScrollView>
        { albums }
      </ScrollView>
    );
  }

  render() {
    /* If list of albums is loaded, render list of albums */
    if (this.state.albums.length > 0) {
      return this.renderAlbumList();
    }

    /* Else render loading text */
    return (
      <View>
        <Text>Loading albums...</Text>
      </View>
    );
  }
}

/* Export Album List Component */
export default AlbumList;
