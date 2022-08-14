import { View, Text, FlatList, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { DataStore, Storage } from "aws-amplify";
import { Category, Movie } from "../../src/models";
import MovieItem from "../../components/MovieItem";

interface HomeCategoryProps {
  category: Category;
}
const HomeCategory = (props: HomeCategoryProps) => {
  const navigation = useNavigation();
  const { category } = props;
  console.log(category.title);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        (movie) => movie.categoryID === category.id
      );

      console.log("movies ", result);
      setMovies(result);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
      />
    </>
  );
};

export default HomeCategory;
