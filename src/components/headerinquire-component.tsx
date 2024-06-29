import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IHeaderInquireProp {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
  Iconname: string;
  Iconcolor: string;
  Iconsize: number;
}

const HeaderInquire: React.FC<IHeaderInquireProp> = ({
  style,
  title,
  onPress,
  Iconcolor,
  Iconname,
  Iconsize,
}) => {
  return (
    <>
      <View style={[styles.header, style]}>
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          <MaterialCommunityIcons
            name={Iconname}
            color={Iconcolor}
            size={Iconsize}
          />
        </TouchableOpacity>
        <Text style={styles.headertxt}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#21215D',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    alignItems: 'center',
  },
  icon: {
    // backgroundColor: 'red',
    marginHorizontal: 10,
  },
  headertxt: {
    // backgroundColor: 'orange',
    color: 'white',
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HeaderInquire;
