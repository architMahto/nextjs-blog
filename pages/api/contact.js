export default function handler(req, res) {
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

    const messageBody = { email, name, messageContent }
    res.status(201).json({
      message: 'Successfully stored message!',
      messageBody
    })
  }
}
