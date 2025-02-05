import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MyAudioPlayer = ({ src }: { src: string }) => {
  return (
    <div className="d-flex align-items-center" style={{ gap: "10px" }}>
      <AudioPlayer
        src={src}
        onPlay={() => console.log("Playing...")}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default MyAudioPlayer;
