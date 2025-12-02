let paused = false;

const isPaused = () => paused;

const setPaused = (value) => {
  paused = value;
};

module.exports = {
  isPaused,
  setPaused,
};
