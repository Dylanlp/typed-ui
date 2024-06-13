import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: any }) {
  return (
    <section className="">
      <h2 className="">Blog</h2>
      <ul className="">
        {allPostsData.map(
          ({
            id,
            date,
            title,
          }: {
            id: string;
            date: string;
            title: string;
          }) => (
            <li className="" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          )
        )}
      </ul>
    </section>
  );
}
