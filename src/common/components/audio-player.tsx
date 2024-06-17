import React from 'react';

import { Button } from '@mui/material';

import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import * as innerclasses from './audio-player.styles';

interface Props {
  audioUrl: string;
}
export const AudioPlayer: React.FC<Props> = props => {
  const { audioUrl } = props;
  const audioRef = React.useRef(new Audio(audioUrl));

  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleAudioPlay = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();

    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  React.useEffect(() => {
    const currentAudioRef = audioRef.current;
    currentAudioRef.addEventListener('ended', handleAudioEnd);

    return () => {
      currentAudioRef.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <Button
      aria-label="play-button"
      css={innerclasses.audioPlayerButton}
      onClick={handleAudioPlay}
    >
      {!isPlaying ? <VolumeUpIcon /> : <PauseIcon />}
    </Button>
  );
};
