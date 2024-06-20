import React, {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Patient = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            color="white"
            size={20}
          />
        </TouchableOpacity>
        <Text style={styles.txt}>Patients</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Patient;
