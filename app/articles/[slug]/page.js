import React from 'react'
// export const dynamicParams = true;
import { getSingleArticle } from '@/app/lib/graphQlqueries/articlesQueries/getSingleArticle';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Image from 'next/image'
import { getAllArticles } from '@/app/lib/graphQlqueries/articlesQueries/getAllArticles';




export async function generateStaticParams() {
    const getAllart = await getAllArticles();
 
    
    return getAllart.articles.edges.map((post) => ({
      params: {
        slug: post.node.slug,
      },
    }));
}

  

async function SingleArticleFunc(postId) {
    const articleRes = await getSingleArticle(postId);
    return articleRes;
}


const SingleArticle = async ({ params }) => {
    

  
    const article = await SingleArticleFunc(params.slug);
    const getAllart = await getAllArticles();
    // console.log(getAllart.articles.edges)

    if (!article) {
        return <div>Loading...</div>;
    }
    return (
        <main>
            <div className='container' >
                <div className="single-article-con">
                    <h2 className='mb-5' >{article.title}</h2>
                    <Image className="img-fluid  mb-5" width={500} height={500}  alt={article.featuredImage.node.altText} src={article.featuredImage.node.mediaItemUrl} />
                    <div className="single-article-content-con" dangerouslySetInnerHTML={{ __html: article.content }}>
                    </div>
                    <div class="social-media-group mt-5">
                        <p class=""> Share On     <Link class="mx-1" href="" target="_blank"><FaFacebook /></Link>
                            <Link class="me-2" href="" target="_blank"><FaTwitter /></Link>
                            <Link class="me-2" href="" target="_blank"><FaLinkedin /></Link>
                            <Link class="me-2" href="" target="_blank"><FaPinterest /></Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>


    )
}

export default SingleArticle
