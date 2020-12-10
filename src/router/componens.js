import Loadable from '@@/Loadable'
const My = Loadable(() => import('@/pages/my'))
const Order = Loadable(() => import('@/pages/order'))
const Search = Loadable(() => import('@/pages/search'))
const Takeout = Loadable(() => import('@/pages/takeOut'))
const HomePage = Loadable(() => import('@/pages/homePage'))
const Login = Loadable(() => import('@/pages/login'))
const SearchCity = Loadable(() => import('@/pages/searchCity'))

export {
  My,
  Order,
  Search,
  Takeout,
  HomePage,
  Login,
  SearchCity
}
