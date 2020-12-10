import { 
    List_Address,
} from '@/constants/actionTypes'

export function ListAddress(str) {
    
    return {
        type:List_Address,
        payload: str
    }
}