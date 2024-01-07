import { Modal, StyleSheet, Text, TouchableOpacity , View, Linking} from 'react-native'
import React from 'react'

const Other = ( {modalVisible , setModalVisible}) => {
  const handleSignIn = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.buttonContainer,{backgroundColor: '#e60000'}]}
              onPress={() => handleSignIn('https://accounts.google.com')}>
              <Text style={styles.buttonText}>Connect with gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer,{backgroundColor: '#0066ff'}]}
              onPress={() => handleSignIn('https://www.facebook.com')}>
                <Text style={styles.buttonText}>Connect with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer,{backgroundColor: 'white'}]}
              onPress={() => handleSignIn('https://appleid.apple.com')}>
                <Text style={styles.buttonText}>Connect with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor : 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    margin: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose:{
    borderRadius : 40,
    width : 40,
    height : 40,
    backgroundColor : "white",
    alignItems : 'center',
    justifyContent : 'center'
  }
})