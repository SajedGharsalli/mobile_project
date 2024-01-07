import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ chatItem }) => {
  return (
    <View style={[chatItem.sender === 'client' ? styles.driverBubble : styles.clientBubble ]}>
      <Text>{chatItem.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clientBubble: {
    backgroundColor: '#8cd98c',
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  driverBubble: {
    backgroundColor: '#2a892a',
    alignSelf: 'flex-end',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
});

export default ChatBubble;
