import graphqlrequets from "../graphqlrequets";



export const getMainMenu = async() => {
    const query = {
        query : `
        query MainMenuQuery {
            menuItems(where: {location: MAIN_MENU, parentId: "0"}, first: 100) {
              edges {
                node {
                  id
                  label
                  url
                  path
                  childItems {
                    edges {
                      node {
                        id
                        label
                        url
                        path
                      }
                    }
                  }
                }
              }
            }
          }
        `
    }
    const resJson = await graphqlrequets(query);
    const MainMenuItems = resJson.data.menuItems.edges;
    return MainMenuItems;
}