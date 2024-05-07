import graphqlrequets from "../graphqlrequets";



export const SingleProduct = async(uriParam) => {
    const query = {
        query : `
        query singleProduct {
            product(id: "${uriParam}", idType: URI) {
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
              productId
              title
              uri
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const singleProduct = resJson.data;
    return singleProduct;
}