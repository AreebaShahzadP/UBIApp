import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  outercontainer: {
    backgroundColor: '#FFFDF7',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innercontainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    padding: 10,
  },
  txt: {
    backgroundColor: '#F0DFC7',
    color: 'black',
    fontWeight: 'bold',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  btntxt: {
    paddingHorizontal: 10,
    backgroundColor: 'green',
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 5,
    color: 'white',
  },
  icons: {
    padding: 5,
    backgroundColor: '#74AA51',
    marginLeft: 10,
    borderRadius: 5,
  },
  icons1: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
    marginLeft: 10,
  },
  innercontainer1: {
    marginHorizontal: 10,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  txtstyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  txt1: {
    // backgroundColor: 'red',
    color: '#E5A00F',
    fontWeight: 'bold',
    margin: 5,
  },
  txt2: {
    marginTop: 5,
    color: '#7E7E7E',
  },
  radiocontainer: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  radiobuttonwrapper: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5A00F',
  },
  radiobutton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 3,
  },
  radioBG: {
    backgroundColor: '#E5A00F',
  },
  radiotxt: {
    color: 'black',
    marginHorizontal: 10,
  },
  container1: {
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
  txt3: {
    color: 'black',
    marginHorizontal: 8,
    marginVertical: 8,
    fontSize: 15,
  },
  wrappercontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  radiocontainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobutton1: {
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
  txt4: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  txt5: {
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
