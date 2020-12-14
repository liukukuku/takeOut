import { 
    SEARCH_SHOPS,
} from '@/constants/actionTypes'

import { get } from '@/utils/request'
import api from '@/services/api'

export function ShopList(str) {
    console.log(str)
    return {
        type:SEARCH_SHOPS,
        payload: ''
    }
}