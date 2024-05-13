"use client"

import React, { useState } from 'react'
import { allArticlesServerAction } from './serverActions/allArticlesActions'


const LoadMore = ({ newArticles, setNewArticles }) => {
    const [loadendCursor, setLoadEndCurosr] = useState(null)
    const [loadButtonText, setLoadButtonText] = useState("Load More")
    // const initialHasNextPage = newArticles.articles.pageInfo.hasNextPage
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
            // setLoading(true);
            const moreArticles = await allArticlesServerAction(newArticles.articles.pageInfo.endCursor, direction, startCursor, first);
            // setNewArticles(newData);
            console.log(moreArticles)
            setLoadHasNextPage(moreArticles.articles.pageInfo.hasNextPage)
            let updateMoreAticles = {
                
                    articles :{
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
            // setLoading(false);

            // console.log(direction)


        }

    }


    function handleLoadMore() {
        getMoreArticlesData()

    }
    console.log(loadHasNextPage)
    return (
        <div className='text-center my-5'>
            <button className={`btn-primary ${ !loadHasNextPage ? 'd-none' : 'd-inline-block'}`} onClick={handleLoadMore} >Load More</button>
        </div>
    )
}

export default LoadMore
