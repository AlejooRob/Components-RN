import { View, StyleSheet, Animated, Button } from 'react-native';
import React from 'react';
import { useAnimation } from '../hooks/useAnimation';

const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, starMovingPosition } = useAnimation();

  return (
    <View style={ styles.container }>
      <Animated.View style={{ 
        ...styles.purpleBox,
        marginBottom: 20,
        opacity,
        transform: [{
          translateY: position
        }]
      }} />

      <Button 
        title="FadeIn"
        onPress={ () => {
          fadeIn();
          starMovingPosition( -100 )
        } }
      />
      <Button 
        title="FadeOut"
        onPress={ fadeOut }
      />
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
      backgroundColor: '#6f65f7',
      height: 100,
      width: 100
  }
});
