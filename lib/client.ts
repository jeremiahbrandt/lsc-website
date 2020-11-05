import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "60gef8on",
    dataset: "production",
    useCdn: false
})