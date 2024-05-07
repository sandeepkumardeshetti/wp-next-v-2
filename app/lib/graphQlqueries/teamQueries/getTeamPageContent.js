import graphqlrequets from "../graphqlrequets";



export const getTeamPageContent = async() => {
    const query = {
        query : `
        query teamContent {
            page(id: "/wpicms/team/", idType: URI) {
              content(format: RENDERED)
              uri
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const TeamPageContent = resJson.data;
    return TeamPageContent;
}