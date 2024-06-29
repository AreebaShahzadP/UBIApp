import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Inquires,
  LoginScreen,
  Patient,
  PatientScreen,
  Prescription,
  SignupScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inquires"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Patients" component={PatientScreen} />
        <Stack.Screen name="Patient" component={Patient} />
        <Stack.Screen name="Inquires" component={Inquires} />
        <Stack.Screen name="Prescription" component={Prescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
