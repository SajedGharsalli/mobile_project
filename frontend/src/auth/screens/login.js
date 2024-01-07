import { StyleSheet, Dimensions ,View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Svg, { Image } from 'react-native-svg'
import Button from '../components/button'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignupForm'
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Login({navigation}) {
  const { height, width } = Dimensions.get('screen')
  const imagePosition = useSharedValue(1)
  const [isRegister, setIsRegister] = useState(false)
  const [isButton, setIsButton] = useState(true)

  const imageAnimatedStyle = useAnimatedStyle(() => {
    let h=-height / 2.8
    if (isRegister){h=-height/2.5}
    const interpolation = interpolate(imagePosition.value, [0, 1], [h, 0])
    return {
      transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }]
    }
  })

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [400, 0])
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 500 }) }]
    }
  })

  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 1000 }),
      transform: [{ rotate: withTiming(interpolation + "deg", { duration: 1000 }) }]
    }
  })

  const LoginFormAnimated = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, { duration: 800 })) : withTiming(0, { duration: 300 })
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0
    setIsButton(false)
    setIsRegister(false)
  }
  const SigninHandler = () => {
    imagePosition.value = 0
    setIsButton(false)
    setIsRegister(true)
  }
  const closeHandler = () => {
    imagePosition.value = 1
    setIsButton(true)
  }

  const loginOnpressed = ()=>{
    navigation.navigate('Home')
}
  return (
    <View style={styles.container}>
      <Animated.View style={imageAnimatedStyle}>
      <Svg height={height/2} width={width} style={{ position : 'absolute', top : 0, right : 0, left :0 , zIndex : +1}}>
          <Image href={require('../pics/logo.png')} height={height/2} width={width}/>
      </Svg>
        <Svg height={height} width={width}>
          <Image href={require('../pics/background.png')}
            height={height +100}
            width={width}
            preserveAspectRatio='xMidYMid slice'
             />
        </Svg>
          <Animated.View style={[closeButtonAnimatedStyle,styles.quit]}>
          <TouchableOpacity onPress={closeHandler}>
            <Icon name='chevron-circle-down' size={40} color={'rgba(255, 255, 255, 0.7)'} />
        </TouchableOpacity >
          </Animated.View>
      </Animated.View>
      <View style={{ position: 'absolute' ,width: width * 0.9, height: height /3 }}>
        {isButton ? <Animated.View style={buttonAnimatedStyle}>
          <Button text={'Login'} onpress={loginHandler} color={'#F84A3A'}/>
          <Button text={'Signup'} onpress={SigninHandler} />
        </Animated.View> :
          <Animated.View style={[{position: 'absolute', bottom: 20 , height : height/3 , width: width * 0.9 ,}, LoginFormAnimated]}>
            {isRegister ? <SignUpForm /> : < LoginForm onPressed={loginOnpressed} />}
          </Animated.View>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quit: {
    position: 'absolute',
    bottom : 0,
    padding : 10,
    alignSelf: 'center',
  }
})
