import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = async () => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogData(data?.data));
  };
  return (
    <div>
      {blogData?.map((data) => {
        return (
          <Card
            key={data?.id}
            title={data?.attributes?.title}
            image={data?.attributes?.image}
          />
        );
      })}
    </div>
  );
};

export default Blog;
