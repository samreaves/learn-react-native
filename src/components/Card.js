/**
 * Learn React Native
 * Card Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { View } from 'react-native';

/* Create Card Component */
const Card = (props) => {

  const cardStyles = {
    borderWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  };

  return (
    <View style={cardStyles}>
      {props.children}
    </View>
  );
};

/* Export Card Component */
export default Card;
