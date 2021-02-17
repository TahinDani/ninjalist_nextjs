import { posts } from '../../../postsData'

export default function handler(req, res) {
    const {id} = req.query
    const filtered = posts.filter(post => post.id.toString() === id)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Post with the id of ${id} is not found`})
    }
}