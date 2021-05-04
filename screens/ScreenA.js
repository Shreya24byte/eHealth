import React from 'react';
import {CheckBox, Button} from 'react-native-elements';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Header} from '../component/Header';
function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Number');
  };
  return (
    <View style={styles.container}>
      <Header data="Select your country" />
      <SafeAreaView style={styles.inputarea}>
        <CheckBox title="India" checked={true} />
        <CheckBox title="United States" />
        <CheckBox title="Japan" />
        <CheckBox title="Sri Lanka" />
        <CheckBox title="Others" />
      </SafeAreaView>
      <Button title="Next" style={styles.button} onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  button: {
    bottom: 0,
    left: 0,
    top: 100,
    borderRadius: 10,
    marginTop: 80,
  },
  inputarea: {
    height: 300,
    width: 240,
    position: 'absolute',
    top: 150,
    backgroundColor: '#D3D3D3',
    marginLeft: 80,
    marginRight: 'auto',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
});
export default ScreenA;
