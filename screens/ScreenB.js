import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Header} from '../component/Header';
function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Country');
  };
  return (
    <View style={styles.container}>
      <Header data="Enter your Number" />
      <Button title="Next" onPress={onPressHandler} style={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 10,
    marginTop: 80,
  },
});

export default ScreenB;

