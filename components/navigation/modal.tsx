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
  function randomInteger(min:number, max:number) { return Math.floor(Math.random() * (max - min + 1)) +min; }

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
      star: star
    })
    setTitle("")
    setStar("")
    setModalVisible(false)
  }
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
               {/* Header */}
               <View style={styles.header}>
                <Feather name="menu" size={35} color="black"                />
                <Text style={{fontSize:25}}> Add music</Text>
                <Ionicons name="exit-outline" size={35} color="black" 
                onPress={()=> setModalVisible(false)}
                />
               </View>
                {/* Body */}
               <View>
                <Text style={{fontSize:20,marginBottom:5}}>Title music:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(v)=>setTitle(v)}
                />
               </View>
               <View>
                <Text style={{fontSize:20,marginBottom:5}}> Rating</Text>
                <TextInput 
                keyboardType="numeric"
                  style={styles.input}
                  onChangeText={(v)=>setStar(v)}
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