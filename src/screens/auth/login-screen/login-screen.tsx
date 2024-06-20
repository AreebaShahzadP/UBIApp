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

const LoginScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
          <Text style={styles.txt}>Login</Text>
          <Text style={styles.txt1}>
            Please enter your email address {'\n'} and password
          </Text>
        </View>

        <View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email" color="#666666" size={20} />
          <TextInput style={styles.input}
            placeholder={'Email address'}
            placeholderTextColor='#666666'
            value={email}
            onChangeText={text=> setEmail(text)}
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock" color="#666666" size={22} />
          <TextInput style={styles.input}
            placeholder={'Password'}
            placeholderTextColor='#666666'
            value={password}
            onChangeText={text => setPassword(text)} //its a callback function and i store a data in useState and get from it
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress= {()=>navigation.navigate('Patients')}
        style={styles.button}>
          <Text style={styles.buttontxt}>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.heading}>
          <Text style={styles.txt1}>Don't have an account??</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.txt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default LoginScreen;
