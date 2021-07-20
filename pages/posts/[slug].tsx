import { getEvent, getHomePageContent, getSiteConfig } from "../../lib/api";
import Event from "../../components/Event";
import { IEvent } from "../../interfaces/cmsQueries/objects/IEvent";
import Layout from "../../components/Layout";

const Post = (props) => {
  const event = props.event as IEvent;
  return (
  <Layout title={event.name} config={props.config}>
    <Event {...event} />
  </Layout>);
};

export async function getStaticProps({ params }) {
  const event = await getEvent(params.slug);

  const config = await getSiteConfig();
  config.og = {
    title: event.name,
    description: 'Test description',
    image: event.coverImage,
    type: 'website',
    url: `https://lsc-website.vercel.app/posts/${params.slug}`
  }

  return {
    props: {
      event,
      config
    },
  };
}
 
export async function getStaticPaths() {
  const paths = (await getHomePageContent()).events.map((event) => {
    return {
      params: {
        slug: event.name.replace(/\s+/g, '-').toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Post;
