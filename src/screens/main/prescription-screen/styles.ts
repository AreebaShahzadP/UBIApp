import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    margin: 10,
    paddingHorizontal: 10,
    borderColor: '#D8D8D8',
    borderWidth: 1,
  },
  header: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    color: 'black',
    fontSize: 15,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
  },
  txt: {
    color: 'black',
    marginHorizontal: 8,
    marginVertical: 8,
    fontSize: 15,
  },
  wrappercontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  radiocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobutton: {
    marginVertical: 10,
    borderColor: '#E5A00F',
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  radio: {
    flex: 1,
    backgroundColor: '#E5A00F',
    borderRadius: 10,
    margin: 2,
  },
  txt1: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  txt2: {
    color: '#7E7E7E',
    marginHorizontal: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#7E7E7E',
    marginVertical: 10,
  },
});

export default styles;
