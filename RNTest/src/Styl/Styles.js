
import { StyleSheet,Dimensions} from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get('window')



const styles = StyleSheet.create({

  //Splash
  Splash_v_background: {
  backgroundColor:'#ff7979',
    flex:1,
    alignItems: "center",
     justifyContent:'center',
    textAlign:'center'
  },
  Splash_v_text: {
    color:'#fff',
    fontSize:20
    },
 
  //Login
  lcontainer:{
    flex: 1,
    flexDirection:'column',
   
    alignItems: 'center',
    backgroundColor: '#ff7979',
  },
  linputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  linputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  linputIcon:{
    width:height*.03,
    height:height*.03,
    marginLeft:15,
   
    justifyContent: 'center'
  },
  lbuttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  lloginButton: {
    backgroundColor: "gray",
  },
  lloginText: {
    color: 'white',
  }
  ,
 Toolbar: {
   height:height*.06,
   flexDirection:'row',
   width:width,
   marginBottom:height*.2,
   justifyContent:'space-between'
  }
  ,
    //Main

    
    Form_View_122: {
      backgroundColor:'#fff',
      flexDirection:'column',
      flex:1
    },
    Form_View_123: {
      alignItems:'center',
    justifyContent:'space-between',
    height:height*.08,
    backgroundColor:'#2756b0',
    flexDirection:'row'
  },
  Form_View_124: {
    margin:10,
    flexDirection:'row'
  },

  ///////
  });

  export default styles