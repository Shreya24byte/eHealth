import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const Header = props => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>eHEALTH</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.props}>{props.data}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    fontWeight: 'bold',
    backgroundColor: 'blue',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 40,
    marginLeft: 140,
  },
  subHeader: {
    backgroundColor: '#D3D3D3',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 50,
    width: 240,
    position: 'absolute',
    top: 100,
    marginLeft: 80,
    marginRight: 'auto',
    padding: 8,
  },
  props: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
