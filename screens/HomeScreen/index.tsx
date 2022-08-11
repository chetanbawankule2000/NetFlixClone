import React from 'react';
import { Text, View } from '../../components/Themed';
import { Image,FlatList } from 'react-native';
import styles from './styles'
import categories from '../../assets/data/categories';
const firstCategory = categories.items[0];
import HomeCategory from '../../components/HomeCategory';

const  HomeScreen = ()=> {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({item})=><HomeCategory category={item}/>}
        showsHorizontalScrollIndicator={false}
      />      
    </View>
  );
}


export default HomeScreen;