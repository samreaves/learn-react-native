/**
 * Learn React Native
 * Card Section Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { View } from 'react-native';

/* Create Card Section Component */
const CardSection = (props) => {

  const cardSectionStyles = {
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  };

  return (
    <View style={cardSectionStyles}>
      {props.children}
    </View>
  );
};

/* Export Card Section Component */
export default CardSection;
