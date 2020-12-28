import { 
    SEARCH_FOOTLIST,
} from '@/constants/actionTypes'

import { get } from '@/utils/request'
import api from '@/services/api'

export function SearchFoot(str) {
    // console.log(str)
    return {
        type:SEARCH_FOOTLIST,
        payload: get(api.SearchFootList+str)
    }
}