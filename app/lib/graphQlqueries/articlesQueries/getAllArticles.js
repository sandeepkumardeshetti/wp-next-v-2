import graphqlrequets from "../graphqlrequets";



export const getAllArticles = async() => {
    const query = {
        query : `
        query GetAllArticles {
            articles(first: 3) {
              edges {
                node {
                  slug
                  title
                  articleId
                  content
                  featuredImage {
                    node {
                      mediaItemUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const allPosts = resJson.data;
    return allPosts;
}