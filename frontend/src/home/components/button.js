import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = () => {
  return (
  <TouchableOpacity>
    <View style={{backgroundColor : '#66a3ff',padding : 10, borderRadius : 10}}>
      <Text>Take a ride</Text>
    </View>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})