import { View, Text, Button, Modal } from 'react-native';
import React, { useContext, useState } from 'react';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/Apptheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ModalScreen = () => {

  const [ isVisible, setIsVisible] = useState(false);
  const { theme: { colors } } = useContext( ThemeContext );

  return (
    <View style={ styles.globalMargin }>
      <HeaderTittle title='Modal Screen' />

      <Button 
        title='Abrir Modal'
        onPress={ () => setIsVisible( true ) }
        color={ colors.primary }
      />

      <Modal
        animationType='slide'
        visible={ isVisible }
        transparent= { true }
      >
        {/* Background semitransparent black */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Modal Content */}
          <View style={{
            backgroundColor: 'white',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 30 }}>Cuerpo del Modal</Text>
            
            <Button 
              title="Cerrar"
              onPress={ () => setIsVisible( false )}
              color={ colors.primary }
            />
          </View>

        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
