import React, { useState, useEffect } from 'react'
import Form from '../../components/Form/Form'
import { Grid, Typography, } from '@mui/material';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const url = 'http://3.7.81.243:3253/api/blog/';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response Error!!!');
      }
      const data = await response.json();
      console.log('Blogs>>>', data);
      setBlogs(data?.data)
    } catch (error) {
      console.error('Error fetching Data >>>', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <>
      <section className='blogs container'>
        <Typography variant="h4" gutterBottom fontWeight={'bold'}>
          Check Out Our Blogs
        </Typography>
        <Grid container spacing={2} className="blogs-section">
          {blogs?.map((blog, index) => (
            <Grid key={index} item xs={12} md={4}>
              <div className="blog-item">
                <img src={blog?.image_url} alt={blog?.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  {blog?.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {blog?.createdAt} <span style={{ color: '#D0021B' }}> Posted by {blog?.writer_name} </span>
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {blog?.short_description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>

      </section>

    </>
  )
}

export default Blogs
