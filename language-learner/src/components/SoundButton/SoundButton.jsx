import PropTypes from "prop-types";

const SoundButton = ({ soundFile }) => {
  const playSound = (fileName) => {
    const audio = new Audio(`../../assets/sounds/${fileName}.m4a`);
    audio.play();
  };

  return (
    <button type="button" onClick={() => playSound(soundFile)}>
      {soundFile}
    </button>
  );
};

SoundButton.propTypes = {
  soundFile: PropTypes.string.isRequired,
};

export default SoundButton;
