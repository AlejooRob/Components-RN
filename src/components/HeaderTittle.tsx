import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/Apptheme';

interface Props {
    title: string;
}

const HeaderTittle = ({ title }: Props) => {

    const { top  } = useSafeAreaInsets();

    return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={{...styles.title, color: '#5856D6' }}>{ title }</Text>
    </View>

    );
};

export default HeaderTittle;
