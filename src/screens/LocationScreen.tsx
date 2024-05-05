import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationScreen = () => {
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return Geolocation.requestAuthorization('whenInUse');
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message: 'Can we access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
          console.log('You can use Geolocation');
          return true;
        } else {
          console.log('You cannot use Geolocation');
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  };
  useEffect(() => {
    requestLocationPermission().then(() => {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }, []);
  return (
    <View>
      <Text>LAt : 23,234</Text>
      <Text>LAt : 23,234</Text>
    </View>
  );
};

export default LocationScreen;
