import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Raw from './Raw'
import car1 from "../pics/car1.png"
import car2 from "../pics/car2.png"
import car3 from "../pics/car3.png"


const Choose = () => {

  const drivers = [
    {
      id: 1,
      name: 'عبد الله',
      distance: ' 5 km',
      vehicule: 'Peugeot 301',
      price: ' 20 DT',
      image: car1
    },
    {
      id: 2,
      name: 'فاطمة',
      distance: ' 8 km',
      vehicule: 'Renault Symbol',
      price: ' 15 DT',
      image : car2
    },
    {
      id: 3,
      name: 'محمد',
      distance: ' 10 km',
      vehicule: 'Kia Rio',
      price: ' 18 DT',
      image : car3
    },
    {
      id: 4,
      name: 'سارة',
      distance: ' 3 km',
      vehicule: 'Hyundai Accent',
      price: ' 25 DT',
    },
    {
      id: 5,
      name: 'يوسف',
      distance: ' 12 km',
      vehicule: 'Volkswagen Polo',
      price: ' 22 DT',
    },
  ];

  return (
    <View style={{height : "40%"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {drivers.map((driver,index) => (
        <Raw name={driver.name}
             key={index}
             distance={driver.distance}
             vehicule={driver.vehicule}
             price={driver.price} image={driver.image}/>
      ))}
    </ScrollView>
    </View>
  )
}

export default Choose

const styles = StyleSheet.create({});

