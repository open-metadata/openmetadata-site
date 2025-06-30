import React from "react";
import YoutubeEmbed from "./common/YouTubeEmbed";

// Custom YouTube component for MDX
export const YouTube = ({ videoId }: { videoId: string }) => {
  return (
    <div className="my-6">
      <YoutubeEmbed videoId={videoId} />
    </div>
  );
};

// Custom inline Collate image component
const CollateImage = ({ src, alt, ...props }: any) => {
  return (
    <img
      src={src}
      alt={alt}
      className="inline-block align-middle w-4 h-4 ml-1"
      {...props}
    />
  );
};

// Custom heading components
const H2 = ({ children, ...props }: any) => {
  const isFeatures = children === "Features";
  const isChangelog = children === "Changelog";

  return (
    <h2
      {...props}
      className="text-xl md:text-2xl font-semibold text-[#292929] mb-6 flex items-center"
      data-section-type={
        isFeatures ? "features" : isChangelog ? "changelog" : "other"
      }
    >
      {isFeatures && <span className="mr-3">✨</span>}
      {isChangelog && <span className="mr-3">📋</span>}
      {children}
    </h2>
  );
};

const H3 = ({ children, ...props }: any) => {
  const text = typeof children === "string" ? children : children?.[0];
  const isCollate = text && text.includes("(Collate)");

  // Simple h3 for changelog sections with optional collate styling
  return (
    <h3
      {...props}
      className={`text-lg md:text-xl font-semibold text-[#292929] mb-4 mt-8 first:mt-0 ${
        isCollate ? "collate" : ""
      }`}
    >
      {children}
    </h3>
  );
};

// MDX components mapping
export const mdxComponents = {
  YouTube,
  CollateImage,
  h2: H2,
  h3: H3,
};
