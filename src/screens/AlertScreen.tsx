import React, { useContext } from 'react';
import { View, Button, Alert } from 'react-native';

import prompt from 'react-native-prompt-android';

import HeaderTittle from '../components/HeaderTittle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/Apptheme';

const AlertScreen = () => {

  const { theme: { colors } } = useContext( ThemeContext );

    const showAlert = () => {
        Alert.alert(
            "Alert Msg",
            "My Alert Msg",
            [
                {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],{
                cancelable: true
            }
        );
    }

    const showPrompt = () => {
        // Alert.prompt(
        //     '¿Esta Seguro?',
        //     'Esta acción no se puede revertir',
        //     ( valor: string) => console.log( 'info: ',valor ),
        //     'secure-text',
        //     '123',
        //     'number-pad'
        // )

        prompt(
            'Enter Password',
            'Enter your password to claim your $1.5 in lottery winnings',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)}
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        )
    }

  return (
    <View style={ styles.globalMargin }>
      <HeaderTittle title="Alerts" />

      <Button 
        title='Mostrar Alerta'
        onPress={ showAlert }
        color={ colors.primary }
      />
      <View style={{ height:10 }} />
      <Button 
        title='Mostrar Prompt'
        onPress={ showPrompt }
        color={ colors.primary }
      />
    </View>
  );
};

export default AlertScreen;
