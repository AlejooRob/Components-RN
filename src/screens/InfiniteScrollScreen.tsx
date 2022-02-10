import { ActivityIndicator, View } from 'react-native';
import React, { useContext, useState } from 'react';
import HeaderTittle from '../components/HeaderTittle';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
    const { theme: { colors } } = useContext( ThemeContext );

    const loadMore = () => {
        const newArray: number[] = [];
        for(let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setNumbers([...numbers, ...newArray])
    }

    const renderItem = ( item: number) => {
        return (
            <FadeInImage 
                uri={ `https://picsum.photos/id/${item}/500/400` } 
                style={{
                    width: '100%',
                    height: 250
                }}
            />
        )
            // <Image 
            //     source={{ uri: `https://picsum.photos/id/${item}/500/400`}}
            //     style={{
            //         width: '100%',
            //         height: 250
            //     }}
            // />
    }

  return (
    <View style={{ backgroundColor: colors.background }}>
      
      <FlatList 
        data={ numbers }
        keyExtractor={ (item) => item.toString() }
        renderItem={ ({item}) => renderItem(item) }
        ListHeaderComponent={ () => (
            <View style={{ marginHorizontal: 20 }}>
                <HeaderTittle title="Infinite Scroll" />
            </View>
        ) }
        onEndReached={ loadMore }
        onEndReachedThreshold={ 0.5 }
        ListFooterComponent={ () => (
            <View style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={ 20 } color={ colors.primary } />
            </View>
        ) }
      />
    </View>
  );
};

export default InfiniteScrollScreen;
