// @generated: @expo/next-adapter@2.1.9
import Link from 'next/link'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Trending Page</Text>
        <Link href='./'>
            <Text style={styles.text}>Back to Index👋</Text>
        </Link>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
