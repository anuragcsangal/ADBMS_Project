import { connectToDatabase } from '../../utils/mongodb'

export default async function handler(req, res) {
  const { method } = req

  if (method === 'GET') {
    const { db } = await connectToDatabase()
    const posts = await db.collection('posts').find().sort({ date: -1 }).toArray()
    res.status(200).json(posts)
  } else if (method === 'POST') {
    const { db } = await connectToDatabase()
    const { title, content } = req.body
    const date = new Date().toISOString()
    const result = await db.collection('posts').insertOne({ title, content, date })
    res.status(201).json(result.ops[0])
  } else {
    res.status(400).json({ message: 'Method not allowed' })
  }
}
