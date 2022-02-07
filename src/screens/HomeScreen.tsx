import React from 'react'
import { View, FlatList } from 'react-native'
import { menuItem } from '../data/MenuItem';
import { styles } from '../theme/Apptheme';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import HeaderTittle from '../components/HeaderTittle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList 
                data={ menuItem }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } />}
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => <HeaderTittle title="Opciones de menú" /> }
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            />
        </View>
    )
}

export default HomeScreen
