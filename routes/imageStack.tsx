import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/Home"
import useImagePicker from "../useImagePicker"

const screens = {
  Home: {
    screen: Home,
  },
  UseImagePicker: {
    screen: useImagePicker,
    navigationOptions: {
      headerShown: false,
    },
  },
}

const ImageStack = createStackNavigator(screens)

export default createAppContainer(ImageStack)
