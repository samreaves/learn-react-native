/**
 * Learn React Native
 * Android Main File
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

/* Create App Component */
const App = () => (
    <Header title={'Albums'} />
);

/* Render Home Component */
AppRegistry.registerComponent('albums', () => App);
