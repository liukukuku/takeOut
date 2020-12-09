import {
  HOME_PAGE_GUESS,
  HOME_PAGE_HOT,
  HOME_PAGE_GROUP
} from '@/constants/actionTypes'

const initialState = {
  val: {},
  val1: {},
  val2: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case HOME_PAGE_GUESS:
      return { ...state, val: payload.data }

    case HOME_PAGE_HOT:
      return { ...state, val1: payload.data }

    case HOME_PAGE_GROUP:
      var crr = []
      if (payload.data.length != 0) {
        for (var i in payload.data) {
          let arr = {}
          arr.name = i
          let brr = []
          for (var j = 0; j < payload.data[i].length; j++) {
            brr.push(payload.data[i][j])
          }
          arr.data = brr
          crr.push(arr)
        }
      }

      let drr = crr.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
      return { ...state, val2: drr }

    default:
      return state
  }
}
