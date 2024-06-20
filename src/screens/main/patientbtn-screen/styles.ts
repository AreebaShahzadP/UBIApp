import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
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
  txt: {
    // backgroundColor: 'orange',
    color: 'white',
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
