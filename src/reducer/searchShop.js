import { 
    SEARCH_SHOPS,
} from '@/constants/actionTypes'
const initialState = {
    list:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SEARCH_SHOPS:
        console.log(payload)
        return { ...state, list:payload.data }

    default:
        return state
    }
}
