

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'Increment') {
        return {
            ...state,
            count: state.count +1
        }
    }else if (action.type ==='Decrement') {
        return {
            ...state,
            count: state.count -1
        }
    } else if (action.type === 'ADD') {
        return {
            ...state,
            count: state.count + action.payload
        }
    } else if (action.type === 'Substarct') {
        return {
            ...state,
            count: state.count - action.payload
        }
    }
    return state
}


export default reducer