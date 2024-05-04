import React from 'react';
import {View} from 'react-native';

const BasicScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 200,
        // padding: 10,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.4}} />
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
    </View>
  );
};

export default BasicScreen;
