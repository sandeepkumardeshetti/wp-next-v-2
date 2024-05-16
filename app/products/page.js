import React from 'react'
import './products.css'
import { getAllProducts } from '../lib/graphQlqueries/productQueries/getAllProducts'
import Link from 'next/link';
import DomPurify from '../components/domPurify';
import Image from 'next/image'
import placeholderDataUri from '../lib/placeholderDataUri';



async function getProductsFunc() {
    const AllProducts = await getAllProducts();
    return AllProducts;
}

const Productspage = async () => {
    const AllProductsRes = await getProductsFunc();
    const allProductsArr = AllProductsRes.products.edges;
    const placeholderImage = placeholderDataUri()
  
    return (
        <main className='container'>
            <div className='row products-layout-one__slider ' >
                {
                    allProductsArr.map((product) => {
                        return (
                            <div className="products-layout-one__slide col-md-6 col-lg-4" key={product.node.productId}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            <Link className="text-decoration-none" href={`/products/${product.node.slug}`}>{product.node.title}</Link>
                                        </h3>
                                        <Link  href={`/products/${product.node.slug}`}>
                                            <Image placeholder={placeholderImage}   width={300} height={300} className="img-fluid w-100 my-3" alt={product.node.featuredImage.node.altText} src={product.node.featuredImage.node.mediaItemUrl} /></Link>
                                        
                                        <DomPurify domClass="card-text line-clamp line-clamp-4 p-0 text-decoration-none" domData={product.node.content} />
                                        <div className="text-end read-more-btn-con">
                                            <Link  href={`/products/${product.node.slug}`} className="card-link read-more-btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            {/* <DomPurify domClass=""  domData={productsPageContent.content.rendered}/> */}
        </main>
    )
}

export default Productspage
