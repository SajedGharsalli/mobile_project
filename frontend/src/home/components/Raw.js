import { StyleSheet, Text, View , Image, Dimensions} from 'react-native'
import React from 'react'
import Button from './button'

const Raw = ({name,distance,vehicule,price,image}) => {
  return (
    <View style={styles.offerBox}>
        <View style={{flexDirection: 'row', justifyContent : 'space-between'}} >
          <Image source={image} style={{width : 60 , height : 60}} />
          <Text style={styles.driverName}>{name}</Text>
        </View>
        <View style={{flexDirection : 'row',justifyContent:'space-between'}}>
          <View>
            <Text style={styles.distance}>{`Distance: ${distance}`}</Text>
            <Text style={styles.vehicleInfo}>{`Vehicule: ${vehicule}`}</Text>
            <Text style={styles.price}>{`Price: ${price}`}</Text>
          </View>
          <Button/>
        </View>
    </View>
  )
}

export default Raw

const styles = StyleSheet.create({
    offerBox: {
        padding : 15,
        marginVertical : 10,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3,
      },
      driverImage: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
      },
      driverName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      distance: {
        fontSize: 14,
        marginBottom: 4,
      },
      vehicleInfo: {
        fontSize: 14,
        marginBottom: 4,
      },
      price: {
        fontSize: 14,
        color: 'green',
        marginBottom: 4,
      }
})