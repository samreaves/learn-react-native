/**
 * Learn React Native
 * Button Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/* Create Button Component */
const Button = (props) => {

  const styles = {
    buttonStyles: {
      alignSelf: 'stretch',
      backgroundColor: '#FFF',
      borderColor: '#007AFF',
      borderRadius: 5,
      borderWidth: 1,
      flex: 1,
      marginLeft: 5,
      marginRight: 5
    },
    textStyles: {
      alignSelf: 'center',
      color: '#007AFF',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
      paddingTop: 10
    }
  };

  return (
    <TouchableOpacity style={styles.buttonStyles}>
      <Text style={styles.textStyles}>
        { props.text }
      </Text>
    </TouchableOpacity>
  );
};


/* Export Button Component */
export default Button;
