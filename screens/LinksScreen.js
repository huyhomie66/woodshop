import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
  <View><Text>Link Screen</Text></View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
