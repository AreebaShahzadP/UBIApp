import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const SignupScreen = ({navigation}:any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passord, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Sign Up</Text>
      </View>
      <View style={styles.inputcontainer}>
        <MaterialCommunityIcons name="account" color="black" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'#666666'}
          value={username}
          onChangeText={text => setUsername(text)}
          secureTextEntry={false}
        />
      </View>
      <View style={styles.inputcontainer}>
        <MaterialCommunityIcons name="email" color="black" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#666666'}
          value={email}
          onChangeText={text => setEmail(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputcontainer}>
        <MaterialCommunityIcons name="lock" color="black" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#666666'}
          value={passord}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}
      style={styles.button}>
        <Text style={styles.btntxt}>Sign Up</Text>
      </TouchableOpacity >
      <View style={[styles.wrapper,{
        marginVertical:10,
        paddingVertical:5,
      }]}>
        <Text style={styles.txt1}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.txt2}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default SignupScreen;
