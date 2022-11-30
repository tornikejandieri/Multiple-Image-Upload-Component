import { Text, View, Button } from "react-native"

interface Props {
  navigation: any
}
const Home: React.FC<Props> = ({ navigation }) => {
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
