import React, { useState } from 'react'
import { Text, View } from "react-native"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={{ flex: 1, width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: "red" }}>
      <Text>Hello World</Text>
    </View>
  )
}

export default App
