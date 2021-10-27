const todos = [
  {text: 'Feed llama', done: true, _id: 125223},
  {text: 'Sleep under the stars', done: false, _id: 127904},
  {text: 'Buy milk', done: false, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const todo = todos.find(todo => todo._id === parseInt(id))
    if (!todo) throw new Error ('No todo was found')
    return callback(null, todo)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(todo, callback) {
  console.log(todo)
  todo._id = Date.now() % 1000000
  todo.done = false
  console.log(todo)
  todos.push(todo)
  return callback(null, todo)
}

export { 
	find,
  findById,
  create,
}