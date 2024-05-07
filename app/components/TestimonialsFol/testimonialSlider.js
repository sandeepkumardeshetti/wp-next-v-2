
'use client'

import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dompurify from "isomorphic-dompurify";
import Image from 'next/image'

const TestimonialSlider = (props) => {
    var slickSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const sanitizer = dompurify.sanitize;

    return (
        <Slider {...slickSettings} className='row testimonial-slider-one'>
            {
                props.testiData.map((testimonial) => {
                    return (
                        <div className="col-md-6 mb-5" key={testimonial.id}>
                            <div className="card">
                                <div className="card-content">
                                    <Image width={300} height={300} src="" className="card-img-top" alt="" />
                                    <div className="content">
                                        <h3 className="card-title">{testimonial.title} </h3>
                                        <h5>{testimonial.testimonialDesignation}</h5>
                                    </div>
                                </div>

                                <div className="card-body" dangerouslySetInnerHTML={{ __html: sanitizer(testimonial.content) }} />

                            </div>
                        </div>
                    )

                })
            }

        </Slider>
    )
}

export default TestimonialSlider
