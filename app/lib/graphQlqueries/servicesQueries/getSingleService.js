import graphqlrequets from "../graphqlrequets";



export const SingleService = async(uriParam) => {
    const query = {
        query : `
        query singleService {
            service(id: "${uriParam}", idType: URI) {
              content(format: RENDERED)
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              slug
              title
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const singleService = resJson.data;
    return singleService;
}