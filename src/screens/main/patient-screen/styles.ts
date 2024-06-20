import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
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
    // backgroundColor: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  inputcontainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    // borderColor: '#AEAEAE',
    // borderWidth: 2,
    borderRadius: 10,
    height: 43,
    marginTop: 7,
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
    // backgroundColor: 'red',
    flex: 1,
    color: 'black',
    fontSize: 12,
  },
  rendermainContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 8,
    paddingVertical: 10,
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
  renderitemsContainer: {
    flexDirection: 'row',
    // position: 'absolute',
  },
  renderitems: {
    flex: 1,
    // backgroundColor: 'white',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  txtcontainer: {
    flexDirection: 'row',
  },
  inputtxt: {
    // backgroundColor: 'white',
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5,
  },
  inputtxt1: {
    flex: 1,
    // backgroundColor: 'tomato',
    color: 'black',
    fontSize: 15,
  },
  icon: {
    // backgroundColor: 'orange',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#E5A00F',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
  },
  buttontxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
