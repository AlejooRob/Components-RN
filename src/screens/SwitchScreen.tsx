import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTittle from '../components/HeaderTittle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {
  
  const [state, setState] = useState({
    IsActive: true,
    isHungry: false,
    isHappy: true
  });
  const { IsActive, isHungry, isHappy } = state;
  const { theme: { colors } } = useContext( ThemeContext );

  const onChange = ( value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value 
    })
  }

  
  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTittle title="Switches" />
      <View style={ styles.switchRow }>
        <Text style={{ ...styles.switchText, color: colors.text }} >isActive</Text>
        <CustomSwitch isOn={ IsActive } onChange={ (value) => onChange( value, 'IsActive')} />
      </View>
      <View style={ styles.switchRow }>
        <Text style={{ ...styles.switchText, color: colors.text }} >isHungry</Text>
        <CustomSwitch isOn={ isHungry } onChange={ (value) => onChange( value, 'isHungry')} />
      </View>
      <View style={ styles.switchRow }>
        <Text style={{ ...styles.switchText, color: colors.text }} >isHappy</Text>
        <CustomSwitch isOn={ isHappy } onChange={ (value) => onChange( value, 'isHappy')} />
      </View>
      

      <Text style={{ ...styles.switchText, color: colors.text }} >
        { JSON.stringify( state, null, 5)}
      </Text>  
      
    </View>
  );
};

const styles = StyleSheet.create({
    switchRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10
    },  
    switchText: {
      fontSize: 25
    }
});

export default SwitchScreen;
