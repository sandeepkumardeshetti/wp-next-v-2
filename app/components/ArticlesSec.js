"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { allArticlesServerAction } from './serverActions/allArticlesActions';



const ArticlesSec = ({ articlesData }) => {
    const [articles, setArticles] = useState(articlesData);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [endCur, setEndCur] = useState(articlesData.articles.pageInfo.endCursor)
    const [startCur, setStartCur] = useState(articlesData.articles.pageInfo.startCursor)

    const [forwardBtn, setForwardBtn] = useState(false)
    const [backwardBtn, setBackwardBtn] = useState(true)

    const [direction, setDirection] = useState('forward')



    async function fetchNewData() {
        try {
            setLoading(true);
            const newData = await allArticlesServerAction(endCur, direction, startCur);
            setArticles(newData);
            setEndCur(newData.articles.pageInfo.endCursor)
            setStartCur(newData.articles.pageInfo.startCursor)

            if (direction === 'forward' && !newData.articles.pageInfo.hasNextPage) {
                setDirection('backward'); // If we were going forward and no more next pages, switch to backward
            } else if (direction === 'backward' && !newData.articles.pageInfo.hasPreviousPage) {
                setDirection('forward'); // If we were going backward and no more previous pages, switch to forward
            }
            setForwardBtn(!newData.articles.pageInfo.hasNextPage)
            setBackwardBtn(!newData.articles.pageInfo.hasPreviousPage)
        }
        catch (error) {
            setError(error);
        } finally {
            setLoading(false);

            console.log(direction)

        }
    }
    // useEffect(() => {
    //     fetchNewData()

    // }, [])

    function handlePaginationButton() {
        fetchNewData()
    }

    return (
        <>
            {error ? (
                <div className="text-danger">Failed to load articles. Please try again later.</div>
            ) : (
                <>
                    {
                        articles.articles.edges.map((article, index) => {
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
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary me-4' onClick={handlePaginationButton} disabled={backwardBtn}>{loading ? 'Loading...' : 'Previous'}</button>
                        {error && <div>Error: {error.message}</div>}
                        <button className='btn btn-primary' onClick={handlePaginationButton} disabled={forwardBtn}>{loading ? 'Loading...' : 'Next'}</button>
                        {error && <div>Error: {error.message}</div>}
                    </div>
                </>

            )}

        </>
    )
}

export default ArticlesSec
