import { posts } from '../../../postsData'

export default function handler(req, res) {
    res.status(200).json(posts)
}