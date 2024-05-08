import graphqlrequets from "../graphqlrequets";



export const getAllTeam = async() => {
    const query = {
        query : `
        query team {
            teams {
              nodes {
                teamImages {
                  fieldGroupName
                  teamNewImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
                id
                title
                slug
                teamDesignation
                teamEmail
                teamFbLink
                teamFullDescription
                teamId
                teamLinkedinLink
                teamName
                teamPhone
                teamShortDescription
                teamTwitterLink
                teamWebsiteLink
                teamWorkExperience
                teamImage
                teamImageLink
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const allTeam = resJson.data;
    return allTeam;
}