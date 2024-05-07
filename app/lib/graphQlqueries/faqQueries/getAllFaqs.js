import graphqlrequets from "../graphqlrequets";



export const getAllFaqs = async() => {
    const query = {
        query : `
        query faqs {
            faqs {
              nodes {
                faqId
                content(format: RENDERED)
                id
                slug
                title
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const allFaqs = resJson.data;
    return allFaqs;
}