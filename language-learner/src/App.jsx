import "./App.scss";
import SoundButton from "./components/SoundButton/SoundButton.jsx";

function App() {
  const sounds = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "aa",
    "ee",
    "ie",
    "oo",
    "uu",
    "oe",
    "ou",
    "ui",
    "ei",
    "y",
    "aai",
    "eeu",
    "eu",
    "ooi",
  ];

  return (
    <>
      <h1>Afrikaans Pronounciation App</h1>
      <div>
        {sounds.map((sound) => (
          <SoundButton soundFile={sound} key={sound} />
        ))}
      </div>
    </>
  );
}

export default App;
