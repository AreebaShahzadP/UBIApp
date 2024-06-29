import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {Button, FilterInput, Input} from '../../../components';

const Prescription = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Presciption Writer</Text>
        <Text style={styles.heading}>Consultation Type</Text>
        <FilterInput
          style={styles.input}
          Iconcolor="black"
          Iconname="chevron-down"
          Iconsize={20}
        />
        <Text style={styles.heading}>Consultant</Text>
        <FilterInput
          style={styles.input}
          Iconcolor="black"
          Iconname="chevron-down"
          Iconsize={20}
        />
        <Text style={styles.heading}>Consultantion Notes</Text>
        <View style={styles.wrappercontainer}>
          <Text style={styles.txt}>
            Reason for Visit: Erectile dysfunction {'\n'}HPI: 32 Years Old Male
            presented with complaints {'\n'}of erectile dysfunction. Chart
            Reviewed. No{'\n'} contraindications to treatment. {'\n'}PMH:
            Diabetes Mellitus,Hyperlipidemia,Peyronie’s{'\n'}disease or other{' '}
            {'\n'}
            disorders of penile {'\n'}deformity,History of priapism {'\n'}
            Current Medications: Pertinent Past Medications:{'\n'} Social
            History:
            {'\n'}Smoking: {'\n'}Alcohol: {'\n'}Vitals: 90 to 160 mmHg {'\n'}
            Plan: UB Ready (UB Ready #1) (Tadalafil/ {'\n'}Vardenafil/
            Apomorphine) 5mg/5mg/3mg {'\n'}#20 ODT/month(total dispensed 90 ODT
            for 3 {'\n'}
            months), #3 Refills
          </Text>
        </View>
        <Text style={styles.heading}>Medicine</Text>
        <View style={styles.radiocontainer}>
          <View style={styles.radiobutton}>
            <View style={styles.radio}></View>
          </View>
          <View>
            <Text style={styles.txt1}>UB Ready</Text>
            <Text style={styles.txt2}>
              Tadalafil / Vardenafil / Apomorphine
            </Text>
          </View>
        </View>
        <View style={styles.radiocontainer}>
          <View style={styles.radiobutton}>
            <View style={styles.radio}></View>
          </View>
          <View>
            <Text style={styles.txt1}>Vandenafil RDT</Text>
            <Text style={styles.txt2}>
              Tadalafil / Vardenafil / Apomorphine
            </Text>
          </View>
        </View>
        <View style={styles.radiocontainer}>
          <View style={styles.radiobutton}>
            <View style={styles.radio}></View>
          </View>
          <View>
            <Text style={styles.txt1}>Tadalafil</Text>
            <Text style={styles.txt2}>Tadalafil</Text>
          </View>
        </View>
        <View style={styles.radiocontainer}>
          <View style={styles.radiobutton}>
            <View style={styles.radio}></View>
          </View>
          <View>
            <Text style={styles.txt1}>Sildenafil</Text>
            <Text style={styles.txt2}>
              Tadalafil / Vardenafil / Apomorphine
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.line} />

          <Text style={styles.heading}>Dosage</Text>
          <View style={styles.radiocontainer}>
            <View style={styles.radiobutton}>
              <View style={styles.radio}></View>
            </View>
            <Text style={{color: '#E5A00F', marginHorizontal: 5}}>#1</Text>
            <Text
              style={{
                color: 'black',
                marginLeft: '60%',
              }}>
              0mg/0mg/0mg
            </Text>
          </View>
          <View style={styles.radiocontainer}>
            <View style={styles.radiobutton}>
              <View style={styles.radio}></View>
            </View>
            <Text style={{color: '#E5A00F', marginHorizontal: 5}}>#2</Text>
            <Text
              style={{
                color: 'black',
                marginLeft: '60%',
              }}>
              0mg/0mg/0mg
            </Text>
          </View>
          <View style={styles.radiocontainer}>
            <View style={styles.radiobutton}>
              <View style={styles.radio}></View>
            </View>
            <Text style={{color: '#E5A00F', marginHorizontal: 5}}>#3</Text>
            <Text
              style={{
                color: 'black',
                marginLeft: '60%',
              }}>
              0mg/0mg/0mg
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.line} />
          <Text style={styles.heading}>Direction</Text>
          <Text style={styles.txt}>
            Take one under tongue, as needed 15-30 minutes before sexual
            activity; no more than one per 24 hours
          </Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.heading}>Quantity per month</Text>
          <FilterInput
            placeHolder="20 ODT / month"
            placeholderTextColor="#666666"
            Iconcolor="black"
            Iconname="chevron-down"
            Iconsize={20}
          />
        </View>
        <View>
          <Text style={styles.heading}>Number of month supply</Text>
          <FilterInput
            placeHolder="Every 3 Month"
            placeholderTextColor="#666666"
            Iconcolor="black"
            Iconname="chevron-down"
            Iconsize={20}
          />
        </View>
        <Button style={{marginVertical: 10}} onPress={() => {}} title="Save" />
      </View>
    </ScrollView>
  );
};

export default Prescription;
