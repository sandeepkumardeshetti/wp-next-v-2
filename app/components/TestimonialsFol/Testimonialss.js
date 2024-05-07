

import React from 'react'
import './testimonials.css'
import { getAllTestimonials } from '@/app/lib/graphQlqueries/testimonialsQueries/getAllTestimonials'


import TestimonialSlider from './testimonialSlider';




async function getTestiFunc() {
    const AllTeam = await getAllTestimonials();
    return AllTeam;
}

const Testimonialss = async () => {
    const AllTestiRes = await getTestiFunc();
    console.log(AllTestiRes.testimonials.nodes);
    const finalTesiArr = AllTestiRes.testimonials.nodes

    return (
        <div className='container'>
            <div className='row' >
                <div className="col-lg-2">
                    <div className="testimonial-heading mb-4">
                        <h2 className="">What Our Client Say’s</h2>
                    </div>
                </div>
                <div className='col-lg-10' >
                   <TestimonialSlider testiData={finalTesiArr} />
                </div>
            </div>


        </div>

    )
}

export default Testimonialss
