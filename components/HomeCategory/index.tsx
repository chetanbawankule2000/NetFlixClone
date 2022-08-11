import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import styles from './styles'

interface HomeCategoryProps {
    category:{
         id:string,
    title:string,
    movies:{
        id:string,
        poster:string
    }[]
    }
   
}
const HomeCategory = (props:HomeCategoryProps) => {
    const {category} = props;
    console.log(category.title)
  return (
    <>
    <Text style={styles.title}>{category.title}</Text>
      <FlatList
        horizontal
        data={category?.movies}
        renderItem={({item})=>(
          <Image source={{uri:item.poster}} style={styles.image}/>
        )}
      />
    </>
  )
}

export default HomeCategory