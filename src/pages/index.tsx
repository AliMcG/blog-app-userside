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
        <div className="flex relative lg:even:flex-row lg:odd:flex-row-reverse flex-col sm:items-center w-3/5 h-96 border mt-10 bg-[#F2F7FF] lg:justify-between lg:odd:justify-end p-4 rounded" key={index}>
          
            <div className="text-gray-700 p-4 text-base ">
              <h2 className="font-bold mb-4 text-xl">{post.title.toUpperCase()}</h2>
              <Markup content={`${post.description.substring(0, 100)}...`} />
            </div >
            <div className="w-3/5 h-80 relative ">
            <Image src={post.image} alt="Blog image" sizes="320 640 750"
    fill />
            </div>
          
           
            
          
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
