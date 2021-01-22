export const initialState = {
    avatar:'',
    firstName:'',
    lastName:'',
    coins: 0
}

export const UserReducer = (state:any, action:any) => {
    switch(action.type){
        case 'setUser':
            return {
                ...state, 
                avatar: action.payload.avatar,
                firstName: action.payload.firstName,
                firstLast: action.payload.firstLast,
                coins: action.payload.coins,
            }
        default:
            return state;
    }
}