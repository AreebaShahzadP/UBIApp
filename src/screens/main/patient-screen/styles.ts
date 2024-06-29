import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    marginTop: 5,
  },

  rendermainContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  renderitemsContainer: {
    flexDirection: 'row',
  },
  renderitems: {
    flex: 1,
    paddingHorizontal: 5,
  },
  txtcontainer: {
    flexDirection: 'row',
  },
  inputtxt: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  inputtxt1: {
    flex: 1,
    color: 'black',
    fontSize: 13,
  },
  icon: {
    paddingHorizontal: 5,
  },
});

export default styles;
