'use client'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div className="h-screen flex items-center justify-center bg-gray-100"> 
			<h2></h2>
      <Carousel autoPlay swipeable transitionTime={300} infiniteLoop emulateTouch>
				<div className="relative"> 
					<img src="/assets/books.jpg" alt="image1"/> 
					<p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Image 1</p> 

				</div> 
				<div className="relative"> 
					<img src="/assets/music.jpg" alt="image2" /> 
					<p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Image 2</p> 

				</div> 
				<div className="relative"> 
					<img src="/assets/ocean.jpg" alt="image3"/> 
					<p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Image 3</p> 

				</div> 
				<div className="relative"> 
					<img src="/assets/student.jpg" alt="image4"/> 
					<p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Image 4</p> 

				</div> 
				<div className="relative"> 
					<img src="/assets/student-group.jpg" alt="image5" /> 
					<p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Image 5</p> 
				</div> 
			</Carousel> 
			</div> 
		); 
	} 
};
