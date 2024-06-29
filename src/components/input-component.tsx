import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IInputProps {
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  placeholderTextColor: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  iconName: string;
  iconSize: number;
  iconColor: string;
}
const Input: React.FC<IInputProps> = ({
  style,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  iconName,
  iconColor,
  iconSize,
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name={iconName}
          color={iconColor}
          size={iconSize}
        />
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 5,
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
    color: 'black',
    flex: 1,
    paddingLeft: 5,
    fontSize: 12,
  },
});

export default Input;
