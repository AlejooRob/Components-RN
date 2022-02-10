import { View } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const { theme: { dividerColor } } = useContext( ThemeContext );
  return (
    <View style={{ borderBottomWidth: 3, borderBottomColor: dividerColor, marginVertical: 8  }} />
  );
};

export default ItemSeparator;
