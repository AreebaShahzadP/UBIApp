import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IHeaderProp {
  style?: StyleProp<ViewStyle>;
  title: string;
  imgSource: any;
}

const PrimaryHeader: React.FC<IHeaderProp> = ({style, title, imgSource}) => {
  return (
    <>
      <View style={[styles.header, style]}>
        <Image style={styles.img} source={imgSource} />
        <Text style={styles.txt} numberOfLines={1}>
          {title}
        </Text>
        <Image style={styles.img} source={imgSource} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#21215D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default PrimaryHeader;
