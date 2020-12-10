import { 
    CITY_SEARCH_Address,
} from '@/constants/actionTypes'

import { get } from '@/utils/request'
import api from '@/services/api'

export function SearchAdd(str) {
    // console.log(str)
    return {
        type:CITY_SEARCH_Address,
        payload: get(api.SearchAddress+str)
    }
}