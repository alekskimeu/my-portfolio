import Head from "next/head";



import { Hero, Posts, Projects, Skills } from '../components';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Alex Kimeu - Homepage </title>
        <meta
          name="description"
          content="Software Developer | Limitless learner | Blogger"
        />
        <meta name="keywords" content="Alex Kimeu, Software Developer" />
      </Head>
      <main>
        <Hero />
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Posts */}
        <Posts posts={posts} />
      </main>
    </>
  );
}

// Fetch posts & projects
export async function getStaticProps() {
  const posts = getSortedPostsData().slice(0, 3);

  return {
    props: { posts }
  };
}