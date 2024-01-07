import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconButton = ({ name, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
        <Icon name={name} size={30} color="#333" />
        <Text>{text}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 90,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor : 'black',
  },
  text: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
});

export default IconButton;
