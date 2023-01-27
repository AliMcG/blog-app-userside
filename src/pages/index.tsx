// import { type NextPage } from "next";
import { type GetServerSideProps } from "next";
// import BlogDisplay from "../components/BlogDisplay";
// import Link from "next/link";
import Image from "next/image";
import { Markup } from "interweave";

type BlogPostProps = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

function Home({ posts }: { posts: BlogPostProps[] }) {
  // console.log("posts inside home", posts)
  return (
    <div className="m-auto my-10 flex flex-col items-center">
      {posts.map((post, index: number) => (
        <div className="flex even:flex-row odd:flex-row-reverse w-3/5 h-96 border mt-10 bg-[#F2F7FF] justify-between odd:justify-end p-4 rounded" key={index}>
          
            <div className="text-gray-700 p-4 text-base ">
              <h2 className="font-bold mb-4 text-xl">{post.title.toUpperCase()}</h2>
              <Markup content={`${post.description.substring(0, 100)}...`} />
            </div>
            <Image src={post.image} alt="Blog image" width="475" height="100" />
          
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BACKEND_URL);
  const posts: BlogPostProps[] = await response.json();

  return {
    props: { posts: posts },
  };
};

export default Home;
