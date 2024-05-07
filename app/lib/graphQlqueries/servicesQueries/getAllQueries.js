import graphqlrequets from "../graphqlrequets";



export const getAllServices = async() => {
    const query = {
        query : `
        query allservices {
            services {
              nodes {
                content(format: RENDERED)
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
                title
                serviceId
                slug
                link
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const allServices = resJson.data;
    return allServices;
}