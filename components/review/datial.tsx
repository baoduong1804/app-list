import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Button, Image, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    titleScreen:{
        fontSize:40,
        fontWeight:"600",
        marginBottom:30
    },
    review:{
        fontSize:25
    },
    image:{
        height:100,
        width:100,

    },
    button :{
        marginTop:50
    }
})

const DetailScreen = () => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation()
    const route: RouteProp<RootStackParamList, "Detail"> = useRoute()// truy cập vào data đc truyền vào Detail
    return (
        <View>
            <Text style={styles.titleScreen}>Detail Screen</Text>
            <Text style={styles.review}>Title: {route.params.title}</Text>
            <Text style={styles.review}>Id: {route.params.id}</Text>
            <Text style={styles.review}>Star: {route.params.star}</Text>
            <View >
                <Text style={{height:100}}>url: {route.params.image}</Text>
                <Image
                style={styles.image}
                    source={{uri:route.params.image}}
                />
            </View>
            <View style={styles.button}>
                <Button title="Go home"
                onPress={()=>navigation.navigate("Home")}
            />
            </View>
        </View>
    )
}

export default DetailScreen