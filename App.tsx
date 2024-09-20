import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./components/review/home";
import AboutScreen from "./components/review/about";

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen
          name="Home1"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="about"
          component={AboutScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
    
}

export default App