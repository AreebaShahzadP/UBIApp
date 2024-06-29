import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Button, Input} from '../../../components';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      setError('Please enter your email address');
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
    } else if (password === '') {
      setError('Please enter your password');
    } else if (password.length < 8) {
      setError('Password must be more than 8 letters');
    } else if (password.length > 24) {
      setError('Password should be less then 24 letters');
    } else {
      setError('');
      setLoading(true);

      setTimeout(() => {
        console.log(email, password);
        setLoading(false);
        navigation.navigate('Patients');
      }, 2000);
    }
  };

  return (
    // <KeyboardAvoidingView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Login</Text>
        <Text style={styles.txt1}>
          Please enter your email address {'\n'} and password
        </Text>
      </View>

      <View>
        <Input
          iconName="email"
          iconColor="#666666"
          iconSize={20}
          placeholder="Email address"
          placeholderTextColor="#666666"
          value={email}
          onChangeText={text => setEmail(text)} //its a callback function and i store a data in useState and get from it
          secureTextEntry={false}
        />
        <Input
          iconName="lock"
          iconColor="#666666"
          iconSize={20}
          placeholder="Password"
          placeholderTextColor="#666666"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        {error && (
          <View
            style={{
              paddingVertical: 5,
              marginHorizontal: 10,
            }}>
            <Text style={{color: 'red', fontSize: 13}}>{error}</Text>
          </View>
        )}

        <Button
          onPress={onSubmit}
          title="Login"
          loading={loading}
          style={styles.btn}
          textStyle={{
            fontSize: 20,
            color: 'white',
          }}
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.txt1}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.txt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};
export default LoginScreen;
