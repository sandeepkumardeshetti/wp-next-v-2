
import React, { Suspense } from 'react'
import './article.css'
import { getAllArticles } from '../lib/graphQlqueries/articlesQueries/getAllArticles';

// import ArticlesMainSec from '../components/articlesComponents/ArticlesMainSec';


export const metadata = {
  title: "Articles",
  description: "list of articles",
};

import dynamic from 'next/dynamic';
import LoadingSkeleton from '../components/loading';

const ArticlesMainSec = dynamic(() => import('../components/articlesComponents/ArticlesMainSec'), {
  ssr: false
},);


const Articles = async () => {

  const endCursor = null
  const direction = "forward"
  const startCursor = null
  const first = 3
  const allArticlesMain = await getAllArticles(endCursor, direction, startCursor, first)
  // console.log(allArticlesMain)
  return (
    <main>
      <div className='container' >
        {/* <LoadingSkeleton /> */}
        {/* <Suspense fallback={<p>Loading...</p>}> */}
          <ArticlesMainSec articlesData={allArticlesMain} />

        {/* </Suspense> */}

      </div>



    </main>
  )
}

export default Articles
