import React from "react";
import Head from "next/head";

interface YoutubeEmbedProps {
  videoId: string;
  height: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({videoId, height}) => {
  return (
    <div className="youtube-video-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="youtube-video">
        <iframe
          width={"100%"}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
