import React, { Component } from 'react'
import { View } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import Styles from './Styles/AuthenticationStyle'
import { PlayerzText } from './Shared'

export default class Authentication extends Component {
  render () {
    return (
      <View style={Styles.container}>
        <PlayerzText style={Styles.appTitle}>Playerz</PlayerzText>
        <LoginButton
          publishPermissions={['publish_actions']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert('login has error: ' + result.error)
              } else if (result.isCancelled) {
                alert('login is cancelled.')
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert('logout.')} />
      </View>
    )
  }
}
