import React from "react";
import Head from "next/head";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
interface YoutubeEmbedProps {
  videoId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({videoId}) => {
  return (
    <div className="youtube-video-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="youtube-video">
        <LiteYouTubeEmbed id={videoId} title="YouTube Video Player" />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
