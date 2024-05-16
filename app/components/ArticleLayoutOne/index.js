// "use server"
import React from 'react'
import './articles.css'

import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import Image from 'next/image'
import { getAllArticles } from '../../lib/graphQlqueries/articlesQueries/getAllArticles';


import dynamic from 'next/dynamic';

const ArticlesSec = dynamic(() => import('../articlesComponents/ArticlesSec'), {
  ssr: false
});

async function getAllArticlesFunc() {
    const allArticles = await getAllArticles();
    return allArticles;
}


const ArticlesLayoutOne = async () => {
    const allArticlesRes = await getAllArticlesFunc();
    return (
            < section id="articles" className="wpicms-articles articles-layout-1" >
                <div className='container' >
                    <div className="row blog-layout-one">
                        <div className="col-md-12  col-lg-3 card-cols-con">
                            <div className="blog-text-container h-100 d-flex flex-column justify-content-between">
                                <div className="blog-heading-con">
                                    <h2 className={`blog-heading rochester-font`}>Read our<br />
                                        latest blogs</h2>
                                </div>
                                <div className="dis-btn-con d-none d-lg-block ">
                                    <a className="d-inline-block postsen" href="#0">Discover more
                                        <div className="text-center mt-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="25" viewBox="0 0 39 25" fill="none">
                                                <path d="M38.2 13.292L29.709 23.585C29.4007 23.953 28.961 24.1861 28.4834 24.2347C28.0058 24.2832 27.5281 24.1434 27.152 23.845C26.7912 23.532 26.5636 23.093 26.5157 22.6177C26.4677 22.1425 26.603 21.6668 26.894 21.288L32.932 13.96L2.82702 13.96C2.58356 13.9657 2.34142 13.9227 2.11484 13.8335C1.88825 13.7442 1.68179 13.6106 1.50759 13.4404C1.33339 13.2703 1.19497 13.067 1.10047 12.8425C1.00596 12.6181 0.957275 12.377 0.957275 12.1335C0.957275 11.89 1.00596 11.6489 1.10047 11.4245C1.19497 11.2001 1.33339 10.9968 1.50759 10.8266C1.68179 10.6564 1.88825 10.5228 2.11484 10.4336C2.34142 10.3444 2.58356 10.3013 2.82702 10.307L32.932 10.307L26.894 2.97902C26.6077 2.59437 26.4755 2.11664 26.5232 1.63953C26.571 1.16242 26.7952 0.720354 27.152 0.400026C27.5289 0.104065 28.0057 -0.0343952 28.4825 0.01371C28.9593 0.0618153 29.3989 0.292746 29.709 0.658026L38.2 10.972C38.4611 11.3025 38.6031 11.7114 38.6031 12.1325C38.6031 12.5537 38.4611 12.9626 38.2 13.293V13.292Z" fill="black"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ArticlesSec articlesData={allArticlesRes} />
                        <div className="col-md-6  dis-btn-con d-lg-none my-4">
                            <a className=" fs-24 " href="#0">Discover more<div className="text-center d-inline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24.245" viewBox="0 0 37.6 24.245"><g id="Group_4189" data-name="Group 4189" transform="translate(0)"><g id="Group_4086" data-name="Group 4086" transform="translate(0 0)"><g id="Group_4085" data-name="Group 4085" transform="translate(0 24.245) rotate(-90)"><path id="Path_159984" data-name="Path 159984" d="M10.953,37.2.66,28.709A1.842,1.842,0,0,1,.4,26.152a1.874,1.874,0,0,1,2.557-.258l7.328,6.038V1.827a1.827,1.827,0,1,1,3.653,0V31.932l7.328-6.038a1.923,1.923,0,0,1,2.579.258,1.853,1.853,0,0,1-.258,2.557L13.273,37.2a1.872,1.872,0,0,1-2.321,0Z" fill="#000"></path></g></g></g></svg>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
    )
}

export default ArticlesLayoutOne
