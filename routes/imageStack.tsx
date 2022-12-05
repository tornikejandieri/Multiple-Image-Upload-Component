import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { StackScreenProps } from "react-navigation-stack"
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

export type StackParamList = {
  Home: undefined
  UseImagePicker: undefined
}

export type Props = StackScreenProps<StackParamList, "UseImagePicker">
export type HomeProps = StackScreenProps<StackParamList, "Home">

const ImageStack = createStackNavigator(screens)

export default createAppContainer(ImageStack)
