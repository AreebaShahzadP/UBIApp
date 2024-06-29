import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#21215D',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
  btntxt: {
    color: 'white',
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  txt1: {
    paddingTop: 3,
    fontSize: 16,
    color: 'black',
    // fontWeight: 'bold',
  },
  txt2: {
    fontSize: 16,
    paddingLeft: 2,
    color: '#21215D',
    fontWeight: 'bold',
    paddingTop: 3,
  },
});

export default styles;
