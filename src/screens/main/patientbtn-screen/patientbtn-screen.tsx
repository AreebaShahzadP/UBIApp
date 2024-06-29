import React from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import {HeaderInquire} from '../../../components';

const Patient = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <HeaderInquire
        onPress={() => navigation.goBack()}
        title="Patients"
        Iconname="keyboard-backspace"
        Iconcolor="white"
        Iconsize={20}
      />
      <View>
        <View></View>
      </View>
    </View>
  );
};

export default Patient;
