const getAllTasks = async (req, res) => {
  res.status(200).json({ status: 'success', msg: 'Fetching all the tasks :p' })
}
const getSingleTask = async (req, res) => {
  res.status(200).json({ status: 'success', msg: 'Fetching single task :p' })
}
const createTask = async (req, res) => {
  res.status(201).json({ status: 'success', msg: 'Task created :D' })
}
const updateTask = async (req, res) => {
  res.status(200).json({ status: 'success', msg: 'Task updated :u' })
}
const deleteTask = async (req, res) => {
  res.status(200).json({ status: 'success', msg: 'Task deleted :d' })
}

module.exports = { getAllTasks, getSingleTask, createTask, updateTask, deleteTask }
