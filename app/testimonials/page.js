import React from 'react'
import Testimonialss from '../components/TestimonialsFol/Testimonialss'
import getPageContent from '../lib/getPageContent'
import DomPurify from '../components/domPurify'



const TestimonialsPage = async() => {
  // const testimonialsPageContent = await getPageContent("95")
  return (
    <main className='container'>
      <Testimonialss />
      {/* <DomPurify domClass="" domData={testimonialsPageContent.content.rendered} /> */}
    </main>
  )
}

export default TestimonialsPage
