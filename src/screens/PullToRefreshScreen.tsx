import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/Apptheme';

const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
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
                progressBackgroundColor="#5856D6"
                colors={ ['white', 'red', 'orange']}
                // style={{ backgroundColor: '#5856D6' }}
                // tintColor="white"
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
