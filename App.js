import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Country" conponent={ScreenA} />
        <Stack.Screen name="Number" conponent={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
