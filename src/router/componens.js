import Loadable from '@@/Loadable'
const My = Loadable(() => import('@/pages/my'))
const Order = Loadable(() => import('@/pages/order'))
const Search = Loadable(() => import('@/pages/search'))
const Takeout = Loadable(() => import('@/pages/takeOut'))
const Login = Loadable(() => import('@/pages/login'))

export {
  My,
  Order,
  Search,
  Takeout,
  Login
}
