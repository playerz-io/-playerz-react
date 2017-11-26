import React from 'react'
import { Text } from 'react-native'
import { Fonts } from '../../Themes/'

const PlayerzText = (props) => {
  const { fontWeight, style, children } = props
  // const restOfTheProps = _.omit(props, ['fontWeight', 'style', 'children'])
  const playerzTextStyle = {
    fontFamily: (fontWeight === 'bold') ? Fonts.type.bold : Fonts.type.regular
  }

  return (
    <Text style={[playerzTextStyle, style]}>
      { children }
    </Text>
  )
}

export { PlayerzText }
