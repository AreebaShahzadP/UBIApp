import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

interface IBtnProps {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
}

const Button: React.FC<IBtnProps> = ({
  onPress,
  title,
  style,
  textStyle,
  loading,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttontxt, textStyle]}>
        {loading ? <ActivityIndicator size={'small'} color="white" /> : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#21215D',
    // marginHorizontal: 10,
    alignItems: 'center',
    // marginVertical: 10,
    borderRadius: 10,
    height: 43,
    justifyContent: 'center',
  },
  buttontxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
