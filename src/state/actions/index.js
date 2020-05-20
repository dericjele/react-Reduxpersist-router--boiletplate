const addTodo = (payload) =>{
  return{
      type:"ADD_TODO",
      payload
  }
};

export default addTodo