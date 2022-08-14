import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { DataStore, Storage } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../../src/models";
import styles from "./styles";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (movie.poster.startsWith("http")) {
      setImageUrl(movie.poster);
      return;
    }
    Storage.get(movie.poster).then((result) => setImageUrl(result));
  }, []);

  const onMoviePress = () => {
    console.warn(movie.id);
    navigation.navigate("MovieDetailsScreen", { id: movie.id });
  };
  return (
    <View>
      <Pressable onPress={() => onMoviePress()}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </Pressable>
    </View>
  );
};

export default MovieItem;
