import React, { useRef, useState } from "react";
import "./video.css";

// Função responsável por dar start e pausar o vídeo selecionado.
function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://webapp-va.tiktok.com/63a1a740969d80f7f4f8ca33d8db003b/6425299b/tos-useast2a-ve-0068c002/ooJzJcqRYQt3Eq7BDkNQfTne8XbgABiLBoCJKO?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=3372&bt=1686&cs=0&ds=6&ft=bLZkJmrMPD12NXmBlG-Ux47vmYKt3wv25VaAp&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmNjhpZDwzOjtkZGhkZTk4ZEBpM2ZpaWk6Zm9najMzNzczM0BTbGt2aXFEOmpoXitiK2p0OiM0MV5jY2FfNTIxXy1hMV9iYSM0Z2NfcjRvNmZgLS1kMTZzcw%3D%3D&l=202303300017350CC016143975BA824F44&btag=80000&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNzIxNjEyMzU3Mzk5MDMxMDkxNyJ9"
      ></video>
    </div>
  );
}

export default Video;
