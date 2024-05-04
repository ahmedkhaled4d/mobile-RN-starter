import React from 'react';
// import FlatListData from './src/screens/FlatListData';
// import HomeScreen from './src/screens/HomeScreen';
// import {ChatScreen} from './src/screens/ChatScreen';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlatListData from './src/screens/FlatListData';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatListData />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
export default App;
