import React from 'react';
import {View, Text} from 'react-native';

const Props = props => {
  console.warn('Props', props);
  return (
    <View>
      <Text style={{fontSize: 50}}>props.data</Text>
    </View>
  );
};
export default Props;
