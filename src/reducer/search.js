import { 
    CITY_SEARCH_MESSAGE,
} from '@/constants/actionTypes'

const initialState = {
    val:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CITY_SEARCH_MESSAGE:
        // console.log(payload.data)
        return { ...state, val:payload.data }

    default:
        return state
    }
}
