import {StyleSheet} from 'react-native'
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
      justifyContent: 'center'    
    },
    txt: {
      color: '#E5A00F',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 18,
    },
    inputcontainer: {
      backgroundColor: 'white',
      height:48,
      marginHorizontal: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
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
      color:'black',
      // paddingHorizontal:5,
      fontSize:12,
      flex: 1,
      // backgroundColor: 'green',
    },
    btntxt: {
      color: 'white',
      // backgroundColor: 'red',
    },
    button: {
      backgroundColor: '#E5A00F',
      height: 48,
      marginHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
    },
    txt1: {
      fontSize: 16,
      color: 'black',


    },  
    txt2: {
      fontSize: 16,
      paddingLeft:2,
      color: '#E5A00F',
    },
  });

  export default styles