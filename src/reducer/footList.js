import { 
    SEARCH_FOOTLIST,
} from '@/constants/actionTypes'
const initialState = {
    arr:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEARCH_FOOTLIST:
        // console.log(payload)
        
        return { ...state, arr:payload.data }

    default:
        return state
    }
}
