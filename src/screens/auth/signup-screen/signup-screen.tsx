import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Button, Input} from '../../../components';

const SignupScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex pattern
    const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;

    if (username === '') {
      setError('Please enter Username');
    } else if (!usernamePattern.test(username)) {
      setError(
        'Username must be 3-15 characters long and can only contain alphanumeric characters and underscores',
      );
    } else if (email === '') {
      setError('Please enter your email');
    } else if (!emailPattern.test(email)) {
      //test is a method, which check if the email matches regex pattern
      setError('Please enter a valid Email');
    } else if (password === '') {
      setError('Please enter your password');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else if (password.length > 24) {
      setError('Password must be atleast 24 characters long');
    } else {
      setError('');
      setLoading(true);

      setTimeout(() => {
        console.log(email, password, username);
        setLoading(false);
        navigation.navigate('Login');
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>Sign Up</Text>
      </View>
      <Input
        iconName="account"
        iconColor="black"
        iconSize={20}
        placeholder="Username"
        placeholderTextColor="#666666"
        value={username}
        onChangeText={text => setUsername(text)}
        secureTextEntry={false}
      />
      <Input
        iconName="email"
        iconColor="black"
        iconSize={20}
        placeholder="Email"
        placeholderTextColor="#666666"
        value={email}
        onChangeText={text => setEmail(text)}
        secureTextEntry={false}
      />
      <Input
        iconName="lock"
        iconColor="black"
        iconSize={20}
        placeholder="Password"
        placeholderTextColor="#666666"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      {error && (
        <Text
          style={{
            color: 'red',
            paddingHorizontal: 10,
          }}>
          {error}
        </Text>
      )}
      <Button
        style={styles.button}
        onPress={onSubmit}
        title="Sign Up"
        loading={loading}
      />
      <View style={styles.wrapper}>
        <Text style={styles.txt1}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.txt2}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
