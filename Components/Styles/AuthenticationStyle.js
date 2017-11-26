import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: Metrics.tripleBaseMargin
  },
  appTitle: {
    color: Colors.white,
    fontSize: Fonts.size.appTitle
  }
})

export default styles
