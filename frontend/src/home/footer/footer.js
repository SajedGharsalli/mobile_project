import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from './components/IconButton';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation()

  const HomeOnPressed = () =>{
    navigation.navigate('Home')
  }
  const RideOnPressed = () =>{
    navigation.navigate('Ride')
  }
  const ProfilOnPressed = () =>{
    navigation.navigate('Account')
  }
  const Chat=()=>{
    navigation.navigate('chat')
  }
  return (
    <View style={styles.footerContainer}>
      <IconButton name={"map-marked-alt"} text={"Map"} onPress={HomeOnPressed}/>
      <View style={styles.seperator} />
      <IconButton name={"route"} text={"Rides"} onPress={RideOnPressed}/>
      <View style={styles.seperator}/>
      <IconButton name={"comments"} text={"Messages"} onPress={Chat}/>
      <View style={styles.seperator}/>
      <IconButton name={"user-alt"} text={"Profile"} onPress={ProfilOnPressed}/>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0, 
    backgroundColor: 'white',
    height: 60,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.2,
  },
  seperator: {
    height : 60,
    borderRightWidth: 0.5,
    borderRightColor: 'grey',
  },
});

export default Footer;
