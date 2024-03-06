import React from "react";
import {BLOG_LIST} from "@/constants/Blogs.constants";
import BlogCard from "../common/BlogCard";

const Blogs = () => {
  return (
    <section className="bg-gray-100 py-12" id="blogs">
      <div className="container px-5">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold">Blogs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_LIST.map((blog) => (
            <BlogCard
              key={blog.title}
              blogLink={blog.blogLink}
              imageLink={blog.imageLink}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
        <div className="text-center">
          <a
            className="btn btn-primary fw-500"
            href="http://blog.open-metadata.org/"
            target="_blank"
          >
            Read All Blogs
          </a>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
