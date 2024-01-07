import { StyleSheet, TextInput, Text, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import Button from './button'
import Other from './other'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignUpForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigation(); // Initialize the navigation object

  const handlesignup = (cred) => {

    console.log("Handle signup called");
    console.log(cred);
    console.log(typeof (cred));
    const url = "http://192.168.34.178:3000/user/signup";
    axios.post(url, cred)
      .then((res) => {
        const result = res.data;
        const { status, message, data } = result;
        if (status !== 'SUCCESS') {
          handleMessage(message);
        } else {
          handleMessage("signup successful");
          // Navigate to the home screen
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log(err);
        console.error("Error during signup:", err);
        handleMessage("Error during signup");
      });
  };

  const handleMessage = (message) => {
    setMessage(message)

  }
  return (
    <View style={{ bottom: 30 }}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        placeholderTextColor={'black'}
        value={name}
        onChangeText={(text) => setName(text)} />


      <TextInput
        style={styles.input}
        placeholder='email'
        keyboardType='email-address'
        placeholderTextColor={'black'}
        value={email}
        onChangeText={(text) => setEmail(text)} />

      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor={'black'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} />
      <Button text={'SignIn'} tcolor={'white'} color={'#0B0909'} onpress={() => handlesignup({ name, email, password })} />
      <Button text={'other methode'} color={'white'} tcolor={'black'} height={30} onpress={() => setModalVisible(true)} />

      <Other modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Text>{message}</Text>
    </View >
  )
}

export default SignUpForm

const styles = StyleSheet.create({
  input: {
    height: 45,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    paddingLeft: 10,
    borderRadius: 15,
  },
});
