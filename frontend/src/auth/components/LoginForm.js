import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './button'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginForm = () => {
    const [message, setMessage] = useState()
    const [email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const navigation = useNavigation(); // Initialize the navigation object

    const handlelogin = (cred) => {

        console.log("Handle login called");
        console.log(cred);
        console.log(typeof (cred));
        const url = "http://192.168.34.178:3000/user/login";
        axios.post(url, cred)
            .then((res) => {
                const result = res.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    handleMessage(message);
                } else {
                    handleMessage("Login successful");
                    console.log(res.data);
                    // Navigate to the home screen
                    navigation.navigate('Home');
                    const userToken = res.data.token;
                    AsyncStorage.setItem('userToken', userToken);

                }
            }).catch(err => {
                console.log(err);
                console.error("Error during login:", err);
                handleMessage("Error during login");
            });
    };

    const handleMessage = (message) => {
        setMessage(message)

    }
    return (
        <View style={{ top: 20 }}>
            <TextInput
                style={styles.input}
                placeholder='email'
                placeholderTextColor={'black'}
                value={email}
                onChangeText={(text) => setEmail(text)} // Use an arrow function to update the state
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor={'black'}
                value={Password}
                onChangeText={setPassword}
                secureTextEntry={true} />
            <Button text={'Login'} color={'#0B0909'} onpress={() => handlelogin({ email, Password })} />
            <Text>{message}</Text>
        </View >
    )
}

export default LoginForm

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingLeft: 10,
        borderRadius: 15
    }
})