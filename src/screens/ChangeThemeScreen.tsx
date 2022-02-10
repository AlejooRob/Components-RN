import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/Apptheme';
import HeaderTittle from '../components/HeaderTittle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext( ThemeContext );
  return (
    <View style={ styles.globalMargin }>
      <HeaderTittle title="Theme" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={ setLightTheme }
          activeOpacity={ 0.8 }
          style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center'
          }}
        >
            <Text
              style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 22
              }}
            >Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ setDarkTheme }
          activeOpacity={ 0.8 }
          style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              backgroundColor: colors.primary,
              justifyContent: 'center'
          }}
        >
            <Text
              style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 22
              }}
            >Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ChangeThemeScreen;
