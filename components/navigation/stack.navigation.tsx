import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import DetailScreen from "../review/datial";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeLayout = () => {
    return (
        <Stack.Navigator 
             screenOptions={{ headerShown: false }}        
        >
            <Stack.Screen name= "Home" 
            component={HomeScreen}
            />
            <Stack.Screen name= "Detail" 
            component={DetailScreen}
            options={{ title: "Trang Chủ", header: () => <></> }}
            />
        </Stack.Navigator>
    )
}

export default HomeLayout