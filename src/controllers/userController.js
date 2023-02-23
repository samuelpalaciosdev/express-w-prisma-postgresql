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

module.exports = { getAllUsers, getSingleUser }
