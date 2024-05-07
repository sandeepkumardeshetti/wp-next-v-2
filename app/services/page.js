import React from 'react'
import './services.css'
import { getAllServices } from '../lib/graphQlqueries/servicesQueries/getAllQueries'
import DomPurify from '../components/domPurify';
import Link from 'next/link';
import getPageContent from '../lib/getPageContent';
import Image from 'next/image'



async function getServicesFunc() {
    const AllServices = await getAllServices();
    return AllServices;
}

const Servicespage = async () => {
    const AllServicesRes = await getServicesFunc();
    console.log(AllServicesRes.services.nodes[0].featuredImage.node.mediaItemUrl);
    const servicesArr = AllServicesRes.services.nodes

    // const servicesPageContent = await getPageContent('209');
    return (
        <main className="container">
            <div className="services-layout-one">
                <div className="heading-con text-center">
                    <p><span className="box me-2"></span>Our Services</p>
                    <h2>Services We Offer</h2>
                </div>
                <div className="services-layout-one__slider row">
                    {
                        servicesArr.map((service) => {
                            return (
                                <div className="services-layout-one__slide col-md-6 col-lg-4" key={service.serviceId}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <Link  className="text-decoration-none" href={`/services/${service.slug}`}>
                                                    {service.title}				</Link>
                                            </h3>
                                            <Link href={`/services/${service.slug}`} >
                                                <Image width={300} height={400}  className="img-fluid w-100 my-3"  src={service.featuredImage.node.mediaItemUrl} alt="service" /></Link>
                                            <DomPurify domClass="card-text line-clamp line-clamp-4 p-0 mb-4" domData={service.content} />
                                            
                                            <div className="text-end read-more-btn-con">
                                                <Link href={`/services/${service.slug}`} className="card-link read-more-btn">
                                                   Read More
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* <DomPurify domClass="" domData={servicesPageContent.content.rendered} /> */}
        </main>
    )
}

export default Servicespage
