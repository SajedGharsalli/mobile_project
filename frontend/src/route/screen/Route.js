import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import React from 'react'
import Card from '../component/Card';
import Footer from '../../home/footer/footer';

const Route = () => {
    const cardsData = [
        {
          id : 1,
          title: 'cité ghazala - marsa',
          name: 'jon doe',
          description: 'Description for Card 1',
          review: '*****',
        },
        {
          id : 2,
          title: 'bardo - supcom',
          name: 'walter white',
          description: 'Description for Card 2',
          review: '****',
        },
        {
          id : 3,
          title: 'cité ghazala - lac1',
          name: 'homelander',
          description: 'Description for Card 3',
          review: '***',
          
        },
        {
          id : 4,
          title: 'bab alioua - ezzahra',
          name: 'jhon snow',
          description: 'Description for Card 4',
          review: '*****',
        },
      ];
    
      return (
    <View style={styles.container}>
        <ScrollView>
          <Text style={styles.pageTitle}>Your ancient rides</Text>
          {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        title={card.title}
                        review={card.review}
                        description={card.description}
                    />
                ))}
        </ScrollView>
        <Footer/>
    </View>
  )
}

export default Route

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 30,
      },
      pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
      },
})