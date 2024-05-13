"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import LoadMore from '../LoadMore';

const ArticlesMainSec = ({articlesData}) => {
    const [newArticles, setNewArticles] = useState(articlesData);
    return (
        <>
        <div className='row blog-layout-one' >
            {
                newArticles.articles.edges.map((article, index) => {
                    return (
                        <div key={article.node.slug} className="col-md-6 col-lg-3 card-cols-con">
                            <div className="card bg-transparent border-0 d-flex flex-column justify-content-between h-100">
                                <figure className="">
                                    <Link href={`/articles/${article.node.slug}`}>
                                        <img className="img-fluid card-img-top rounded-0" width={500} height={500} alt="Enim architecto amet quia" title="Enim architecto amet quia" src={article.node.featuredImage.node.mediaItemUrl} />
                                    </Link>
                                </figure>
                                <div className="card-body  px-0 d-flex flex-column justify-content-between">
                                    <h3 className="blog-title "><Link className="line-clamp line-clamp-3" href={`/articles/${article.node.slug}`}>{article.node.title}</Link></h3>
                                    <div className="social-media-group">
                                        <Link href="" target="_blank" className="ps-0"><FaFacebook /></Link>
                                        <Link href="" target="_blank" className="ps-2"><FaTwitter /></Link>
                                        <Link href="" target="_blank" className="ps-2"><FaLinkedin /></Link>
                                        <Link href="" target="_blank" className="ps-2"><FaPinterest /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <LoadMore  newArticles={newArticles} setNewArticles={setNewArticles}/>
        </>

    )
}

export default ArticlesMainSec
