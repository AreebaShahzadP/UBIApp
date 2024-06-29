import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {
  Button,
  FilterInput,
  PrimaryHeader,
  SearchInput,
} from '../../../components';

const Data = [
  {
    id: '1',
    patientName: 'John',
    patientEmail: 'johnpakistani@gmail.com',
    physicianName: 'Allergia',
    dob: '03-1-2222',
    gender: 'Male',
  },
  {
    id: '2',
    patientName: 'Sami',
    patientEmail: 'samipakistani@gmail.com',
    physicianName: 'Allergia',
    dob: '03-1-2222',
    gender: 'Male',
  },
  {
    id: '3',
    patientName: 'Ahmed',
    patientEmail: 'ahmedpakistani@gmail.com',
    physicianName: 'Allergia',
    dob: '03-1-2222',
    gender: 'Male',
  },
  {
    id: '4',
    patientName: 'warda',
    patientEmail: 'warda@gmail.com',
    physicianName: 'Allergia',
    dob: '03-1-2222',
    gender: 'Female',
  },
  {
    id: '5',
    patientName: 'Ali',
    patientEmail: 'alipakistani@gmail.com',
    physicianName: 'Allergia',
    dob: '03-1-2222',
    gender: 'Male',
  },
  {
    id: '6',
    patientName: 'barish',
    patientEmail: 'barishpakistani@gmail.com',
    physicianName: 'Allergia',
    dob: '03-1-2222',
    gender: 'notdefined',
  },
];

const PatientScreen = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.rendermainContainer}>
      <View style={styles.renderitemsContainer}>
        <View style={styles.renderitems}>
          <View style={styles.txtcontainer}>
            <Text style={styles.inputtxt}>Patient Name</Text>
            <Text style={styles.inputtxt1}>{item.patientName}</Text>
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.inputtxt}>Patient Email</Text>
            <Text style={styles.inputtxt1}>{item.patientEmail}</Text>
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.inputtxt}>Physician Name</Text>
            <Text style={styles.inputtxt1}>{item.physicianName}</Text>
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.inputtxt}>DOB</Text>
            <Text style={styles.inputtxt1}>{item.dob}</Text>
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.inputtxt}>Gender</Text>
            <Text style={styles.inputtxt1}>{item.gender}</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Patient')}>
            <MaterialCommunityIcons
              name="message-text-outline"
              color="black"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        style={styles.btn}
        onPress={() => navigation.navigate('Inquires')}
        title="View Details"
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <PrimaryHeader
        title="Patients"
        imgSource={require('../../../assets/images/pic2.jpg')}
      />

      <FilterInput
        style={{marginHorizontal: 10, marginTop: 10}}
        placeHolder="Select Filter"
        placeholderTextColor="black"
        Iconname="chevron-down"
        Iconcolor="black"
        Iconsize={20}
      />

      <SearchInput
        style={{marginHorizontal: 10, marginTop: 10}}
        placeholder="Search"
        placeholderTextColor="black"
        Iconname="magnify"
        Iconcolor="black"
        Iconsize={20}
      />

      <FlatList
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PatientScreen;
