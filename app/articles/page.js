
import React from 'react'
import './article.css'
import { getAllArticles } from '../lib/graphQlqueries/articlesQueries/getAllArticles';

// import ArticlesMainSec from '../components/articlesComponents/ArticlesMainSec';


export const metadata = {
    title: "Articles",
    description: "list of articles",
  };

  import dynamic from 'next/dynamic';

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
              <ArticlesMainSec articlesData={allArticlesMain}/>
                
            </div>



        </main>
    )
}

export default Articles
