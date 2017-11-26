import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  tripleBaseMargin: 30,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  containerMargin: 7,

  navBarHeight: (Platform.OS === 'ios') ? 54 : 44,
  tabBarHeight: 54,
  ideaRoundSize: 64,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  buttonHeight: 40,
  buttonRadius: 50,
  buttonWidth: '95%',
  squareButtonRadius: 1,

  radioButtonSize: 40,

  borderWidth: 0.5,
  doubleBorderWidth: 1,

  inputHeight: 40,
  inputRadius: 4,
  doubleInputRadius: 8,
  inputPadding: 10,

  lineHeightBreaker: 24,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    feed: 140,
    mediumLogo: 90,
    logo: 200,
    picturePost: 200
  }
}

export default metrics
