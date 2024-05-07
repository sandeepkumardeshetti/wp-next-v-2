import graphqlrequets from "../graphqlrequets";



export const getAllTeam = async() => {
    const query = {
        query : `
        query team {
            teams {
              nodes {
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
                teamImageUrl
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const allTeam = resJson.data;
    return allTeam;
}