import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { back, Title } from '../../assets/images'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000)
  }, [navigation])

  return (
    <ImageBackground source={back} style={styles.back}>
      <Image source={Title} style={styles.Title} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title: {
    width: 350,
    height: 75
  }
})