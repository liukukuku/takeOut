import Loadable from '@@/Loadable'
const My = Loadable(() => import('@/pages/my'))
const Order = Loadable(() => import('@/pages/order'))
const Search = Loadable(() => import('@/pages/search'))
const Takeout = Loadable(() => import('@/pages/takeOut'))

export {
  My,
  Order,
  Search,
  Takeout
}
