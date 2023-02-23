const prisma = require('../services/prisma')

const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany()
  return res.json(users)
}

const getSingleUser = async (req, res) => {
  const { id } = req.params
  const users = await prisma.user.findUnique({
    where: { id: id },
  })
  return res.json(users)
}

const createUser = async (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Please provide name and email' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  })

  return res.status(201).json({ user })
}

module.exports = { getAllUsers, getSingleUser, createUser }
