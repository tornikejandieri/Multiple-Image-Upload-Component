import { Text, View, Button } from "react-native"
import { HomeProps } from "../routes/imageStack"

const Home = ({ navigation }: HomeProps) => {
  const handlePress = () => {
    navigation.navigate("UseImagePicker")
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title='Upload Images' onPress={handlePress} />
    </View>
  )
}

export default Home
