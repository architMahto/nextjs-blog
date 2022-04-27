import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message: messageContent } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !messageContent ||
      messageContent.trim() === ''
    ) {
      res.status(422).json({ status: 'Failed', message: 'Invalid input.'})
      return
    }

    let client
    const MONGODB_USERNAME = 'mongoadmin'
    const MONGODB_PASSWORD = 'testadmin1'
    const MONGODB_DATABASE = 'nextjs-blog'
    const MONGODB_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.03r3c.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(MONGODB_URL)
    } catch (err) {
      res.status(500).json({ status: 'Failed', message: 'Could not connect to database'})
      return
    }

    const db = client.db()
    const data = { email, name, messageContent }

    try {
      const result = await db.collection('messages').insertOne(data)
      data.id = result._id
    } catch (err) {
      client.close()
      res.status(500).json({ status: 'Failed', message: 'Could not store message'})
      return
    }

    client.close()

    res.status(201).json({ message: 'Successfully stored message!', data })
  }
}
