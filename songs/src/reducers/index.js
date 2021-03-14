import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Strawberry Fields Forever", duration: "2:35" },
    { title: "Macarena", duration: "3:20" },
    { title: "All My Loving", duration: "2:55" },
    { title: "Levitating", duration: "4:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
