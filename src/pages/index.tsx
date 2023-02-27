import { type GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Markup  } from "interweave";

// Defines the type for the blog posts used in this app
type BlogPostProps = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

function Home({ posts }: { posts: BlogPostProps[] }) {
  return (
    <div className="m-auto my-10 flex flex-col items-center">
      {posts.map((post, index: number) => (
        <div
          className="mx-4 mb-4 flex h-4/5 flex-col-reverse items-center rounded border bg-custom-blue p-4 md:w-3/5 lg:items-start lg:odd:flex-row-reverse  lg:odd:justify-end lg:even:flex-row hover:border-[#CFE1FF]"
          key={index}
        >
          <Link href={`/${post._id}`}>
            <div className="p-4 font-sans text-base text-gray-700 hover:text-[#067A75] ">
              <h2 className="mb-4 font-mono text-2xl font-bold hover:text-[#067A75]">
                {post.title.toUpperCase()}
              </h2>
              <Markup content={`${post.description.substring(0, 100)}...`} />
            </div>
          </Link>
          <div className="relative h-80 w-11/12 lg:w-3/5">
            <Link href={`/${post._id}`}>
              <Image
                src={post.image}
                alt="Blog image"
                sizes=""
                fill
                className="rounded"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

// A type safe funstion to fetch data
export async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = (await response.json()) as T;
  return body;
}

// Type safe GetServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await http<BlogPostProps[]>(process.env.BACKEND_URL as string);
  return {
    props: { posts: data },
  };
};

export default Home;
