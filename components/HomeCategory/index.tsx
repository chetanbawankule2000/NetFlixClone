import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}
const HomeCategory = (props: HomeCategoryProps) => {
  const navigation = useNavigation();
  const { category } = props;
  console.log(category.title);

  const onMoviePress = (movie) => {
    console.warn(movie.id);
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        horizontal
        data={category?.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image source={{ uri: item.poster }} style={styles.image} />
          </Pressable>
        )}
      />
    </>
  );
};

export default HomeCategory;
