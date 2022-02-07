import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;
    
    const fadeIn = ( duration: number = 300 ) => {
        Animated.timing(
        opacity,
        {
            toValue: 1,
            duration,
            useNativeDriver: true
        }
        ).start( () => console.log('end animation'));  
    }
    const fadeOut = () => {
        Animated.timing(
        opacity,
        {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }
        ).start();
    }

    const starMovingPosition = (initPosition: number ) => {
        
        position.setValue(initPosition);
        Animated.timing(
        position,
        {
            toValue:0,
            duration: 800,
            useNativeDriver: true,
            // easing: Easing.bounce
        }
        ).start();
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        starMovingPosition
    }
};
