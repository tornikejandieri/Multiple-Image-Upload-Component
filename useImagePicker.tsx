import { ImagePicker, Album, Asset } from "expo-image-multiple-picker"
import { useState, useEffect } from "react"

const useImagePicker = ({ navigation }: any) => {
  const [open, setOpen] = useState(false)
  const [album, setAlbum] = useState<Album | undefined>()
  const [assets, setAssets] = useState<Asset[]>([])

  useEffect(() => {
    setOpen(true)
  }, [])

  if (open) {
    return (
      <ImagePicker
        onSave={(assets) => {
          setAssets(assets)
          setOpen(false)
          navigation.push("Home")
        }}
        onCancel={() => {
          console.log("User cancelled image picker")
          setAssets([])
          setAlbum(undefined)
          setOpen(false)
          navigation.push("Home")
        }}
        onSelectAlbum={(album) => setAlbum(album)}
        selected={assets}
        selectedAlbum={album}
        multiple
        noAlbums
        limit={5}
      />
    )
  }
}

export default useImagePicker
