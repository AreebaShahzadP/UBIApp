import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewProps,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IFilterInput {
  style?: StyleProp<ViewStyle>;
  placeHolder?: string;
  placeholderTextColor?: string;
  Iconname: string;
  Iconcolor: string;
  Iconsize: number;
}

const FilterInput: React.FC<IFilterInput> = ({
  style,
  placeHolder,
  placeholderTextColor,
  Iconcolor,
  Iconname,
  Iconsize,
}) => {
  return (
    <>
      <View style={[styles.inputcontainer, style]}>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={Iconname}
            color={Iconcolor}
            size={Iconsize}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 12,
  },
});

export default FilterInput;
