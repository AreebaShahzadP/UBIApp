import React, {useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Prescription, PrimaryHeader} from '../../../components';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Inquires = () => {
  const [selected, setSelected] = useState(0);
  console.log(selected, 'selected value');
  return (
    <View style={styles.container}>
      <PrimaryHeader
        title="Inquiries"
        imgSource={require('../../../assets/images/pic2.jpg')}
      />
      <View style={styles.outercontainer}>
        <Text style={styles.txt}>New Prescription Request</Text>
        <View style={styles.innercontainer}>
          <TouchableOpacity>
            <Text style={styles.btntxt}>InProgress</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.icons}
            name="contacts"
            color={'white'}
            size={15}
          />
          <MaterialCommunityIcons
            style={styles.icons}
            name="chart-box-plus-outline"
            color={'white'}
            size={15}
          />
          <MaterialCommunityIcons
            style={styles.icons1}
            name="shape-plus"
            color={'white'}
            size={15}
          />
        </View>
        <View style={styles.innercontainer1}>
          <Text style={styles.txtstyle}>
            Vardenafili RDT (Vardenafili
            RDT)(Tadalafili/Vardenafili/Apomorphine)
            <Text style={styles.txt1}> 10 mg</Text>
          </Text>
        </View>
        <View style={styles.innercontainer1}>
          <Text style={styles.txt2}>
            #30 ODT / month (total dispensed 90 ODT for 3 {'\n'} months), #3
            Refills
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <TouchableOpacity onPress={() => setSelected(1)}>
            <View style={styles.radiocontainer}>
              <View style={styles.radiobuttonwrapper}>
                <View
                  style={[
                    styles.radiobutton,
                    selected === 1 && styles.radioBG,
                  ]}></View>
              </View>
              <Text style={styles.radiotxt}> Approve as above</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(2);
            }}>
            <View style={styles.radiocontainer}>
              <View style={styles.radiobuttonwrapper}>
                <View
                  style={[
                    styles.radiobutton,
                    selected === 2 && styles.radioBG,
                  ]}></View>
              </View>
              <Text style={styles.radiotxt}> Approve with change</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(3);
            }}>
            <View style={styles.radiocontainer}>
              <View style={styles.radiobuttonwrapper}>
                <View
                  style={[
                    styles.radiobutton,
                    selected === 3 && styles.radioBG,
                  ]}></View>
              </View>
              <Text style={styles.radiotxt}> Disapprove</Text>
            </View>
          </TouchableOpacity>
        </View>
        {selected === 1 && <Prescription />}
        {/* condition */}
        {selected === 2 && <Prescription />}
        {selected === 3 && <Prescription />}
      </View>
      {/* <View style={styles.outercontainer}>
        <Text style={styles.txt}>New Prescription Request</Text>
        <View style={styles.innercontainer}>
          <TouchableOpacity>
            <Text style={styles.btntxt}>InProgress</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.icons}
            name="contacts"
            color={'white'}
            size={15}
          />
          <MaterialCommunityIcons
            style={styles.icons}
            name="chart-box-plus-outline"
            color={'white'}
            size={15}
          />
          <MaterialCommunityIcons
            style={styles.icons1}
            name="shape-plus"
            color={'white'}
            size={15}
          />
        </View>
        <View style={styles.innercontainer1}>
          <Text style={styles.txtstyle}>
            Vardenafili RDT (Vardenafili
            RDT)(Tadalafili/Vardenafili/Apomorphine)
            <Text style={styles.txt1}> 10 mg</Text>
          </Text>
        </View>
        <View style={styles.innercontainer1}>
          <Text style={styles.txt2}>
            #30 ODT / month (total dispensed 90 ODT for 3 {'\n'} months), #3
            Refills
          </Text>
        </View>
        <TouchableOpacity onPress={() => setSelected('4')}>
          <View style={styles.radiocontainer}>
            <View style={styles.radiobuttonwrapper}>
              <View style={styles.radiobutton}></View>
            </View>
            <Text style={styles.radiotxt}> Approve as above</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            <Menu
              onSelect={value => Alert.alert(`Selected number: ${value}`)}
              style={{backgroundColor: 'red'}}>
              <MenuTrigger>
                <Text>Click Me</Text>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption value={1} text="One" />
                <MenuOption value={2}>
                  <Text style={{color: 'red'}}>Two</Text>
                </MenuOption>
                <MenuOption value={3} disabled={true} text="Three" />
              </MenuOptions>
            </Menu>;
          }}>
          <View style={styles.radiocontainer}>
            <View style={styles.radiobuttonwrapper}>
              <View style={styles.radiobutton}></View>
            </View>
            <Text style={styles.radiotxt}> Approve with change</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected('6');
          }}>
          <View style={styles.radiocontainer}>
            <View style={styles.radiobuttonwrapper}>
              <View style={styles.radiobutton}></View>
            </View>
            <Text style={styles.radiotxt}> Disapprove</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Inquires;
