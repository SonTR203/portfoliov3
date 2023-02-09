import React from "react";

const BlogPost = ({ title, description, time }) => {
  return (
    <div className="w-full md:w-5/12 flex flex-col">
      <p className="text-white text-2xl mb-3 underline">{title}</p>
      <p className="text-white text-lg mb-3">{description}</p>
      <p className="text-white">{time} mins read</p>
    </div>
  );
};

export default BlogPost;
