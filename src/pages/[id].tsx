import { type GetServerSideProps } from "next";
import Image from "next/image";
import { Markup } from "interweave";


// Defines the type for the blog posts used in this app
type BlogPostProps = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

function PostDetails( {post}: {post: BlogPostProps} ) {
  console.log("a post", post)
  return (
    <div className="m-auto my-10 flex flex-col items-center">
    
        <div
          className="mt-10 flex h-4/5 md:w-3/5 mx-4 flex-col-reverse lg:items-start items-center rounded border bg-custom-blue p-4 lg:odd:flex-row-reverse  lg:even:flex-row lg:odd:justify-end"
         
        >
          <div className="p-4 text-base text-gray-700 font-sans">
            <h2 className="mb-4 text-xl font-bold font-mono">
              {post.title.toUpperCase()}
            </h2>
            <Markup content={post.description} />
          </div>
          <div className="relative h-80 lg:w-3/5 w-11/12">
            <Image src={post.image} alt="Blog image" sizes="" fill className="rounded"/>
          </div>
        </div>
     
    </div>
  )
}

// A type safe funstion to fetch data
export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json() as T
  return body;
}


// Type safe GetServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string
  const url = process.env.BACKEND_URL as string
  const data = await http<BlogPostProps[]>(`${url}/${id}`)
  return {
    props: { post: data },
  };
};

export default PostDetails;