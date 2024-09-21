import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./components/review/home";
import AboutScreen from "./components/review/about";
import LoginScreen from "./components/review/login";
import AppNavigation from "./components/navigation/app.navigation";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
    
}

export default App