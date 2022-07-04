// https://github.com/lhz516/react-h5-audio-player#readme
// https://www.bensound.com/
// import "./styles.css";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const SongPlayer = (props) => {
  const musicTracks = [
    {
      name: "Memories",
      // src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
      src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/46/3a/2e/463a2e8c-26ee-7eef-8ed1-d9db0076a817/mzaf_9928068506948499871.plus.aac.p.m4a"
    },
    {
      name: "Creative Minds",
      // src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
      src: "http://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0e/42/34/0e42346a-2032-4ede-7145-331fe4b23251/mzaf_4189916345223488958.plus.aac.ep.m4a"
    },
    {
      name: "Acoustic Breeze",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
    },
    {
      name: "Sunny",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
    },
    {
      name: "Tenderness",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
    },
    {
      name: "Once Again",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
    },
    {
      name: "Sweet",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
    },
    {
      name: "Love",
      src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
    },
    {
      name: "Piano Moment",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
    },
    {
      name: "E.R.F",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
    },
    {
      name: "Dreams",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
    },
    {
      name: "A Day To Remember",
      src: "https://www.chosic.com/wp-content/uploads/2021/08/An-Epic-Story.mp3"
    },
    {
      name: "Adventure",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
    },
    {
      name: "Photo Album",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
    },
    {
      name: "November",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
    }
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="App">
      {/* <h1>Project Prototype</h1> */}
      <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        autoPlay
        // layout="horizontal"
        // src={musicTracks[trackIndex].src}
        src={props.songUrl}
        // src={SongList.song.track.hub.actions[1].uri}

        // src= "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/46/3a/2e/463a2e8c-26ee-7eef-8ed1-d9db0076a817/mzaf_9928068506948499871.plus.aac.p.m4a"
      
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
        showJumpControls={false}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        footer="All music royalty-free from Shazam previews"
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        
        
        // other props here
      />
    </div>
  );
}

export default SongPlayer;

