import graphqlrequets from "../graphqlrequets";



export const getAllTeam = async() => {
    const query = {
        query : `
        query team {
          teams {
            nodes {
              teamImages {
                teamNewImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
              title(format: RENDERED)
              teamFullDescription
              teamFbLink
              teamEmail
              teamDesignation
              slug
              link
              teamLinkedinLink
              teamName
              teamPhone
              teamShortDescription
              teamTwitterLink
              teamWebsiteLink
              teamWorkExperience
            }
          }
        }
        `
    }
    const resJson = await graphqlrequets(query);
    const allTeam = resJson.data;
    return allTeam;
}