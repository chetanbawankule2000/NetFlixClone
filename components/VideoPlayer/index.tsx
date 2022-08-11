import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Episode } from "../../types";
import { Video } from "expo-av";
import styles from "./styles";
import { Playback } from "expo-av/build/AV";
interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [status, setStatus] = useState({});

  const [videoUrl, setVideoUrl] = useState("");
  const video = useRef<Playback>(null);

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current.unloadAsync();
      await video?.current.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        usePoster
        posterSource={{ uri: episode.poster }}
        posterStyle={{
          resizeMode: "cover",
        }}
        source={{ uri: episode.video }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
