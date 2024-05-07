import graphqlrequets from "../graphqlrequets";



export const getAllTestimonials = async() => {
    const query = {
        query : `
        query testimonials {
          testimonials {
            nodes {
              content(format: RENDERED)
              id
              slug
              testimonialDesignation
              testimonialId
              testimonialImageUrl
              testimonialOrganization
              title
            }
          }
        }
        `
    }
    const resJson = await graphqlrequets(query);
    const allTestimonials = resJson.data;
    return allTestimonials;
}