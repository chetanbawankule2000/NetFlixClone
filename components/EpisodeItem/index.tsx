import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Episode } from "../../types";
// {
//   id: 'episode1',
//   title: '1. Pilot Part 1 & 2',
//   poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg',
//   duration: '1h 21m',
//   plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
//   video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//                 }

interface EpisodeItemProps {
  episode: Episode;
  onPress: (eepisode: Episode) => {};
}

const EposodeItem = (props: EpisodeItemProps) => {
  const { episode, onPress } = props;
  return (
    <Pressable
      style={{ padding: 10, marginVertical: 10 }}
      onPress={() => onPress(episode)}
    >
      <View style={styles.row}>
        <Image source={{ uri: episode.poster }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EposodeItem;
