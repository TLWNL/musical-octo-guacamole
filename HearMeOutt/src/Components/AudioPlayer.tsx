import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MyAudioPlayer = ({ src }: { src: string }) => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        gap: "10px",
        width: "100%",
        justifyContent: "center",
        padding: "10px 0",
      }}
    >
      <AudioPlayer
        src={src}
        onPlay={() => console.log("Playing...")}
        style={{
          borderRadius: "10px",
          width: "100%", // Ensures the audio player is responsive
          maxWidth: "400px", // Limits max width on larger screens
        }}
      />
    </div>
  );
};

export default MyAudioPlayer;
