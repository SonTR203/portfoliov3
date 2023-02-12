import React from "react";
import BlogPost from "../utils/BlogPost";
import DividerLine from "../utils/DividerLine";

const BlogPosts = () => {
  return (
    <section className="h-auto py-16" id="blog-posts">
      <DividerLine />
      <h3 className="text-4xl py-1 mr-20 text-white">Blog posts</h3>
      <div className="flex items-stretch flex-col gap-10 md:flex-row justify-between mt-8">
        <BlogPost
          title={"How blogging can step up your career as a developer"}
          description={
            "How do blog posts have anything to do with being a developer? Well, it does. It helps ALOT. Let's find out why in the article below."
          }
          time={4}
        />
        <BlogPost
          title={
            "Five essential channels you should be listening to as a developer."
          }
          description={
            "The tech industry is always rapidly evolving, and as a developer, it is crucial to be up-to-date with the latest trends. There are many helpful channels out there made by industry experts for you to tune into, and since there are so many, it might be..."
          }
          time={4}
        />
      </div>
    </section>
  );
};

export default BlogPosts;
