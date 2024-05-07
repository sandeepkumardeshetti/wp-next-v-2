import DomPurify from '@/app/components/domPurify';
import { SingleProduct } from '@/app/lib/graphQlqueries/productQueries/getSingleProduct'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { getAllProducts } from '@/app/lib/graphQlqueries/productQueries/getAllProducts';





export async function generateStaticParams() {
    const getAllPro = await getAllProducts();
 
    return getAllPro.products.edges.map((product) => ({
      params: {
        uri: product.node.uri,
      },
    }));
}



async function SingleProductFunc(postId) {
    const ProduvctRes = await SingleProduct(postId);
    return ProduvctRes;
}

const SingleProductpage = async ({ params }) => {
    const getAllPro = await getAllProducts();

    const productData = await SingleProductFunc(params.uri);
    console.log(productData.product)
    return (
        <main className='container' >
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="product-detail-img h-100">
                        <Image width={500} height={400} className="img-fluid card-img-top  rounded-0" alt="Album" src={productData.product.featuredImage.node.mediaItemUrl} />            
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="product-detail-content">
                        <header className="entry-header">
                            <h1>{productData.product.title}</h1>
                        </header>
                        <DomPurify domClass="entry-content line-h-28" domData={productData.product.content} />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default SingleProductpage
