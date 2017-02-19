/**
 * Learn React Native
 * Android Main File
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

/* Create App Component */
const App = () => (
  <View>
    <Header title={'Albums'} />
    <AlbumList />
  </View>
);

/* Render Home Component */
AppRegistry.registerComponent('albums', () => App);
