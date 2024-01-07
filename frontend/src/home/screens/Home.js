import { StyleSheet, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import Choose from '../components/choose'
import Footer from '../footer/footer'

const Home = () => {
  return (
    <View style={{flex : 1}} >
      <Map />
      <Choose/>
      <Footer/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
