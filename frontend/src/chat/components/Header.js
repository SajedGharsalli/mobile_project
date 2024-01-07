import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Header = () => {
  const handleBackToMainMenu = () => {
  };

  return (
    <View style={styles.header}>
      <View style={styles.circle}>
      </View>
      {/* Nom et prénom */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>John doe</Text>
        <Text style={styles.status}>Chauffeur vérifié</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex : 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.5)', // Couleur de fond du cercle
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  backButton: {
    borderRadius: 15,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
