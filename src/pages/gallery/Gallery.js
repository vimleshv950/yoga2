import React from "react";
import Gallery_Api from './Gallery_Api'
import Card from "./Card";

import Layout from "../../component/Layouts/Layout";
import'../../style/gallery.css'

const Blog = () => {
  return ( 
    <Layout>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY GALLERY AND KEEP YOUR FEEDBACK</h4>
            <h1>Gallery</h1>
          </div>
          <div className='content blog_grid'>
            {Gallery_Api.map((value, index) => {
              return <Card key={index} image={value.image}  />
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
