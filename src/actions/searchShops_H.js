import { 
    SEARCH_SHOPS,
} from '@/constants/actionTypes'

import { get } from '@/utils/request'
import api from '@/services/api'

export function Searchshops(str) {
    // console.log(api.Searchshops+"?"+str)
    return {
        type:SEARCH_SHOPS,
        payload: get(api.Searchshops+"?"+str)
    }
}