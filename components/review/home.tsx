import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import ModalText from "../navigation/modal";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

interface IReview{
  id:number,
  title:string,
  star:number
}
const styles = StyleSheet.create({
    body:{
        paddingHorizontal:20
    },
    button:{
        marginBottom:10
    },
    itemList:{
        flexDirection: "row",
        backgroundColor:"aqua",
        justifyContent:"space-between",
        padding:10,
        borderColor:"green",
        borderWidth:1
    }
})


const HomeScreen = () => {

    const [modalVisible,setModalVisible] = useState(false)
    const [reviews,setReviews] = useState<IReview[]>(
      [
      {id:1,title:"Shape of you",star:3},
      {id:2,title:"See you again",star:4}
    ]
    )
    const addNew = (item:IReview) => {
      setReviews([...reviews,item])
    }
    const deleteItem = (id:number) => {
      const newReviews = reviews.filter(item=> item.id !== id)
      setReviews(newReviews)
    }
  return (
    <View  style={styles.body}>
      <View >
        <Text style={{fontSize:30, fontWeight:"600" ,textAlign:"center", paddingVertical:10}}>List music</Text>
      </View>
      <View style={styles.button}>
        <Button 
        onPress={()=>setModalVisible(true)}
        title="Add music"/>
      </View>
      <FlatList
        data={reviews}
        keyExtractor={(item : any) => item.id}
        renderItem={({item}:any) => {
          return (
            <TouchableOpacity style={styles.itemList}>
              <Feather name="music" size={24} color="black" />
              <Text style={{fontSize:18}}>{item.title}</Text>
              <AntDesign name="close" size={24} color="black" 
                onPress={()=>deleteItem(item.id)}
              />
          </TouchableOpacity>
          )
        }
        }
      >

      </FlatList>
      <ModalText
         modalVisible = {modalVisible}
         setModalVisible = {setModalVisible}
         addNew={addNew}
      />
    </View>
  );
};

export default HomeScreen;
