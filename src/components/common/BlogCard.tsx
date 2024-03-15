import Image from "next/image";
import Link from "next/link";
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
        <p className="text-base flex-grow">{description}</p>
      </div>
      <div className="flex justify-between items-center border-top px-5 py-3">
        <Link
          rel="noopener noreferrer"
          aria-label="Read More here"
          className="text-primary inline-flex items-center text-[14px] hover:no-underline"
          href={blogLink}
          target="_blank"
        >
          Read more here
        </Link>
        <Link
          aria-label="Read More here"
          href={blogLink}
          target="_blank"
          className="text-primary inline-flex items-center"
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
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
