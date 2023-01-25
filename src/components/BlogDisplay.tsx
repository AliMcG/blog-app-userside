import Image from 'next/image'
import { Markup } from "interweave";
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

type BlogPost = {
  _id: string,
  title: string,
  description: string,
  image: string
}

export default function BlogDisplay({post}: BlogPost){
  return (
    
      <div className='flex flex-row border space-y-5 w-96'>
      <div className='text-gray-700'>
      <Link href={`/${post._id}`}>
          <h2 className='font-bold'>{post.title.toUpperCase()}</h2>
          <Markup content={`${post.description.substring(0, 90)}...`} />
          </Link>
        </div>
        <Image 
        src={post.image}
        alt="Blog image"
        width="300"
        height="200" 
        />
      </div>
    
  )
}