import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../auth/components/button';
import DatePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Ride = () => {
  const [message, setMessage] = useState()
  const [departure, setDepart] = useState('');
  const [destination, setArri] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [carModel, setCarModel] = useState('');
  const navigation = useNavigation(); // Initialize the navigation object

  const details = [
    {
      title: 'From .. to ..',
      detail: [
        { text: 'Departure town', placeholder: 'Enter departure town', value: departure, setValue: setDepart },
        { text: 'Arrival town', placeholder: 'Enter arrival town', value: destination, setValue: setArri },
      ],
    },
    {
      title: 'Date & time',
      detail: [
        { text: 'Date', placeholder: 'Enter Date', value: date, setValue: setDate },
        { text: 'Time', placeholder: 'Enter time', value: time, setValue: setTime },
      ],
    },
    {
      title: 'Details',
      detail: [
        { text: 'Meeting Location', placeholder: 'Enter meeting location', value: location, setValue: setLocation },
        { text: 'Price per person', placeholder: 'Enter Price per person', value: price, setValue: setPrice },
        { text: 'Car model', placeholder: 'Enter Car Model', value: carModel, setValue: setCarModel },
      ],
    },
  ];

  const Data = [
    { id: '1', title: 'Pets allowed', icon: 'paw' },
    { id: '2', title: 'Non-smoking', icon: 'ban' },
    { id: '3', title: 'Baggage and additional items', icon: 'suitcase' },
  ];

  const [selected, setSelected] = useState([]);
  const toggleSelection = (itemId) => {
    if (selected.includes(itemId)) {
      setSelected(selected.filter((id) => id !== itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };

  const PreferenceItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.preference, selected.includes(item.id) && { backgroundColor: 'grey' }]}
      onPress={() => toggleSelection(item.id)}
    >
      <Icon name={item.icon} size={24} color="black" />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const handlePostRide = async () => {
    console.log("Handle Post ride ");
    const token = await AsyncStorage.getItem('userToken');

    //Include the Authorization header in the request
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Assuming JSON payload
      },
    };

    const rideData = {
      departure: departure,
      destination: destination,
      date: date,
      meetingLocation: location,
      price: price,
      carModel: carModel,
      preferences: selected,
    };
    console.log(rideData);
    console.log(typeof (rideData));
    const url = "http://192.168.34.178:3000/ride/offer";
    axios.post(url, rideData, config)
      .then(response => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== 'SUCCESS') {
          handleMessage(message);
          console.log(message)
        } else {
          handleMessage("ride added successfully");
          // Navigate to the home screen
          navigation.navigate('Home');
        }

      })
      .catch(error => {
        console.error('Error adding ride:', error);
      });
  };
  const handleMessage = (message) => {
    setMessage(message)

  }

  return (
    <View style={styles.container}>
      {details.map((item) => (
        <View key={item.title}>
          <Text style={styles.title}>{item.title}</Text>
          {item.detail.map((d) => (
            <View key={d.text}>
              {d.text === 'Date' && (
                <DatePicker
                  style={{ width: 200, marginBottom: 10 }}
                  value={date}
                  mode="date"
                  placeholder="Select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={(newDate) => setDate(newDate)}
                />
              )}
              {d.text === 'Time' && (
                // Implement time input component here if needed
                <Input
                  text={d.text}
                  placeholder={d.placeholder}
                  value={time}
                  setValue={setTime}
                />
              )}
              {(d.text !== 'Date' && d.text !== 'Time') && (
                <Input
                  text={d.text}
                  placeholder={d.placeholder}
                  value={d.value}
                  setValue={d.setValue}
                />
              )}
            </View>
          ))}
        </View>
      ))}

      <View>
        <Text style={styles.title}>Preferences</Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PreferenceItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Button color={'#b3b3ff'} text={'Post ride offer'} onpress={() => handlePostRide()} />
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
  preference: {
    alignItems: 'center',
    marginRight: 16,
    height: 60,
    borderRadius: 10,
    padding: 10,
  },
});

export default Ride;
