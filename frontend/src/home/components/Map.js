import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps'; // Import Marker from react-native-maps
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const Map = ({image}) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Location permission not granted!');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);


  const syntoc ={latitude :36.890,
                 longitude : 10.179706}
  return (
    <MapView
      style={styles.map}
      showsMyLocationButton={true}
      showsUserLocation={true}
      initialRegion={{
        latitude: 36.890505,
        longitude: 10.181468,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker 
      coordinate={syntoc}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '55%',
  },
});
