import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const PatientScreen = ({navigation}: any) => {
  // const patien
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../..//assets/images/pic2.jpg')}
        />
        <Text style={styles.txt} numberOfLines={1}>
          Patients
        </Text>
        <Image
          style={styles.img}
          source={require('../../..//assets/images/pic2.jpg')}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Select Filter"
          placeholderTextColor={'black'}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-down" color="black" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'black'}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="magnify" color="black" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.rendermainContainer}>
          <View style={styles.renderitemsContainer}>
            <View style={styles.renderitems}>
              <View style={styles.txtcontainer}>
                <Text style={styles.inputtxt}>Patient Name</Text>
                <Text style={styles.inputtxt1}>John</Text>
              </View>
              <View style={styles.txtcontainer}>
                <Text style={styles.inputtxt}>Patient Email</Text>
                <Text style={styles.inputtxt1}>johnpakistani@gmail.com</Text>
              </View>
              <View style={styles.txtcontainer}>
                <Text style={styles.inputtxt}>Physician Name</Text>
                <Text style={styles.inputtxt1}>Allergia</Text>
              </View>
              <View style={styles.txtcontainer}>
                <Text style={styles.inputtxt}>DOB</Text>
                <Text style={styles.inputtxt1}>03-1-2222</Text>
              </View>
              <View style={styles.txtcontainer}>
                <Text style={styles.inputtxt}>Gender</Text>
                <Text style={styles.inputtxt1}>Male</Text>
              </View>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  // style={styles.icon}
                  name="message-text-outline"
                  color="black"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Patient')}
            style={styles.button}>
            <Text style={styles.buttontxt}>View Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatientScreen;
