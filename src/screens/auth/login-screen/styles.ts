import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: 'pink',
      justifyContent: 'center',
      // alignItems:'center'
    },
    wrapper: {
    //   backgroundColor: 'red',
      // height: 100,
    },
    txt: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#E5A00F',
      marginHorizontal:10
    },
    txt1: {
      textAlign: 'center',
      color: 'black',
      marginVertical: 5,
      fontWeight: 'bold',
    },
    input: {
      // fontSize: 18,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent:'center',
      // borderWidth: 2,
      paddingLeft: 10,
      marginHorizontal: 10,
      borderColor: 'grey',
      borderRadius: 10,
      marginVertical: 5,
      color: 'black',
      height: 48,
      // width:"95%",
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    button: {
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
   heading:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
   }
  });

  export default styles