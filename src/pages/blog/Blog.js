import React from "react";
import Blog_data from './Blog_data'
import Card from "./Card";

import Layout from "../../component/Layouts/Layout";
import '../../style/blog.css'

const Blog = () => {
  return ( 
    <Layout>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>
          <div className='content blog_grid'>
            {Blog_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
