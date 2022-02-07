import { View, Text, SectionList } from 'react-native';
import React from 'react';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/Apptheme';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      {/*  */}
      <SectionList 
        sections={ casas }
        keyExtractor={ (item, index ) => item + index }
        ListHeaderComponent={ () => <HeaderTittle title="Section List" /> }
        ListFooterComponent={ () =>(
          <View style={{ marginBottom: 70 }}>
            <HeaderTittle title={ 'Total de casas ' + casas.length } />
          </View>
        ) }
        renderItem={({item}) => <Text>{ item }</Text> }
        stickySectionHeadersEnabled
        renderSectionHeader={ ({section}) => (
            <View style={{ backgroundColor: 'white' }}>
                <HeaderTittle title={ section.casa } />
            </View>
        )}
        renderSectionFooter={ ({ section }) => (
          <HeaderTittle title={ 'Total: ' + section.data.length} />
        )}
        SectionSeparatorComponent={ () => <ItemSeparator />}
        // ItemSeparatorComponent={ () => <ItemSeparator /> }
      />
    </View>
  );
};

export default CustomSectionListScreen;
