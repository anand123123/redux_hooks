export const counterReducer = (state = null, action) => {
    console.log(action)
    switch (action.type){
        case 'INCREMENT':
            return action.payload.id;
        default:
            return state
    }
};