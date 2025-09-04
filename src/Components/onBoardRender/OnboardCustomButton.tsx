import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Animated, { AnimatedRef, interpolateColor, SharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
import { onboardingData } from '../../Screens/Onboard/onboard'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

type Props = {
    dataLength: number,
    flatListRef: AnimatedRef<FlatList<onboardingData>>;
    flatListIndex: SharedValue<number>,
    x: SharedValue<number>
}

const OnboardCustomButton = ({dataLength, flatListIndex, flatListRef, x} : Props) => {

    const {width: SCREEN_WIDTH} = useWindowDimensions();

    const navigation = useNavigation();

    const buttonAnimationStyle = useAnimatedStyle(() => {
        return{
            width:
                flatListIndex.value === dataLength - 1 ?
                withSpring(140) : withSpring(60),
            height: 60,
        };
    })

    const arrowAnimationStyle = useAnimatedStyle(() => {
        return{
            width: 30,
            height: 30,
            opacity: 
                flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
            transform: [
                {
                    translateX:
                        flatListIndex.value === dataLength - 1 ? withTiming(100) : withTiming(0),
                },
            ],
        }
    })

    const textAnimationStyle = useAnimatedStyle(() => {
        return{
            opacity: 
                flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
            transform: [
                {
                    translateX:
                        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(-100),
                },
            ],
        }
    })

    const animatedColor = useAnimatedStyle(() => {
        const background = interpolateColor(
            x.value,
            [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
            ['#4285F4','#EA4335','#34A853']
        );
        return{
            backgroundColor: background
        }
      })

  return (
    <TouchableOpacity onPress={() => {
        if(flatListIndex.value < dataLength - 1){
            flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1})
        } else{
            navigation.navigate("MainDrawer")
        }
    }}>
        <Animated.View style={[styles.container, animatedColor, buttonAnimationStyle]}>
            <Animated.Text style={[styles.getStartText, textAnimationStyle]}>Get started</Animated.Text>
            <Animated.Image source={require("../../../Assets/right_arrow.png")} style={[styles.arrow, arrowAnimationStyle]} />
        </Animated.View>
    </TouchableOpacity>
  )
}

export default OnboardCustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: 55,
        height: 55
    },
    arrow: {
        position: "absolute",
        width:25,
        height: 25
    },
    getStartText: {
        position: "absolute",
        color: "white",
        fontSize: 16
    }
})