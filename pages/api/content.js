//Handle GET operations for the content
// H1 vs H2, box1 vs box2/3, images

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API - get correct link: use this page: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/project/
    const res = await fetch(`../server/server.js`)
    const data = await res.json()
  
    // Pass data to the page via props (list in API style of items needed image: content.image_path, etc.)
    return { props: { data } }
  }