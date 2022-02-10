import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HeaderTittle from '../components/HeaderTittle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/Apptheme';

const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const { theme: { colors, dividerColor, dark } } = useContext( ThemeContext );
    
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState('false');


    const onRefresh = () => {
        setRefreshing( true );

        setTimeout(() => {
            console.log('end');
            setRefreshing(false);
            setData('Hola Mundo')
        }, 1500);
    }
  return (
      <ScrollView
        style={{
            marginTop: refreshing ? top : 0
        }}
        refreshControl={
            <RefreshControl 
                refreshing={ refreshing }
                onRefresh={ onRefresh }
                progressViewOffset={20}
                progressBackgroundColor={ dividerColor }
                colors={ [ colors.text ]}
                tintColor={ dark ? 'white' : 'black'}
                // title="Refreshing"
            />
        }
      >
        <View style={ styles.globalMargin }>
            <HeaderTittle title="Pull To Refresh" />
            {
                data && <HeaderTittle title={ data } />
            }
        </View>
      </ScrollView>
  );
};

export default PullToRefreshScreen;
