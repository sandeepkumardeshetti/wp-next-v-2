
async function getPageContent(pageId) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL_POINT}/${pageId}`
    );
    const pageContent = await response.json();
    return pageContent;
  }
  export default getPageContent