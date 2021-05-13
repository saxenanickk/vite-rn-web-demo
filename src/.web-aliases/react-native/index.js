import { Image as RNImage, Text as RNText } from 'react-native-web'
// Let's export everything from react-native-web
export * from 'react-native-web'

//And let's stub out everything that's missing for *!
export const ViewPropTypes = {
  style: () => { },
}
RNText.propTypes = {
  style: () => { },
}
RNImage.propTypes = {
  style: () => { },
  source: () => { },
}

export const Text = RNText
export const Image = RNImage
export const ToolbarAndroid = {}
