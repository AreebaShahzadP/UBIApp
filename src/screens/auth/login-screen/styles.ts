import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  wrapper: {
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#21215D',
    paddingHorizontal: 2,
  },
  txt1: {
    textAlign: 'center',
    color: 'black',
    marginVertical: 5,
    fontSize: 16,

    // fontWeight: 'bold',
  },
  btn: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default styles;
