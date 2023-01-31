import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselContainer } from './styles';
import Slide from './slide/Slide';



export default function CarouselComponent() {
  return (
    <CarouselContainer>
      <Carousel autoPlay infiniteLoop  showThumbs={false}>
        <Slide slideType={true} aContent={'flex-start'} imageUrl={`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('banner-1.png')`} textColor=""  tAlign='left'/>
        <Slide slideType={false} aContent={'flex-end'} imageUrl={`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('banner-2.jpg')`} textColor="white" tAlign='right'/>
      </Carousel>
    </CarouselContainer>
  )
}
