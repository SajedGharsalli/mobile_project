import React, { useState } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Header from '../components/Header' 
import ChatBubble from '../components/ChatBubble' 
const ChatScreen = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChat([...chat, { text: message, sender: 'client' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{}}>
        {chat.map((chatItem, index) => (
          <ChatBubble key={index} chatItem={chatItem} />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Écrivez votre message ici..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  sendButton: {
    padding: 10,
    backgroundColor: 'rgba(230, 230, 255,0.7)',
    borderRadius: 5,
  },
});

export default ChatScreen;
