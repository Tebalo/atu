'use client'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import './CustomCarousel.css';

export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div className="h-screen flex items-center justify-center bg-gray-100"> 
			<h2></h2>
      <Carousel animationHandler="slide"  showIndicators showThumbs={false} showArrows={false} autoPlay swipeable interval={3000}  infiniteLoop>
				<div className="relative"> 
					<img src="/assets/books.jpg" alt="image1" className=""/>
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-serif">Career Advice</h1>
				</div> 
				<div className="relative"> 
					<img src="/assets/music.jpg" alt="image2" className=""/> 
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-serif">About Us</h1>
				</div> 
				<div className="relative"> 
					<img src="/assets/ocean.jpg" alt="image3" className=""/> 
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-serif">Sample CV</h1>
				</div> 
				<div className="relative"> 
					<img src="/assets/student.jpg" alt="image4" className=""/> 
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-serif">Sponsors</h1>
				</div> 
				<div className="relative"> 
					<img src="/assets/student-group.jpg" alt="image5" className=""/> 
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-serif">Diversity</h1>
				</div> 
			</Carousel> 
			</div> 
		); 
	} 
};
