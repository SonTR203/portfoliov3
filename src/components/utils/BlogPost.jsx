import React from "react";

const BlogPost = ({ title, description, time, url }) => {
  return (
    <div
      className="w-full md:w-5/12 flex flex-col"
      tabIndex={0}
      aria-label={`${title} ${time}`}>
      <a
        className="text-white text-2xl mb-3 underline"
        href={url}
        tabIndex={`Go to blog post`}
        target="_blank">
        {title}
      </a>
      <p className="text-white text-lg mb-3">{description}</p>
      <p className="text-white">{time} mins read</p>
    </div>
  );
};

export default BlogPost;
