const initalData = {
    list: []
}
const TodoReducers = (state = initalData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TODO":
            const newList = state.list.filter((elem) => elem.id !== action.payload.id)
            return {
                ...state,
                list : newList
            }
            case "REMOVE_TODO":
            state.list = [];
            return{
                ...state
            }
            default: return state;
    }
}
export default TodoReducers;