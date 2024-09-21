import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../review/home";
import AboutScreen from "../review/about";
import LoginScreen from "../review/login";

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title:"Home"}}
        />
        <Drawer.Screen
          name="about"
          component={AboutScreen}
        />
        <Drawer.Screen
          name="login"
          component={LoginScreen}
        />
      </Drawer.Navigator>
    )
}

export default AppNavigation