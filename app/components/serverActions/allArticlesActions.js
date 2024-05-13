'use server'

import { getAllArticles } from "../../lib/graphQlqueries/articlesQueries/getAllArticles";


 
export async function allArticlesServerAction(endcursor,direction,startCursor,first=3) {
    const allArticlesAction = await getAllArticles(endcursor,direction,startCursor,first);
    // console.log(endcursor)
    return allArticlesAction;
}