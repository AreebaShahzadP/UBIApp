import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, Patient, PatientScreen, SignupScreen} from './src/screens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Patients" component={PatientScreen} />
        <Stack.Screen name="Patient" component={Patient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
