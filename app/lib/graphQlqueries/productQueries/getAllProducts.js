import graphqlrequets from "../graphqlrequets";



export const getAllProducts = async() => {
    const query = {
        query : `
        query products {
            products {
              edges {
                node {
                  content(format: RENDERED)
                  featuredImage {
                    node {
                      altText
                      mediaItemUrl
                    }
                  }
                  id
                  parentId
                  slug
                  title(format: RENDERED)
                  uri
                }
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const allProducts = resJson.data;
    return allProducts;
}