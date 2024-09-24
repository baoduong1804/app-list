import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { NavigationContainer, NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";


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
  const navigation : NavigationProp<RootStackParamList> = useNavigation()
  const [userName,setUserName] = useState("")
  const [passWord,setPassWord] = useState("")
  const [urlAvatar,setUrlAvatar] = useState("")
  
  const infor = {
    userName,
    passWord,
    urlAvatar
  }

    const handleImage = (url:string) => {
    if(url.length >= 4500){
      alert("The image URL is too long. Could you choose a shorter one?")
      setUrlAvatar("")
    } else{
      setUrlAvatar(url)
    }
  }
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
           value={userName}
           onChangeText={(v)=>setUserName(v)}
         />
        </View>
        {/* Password Input */}
        <View>
         <Text style={{fontSize:20,marginBottom:5}}> Password</Text>
         <TextInput 
         style={styles.input}
         secureTextEntry={true}
         placeholder="Enter password"
         value={passWord}
          onChangeText={(v)=>setPassWord(v)}
         />
        </View>
         {/* Avatar input */}
        <View>
         <Text style={{fontSize:20,marginBottom:5}}> URL Avatar</Text>
         <TextInput 
         style={styles.input}
         placeholder="URL"
         onChangeText={handleImage}
         value={urlAvatar}
         />
        </View>
        
        <Button title="Submit"
        onPress={()=> navigation.navigate("about",infor)}
        />

   </View>
    )
}

export default LoginScreen