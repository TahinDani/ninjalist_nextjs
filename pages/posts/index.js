import Link from "next/link"
import { server } from '../../config/index'

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/posts`)
    const data = await res.json()

    return {
        props: { posts: data }
    }
}

const posts = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                    <a>
                        <h2>{post.title}</h2>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default posts;