import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';

import HeaderTittle from '../components/HeaderTittle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';

const TextInputScreen = () => {

  const { form, onChange, isSubscribed } = useForm({ name: '', email: '', phone: '', isSubscribed: false});
  const { theme: { colors, dividerColor } } = useContext( ThemeContext );
  

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <ScrollView>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

          <View style={{ marginHorizontal: 20 }}>

            <HeaderTittle title="Text Inputs" />

            <TextInput 
              style={{ ...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text }}
              placeholder="Ingrese su nombre"
              autoCorrect={ false }
              autoCapitalize="words"
              onChangeText={ value => onChange(value, 'name')}
              placeholderTextColor={ dividerColor }
            />

            <TextInput 
              style={{ ...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text }}
              placeholder="Ingrese su email"
              autoCorrect={ false }
              autoCapitalize="none"
              keyboardType="email-address"
              keyboardAppearance="default"
              onChangeText={ value => onChange(value, 'email')}
              placeholderTextColor={ dividerColor }
            />

            <TextInput 
              style={{ ...stylesScreen.inputStyle, borderColor: colors.text, color: colors.text }}
              placeholder="Ingrese su teléfono"
              keyboardType="phone-pad"
              onChangeText={ value => onChange(value, 'phone')}
              placeholderTextColor={ dividerColor }
            />

            <View style={ stylesScreen.switchRow }>
              <Text style={ stylesScreen.textSwitch }> Suscribirme </Text>
              <CustomSwitch isOn={ isSubscribed } onChange={  value => onChange( value, 'isSubscribed')} />
            </View>

            <HeaderTittle title={ JSON.stringify( form, null, 3)} />

          </View>

          <View style={{  height: 100 }}/>

        {/* </TouchableWithoutFeedback> */}
      </ScrollView>

    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
      borderWidth: 1,
      height: 50,
      paddingHorizontal: 10,
      marginVertical:10,
      borderRadius: 10
    },
    switchRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10
    },
    textSwitch: {
      fontSize: 18
    }
});

export default TextInputScreen;
