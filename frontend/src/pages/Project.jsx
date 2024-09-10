import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card";
import art from "../assets/art.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Project = () => {
  const data = [
    {
      name: "Chat Application",
      live: "", photo : img5,
      github: "https://github.com/Yash98305/Final-Mini-Project",
    },
    {
      name: "SAAS plan with stripe",
      live: "https://teal-conkies-fe4d2f.netlify.app/", photo : img4,
      github: "https://github.com/Yash98305/TensorGo-Project",
    },
   
   
    {
      name: "Portfolio",
      live: "https://yashpatel-myportfolio.netlify.app/", photo : img2,
      github: "https://github.com/Yash98305/My-Portfolio",
    },
    {
      name: "Art Gallery",
      live: "https://art-gallery-website-by-yash-patel.netlify.app/",
      photo : art,
      github: "https://github.com/Yash98305/Art-Gallery",
    },
    {
      name: "Finance management",
      live: "https://finance-management-web-by-yash-patel.netlify.app/", photo : img3,
      github: "https://github.com/Yash98305/Scaler-Project",
    },
  ];
  return (
    <>
      <div style={{ marginTop: 100, padding: "0px 20px" }}>
        <Carousel
          rewind={true}
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
          {data.length>0 && data.map((data)=>{
            return <Card data = {data}/>;
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Project;
