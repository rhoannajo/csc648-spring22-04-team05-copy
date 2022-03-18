const INITIAL_STATE = {
    items: []
}

const deleteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DELETE_TASK":
            console.log(action.payload)
            const newState = action.payload;
            return {
                ...state, items: newState
            };
        default:
            return state;
    }
}

export default deleteReducer