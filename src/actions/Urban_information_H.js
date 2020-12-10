import { 
    CITY_SEARCH_MESSAGE,
} from '@/constants/actionTypes'

import { get } from '@/utils/request'
import api from '@/services/api'

export function SearchMes(id) {
    // console.log(id)
    return {
        type: CITY_SEARCH_MESSAGE,
        payload: get(api.SearchMes+"/"+id)
    }
}