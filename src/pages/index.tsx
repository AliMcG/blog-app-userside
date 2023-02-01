import { type GetServerSideProps } from "next";
import Image from "next/image";
import { Markup } from "interweave";

type BlogPostProps = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

function Home( {posts}: {posts: BlogPostProps[]} ) {
  // console.log("posts inside home", posts)
  return (
    <div className="m-auto my-10 flex flex-col items-center">
      {posts.map((post, index: number) => (
        <div
          className="mt-10 flex h-4/5 w-3/5 flex-col-reverse lg:items-start items-center rounded border bg-[#F2F7FF] p-4 lg:odd:flex-row-reverse  lg:even:flex-row lg:odd:justify-end"
          key={index}
        >
          <div className="p-4 text-base text-gray-700 ">
            <h2 className="mb-4 text-xl font-bold">
              {post.title.toUpperCase()}
            </h2>
            <Markup content={`${post.description.substring(0, 100)}...`} />
          </div>
          <div className="relative h-80 lg:w-3/5 w-4/5">
            <Image src={post.image} alt="Blog image" sizes="" fill className="rounded"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json() as T
  return body;
}

export const getServerSideProps: GetServerSideProps = async () => {

  const data = await http<BlogPostProps[]>(process.env.BACKEND_URL as string)
  // const response = await fetch(process.env.BACKEND_URL as string);
 
  // const posts: BlogPostProps[] = await response.json();

  return {
    props: { posts: data },
  };
};

export default Home;
