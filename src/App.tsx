import React from 'react'
import { Text, View, ViewStyle } from "react-native"

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red"
  } as ViewStyle
}

export { App }

