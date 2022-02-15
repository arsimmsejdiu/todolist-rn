import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Task({ text }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})