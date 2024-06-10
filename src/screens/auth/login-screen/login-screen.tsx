import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
          <Text style={styles.txt}>Login</Text>
          <Text style={styles.txt1}>
            Please enter your email address {'\n'} and password
          </Text>
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons name="email" color="#666666" size={20} />
          <TextInput
            placeholder={'Email address'}
            placeholderTextColor='#666666'
            value={email}
            onChangeText={text=> setEmail(text)}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons name="lock" color="#666666" size={20} />
          <TextInput
            placeholder={'Password'}
            placeholderTextColor='#666666'
            value={password}
            onChangeText={text => setPassword(text)} //its a callback function and i store a data in useState and get from it
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.heading}>
          <Text style={styles.txt1}>Don't have an account??</Text>
          <TouchableOpacity>
          <Text style={styles.txt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default LoginScreen;
