import { type NextPage } from "next";
import { type GetServerSideProps } from 'next'
import BlogDisplay from "../components/BlogDisplay";



type BlogPostProps = {
  _id: string,
  title: string,
  description: string,
  image: string
}

function Home({posts}:{posts: BlogPostProps[]} ) {
  console.log("posts inside home", posts)
  return (
   <div className="flex flex-col items-center">
   
   {posts.map((post, index: number) => 
    <div className="flex flex-row" key={index}>
      <BlogDisplay post={post} />
    </div>
      
   )}
   </div>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.BACKEND_URL);
  const posts: BlogPostProps[] = await response.json();
  
  return {
    props: { posts: posts },
  }
};

export default Home;
