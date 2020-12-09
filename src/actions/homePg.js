import { 
    HOME_PAGE_GUESS,
    HOME_PAGE_HOT,
    HOME_PAGE_GROUP
} from '@/constants/actionTypes'

import { get } from '@/utils/request'
import api from '@/services/api'

export function HomePgs(pot) {

    return {
        type: HOME_PAGE_GUESS,
        payload: get(api.homePages+"?"+pot)
    }
}
export function HomePgs1(pot) {

    return {
        type: HOME_PAGE_HOT,
        payload: get(api.homePages+"?"+pot)
    }
}
export function HomePgs2(pot) {
    
    return {
        type: HOME_PAGE_GROUP,
        payload: get(api.homePages+"?"+pot)
    }
}