import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Card = ({text,icon}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Icon name={icon} size={24} color={'black'}/>
        <Text style={{fontSize : 24, marginLeft: 36}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    container : {
        left : 15,
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical :8,
        paddingLeft : 12
    }
})