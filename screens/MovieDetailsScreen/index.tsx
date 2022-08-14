import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import { Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import movie from "../../assets/data/movie";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import EposodeItem from "../../components/EpisodeItem";
import VideoPlayer from "../../components/VideoPlayer";
import { useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Episode, Movie, Season } from "../../src/models";

// const firstEpisode = movie.seasons.items[0].episodes.items[0];
// const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentSeason, setCurrentSeason] = useState<Season | undefined>(
    undefined
  );
  const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(
    undefined
  );
  const seasonName = seasons ? seasons.map((s) => s.name) : [];

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(await DataStore.query(Movie, id));
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    if (!movie) {
      return;
    }
    const fetchSeasons = async () => {
      let movieSeasons = (await DataStore.query(Season)).filter(
        (s) => s.movieID == movie.id
      );

      setSeasons(movieSeasons);
      setCurrentSeason(movieSeasons[0]);
    };
    fetchSeasons();
  }, [movie]);

  useEffect(() => {
    if (!currentSeason) {
      return;
    }
    const fetchEpisodes = async () => {
      const seasonEpisodes = (await DataStore.query(Episode)).filter(
        (e) => e?.seasonID == currentSeason?.id
      );
      setEpisodes(seasonEpisodes);
      setCurrentEpisode(seasonEpisodes[0]);
    };
    fetchEpisodes();
  }, [currentSeason]);

  if (!movie) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ flex: 1 }}>
      {currentEpisode && <VideoPlayer episode={currentEpisode} />}
      <FlatList
        data={episodes}
        renderItem={({ item }) => (
          <EposodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        ListHeaderComponent={
          <>
            <View style={{ padding: 15 }}>
              <Text style={styles.title}>{movie.titile}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}> 12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
              <Pressable
                style={styles.plyaButton}
                onPress={() => console.log("Play")}
              >
                <Text style={styles.playButtonText}>
                  <Entypo name="controller-play" size={18} color="black" />
                  Play
                </Text>
              </Pressable>
              <Pressable
                style={styles.downloadButton}
                onPress={() => console.log("Play")}
              >
                <Text style={styles.downloadButtonText}>
                  <AntDesign name="download" size={18} color="white" />
                  {"  "}
                  Download
                </Text>
              </Pressable>
              <Text style={{ marginVertical: 10, color: "white" }}>
                {movie.plot}
              </Text>
              <Text style={styles.year}>Cast: {movie.cast}</Text>
              <Text style={styles.year}>Creator: {movie.creator}</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "white" }}>My List</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "white" }}>Rate</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "white" }}>Share</Text>
              </View>
            </View>

            {currentSeason && (
              <Picker
                selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(seasons[itemIndex]);
                }}
                style={{ color: "white", width: 135 }}
                dropdownIconColor={"white"}
              >
                {seasonName.map((s) => (
                  <Picker.Item label={s} value={s} key={s} />
                ))}
              </Picker>
            )}
          </>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
