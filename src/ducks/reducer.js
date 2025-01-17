// INITIAL STATE
const initialState = {
    username: '',
    password: '',
    profilePic: '',
    id: 0
}

// ACTION CONSTS
const GET_USER = 'GET_USER'

// ACTION BUILDERS
export const getUser = (userObj) => {
    return{
        type: GET_USER,
        payload: userObj
    }
}

// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {...state, 
                username: action.payload.username, 
                password: action.payload.password, 
                profilePic: action.payload.profile_pic,
                id: action.payload.id}
        default: return state
    }
}

export default reducer