import graphqlrequets from "../graphqlrequets";



export const getAllArticles = async (endCursor = null, direction = 'forward',startCursor=null) => {
  // const condition = `after: "${endCursor}", first: 3, where: {orderby: {field: DATE, order: DESC}}`;
  let condition;
  if (direction === 'forward') {
    condition = `after: "${endCursor}", first: 2, where: {orderby: {field: DATE, order: DESC}}`;
  } else if (direction === 'backward') {
    condition = `before: "${startCursor}", last: 2, where: {orderby: {field: DATE, order: DESC}}`;
  }
  const query = {
    query: `
        query GetAllArticles {
          articles(${condition}) {
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
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }
        `
  }
  const resJson = await graphqlrequets(query);
  const allPosts = resJson.data;
  return allPosts;
}