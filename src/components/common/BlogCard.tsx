import Image from "next/image";
import React from "react";

interface BlogCardProps {
  blogLink: string;
  imageLink: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blogLink,
  imageLink,
  title,
  description,
}) => {
  return (
    <div className="bg-white mb-4 flex flex-col hover:shadow-lg cursor-pointer hover:-translate-y-1 transition ease-in-out">
      <a
        className="block relative h-48 rounded overflow-hidden"
        href={blogLink}
        target="_blank"
      >
        <Image
          alt={title}
          width={1000}
          height={1000}
          className="object-cover object-center w-full h-full block"
          src={imageLink}
        />
      </a>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-gray-900 text-lg font-medium title-font mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-base flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <a
            className="text-indigo-500 inline-flex items-center"
            href={blogLink}
            target="_blank"
          >
            Read more
          </a>
          <a
            href={blogLink}
            target="_blank"
            className="text-indigo-500 inline-flex items-center"
          >
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
