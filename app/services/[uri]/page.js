import DomPurify from '../../components/domPurify';
import { SingleService } from '../../lib/graphQlqueries/servicesQueries/getSingleService'
import React from 'react'
import Image from 'next/image'
import { getAllServices } from '../../lib/graphQlqueries/servicesQueries/getAllQueries';
import placeholderDataUri from '../../lib/placeholderDataUri';




export async function generateStaticParams() {
  const getAllSer = await getAllServices();

  return getAllSer.services.nodes.map((service) => ({
    params: {
      uri: service.slug,
    },
  }));
}




async function SingleServiceFunc(postId) {
  const ServiceRes = await SingleService(postId);
  return ServiceRes;
}

const SingleSerivespage = async ({ params }) => {

  const service = await SingleServiceFunc(params.uri);
  const serviceFinalData = service.service
  const placeholderImage = placeholderDataUri()
  return (
    <main className='container'>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="service-detail-img h-100">
            <Image placeholder={placeholderImage} width={500} height={400} className="img-fluid card-img-top  rounded-0" alt="Enim ex vitae voluptates consequatur in eum"  src="https://wpdemo.gclientdemo.com/wp-content/uploads/2024/01/service-first.jpg" />		 </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="service-detail-content">
            <header className="entry-header">
              <h1>{serviceFinalData.title}</h1>
            </header>
            <div className="entry-content line-h-28">
            <DomPurify domClass=""  domData={serviceFinalData.content}/>

            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default SingleSerivespage
