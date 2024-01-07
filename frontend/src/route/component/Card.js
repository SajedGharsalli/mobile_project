import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Card = ({name,image,title,description,review}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.premium}>{review}</Text>
            
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
      },
      image: {
        width: '30%',
        aspectRatio: 1,
        marginRight: 10,
        borderRadius: 8,
      },
      textContainer: {
        flex: 1,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 14,
        color: '#555',
      },
      premium: {
        fontSize: 12,
        color: 'green',
        marginTop: 5,
      },
      name: {
        fontSize: 14,
        color: '#333',
      },
})