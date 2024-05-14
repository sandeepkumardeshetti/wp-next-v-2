"use client"

import React, { useState } from 'react'
import { allArticlesServerAction } from './serverActions/allArticlesActions'


const LoadMore = ({ newArticles, setNewArticles }) => {
    const [loadendCursor, setLoadEndCurosr] = useState(null)
    const [loadButtonText, setLoadButtonText] = useState("Load More")
    const [loading,setloading ] = useState(false)

    const [loadHasNextPage, setLoadHasNextPage] = useState('true')

    // console.log(initialHasNextPage)

    const endCursor = null
    const direction = "forward"
    const startCursor = null
    const first = 1
    const [data, setData] = useState(null)
    // console.log(newArticles)

    async function getMoreArticlesData() {
        console.log("entered")
        try {
            setloading(true)
            setLoadButtonText("Loading More Articles")
            const moreArticles = await allArticlesServerAction(newArticles.articles.pageInfo.endCursor, direction, startCursor, first);
            // setNewArticles(newData);
            console.log(moreArticles)
            setLoadHasNextPage(moreArticles.articles.pageInfo.hasNextPage)
            let updateMoreAticles = {

                articles: {
                    pageInfo: {

                    },
                    edges: [

                    ]
                }


            }
            updateMoreAticles.articles.pageInfo = moreArticles.articles.pageInfo

            newArticles.articles.edges.map((node) => {
                updateMoreAticles.articles.edges.push(node)
            })
            moreArticles.articles.edges.map((node) => {
                updateMoreAticles.articles.edges.push(node)
            })
            setNewArticles(updateMoreAticles)
        }
        catch (error) {
            // setError(error);
        } finally {
            setLoadButtonText("Load More")
            setloading(false)

            // console.log(direction)


        }

    }


    function handleLoadMore() {
        getMoreArticlesData()

    }
    console.log(loadHasNextPage)
    return (
        <div className='text-center my-5'>

            <button className={`btn btn-primary ${!loadHasNextPage ? 'd-none' : 'd-inline-block'}`} onClick={handleLoadMore} >
                <span class={`${!loading ?  'd-none' : 'd-inline-block' } spinner-border spinner-border-sm me-2`} role="status" aria-hidden="true"></span>
                {loadButtonText}</button>
            {/* <button class="btn btn-primary" type="button" >
                <span class={`${!loading ?  'd-none' : 'd-inline-block' }spinner-border spinner-border-sm me-2`} role="status" aria-hidden="true"></span>
                {loadButtonText}
            </button> */}
        </div>
    )
}

export default LoadMore
