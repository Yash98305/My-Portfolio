import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../components/Card"
import Card2 from '../components/Card2';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1// optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Project = () => {
  
  return (
    <><div style={{marginTop:100,padding:"0px 20px"}}>
    <Carousel 
    rewind = {true}
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 500ms ease-in-out"
      transitionDuration={800}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
    >
  <Card2 n={1}/>
      <Card2 n={2}/>
     <Card2 n={3}/>
      <Card2 n={4}/>
      <Card2 n={5}/>
      <Card2 n={6}/>
      <Card2 n={7}/>

    </Carousel>
    </div>
    </>
  )
}

export default Project