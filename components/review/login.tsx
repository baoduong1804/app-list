import { Button, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import ImagePickerExample from "./imagePicker";

const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        backgroundColor:"#fff",
        paddingHorizontal:15
    },
    header:{
      borderBlockColor:"aqua",
      borderBottomWidth:1,
      marginBottom:10,
      
    },
    input:{
      borderColor:"aqua",
      borderWidth:1,
      paddingHorizontal:10,
      paddingVertical:5,
      fontSize:15,
      borderRadius:10,
      marginBottom:25
    }
  });
const LoginScreen = () => {
    return (
    <View style={styles.centeredView}>
         {/* Body */}
         <View style={styles.header}>
         </View>
         {/* Username Input */}
        <View>
         <Text style={{fontSize:20,marginBottom:5}}>User name:</Text>
         <TextInput
           style={styles.input}
           placeholder="Enter User name"
         />
        </View>
        {/* Password Input */}
        <View>
         <Text style={{fontSize:20,marginBottom:5}}> Password</Text>
         <TextInput 
         style={styles.input}
         secureTextEntry={true}
         placeholder="Enter password"
         />
        </View>
         {/* Avatar input */}
        <View>
         <Text style={{fontSize:20,marginBottom:5}}> URL Avatar</Text>
         <TextInput 
         style={styles.input}
         placeholder="URL"
         />
        </View>
        
        <Button title="Submit"
        />

   </View>
    )
}

export default LoginScreen