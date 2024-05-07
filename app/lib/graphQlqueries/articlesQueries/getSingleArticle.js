import graphqlrequets from "../graphqlrequets";


export  const getSingleArticle = async(slug) => {
    const query ={
      query : `query getSingleArticle {
        article(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          id
          slug
          link
          title(format: RENDERED)
          featuredImage {
            node {
              altText
              id
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
          }
        }
      }`
    }
    const resJson = await graphqlrequets(query);
      const singleArticle = resJson.data.article;
      return singleArticle;
  }