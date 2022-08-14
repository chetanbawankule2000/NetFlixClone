import React, { useEffect, useState } from "react";
import { Text, View } from "../../components/Themed";
import { Image, FlatList } from "react-native";
import styles from "./styles";
// import categories from "../../assets/data/categories";
// const firstCategory = categories.items[0];
import HomeCategory from "../../components/HomeCategory";
import { DataStore } from "aws-amplify";
import { Category } from "../../src/models";
const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category));
    };
    fetchCategories();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
