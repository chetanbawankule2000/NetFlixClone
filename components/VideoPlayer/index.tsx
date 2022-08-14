import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Episode } from "../../types";
import { Video } from "expo-av";
import styles from "./styles";
import { Storage } from "aws-amplify";
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
      await video?.current.loadAsync({ uri: videoUrl }, {}, false);
    })();
  }, [videoUrl]);

  useEffect(() => {
    if (episode.video.startsWith("http")) {
      setVideoUrl(episode.video);
      return;
    }
    Storage.get("movies/" + episode.video).then(setVideoUrl);
  }, [episode]);

  if (videoUrl === "") {
    return null;
  }

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
        source={{ uri: videoUrl }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
