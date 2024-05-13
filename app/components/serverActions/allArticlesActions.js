'use server'

import { getAllArticles } from "../../lib/graphQlqueries/articlesQueries/getAllArticles";


 
export async function allArticlesServerAction(endcursor,direction,startCursor) {
    const allArticlesAction = await getAllArticles(endcursor,direction,startCursor);
    // console.log(endcursor)
    return allArticlesAction;
}