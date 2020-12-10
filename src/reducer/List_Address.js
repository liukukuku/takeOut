import { 
    List_Address,
} from '@/constants/actionTypes'
const initialState = {
    str:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case List_Address:
        return { ...state, str:payload }
    default:
        return state
    }
}
