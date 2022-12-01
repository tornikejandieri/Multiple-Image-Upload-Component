import { ImagePicker, Album, Asset } from "expo-image-multiple-picker"
import { useState } from "react"

const useImagePicker: React.FC = ({ navigation }: Function | any) => {
  const [album, setAlbum] = useState<Album | undefined>()
  const [assets, setAssets] = useState<Asset[]>([])

  return (
    <ImagePicker
      onSave={(assets) => {
        setAssets(assets)
        console.log(assets)
        navigation.goBack()
      }}
      onCancel={() => {
        console.log("User cancelled image picker")
        setAssets([])
        setAlbum(undefined)
        navigation.goBack()
      }}
      onSelectAlbum={(album) => setAlbum(album)}
      selected={assets}
      selectedAlbum={album}
      multiple
      noAlbums
      limit={5}
      galleryColumns={3}
    />
  )
}

export default useImagePicker
