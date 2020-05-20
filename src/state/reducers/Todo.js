const initState = ['eat'];

const addTodoReducer = (state= initState, action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            const newState = [...state, action.payload];
            return newState;
        case 'DELETE_TODO':
            return state;
        default:
            return state
    }
};

export default addTodoReducer;