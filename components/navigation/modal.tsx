import { useState } from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Button} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

interface Iprops {
    modalVisible: boolean,
    setModalVisible : (v:boolean) => void,
    addNew:any
}

const styles = StyleSheet.create({
  centeredView: {
      flex:1,
      backgroundColor:"#fff",
      paddingHorizontal:15
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderBlockColor:"aqua",
    borderBottomWidth:1,
    paddingVertical:10,
    marginBottom:30
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

const ModalText = (prop: Iprops) => {
  const {modalVisible , setModalVisible, addNew} = prop
  const [title,setTitle] = useState("")
  const [star,setStar] = useState("")
  const [image,setImage] = useState("")
  function randomInteger(min:number, max:number) { 
    return Math.floor(Math.random() * (max - min + 1)) +min;
   }

  const handleSubmit = () => {
    if (!title){
      alert("Enter music name, please")
      return
    }
    if (!star){
      alert("Enter rating music, please")
      return
    }
    addNew({
      id: randomInteger(1,200000),
      title: title,
      star: star,
      image:image
    })
    setTitle("")
    setStar("")
    setImage("")
    setModalVisible(false)
  }

  const handleChange = (value:string) => {
    const numberStar = parseInt(value,10)
    //check value is number and 1 to 5
    if(!isNaN(numberStar) && numberStar >= 1 && numberStar <= 5 ){
      setStar(numberStar+ "")
    }else if (value === ""){
      setStar("")
    }else{
      alert("Enter star: 1 to 5")
    }
  }
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.centeredView}>
               {/* Header */}
               <View style={styles.header}>
                <Feather name="menu" size={35} color="black" />
                <Text style={{fontSize:25}}> Add music</Text>
                <Ionicons name="exit-outline" size={35} color="black" 
                onPress={()=> setModalVisible(false)}
                />
               </View>
                {/* Body */}
                {/* title Input */}
               <View>
                <Text style={{fontSize:20,marginBottom:5}}>Title music:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(v)=>setTitle(v)}
                />
               </View>
               {/* Rating Input */}
               <View>
                <Text style={{fontSize:20,marginBottom:5}}> Rating</Text>
                <TextInput 
                style={styles.input}
                keyboardType="numeric"
                value={star}
                maxLength={1}
                  onChangeText={handleChange}
                />
               </View>
                {/* Image input */}
               <View>
                <Text style={{fontSize:20,marginBottom:5}}> URL Image</Text>
                <TextInput 
                style={styles.input}
                  onChangeText={(v)=>setImage(v)}
                />
               </View>
               
               <Button title="Submit"
               onPress={handleSubmit}
               />
          </View>
      </Modal>
  );
};


export default ModalText;