import React, { useState, useEffect } from 'react'
import Form from '../../components/Form/Form'
import { Grid, Typography, TextField, Button, MenuItem, Box, Card, CardContent, CardActions } from '@mui/material';
import Image from '../../assets/Images/banner-right.png';
import './home.css';
import features from '../../Data/Features'
import aboutImage from '../../assets/Images/about-img.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../../Data/Testimonials';
import quoteUp from '../../assets/Images/quote-up.svg';
import quoteDown from '../../assets/Images/quote-down.svg';
import { Link } from 'react-router-dom';
import circularImage from '../../assets/Images/Shape.svg'
import formatDate from '../../utils/FormatDate';


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const url = 'http://3.7.81.243:3253/api/blog/';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response Error!!!');
      }
      const data = await response.json();
      setBlogs(data?.data)
    } catch (error) {
      console.error('Error fetching Data >>>', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [])

  
  console.log(formatDate('2022-11-18T11:52:28+05:30' , 'DD-MM-YYYY'))

  const steps = [
    {
      label: 'step',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor '
    },
    {
      label: 'step',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor '
    },
    {
      label: 'step',
      content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor '
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
     {/* <img className='hero-banner' src={bgImage} alt='banner' /> */}
        <Grid container spacing={2} className="banner-content" mt={5}>
          <Grid item xs={12} sm={6} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <h1 className='section-heading' style={{margin:'0'}}>
              How much<br />could you save?
            </h1>
            <p className="banner-text" style={{marginBlock:'20px'}}>
              Answer the questions below to get a fixed price<br /> quotation for us to take your accountancy hassles away<br /> from you. </p>
            <Card className="card" width='450px' height='160px' style={{ padding: '10px 25px 10px 25px' }}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign={'center'}>
                  Is your turnover expected to be more<br /> than £85k?
                </Typography>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button size="small" className="btn-prmry" style={{paddingInline:'40px'}}>Yes</button>
                <button size="small" className="btn-prmry" style={{paddingInline:'40px'}}>No</button>
              </CardActions>
            </Card>
            <p >
              Takes less than 30 seconds
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={Image} width='620px' height='500px' />
          </Grid>
        </Grid>
      </section>
      {/* Services Section */}
      <section className='feature-section  container'>
        <Typography variant="h4" gutterBottom fontWeight={'bold'} mb={8} mt={10}>
          Services
        </Typography>
        <Grid container spacing={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} p={7}>
              <div className="feature-card" >
                <img src={feature.icon} alt={feature.title} style={{ width: '60px', height: '60px' }} />
                <h3 fontWeight={'bold'}>
                  {feature.title}
                </h3>
                <p>
                  {feature.description}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
      {/* About Section */}
      <section className='about-section container' >
        <Grid container spacing={2} className='about-container'>
          <Grid item xs={12} sm={12} md={6} >
            <h3 className='section-heading'>
              About Us
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
            </p>
            <Link to='/about'>
              <button className="btn-prmry" style={{marginTop:'10px'}}>
                Read More
              </button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <img src={aboutImage} alt="about-us" />
          </Grid>
        </Grid>
      </section>
      {/* Process Section */}
      <section className='our-process-section container'>
        <Grid container spacing={2}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div className='step'>
                <img src={circularImage} alt='circular-img' className='circular-image' />
                <div className='cnt'>
                <h2>{step.label} {index + 1}</h2>
                <p>{step.content}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
      <div className='section-wrp'>
        {/* Testimonial Section */}
        <section className='testimonial-section container'>
          <Typography variant="h4" gutterBottom fontWeight={'bold'}>
            Testimonials
          </Typography>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Grid key={index} container mt={2}>
                <Grid item xs={12} sm={8} md={10}>
                  <Card variant="outlined" sx={{ textAlign: 'center', position: 'relative', padding: '15px' }} >
                    <CardContent style={{ paddingBottom: '50px' }}>
                      <img src={quoteUp} alt="quote-top-left" style={{ position: 'absolute', top: '0', left: '0', zIndex: 999 }} />
                      <img src={quoteDown} alt="quote-bottom-right" style={{ position: 'absolute', bottom: '0', right: '0' }} />
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <img src={testimonial.image} alt={testimonial.title} style={{ width: '40px', height: '40px', borderRadius: '50%', }} />
                        <Typography variant="h6" component="h2" gutterBottom style={{ margin: '0 0 0 9px' }} fontWeight={'bold'}>
                          {testimonial.title}
                        </Typography>
                      </div>

                      <Typography variant="body1" component="p">
                        {testimonial.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            ))}
          </Slider>
        </section>

        {/*Blogs Section */}
        <section className='blogs container'>
          <Grid container spacing={2} className="blogs-section">
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom fontWeight={'bold'}>
                Blogs
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
              <Link to='/blogs' style={{ color: '#3D5FDD', textDecoration: 'none', fontWeight: 'bold' }}>
                View All
              </Link>
            </Grid>
            {blogs?.slice(0, 3).map((blog, index) => 
            {
              return (
              <Grid key={index} item xs={12} md={4}>
                <div className="blog-item">
                  <img src={blog?.image_url} alt={blog?.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }} />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {blog?.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    {formatDate((blog?.createdAt) , 'DD-MM-YYYY')} <span style={{ color: '#D0021B' }}> Posted by {blog?.writer_name} </span>
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    {blog?.short_description}
                  </Typography>
                </div>
              </Grid>
              )})}
          </Grid>
        </section>
      </div>
      {/*Form */}
      <Form />





    </>
  )
}

export default Home

