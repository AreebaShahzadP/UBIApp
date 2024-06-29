import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ISearchInput {
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  placeholderTextColor: string;
  Iconname: string;
  Iconcolor: string;
  Iconsize: number;
}

const SearchInput: React.FC<ISearchInput> = ({
  style,
  placeholder,
  placeholderTextColor,
  Iconcolor,
  Iconname,
  Iconsize,
}) => {
  return (
    <View style={[styles.inputcontainer, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
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
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    height: 45,
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
export default SearchInput;
