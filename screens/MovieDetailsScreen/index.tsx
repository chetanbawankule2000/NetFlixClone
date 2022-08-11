import { View, Text, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import movie from "../../assets/data/movie";
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

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  const seasonName = movie.seasons.items.map((s) => s.name);

  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer episode={currentEpisode} />
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EposodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        ListHeaderComponent={
          <>
            <View style={{ padding: 15 }}>
              <Text style={styles.title}>{movie.title}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}> 12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
              {/* play button  */}
              <Pressable
                style={styles.plyaButton}
                onPress={() => console.log("Play")}
              >
                <Text style={styles.playButtonText}>
                  <Entypo name="controller-play" size={18} color="black" />
                  Play
                </Text>
              </Pressable>
              {/* download button */}
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

            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              style={{ color: "white", width: 135 }}
              dropdownIconColor={"white"}
            >
              {seasonName.map((s) => (
                <Picker.Item label={s} value={s} key={s} />
              ))}
            </Picker>
          </>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
