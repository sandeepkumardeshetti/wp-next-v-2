
import React from 'react'
import './article.css'
import { getAllArticles } from '../lib/graphQlqueries/articlesQueries/getAllArticles';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

async function getAllArticlesMain() {
    const allArticles = await getAllArticles();
    return allArticles;
}


const Articles = async () => {
    const endCursor = null
    const direction = "forward"
    const startCursor = null
    const first = 5
    const allArticlesMain = await getAllArticles(endCursor, direction, startCursor, first)
    console.log(allArticlesMain)
    return (
        <main>
            <div className='container' >
                <div className='row blog-layout-one' >
                    {
                        allArticlesMain.articles.edges.map((article, index) => {
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
            </div>



        </main>
    )
}

export default Articles
