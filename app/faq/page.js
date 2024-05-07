import React from 'react'
import './faq.css'
import { getAllFaqs } from '../lib/graphQlqueries/faqQueries/getAllFaqs'
import getPageContent from '../lib/getPageContent';
import DomPurify from '../components/domPurify';


async function getAllFaqsFunc() {
    const allFaqs = await getAllFaqs();
    return allFaqs;
}


const Faq = async () => {
    const allFaqs = await getAllFaqsFunc();
    // console.log(allFaqs.faqs.nodes);
    const faqArr = allFaqs.faqs.nodes;

    // const faqPageContent = await getPageContent('91');
    

    return (
        <main className='container my-5' >
            <div className="faq-layout-one">
                <h2 className="faq-layout__heading mb-5"><span>Frequently Asked Questions</span></h2>
                <div className="accordion " id="faq-layout-one__accordion">
                    {
                        faqArr.map((faq) => {
                            return (
                                <div className="accordion-item" key={faq.faqId}>
                                    <h2 className="accordion-header"  id={`faq-${faq.faqId}-heading`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faqLayoutOnecollapse-${faq.faqId}`} aria-expanded="false" aria-controls={`faqLayoutOnecollapse-${faq.faqId}`}>{faq.title}</button>
                                    </h2>
                                    <div id={`faqLayoutOnecollapse-${faq.faqId}`} className="accordion-collapse collapse" aria-labelledby={`faq-${faq.faqId}-heading`} data-bs-parent="#faq-layout-one__accordion" >
                                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.content }}>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            {/* <DomPurify domClass="" domData={faqPageContent.content.rendered} /> */}
          
        </main>
    )
}

export default Faq
