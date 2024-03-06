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
    <div className="lg:w-1/3 lg:mb-0 mb-4 p-4">
      <a
        className="block relative h-48 rounded overflow-hidden"
        href={blogLink}
        target="_blank"
      >
        <img
          alt="blog"
          className="object-cover object-center w-full h-full block"
          src={imageLink}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-900 text-lg font-medium title-font mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-base">{description}</p>
        <a
          className="text-indigo-500 inline-flex items-center mt-3"
          href={blogLink}
          target="_blank"
        >
          Read more
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
  );
};

export default BlogCard;
