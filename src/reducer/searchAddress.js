import { 
    CITY_SEARCH_Address,
} from '@/constants/actionTypes'
const initialState = {
    souval:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CITY_SEARCH_Address:
        return { ...state, souval:payload.data }

    default:
        return state
    }
}
