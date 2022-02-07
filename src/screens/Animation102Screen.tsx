import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import React, { useRef } from 'react';

const Animation102Screen = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const objetPan = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y
      }
    ],{
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        {
          toValue: { x:0, y: 0},
          useNativeDriver: true
        }
      ).start()
    }
  })

  return (
    <View style={ styles.container }>
      <Animated.View 
        {...objetPan.panHandlers }
        style={{
          ...styles.purpleBox, transform:[{
            translateX: pan.getLayout().left,
          }, {
            translateY: pan.getLayout().top
          }]
        }} />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
      backgroundColor: '#569cd6',
      height: 150,
      width: 150
  }
});
