import Link from 'next/link'
import { server } from '../../config/index'

export const getStaticProps = async (context) => {
    const {id} = context.params
    const res = await fetch(`${server}/api/posts/${id}`)
    const data = await res.json()

    return {
        props: { post: data }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/posts`)
    const data = await res.json()
    const paths = data.map(post => {return { params: { id: post.id.toString() }}})

    return {
        paths,
        fallback: false,
    }
}

const post = ({ post }) => {
    return ( 
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href='/posts'>
                <a>Go Back</a>
            </Link>
        </div>
     );
}
 
export default post;