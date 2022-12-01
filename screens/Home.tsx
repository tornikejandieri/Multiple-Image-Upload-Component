import { Text, View, Button } from "react-native"

const Home: React.FC = ({ navigation }: Function | any) => {
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
