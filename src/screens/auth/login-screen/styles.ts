import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  wrapper: {
    //   backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E5A00F',
    paddingHorizontal: 2,
  },
  txt1: {
    textAlign: 'center',
    color: 'black',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: 'white',
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    marginHorizontal:10,
    borderRadius:10,
    paddingHorizontal:5,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,

//  dekhen
    //   backgroundColor: 'white',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:'center',
    // // paddingHorizontal: 25,
    // marginHorizontal: 10,
    // paddingLeft:10,
    // borderRadius: 10,
    // marginVertical: 5,
    // color: 'black',
    // height: 48,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  input: {
    color: 'black',
    // backgroundColor:'white',
    flex:1,
    paddingLeft:5,
    fontSize:12,

  },
  button: {
    // backgroundColor: 'black',
      backgroundColor: '#E5A00F',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
  },
  buttontxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default styles;
